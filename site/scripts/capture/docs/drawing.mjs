import assert from 'node:assert/strict';
import { canvasBar } from '../shoot.mjs';

const json = value => JSON.stringify(value);
export const contextMenu = '.panel-context-menu:popover-open';
export const drawer = '.content-drawer[data-drawer="tool"]';
export const group = panel => `section.dock-group[data-panel="${panel}"]`;
const teal = [.2, .72, .58, 1];

export function helpers(e, b) {
  const key = async (key, code, windowsVirtualKeyCode) => {
    for (const type of ['keyDown', 'keyUp']) await b.call('Input.dispatchKeyEvent', { type, key, code, windowsVirtualKeyCode });
    await b.settle();
  };
  const escape = () => key('Escape', 'Escape', 27);
  const point = selector => e.read(`(()=>{const n=[...document.querySelectorAll(${json(selector)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0);if(!n)throw Error('Missing control: '+${json(selector)});const r=n.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
  const mouse = async (position, button = 'left') => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...position, button: 'none', buttons: 0 });
    await b.call('Input.dispatchMouseEvent', { type: 'mousePressed', ...position, button, buttons: button === 'left' ? 1 : 2, clickCount: 1 });
    await b.call('Input.dispatchMouseEvent', { type: 'mouseReleased', ...position, button, buttons: 0, clickCount: 1 });
    await b.settle();
  };
  const press = async (selector, button) => mouse(await point(selector), button);
  const mouseDrag = async (from, to, steps = 10) => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...from, button: 'none', buttons: 0 });
    await b.call('Input.dispatchMouseEvent', { type: 'mousePressed', ...from, button: 'left', buttons: 1, clickCount: 1 });
    for (let i = 1; i <= steps; i++) {
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: from.x + (to.x - from.x) * i / steps, y: from.y + (to.y - from.y) * i / steps, button: 'left', buttons: 1 });
      await b.settle();
    }
    await b.call('Input.dispatchMouseEvent', { type: 'mouseReleased', ...to, button: 'left', buttons: 0, clickCount: 1 });
    await b.settle(); await b.settle();
  };
  const workspaceReady = () => e.wait('(v=>v.ready&&!v.busy)(JSON.parse(layerApp.app.workspace_view()))');
  const workspace = async id => {
    await e.workspace(id);
    if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
    return e.read('JSON.stringify(layerApp.state().workspace.layout)');
  };
  const restoreLayout = async starting => {
    const layout = () => e.read('JSON.stringify(layerApp.state().workspace.layout)');
    for (let step = 0; step < 20 && await layout() !== starting && await e.read(`layerApp.state().commands.find(c=>c.id==='undo_workspace')?.enabled`); step++) {
      await e.invoke('undo_workspace');
      await workspaceReady();
    }
    if (await layout() !== starting) {
      await e.invoke('reset_layout');
      await e.wait("!!document.querySelector('.workspace-form[open] .suggested-action')");
      await e.click('.workspace-form[open] .suggested-action');
      await e.wait("!document.querySelector('.workspace-form[open]') && !JSON.parse(layerApp.app.workspace_view()).busy");
    }
    assert.equal(await layout(), starting, 'The workspace layout is back to where the chapter found it');
  };
  const fit = async (panel, margin = 0) => {
    const measure = () => e.read(`(()=>{
      const g=document.querySelector(${json(group(panel))});if(!g)throw Error('Missing panel '+${json(panel)});
      const p=[...g.querySelectorAll('.panel')].find(n=>n.checkVisibility());const pr=p.getBoundingClientRect();
      const leaves=[...p.querySelectorAll('*')].filter(n=>!n.childElementCount&&n.checkVisibility()&&n.getBoundingClientRect().height>0);
      const bottom=Math.max(...leaves.map(n=>n.getBoundingClientRect().bottom))+p.scrollTop;
      const need=Math.ceil(bottom+parseFloat(getComputedStyle(p).paddingBottom)+${margin}-(pr.top+p.clientTop+p.clientHeight));
      const gr=g.getBoundingClientRect(),mid=gr.left+gr.width/2;
      const dividers=[...document.querySelectorAll('.divider')].filter(d=>d.checkVisibility()).map(d=>d.getBoundingClientRect()).filter(r=>r.width>r.height&&r.left<=mid&&r.right>=mid).map(r=>({x:r.left+r.width/2,y:r.top+r.height/2}));
      return{need,below:dividers.filter(d=>d.y>gr.bottom-20).sort((a,b)=>a.y-b.y),above:dividers.filter(d=>d.y<gr.top+20).sort((a,b)=>b.y-a.y)};
    })()`);
    const fits = need => need <= 2 && need >= -14;
    for (const [side, depth] of [['below', 1], ['above', 1], ['below', 2], ['above', 2], ['below', 3], ['above', 3], ['below', 1], ['above', 1], ['below', 1], ['above', 1]]) {
      const { need, [side]: handles } = await measure();
      if (fits(need)) return;
      if (handles.length < depth) continue;
      for (let index = depth - 1; index >= 0; index--) {
        const handle = (await measure())[side][index];
        await mouseDrag(handle, { x: handle.x, y: handle.y + (side === 'below' ? need + 6 : -need - 6) });
        await workspaceReady();
      }
    }
    const { need } = await measure();
    assert.ok(fits(need), `The ${panel} panel fits its content (${need}px off)`);
  };
  const tile = predicate => e.read(`layerApp.state().workspace.layout.panels.find(p=>p.id==='toolbar').content.tiles.find(t=>${predicate}).id`);
  const tileButton = id => `.toolbar-controls[data-panel="toolbar"] > [data-tile="${id}"]`;
  const header = async command => `[data-header-item="${await e.read(`layerApp.state().workspace.layout.header.zones.flat().find(e=>e.item.control?.command===${json(command)}).id`)}"]`;
  const openMenu = async id => {
    await press(`${tileButton(id)} > button:first-child`, 'right');
    await e.wait(`!!document.querySelector(${json(contextMenu)}) && !document.querySelector('.panel-context-menu').getAnimations().length`);
    await b.settle();
  };
  const closeMenu = async () => {
    await b.evaluate(`document.querySelector(${json(contextMenu)})?.hidePopover();void 0`);
    await e.wait(`!document.querySelector(${json(contextMenu)})`);
  };
  const drawerSettled = () => e.wait(`(()=>{const root=document.querySelector(${json(drawer)});if(!root||root.inert||root.getAnimations({subtree:true}).length)return false;const viewport=document.querySelector('#workspace'),heights=[...root.querySelectorAll(':scope > .drawer-column')].map(column=>column.scrollHeight),target=layerApp.app.drawer({viewport:[viewport.clientWidth,viewport.clientHeight],column:null,heights,progress:1,from:null,closing:false})?.placement.bounds;if(!target)return false;const actual=root.getBoundingClientRect(),offset=viewport.getBoundingClientRect();return Math.abs(actual.x-offset.x-target.x)<.5&&Math.abs(actual.y-offset.y-target.y)<.5&&Math.abs(actual.width-target.width)<.5&&Math.abs(actual.height-target.height)<.5})()`);
  const openDrawer = async (command, set, choice) => {
    await e.invoke(command);
    if (!await e.read('!!layerApp.state().customization.drawer')) await press(`${await header(command)} .header-tool`);
    await e.wait(`!!document.querySelector(${json(drawer)})`);
    await drawerSettled();
    await press(`.content-drawer [data-control="${set}"] [data-tool-choice="${choice}"]`);
    await drawerSettled();
    await b.settle();
  };
  const closeDrawer = async () => {
    await e.send({ type: 'customize', action: { type: 'close_expanded' } });
    await e.wait(`!document.querySelector(${json(drawer)})`);
  };
  return { key, escape, point, mouse, press, mouseDrag, workspace, restoreLayout, fit, tile, tileButton, header, openMenu, closeMenu, drawerSettled, openDrawer, closeDrawer };
}

export default async function drawing({ e, b, shoot }) {
  const { press, workspace, restoreLayout, fit, tile, tileButton, header, openMenu, closeMenu, drawerSettled, openDrawer, closeDrawer } = helpers(e, b);
  const drag = (from, to, steps = 12) => e.stroke(Array.from({ length: steps + 1 }, (_, i) => [from[0] + (to[0] - from[0]) * i / steps, from[1] + (to[1] - from[1]) * i / steps]), { pressure: .5 });

  const paint = await workspace('illustrator');
  const ink = await e.read('layerApp.state().colors.foreground');
  await e.newDocument(1600, 1000);

  await e.send({ type: 'select_brush', id: 1 });
  await e.show('brushes');
  await fit('brushes');
  await shoot('drawing/brush-tool-set', { target: group('brushes') });

  await e.send({ type: 'select_brush', id: 4 });
  const brushTile = await tile(`t.control.kind==='command'&&t.control.command==='brush'`);
  await shoot('drawing/brush-group-menu', {
    target: [tileButton(brushTile), contextMenu],
    setup: () => openMenu(brushTile), teardown: closeMenu,
  });

  await e.send({ type: 'select_brush', id: 39 });
  await e.show('tool_settings');
  await e.wait(`!!document.querySelector('${group('tool_settings')} [data-tool-setting="distortion"]')`);
  await fit('tool_settings');
  await shoot('drawing/liquify-settings', { target: group('tool_settings') });

  await e.invoke('fill');
  await e.show('brushes');
  await fit('brushes');
  await shoot('drawing/fill-tool-set', { target: group('brushes') });
  await e.show('tool_settings');
  await fit('tool_settings');
  await shoot('drawing/fill-settings', { target: group('tool_settings') });

  await e.send({ type: 'set_color', rgba: teal });
  await e.invoke('gradient');
  const gradient = () => e.read('layerApp.state().tool_extra.find(o=>o.Gradient).Gradient.gradient');
  const editGradient = async edit => e.send({ type: 'effect', action: { op: 'gradient', target: (await gradient()).destination, edit } });
  const stops = `${group('tool_settings')} .gradient-stops button`;
  await editGradient({ kind: 'stop', index: null, position: .5, color: null, remove: false });
  await e.wait(`document.querySelectorAll(${json(stops)}).length===3`);
  await press(`${stops}:nth-child(2)`);
  await e.wait(`document.querySelector(${json(`${stops}.selected`)})?.dataset.gradientStop==='1'`);
  await fit('tool_settings');
  await shoot('drawing/gradient-tool-panel', { target: group('tool_settings') });
  await editGradient({ kind: 'reset' });

  await e.layer({ op: 'tool', tool: { figure: { shape: 'rectangle', paint: 'outline' } } });
  const figureTile = await tile(`t.control.kind==='tool_slot'&&t.control.slot==='figure'`);
  await shoot('drawing/figure-menu', {
    target: [tileButton(figureTile), contextMenu],
    setup: () => openMenu(figureTile), teardown: closeMenu,
  });
  await e.show('brushes');
  await fit('brushes');
  await shoot('drawing/figure-tool-set', { target: group('brushes') });
  await restoreLayout(paint);

  await e.newDocument(1600, 1000);
  await e.frame(.6, [780, 500]);
  await e.invoke('ruler');
  await e.layer({ op: 'tool', tool: { ruler: { kind: 'straight' } } });
  await drag([380, 270], [700, 520]);
  await e.layer({ op: 'tool', tool: { ruler: { kind: 'parallel' } } });
  await drag([640, 710], [960, 640]);
  await e.layer({ op: 'tool', tool: { ruler: { kind: 'radial' } } });
  await e.invoke('show_canvas_action_bar');
  await e.wait(`!document.querySelector('.canvas-action-bar:not([hidden]):not(.suppressed)')`);
  await e.stroke([[1120, 380], [1120, 380]], { pressure: .5 });
  await e.invoke('hand');
  await shoot('drawing/ruler-guides', { target: { documentRect: [300, 200, 960, 600] }, pad: 0 });
  await e.invoke('show_canvas_action_bar');

  await e.newDocument(1600, 1000);
  await e.frame(.6, [800, 500]);
  await e.invoke('ruler');
  await e.layer({ op: 'tool', tool: { ruler: { kind: 'straight' } } });
  await drag([420, 470], [1180, 390]);
  await e.wait(`layerApp.state().canvas_bar?.context.kind==='guide'`);
  await shoot('drawing/ruler-guide-bar', { target: [{ documentRect: [360, 330, 880, 180] }, '.canvas-action-bar'], ready: canvasBar, pad: 16 });
  await e.invoke('hand');

  const photo = await workspace('photographer');
  await e.newDocument(1600, 1000);
  await e.send({ type: 'effect', action: { op: 'insert', effect: 'gradient_fill' } });
  if (!await e.read(`!!document.querySelector('.dock-group[data-panel=properties]')`)) await e.send({ type: 'customize', action: { type: 'set_panel_visible', panel: 'properties', visible: true } });
  await e.show('properties');
  await e.wait(`!!document.querySelector('.dock-group[data-panel=properties] [data-property-key=style]')`);
  await fit('properties');
  await shoot('drawing/gradient-fill-properties', { target: group('properties') });
  await restoreLayout(photo);

  await workspace('painter');
  await e.newDocument(1600, 1000);
  await shoot('drawing/sketch-brush-drawer', {
    target: [drawer, `${await header('drawing_brush')} .header-tool`],
    setup: () => openDrawer('drawing_brush', 'brush_sets', 'Pencil'), teardown: closeDrawer,
  });
  await shoot('drawing/sketch-sculpt-drawer', {
    target: [drawer, `${await header('sculpt')} .header-tool`],
    setup: async () => {
      await openDrawer('sculpt', 'sculpt_sets', 'Liquify');
      const push = await e.read('layerApp.state().tool_set.subtools[0].preview');
      await press(`${drawer} .tools-control [data-brush="${push}"]`);
      await e.wait(`layerApp.state().brush.preset===${json(push)}`);
      await drawerSettled();
    },
    teardown: closeDrawer,
  });
  await workspace('illustrator');
  await e.layer({ op: 'tool', tool: { figure: { shape: 'line', paint: 'outline' } } });
  await e.send({ type: 'color', action: { op: 'set_slot', slot: 'foreground', color: ink } });
  await e.send({ type: 'select_brush', id: 1 });
  assert.equal(await e.read(`!!document.querySelector(${json(contextMenu)}) || !!document.querySelector(${json(drawer)})`), false);
}
