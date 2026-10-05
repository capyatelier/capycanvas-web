import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { annotate, clearAnnotations } from './annotations.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');

export async function settled(b) {
  await b.evaluate('Promise.all([...document.images].map(i=>i.decode().catch(()=>null))).then(()=>null)');
  await b.evaluate('document.fonts.ready.then(()=>null)');
  await new Promise(resolve => setTimeout(resolve, 350)); await b.settle();
  await b.until('!document.querySelector("#status").textContent && layerApp.app.brush_ready() && document.querySelector(".startup-progress")?.hidden !== false', 20000);
  await b.until(`[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(canvas=>{const box=canvas.getBoundingClientRect();return canvas.checkVisibility()&&box.width>0&&box.top<innerHeight&&box.bottom>0}).every(canvas=>canvas.dataset.previewRevision)`, 15000);
  await b.until(`[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(c=>c.checkVisibility()&&c.getBoundingClientRect().width>0).every(c=>{const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;for(let i=3;i<d.length;i+=4)if(d[i])return true;return false})`, 3000).catch(() => {});
  assert.equal(await b.evaluate('document.body.innerText.includes("Painting is unavailable")'), false, 'Capture has a working GPU canvas');
  await b.settle();
}

export async function applyTheme(b, theme) {
  await clearAnnotations(b); await b.theme(theme);
  const applied = `document.body.dataset.theme === ${JSON.stringify(theme)}`;
  for (let attempt = 1; ; attempt++) {
    await b.evaluate(`layerApp.dispatch({type:'set_theme',theme:${JSON.stringify(theme)}});layerApp.wake();void 0`);
    try { await b.until(applied, 3000); break; } catch (error) { if (attempt === 5) throw error; }
  }
  await b.evaluate(`layerApp.dispatch({type:'set_theme',theme:${JSON.stringify(theme)}});layerApp.wake();void 0`);
}

async function bounds(b, target) {
  const specs = (Array.isArray(target) ? target : [target]).map(item => typeof item === 'string' ? { selector: item } : item);
  return b.evaluate(`(()=>{
    const boxes=${JSON.stringify(specs)}.flatMap(spec=>{
      if(spec.documentRect){const camera=layerApp.state().camera;const ratio=camera.viewport[0]/innerWidth;const [x,y,w,h]=spec.documentRect;
        return [{left:(camera.translation[0]+x*camera.zoom)/ratio,top:(camera.translation[1]+y*camera.zoom)/ratio,right:(camera.translation[0]+(x+w)*camera.zoom)/ratio,bottom:(camera.translation[1]+(y+h)*camera.zoom)/ratio}];}
      if(spec.rect){const [x,y,w,h]=spec.rect;return [{left:x,top:y,right:x+w,bottom:y+h}];}
      const nodes=[...document.querySelectorAll(spec.selector)].filter(n=>n.checkVisibility({visibilityProperty:true,opacityProperty:true})&&n.getBoundingClientRect().width>0&&(!spec.text||spec.text.includes(n.textContent.trim())));
      if(!nodes.length)throw Error('Capture target missing: '+spec.selector);
      return (spec.all?nodes:[nodes[spec.index||0]]).map(n=>n.getBoundingClientRect());
    });
    return {left:Math.min(...boxes.map(r=>r.left)),top:Math.min(...boxes.map(r=>r.top)),right:Math.max(...boxes.map(r=>r.right)),bottom:Math.max(...boxes.map(r=>r.bottom))};
  })()`);
}

export const canvasBar = 'document.querySelector(".canvas-action-bar:not(.suppressed):not([hidden])")?.checkVisibility({visibilityProperty:true})';

export function shooter(b, output, captures, { width = 1920, height = 1080 } = {}) {
  return async function shoot(name, { target, pad = 8, callouts = [], setup, teardown, maxWidth = 1100, check, ready } = {}) {
    console.log(`Capturing docs/${name}`);
    for (const theme of ['light', 'dark']) {
      await applyTheme(b, theme);
      if (setup) await setup(theme);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
      await settled(b);
      if (ready) await b.until(ready, 20000);
      const box = await bounds(b, target);
      if (callouts.length) pad = Math.max(pad, 24);
      const left = Math.max(0, Math.floor(box.left - pad)), top = Math.max(0, Math.floor(box.top - pad));
      const right = Math.min(width, Math.ceil(box.right + pad)), bottom = Math.min(height, Math.ceil(box.bottom + pad));
      const clip = { x: left, y: top, width: Math.min(right - left, maxWidth), height: bottom - top, scale: 1 };
      assert.ok(clip.width >= 40 && clip.height >= 24, `Capture region is visible: ${name} ${JSON.stringify(clip)}`);
      if (check) await check(clip);
      const annotations = callouts.length ? await annotate(b, callouts) : [];
      await b.until('layerApp.app.brush_ready() && document.querySelector(".startup-progress")?.hidden !== false', 20000);
      await b.settle(); await b.settle();
      const shot = await b.call('Page.captureScreenshot', { format: 'webp', quality: 90, clip });
      const bytes = Buffer.from(shot.data, 'base64');
      const file = `docs/${name}-${theme}.webp`;
      await mkdir(dirname(`${output}/${file}`), { recursive: true });
      await writeFile(`${output}/${file}`, bytes);
      const index = captures.findIndex(capture => capture.file === file);
      const entry = { file, theme, size: [clip.width, clip.height], bytes: bytes.length, sha256: hash(bytes), annotations: annotations.map(({ number, bounds }) => ({ number, bounds: { ...bounds, x: bounds.x - clip.x, y: bounds.y - clip.y } })) };
      if (index >= 0) captures[index] = entry; else captures.push(entry);
      await clearAnnotations(b);
      if (teardown) await teardown(theme);
    }
  };
}
