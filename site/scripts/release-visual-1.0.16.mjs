import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { PNG } from 'pngjs';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { artwork, scenes } from './capture/showcase-scenes.mjs';
import { quiet, settleLayout } from './capture/shoot.mjs';

const version = '1.0.16';
const width = 1800, height = 600;
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const json = async path => JSON.parse(await readFile(path, 'utf8'));
const required = name => { assert.ok(process.env[name], name + ' is required'); return resolve(process.env[name]); };
const output = resolve(process.env.RELEASE_VISUAL_OUTPUT || 'site/public/assets/releases/' + version);
const working = required('RELEASE_VISUAL_WORK');
const prepared = await json('artifacts/capture-app.json');
const args = process.argv.slice(2);
assert.ok(args.length === 0 || args.length === 1 && args[0] === '--taper-only');
const existing = args.length ? await json(resolve(output, 'manifest.json')) : null;
if (existing) {
  assert.deepEqual([existing.version, existing.width, existing.height], [version, width, height]);
  const approved = existing.files.find(f => f.file === 'phones.webp');
  assert.ok(approved);
  const bytes = await readFile(resolve(output, approved.file));
  assert.equal(bytes.length, approved.bytes);
  assert.equal(hash(bytes), approved.sha256, 'Approved phone image matches its manifest');
}
for (const [file, digest] of Object.entries(prepared.hashes)) {
  assert.equal(hash(await readFile(resolve(prepared.directory, file))), digest, file + ' matches prepared app');
}
await mkdir(working, { recursive: true });
await mkdir(output, { recursive: true });

const captures = [];
async function native(manifestPath, platform, device, scene) {
  const manifestBytes = await readFile(manifestPath);
  const manifest = JSON.parse(manifestBytes);
  assert.equal(manifest.platform, platform);
  assert.equal(manifest.schema, 1);
  const variants = manifest.captures.filter(c => c.device === device && c.language === 'en' && c.scene === scene && c.theme === 'dark');
  assert.equal(variants.length, 1);
  const shot = variants[0];
  const root = dirname(manifestPath), file = resolve(root, shot.file);
  assert.ok(file.startsWith(root + '/'));
  const bytes = await readFile(file);
  assert.equal(hash(bytes), shot.sha256);
  const png = PNG.sync.read(bytes);
  assert.deepEqual([png.width, png.height], [shot.width, shot.height]);
  assert.ok(png.height > png.width, 'Native phone is portrait');
  assert.match(manifest.appRevision, /^[a-f0-9]{40}$/);
  for (const digest of [manifest.binarySha256, manifest.recipeSha256]) assert.match(digest, /^[a-f0-9]{64}$/);
  if (platform === 'android') assert.equal(manifest.appRevision, prepared.revision, 'Android uses the prepared app revision');
  captures.push({ id: device, platform, ...shot, source_revision: manifest.appRevision, binary_sha256: manifest.binarySha256,
    recipe_sha256: manifest.recipeSha256, capture_manifest_sha256: hash(manifestBytes) });
  return bytes;
}

const host = await serve(0, prepared.directory);
async function web(id, viewport, draw) {
  const b = await browser({ gpu: true, headless: process.env.CAPTURE_BROWSER_MODE !== 'wayland', ...viewport });
  try {
    await b.theme('dark');
    await b.navigate(host.url);
    const e = await editor(b);
    console.log(`Capturing ${id}`);
    const details = await draw(e);
    await e.wait('layerApp.app.drawing_presented()');
    await e.canvas(); await quiet(b); await settleLayout(b);
    assert.equal(await e.read('document.querySelectorAll("dialog[open]").length'), 0);
    assert.deepEqual(b.errors, []);
    const path = resolve(working, id + '.png');
    await b.screenshot(path);
    const bytes = await readFile(path);
    const png = PNG.sync.read(bytes);
    if (id === 'browser-phone') {
      let green = 0;
      for (let i = png.width * 150 * 4; i < png.width * Math.floor(png.height * .65) * 4; i += 4) {
        if (png.data[i+1] > png.data[i] + 18 && png.data[i+1] > png.data[i+2] + 18) green++;
      }
      assert.ok(green > 10000, 'The rendered photo is visible in the phone capture');
    }
    captures.push({ id, platform: 'web', source_revision: prepared.revision, theme: 'dark', sha256: hash(bytes),
      size: [png.width, png.height], hashes: prepared.hashes, ...details });
    return bytes;
  } catch (error) {
    await b.screenshot(resolve(working, id + '-failure.png')).catch(() => {});
    const state = await b.evaluate('JSON.stringify(layerApp.state(),(_,value)=>typeof value==="bigint"?Number(value):value)').catch(() => '{}');
    await writeFile(resolve(working, id + '-failure.json'), state);
    throw error;
  } finally { await b.close(); }
}

