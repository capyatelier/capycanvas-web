import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir,readFile,writeFile,rm,stat } from 'node:fs/promises';
import { join } from 'node:path';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { fixedLanguages,languageSwitcher,messageReader,locales } from './capture/languages.mjs';
import { applyTheme,settled } from './capture/shoot.mjs';
import { clock,metrics } from './capture/demo/motion.mjs';
import { route } from './capture/demo/paint-motion.mjs';
import { pointerEvents,installPointer,readPointer } from './capture/demo/pointer.mjs';

const locale=process.env.DEMO_LOCALE||'en',theme=process.env.DEMO_THEME||'light';
assert.ok(locales.includes(locale));assert.ok(['light','dark'].includes(theme));
const output=process.env.DEMO_OUTPUT||`artifacts/paint-demos/${locale}-${theme}`;
const prepared=JSON.parse(await readFile('artifacts/capture-app.json','utf8'));
const recorded=JSON.parse(await readFile('site/scripts/capture/demo/paint-strokes.json','utf8'));
await mkdir(`${output}/frames`,{recursive:true});
const host=await serve(0,prepared.directory);
const b=await browser({gpu:true,headless:process.env.CAPTURE_BROWSER_MODE!=='wayland',width:1920,height:1080,scale:1});
const frames=[],writes=[],errors=[],stages=[],motions=[],contacts=[],strokes=[],keys=[];
let cursor=[1190,720],started,recording=false,pressed=null;
const hold=seconds=>new Promise(resolve=>setTimeout(resolve,seconds*1000));
const now=()=>Date.now()/1000-started;
const saveFrame=(data,at)=>{
  const file=`frames/${String(frames.length).padStart(6,'0')}.png`;
  frames.push({file,at});
  writes.push(writeFile(`${output}/${file}`,Buffer.from(data,'base64')).catch(error=>errors.push(String(error))));
};
b.on('Page.screencastFrame',({data,metadata,sessionId})=>{
  if(recording)saveFrame(data,metadata.timestamp??Date.now()/1000);
  b.call('Page.screencastFrameAck',{sessionId}).catch(error=>errors.push(String(error)));
});

