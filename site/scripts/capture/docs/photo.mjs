import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';

const photo = new URL('../photo/terrarium.jpg', import.meta.url);
const fullWindow = { rect: [0, 0, 1920, 1080] };
const bar = '.canvas-action-bar';
const menu = '.panel-context-menu:popover-open';
const choiceMenu = '.toolbar-editor-popover:popover-open .toolbar-choice-menu';
const dialog = 'dialog[open]';
const curvesPanel = '.properties-panel .effect-properties';
const barShown = `(b=>!!b&&!b.hidden&&!b.classList.contains('suppressed')&&b.checkVisibility({visibilityProperty:true}))(document.querySelector('${bar}'))`;
const barKind = kind => `layerApp.state().canvas_bar?.context.kind===${JSON.stringify(kind)}&&${barShown}`;
const command = id => `layerApp.state().commands.find(c=>c.id===${JSON.stringify(id)})`;
const rows = { selector: '#layer-rows .layer-row', all: true };
const thumbnailsCurrent = `(()=>{const state=layerApp.state(),epoch=String(state.document_file.epoch),list=document.querySelector('#layer-rows').getBoundingClientRect();
  return state.layers.every(layer=>{const row=document.querySelector('#layer-rows .layer-row[data-layer="'+layer.id+'"]');if(!row)return true;const box=row.getBoundingClientRect();
    if(box.height===0||box.bottom<Math.max(0,list.top)||box.top>innerHeight)return true;const [content,mask]=[...row.querySelectorAll('.layer-thumbnail')].map(b=>b.querySelector('canvas'));
    return (!layer.has_thumbnail||content?.dataset.previewRevision===epoch+':'+String(layer.paint_revision))&&(!layer.has_mask||mask?.dataset.previewRevision===epoch+':'+String(layer.mask_revision));});})()`;
const analysed = `layerApp.state().histogram.status==='Exact'&&!String(layerApp.state().layer_properties?.description??'').includes('Updating')`;
const curveAnalysed = `!/Updating|Preview/.test(document.querySelector('${curvesPanel} .scope-footer')?.textContent??'Updating')`;

const frameShift = 162;
const rock = 'M226 446 C300 474 400 560 520 664 C640 704 762 764 850 862 C896 924 916 1012 912 1094 L282 1100 C222 1022 184 902 178 762 C174 642 192 522 226 446 Z';
const specks = [
  [[364, 1488], [366, 1488]],
  [[433, 1488], [435, 1488]],
  [[392, 1566], [414, 1566]],
  [[588, 1542], [612, 1546]],
  [[618, 1548], [642, 1546]],
  [[684, 1546], [716, 1546]],
  [[1203, 1563], [1205, 1563]],
];
const healSource = [1030, 1541];
const smudge = [[1098, 1541], [1160, 1541]];