let phone, taper;
try {
  if (!existing) phone = await web('browser-phone', { width: 390, height: 844, scale: 3 }, async e => {
    const scene = scenes.find(s => s.id === 'photo');
    await e.send({ type: 'workspace_manager', command: { type: 'switch', id: 'builtin:workspace:' + scene.workspace } });
    await e.wait(`JSON.parse(layerApp.app.workspace_view()).id===${JSON.stringify('builtin:workspace:' + scene.workspace)}&&!JSON.parse(layerApp.app.workspace_view()).busy`);
    await e.provide(scene.source, await readFile(new URL(scene.source, artwork)));
    await e.open(scene.source);
    for (const step of scene.steps) {
      if (step.type === 'select_layer') await e.select(step.name);
      else if (step.type === 'action') {
        if (step.action.type === 'invoke') await e.invoke(step.action.command);
        else await e.send(step.action);
      } else if (step.type === 'effect') {
        await e.send({ type: 'effect', action: { op: 'insert', effect: step.effect } });
        await e.wait('layerApp.state().layer_tools.editing_layer.adjustment_effect');
        const layer = await e.read('Number(layerApp.state().layer_properties.layer)');
        for (const [key, value] of Object.entries(step.parameters)) await e.send({ type: 'effect', action: { op: 'set', layer, key, value } });
      } else if (step.type === 'show_panel' || step.type === 'wait_histogram') continue;
      else assert.fail('Unexpected photo recipe step: ' + step.type);
    }
    await e.wait('!!layerApp.app.layout(innerWidth,innerHeight).phone');
    await e.invoke('fit_canvas');
    await e.send({ type: 'phone', action: { kind: 'panel', panel: 'layers' } });
    await e.wait('!!layerApp.state().customization.drawer');
    await e.send({ type: 'customize', action: { type: 'toggle_layer_drawer_properties' } });
    await e.wait("layerApp.state().histogram.status==='Exact'");
    return { scene: scene.id, viewport: [390, 844], scale: 3, artwork_sha256: hash(await readFile(new URL(scene.source, artwork))) };
  });
  taper = await web('taper', { width: 1920, height: 1080, scale: 1 }, async e => {
    await e.workspace('illustrator');
    const before = (await e.drawings()).selected;
    await e.invoke('new_document');
    const { createDrawing } = await import(pathToFileURL(resolve(prepared.directory, 'new-drawing-fixture.mjs')));
    const extent = [1200, 420];
    await e.b.evaluate(createDrawing({ width: extent[0], height: extent[1], name: 'Taper studies' }));
    await e.wait(`Number(layerApp.app.document_tabs(0).selected)!==${before} && !layerApp.state().document_file.busy`);
    await e.closeOtherDrawings();
    assert.deepEqual(await e.read('layerApp.state().tabs.filter(t=>t.active).map(t=>[t.width,t.height])'), [extent]);
    await e.invoke('brush');
    const brushSize = 28, pressure = .7;
    await e.brush(1, brushSize, '#151719');
    await e.show('tool_settings');
    const studies = [
      { mode: 'off', caption: 'No taper' },
      { mode: 'fixed', caption: 'Fixed taper', start: 1.5, end: 1.5, pointiness: .9 },
      { mode: 'proportional', caption: 'Proportional taper', start: .45, end: .45, pointiness: .9 },
    ];
    const paths = [
      'M 60 176 Q 91 102 151 71',
      'M 168 174 C 194 137 212 105 218 54',
      'M 253 176 Q 293 148 335 94',
      'M 48 322 C 89 245 152 224 192 277',
      'M 199 352 Q 223 268 281 220',
      'M 288 363 Q 311 311 350 273',
    ];
    await e.frame(1, [600, 210]);
    for (const [i, study] of studies.entries()) {
      await e.invoke('taper_' + study.mode);
      assert.equal(await e.read(`layerApp.state().tool_extra.find(o=>o.Choice?.id==='taper').Choice.items.find(i=>i.selected).action.command`), 'taper_' + study.mode);
      if (study.mode !== 'off') {
        const suffix = study.mode === 'fixed' ? 'widths' : 'share';
        for (const [key, value] of [['taper_start_' + suffix, study.start], ['taper_end_' + suffix, study.end], ['taper_pointiness', study.pointiness]]) {
          await e.send({ type: 'set_tool_setting', id: key, value });
        }
        const values = await e.read(`['taper_start','taper_end','taper_pointiness'].map(id=>layerApp.state().tool_settings.find(s=>s.id===id).value)`);
        [study.start, study.end, study.pointiness].forEach((value, j) => assert.ok(Math.abs(value-values[j]) < .001));
      }
      console.log(`Drawing ${study.caption} at constant pressure`);
      for (const path of paths) {
        const points = (await e.path(path, 4)).map(([x,y]) => [x + 400*i, y]);
        await e.stroke(points, { pressure, settleEvery: 8 });
      }
    }
    await e.b.evaluate(`[...document.querySelectorAll('.tool-settings-body h3')].find(n=>n.textContent==='Taper'&&n.checkVisibility()).scrollIntoView({block:'start'})`);
    await e.b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 12, y: 22, button: 'none', pointerType: 'mouse' });
    await settleLayout(e.b);
    const camera = await e.read('layerApp.state().camera');
    assert.ok(Math.abs(camera.zoom-1) < .001);
    const paper = [Math.round(camera.translation[0]), Math.round(camera.translation[1]), ...extent];
    const panel = await e.read(`(()=>{
      const heading=[...document.querySelectorAll('.tool-settings-body h3')].find(n=>n.textContent==='Taper'&&n.checkVisibility());
      const body=heading.closest('.tool-settings-body'), last=body.querySelector('[data-tool-setting="taper_pointiness"]');
      const outer=body.getBoundingClientRect(), top=heading.getBoundingClientRect(), bottom=last.getBoundingClientRect();
      const x=Math.floor(outer.left-4),y=Math.floor(top.top-3),right=Math.ceil(outer.right+4),end=Math.ceil(bottom.bottom+4);
      if (![heading,last].every(n=>{const r=n.getBoundingClientRect();const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return n.contains(hit)||hit===n;})) throw Error('Taper section is obscured');
      return [x,y,right-x,end-y];
    })()`);
    return { viewport: [1920, 1080], brush: 'G-Pen', brush_size: brushSize, pressure, paths, studies, paper_crop: paper, panel_crop: panel };
  });
} finally { await host.close(); }

