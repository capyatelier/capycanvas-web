import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { PNG } from 'pngjs';
import { browser } from './browser.mjs';
import { serve } from './serve.mjs';
import { editor } from './capture/editor.mjs';
import { quiet, settleLayout } from './capture/shoot.mjs';

const version = '1.0.16';
const width = 1800, height = 600;
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const json = async path => JSON.parse(await readFile(path, 'utf8'));
const required = name => { assert.ok(process.env[name], name + ' is required'); return resolve(process.env[name]); };
const output = resolve(process.env.RELEASE_VISUAL_OUTPUT || 'site/public/assets/releases/' + version);
const working = required('RELEASE_VISUAL_WORK');
const prepared = await json('artifacts/capture-app.json');
for (const [file, digest] of Object.entries(prepared.hashes)) {
  assert.equal(hash(await readFile(resolve(prepared.directory, file))), digest, file + ' matches prepared app');
}
await mkdir(working, { recursive: true });
await mkdir(output, { recursive: true });
const css = await readFile('site/public/assets/style.css', 'utf8');
const font = css.match(/font-family:\s*([^;]+);/)[1];
const captures = [];

async function native(manifestPath, device, scene) {
  const manifestBytes = await readFile(manifestPath);
  const manifest = JSON.parse(manifestBytes);
  assert.equal(manifest.platform, 'apple');
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
  assert.ok(device === 'iphone' ? png.height > png.width : png.width > png.height, 'Native device orientation');
  assert.match(manifest.appRevision, /^[a-f0-9]{40}$/);
  for (const digest of [manifest.binarySha256, manifest.recipeSha256]) assert.match(digest, /^[a-f0-9]{64}$/);
  captures.push({ id: device, platform: 'apple', ...shot, source_revision: manifest.appRevision, binary_sha256: manifest.binarySha256,
    recipe_sha256: manifest.recipeSha256, capture_manifest_sha256: hash(manifestBytes) });
  return bytes;
}