try{
  await b.call('Page.addScriptToEvaluateOnNewDocument',{source:fixedLanguages+pointerEvents});
  await b.navigate(host.url);
  const e=await editor(b);
  await languageSwitcher(b).use(locale);
  const message=await messageReader(join(prepared.directory,'../../assets/locales'));
  await applyTheme(b,theme);
  await e.workspace('illustrator');
  await e.provide('house.png',await readFile('site/scripts/capture/showcase/house.png'));
  await e.open('house.png');
  await e.invoke('brush');
  await e.send({type:'select_brush_set',group:'oil'});
  await e.send({type:'select_brush',id:22});
  await e.send({type:'set_brush_size',value:64});
  await e.send({type:'set_brush_opacity',value:.92});
  await e.setColor('#86c5ea');
  await e.show('color');
  await e.select('house');
  await e.send({type:'preferences',action:{type:'edit',id:'hide_cursor_while_drawing',value:false}});
  await settled(b);
  await b.screenshot(`${output}/poster-1080p.png`);
  await b.evaluate(installPointer);

  const camera=await e.read('layerApp.state().camera');
  assert.equal(camera.rotation,0);assert.deepEqual(camera.flipped,[false,false]);
  const ratio=camera.viewport[0]/await e.read('innerWidth');
  const screen=([x,y])=>[(camera.translation[0]+x*camera.zoom)/ratio,(camera.translation[1]+y*camera.zoom)/ratio];

  const send=(device,type,{force=0,tilt=[0,0]}={})=>{
    const [x,y]=cursor;
    if(device==='touch')return b.call('Input.dispatchTouchEvent',{type:{down:'touchStart',move:'touchMove',up:'touchEnd'}[type],touchPoints:type==='up'?[]:[{x,y,id:1,radiusX:6,radiusY:6,force:1}]});
    const down=type==='down'||(type==='move'&&!!pressed);
    return b.call('Input.dispatchMouseEvent',{type:{down:'mousePressed',move:'mouseMoved',up:'mouseReleased'}[type],x,y,button:type==='move'&&!down?'none':'left',buttons:down?1:0,clickCount:type==='move'?0:1,pointerType:device,...(device==='pen'?{force:type==='up'?0:force,tiltX:tilt[0],tiltY:tilt[1]}:{})});
  };
  const press=async(device='mouse',options)=>{
    assert.equal(pressed,null);
    await send(device,'down',options);
    pressed=device;contacts.push({type:'down',device,at:now(),position:[...cursor]});
  };
  const release=async()=>{
    assert.ok(pressed);
    const device=pressed;await send(device,'up');
    pressed=null;contacts.push({type:'up',device,at:now(),position:[...cursor]});
  };
  const click=async(seconds=.085)=>{await press();await hold(seconds);await release();};
  const move=async(name,to,{path,releaseAt,device=pressed??'mouse'}={})=>{
    const from=[...cursor],begin=performance.now(),initiallyPressed=!!pressed;
    const {cue,path:position}=route(from,to,name,path),samples=[];
    assert.ok(!motions.some(m=>m.name===name));
    assert.ok(device!=='touch'||pressed==='touch','A finger only travels on the glass');
    for(;;){
      const t=Math.min(1,(performance.now()-begin)/(cue.seconds*1000)),amount=clock(t,cue.clock);
      cursor=position(amount);
      assert.ok(cursor.every(Number.isFinite)&&cursor[0]>=0&&cursor[0]<1920&&cursor[1]>=0&&cursor[1]<1080,`In-frame gesture ${name}`);
      await send(device,'move');
      samples.push({at:now(),x:cursor[0],y:cursor[1],pressed:!!pressed});
      if(releaseAt!==undefined&&amount>=releaseAt&&pressed)await release();
      if(t===1)break;
      await hold(.014);
    }
    motions.push({name,device,initiallyPressed,seconds:cue.seconds,start:samples[0].at,end:samples.at(-1).at,from,to:[...cursor],...metrics(samples),samples});
  };
  const replay=async(name,stroke)=>{
    const points=stroke.points.map(([t,x,y,force,tx,ty])=>({t,at:screen([x,y]),force,tilt:[tx,ty]}));
    assert.ok(Math.hypot(cursor[0]-points[0].at[0],cursor[1]-points[0].at[1])<1,`${name} starts where the pen hovers`);
    await press('pen',points[0]);
    const begin=performance.now(),duration=points.at(-1).t,samples=[];
    for(let k=0;;){
      const t=Math.min(duration,(performance.now()-begin)/1000);
      while(k<points.length-2&&points[k+1].t<=t)k++;
      const a=points[k],z=points[k+1],f=z.t>a.t?Math.min(1,(t-a.t)/(z.t-a.t)):1;
      cursor=a.at.map((v,i)=>v+(z.at[i]-v)*f);
      assert.ok(cursor[0]>=0&&cursor[0]<1920&&cursor[1]>=0&&cursor[1]<1080,`In-frame stroke ${name}`);
      const force=a.force+(z.force-a.force)*f,tilt=a.tilt.map((v,i)=>Math.round(v+(z.tilt[i]-v)*f));
      if(t===duration)break;
      await send('pen','move',{force,tilt});
      samples.push({at:now(),x:cursor[0],y:cursor[1],force});
      await hold(.008);
    }
    await release();
    strokes.push({name,start:samples[0].at,end:samples.at(-1).at,recordedSeconds:duration,events:samples.length,from:points[0].at,to:points.at(-1).at});
  };
  const rect=selector=>e.read(`(()=>{const n=[...document.querySelectorAll(${JSON.stringify(selector)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0);if(!n)throw Error('Missing '+${JSON.stringify(selector)});const r=n.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,center:[r.x+r.width/2,r.y+r.height/2],value:n.value}})()`);
  const find=(scope,text,outside)=>`[...document.querySelectorAll(${JSON.stringify(scope+' *')})].find(n=>n.checkVisibility()&&!n.closest(${JSON.stringify(outside)})&&[...n.childNodes].some(c=>c.nodeType===3&&c.nodeValue.trim()===${JSON.stringify(text)}))`;
  const labelled=(scope,text,outside='#none')=>e.read(`(()=>{const n=${find(scope,text,outside)};if(!n)throw Error('Missing '+${JSON.stringify(text)});const r=(n.closest('button,[role=menuitem]')||n).getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]})()`);
  const layout=()=>e.read('layerApp.app.layout(innerWidth,innerHeight)');
  const group=panel=>layout().then(l=>l.groups.find(g=>g.panels.includes(panel)));
  const layerId=label=>e.read(`layerApp.state().layers.find(l=>l.label===${JSON.stringify(label)})?.id??null`);
  const thumb=async label=>{const s=await rect(`input.number-slider[aria-label="${label}"]`);return {...s,at:v=>[s.x+s.width*v,s.center[1]],thumb:[s.x+s.width*Number(s.value),s.center[1]]};};
  const stage=async(name,extra={})=>{
    const at=now();
    const state=await e.read(`({brush:layerApp.state().brush,layers:layerApp.state().layers.map(l=>l.label),pointer:${readPointer}})`);
    stages.push({name,at,...extra,state});console.log(`${at.toFixed(2)} s: ${name}`);
  };

  started=Date.now()/1000;recording=true;
  await b.call('Page.startScreencast',{format:'png',maxWidth:1920,maxHeight:1080,everyNthFrame:1});
  while(!frames.length)await hold(.02);
  await hold(.85);
  await stage('original-hero');

  const blend=await e.read(`(()=>{const label=layerApp.state().commands.find(c=>c.id==='blend').label,n=[...document.querySelectorAll('.tool-strip button')].find(n=>n.getAttribute('aria-label')===label);if(!n)throw Error('Missing Blend tool');const r=n.getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]})()`);
  await move('approach-blend',[blend[0]+2,blend[1]+3]);await click(.08);
  await e.wait("layerApp.state().brush.tool==='blend'");
  await stage('blend-tool');await hold(.3);
  const effects=await labelled('.dock-group',message('tool-group-effects',locale));
  await move('choose-effects',[effects[0]-40,effects[1]+2]);await click(.08);
  await e.wait('layerApp.state().brush.preset===50');
  await hold(.22);
  const painterly=await labelled('.dock-group',message('brush-preset-painterly-blender',locale));
  await move('choose-painterly',[painterly[0]-24,painterly[1]-14]);await click(.08);
  await e.wait('layerApp.state().brush.preset===50&&layerApp.app.brush_ready()');
  assert.equal(await e.read("!!document.querySelector(':popover-open,dialog[open]')"),false,'Choosing the selected blender opens nothing');
  await stage('painterly-selected');await hold(.26);

  const sizeLabel=message('tool-setting-size',locale);
  let size=await thumb(sizeLabel);
  await move('approach-size',size.thumb);await press();
  await move('size-painterly',size.at(.8507),{releaseAt:1});
  const painterlySize=await e.read('layerApp.state().brush.diameter');
  assert.ok(Math.abs(painterlySize-592)<=12,`Painterly size near 592: ${painterlySize}`);
  await stage('painterly-size',{size:painterlySize});await hold(.22);

  const [first,second,third,fourth,loop,edge]=recorded.strokes;
  await move('approach-sky',screen(first.points[0].slice(1,3)),{device:'pen'});await hold(.06);
  await replay('painterly-1',first);
  await move('hover-painterly-2',screen(second.points[0].slice(1,3)),{device:'pen'});
  await replay('painterly-2',second);
  await move('hover-painterly-3',screen(third.points[0].slice(1,3)),{device:'pen'});
  await replay('painterly-3',third);
  await move('hover-painterly-4',screen(fourth.points[0].slice(1,3)),{device:'pen'});
  await replay('painterly-4',fourth);
  await stage('blue-sky-blended');await hold(.22);

  const tileSelector='.dock-group';
  const crystalName=message('brush-preset-crystal-blender',locale);
  const scroller=await rect('.brushes-panel');
  const crystalTile=await labelled(tileSelector,crystalName);
  const reach=Math.max(0,crystalTile[1]+44-(scroller.y+scroller.height));
  const scrollFrom=[scroller.center[0]+6,scroller.y+scroller.height-34];
  await move('approach-tool-set',scrollFrom);
  await press('touch');
  await move('scroll-tool-set',[scrollFrom[0]+4,scrollFrom[1]-reach-6],{releaseAt:1});
  await hold(.08);
  const crystal=await labelled(tileSelector,crystalName);
  await move('choose-crystal',[crystal[0]-30,crystal[1]-16]);await click(.08);
  await e.wait('layerApp.state().brush.preset===51&&layerApp.app.brush_ready()');
  await stage('crystal-selected',{scrolled:reach});await hold(.22);

  size=await thumb(sizeLabel);
  await move('approach-size-crystal',size.thumb);await press();
  await move('size-crystal',size.at(.8069),{releaseAt:1});
  const crystalSize=await e.read('layerApp.state().brush.diameter');
  assert.ok(Math.abs(crystalSize-411)<=10,`Crystal size near 411: ${crystalSize}`);
  await stage('crystal-size',{size:crystalSize});await hold(.2);

  await move('approach-sun',screen(loop.points[0].slice(1,3)),{device:'pen'});await hold(.05);
  await replay('crystal-1',loop);
  await move('hover-crystal-2',screen(edge.points[0].slice(1,3)),{device:'pen'});
  await replay('crystal-2',edge);
  await stage('pink-sky-crystal');await hold(.22);

  const columns=await layout(),toolSet=columns.groups.find(g=>g.panels.includes('brushes')).bounds;
  const columnEdge=columns.dividers.find(d=>d.band&&Math.abs(d.bounds.x-(toolSet.x+toolSet.width))<1);
  assert.ok(columnEdge,'Tool Set column edge');
  await move('approach-column-edge',[columnEdge.bounds.x+columnEdge.bounds.width/2,610]);await press();
  await move('close-column',[64,606],{releaseAt:1});
  await e.wait("layerApp.app.layout(innerWidth,innerHeight).collapsed.some(c=>c.groups.some(g=>g.group===6)&&!c.open)");
  await stage('column-closed');await hold(.22);

  const filtersTab=await rect('.dock-tab[data-panel="adjustments"]');
  await move('approach-filters',[filtersTab.center[0]-6,filtersTab.center[1]+3]);await click(.08);
  await e.wait(`layerApp.app.layout(innerWidth,innerHeight).groups.find(g=>g.panels.includes('adjustments')).active==='adjustments'`);
  await stage('filters-panel');await hold(.22);
  const panel=(await group('adjustments')).bounds,properties=(await group('properties')).bounds;
  const panelEdge=(await layout()).dividers.find(d=>!d.band&&Math.abs(d.bounds.y+d.bounds.height-panel.y)<1&&Math.abs(d.bounds.x-panel.x)<1);
  assert.ok(panelEdge,'Filters panel top edge');
  const edgeX=panelEdge.bounds.x+panelEdge.bounds.width/2;
  await move('approach-panel-edge',[edgeX+10,panelEdge.bounds.y+panelEdge.bounds.height/2]);await press();
  await move('raise-panel',[edgeX+16,properties.y+228],{releaseAt:1});
  const raised=(await group('adjustments')).bounds;
  assert.ok(raised.y<panel.y-40,'The Filters panel grows upward');
  await stage('filters-raised',{from:panel,to:raised});await hold(.25);

  const searchField='.filter-picker-header input[type=search]';
  const typeLetter=async character=>{
    await b.call('Input.insertText',{text:character});
    keys.push({at:now(),text:character});
    await hold([.12,.09,.14,.1,.11][keys.length%5]);
  };
  const filter=async(id,key,cue,offset)=>{
    const name=message(key,locale),letters=[...name.toLocaleLowerCase(locale)];
    const inView=`(()=>{const list=document.querySelector('.filter-picker-list'),row=list.querySelector('.filter-row[data-effect="${id}"]');if(!row?.checkVisibility())return false;const a=list.getBoundingClientRect(),r=row.getBoundingClientRect();return r.top>=a.top&&r.bottom<=a.bottom})()`;
    for(let typed=0;typed<letters.length&&(typed<5||!await e.read(inView));typed++)await typeLetter(letters[typed]);
    await e.wait(inView);await hold(.26);
    const choice=await rect(`.filter-row[data-effect="${id}"]`);
    await move(cue,[choice.center[0]+offset[0],choice.center[1]+offset[1]]);await click(.08);
    await e.wait(`layerApp.state().layers.some(l=>l.label===${JSON.stringify(name)})`);
    return name;
  };
  const clear=async cue=>{
    const field=await rect(searchField);
    await move(cue,[field.x+field.width-15,field.center[1]]);await click(.08);
    await e.wait(`document.querySelector('${searchField}').value===''`);await hold(.16);
  };
  const search=await rect('.filter-picker-header button');
  await move('approach-search',[search.center[0]-2,search.center[1]+2]);await click(.08);
  await e.wait(`document.activeElement?.matches('${searchField}')`);await hold(.22);
  const posterize=await filter('posterize','resources-filter-posterize','choose-posterize',[40,-6]);
  await stage('posterize-added');await hold(.55);
  await clear('approach-clear-posterize');
  await filter('crosshatch','resources-filter-crosshatch','choose-crosshatch',[36,-4]);
  await stage('crosshatch-added');await hold(.55);
  await clear('approach-clear-crosshatch');
  await filter('glass','resources-filter-glass','choose-glass',[38,-5]);
  const distortionLabel=message('resources-parameter-glass-distance',locale);
  await e.b.until(`[...document.querySelectorAll('input.number-slider[aria-label="${distortionLabel}"]')].some(n=>n.checkVisibility())`,10000);
  await stage('glass-added');await hold(.4);

  const distortionValue=()=>e.read("layerApp.state().layer_properties.controls.find(c=>c.key==='distance').value.value");
  const slider=await thumb(distortionLabel),original=await distortionValue();
  assert.ok(slider.y+slider.height<=properties.y+228,'Glass Distortion stays in view');
  await move('approach-distortion',slider.at(Number(slider.value)*2));await click(.08);
  const distortion=await distortionValue();
  assert.ok(Math.abs(distortion/original-2)<.15,`Distortion roughly doubles: ${original} -> ${distortion}`);
  await stage('glass-distorted',{original,distortion});await hold(.6);

  const layersTab=await rect('.dock-tab[data-panel="layers"]');
  await move('approach-layers-tab',[layersTab.center[0]+4,layersTab.center[1]+2]);await click(.08);
  await e.wait(`layerApp.app.layout(innerWidth,innerHeight).groups.find(g=>g.panels.includes('layers')).active==='layers'`);
  await stage('layers-panel');await hold(.3);

  const posterizeLayer=await layerId(posterize);
  const row=await rect(`#layer-rows .layer-row[data-layer="${posterizeLayer}"]`);
  const swipeFrom=[row.x+row.width-36,row.center[1]+1];
  await move('approach-posterize-row',swipeFrom);
  await press('touch');
  await move('swipe-posterize',[swipeFrom[0]-236,swipeFrom[1]-3],{releaseAt:1});
  await e.wait(`(()=>{const n=document.querySelector('#layer-rows .layer-row[data-layer="${posterizeLayer}"]').closest('.layer-swipe').querySelector('.layer-swipe-delete');return n&&n.checkVisibility()&&!n.closest('[inert]')})()`);
  await hold(.18);
  const remove=await e.read(`(()=>{const r=document.querySelector('#layer-rows .layer-row[data-layer="${posterizeLayer}"]').closest('.layer-swipe').querySelector('.layer-swipe-delete').getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]})()`);
  await move('choose-delete',[remove[0]+2,remove[1]+2]);await click(.08);
  await e.wait(`!layerApp.state().layers.some(l=>l.id===${posterizeLayer})`);
  await stage('posterize-deleted');await hold(.95);
  await stage('final');

  await b.call('Page.stopScreencast');recording=false;
  const last=await b.call('Page.captureScreenshot',{format:'png'});
  saveFrame(last.data,Date.now()/1000);
  await Promise.all(writes);
  assert.deepEqual(errors,[]);assert.deepEqual(b.errors,[]);
  assert.equal(pressed,null);
  frames.sort((a,b)=>a.at-b.at);
  const unique=frames.filter((f,i)=>!i||f.at>frames[i-1].at);
  const concat=['ffconcat version 1.0'];
  for(let i=0;i<unique.length;i++){
    concat.push(`file '${unique[i].file}'`,`duration ${i+1<unique.length?(unique[i+1].at-unique[i].at).toFixed(6):'0.041667'}`);
  }
  concat.push(`file '${unique.at(-1).file}'`);
  await writeFile(`${output}/frames.ffconcat`,concat.join('\n')+'\n');

  for(const m of motions.filter(m=>!m.initiallyPressed)){
    assert.ok(m.backtracking<.1,`${m.name}: no artificial correction`);
    assert.ok(!(m.minSide<-.1&&m.maxSide>.1),`${m.name}: no alternating S bends`);
  }
  const pointer=await b.evaluate(readPointer);
  assert.equal(pointer.visible,true);assert.equal(pointer.border,'0px');assert.equal(pointer.clip,'circle(50%)');
  const duration=unique.at(-1).at-unique[0].at;
  const {directory,...source}=prepared;
  await writeFile(`${output}/capture.json`,JSON.stringify({width:1920,height:1080,locale,theme,source,strokes:recorded.source,painterlySize,crystalSize,frames:unique.length,firstFrameAt:unique[0].at-started,duration,stages,errors:b.errors},null,2)+'\n');
  await writeFile(`${output}/motion-audit.json`,JSON.stringify({motions,contacts,strokes,keys,movingSeconds:motions.reduce((n,m)=>n+m.end-m.start,0),strokeSeconds:strokes.reduce((n,s)=>n+s.end-s.start,0),duration},null,2)+'\n');
  console.log(`Captured ${duration.toFixed(2)} s, ${unique.length} frames`);
}catch(error){
  recording=false;await b.call('Page.stopScreencast').catch(()=>{});await Promise.all(writes);
  await b.screenshot(`${output}/capture-failure.png`).catch(()=>{});
  await writeFile(`${output}/capture-failure.json`,await b.evaluate("JSON.stringify({state:layerApp.state(),layout:layerApp.app.layout(innerWidth,innerHeight)},(_,v)=>typeof v==='bigint'?Number(v):v)").catch(()=>'{}'));
  throw error;
}finally{await b.close();await host.close();}

