import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { annotate, clearAnnotations } from './annotations.mjs';
import { locales } from './languages.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
export const themes = ['light', 'dark'];

export const pageHelpers = `window.__capture=(()=>{
  const memory=new Map();
  const path=node=>{const steps=[];for(let n=node;n.parentElement;n=n.parentElement)steps.unshift([...n.parentElement.children].indexOf(n));return steps;};
  const follow=steps=>steps.reduce((n,i)=>n?.children[i],document.documentElement);
  return {
    pick(key,nodes){memory.set(key,nodes.map(node=>({node,path:path(node),tag:node.tagName})));return nodes;},
    recall(key){return memory.get(key).map(({node,path,tag})=>{const found=node.isConnected?node:follow(path);if(!found||found.tagName!==tag)throw Error('Capture target changed with the language: '+key);return found;});},
    surfaces(){return [...document.querySelectorAll(':popover-open,dialog[open]')].filter(n=>n.id!=='capture-annotations').map(n=>n.tagName+'#'+n.id+'.'+(n.classList[0]||''));},
    texts(clip,labels,loose=[]){
      const hit=r=>r.width>0&&r.height>0&&r.right>clip.x&&r.left<clip.x+clip.width&&r.bottom>clip.y&&r.top<clip.y+clip.height;
      const found=new Set();const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
      const within=(text,label)=>{for(let at=text.indexOf(label);at>=0;at=text.indexOf(label,at+1))if(!/[\p{L}\p{N}]/u.test(text[at-1]||'')&&!/[\p{L}\p{N}]/u.test(text[at+label.length]||''))return true;return false;};
      for(let node;(node=walker.nextNode());){const text=node.nodeValue.trim();const named=labels.filter(label=>loose.includes(label)?within(text,label):text===label);if(!named.length||!node.parentElement.checkVisibility({visibilityProperty:true,opacityProperty:true}))continue;const range=document.createRange();range.selectNodeContents(node);if([...range.getClientRects()].some(hit))named.forEach(label=>found.add(label));}
      for(const input of document.querySelectorAll('input'))if(labels.includes(input.value.trim())&&input.checkVisibility()&&hit(input.getBoundingClientRect()))found.add(input.value.trim());
      return [...found];
    },
    marked(clip){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);for(let node;(node=walker.nextNode());){if(!node.nodeValue.trimStart().startsWith('●')||!node.parentElement.checkVisibility({visibilityProperty:true,opacityProperty:true}))continue;const range=document.createRange();range.selectNodeContents(node);if([...range.getClientRects()].some(r=>r.width>0&&r.right>clip.x&&r.left<clip.x+clip.width&&r.bottom>clip.y&&r.top<clip.y+clip.height))return true;}return false;},
    controls(clip,command){return [...document.querySelectorAll('[data-command="'+command+'"]')].some(n=>{const r=n.getBoundingClientRect();return n.checkVisibility({visibilityProperty:true,opacityProperty:true})&&r.width>0&&r.right>clip.x&&r.left<clip.x+clip.width&&r.bottom>clip.y&&r.top<clip.y+clip.height;});},
  };
})();`;

const animations = `Promise.all(document.getAnimations().filter(a=>a.playState==='running'&&a.effect?.getComputedTiming().endTime!==Infinity).map(a=>a.finished.catch(()=>null)))`;
export const settleLayout = (b, selector = '#workspace .dock-group,#header .header-item,.canvas-action-bar,.collapsed-column,:popover-open,dialog[open]', frames = 3) => b.evaluate(`new Promise((resolve,reject)=>{
  let last='',same=0,count=0;
  const box=n=>{const r=n.getBoundingClientRect();return[r.x,r.y,r.width,r.height,n.width||0]};
  const key=()=>JSON.stringify([...document.querySelectorAll(${JSON.stringify(selector)})].flatMap(n=>[n,n.closest('.dock-group'),...n.querySelectorAll('canvas')].filter(Boolean).map(box)));
  const tick=()=>{const k=key();same=k===last?same+1:0;last=k;if(same>=${frames})return resolve(null);if(++count>900)return reject(Error('Layout did not settle: '+${JSON.stringify(selector)}));requestAnimationFrame(tick);};
  tick();
})`);
export const quiet = b => b.evaluate(`document.fonts.ready.then(()=>${animations}).then(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(()=>r(null)))))`);