const dataURL = bytes => 'data:image/png;base64,' + bytes.toString('base64');
async function compose(file, styles, html) {
  const page = await browser({ width, height });
  try {
    await page.call('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } });
    await page.call('Page.setDocumentContent', { frameId: (await page.call('Page.getFrameTree')).frameTree.frame.id,
      html: '<!doctype html><meta charset="utf-8"><style>*{box-sizing:border-box}html,body{margin:0;width:1800px;height:600px;overflow:hidden;background:transparent;color:#2e2e32;font-family:'+font+'}'+styles+'</style>'+html });
    await page.evaluate('Promise.all([...document.images].map(i=>i.decode())).then(()=>document.fonts.ready).then(()=>null)');
    assert.equal(await page.evaluate('document.documentElement.scrollWidth'), width);
    assert.equal(await page.evaluate('document.documentElement.scrollHeight'), height);
    const result = await page.call('Page.captureScreenshot', { format: 'webp', quality: 94 });
    const bytes = Buffer.from(result.data, 'base64');
    assert.equal(bytes.toString('ascii',12,16),'VP8X');
    assert.ok(bytes[20] & 0x10, file + ' must have WebP alpha');
    assert.deepEqual([bytes.readUIntLE(24,3)+1,bytes.readUIntLE(27,3)+1],[width,height]);
    await writeFile(resolve(output, file), bytes);
    return { file, bytes: bytes.length, sha256: hash(bytes), alpha: true };
  } finally { await page.close(); }
}

const iphone = await native(required('RELEASE_IPHONE_MANIFEST'), 'iphone', 'photo');
const ipad = await native(required('RELEASE_IPAD_MANIFEST'), 'ipad', 'sketch');
const mac = await native(required('RELEASE_MAC_MANIFEST'), 'mac', 'paint');
assert.equal(new Set(captures.map(c => c.source_revision)).size, 1, 'Native device images share a source revision');
const devices = await compose('devices.webp',
  'main{height:600px;display:flex;align-items:center;justify-content:center;gap:34px;padding:24px 30px}' +
  '.device{flex:none;position:relative;padding:11px;border:1px solid #686a6d;background:linear-gradient(150deg,#303236 0%,#111214 38%,#17181b 100%);box-shadow:0 10px 19px #11121666,inset 0 0 0 2px #222428}' +
  '.device img{display:block;width:auto;object-fit:contain}' +
  '.phone{border-radius:27px;padding:9px}.phone img{height:454px;border-radius:19px}' +
  '.island{position:absolute;top:16px;left:50%;width:52px;height:13px;transform:translateX(-50%);border-radius:20px;background:#050506}' +
  '.tablet{border-radius:19px;padding:13px}.tablet img{height:444px;border-radius:8px}' +
  '.desktop{display:flex;flex-direction:column;align-items:center;flex:none;margin-top:7px}.monitor{border-radius:15px;padding:12px 12px 16px}.monitor img{height:470px;border-radius:5px}' +
  '.stand{height:36px;width:96px;background:linear-gradient(90deg,#393b40,#56585c 46%,#393b40);clip-path:polygon(22% 0,78% 0,95% 100%,5% 100%)}' +
  '.base{height:12px;width:220px;border-radius:5px;background:linear-gradient(#56585c,#292b2e);box-shadow:0 7px 12px #10111466;border-top:1px solid #74767a}',
  '<main><div class="device phone"><img src="'+dataURL(iphone)+'"><span class="island"></span></div>' +
  '<div class="device tablet"><img src="'+dataURL(ipad)+'"></div><div class="desktop"><div class="device monitor"><img src="'+dataURL(mac)+'"></div><div class="stand"></div><div class="base"></div></div></main>');

const timings = [
  { task: 'Startup', device: 'TCL Tab 11 Gen 2', previous: 22.5, current: 3.9 },
  { task: 'Startup', device: 'Wacom MovinkPad Pro 14', previous: 7.6, current: 1.5 },
  { task: 'Open a 12 MP photo', device: 'TCL Tab 11 Gen 2', previous: 27.1, current: 5.3 },
  { task: 'Open a 61 MP photo', device: 'Wacom MovinkPad Pro 14', previous: 9.8, current: 3.8 },
];
const bar = (value, kind, extra = '') => '<div class="barline"><div class="bar '+kind+'" style="width:'+(value*35)+'px"></div><span class="value">'+value.toFixed(1)+' s</span>'+extra+'</div>';
const palettes = {
  light: { ink: '#2e2e32', muted: '#64646b', previous: '#7d7d83', current: '#2871c8', baseline: '#c6c6c9' },
  dark: { ink: '#fafafb', muted: '#b9b9bf', previous: '#8e8e94', current: '#3584e4', baseline: '#505054' },
};
const speedFiles = [];
for (const [theme,palette] of Object.entries(palettes)) {
  speedFiles.push(await compose(theme === 'light' ? 'speed.webp' : 'speed-dark.webp',
    'body{color:'+palette.ink+'}'+
    'body{padding:32px 54px}.legend{height:52px;display:flex;align-items:center;gap:42px;margin-left:470px;font-size:26px;font-weight:600}.legend span{display:flex;align-items:center;gap:12px}.swatch{width:32px;height:18px;border-radius:4px}' +
    '.previous{background:'+palette.previous+'}.current{background:'+palette.current+'}.rows{position:relative;margin-top:8px}.row{display:grid;grid-template-columns:470px 1fr;align-items:center;height:117px}.label{font-size:28px;font-weight:600;line-height:1.22}.device-name{color:'+palette.muted+';font-size:24px;font-weight:400;margin-top:5px}' +
    '.bars{display:flex;flex-direction:column;gap:2px;border-left:1px solid '+palette.baseline+'}.barline{height:28px;display:flex;align-items:center;gap:14px;white-space:nowrap}.bar{height:28px;flex:none;border-radius:0 4px 4px 0}.value{font-size:27px;font-weight:600}.faster{color:'+palette.muted+';font-size:24px;font-weight:400}',
    '<div class="legend"><span><i class="swatch previous"></i>1.0.15</span><span><i class="swatch current"></i>1.0.16</span></div><div class="rows">' +
    timings.map(row => '<div class="row"><div class="label">'+row.task+'<div class="device-name">'+row.device+'</div></div><div class="bars">'+
      bar(row.previous,'previous')+bar(row.current,'current','<span class="faster">'+(row.previous/row.current).toFixed(1)+'x faster</span>')+'</div></div>').join('')+'</div>'));
}

const host = await serve(0, prepared.directory);
const viewport = { width: 1920, height: 1080, scale: 2 };
const b = await browser({ gpu: true, headless: process.env.CAPTURE_BROWSER_MODE !== 'wayland', ...viewport });
let taperBytes, taperCapture;
try {
  await b.theme('dark');
  await b.navigate(host.url);
  const e = await editor(b);
  await e.workspace('illustrator');
  const before = (await e.drawings()).selected;
  await e.invoke('new_document');
  const { createDrawing } = await import(pathToFileURL(resolve(prepared.directory, 'new-drawing-fixture.mjs')));
  const extent = [1200, 500];
  await e.b.evaluate(createDrawing({ width: extent[0], height: extent[1], name: 'Ink curves' }));
  await e.wait(`Number(layerApp.app.document_tabs(0).selected)!==${before} && !layerApp.state().document_file.busy`);
  await e.closeOtherDrawings();
  assert.deepEqual(await e.read('layerApp.state().tabs.filter(t=>t.active).map(t=>[t.width,t.height])'), [extent]);
  await e.invoke('brush');
  const pressure = .7;
  await e.brush(1, 12, '#151719');
  await e.show('tool_settings');
  await e.invoke('taper_proportional');
  const taper = { mode: 'proportional', start: .3, end: .3, pointiness: .5 };
  for (const [id,value] of [['taper_start_share',taper.start],['taper_end_share',taper.end],['taper_pointiness',taper.pointiness]]) {
    await e.send({ type: 'set_tool_setting', id, value });
  }
  assert.equal(await e.read("layerApp.state().tool_extra.find(o=>o.Choice?.id==='taper').Choice.items.find(i=>i.selected).action.command"), 'taper_proportional');
  const values = await e.read("['taper_start','taper_end','taper_pointiness'].map(id=>layerApp.state().tool_settings.find(s=>s.id===id).value)");
  [taper.start,taper.end,taper.pointiness].forEach((value,i)=>assert.ok(Math.abs(value-values[i])<.001));
  const strokes = [
    { size: 22, path: 'M 85 365 C 290 480 475 420 581 244 S 865 32 1100 114' },
    { size: 16, path: 'M 119 151 C 320 48 472 78 587 250 S 854 449 1110 350' },
    { size: 12, path: 'M 159 441 C 330 300 387 105 535 70 S 920 185 1035 270' },
    { size: 9, path: 'M 181 68 C 350 140 405 425 580 440 S 830 205 1060 175' },
  ];
  await e.frame(1, [600,250]);
  for (const stroke of strokes) {
    await e.send({ type: 'set_brush_size', value: stroke.size });
    await e.draw(stroke.path, { pressure, settleEvery: 8 });
  }
  await e.b.evaluate(`[...document.querySelectorAll('.tool-settings-body h3')].find(n=>n.textContent==='Taper'&&n.checkVisibility()).scrollIntoView({block:'start'})`);
  await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 12, y: 22, button: 'none', pointerType: 'mouse' });
  await e.wait('layerApp.app.drawing_presented()');
  await e.canvas(); await quiet(b); await settleLayout(b);
  assert.equal(await e.read('document.querySelectorAll("dialog[open]").length'),0);
  assert.deepEqual(b.errors,[]);
  const camera = await e.read('layerApp.state().camera');
  assert.ok(Math.abs(camera.zoom-viewport.scale)<.001);
  const paper = [Math.round(camera.translation[0]),Math.round(camera.translation[1]),...extent.map(n=>n*viewport.scale)];
  const panel = await e.read(`(()=>{
    const heading=[...document.querySelectorAll('.tool-settings-body h3')].find(n=>n.textContent==='Taper'&&n.checkVisibility());
    const body=heading.closest('.tool-settings-body'),last=body.querySelector('[data-tool-setting="taper_pointiness"]');
    const outer=body.getBoundingClientRect(),top=heading.getBoundingClientRect(),bottom=last.getBoundingClientRect(),d=devicePixelRatio;
    if (![heading,last].every(n=>{const r=n.getBoundingClientRect();return n.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));}))throw Error('Taper section is obscured');
    const x=Math.floor((outer.left-4)*d),y=Math.floor(top.top*d),right=Math.ceil((outer.right+4)*d),end=Math.ceil((bottom.bottom+4)*d);
    return [x,y,right-x,end-y];
  })()`);
  const path=resolve(working,'taper.png');
  await b.screenshot(path);
  taperBytes=await readFile(path);
  const png=PNG.sync.read(taperBytes);
  assert.deepEqual([png.width,png.height],[viewport.width*viewport.scale,viewport.height*viewport.scale]);
  taperCapture={id:'taper',platform:'web',source_revision:prepared.revision,hashes:prepared.hashes,theme:'dark',sha256:hash(taperBytes),
    size:[png.width,png.height],viewport,brush:'G-Pen',pressure,taper,strokes,paper_crop:paper,panel_crop:panel};
  captures.push(taperCapture);
} catch(error) {
  await b.screenshot(resolve(working,'taper-failure.png')).catch(()=>{});
  throw error;
} finally { await b.close(); await host.close(); }

