import { canvasBar, settled } from '../shoot.mjs';

// Original abstract study drawn with real browser pen input. SVG paths only
// sample coordinates; all color, texture, masks and clipping belong to the app.
export const colors = {
  ribbon: '#487d83', disc: '#d6ad67', block: '#bd755b',
  ink: '#244f6c', sage: '#8da98b', cream: '#f2e4c9',
};
export const shapes = {
  block: 'M185 660 L502 600 L578 964 L252 1030 Z',
  disc: 'M620 385 C620 510 518 612 392 612 C266 612 164 510 164 385 C164 260 266 158 392 158 C518 158 620 260 620 385 Z',
  ribbon: 'M870 148 C1090 362 769 461 716 573 C666 681 913 755 820 904 C777 974 710 1020 647 1061 L563 920 C655 871 686 835 670 807 C628 735 495 674 542 531 C589 387 873 330 762 260 Z',
};
export const ink = [
  ...Object.values(shapes),
  // Loose looping gestures and hatch marks, separate from the closed contours.
  'M824 898 C972 790 1120 864 1029 973 C955 1059 831 1038 873 938 C917 838 1085 823 1060 943 C1047 1004 958 1043 916 1010',
  'M218 270 C294 204 437 207 507 271',
  'M192 310 C275 241 398 239 452 268',
  ...Array.from({ length: 8 }, (_, n) => `M${256 + n * 23} 783 l-17 88`),
  'M160 111 L289 92', 'M176 133 L290 116',
];
export const presets = { gPen: 1, pencil: 2, eraser: 3, paintbrush: 4, airbrush: 5, watercolorWash: 20 };

const toolSet = '.dock-group:has(.dock-tab[data-panel="brushes"])';
const rows = { selector: '#layer-rows .layer-row', all: true };
const barWith = command => `${canvasBar} && !!document.querySelector('.canvas-action-bar [data-command="${command}"]')?.checkVisibility()`;
const navigator = '.dock-group:has(.dock-tab[data-panel="navigator"])';

async function escape(b) {
  await b.call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await b.call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await b.settle();
}

async function growLayers(e, b, distance = 230) {
  const handle = await e.read(`(()=>{const layers=document.querySelector('.dock-group:has(.dock-tab[data-panel="layers"])').getBoundingClientRect();const node=[...document.querySelectorAll('[role=separator]')].map(n=>n.getBoundingClientRect()).find(r=>r.width>r.height&&Math.abs(r.bottom-layers.top)<=8&&r.left>=layers.left-4);return node&&{x:node.left+node.width/2,y:node.top+node.height/2}})()`);
  if (!handle) throw Error('Divider above the Layers panel not found');
  const steps = 12;
  await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: handle.x, y: handle.y });
  await b.call('Input.dispatchMouseEvent', { type: 'mousePressed', x: handle.x, y: handle.y, button: 'left', buttons: 1, clickCount: 1 });
  for (let i = 1; i <= steps; i++) await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: handle.x, y: handle.y - distance * i / steps, button: 'left', buttons: 1 });
  await b.call('Input.dispatchMouseEvent', { type: 'mouseReleased', x: handle.x, y: handle.y - distance, button: 'left', buttons: 0, clickCount: 1 });
  await b.settle(); await e.idle();
}

async function layerMenu(e, b, name, submenu) {
  await b.evaluate(`(()=>{const id=layerApp.state().layers.find(r=>r.label===${JSON.stringify(name)}).id;const row=document.querySelector('.layer-row[data-layer="'+String(id)+'"]');if(!row)throw Error('No row for '+${JSON.stringify(name)}+' '+String(id)+' in '+JSON.stringify([...document.querySelectorAll('.layer-row')].map(r=>r.dataset.layer)));row.scrollIntoView({block:'nearest'});const r=row.getBoundingClientRect();row.dispatchEvent(new MouseEvent('contextmenu',{bubbles:true,clientX:r.left+150,clientY:r.top+15,button:2}));})()`);
  await e.wait(`[...document.querySelectorAll('.panel-context-menu')].some(m=>m.checkVisibility())`);
  if (submenu !== undefined) {
    await b.evaluate(`[...document.querySelectorAll('.panel-context-menu button')].filter(b=>b.checkVisibility())[${submenu}].click()`);
    await e.wait(`[...document.querySelectorAll('.panel-context-menu .submenu-back')].some(b=>b.checkVisibility())`);
  }
  await b.settle();
}