export async function settled(b) {
  await b.evaluate('Promise.all([...document.images].map(i=>i.decode().catch(()=>null))).then(()=>null)');
  await quiet(b);
  await b.evaluate('layerApp.app.wait_for_canvas().then(()=>null)');
  await b.until('!document.querySelector("#status").textContent && layerApp.app.brush_ready() && document.querySelector(".startup-progress")?.hidden !== false', 20000);
  await b.until(`[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(canvas=>{const box=canvas.getBoundingClientRect();return canvas.checkVisibility()&&box.width>0&&box.top<innerHeight&&box.bottom>0}).every(canvas=>canvas.dataset.previewRevision)`, 15000);
  await b.until(`[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(c=>c.checkVisibility()&&c.getBoundingClientRect().width>0).every(c=>{const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;for(let i=3;i<d.length;i+=4)if(d[i])return true;return false})`, 3000).catch(() => {});
  assert.equal(await b.evaluate('document.body.innerText.includes("Painting is unavailable")'), false, 'Capture has a working GPU canvas');
  await quiet(b);
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

async function bounds(b, target, first) {
  const specs = (Array.isArray(target) ? target : [target]).map(item => typeof item === 'string' ? { selector: item } : item);
  return b.evaluate(`(()=>{
    const boxes=${JSON.stringify(specs)}.flatMap((spec,index)=>{
      if(spec.documentRect){const camera=layerApp.state().camera;const ratio=camera.viewport[0]/innerWidth;const [x,y,w,h]=spec.documentRect;
        return [{left:(camera.translation[0]+x*camera.zoom)/ratio,top:(camera.translation[1]+y*camera.zoom)/ratio,right:(camera.translation[0]+(x+w)*camera.zoom)/ratio,bottom:(camera.translation[1]+(y+h)*camera.zoom)/ratio}];}
      if(spec.rect){const [x,y,w,h]=spec.rect;return [{left:x,top:y,right:x+w,bottom:y+h}];}
      const visible=n=>n.checkVisibility({visibilityProperty:true,opacityProperty:true})&&n.getBoundingClientRect().width>0;
      let nodes;
      if(${first}){
        nodes=[...document.querySelectorAll(spec.selector)].filter(n=>visible(n)&&(!spec.text||spec.text.includes(n.textContent.trim())));
        if(!nodes.length)throw Error('Capture target missing: '+spec.selector);
        nodes=__capture.pick('target:'+index,spec.all?nodes:[nodes[spec.index||0]]);
      } else {
        nodes=__capture.recall('target:'+index);
        if(!nodes.every(visible))throw Error('Capture target hidden in this language: '+spec.selector);
      }
      return nodes.map(n=>n.getBoundingClientRect());
    });
    return {left:Math.min(...boxes.map(r=>r.left)),top:Math.min(...boxes.map(r=>r.top)),right:Math.max(...boxes.map(r=>r.right)),bottom:Math.max(...boxes.map(r=>r.bottom))};
  })()`);
}

export const canvasBar = 'document.querySelector(".canvas-action-bar:not(.suppressed):not([hidden])")?.checkVisibility({visibilityProperty:true})';

export function shooter({ b, lang, names, output, captures, previous = new Map(), verifyPixels, width = 1920, height = 1080 }) {
  let redoLeft = false;
  const pixels = bytes => `(async()=>{const data=Uint8Array.from(atob(${JSON.stringify(Buffer.from(bytes).toString('base64'))}),c=>c.charCodeAt(0));const bitmap=await createImageBitmap(new Blob([data],{type:'image/webp'}));const canvas=new OffscreenCanvas(bitmap.width,bitmap.height);const context=canvas.getContext('2d');context.drawImage(bitmap,0,0);return context.getImageData(0,0,bitmap.width,bitmap.height).data;})()`;
  const unchanged = (before, after) => b.evaluate(`Promise.all([${pixels(before)},${pixels(after)}]).then(([p,q])=>{if(p.length!==q.length)return false;let sum=0;for(let i=0;i<p.length;i++){const d=Math.abs(p[i]-q[i]);if(d>32)return false;sum+=d;}return sum/p.length<1;})`);
  const rounded = annotations => JSON.stringify(annotations.map(({ number, bounds }) => [number, ...['x', 'y', 'width', 'height'].map(key => Math.round(bounds[key] * 10))]));
  async function committed(file, image, quality, served) {
    const old = previous.get(file);
    if (!old || old.quality !== quality || old.size.join() !== image.size.join() || old.locales.join() !== served.join() || rounded(old.annotations) !== rounded(image.annotations)) return image.bytes;
    const bytes = await readFile(`${output}/${file}`).catch(() => null);
    return bytes && hash(bytes) === old.sha256 && await unchanged(bytes, image.bytes) ? bytes : image.bytes;
  }

  async function capture(shot, { target, pad = 8, callouts = [], setup, teardown, maxWidth = 1100, check, variant, release, ready, full = false, verify = false } = {}) {
    console.log(`Capturing ${shot}`);
    const quality = shot.startsWith('docs/') ? 70 : 90;
    if (callouts.length) pad = Math.max(pad, 24);
    const images = Object.fromEntries(themes.map(theme => [theme, []]));
    for (const theme of themes) {
      await applyTheme(b, theme);
      if (setup) await setup(theme);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
      await settled(b);
      if (ready) await b.until(ready, 20000);
      if (verify) await verifyPixels();
      if (redoLeft) redoLeft = await b.evaluate("!!layerApp.state().commands.find(c=>c.id==='redo')?.enabled");
      const surfaces = await b.evaluate('__capture.surfaces()');
      let plan = null;
      try {
        for (const [index, locale] of locales.entries()) {
          const first = index === 0;
          await lang.use(locale);
          if (plan) await names.apply(plan, locale);
          if (variant) await variant(locale);
          await settleLayout(b);
          await quiet(b);
          assert.deepEqual(await b.evaluate('__capture.surfaces()'), surfaces, `${shot}: the same menus and dialogs are open in ${locale}`);
          let clip = { x: 0, y: 0, width, height, scale: 1 };
          if (!full) {
            const box = await bounds(b, typeof target === 'function' ? await target(locale) : target, first);
            const left = Math.max(0, Math.floor(box.left - pad)), top = Math.max(0, Math.floor(box.top - pad));
            const right = Math.min(width, Math.ceil(box.right + pad)), bottom = Math.min(height, Math.ceil(box.bottom + pad));
            clip = { x: left, y: top, width: Math.min(right - left, maxWidth), height: bottom - top, scale: 1 };
            assert.ok(clip.width >= 40 && clip.height >= 24, `Capture region is visible: ${shot} ${locale} ${JSON.stringify(clip)}`);
          }
          if (first) {
            plan = await names.plan(clip);
            assert.ok(!(redoLeft && await b.evaluate(`__capture.controls(${JSON.stringify(clip)},'redo')`)), `${shot}: Redo left over from localized layer names is visible`);
          }
          if (check) await check(clip, locale);
          const annotations = callouts.length ? await annotate(b, callouts, first) : [];
          await b.until('layerApp.app.brush_ready() && document.querySelector(".startup-progress")?.hidden !== false', 20000);
          await b.settle();
          const screenshot = await b.call('Page.captureScreenshot', { format: 'webp', quality, clip });
          images[theme].push({ locale, bytes: Buffer.from(screenshot.data, 'base64'), size: [clip.width, clip.height], annotations: annotations.map(({ number, bounds }) => ({ number, bounds: { ...bounds, x: bounds.x - clip.x, y: bounds.y - clip.y } })) });
          await clearAnnotations(b);
          if (release) await release(locale);
          if (!first && plan && await names.restore(plan)) redoLeft = true;
        }
      } finally {
        await clearAnnotations(b);
        await lang.use('en');
      }
      if (teardown) await teardown(theme);
    }
    await store(shot, images, quality);
  }

  async function store(shot, images, quality) {
    const [area, ...rest] = shot.split('/');
    const shared = themes.every(theme => new Set(images[theme].map(image => hash(image.bytes))).size === 1);
    const path = (folder, theme) => `${area}/${folder}/${rest.join('/')}-${theme}.webp`;
    for (let index = captures.length - 1; index >= 0; index--) if (captures[index].shot === shot) captures.splice(index, 1);
    for (const theme of themes) {
      const groups = shared ? [{ folder: 'shared', image: images[theme][0], locales }] : images[theme].map(image => ({ folder: image.locale, image, locales: [image.locale] }));
      for (const { folder, image, locales: served } of groups) {
        const file = path(folder, theme);
        const bytes = await committed(file, image, quality, served);
        if (bytes === image.bytes) {
          await mkdir(dirname(`${output}/${file}`), { recursive: true });
          await writeFile(`${output}/${file}`, bytes);
        }
        captures.push({ file, shot, theme, locales: served, quality, size: image.size, bytes: bytes.length, sha256: hash(bytes), annotations: image.annotations });
      }
      const stale = shared ? locales.map(locale => path(locale, theme)) : [path('shared', theme)];
      await Promise.all(stale.map(file => rm(`${output}/${file}`, { force: true })));
    }
  }

  return {
    capture,
    shoot: (name, options) => capture(`docs/${name}`, options),
    record: (shot, targets = [], { setup, teardown, check = true } = {}) => capture(shot, { full: true, callouts: targets, setup, teardown, verify: check }),
  };
}
