import assert from 'node:assert/strict';
import { quiet, settled } from '../shoot.mjs';

export default async function input({ e, b, shoot, example }) {
  const json = value => JSON.stringify(value);
  const key = async (key, code, windowsVirtualKeyCode, text) => {
    await b.call('Input.dispatchKeyEvent', { type: 'keyDown', key, code, windowsVirtualKeyCode, ...(text ? { text } : {}) });
    await b.call('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode });
    await b.settle();
  };
  const point = (selector, at = 'r.x+r.width/2,r.y+r.height/2') => b.evaluate(`(()=>{const n=document.querySelector(${json(selector)});if(!n)throw Error('Missing control: '+${json(selector)});n.scrollIntoView({block:'nearest',behavior:'instant'});const r=n.getBoundingClientRect();const [x,y]=[${at}];return{x,y}})()`);
  const click = async position => {
    await b.call('Input.dispatchMouseEvent', { type: 'mouseMoved', ...position });
    await b.call('Input.dispatchMouseEvent', { type: 'mousePressed', ...position, button: 'left', buttons: 1, clickCount: 1 });
    await b.call('Input.dispatchMouseEvent', { type: 'mouseReleased', ...position, button: 'left', buttons: 0, clickCount: 1 });
    await b.settle();
  };
  const press = async (selector, at) => click(await point(selector, at));
  const pressButton = async (container, label) => click(await b.evaluate(`(()=>{const n=[...document.querySelectorAll(${json(`${container} button`)})].find(n=>n.textContent.trim()===${json(label)});if(!n)throw Error('Missing button: '+${json(label)});const r=n.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()`));
  const toggle = async (selector, value) => {
    const checked = `document.querySelector(${json(selector)}).checked===${value}`;
    for (let attempt = 0; attempt < 5 && !await e.read(checked); attempt++) {
      await quiet(b);
      await press(selector);
      if (await b.until(checked, 2000).then(() => true, () => false)) break;
    }
    await e.wait(checked);
  };
  const settings = () => e.read('JSON.stringify({...layerApp.state().settings,theme:null,new_document:null})');
  const open = async page => {
    await e.send({ type: 'open_settings', page });
    await e.wait(`document.querySelector('#settings')?.open && document.querySelector('.preferences-page[data-page=${page}]')?.checkVisibility()`);
    await b.evaluate(`document.querySelector('#settings .preferences-pages').scrollTo({top:0,behavior:'instant'})`);
    await b.settle();
  };
  const close = async () => {
    await e.send({ type: 'close_settings' });
    await e.wait(`!document.querySelector('#settings')?.open`);
  };
  const reveal = async selector => {
    await e.wait(`!!document.querySelector(${json(selector)})?.checkVisibility()`);
    await b.evaluate(`document.querySelector(${json(selector)}).scrollIntoView({block:'center',behavior:'instant'})`);
    await b.settle();
  };

  await e.workspace('illustrator');
  if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  await e.provide('04-finished.capy', await example('04-finished.capy'));
  await e.load('04-finished.capy');
  await settled(b);
  const starting = await settings();

  await shoot('pen/pen-and-input', { target: '#settings', setup: () => open('input'), teardown: close });

  await shoot('pen/prediction', {
    target: '.settings-group:has(#setting-pen-pressure)',
    setup: async () => {
      await open('input');
      await reveal('.settings-group:has(#setting-pen-pressure)');
    },
    variant: () => reveal('.settings-group:has(#setting-pen-pressure)'),
    teardown: close,
  });

  const calibration = '#pen-pressure-dialog';
  const openCalibration = async () => {
    await open('input');
    await reveal('#setting-pen-pressure');
    await press('#setting-pen-pressure');
    await e.wait(`!!layerApp.state().pressure_calibration && !!document.querySelector('${calibration}') && !document.querySelector('#settings').open`);
  };
  const cancelCalibration = async () => {
    await e.send({ type: 'pressure_calibration', action: { kind: 'cancel' } });
    await e.wait(`!layerApp.state().pressure_calibration && !document.querySelector('${calibration}')`);
  };
  await shoot('pen/pressure-calibration', { target: calibration, setup: openCalibration, teardown: cancelCalibration });

  await e.workspace('painter');
  if (await e.read('layerApp.state().workspace.zen_mode')) await e.invoke('zen_mode');
  await e.newDocument(1400, 900);
  await e.frame(.85, [700, 450]);
  await e.brush(2, 36, '#394443');
  await e.draw('M220 270 C400 110 500 420 740 260 C850 180 960 240 1120 190', { pressure: t => .08 + .65 * t, tiltX: 20, tiltY: 10 });
  await e.draw('M230 470 C410 350 590 610 790 440 C930 330 1000 510 1130 420', { pressure: t => .15 + .6 * Math.sin(Math.PI * t), tiltX: 42, tiltY: 12 });
  let contact;
  await shoot('pen/pressure-live-test', {
    target: [calibration, { documentRect: [150, 100, 1040, 560] }], maxWidth: 1800,
    setup: openCalibration,
    check: async () => {
      contact = await e.read(`(()=>{const c=layerApp.state().camera,r=c.viewport[0]/innerWidth;return{x:(c.translation[0]+1060*c.zoom)/r,y:(c.translation[1]+580*c.zoom)/r}})()`);
      assert.equal(await e.read(`document.elementFromPoint(${contact?.x ?? 0},${contact?.y ?? 0})?.id`), 'canvas', 'The live pen test is on the document');
      await b.call('Input.dispatchMouseEvent', { type: 'mousePressed', ...contact, pointerType: 'pen', button: 'left', buttons: 1, clickCount: 1, force: .12 });
      await e.wait('!!layerApp.state().pressure_calibration?.editor.marker');
    },
    release: async () => {
      await b.call('Input.dispatchMouseEvent', { type: 'mouseReleased', ...contact, pointerType: 'pen', button: 'left', buttons: 0, force: 0 });
      await e.wait('!layerApp.state().pressure_calibration?.editor.marker');
    },
    teardown: cancelCalibration,
  });
  assert.equal(await settings(), starting, 'Pressure calibration cancellation restores preferences');
  const tilt = '#pen-tilt-dialog';
  await shoot('pen/tilt-calibration', {
    target: tilt,
    setup: async () => {
      await e.invoke('pen_tilt');
      await e.wait(`!!layerApp.state().tilt_calibration && !!document.querySelector('${tilt}')`);
      await e.draw('M320 600 L450 600', { pressure: .5, tiltX: 42, tiltY: 18 });
      await e.wait('layerApp.state().tilt_calibration.ready');
      await pressButton(tilt, 'More sensitive');
    },
    teardown: async () => {
      await pressButton(tilt, 'Cancel');
      await e.wait(`!layerApp.state().tilt_calibration && !document.querySelector('${tilt}')`);
    },
  });
  assert.equal(await settings(), starting, 'Tilt calibration cancellation restores preferences');
  await e.workspace('illustrator');

  const cursor = '.preference-choice:has(#setting-cursor)';
  await shoot('pen/cursor-shapes', {
    target: [cursor, `${cursor}[open] > :not(summary)`],
    setup: async () => {
      await open('input');
      await press(`${cursor} summary`);
      await e.wait(`document.querySelector(${json(cursor)}).open`);
    },
    variant: async () => {
      await e.wait(`!!document.querySelector(${json(cursor)})?.querySelector(':scope > :not(summary)')?.lastElementChild?.checkVisibility()`);
      await b.evaluate(`(()=>{const choice=document.querySelector(${json(cursor)});choice.querySelector('summary').scrollIntoView({block:'nearest',behavior:'instant'});choice.querySelector(':scope > :not(summary)').lastElementChild.scrollIntoView({block:'nearest',behavior:'instant'});})()`);
      await b.settle();
    },
    teardown: async () => {
      await press(`${cursor} summary`);
      await e.wait(`!document.querySelector(${json(cursor)}).open`);
      await close();
    },
  });

  await shoot('pen/pen-button-page', {
    target: '#settings',
    setup: async () => {
      await open('input');
      await e.send({ type: 'preferences', action: { type: 'edit_pen_button', trigger: 'pen.button.primary' } });
      await e.wait(`!!document.querySelector('#pen-button-same')?.checkVisibility()`);
      await toggle('#pen-button-same', false);
    },
    teardown: async () => {
      await toggle('#pen-button-same', true);
      await close();
    },
  });
  assert.equal(await settings(), starting, 'Pen button settings are unchanged');

  await shoot('touch/touch-gestures', {
    target: '#triggers-touch-gestures',
    setup: async () => {
      await open('input');
      await reveal('#triggers-touch-gestures');
    },
    teardown: close,
  });

  await shoot('keyboard/page', { target: '#settings', setup: () => open('shortcuts'), teardown: close });

  await shoot('keyboard/keymap-menu', {
    target: ['#keymap', '#keymap-menu[open] .preference-options'],
    setup: async () => {
      await open('shortcuts');
      await press('#keymap-menu summary');
      await e.wait(`document.querySelector('#keymap-menu').open`);
    },
    teardown: async () => {
      await press('#keymap-menu summary');
      await e.wait(`!document.querySelector('#keymap-menu').open`);
      await close();
    },
  });

  await shoot('keyboard/editor-reassign', {
    target: '#shortcut-editor',
    setup: async () => {
      await open('shortcuts');
      await e.send({ type: 'preferences', action: { type: 'shortcut_category', id: 'Tools' } });
      await press('[data-shortcut="tools.paint"] .shortcut-choose');
      await e.wait(`!!document.querySelector('#shortcut-editor')?.checkVisibility()`);
      await press('#add-shortcut');
      await key('e', 'KeyE', 69, 'e');
      await e.wait(`document.querySelector('#shortcut-editor').textContent.includes('Used by Eraser.')`);
    },
    teardown: async () => {
      await pressButton('#shortcut-editor', 'Cancel');
      await close();
    },
  });
  assert.equal(await settings(), starting, 'Shortcuts are unchanged');

  await shoot('keyboard/modifier-keys', {
    target: '#modifier-keys',
    setup: async () => {
      await open('shortcuts');
      await e.send({ type: 'preferences', action: { type: 'shortcut_category', id: 'Modifier keys' } });
      await e.wait(`!!document.querySelector('#modifier-keys')?.checkVisibility()`);
    },
    teardown: close,
  });
  assert.equal(await settings(), starting, 'Preferences are unchanged');
  assert.equal(await e.read(`!!document.querySelector('dialog[open], :popover-open, details[open]')`), false, 'No dialog or menu is left open');
}