export default async function illustration({ e, b, shoot, record, examples }) {
  await e.workspace('illustrator');
  await shoot('illustration/new-drawing', {
    target: 'dialog[open].document-dialog',
    setup: async () => {
      await e.invoke('new_document');
      await e.wait('!!document.querySelector(".document-dialog input.number-entry")');
      await b.evaluate(`(()=>{const d=document.querySelector('.document-dialog');for(const label of ['Width (px)','Height (px)']){const entry=d.querySelector('input.number-entry[aria-label="'+label+'"]');entry.closest('.number-control').querySelector('.number-value').click();entry.value='1200';entry.dispatchEvent(new Event('input',{bubbles:true}));entry.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));}})()`);
      await b.settle();
    },
    teardown: async () => {
      await b.evaluate(`[...document.querySelectorAll('.document-dialog button')].find(b=>b.textContent==='Cancel').click()`);
      await e.wait("!document.querySelector('dialog[open]')");
    },
  });
  await e.newDocument(1200, 1200);
  await e.layer({ op: 'rename', id: await e.active(), name: 'Color rough' });
  await e.invoke('lasso_fill');
  await shoot('illustration/draft-lasso-fill', { target: toolSet });
  for (const name of ['block', 'disc', 'ribbon']) {
    await e.setColor(colors[name]);
    await e.invoke('lasso_fill');
    await e.draw(shapes[name], { pressure: .6 });
  }
  await e.send({ type: 'set_layer_opacity', opacity: .5 });
  await e.add('Sketch'); await e.brush(presets.pencil, 8, colors.ink, .8);
  await shoot('illustration/draft-pencils', { target: toolSet });
  for (const d of ink) await e.draw(d, { taper: true });
  await e.brush(presets.pencil, 5, colors.sage, .6);
  for (const d of ['M132 389 L656 389', 'M396 133 L396 645', 'M828 192 C1044 390 423 483 643 711 S806 898 608 1004', 'M170 651 L599 981']) await e.draw(d, { taper: true });
  await e.lasso('M800 780 L1110 780 L1110 1080 L800 1080 Z');
  await e.invoke('scale_rotate');
  await shoot('illustration/draft-transform', { target: ['.canvas-action-bar', { documentRect: [790, 770, 330, 320] }], pad: 16, maxWidth: 1700, ready: barWith('apply_transform') });
  await e.invoke('apply_transform'); await e.invoke('deselect');
  await e.brush(presets.pencil, 8, colors.ink, .8);
  await e.save('01-sketch.capy', examples);

  await e.visible('Color rough', false);
  await e.select('Sketch');
  await e.send({ type: 'set_layer_opacity', opacity: .22 });
  await e.add('Line art'); await e.brush(presets.gPen, 4.5, colors.ink);
  await shoot('illustration/ink-pens', { target: toolSet });
  for (const d of ink) await e.draw(d, { pressure: .7, taper: true });
  await e.save('02-line-art.capy', examples);
  await shoot('illustration/ink-layers', { target: rows });
  await e.show('navigator');
  await shoot('illustration/ink-navigator', { target: navigator });

  await e.visible('Sketch', false); await e.select('Sketch');
  // Full paint behind each mask lets later mask strokes reveal more of the shape.
  for (const [name, key] of [['Block', 'block'], ['Disc', 'disc'], ['Ribbon', 'ribbon']]) {
    await e.add(name); await e.brush(presets.paintbrush, 40, colors[key]);
    await e.lasso(shapes[key]);
    if (name === 'Block') await shoot('illustration/mask-selection-bar', { target: ['.canvas-action-bar', { documentRect: [175, 590, 413, 450] }], pad: 16, maxWidth: 1700, ready: barWith('invert_selection') });
    await e.invoke('mask_selection');
    await e.select(name); await e.invoke('select_all'); await e.invoke('fill_selection'); await e.invoke('deselect');
  }
  await e.select('Ribbon', true); await e.brush(presets.gPen, 20, '#ffffff');
  await e.save('03-base-colors.capy', examples);
  await shoot('illustration/mask-bar', { target: '.canvas-action-bar', ready: `${canvasBar} && layerApp.state().canvas_bar?.context?.kind === 'layer_mask'` });
  await e.select('Ribbon');
  await growLayers(e, b);
  await shoot('illustration/mask-layers', { target: rows });
  const quiescent = async () => {
    let steady = 0, last = null;
    while (steady < 4) {
      const revision = await e.read('layerApp.state().revision');
      steady = revision === last ? steady + 1 : 0;
      last = revision;
      await b.settle();
    }
  };
  const layerMenuOpen = `[...document.querySelectorAll('.panel-context-menu')].some(m=>m.checkVisibility())`;
  const closeLayerMenu = async () => {
    for (let i = 0; i < 3 && await e.read(layerMenuOpen); i++) await escape(b);
    await e.wait(`!(${layerMenuOpen})`);
  };
  const newAt = await e.read(`(()=>{const id=layerApp.state().layers.find(r=>r.label==='Ribbon').id;return layerApp.app.layer_menu(id,false).sections.flat().findIndex(item=>item.label==='New')})()`);
  const openNewMenu = async () => {
    await settled(b);
    await layerMenu(e, b, 'Ribbon', newAt);
  };
  await shoot('illustration/render-new-menu', {
    target: { selector: '.panel-context-menu', all: true }, pad: 4,
    setup: openNewMenu,
    variant: async () => {
      if (await e.read(layerMenuOpen)) return;
      await quiescent();
      await openNewMenu();
    },
    release: closeLayerMenu,
    teardown: closeLayerMenu,
  });

  await e.select('Ribbon'); await e.add('Ribbon shading', { clipped: true });
  await e.brush(presets.watercolorWash, 100, colors.ink, .65);
  for (const d of ['M928 235 C1038 396 651 424 626 565', 'M548 564 C520 705 817 738 735 870', 'M811 889 Q755 1001 647 1050']) {
    for (let pass = 0; pass < 2; pass++) await e.draw(d, { pressure: .85, taper: true });
  }
  await e.brush(presets.paintbrush, 50, colors.sage, .65);
  for (const d of ['M849 193 C958 327 699 397 641 470', 'M597 583 Q574 646 679 722', 'M737 847 Q696 915 609 958']) await e.draw(d, { taper: true });
  await e.add('Ribbon texture', { clipped: true }); await e.brush(presets.pencil, 12, colors.cream, .9);
  for (let n = 0; n < 8; n++) await e.draw(`M${632 + n * 13} ${467 - n * 6} l58 72`, { taper: true });
  for (const d of ['M860 216 Q905 283 836 316', 'M582 574 Q560 642 640 694', 'M605 980 Q668 949 700 910']) await e.draw(d, { taper: true });
  await e.select('Disc'); await e.add('Disc shading', { clipped: true });
  await e.brush(presets.airbrush, 170, colors.block, .5);
  for (const d of ['M215 470 Q392 672 571 455', 'M221 507 Q399 653 591 481', 'M273 546 Q388 622 504 562']) await e.draw(d, { pressure: .8, taper: true });
  await e.brush(presets.airbrush, 150, colors.cream, .55);
  await e.draw('M231 298 Q308 176 427 241', { taper: true });
  await e.select('Block'); await e.add('Block shading', { clipped: true });
  await e.brush(presets.paintbrush, 75, colors.ink, .45);
  for (const d of ['M472 633 L542 976', 'M223 982 L562 934']) await e.draw(d, { pressure: .75, taper: true });
  await e.brush(presets.pencil, 18, colors.cream, .85);
  for (let n = 0; n < 7; n++) await e.draw(`M${240 + n * 27} 684 l40 48`, { taper: true });
  await e.select('Ribbon shading'); await e.brush(presets.watercolorWash, 70, colors.ink, .65);
  await e.save('04-finished.capy', examples);
  await e.save('abstract-study.png', examples);
  await shoot('illustration/render-layers', { target: rows });
  await e.invoke('undo_workspace');
  await e.invoke('fit_canvas');
  await e.visible('Ribbon shading', false);
  await e.visible('Ribbon shading', true);
  await record('docs/illustration/overview');
  await record('guides/illustration');
}
