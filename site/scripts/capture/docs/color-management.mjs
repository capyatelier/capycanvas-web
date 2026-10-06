import { settleLayout } from '../shoot.mjs';
const dialog = 'dialog[open]';
const edit = '.header-menu[data-menu="edit"]';
const proof = '.dock-group:has(.proof-panel)';

export default async function colorManagement({ e, b, shoot }) {
  const steady = selector => settleLayout(b, selector, 8);
  const press = async label => {
    await b.evaluate(`[...document.querySelectorAll('${dialog} button')].find(b=>b.textContent===${JSON.stringify(label)}).click();void 0`);
    await b.settle();
  };
  const closed = () => e.wait(`!document.querySelector('${dialog}')`);
  const choose = async (selector, value) => {
    await b.evaluate(`(()=>{const field=document.querySelector(${JSON.stringify(selector)});field.value=${JSON.stringify(value)};field.dispatchEvent(new Event('change',{bubbles:true}));})()`);
    await b.settle();
  };
  const openNew = async () => {
    await e.invoke('new_document');
    await e.wait(`!!document.querySelector('${dialog}')`);
    if (await e.read(`[...document.querySelectorAll('${dialog} button')].some(b=>b.textContent==='Discard Changes')`)) await press('Discard Changes');
    await e.wait(`!!document.querySelector('${dialog} [data-document-field="depth"]')`);
  };
  const create = async (space, depth) => {
    if (await e.read('layerApp.state().document_file.modified')) await e.save('_capture-scratch.capy');
    const before = await e.read('Number(layerApp.app.document_tabs(0).selected)');
    await openNew();
    await choose(`${dialog} [data-document-field="space"]`, space);
    await choose(`${dialog} [data-document-field="depth"]`, depth);
    await e.click(`${dialog} [data-document-action="create"]`);
    await e.wait(`Number(layerApp.app.document_tabs(0).selected)!==${before} && !layerApp.state().document_file.busy && !document.querySelector('${dialog}')`);
    await e.wait(`(c=>c.space===${JSON.stringify(space)}&&c.depth===${JSON.stringify(depth)})(layerApp.app.document_color())`);
    await e.closeOtherDrawings();
    await e.wait('layerApp.app.brush_ready()'); await e.invoke('fit_canvas');
  };
  const framed = async selector => {
    const box = await e.read(`document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect().toJSON()`);
    return { rect: [box.x - 4, box.y - 4, box.width + 5, box.height + 8] };
  };
  const fillGreen = async () => {
    await e.send({ type: 'color', action: { op: 'set_slot', slot: 'foreground', color: { space: 'DisplayP3', rgba: [0, 1, 0, 1] } } });
    await e.invoke('lasso_fill');
    await e.draw('M724 468 L1324 468 L1324 1068 L724 1068 Z', { pressure: .6 });
  };

  await e.workspace('illustrator');
  await e.wait('layerApp.app.brush_ready()');
  if (await e.read(`[...document.querySelectorAll('${dialog} button')].some(b=>b.textContent==='Keep for Later')`)) { await press('Keep for Later'); await closed(); }
  if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  await e.show('navigator');
  await create('Srgb', 'U8');

  await shoot('color-management/new-dialog-color', {
    target: dialog,
    setup: async () => {
      await openNew();
      await choose(`${dialog} [data-document-field="space"]`, 'DisplayP3');
      await choose(`${dialog} [data-document-field="depth"]`, 'U8');
      await e.wait(`document.querySelector('${dialog} .document-color-summary').textContent==='Display P3 · 8-bit SDR · Perceptual'`);
    },
    teardown: async () => { await e.click(`${dialog} [data-document-action="cancel"]`); await closed(); },
  });

  await create('DisplayP3', 'U8');
  await fillGreen();
  await shoot('color-management/convert-dialog', {
    target: dialog,
    setup: async () => {
      await e.invoke('convert_color_space');
      await e.wait(`!!document.querySelector('${dialog} select[aria-label="Color space"]')`);
      await choose(`${dialog} select[aria-label="Color space"]`, 'Srgb');
      await press('Preview Complete Result');
      await e.wait(`document.querySelectorAll('${dialog} .color-comparison canvas').length===2 && document.querySelector('${dialog}').innerText.includes('Some colors exceed the destination gamut.')`);
    },
    teardown: async () => { await press('Cancel'); await closed(); },
  });

  await e.invoke('soft_proof_setup');
  await e.show('proof');
  await e.click('.proof-modes button[value="print"]');
  await b.evaluate(`(()=>{const select=document.querySelector('.proof-panel select[aria-label="Proof profile"]');select.value=[...select.querySelectorAll('optgroup[label="Standard Color Spaces"] option')].find(o=>o.textContent==='Adobe RGB (1998)').value;select.dispatchEvent(new Event('change',{bubbles:true}));})()`);
  await e.wait(`layerApp.app.proof_status().text.startsWith('Proof:') && !layerApp.app.proof_status().needed`);
  await shoot('color-management/proof-panel-print', { target: () => framed(proof), pad: 0, variant: () => steady(proof) });
  await e.click('.proof-modes button[value="off"]');
  await e.show('navigator');

  await shoot('color-management/screen-chip', {
    target: ['#screen-status', '.screen-details'],
    setup: async theme => {
      await b.call('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: theme }, { name: 'color-gamut', value: 'srgb' }, { name: 'dynamic-range', value: 'standard' }] });
      await e.wait(`!document.querySelector('#screen-status').hidden && document.querySelector('#screen-status').textContent==='Colors clipped'`);
      await e.click('#screen-status');
      await e.wait(`document.querySelector('.screen-details').matches(':popover-open')`);
    },
    variant: async () => {
      await b.evaluate(`document.querySelector('.screen-details').hidePopover();document.querySelector('#screen-status').click();void 0`);
      await e.wait(`document.querySelector('.screen-details').matches(':popover-open')`);
      await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 960, y: 25 });
      await b.settle();
    },
    teardown: async theme => {
      await b.evaluate(`document.querySelector('.screen-details').hidePopover();void 0`);
      await b.theme(theme);
    },
  });

  await create('Srgb', 'U8');
  await shoot('color-management/edit-blending-menu', {
    target: { selector: `${edit}[open] .popover`, all: true },
    setup: async () => {
      await e.click(`${edit} > summary`);
      await e.wait(`document.querySelector('${edit}').open`);
      await b.evaluate(`[...document.querySelectorAll('${edit}[open] .popover button')].find(b=>b.querySelector('.menu-label')?.textContent==='Blending').click();void 0`);
      await e.wait(`[...document.querySelectorAll('${edit}[open] .popover .menu-label')].some(n=>n.textContent==='Linear Light Blending')`);
    },
    teardown: async () => {
      await e.click(`${edit} > summary`);
      await e.wait(`!document.querySelector('${edit}').open`);
    },
  });

  await create('Srgb', 'F16');
  await e.invoke('sdr_rendition');
  await e.wait(`!!document.querySelector('.proof-panel [aria-label="SDR balance and contrast"]')`);
  await shoot('color-management/proof-panel-sdr', { target: () => framed(proof), pad: 0, variant: () => steady(proof) });
  await e.click('.proof-modes button[value="off"]');
  await e.show('navigator');
}
