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
    window.showSaveFilePicker=async options=>{const name=window.__captureSaveName||options.suggestedName;return{name,async createWritable(){let bytes;return{async write(value){bytes=new Uint8Array(value)},async close(){__captureFiles.set(name,bytes)},async abort(){}}}}};
    window.showOpenFilePicker=async()=>[{name:__captureOpenName,async getFile(){return new File([__captureFiles.get(__captureOpenName)],__captureOpenName)}}];void 0`);
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
    const obstructed = await read(`(()=>{const points=${JSON.stringify(points)},camera=${JSON.stringify(camera)};return points.map(([x,y])=>[camera.translation[0]+x*camera.zoom,camera.translation[1]+y*camera.zoom]).map(([x,y])=>({x,y,node:document.elementFromPoint(x,y)})).filter(p=>p.node?.id!=='canvas').map(p=>({x:p.x,y:p.y,element:p.node?.outerHTML.slice(0,240)})).slice(0,3)})()`);
    assert.deepEqual(obstructed, [], 'Pen path is on the canvas, clear of panels and dialogs');
    for (let i = 0; i < points.length; i++) {
      const t = i / (points.length - 1), [x, y] = points[i];
      const position = { x: camera.translation[0] + x * camera.zoom, y: camera.translation[1] + y * camera.zoom };
      assert.ok(position.x >= 0 && position.x < 1920 && position.y >= 0 && position.y < 1080, `Point inside viewport: ${JSON.stringify(position)}`);
      await b.call('Input.dispatchMouseEvent', { type: i === 0 ? 'mousePressed' : i === points.length - 1 ? 'mouseReleased' : 'mouseMoved', ...position,
        button: 'left', buttons: i === points.length - 1 ? 0 : 1, clickCount: i === 0 ? 1 : 0, pointerType: 'pen', force: i === points.length - 1 ? 0 : taper ? .08 + pressure * Math.sin(Math.PI * t) ** .7 : pressure });
      if (i % settleEvery === 0) await b.settle();
    }
    await b.settle();
  };
  const draw = async (d, options) => stroke(await path(d), options);
  const lasso = async d => { await invoke('lasso'); await draw(d, { pressure: .6 }); assert.ok(await read('layerApp.state().layer_tools.has_selection'), 'Lasso produced a pixel selection'); };
  const save = async (name, directory) => {
    await b.evaluate(`window.__captureSaveName=${JSON.stringify(name)};__captureFiles.delete(__captureSaveName);void 0`);
    await invoke(name.endsWith('.png') ? 'export_document' : 'save_document_as');
    await wait(`!layerApp.state().document_file.busy && __captureFiles.has(${JSON.stringify(name)})`);
    const base64 = await read(`(()=>{const bytes=__captureFiles.get(${JSON.stringify(name)});let text='';for(let i=0;i<bytes.length;i+=32768)text+=String.fromCharCode(...bytes.subarray(i,i+32768));return btoa(text)})()`);
    const bytes = Buffer.from(base64, 'base64');
    if (name.endsWith('.png')) assert.deepEqual([...bytes.subarray(0, 8)], [137,80,78,71,13,10,26,10]);
    else assert.ok(bytes.length > 100, 'Real project bytes');
    if (directory) await writeFile(`${directory}/${name}`, bytes);
    return bytes;
  };
  const load = async name => {
    if (await read('layerApp.state().document_file.modified')) await save('_capture-scratch.capy');
    await b.evaluate(`window.__captureOpenName=${JSON.stringify(name)};void 0`);
    await invoke('open_document');
    await wait(`!layerApp.state().document_file.busy && layerApp.state().document_file.location?.name===${JSON.stringify(name)}`);
    await wait('layerApp.app.brush_ready()'); await invoke('fit_canvas');
  };
  const newDocument = async (width, height) => {
    if (await read('layerApp.state().document_file.modified')) await save('_capture-scratch.capy');
    await invoke('new_document');
    await wait('!!document.querySelector(".document-dialog input[type=number]")');
    await b.evaluate(`(()=>{const fields=document.querySelectorAll('.document-dialog input[type=number]');fields[0].value=${width};fields[1].value=${height};[...document.querySelectorAll('.document-dialog button')].find(b=>b.textContent==='Create').click();})()`);
    await wait(`!layerApp.state().document_file.busy && layerApp.state().tabs[0].width===${width}`);
    await wait('layerApp.app.brush_ready()'); await invoke('fit_canvas');
  };
  const workspace = async id => {
    await click(`.workspace-switcher button[data-workspace-id="builtin:workspace:${id}"]`);
    await wait(`JSON.parse(layerApp.app.workspace_view()).id==='builtin:workspace:${id}' && !JSON.parse(layerApp.app.workspace_view()).busy`);
    await b.settle(); await invoke('fit_canvas');
  };
  return { b, read, send, invoke, layer, wait, click, ready, active, select, add, visible, show, brush, setColor, path, stroke, draw, lasso, save, load, newDocument, workspace };
}