export default async function photoTutorial({ e, b, shoot, message, review }) {
  const center = selector => e.read(`(()=>{const node=[...document.querySelectorAll(${JSON.stringify(selector)})].find(n=>n.checkVisibility()&&n.getBoundingClientRect().width>0);if(!node)throw Error('Missing control: '+${JSON.stringify(selector)});const r=node.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`);
  const mouse = (type, { x, y }, buttons = 0) => b.call('Input.dispatchMouseEvent', { type, x, y, button: type === 'mouseMoved' && !buttons ? 'none' : 'left', buttons, clickCount: type === 'mouseMoved' ? 0 : 1 });
  const clickAt = async point => {
    await mouse('mouseMoved', point);
    await mouse('mousePressed', point, 1);
    await mouse('mouseReleased', point);
    await b.settle();
  };
  const press = async selector => clickAt(await center(selector));
  const menuRow = label => `[...document.querySelectorAll('${menu} button')].find(b=>b.querySelector('.menu-label')?.textContent===${JSON.stringify(label)})`;
  const chooseRow = async label => {
    await e.wait(`!!${menuRow(label)}&&!${menuRow(label)}.disabled`);
    await clickAt(await e.read(`(r=>({x:r.x+r.width/2,y:r.y+r.height/2}))(${menuRow(label)}.getBoundingClientRect())`));
  };
  const closeMenu = async () => {
    await b.evaluate(`document.querySelector('${menu}')?.hidePopover();void 0`);
    await e.wait(`!document.querySelector('${menu}')`);
  };
  const parkAway = () => mouse('mouseMoved', { x: -20, y: -20 });
  const closeChoice = async () => {
    await b.evaluate(`document.querySelector('.toolbar-editor-popover:popover-open')?.hidePopover();void 0`);
    await e.wait(`!document.querySelector('${choiceMenu}')`);
  };
  const layers = () => e.read('layerApp.state().layers.map(({id,label,selected,editing,visible,reference,has_mask,adjustment_effect,paint_revision})=>({id,label,selected,editing,visible,reference,has_mask,adjustment_effect,paint_revision}))');
  const revision = id => e.read(`String(layerApp.state().layers.find(l=>Number(l.id)===${id}).paint_revision)`);
  const repainted = (id, before) => e.wait(`String(layerApp.state().layers.find(l=>Number(l.id)===${id}).paint_revision)!=='${before}'`);
  const setting = id => e.read(`layerApp.state().tool_settings.find(s=>s.id===${JSON.stringify(id)})?.value??null`);
  const size = () => e.read('[layerApp.state().tabs[0].width,layerApp.state().tabs[0].height]');
  const tap = ([x, y]) => e.stroke([[x, y], [x, y]]);
  const zen = async on => {
    if (await e.read('layerApp.state().workspace.zen_mode') !== on) await e.invoke('zen_mode');
    await e.wait(`layerApp.state().workspace.zen_mode===${on}`);
    await b.settle();
  };
  const restoreLayout = async () => {
    if (await e.read(`${command('reset_layout')}?.enabled`)) {
      await e.invoke('reset_layout');
      await e.wait("!!document.querySelector('.workspace-form[open] .suggested-action')");
      await e.click('.workspace-form[open] .suggested-action');
      await e.wait("!document.querySelector('.workspace-form[open]') && !JSON.parse(layerApp.app.workspace_view()).busy");
    }
    await zen(false);
  };
  const effect = async (name, key, value) => {
    const count = (await layers()).length;
    await e.send({ type: 'effect', action: { op: 'insert', effect: name } });
    await e.wait(`layerApp.state().layers.length===${count + 1} && layerApp.state().layer_tools.editing_layer.adjustment_effect`);
    const id = await e.read('Number(layerApp.state().layer_properties.layer)');
    if (key) await e.send({ type: 'effect', action: { op: 'set', layer: id, key, value } });
    return id;
  };
  const showAllLayers = async () => {
    const shortfall = () => e.read(`(()=>{const list=document.querySelector('#layer-rows').getBoundingClientRect();const last=[...document.querySelectorAll('#layer-rows .layer-row')].at(-1).getBoundingClientRect();return Math.ceil(last.bottom-list.bottom)})()`);
    const missing = await shortfall();
    if (missing <= 0) return;
    const from = await e.read(`(()=>{const group=document.querySelector('.dock-group:has(.dock-tab[data-panel="layers"])').getBoundingClientRect();const handle=[...document.querySelectorAll('.divider')].map(n=>n.getBoundingClientRect()).find(r=>Math.abs((r.top+r.bottom)/2-group.top)<16&&r.left<group.right&&r.right>group.left);return handle&&{x:(handle.left+handle.right)/2,y:(handle.top+handle.bottom)/2}})()`);
    assert.ok(from, 'The Layers panel has a divider above it');
    const to = { x: from.x, y: from.y - missing - 12 };
    await mouse('mouseMoved', from);
    await mouse('mousePressed', from, 1);
    for (let i = 1; i <= 10; i++) { await mouse('mouseMoved', { x: from.x, y: from.y + (to.y - from.y) * i / 10 }, 1); await b.settle(); }
    await mouse('mouseReleased', to);
    await b.settle();
    assert.ok(await shortfall() <= 0, 'Every layer row is visible');
  };

  await e.wait(`(()=>{[...document.querySelectorAll('dialog[open] button')].find(b=>b.textContent==='Keep for Later')?.click();return !document.querySelector('dialog[open]');})()`);
  await e.workspace('photographer');
  await restoreLayout();
  await e.provide('terrarium.jpg', await readFile(photo));
  await e.open('terrarium.jpg');
  assert.deepEqual(await size(), [2400, 1600], 'The photo opens at its own size');
  const opened = await layers();
  assert.deepEqual(opened.map(row => [row.label, row.visible]), [['terrarium', true], ['Paper', false]], 'The photo opens as one layer above a hidden Paper layer');
  const image = opened[0].id;
  await e.wait(thumbnailsCurrent);
  await shoot('photo/open-layers', { target: rows, ready: thumbnailsCurrent });

  await e.invoke('crop');
  await e.wait(`layerApp.state().layer_tools.tool==='crop'&&${barKind('crop')}`);
  if (await e.read(`${command('crop_delete_cropped_pixels')}?.selected`)) await press(`${bar} [data-command="crop_delete_cropped_pixels"]`);
  const openRatio = async () => {
    await press(`${bar} [data-toolbar-choice="crop-ratio"] > button`);
    await e.wait(`!!document.querySelector('${choiceMenu}')`);
  };
  await openRatio();
  const ratios = await e.read(`[...document.querySelectorAll('${choiceMenu} > button')].map(b=>b.textContent.trim())`);
  assert.deepEqual(ratios, ['Free', 'Original', '1:1', '4:5', '2:3', '5:7', '16:9'], 'The Ratio menu');
  await press(`${choiceMenu} > button:nth-child(${ratios.indexOf('4:5') + 1})`);
  await e.wait(`${command('crop_ratio_four_five')}?.selected && !document.querySelector('${choiceMenu}')`);
  assert.deepEqual([await setting('crop_width'), await setting('crop_height')], [2000, 1600], '4:5 on a landscape photo gives the largest 5:4 frame');
  await shoot('photo/crop-ratio', {
    target: [choiceMenu, bar],
    maxWidth: 1920,
    ready: barKind('crop'),
    setup: openRatio,
    variant: async () => {
      if (await e.read(`!!document.querySelector('${choiceMenu}')`)) return;
      await openRatio();
      await parkAway();
    },
    teardown: closeChoice,
  });

  await e.draw(`M1200 800 L${1200 + frameShift} 800`, { pressure: .6 });
  await e.wait(barKind('crop'));
  await shoot('photo/crop-bar', {
    target: [{ documentRect: [0, 0, 2400, 1600] }, bar],
    maxWidth: 1920,
    ready: barKind('crop'),
  });
  await press(`${bar} [data-command="apply_transform"]`);
  await e.wait(`layerApp.state().layer_tools.tool!=='crop'&&layerApp.state().canvas_bar?.context.kind!=='crop'`);
  assert.deepEqual(await size(), [2000, 1600], 'The crop applies a 2000 × 1600 canvas');
  await e.invoke('fit_canvas');

  const retouch = await e.add('Retouch');
  await e.invoke('use_reference_below');
  await e.wait(`!!layerApp.state().layers.find(l=>Number(l.id)===${image})?.reference`);
  await e.wait(thumbnailsCurrent);
  await shoot('photo/retouch-layers', { target: rows, ready: thumbnailsCurrent });

  await e.invoke('spot_heal');
  await e.wait(`layerApp.state().layer_tools.tool==='paint'&&layerApp.app.brush_ready()`);
  await e.send({ type: 'set_brush_size', value: 28 });
  await e.frame(1, [800, 1530]);
  for (const points of specks) {
    const before = await revision(retouch);
    await e.stroke(points);
    await repainted(retouch, before);
    await e.canvas();
  }

  await e.invoke('heal');
  await e.wait(`layerApp.state().brush.tool==='heal'&&layerApp.state().layer_tools.tool==='paint'&&layerApp.app.brush_ready()`);
  await e.send({ type: 'set_brush_size', value: 40 });
  await e.frame(1, [1120, 1541]);
  await e.invoke('clone_source_arm');
  await e.wait(`${command('clone_source_arm')}.selected`);
  const unset = await revision(retouch);
  await tap(healSource);
  await e.wait(`!${command('clone_source_arm')}.selected`);
  assert.equal(await revision(retouch), unset, 'Setting the source paints nothing');
  await e.stroke(smudge);
  await repainted(retouch, unset);
  const disc = [healSource[0] + smudge[1][0] - smudge[0][0], healSource[1] + smudge[1][1] - smudge[0][1]];
  await tap(disc);
  await e.wait(barKind('clone_source'));
  await shoot('photo/retouch-disc-bar', {
    target: [bar, { documentRect: [disc[0] - 60, disc[1] - 60, 120, 120] }, { documentRect: [smudge[0][0] - 30, smudge[0][1] - 30, smudge[1][0] - smudge[0][0] + 60, 60] }],
    pad: 24,
    ready: barKind('clone_source'),
  });
  await tap(disc);
  await e.wait(`layerApp.state().canvas_bar?.context.kind!=='clone_source'`);
  await e.invoke('fit_canvas');

  await e.select('Retouch');
  const curves = await effect('curves', 'rgb', { kind: 'curve', value: [[0, 0], [.25, .21], [.75, .8], [1, 1]] });
  await e.show('properties');
  const curvesExact = locale => `layerApp.state().tonal_histogram.status===${JSON.stringify(message('resources-histogram-exact', locale))}`;
  await e.wait(`${curveAnalysed}&&${curvesExact('en')}`);
  await shoot('photo/adjust-curves', {
    target: ['.dock-tab[data-panel="properties"]', `${curvesPanel} h3`, `${curvesPanel} .property-toolbar`, `${curvesPanel} .curve-coordinates`],
    ready: `${curveAnalysed}&&${curvesExact('en')}`,
    variant: async locale => {
      if (locale === 'en') return;
      await e.layer({ op: 'select', id: retouch, mask: false });
      await e.layer({ op: 'select', id: curves, mask: false });
      await e.wait(curvesExact(locale));
    },
  });
  await effect('vibrance', 'vibrance', { kind: 'number', value: 25 });

  await e.lasso(rock);
  await e.invoke('feather_selection');
  await e.wait(`layerApp.state().layer_tools.selection_resize?.kind==='feather'`);
  await e.send({ type: 'selection', action: { op: 'resize_radius', radius: 20 } });
  await e.send({ type: 'selection', action: { op: 'apply_resize' } });
  await e.wait(`!layerApp.state().layer_tools.selection_resize&&layerApp.state().layer_tools.has_selection&&${barKind('selection')}`);
  const adjustMenu = `layerApp.app.canvas_bar_choice_menu(layerApp.state().canvas_bar.context,'adjust')`;
  await e.wait(`${barKind('selection')}&&!!${adjustMenu}`);
  const toneIndex = await e.read(`${adjustMenu}.sections.flat().findIndex(item=>item.label==='Tone')`);
  const shadowsIndex = await e.read(`${adjustMenu}.sections.flat()[${toneIndex}].sections.flat().findIndex(item=>item.label==='Shadows/Highlights')`);
  const adjustReady = `(()=>{const state=layerApp.state();if(state.canvas_bar?.context.kind!=='selection')return false;const tone=layerApp.app.canvas_bar_choice_menu(state.canvas_bar.context,'adjust')?.sections.flat()[${toneIndex}];return !!tone&&tone.enabled!==false&&tone.sections.flat().every(item=>item.enabled)})()`;
  const openAdjust = async () => {
    for (let attempt = 1; ; attempt++) {
      await e.wait(`${barKind('selection')}&&${adjustReady}`);
      const labels = await e.read(`(()=>{const tone=${adjustMenu}.sections.flat()[${toneIndex}];return{tone:tone.label,shadows:tone.sections.flat()[${shadowsIndex}].label}})()`);
      const adjust = `${bar} [data-canvas-bar-menu="adjust"]`;
      const onBar = await e.read(`(n=>!!n&&!n.closest('.canvas-action-bar-item,.canvas-action-bar-completion').hidden)(document.querySelector('${adjust}'))`);
      if (onBar) await press(adjust);
      else { await press(`${bar} .canvas-action-bar-more`); await chooseRow(await e.read(`document.querySelector('${adjust}').getAttribute('aria-label')`)); }
      await e.wait(`!!document.querySelector('${menu}')`);
      await chooseRow(labels.tone);
      const enabled = `!!${menuRow(labels.shadows)}&&![...document.querySelectorAll('${menu} button:not(.submenu-back)')].some(b=>b.disabled)`;
      if (await b.until(enabled, 3000).then(() => true, () => false)) return;
      assert.ok(attempt < 5, 'The Tone menu opens with its tools enabled');
      await closeMenu();
    }
  };
  await shoot('photo/adjust-bar', {
    target: [menu, bar, { documentRect: [170, 436, 750, 670] }],
    maxWidth: 1920,
    setup: openAdjust,
    variant: async () => {
      if (await e.read(`!!document.querySelector('${menu}')`)) return;
      await openAdjust();
      await parkAway();
    },
    teardown: closeMenu,
  });
  await openAdjust();
  const count = (await layers()).length;
  await chooseRow('Shadows/Highlights');
  await e.wait(`layerApp.state().layers.length===${count + 1}&&!layerApp.state().layer_tools.has_selection&&layerApp.state().layer_tools.editing_layer.adjustment_effect`);
  const lift = await e.read('Number(layerApp.state().layer_properties.layer)');
  await e.send({ type: 'effect', action: { op: 'set', layer: lift, key: 'shadows', value: { kind: 'number', value: 35 } } });
  const finished = await layers();
  assert.deepEqual(finished.map(row => row.label), ['Shadows/Highlights', 'Vibrance', 'Curves', 'Retouch', 'terrarium', 'Paper'], 'The finished layers');
  assert.ok(finished[0].has_mask, 'Shadows/Highlights is masked to the selection');

  await e.invoke('fit_canvas');
  await e.show('properties');
  await showAllLayers();
  await e.wait(`${analysed}&&${thumbnailsCurrent}`);
  await shoot('photo/overview', { target: fullWindow, pad: 0, maxWidth: 1920, ready: `${analysed}&&${thumbnailsCurrent}` });
  await restoreLayout();

  await b.evaluate(`window.__captureSaveName='terrarium.capy';__captureFiles.delete('terrarium.capy');void 0`);
  await e.invoke('save_document');
  await e.wait(`!layerApp.state().document_file.busy && __captureFiles.has('terrarium.capy') && !document.querySelector('${dialog}')`);
  assert.equal(await e.read('layerApp.state().document_file.modified'), false, 'Save stores the drawing');

  const exportForm = async () => {
    await e.exportDialog();
    await b.evaluate(`(()=>{const d=document.querySelector('${dialog}');for(const[label,value]of[['Format','Jpeg'],['Pixel size','Fit']]){const n=d.querySelector('select[aria-label="'+label+'"]');n.value=value;n.dispatchEvent(new Event('change',{bubbles:true}));}})()`);
    await b.settle();
    const fields = Object.fromEntries(await e.read(`[...document.querySelectorAll('${dialog} label.document-size')].filter(l=>!l.hidden).map(l=>[l.firstChild.textContent.trim(),l.querySelector('select')?.selectedOptions[0]?.textContent??l.querySelector('.number-value')?.textContent??null])`));
    assert.deepEqual(['Destination', 'Format', 'Quality', 'Pixel size', 'Maximum width (px)', 'Maximum height (px)'].map(label => fields[label]), ['Web / Share', 'JPEG image', '90', 'Fit within bounds', '2048', '2048'], `The JPEG export settings: ${JSON.stringify(fields)}`);
    assert.equal(fields.Metadata, undefined, 'The photo carries no metadata to export');
  };
  let destinationAt;
  const scrollToDestination = () => b.evaluate(`(()=>{const d=document.querySelector('${dialog}');const row=[...d.querySelectorAll('label.document-size')][${destinationAt}];d.scrollTop+=row.getBoundingClientRect().top-d.getBoundingClientRect().top-8;})()`);
  const cancel = async () => {
    await b.evaluate(`[...document.querySelectorAll('${dialog} button')].find(b=>b.textContent==='Cancel').click()`);
    await e.wait(`!document.querySelector('${dialog}')`);
  };
  await shoot('photo/export-jpeg', {
    target: dialog,
    setup: async () => {
      await exportForm();
      destinationAt = await e.read(`[...document.querySelectorAll('${dialog} label.document-size')].findIndex(l=>l.firstChild.textContent.trim()==='Destination')`);
      await scrollToDestination();
    },
    variant: scrollToDestination,
    teardown: cancel,
  });
  await b.evaluate(`window.__captureSaveName='terrarium.jpg';__captureFiles.delete('terrarium.jpg');void 0`);
  await exportForm();
  await b.evaluate(`[...document.querySelectorAll('${dialog} button')].find(b=>b.textContent==='Choose File…').click()`);
  await e.wait(`!layerApp.state().document_file.busy && __captureFiles.has('terrarium.jpg') && !document.querySelector('${dialog}')`);
  const jpeg = Buffer.from(await e.read(`(()=>{const bytes=__captureFiles.get('terrarium.jpg');let text='';for(let i=0;i<bytes.length;i+=32768)text+=String.fromCharCode(...bytes.subarray(i,i+32768));return btoa(text)})()`), 'base64');
  assert.deepEqual([...jpeg.subarray(0, 2)], [0xff, 0xd8], 'Export writes a JPEG');
  await writeFile(`${review}/photo-terrarium.jpg`, jpeg);
  assert.equal(await e.read('layerApp.state().document_file.modified'), false, 'Exporting leaves the drawing unchanged');
}
