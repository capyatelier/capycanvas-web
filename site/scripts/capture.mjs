import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { browser } from './browser.mjs';

// Serve ../draw/apps/layer-web at port 4183 first. Requires working hardware WebGPU.
// Each squiggle uses browser pen events and the app's actual watercolor renderer.
// UI and artwork are captured together, with no screenshot compositing.
const b = await browser({ gpu: true, width: 1440, height: 810 });
await mkdir(new URL('../public/assets/', import.meta.url), { recursive: true });
try {
  await b.navigate(process.env.APP_URL || 'http://127.0.0.1:4183');
  try { await b.until('!!window.layerApp && (!layerApp.app.gpu_ready || layerApp.app.gpu_ready())'); }
  catch(error) { console.error(await b.evaluate('document.querySelector("#status")?.textContent'), b.errors); throw error; }
  await b.evaluate(`layerApp.dispatch({type:'select_brush',id:20});layerApp.dispatch({type:'invoke',command:'fit_canvas'});layerApp.dispatch({type:'set_brush_size',value:165});layerApp.dispatch({type:'set_brush_opacity',value:1});void 0`);
  const camera=await b.evaluate('({zoom:layerApp.state().camera.zoom,translation:layerApp.state().camera.translation})');
  const colors=[[0.045,0.21,0.40,1],[0.12,0.30,0.19,1],[0.55,0.24,0.075,1]];
  for(let j=0;j<3;j++) {
    await b.evaluate(`layerApp.dispatch({type:'set_color',rgba:${JSON.stringify(colors[j])}});void 0`);
    for(let pass=0;pass<3;pass++) for(let i=0;i<=100;i++) {
      const t=i/100,x=390+1260*t,y=410+j*310+110*Math.sin(t*Math.PI*2-.5+j*.3)+40*Math.sin(t*Math.PI*3+j*.2);
      await b.call('Input.dispatchMouseEvent',{
        type:i===0?'mousePressed':i===100?'mouseReleased':'mouseMoved',
        x:camera.translation[0]+x*camera.zoom,y:camera.translation[1]+y*camera.zoom,
        button:'left',buttons:i===100?0:1,clickCount:i===0?1:0,pointerType:'pen',force:.035+.945*Math.pow(Math.sin(Math.PI*t),.8),
      });
      if(i%5===0)await b.settle();
    }
    await b.settle();
  }
  await b.evaluate(`document.querySelector('[data-brush="20"]').scrollIntoView({block:'center'});void 0`);
  await b.call('Input.dispatchMouseEvent',{type:'mouseMoved',x:1438,y:808});
  for(const theme of ['light','dark']) {
    await b.theme(theme);
    await b.evaluate(`layerApp.dispatch({type:'set_theme',theme:'${theme}'}); void 0`);
    await b.evaluate('Promise.all([...document.images].map(i=>i.decode())).then(()=>null)');
    await b.settle();
    const shot=await b.call('Page.captureScreenshot',{format:'webp',quality:90});
    await writeFile(new URL(`../public/assets/workspace-${theme}.webp`,import.meta.url),Buffer.from(shot.data,'base64'));
  }
  const revision=execFileSync('git',['-C','../draw','rev-parse','HEAD'],{encoding:'utf8'}).trim();
  await writeFile(new URL('../public/assets/capture.json',import.meta.url),JSON.stringify({source:'https://github.com/capyatelier/capycanvas',revision,packageAssetDirectory:await b.evaluate("document.querySelector('script[type=module]').src.split('/').slice(-3,-1).join('/')"),width:1440,height:810,artwork:'Three watercolor squiggles drawn through actual browser pen input using brush 20 (Watercolor Wash).',screenshots:['workspace-light.webp','workspace-dark.webp']},null,2)+'\n');
  console.log('Captured watercolor squiggles in both themes from the real GPU workspace.');
} catch(error) {console.error(b.errors.join("\n"));throw error;} finally { await b.close(); }