const dataURL = bytes => 'data:image/png;base64,' + bytes.toString('base64');
async function compose(file, html) {
  const page = await browser({ width, height });
  try {
    await page.call('Page.setDocumentContent', { frameId: (await page.call('Page.getFrameTree')).frameTree.frame.id,
      html: '<!doctype html><meta charset="utf-8"><style>*{box-sizing:border-box}html,body{margin:0;width:1800px;height:600px;overflow:hidden;background:#26282c}</style>' + html });
    await page.evaluate('Promise.all([...document.images].map(i=>i.decode())).then(()=>document.fonts.ready).then(()=>null)');
    const result = await page.call('Page.captureScreenshot', { format: 'webp', quality: 94 });
    const bytes = Buffer.from(result.data, 'base64');
    await writeFile(resolve(output, file), bytes);
    return { file, bytes: bytes.length, sha256: hash(bytes) };
  } finally { await page.close(); }
}
function crop(bytes, bounds) {
  const source = PNG.sync.read(bytes);
  const [x,y,w,h] = bounds;
  assert.ok(x >= 0 && y >= 0 && w > 0 && h > 0 && x+w <= source.width && y+h <= source.height, 'Crop stays inside the native Web capture');
  const image = new PNG({ width: w, height: h });
  PNG.bitblt(source, image, x,y,w,h,0,0);
  return PNG.sync.write(image);
}
const taperCapture = captures.find(c => c.id === 'taper');
const [paperX,paperY] = taperCapture.paper_crop;
const panel = crop(taper, taperCapture.panel_crop);
const samples = taperCapture.studies.map((study,i) => ({
  caption: study.caption, bytes: crop(taper, [paperX+400*i,paperY,400,420]),
}));
assert.equal(new Set(samples.map(s => hash(s.bytes))).size, samples.length, 'Each taper study has distinct rendered pixels');
const css = await readFile('site/public/assets/style.css', 'utf8');
const font = css.match(/font-family:\s*([^;]+);/)[1];
const taperFile = await compose('taper.webp',
  '<style>body{font-family:'+font+';color:#fafafb}main{height:600px;padding:40px 30px;display:flex;align-items:center;gap:30px}' +
  'figure{margin:0;width:420px;flex:none}figure img{width:420px;height:441px;display:block;border-radius:6px}figcaption{text-align:center;font-size:30px;font-weight:600;padding-top:17px}' +
  'aside{flex:1;align-self:center}aside img{width:100%;height:auto;border-radius:10px;display:block}</style><main>' +
  samples.map(sample => '<figure><img src="'+dataURL(sample.bytes)+'"><figcaption>'+sample.caption+'</figcaption></figure>').join('') +
  '<aside><img src="'+dataURL(panel)+'"></aside></main>');
let manifest;
if (existing) {
  manifest = { ...existing, captures: existing.captures.map(c => c.id === 'taper' ? taperCapture : c),
    files: existing.files.map(f => f.file === taperFile.file ? taperFile : f) };
} else {
  const iphone = await native(required('RELEASE_IPHONE_MANIFEST'), 'apple', 'iphone', 'paint');
  const android = await native(required('RELEASE_ANDROID_MANIFEST'), 'android', 'phone', 'sketch');
  const phonesFile = await compose('phones.webp', '<div style="height:600px;display:flex;align-items:center;justify-content:center;gap:66px">' +
    [iphone, android, phone].map(bytes => '<img style="height:564px;width:auto;border-radius:22px;display:block" src="' + dataURL(bytes) + '">').join('') + '</div>');
  const { directory, ...source } = prepared;
  manifest = { version, width, height, source: { ...source, theme: 'dark' }, captures, files: [phonesFile,taperFile] };
}
await writeFile(resolve(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log('Release visuals saved to ' + output);