const capture=JSON.parse(await readFile(`${output}/capture.json`,'utf8'));
await new Promise((resolve,reject)=>{
  const offset=Math.max(0,capture.duration-.32).toFixed(6);
  const filters=`[0:v]fps=24,format=yuv420p,setsar=1,settb=AVTB,setpts=PTS-STARTPTS[body];[1:v]format=yuv420p,setsar=1,settb=AVTB,setpts=PTS-STARTPTS[poster];[body][poster]xfade=transition=fade:duration=0.22:offset=${offset}[video]`;
  const child=spawn('ffmpeg',['-hide_banner','-loglevel','warning','-y','-f','concat','-safe','0','-i',`${output}/frames.ffconcat`,'-loop','1','-framerate','24','-i',`${output}/poster-1080p.png`,'-filter_complex',filters,'-map','[video]','-r','24','-t',String(capture.duration),'-an','-c:v','libvpx-vp9','-crf','30','-b:v','1400k','-deadline','good','-cpu-used','2','-row-mt','1','-threads','8','-g','9999',`${output}/paint-demo-1080p.webm`],{stdio:['ignore','ignore','inherit']});
  child.on('error',reject);
  child.on('exit',code=>code===0?resolve():reject(new Error(`ffmpeg exited ${code}`)));
});
const bytes=(await stat(`${output}/paint-demo-1080p.webm`)).size;
await writeFile(`${output}/video.json`,JSON.stringify({width:1920,height:1080,fps:24,duration:capture.duration,locale,theme,files:[{file:'paint-demo-1080p.webm',bytes}]},null,2)+'\n');
console.log(JSON.stringify({file:'paint-demo-1080p.webm',bytes}));
if(process.env.DEMO_KEEP_FRAMES!=='1')await rm(`${output}/frames`,{recursive:true});
