import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

export async function editor(b) {
  const read = expression => b.evaluate(`JSON.parse(JSON.stringify((${expression}),(_,value)=>typeof value==='bigint'?Number(value):value))`);
  const send = async action => { await b.evaluate(`layerApp.dispatch(${JSON.stringify(action)});void 0`); await b.settle(); };
  const invoke = async command => {
    assert.ok(await read(`layerApp.state().commands.find(c=>c.id===${JSON.stringify(command)})?.enabled`), `Command enabled: ${command}`);
    await send({ type: 'invoke', command });
  };
  const layer = action => send({ type: 'layer', action });
  const wait = expression => b.until(expression, 60000);
  const click = async selector => {
    await b.evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(!e)throw Error('Missing control: '+${JSON.stringify(selector)});e.click();})()`);
    await b.settle();
  };
  const ready = async () => {
    await wait('window.layerApp?.startupTimes.complete != null');
    await wait('JSON.parse(layerApp.app.workspace_view()).ready && !JSON.parse(layerApp.app.workspace_view()).busy');
    assert.equal(await read('document.querySelector("#status").textContent.includes("unavailable")'), false, 'GPU canvas is available');
  };
  await ready();
  // Replace only the OS/browser file transport. The editor still serializes,
  // reopens and renders its real .capy projects and exports its real PNG bytes.
  await b.evaluate(`window.__captureFiles = new Map();
    window.showSaveFilePicker=async options=>{const name=window.__captureSaveName||options.suggestedName;return{name,async createWritable(){const parts=[];return{async write(value){if(value?.type==='write')value=value.data;if(value instanceof Blob)value=await value.arrayBuffer();parts.push(ArrayBuffer.isView(value)?new Uint8Array(value.buffer,value.byteOffset,value.byteLength).slice():new Uint8Array(value));},async close(){const bytes=new Uint8Array(parts.reduce((total,part)=>total+part.length,0));let offset=0;for(const part of parts){bytes.set(part,offset);offset+=part.length;}__captureFiles.set(name,bytes)},async abort(){}}}}};
    window.showOpenFilePicker=async()=>[{name:__captureOpenName,async getFile(){return new File([__captureFiles.get(__captureOpenName)],__captureOpenName)}}];void 0`);
  const provide = async (name, bytes) => {
    await b.evaluate(`__captureFiles.set(${JSON.stringify(name)},Uint8Array.from(atob(${JSON.stringify(Buffer.from(bytes).toString('base64'))}),c=>c.charCodeAt(0)));void 0`);
  };
  const drawings = () => read('layerApp.app.document_tabs(0)');
  const closeOtherDrawings = async () => {
    const keep = (await drawings()).selected;
    for (;;) {
      const other = (await drawings()).tabs.find(tab => tab.id !== keep);
      if (!other) break;
      assert.equal(other.modified, false, `Drawing saved before closing: ${other.title}`);
      await b.evaluate(`layerApp.documents.close(${other.id}n);void 0`);
      await wait(`!layerApp.app.document_tabs(0).tabs.some(tab=>Number(tab.id)===${other.id}) && !document.querySelector('dialog[open]')`);
    }
    await wait(`Number(layerApp.app.document_tabs(0).selected)===${keep} && !layerApp.state().document_file.busy`);
    await b.settle(); await new Promise(resolve => setTimeout(resolve, 2000)); await b.settle();
  };
  const selectDrawing = async title => {
    const tab = (await drawings()).tabs.find(tab => tab.title === title);
    assert.ok(tab, `Drawing is open: ${title}`);
    await b.evaluate(`layerApp.documents.select(${tab.id}n)`);
    await wait(`Number(layerApp.app.document_tabs(0).selected)===${tab.id} && !layerApp.state().document_file.busy`);
    await wait('layerApp.app.brush_ready()'); await b.settle();
    await new Promise(resolve => setTimeout(resolve, 1500)); await b.settle();
  };
  const frame = async (zoom, [x, y]) => {
    const camera = await read('layerApp.state().camera');
    const target = zoom * camera.viewport[0] / await read('innerWidth');
    const from = [camera.translation[0] + x * camera.zoom, camera.translation[1] + y * camera.zoom];
    await b.evaluate(`layerApp.app.gesture(${from[0]},${from[1]},${camera.viewport[0] / 2},${camera.viewport[1] / 2},${target / camera.zoom},0);layerApp.wake();void 0`);
    await wait(`Math.abs(layerApp.state().camera.zoom-${target})<.001`);
    await b.settle(); await b.settle();
  };
  const active = () => read('layerApp.state().layer_tools.editing_layer.id');
  const select = async (name, mask = false) => {
    const rows = await read('layerApp.state().layers');
    const row = rows.find(row => row.label === name);
    assert.ok(row, `Layer exists: ${name}`);
    await layer({ op: 'select', id: row.id, mask });
    return row.id;
  };
  const add = async (name, options = {}) => {
    await layer({ op: 'new', group: false, clipped: false, ...options });
    const id = await active(); await layer({ op: 'rename', id, name }); return id;
  };
  const visible = async (name, value) => {
    const id = (await read('layerApp.state().layers')).find(row => row.label === name)?.id;
    assert.ok(id, `Layer exists: ${name}`); await layer({ op: 'visibility', id, value });
  };
  const show = async panel => {
    await b.evaluate(`(()=>{const g=layerApp.app.layout(innerWidth,innerHeight).groups.find(g=>g.panels.includes(${JSON.stringify(panel)}));if(!g)throw Error('Missing panel '+${JSON.stringify(panel)});if(g.active!==${JSON.stringify(panel)})layerApp.dispatch({type:'select_panel_tab',group:g.id,panel:${JSON.stringify(panel)}});})()`);
    await b.settle();
  };
  const brush = async (preset, size = 10, color = '#303638', opacity = 1) => {
    await send({ type: 'select_brush', id: preset });
    await send({ type: 'set_brush_size', value: size });
    await send({ type: 'set_brush_opacity', value: opacity });
    await setColor(color);
    await wait('layerApp.app.brush_ready()');
  };
  const setColor = color => send({ type: 'set_color', rgba: typeof color === 'string' ? [...color.match(/[\da-f]{2}/gi).map(byte => parseInt(byte, 16) / 255), 1] : color });
  const path = (d, spacing = 7) => read(`(()=>{const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',${JSON.stringify(d)});const length=p.getTotalLength(),count=Math.max(2,Math.ceil(length/${spacing}));return Array.from({length:count+1},(_,i)=>{const p0=p.getPointAtLength(length*i/count);return[p0.x,p0.y]});})()`);
  const stroke = async (points, { pressure = .65, taper = false, settleEvery = 10 } = {}) => {
    const camera = await read('layerApp.state().camera');
    assert.equal(camera.rotation, 0); assert.deepEqual(camera.flipped, [false, false]);
    const ratio = camera.viewport[0] / await read('innerWidth');
    const obstructed = await read(`(()=>{const points=${JSON.stringify(points)},camera=${JSON.stringify(camera)},ratio=${ratio};return points.map(([x,y])=>[(camera.translation[0]+x*camera.zoom)/ratio,(camera.translation[1]+y*camera.zoom)/ratio]).map(([x,y])=>({x,y,node:document.elementFromPoint(x,y)})).filter(p=>p.node?.id!=='canvas').map(p=>({x:p.x,y:p.y,element:p.node?.outerHTML.slice(0,240)})).slice(0,3)})()`);
    assert.deepEqual(obstructed, [], 'Pen path is on the canvas, clear of panels and dialogs');
    for (let i = 0; i < points.length; i++) {
      const t = i / (points.length - 1), [x, y] = points[i];
      const position = { x: (camera.translation[0] + x * camera.zoom) / ratio, y: (camera.translation[1] + y * camera.zoom) / ratio };
      assert.ok(position.x >= 0 && position.x < 1920 && position.y >= 0 && position.y < 1080, `Point inside viewport: ${JSON.stringify(position)}`);
      await b.call('Input.dispatchMouseEvent', { type: i === 0 ? 'mousePressed' : i === points.length - 1 ? 'mouseReleased' : 'mouseMoved', ...position,
        button: 'left', buttons: i === points.length - 1 ? 0 : 1, clickCount: i === 0 ? 1 : 0, pointerType: 'pen', force: i === points.length - 1 ? 0 : taper ? .08 + pressure * Math.sin(Math.PI * t) ** .7 : pressure });
      if (i % settleEvery === 0) await b.settle();
    }
    await b.settle();
  };
  const draw = async (d, options) => stroke(await path(d), options);
  const lasso = async d => { await invoke('lasso'); await draw(d, { pressure: .6 }); await wait('layerApp.state().layer_tools.has_selection'); };
  const exportDialog = async () => {
    await invoke('export_document');
    await wait(`[...document.querySelectorAll('dialog[open] button')].some(b=>b.textContent==='Choose File…')`);
    await b.settle();
  };
  const save = async (name, directory) => {
    await b.evaluate(`window.__captureSaveName=${JSON.stringify(name)};__captureFiles.delete(__captureSaveName);void 0`);
    if (name.endsWith('.png')) {
      await exportDialog();
      assert.deepEqual(await read(`['Dynamic range','Format'].map(label=>document.querySelector('dialog[open] select[aria-label="'+label+'"]').value)`), ['sdr', 'Png'], 'Export writes an SDR PNG');
      await b.evaluate(`[...document.querySelectorAll('dialog[open] button')].find(b=>b.textContent==='Choose File…').click()`);
    } else await invoke('save_document_as');
    await wait(`!layerApp.state().document_file.busy && __captureFiles.has(${JSON.stringify(name)}) && !document.querySelector('dialog[open]')`);
    const base64 = await read(`(()=>{const bytes=__captureFiles.get(${JSON.stringify(name)});let text='';for(let i=0;i<bytes.length;i+=32768)text+=String.fromCharCode(...bytes.subarray(i,i+32768));return btoa(text)})()`);
    const bytes = Buffer.from(base64, 'base64');
    if (name.endsWith('.png')) assert.deepEqual([...bytes.subarray(0, 8)], [137,80,78,71,13,10,26,10]);
    else assert.ok(bytes.length > 100, 'Real project bytes');
    if (directory) await writeFile(`${directory}/${name}`, bytes);
    return bytes;
  };
  const open = async (name, { keep = false } = {}) => {
    if (await read('layerApp.state().document_file.modified')) await save('_capture-scratch.capy');
    const before = (await drawings()).selected;
    await b.evaluate(`window.__captureOpenName=${JSON.stringify(name)};void 0`);
    await invoke('open_document');
    await wait(`Number(layerApp.app.document_tabs(0).selected)!==${before} && !layerApp.state().document_file.busy`);
    if (!keep) await closeOtherDrawings();
    await wait('layerApp.app.brush_ready()'); await invoke('fit_canvas');
  };
  const load = async (name, options) => {
    await open(name, options);
    assert.equal(await read('layerApp.state().document_file.location?.name'), name, `Opened project: ${name}`);
  };
  const newDocument = async (width, height) => {
    if (await read('layerApp.state().document_file.modified')) await save('_capture-scratch.capy');
    const before = (await drawings()).selected;
    await invoke('new_document');
    await wait('!!document.querySelector(".document-dialog input[type=number]")');
    await b.evaluate(`(()=>{const fields=document.querySelectorAll('.document-dialog input[type=number]');fields[0].value=${width};fields[1].value=${height};[...document.querySelectorAll('.document-dialog button')].find(b=>b.textContent==='Create').click();})()`);
    await wait(`Number(layerApp.app.document_tabs(0).selected)!==${before} && !layerApp.state().document_file.busy && layerApp.state().tabs[0].width===${width}`);
    await closeOtherDrawings();
    await wait('layerApp.app.brush_ready()'); await invoke('fit_canvas');
  };
  const workspace = async id => {
    const switched = `JSON.parse(layerApp.app.workspace_view()).id==='builtin:workspace:${id}' && !JSON.parse(layerApp.app.workspace_view()).busy`;
    for (let attempt = 1; !(await b.evaluate(switched)); attempt++) {
      await wait('!layerApp.state().document_file.busy && !JSON.parse(layerApp.app.workspace_view()).busy');
      await click(`.workspace-switcher button[data-workspace-id="builtin:workspace:${id}"]`);
      try { await b.until(switched, 10000); } catch (error) { if (attempt === 5) throw error; }
    }
    await b.settle(); await invoke('fit_canvas');
  };
  return { b, read, send, invoke, layer, wait, click, ready, active, select, add, visible, show, brush, setColor, path, stroke, draw, lasso, exportDialog, save, provide, drawings, closeOtherDrawings, selectDrawing, frame, open, load, newDocument, workspace };
}