function crop(bytes,bounds) {
  const source=PNG.sync.read(bytes),[x,y,w,h]=bounds;
  assert.ok(x>=0&&y>=0&&w>0&&h>0&&x+w<=source.width&&y+h<=source.height,'Crop stays inside the native Web capture');
  const image=new PNG({width:w,height:h});
  PNG.bitblt(source,image,x,y,w,h,0,0);
  return PNG.sync.write(image);
}
const paper=crop(taperBytes,taperCapture.paper_crop), panel=crop(taperBytes,taperCapture.panel_crop);
const taperFile=await compose('taper.webp',
  'main{height:600px;display:flex;align-items:center;justify-content:space-between;padding:30px 40px;gap:30px}' +
  '.paper{width:1280px;height:auto;border-radius:6px;display:block}.panel{width:410px;flex:none;padding:6px 0 3px;background:#414141;border-radius:10px;overflow:hidden}.panel img{display:block;width:100%;height:auto}',
  '<main><img class="paper" src="'+dataURL(paper)+'"><div class="panel"><img src="'+dataURL(panel)+'"></div></main>');
const { directory,...source }=prepared;
await writeFile(resolve(output,'manifest.json'),JSON.stringify({version,width,height,background:'transparent',source:{...source,theme:'dark'},captures,
  chart:{unit:'seconds',lower_is_better:true,versions:['1.0.15','1.0.16'],source:'Release note benchmark timings',timings,palettes},files:[devices,...speedFiles,taperFile]},null,2)+'\n');
console.log('Release visuals saved to '+output);
