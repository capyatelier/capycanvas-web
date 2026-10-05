import { readFile } from 'node:fs/promises';
import { canvasBar } from '../shoot.mjs';

const photo = new URL('../photo/terrarium.jpg', import.meta.url);
const bar = 'section.canvas-action-bar';
const choice = '.toolbar-editor-popover:popover-open';
const header = '.header-menu[open] .popover';
const group = panel => `section.dock-group[data-panel="${panel}"]`;

export default async function transform({ e, b, shoot, examples }) {
  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const point = selector => e.read(`(()=>{const node=[...document.querySelectorAll(${JSON.stringify(selector)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0);if(!node)throw Error('Missing control: '+${JSON.stringify(selector)});const r=node.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
  const mouse = (type, { x, y }, buttons = 0) => b.call('Input.dispatchMouseEvent', { type, x, y, button: type === 'mouseMoved' && !buttons ? 'none' : 'left', buttons, clickCount: 1, pointerType: 'mouse' });
  const clickAt = async p => {
    await mouse('mouseMoved', p); await mouse('mousePressed', p, 1); await mouse('mouseReleased', p);
    await b.settle(); await pause(350);
  };
  const press = async selector => clickAt(await point(selector));
  const drag = async (from, to, steps = 12) => {
    await mouse('mouseMoved', from); await mouse('mousePressed', from, 1);
    for (let i = 1; i <= steps; i++) { await mouse('mouseMoved', { x: from.x + (to.x - from.x) * i / steps, y: from.y + (to.y - from.y) * i / steps }, 1); await b.settle(); }
    await mouse('mouseReleased', to); await b.settle(); await pause(350);
  };
  const screen = async ([x, y]) => e.read(`(()=>{const c=layerApp.app.camera(),r=layerApp.canvas.getBoundingClientRect();return{x:r.x+(${x}*c.zoom+c.translation[0])*r.width/c.viewport[0],y:r.y+(${y}*c.zoom+c.translation[1])*r.height/c.viewport[1]}})()`);
  const size = () => e.read('(t=>[t.width,t.height])(layerApp.state().tabs[0])');
  const anchor = async () => {
    const [x0, y0, x1, y1] = await e.read('layerApp.state().canvas_bar.anchor');
    const [from, to] = [await screen([x0, y0]), await screen([x1, y1])];
    return { rect: [from.x, from.y - 40, to.x - from.x, to.y - from.y + 40] };
  };
  const strip = async () => {
    const box = await e.read(`(r=>({left:r.left,top:r.top,width:r.width}))(document.querySelector('${bar}').getBoundingClientRect())`);
    return { rect: [box.left, box.top - 160, box.width, 160] };
  };
  const separator = (selector, side) => e.read(`(()=>{const g=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();
    const fits={top:r=>r.width>r.height&&Math.abs(r.bottom-g.top)<=8&&r.left<g.right&&r.right>g.left,bottom:r=>r.width>r.height&&Math.abs(r.top-g.bottom)<=8&&r.left<g.right&&r.right>g.left,
      left:r=>r.height>r.width&&Math.abs(r.right-g.left)<=8&&r.top<g.bottom&&r.bottom>g.top,right:r=>r.height>r.width&&Math.abs(r.left-g.right)<=8&&r.top<g.bottom&&r.bottom>g.top}[${JSON.stringify(side)}];
    const r=[...document.querySelectorAll('[role=separator]')].map(n=>n.getBoundingClientRect()).find(r=>r.width>0&&r.height>0&&fits(r));
    return r&&{x:r.left+r.width/2,y:r.top+r.height/2}})()`);
  const overflow = panel => e.read(`(p=>p.scrollHeight-p.clientHeight)(document.querySelector('${group(panel)} .panel'))`);
  const grow = async panel => {
    await e.show(panel);
    for (const [side, sign] of [['top', -1], ['bottom', 1]]) {
      const need = await overflow(panel);
      if (need <= 0) return;
      const handle = await separator(`.dock-group:has(.dock-tab[data-panel="${panel}"])`, side);
      if (handle) await drag(handle, { x: handle.x, y: handle.y + sign * (need + 16) });
      await e.idle(); await b.settle();
    }
  };
  const fit = async panel => {
    await grow(panel);
    if (await overflow(panel) <= 0) return;
    const others = await e.read(`(()=>{const groups=layerApp.app.layout(innerWidth,innerHeight).groups,g=groups.find(g=>g.panels.includes(${JSON.stringify(panel)}));return groups.filter(o=>o!==g&&!o.floating&&!o.tiles&&Math.abs(o.bounds.x-g.bounds.x)<2&&Math.abs(o.bounds.width-g.bounds.width)<2).flatMap(o=>o.panels)})()`);
    for (const other of others) await e.send({ type: 'customize', action: { type: 'set_panel_visible', panel: other, visible: false } });
    await e.show(panel); await e.idle(); await b.settle();
    if (await overflow(panel) > 0) throw Error(`The ${panel} panel shows all its controls`);
  };
  const content = panel => [`${group(panel)} .dock-tabs`, { selector: `${group(panel)} .panel > *`, all: true }];
  const widen = async () => {
    for (const [panel, side, dx] of [['tool_settings', 'right', -160], ['layers', 'left', 160]]) {
      const handle = await separator(`.dock-group:has(.dock-tab[data-panel="${panel}"])`, side);
      if (handle) await drag(handle, { x: handle.x + dx, y: handle.y });
    }
    await e.idle(); await b.settle();
  };
  const reset = async () => {
    if (await e.read("layerApp.state().commands.find(c=>c.id==='reset_layout').enabled")) {
      await e.invoke('reset_layout');
      await e.wait("!!document.querySelector('.workspace-form[open] .suggested-action')");
      await e.click('.workspace-form[open] .suggested-action');
      await e.wait("!document.querySelector('.workspace-form[open]') && !JSON.parse(layerApp.app.workspace_view()).busy");
    }
    if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  };
  const workspace = async id => { await e.workspace(id); await reset(); };
  const project = async name => {
    await e.provide(name, await readFile(`${examples}/${name}`));
    await e.load(name);
  };
  const terrarium = async () => {
    await e.provide('terrarium.jpg', await readFile(photo));
    await e.open('terrarium.jpg');
  };
  const clear = async () => {
    if (await e.read('layerApp.state().layer_tools.has_selection')) await e.invoke('deselect');
  };
  const openHeader = async (menu, row) => {
    await e.click(`.header-menu[data-menu="${menu}"] > summary`);
    await e.wait(`!!document.querySelector(${JSON.stringify(header)})?.checkVisibility()`);
    if (row) {
      await b.evaluate(`[...document.querySelectorAll('${header} button')].find(b=>b.querySelector('.menu-label')?.textContent===${JSON.stringify(row)}).click();void 0`);
      await e.wait(`[...document.querySelectorAll('${header} button .menu-label')].some(n=>n.checkVisibility()&&n.textContent==='Image Size…')`);
    }
    await b.settle();
  };
  const closeHeader = async () => {
    await e.click('.header-menu[open] > summary');
    await e.wait("!document.querySelector('.header-menu[open]')");
  };
  const dialog = async (command, selector) => {
    await e.invoke(command);
    await e.wait(`document.querySelector(${JSON.stringify(selector)})?.open`);
    await b.settle();
  };
  const cancelDialog = async selector => {
    await b.evaluate(`[...document.querySelectorAll('${selector} button')].find(b=>b.textContent.trim()==='Cancel').click();void 0`);
    await e.wait(`!document.querySelector(${JSON.stringify(selector)})?.open`);
  };
  const cropping = `layerApp.state().layer_tools.tool==='crop' && layerApp.state().canvas_bar?.context.kind==='crop' && ${canvasBar}`;

  await workspace('illustrator');
  await project('04-finished.capy');
  await clear();
  await e.select('Disc shading');
  await widen();
  await e.invoke('fit_canvas');
  await e.invoke('scale_rotate');
  await e.wait(canvasBar);
  await shoot('transform/transform-bar', { target: [bar, await anchor()], maxWidth: 1920, ready: canvasBar });
  await e.invoke('transform_warp');
  await e.wait(canvasBar);
  await shoot('transform/warp-bar', { target: [bar, await strip()], maxWidth: 1920, ready: canvasBar });
  await e.invoke('cancel_transform');
  await reset();
  await e.invoke('fit_canvas');
  await e.invoke('scale_rotate');
  await grow('tool_settings');
  const skew = await e.read(`[...document.querySelectorAll('${group('tool_settings')} [data-tool-setting]')].at(-1).dataset.toolSetting`);
  await shoot('transform/transform-numbers', { target: [`${group('tool_settings')} .dock-tabs`, `${group('tool_settings')} [data-tool-setting="${skew}"]`] });
  await e.invoke('cancel_transform');
  await reset();

  await e.select('Ribbon');
  await e.invoke('select_all');
  await e.wait('layerApp.state().layer_tools.has_selection');
  await shoot('transform/clipboard-edit-menu', {
    target: [{ selector: `${header} button`, index: 0 }, { selector: `${header} .menu-label`, text: ['Paste Into'] }], pad: 12,
    setup: () => openHeader('edit'),
    teardown: closeHeader,
  });
  await clear();

  await terrarium();
  await clear();
  await shoot('transform/image-menu', {
    target: header,
    setup: () => openHeader('edit', 'Image'),
    teardown: closeHeader,
  });
  await shoot('transform/image-size-dialog', {
    target: '#image-size-dialog',
    setup: () => dialog('image_size', '#image-size-dialog'),
    teardown: () => cancelDialog('#image-size-dialog'),
  });
  await shoot('transform/canvas-size-dialog', {
    target: '#canvas-size-dialog',
    setup: () => dialog('canvas_size', '#canvas-size-dialog'),
    teardown: () => cancelDialog('#canvas-size-dialog'),
  });

  await e.invoke('fit_canvas');
  await e.invoke('crop');
  await e.wait(cropping);
  await fit('tool_settings');
  await shoot('transform/crop-tool-panel', { target: content('tool_settings') });
  await e.invoke('cancel_transform');
  await reset();

  await workspace('photographer');
  await terrarium();
  await clear();
  const [width, height] = await size();
  const area = await e.read('(()=>{const c=layerApp.app.camera(),r=layerApp.canvas.getBoundingClientRect(),a=c.work_area,s=r.width/c.viewport[0];return{left:r.x+a[0]*s,top:r.y+a[1]*s,width:a[2]*s,height:a[3]*s,center:[r.x+r.width/2,r.y+r.height/2]}})()');
  const zoom = Math.min((area.height - 120) / height, (area.width - 48) / width);
  const middle = [area.left + area.width / 2, area.top + 24 + height * zoom / 2];
  await e.frame(zoom, [width / 2 + (area.center[0] - middle[0]) / zoom, height / 2 + (area.center[1] - middle[1]) / zoom]);
  await e.invoke('crop');
  await e.wait(cropping);
  await drag(await screen([0, 0]), await screen([width * .1, height * .1]));
  await e.wait(cropping);
  await shoot('transform/crop-bar', { target: [bar, { documentRect: [0, 0, width, height] }], maxWidth: 1920, ready: cropping });
  await shoot('transform/crop-ratio-menu', {
    target: [bar, choice], maxWidth: 1920, ready: cropping,
    setup: async () => { await press(`${bar} [data-toolbar-choice="crop-ratio"] > button`); await e.wait(`!!document.querySelector('${choice}')`); },
    teardown: async () => { await b.evaluate(`document.querySelector('${choice}')?.hidePopover();void 0`); await e.wait(`!document.querySelector('${choice}')`); },
  });
  await e.invoke('cancel_transform');
  await workspace('illustrator');
}
