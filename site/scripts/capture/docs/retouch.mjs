import { readFile } from 'node:fs/promises';
import { canvasBar, settleLayout } from '../shoot.mjs';

const photo = new URL('../photo/terrarium.jpg', import.meta.url);
const bar = 'section.canvas-action-bar';
const separation = '#frequency-separation-panel';
const group = panel => `section.dock-group[data-panel="${panel}"]`;
const thumbnails = `[...document.querySelectorAll('#layer-rows .layer-thumbnail canvas')].filter(c=>c.checkVisibility()&&c.getBoundingClientRect().width>0).every(c=>c.dataset.previewRevision)`;

export default async function retouch({ e, b, shoot }) {
  const steady = selector => settleLayout(b, selector, 8);
  const mouse = (type, { x, y }, buttons = 0) => b.call('Input.dispatchMouseEvent', { type, x, y, button: type === 'mouseMoved' && !buttons ? 'none' : 'left', buttons, clickCount: 1, pointerType: 'mouse' });
  const clickAt = async p => {
    await mouse('mouseMoved', p); await mouse('mousePressed', p, 1); await b.settle(); await mouse('mouseReleased', p);
    await e.canvas();
  };
  const drag = async (from, to, steps = 12) => {
    await mouse('mouseMoved', from); await mouse('mousePressed', from, 1);
    for (let i = 1; i <= steps; i++) { await mouse('mouseMoved', { x: from.x + (to.x - from.x) * i / steps, y: from.y + (to.y - from.y) * i / steps }, 1); await b.settle(); }
    await mouse('mouseReleased', to); await e.canvas();
  };
  const separator = (selector, side) => e.read(`(()=>{const g=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();
    const fits={top:r=>r.width>r.height&&Math.abs(r.bottom-g.top)<=8&&r.left<g.right&&r.right>g.left,bottom:r=>r.width>r.height&&Math.abs(r.top-g.bottom)<=8&&r.left<g.right&&r.right>g.left,
      left:r=>r.height>r.width&&Math.abs(r.right-g.left)<=8&&r.top<g.bottom&&r.bottom>g.top}[${JSON.stringify(side)}];
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
  const reset = async () => {
    if (await e.read("layerApp.state().commands.find(c=>c.id==='reset_layout').enabled")) {
      await e.invoke('reset_layout');
      await e.wait("!!document.querySelector('.workspace-form[open] .suggested-action')");
      await e.click('.workspace-form[open] .suggested-action');
      await e.wait("!document.querySelector('.workspace-form[open]') && !JSON.parse(layerApp.app.workspace_view()).busy");
    }
    if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  };
  const terrarium = async () => {
    await e.provide('terrarium.jpg', await readFile(photo));
    await e.open('terrarium.jpg');
    if (await e.read('layerApp.state().layer_tools.has_selection')) await e.invoke('deselect');
    return e.read('layerApp.state().layers.find(l=>l.selected).id');
  };
  const command = id => `layerApp.state().commands.find(c=>c.id===${JSON.stringify(id)})`;
  const sourceBar = `layerApp.state().canvas_bar?.context.kind==='clone_source' && ${canvasBar}`;

  await e.workspace('illustrator');
  await reset();
  await terrarium();
  await e.invoke('clone');
  await fit('tool_settings');
  await shoot('retouch/clone-tool-panel', { target: content('tool_settings'), variant: () => steady(group('tool_settings')) });
  await reset();

  const image = await terrarium();
  await e.layer({ op: 'new', group: false, clipped: false });
  await e.invoke('use_reference_below');
  await e.wait(`!!layerApp.state().layers.find(l=>Number(l.id)===${image})?.reference`);
  await e.invoke('clone');
  await e.invoke('fit_canvas');
  const center = await e.read('(()=>{const c=layerApp.app.camera(),r=layerApp.canvas.getBoundingClientRect(),a=c.work_area;return{x:r.x+(a[0]+a[2]/2)*r.width/c.viewport[0],y:r.y+(a[1]+a[3]/2)*r.height/c.viewport[1]}})()');
  await clickAt(center);
  await e.wait(sourceBar);
  const [x0, y0, x1, y1] = await e.read('layerApp.state().canvas_bar.anchor');
  await shoot('retouch/clone-source-bar', { target: [bar, { documentRect: [x0 - 40, y0 - 40, x1 - x0 + 80, y1 - y0 + 80] }], maxWidth: 1920, ready: sourceBar, variant: () => steady(bar) });
  await e.invoke('brush');

  await terrarium();
  await e.invoke('new_dodge_burn_layer');
  await e.wait("layerApp.state().layers.find(l=>l.editing)?.label==='Dodge & Burn'");
  await e.show('layers');
  const handle = await separator('.dock-group:has(.dock-tab[data-panel="layers"])', 'left');
  await drag(handle, { x: handle.x - 80, y: handle.y });
  await e.wait(thumbnails);
  await shoot('retouch/dodge-burn-layer', { target: group('layers'), variant: () => steady(group('layers')) });

  const original = await terrarium();
  if (!await e.read(`${command('blend_perceptual')}.selected`)) await e.invoke('blend_perceptual');
  await e.layer({ op: 'select', id: original, mask: false });
  await e.invoke('frequency_separation');
  await e.wait(`!!document.querySelector('${separation} #frequency-separation-value') && layerApp.state().layer_tools.frequency_separation?.radius===4`);
  await shoot('retouch/frequency-separation-panel', { target: separation, variant: () => steady(separation) });
  await e.send({ type: 'frequency_separation', action: { op: 'apply' } });
  await e.wait(`!document.querySelector('${separation}') && layerApp.state().layers.find(l=>l.editing)?.label==='High'`);
  const split = await e.read("layerApp.state().layers.find(l=>l.label==='Frequency Separation')");
  if (split.collapsed) await e.layer({ op: 'collapse', id: split.id });
  await e.show('layers');
  await e.wait(thumbnails);
  await shoot('retouch/frequency-separation-layers', { target: group('layers'), variant: () => steady(group('layers')) });
  await e.invoke('brush');
  await reset();
}
