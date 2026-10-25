import assert from 'node:assert/strict';
import { mkdir,readFile,writeFile,rm } from 'node:fs/promises';
import { join } from 'node:path';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { fixedLanguages,languageSwitcher,messageReader,locales } from './capture/languages.mjs';
import { applyTheme,settled } from './capture/shoot.mjs';
import { route,clock,metrics } from './capture/demo/motion.mjs';
import { pointerEvents,installPointer,readPointer } from './capture/demo/pointer.mjs';

import { encode } from './capture/demo/encode.mjs';

const locale=process.env.DEMO_LOCALE||'en',theme=process.env.DEMO_THEME||'light';
assert.ok(locales.includes(locale));assert.ok(['light','dark'].includes(theme));
const output=process.env.DEMO_OUTPUT||`artifacts/sketch-demos/${locale}-${theme}`;
const prepared=JSON.parse(await readFile('artifacts/capture-app.json','utf8'));
await mkdir(`${output}/frames`,{recursive:true});
const host=await serve(0,prepared.directory);
const b=await browser({gpu:true,headless:process.env.CAPTURE_BROWSER_MODE!=='wayland',width:1920,height:1080,scale:1});
const frames=[],writes=[],errors=[],stages=[],motions=[],contacts=[];
let cursor=[1660,100],started,recording=false,pressed=false;
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
  await e.workspace('painter');
  await e.provide('spring.png',await readFile('site/scripts/capture/showcase/spring.png'));
  await e.open('spring.png');
  await e.frame(.96,[1000,912]);
  await e.setColor('#000000');
  await settled(b);
  await b.screenshot(`${output}/poster-1080p.png`);
  await b.evaluate(installPointer);

  const press=async()=>{
    await b.call('Input.dispatchMouseEvent',{type:'mousePressed',x:cursor[0],y:cursor[1],button:'left',buttons:1,clickCount:1,pointerType:'mouse'});
    pressed=true;contacts.push({type:'down',at:now(),position:[...cursor]});
  };
  const release=async()=>{
    assert.equal(pressed,true);
    await b.call('Input.dispatchMouseEvent',{type:'mouseReleased',x:cursor[0],y:cursor[1],button:'left',buttons:0,clickCount:1,pointerType:'mouse'});
    pressed=false;contacts.push({type:'up',at:now(),position:[...cursor]});
  };
  const click=async(seconds=.085)=>{await press();await hold(seconds);await release();};
  const move=async(name,to,{path,releaseAt}={})=>{
    const from=[...cursor],begin=performance.now(),initiallyPressed=pressed;
    const {cue,path:position}=route(from,to,name,path),samples=[];
    assert.ok(!motions.some(m=>m.name===name));
    for(;;){
      const t=Math.min(1,(performance.now()-begin)/(cue.seconds*1000)),amount=clock(t,cue.clock);
      cursor=position(amount);
      assert.ok(cursor.every(Number.isFinite)&&cursor[0]>=0&&cursor[0]<1920&&cursor[1]>=0&&cursor[1]<1080,`In-frame gesture ${name}`);
      await b.call('Input.dispatchMouseEvent',{type:'mouseMoved',x:cursor[0],y:cursor[1],button:pressed?'left':'none',buttons:pressed?1:0,pointerType:'mouse'});
      samples.push({at:now(),x:cursor[0],y:cursor[1],pressed});
      if(releaseAt!==undefined&&amount>=releaseAt&&pressed)await release();
      if(t===1)break;
      await hold(.014);
    }
    motions.push({name,initiallyPressed,seconds:cue.seconds,start:samples[0].at,end:samples.at(-1).at,from,to:[...cursor],...metrics(samples),samples});
  };
  const center=selector=>e.read(`(()=>{const n=document.querySelector(${JSON.stringify(selector)});if(!n)throw Error('Missing '+${JSON.stringify(selector)});const r=n.getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]})()`);
  const bubbleCenter=id=>center(`.tool-bubble[data-bubble="${id}"] .bubble-face`);
  const view=id=>e.read(`layerApp.app.bubbles().find(p=>p.view.id===${id})`);
  // Metadata only: no screenshots or geometry-settling inspections on the timeline.
  const stage=async(name,extra={})=>{
    const at=now();
    const state=await e.read(`({zen:layerApp.state().workspace.zen_mode,brush:layerApp.state().brush,color:layerApp.app.color_panel().base,bubbles:layerApp.app.bubbles(),pointer:${readPointer}})`);
    stages.push({name,at,...extra,state});console.log(`${at.toFixed(2)} s: ${name}`);
  };
  const take=async(control,to,name)=>{
    const header=await e.read(`layerApp.app.workspace_persistence().layout.header.zones.flat().find(x=>JSON.stringify(x.item.control)===${JSON.stringify(JSON.stringify(control))}).id`);
    const before=await e.read('layerApp.app.bubbles().map(p=>p.view.id)');
    const at=await center(`#header-item-${header}`);
    await move(`approach-${name}`,[at[0]+(name==='wheel'?-3:4),at[1]+2]);
    await press();await move(`carry-${name}`,to);await release();
    await e.wait(`layerApp.app.bubbles().some(p=>!${JSON.stringify(before)}.includes(p.view.id))`);
    return e.read(`layerApp.app.bubbles().find(p=>!${JSON.stringify(before)}.includes(p.view.id)).view.id`);
  };
  const choice=async(id,kind,label,cue,offset,contact)=>{
    const item=(await view(id)).view.chooser.find(x=>x.kind===kind&&x.label===label);
    assert.ok(item,`Visible choice ${label}`);
    const origin=await bubbleCenter(id);
    await move(cue,item.center.map((v,i)=>v+origin[i]+offset[i]));
    await click(contact);return item;
  };

  started=Date.now()/1000;recording=true;
  await b.call('Page.startScreencast',{format:'png',maxWidth:1920,maxHeight:1080,everyNthFrame:1});
  while(!frames.length)await hold(.02);
  await hold(1.5);
  await stage('original-hero');
  const color=await take({kind:'color'},[300,420],'wheel');
  assert.equal((await view(color)).view.diameter,216);
  await stage('color-wheel-placed');await hold(.75);
  const brush=await take({kind:'command',command:'drawing_brush'},[560,260],'pencil');
  await stage('pencil-placed');await hold(.70);

  const zen=await center('#zen-capy');
  await move('approach-zen',[zen[0]+3,zen[1]-2]);await click(.09);
  await e.wait('layerApp.state().workspace.zen_mode');
  await stage('zen-mode');await hold(.90);

  const wheel=await e.read(`(()=>{const r=document.querySelector('.tool-bubble[data-bubble="${color}"] .bubble-wheel').getBoundingClientRect();return {x:r.x,y:r.y,size:r.width}})()`);
  const colors=await e.read('layerApp.app.color_panel()');
  const point=p=>[wheel.x+p[0]*wheel.size,wheel.y+p[1]*wheel.size];
  const disc=(s,v)=>{const a=2*s-1,d=1-2*v,r=colors.geometry.disc_radius;return [.5+r*a*Math.sqrt(1-d*d*.5),.5+r*d*Math.sqrt(1-a*a*.5)];};
  // Set value/saturation first. Hue then visibly changes the actual paint color
  // and finishes outside the wheel, without returning for a second color action.
  await move('approach-field',point([.28,.72]));await press();
  await move('field-pick',point(disc(.75,.86)));await release();await hold(.65);
  const picked=await e.read('layerApp.app.color_panel()');
  await move('approach-hue',point(picked.wheel_hue_marker));await press();
  const hueCenter=point([.5,.5]);
  const startAngle=Math.atan2(picked.wheel_hue_marker[1]-.5,picked.wheel_hue_marker[0]-.5);
  const endAngle=(140+picked.wheel_hue_start_degrees)*Math.PI/180;
  const startRadius=(picked.geometry.inner+picked.geometry.outer)/2*wheel.size;
  await move('hue-sweep',null,{releaseAt:.82,path:t=>{
    const angle=startAngle+(endAngle-startAngle)*Math.min(t/.82,1),radius=startRadius+100*t;
    return [hueCenter[0]+radius*Math.cos(angle),hueCenter[1]+radius*Math.sin(angle)];
  }});
  const hueRelease=contacts.at(-1),hueReleaseRadius=Math.hypot(hueRelease.position[0]-hueCenter[0],hueRelease.position[1]-hueCenter[1]);
  assert.ok(hueReleaseRadius>wheel.size*.5+50,'Hue releases well outside the dial');
  const leafColor=await e.read('layerApp.app.color_panel().base.rgba');
  assert.ok(leafColor[1]>leafColor[0]&&leafColor[1]>leafColor[2]&&leafColor[1]>.65);
  await stage('color-changed',{hueReleaseRadius});await hold(1.0);

  const face=await bubbleCenter(brush);
  await move('open-chooser',[face[0]-4,face[1]+3]);await click(.082);
  await e.wait(`layerApp.app.bubbles().find(p=>p.view.id===${brush}).view.chooser.some(c=>c.kind==='medium')`);
  await hold(.85);
  await stage('medium-chooser');
  await choice(brush,'medium',message('tool-group-pen',locale),'choose-pen',[3,4],.075);
  await e.wait(`layerApp.app.bubbles().find(p=>p.view.id===${brush}).view.chooser.some(c=>c.label===${JSON.stringify(message('brush-preset-blotty-ink',locale))})`);
  await hold(1.10);
  await stage('pen-chooser');
  const selected=await choice(brush,'brush',message('brush-preset-blotty-ink',locale),'choose-blotty',[9,-2],.1);
  await e.wait(`layerApp.state().brush.preset===${selected.preview}&&layerApp.app.brush_ready()`);
  await stage('blotty-ink-selected',{preset:selected.preview});await hold(.90);

  if(!(await view(brush)).view.rings.some(r=>r.enabled)){
    const halo=await bubbleCenter(brush);
    await move('open-halo',[halo[0]+5,halo[1]-3]);await click(.086);
    await e.wait(`layerApp.app.bubbles().find(p=>p.view.id===${brush}).view.rings.some(r=>r.enabled)`);
  }
  await hold(.85);
  const setting=(await view(brush)).view.rings.find(r=>r.setting==='hardness');
  assert.ok(setting);
  const origin=await bubbleCenter(brush);
  const arc=(fraction,radius)=>{const angle=(setting.arc.start+setting.arc.sweep*fraction)*Math.PI/180;return [origin[0]+radius*Math.cos(angle),origin[1]+radius*Math.sin(angle)];};
  await move('approach-hardness',arc(setting.fill,setting.arc.radius));await press();
  await e.wait("document.querySelector('#workspace').classList.contains('bubble-dab-active')");
  await stage('hardness-start');
  // One continuous adjustment: pull outward while softening. The last portion
  // keeps the soft tip visible as the contact keeps moving; release during travel.
  await move('hardness-change',null,{releaseAt:.94,path:t=>{
    const fraction=setting.fill+(.25-setting.fill)*Math.min(t/.80,1);
    return arc(fraction,setting.arc.radius+95*t);
  }});
  await e.wait("Math.abs(layerApp.state().tool_settings.find(c=>c.id==='hardness').value-.25)<.005");
  await stage('hardness-finished');
  await hold(1.40);
  await stage('final');

  await b.call('Page.stopScreencast');recording=false;
  const last=await b.call('Page.captureScreenshot',{format:'png'});
  saveFrame(last.data,Date.now()/1000);
  await Promise.all(writes);
  assert.deepEqual(errors,[]);assert.deepEqual(b.errors,[]);
  assert.equal(pressed,false);
  frames.sort((a,b)=>a.at-b.at);
  const unique=frames.filter((f,i)=>!i||f.at>frames[i-1].at);
  const concat=['ffconcat version 1.0'];
  for(let i=0;i<unique.length;i++){
    concat.push(`file '${unique[i].file}'`,`duration ${i+1<unique.length?(unique[i+1].at-unique[i].at).toFixed(6):'0.041667'}`);
  }
  concat.push(`file '${unique.at(-1).file}'`);
  await writeFile(`${output}/frames.ffconcat`,concat.join('\n')+'\n');

  for(const m of motions.filter(m=>!['hue-sweep','hardness-change'].includes(m.name))){
    assert.ok(m.backtracking<.1,`${m.name}: no artificial correction`);
    assert.ok(!(m.minSide<-.1&&m.maxSide>.1),`${m.name}: no alternating S bends`);
  }
  const hueMotion=motions.find(m=>m.name==='hue-sweep');
  const radii=hueMotion.samples.map(p=>Math.hypot(p.x-hueCenter[0],p.y-hueCenter[1]));
  assert.ok(radii.every((r,i)=>!i||r>=radii[i-1]-.01),'Hue sweep travels outward throughout');
  assert.ok(hueRelease.at<hueMotion.end-.05,'Hue releases during the sweep');
  const pointer=await b.evaluate(readPointer);
  assert.equal(pointer.visible,true);assert.equal(pointer.border,'0px');assert.equal(pointer.clip,'circle(50%)');
  const duration=unique.at(-1).at-unique[0].at;
  const {directory,...source}=prepared;
  await writeFile(`${output}/capture.json`,JSON.stringify({width:1920,height:1080,locale,theme,source,colorWheel:'Medium (216px)',leafColor,hueCenter,hueReleaseRadius,frames:unique.length,firstFrameAt:unique[0].at-started,duration,stages,errors:b.errors},null,2)+'\n');
  await writeFile(`${output}/motion-audit.json`,JSON.stringify({motions,contacts,hueReleaseRadius,changes:['Motion paths and durations retained from v4; short reading pauses added for a roughly 25-second loop','No inspection screenshots or settle loops during recording','Near-direct ordinary travel with occasional single bows','Field color first; hue sweeps outward and releases outside','One continuous hardness adjustment; no pull-out or reversal pauses','No forced corrections, alternating waypoints, parking movement, or prolonged end hold'],movingSeconds:motions.reduce((n,m)=>n+m.end-m.start,0),duration},null,2)+'\n');
  console.log(`Captured ${duration.toFixed(2)} s, ${unique.length} frames`);
}catch(error){
  recording=false;await b.call('Page.stopScreencast').catch(()=>{});await Promise.all(writes);
  await b.screenshot(`${output}/capture-failure.png`).catch(()=>{});
  await writeFile(`${output}/capture-failure.json`,await b.evaluate("JSON.stringify({state:layerApp.state(),bubbles:layerApp.app.bubbles()},(_,v)=>typeof v==='bigint'?Number(v):v)").catch(()=>'{}'));
  throw error;
}finally{await b.close();await host.close();}

await encode(output);
if(process.env.DEMO_KEEP_FRAMES!=='1')await rm(`${output}/frames`,{recursive:true});
