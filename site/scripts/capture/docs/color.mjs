const teal = [.2, .72, .58, 1];
const recent = ['#c8553d', '#f2a541', '#3d7ab8', '#6a4c93', '#e76f51', '#2a9d8f'];
const panel = '.dock-group .color-wheel-control';
const dialog = '.color-dialog[open]';
const palettes = '.dock-group .palettes-panel';
const palettesGroup = '.dock-group:has(.palettes-panel)';
const chooser = `${palettes} .palette-chooser`;

export default async function color({ e, b, shoot }) {
  const escape = async () => {
    for (const type of ['keyDown', 'keyUp']) await b.call('Input.dispatchKeyEvent', { type, key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
    await b.settle();
  };
  const paintColor = async rgba => { await e.send({ type: 'set_color', rgba }); await e.send({ type: 'color', action: { op: 'select', slot: 'foreground' } }); };
  const create = async fields => {
    if (await e.read('layerApp.state().document_file.modified')) await e.save('_capture-scratch.capy');
    const before = await e.read('Number(layerApp.app.document_tabs(0).selected)');
    await e.invoke('new_document');
    await e.wait(`!!document.querySelector('dialog[open] [data-document-field="depth"]')`);
    await b.evaluate(`(()=>{for(const [id,value] of ${JSON.stringify(Object.entries(fields))}){const field=document.querySelector('dialog[open] [data-document-field="'+id+'"]');field.value=value;field.dispatchEvent(new Event('change'));}})()`);
    await e.click('dialog[open] [data-document-action="create"]');
    await e.wait(`Number(layerApp.app.document_tabs(0).selected)!==${before} && !layerApp.state().document_file.busy && !document.querySelector('dialog[open]')`);
    await e.closeOtherDrawings();
    await e.wait('layerApp.app.brush_ready()'); await e.invoke('fit_canvas');
  };
  const openEditor = async () => {
    await e.wait(`!document.querySelector('${dialog}')`);
    await b.evaluate(`[...document.querySelectorAll('button[aria-label="Edit Color"]')].find(b=>b.getBoundingClientRect().width>0).click();void 0`);
    await e.wait(`document.querySelector('${dialog} .color-wheel')?.width>0`);
    await b.settle();
  };
  const closeEditor = async () => {
    await e.click(`${dialog} .color-cancel`);
    await e.wait(`!document.querySelector('${dialog}')`);
  };
  const openChooser = async () => {
    if (await e.read(`document.querySelector('${chooser}').hidden`)) await e.click(`${palettes} .palette-selector`);
    await e.wait(`!document.querySelector('${chooser}').hidden`);
  };
  const closeChooser = async () => {
    if (!await e.read(`document.querySelector('${chooser}').hidden`)) await e.click(`${palettes} .palette-selector`);
    await e.wait(`document.querySelector('${chooser}').hidden`);
  };

  await e.workspace('illustrator');
  if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  await e.show('color');
  await e.send({ type: 'color', action: { op: 'shape', shape: 'circle' } });
  if (await e.read('layerApp.app.color_panel().readout') !== 'shape') await e.send({ type: 'color', action: { op: 'toggle_readout' } });
  await e.send({ type: 'color', action: { op: 'editor_memory', memory: { forms: ['rgb', 'hsb', 'oklch'], search: '' } } });

  await e.newDocument(1200, 1200);
  await e.brush(1, 40, recent[0]);
  for (const [index, hex] of recent.entries()) {
    await e.setColor(hex);
    await e.draw(`M220 ${220 + index * 150} C480 ${160 + index * 150} 720 ${280 + index * 150} 980 ${220 + index * 150}`, { pressure: .8 });
  }
  await e.wait(`layerApp.state().color_library.history.length>=${recent.length}`);

  await e.newDocument(1200, 1200);
  await paintColor(teal);
  await shoot('color/panel', {
    target: panel,
    callouts: [
      { selector: `${panel} .color-readout`, badge: 'below' },
      { selector: `${panel} .color-shape`, union: true, badge: 'left' },
      { selector: `${panel} .color-edit`, badge: 'below' },
      { selector: `${panel} [data-color-slot="foreground"], ${panel} [data-color-slot="background"]`, union: true, badge: 'above' },
      { selector: `${panel} .color-swap`, badge: 'below' },
      { selector: `${panel} [data-color-slot="transparent"]`, badge: 'above' },
      { selector: `${panel} [data-quick-color]`, union: true, badge: 'left' },
    ],
  });

  await shoot('color/edit-color', {
    target: dialog,
    setup: openEditor, teardown: closeEditor,
    callouts: [
      { selector: `${dialog} .color-editor-left` },
      { selector: `${dialog} .color-editor-head > .color-pair` },
      { selector: `${dialog} .color-pick` },
      { selector: `${dialog} .color-hex`, badge: 'left' },
      { selector: `${dialog} .color-rows`, badge: 'left' },
      { selector: `${dialog} .color-recent`, badge: 'left' },
    ],
  });
  await shoot('color/edit-color-formats', {
    target: [`${dialog} .color-editor-values`, `${dialog} .color-format-menu:not([hidden])`],
    setup: async () => {
      await openEditor();
      await e.click(`${dialog} .color-format[data-color-format="0"]`);
      await e.wait(`!!document.querySelector('${dialog} .color-format-menu:not([hidden])')`);
    },
    teardown: async () => { await escape(); await closeEditor(); },
  });
  await shoot('color/edit-color-swatches', {
    target: dialog,
    setup: async () => {
      await openEditor();
      await e.click(`${dialog} .color-swatches`);
      await e.wait(`document.querySelector('${dialog} .color-sheet').getBoundingClientRect().top===document.querySelector('${dialog} .color-editor-page').getBoundingClientRect().top`);
    },
    teardown: async () => { await escape(); await closeEditor(); },
  });

  const ocean = await e.read(`layerApp.state().color_library.palettes.find(p=>p.name==='Ocean Study').id`);
  await e.send({ type: 'color', action: { op: 'library', action: { op: 'select_palette', id: ocean } } });
  await e.show('palettes');
  await e.click(`${palettes} .palette-swatches > .palette-tile[data-id]:nth-child(4)`);
  await e.wait(`!!document.querySelector('${palettes} .palette-swatches > .palette-tile.selected')`);
  await shoot('color/palettes-panel', { target: palettesGroup, pad: 4 });
  await shoot('color/palettes-chooser', { target: palettesGroup, pad: 4, setup: openChooser, teardown: closeChooser });
  await shoot('color/palettes-menu', {
    target: '.panel-context-menu',
    setup: async () => {
      await openChooser();
      await b.evaluate(`(()=>{const row=document.querySelector('${palettes} .palette-choice'),r=row.getBoundingClientRect();row.dispatchEvent(new MouseEvent('contextmenu',{bubbles:true,cancelable:true,clientX:r.x+r.width/2,clientY:r.y+r.height/2}));})()`);
      await e.wait(`document.querySelector('.panel-context-menu').matches(':popover-open')`);
      await b.evaluate(`[...document.querySelectorAll('.panel-context-menu button')].find(n=>n.querySelector('.menu-label')?.textContent==='Export Palette').click();void 0`);
      await e.wait(`[...document.querySelectorAll('.panel-context-menu .menu-label')].some(n=>n.textContent==='Capycolor (.capycolor)')`);
    },
    teardown: async () => {
      await b.evaluate(`document.querySelector('.panel-context-menu').hidePopover();void 0`);
      await closeChooser();
    },
  });
  await e.show('color');

  await e.newDocument(1200, 1200);
  await e.setColor('#d92626');
  await e.invoke('lasso_fill');
  await e.draw('M100 560 L1100 560 L1100 1100 L100 1100 Z', { pressure: .6 });
  await paintColor(teal);
  const hover = await e.read(`(()=>{const c=layerApp.state().camera,ratio=c.viewport[0]/innerWidth;return{x:(c.translation[0]+600*c.zoom)/ratio,y:(c.translation[1]+560*c.zoom)/ratio+4}})()`);
  const pen = async () => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: hover.x, y: hover.y, button: 'none', buttons: 0, pointerType: 'pen' });
    await e.wait('layerApp.state().color_picker.preview?.rgba[0]>.8');
    await b.settle(); await b.settle();
  };
  await e.invoke('brush');
  await e.invoke('eyedropper');
  await shoot('color/eyedropper-loupe', { target: { rect: [hover.x - 70, hover.y - 70, 140, 140] }, pad: 0, check: pen });
  await escape();
  await e.wait(`!layerApp.state().layer_tools.tool.startsWith('pick_')`);

  await e.invoke('eyedropper');
  await e.wait(`layerApp.state().layer_tools.tool.startsWith('pick_')`);
  await shoot('color/eyedropper-settings', { target: '[data-control="tool_settings"]' });
  await escape();
  await e.wait(`!layerApp.state().layer_tools.tool.startsWith('pick_')`);

  await create({ depth: 'F16' });
  await e.wait('layerApp.app.color_panel().hdr===true');
  await paintColor(teal);
  await e.send({ type: 'color', action: { op: 'hdr_intensity', stops: 2 } });
  await shoot('color/panel-hdr', { target: panel });
  await e.invoke('brush');
}
