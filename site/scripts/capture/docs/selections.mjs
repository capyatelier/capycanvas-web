import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { canvasBar, quiet, settleLayout } from '../shoot.mjs';

const photo = new URL('../photo/terrarium.jpg', import.meta.url);
const bar = 'section.canvas-action-bar';
const barItem = `${bar} .canvas-action-bar-item`;
const menu = '.panel-context-menu:popover-open';
const drawer = '.content-drawer';
const tonal = `${drawer} .tonal-settings`;
const group = panel => `section.dock-group[data-panel="${panel}"]`;

export default async function selections({ e, b, shoot, example }) {
  const point = async selector => {
    await settleLayout(b, selector, 4);
    return e.read(`(()=>{const node=[...document.querySelectorAll(${JSON.stringify(selector)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0);if(!node)throw Error('Missing control: '+${JSON.stringify(selector)});const r=node.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
  };
  const clickAt = async ({ x, y }, pointerType = 'mouse') => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, button: 'none', buttons: 0, pointerType });
    for (const type of ['mousePressed', 'mouseReleased']) {
      await b.call('Input.dispatchMouseEvent', { type, x, y, button: 'left', buttons: type === 'mousePressed' ? 1 : 0, clickCount: 1, pointerType, force: type === 'mousePressed' ? .7 : 0 });
    }
    await e.canvas(); await e.idle();
  };
  const press = async selector => { await quiet(b); await clickAt(await point(selector)); };
  const screen = async ([x, y]) => e.read(`(()=>{const c=layerApp.app.camera(),r=layerApp.canvas.getBoundingClientRect();return{x:r.x+(${x}*c.zoom+c.translation[0])*r.width/c.viewport[0],y:r.y+(${y}*c.zoom+c.translation[1])*r.height/c.viewport[1]}})()`);
  const size = () => e.read('(t=>[t.width,t.height])(layerApp.state().tabs[0])');
  const mouse = (type, { x, y }, buttons = 0) => b.call('Input.dispatchMouseEvent', { type, x, y, button: type === 'mouseMoved' && !buttons ? 'none' : 'left', buttons, clickCount: 1, pointerType: 'mouse' });
  const drag = async (from, to, steps = 12) => {
    await mouse('mouseMoved', from); await mouse('mousePressed', from, 1);
    for (let i = 1; i <= steps; i++) { await mouse('mouseMoved', { x: from.x + (to.x - from.x) * i / steps, y: from.y + (to.y - from.y) * i / steps }, 1); await b.settle(); }
    await mouse('mouseReleased', to); await e.canvas(); await e.idle();
  };
  const separator = (selector, side) => e.read(`(()=>{const g=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();
    const fits={top:r=>r.width>r.height&&Math.abs(r.bottom-g.top)<=8&&r.left<g.right&&r.right>g.left,bottom:r=>r.width>r.height&&Math.abs(r.top-g.bottom)<=8&&r.left<g.right&&r.right>g.left,left:r=>r.height>r.width&&Math.abs(r.right-g.left)<=8&&r.top<g.bottom&&r.bottom>g.top}[${JSON.stringify(side)}];
    const r=[...document.querySelectorAll('[role=separator]')].map(n=>n.getBoundingClientRect()).find(r=>r.width>0&&r.height>0&&fits(r));
    return r&&{x:r.left+r.width/2,y:r.top+r.height/2}})()`);
  const resize = async (panel, moves) => {
    const selector = `.dock-group:has(.dock-tab[data-panel="${panel}"])`;
    for (const [side, dx, dy] of moves) {
      const handle = await separator(selector, side);
      assert.ok(handle, `Divider beside the ${panel} panel: ${side}`);
      await drag(handle, { x: handle.x + dx, y: handle.y + dy });
    }
    await e.idle(); await b.settle();
  };
  const overflow = panel => e.read(`(p=>p.scrollHeight-p.clientHeight)(document.querySelector('${group(panel)} .panel'))`);
  const fit = async panel => {
    await e.show(panel);
    for (const [side, sign] of [['top', -1], ['bottom', 1]]) {
      const need = await overflow(panel);
      if (need <= 0) break;
      await resize(panel, [[side, 0, sign * (need + 16)]]);
    }
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
  const opener = async () => {
    const id = await e.read(`String(layerApp.state().workspace.layout.header.zones.flat().find(entry=>entry.item.control?.command==='select').id)`);
    return `[data-header-item="${id}"] .header-tool`;
  };
  const drawerOpen = () => e.read('!!layerApp.state().customization.drawer');
  const openDrawer = async () => {
    const button = await opener();
    if (!await drawerOpen()) await press(button);
    if (!await drawerOpen()) await press(button);
    await e.wait(`!!layerApp.state().customization.drawer && document.querySelector(${JSON.stringify(drawer)})?.checkVisibility()`);
    await settleLayout(b, drawer, 4);
  };
  const closeDrawer = async () => {
    if (await drawerOpen()) await press(await opener());
    await e.wait('!layerApp.state().customization.drawer');
    await b.settle();
  };
  const project = async name => {
    await e.provide(name, await example(name));
    await e.load(name);
  };
  const terrarium = async () => {
    await e.provide('terrarium.jpg', await readFile(photo));
    await e.open('terrarium.jpg');
  };
  const clear = async () => {
    if (await e.read('layerApp.state().layer_tools.quick_mask')) await e.invoke('return_to_artwork');
    if (await e.read('layerApp.state().layer_tools.has_selection')) await e.invoke('deselect');
  };
  const hasSelection = () => e.wait('layerApp.state().layer_tools.has_selection');
  const openMenu = async (selector, open) => {
    await e.click(selector);
    await e.wait(`!!document.querySelector(${JSON.stringify(open)})?.checkVisibility()`);
    await b.settle();
  };
  const closePopover = async () => {
    await b.evaluate(`document.querySelector('${menu}')?.hidePopover();void 0`);
    await e.wait(`!document.querySelector('${menu}')`);
  };
  const nearBar = async () => {
    await e.invoke('fit_canvas');
    for (let attempt = 0; attempt < 3; attempt++) {
      await e.invoke('zoom_out');
      await e.wait(canvasBar);
      const [, height] = await size();
      const edge = await screen([0, height]);
      const box = await e.read(`(r=>({top:r.top,bottom:r.bottom}))(document.querySelector('${bar}').getBoundingClientRect())`);
      if (box.top > edge.y && box.top - edge.y < 40) return edge.y;
    }
    assert.fail('The selection bar sits below the selection');
  };

  await workspace('painter');
  await project('04-finished.capy');
  await clear();
  await e.invoke('rectangle_select');
  await shoot('selections/tools-sketch-select-drawer', { target: drawer, setup: openDrawer });
  await closeDrawer();

  await terrarium();
  await clear();
  await e.invoke('tonal_select');
  await openDrawer();
  await press(`${drawer} [data-tool-choice-tone="4"]`);
  await hasSelection();
  await shoot('selections/tonal-range-settings', { target: tonal, setup: openDrawer });
  await closeDrawer();
  await e.invoke('quick_mask');
  await e.wait('layerApp.state().layer_tools.quick_mask');
  const [photoWidth, photoHeight] = await size();
  await e.frame(.5, [photoWidth / 2, photoHeight / 2]);
  await shoot('selections/quick-mask-overlay', { target: { documentRect: [0, 0, photoWidth, photoHeight] }, pad: 0, maxWidth: 1920 });
  await e.invoke('return_to_artwork');
  await clear();
  await openDrawer();
  const custom = await e.read(`Math.max(...[...document.querySelectorAll('${drawer} [data-tool-choice-tone]')].map(n=>Number(n.dataset.toolChoiceTone)))`);
  await press(`${drawer} [data-tool-choice-tone="${custom}"]`);
  await e.wait(`!!document.querySelector('${tonal} .range-control')`);
  await shoot('selections/tonal-range-custom', { target: tonal, setup: openDrawer });
  await closeDrawer();
  await clear();

  await workspace('illustrator');
  await project('04-finished.capy');
  await clear();
  await e.invoke('polygon_select');
  let corners = [], drawn = false;
  const drawPolygon = async () => {
    const area = await e.read('(()=>{const c=layerApp.app.camera(),r=layerApp.canvas.getBoundingClientRect(),a=c.work_area,s=r.width/c.viewport[0];return{x:r.x+(a[0]+a[2]/2)*s,bottom:r.y+(a[1]+a[3])*s}})()');
    corners = [[-190, -175], [170, -190], [30, -100]].map(([dx, dy]) => ({ x: area.x + dx, y: area.bottom + dy }));
    for (const p of corners) await clickAt(p, 'pen');
    drawn = true;
  };
  await shoot('selections/tools-polygon-bar', {
    target: () => [bar, { rect: [Math.min(...corners.map(p => p.x)) - 12, Math.min(...corners.map(p => p.y)) - 12, 0, 0] }],
    maxWidth: 1920, ready: canvasBar,
    setup: drawPolygon,
    variant: async () => { if (!drawn) await drawPolygon(); await e.wait(canvasBar); },
    release: async () => { await e.invoke('cancel_selection'); drawn = false; },
  });
  await clear();

  await e.invoke('auto_select');
  await shoot('selections/tools-auto-select-settings', {
    target: group('tool_settings'),
    variant: async () => {
      await reset();
      await settleLayout(b, group('tool_settings'), 8);
      await fit('tool_settings');
      await settleLayout(b, group('tool_settings'), 8);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
      await e.wait(`!document.querySelector('#hover-tooltip').matches(':popover-open')`);
    },
  });

  await e.select('Ribbon');
  await e.invoke('rectangle_select');
  await e.invoke('select_all');
  await hasSelection();
  const edge = await nearBar();
  const around = async () => {
    const box = await e.read(`(r=>({left:r.left,top:r.top,width:r.width,height:r.height}))(document.querySelector('${bar}').getBoundingClientRect())`);
    return [bar, { rect: [box.left, edge - 24, box.width, box.top + box.height - edge + 24] }];
  };
  await shoot('selections/working-selection-bar', { target: around, maxWidth: 1920, ready: canvasBar });
  await shoot('selections/working-refine-menu', {
    target: [bar, menu], maxWidth: 1920, ready: canvasBar,
    setup: () => openMenu(`${bar} [data-canvas-bar-menu="refine"]`, menu),
    variant: async () => {
      if (await e.read(`!!document.querySelector('${menu}')`)) return;
      await e.wait(`${canvasBar} && [...document.querySelectorAll('${barItem}')].some(r=>!r.hidden&&r.checkVisibility())`);
      const { direct, index } = await e.read(`(()=>{const rows=[...document.querySelectorAll('${barItem}')],shown=rows.filter(r=>!r.hidden&&r.checkVisibility()).length,at=rows.findIndex(r=>r.querySelector('[data-canvas-bar-menu="refine"]'));return{direct:at<shown,index:at-shown}})()`);
      if (direct) await press(`${bar} [data-canvas-bar-menu="refine"]`);
      else {
        await press(`${bar} .canvas-action-bar-more`);
        await e.wait(`!!document.querySelector('${menu}') && document.querySelectorAll('${menu} > button').length>${index}`);
        await quiet(b);
        await clickAt(await e.read(`(()=>{const r=document.querySelectorAll('${menu} > button')[${index}].getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`));
      }
      await e.wait(`!!document.querySelector('${menu}') && !document.querySelector('${menu}').getAnimations().length`);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: -20, y: -20 });
    },
    teardown: closePopover,
  });
  await e.invoke('fit_canvas');
  await shoot('selections/working-select-menu', {
    target: '.header-menu[open] .popover',
    setup: () => openMenu('.header-menu[data-menu="select"] > summary', '.header-menu[open] .popover'),
    teardown: async () => { await e.click('.header-menu[data-menu="select"] > summary'); await e.wait("!document.querySelector('.header-menu[open]')"); },
  });
  await clear();

  await reset();
  const ribbon = await e.select('Ribbon');
  await e.send({ type: 'selection', action: { op: 'load_thumbnail', id: ribbon, mask: true, shift: false, alt: false } });
  await hasSelection();
  await e.invoke('save_selection_layer');
  await e.send({ type: 'layer', action: { op: 'cancel_rename' } });
  await e.invoke('fit_canvas');
  await shoot('selections/selection-layer-bar', { target: bar, maxWidth: 1920, ready: canvasBar });
  await e.invoke('return_to_artwork');
  await e.show('layers');
  await resize('layers', [['left', -80, 0]]);
  await shoot('selections/selection-layer-row', { target: group('layers') });
  await reset();
  await clear();

  await terrarium();
  await clear();
  await e.invoke('select_all');
  await hasSelection();
  await e.invoke('quick_mask');
  await e.wait('layerApp.state().layer_tools.quick_mask');
  await shoot('selections/quick-mask-bar', { target: bar, maxWidth: 1920, ready: canvasBar });
  await e.show('properties');
  await shoot('selections/quick-mask-properties', { target: [`${group('properties')} .dock-tabs`, { selector: `${group('properties')} .properties-panel > *`, all: true }] });
  await clear();
  await reset();
}
