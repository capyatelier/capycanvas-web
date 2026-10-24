import assert from 'node:assert/strict';
import { canvasBar } from '../shoot.mjs';
import { group, helpers } from './drawing.mjs';

const ochre = { space: 'Srgb', rgba: [.839, .678, .404, 1] };
const swash = 'M240 560 C380 260 640 260 760 470 S1060 720 1200 480';
const ribbon = 'M520 780 C640 670 760 670 880 780 S1100 880 1220 760';
const noticeShown = `document.querySelector('.canvas-notice')?.checkVisibility() && !!document.querySelector('.canvas-notice-text').textContent`;
const noticeGone = `document.querySelector('.canvas-notice').hidden`;

export default async function vector({ e, b, shoot }) {
  const { fit, refit, restoreLayout, workspace } = helpers(e, b);
  const paint = await workspace('illustrator');
  await e.newDocument(1600, 1000);
  const ink = await e.read('layerApp.state().colors.foreground');
  const tap = (x, y) => e.stroke([[x, y], [x, y]], { pressure: .5 });
  const drag = (from, to, steps = 12) => e.stroke(Array.from({ length: steps + 1 }, (_, i) => [from[0] + (to[0] - from[0]) * i / steps, from[1] + (to[1] - from[1]) * i / steps]), { pressure: .5 });
  const noticeTexts = new Set();
  const noticeCheck = async () => {
    const text = await e.read(`document.querySelector('.canvas-notice-text').textContent`);
    assert.ok(!noticeTexts.has(text), `The notice is shown in each language once: ${text}`);
    noticeTexts.add(text);
  };
  const notice = trigger => ({
    target: '.canvas-notice',
    setup: async () => { noticeTexts.clear(); await trigger(); },
    variant: trigger,
    check: noticeCheck,
    teardown: () => e.wait(noticeGone),
  });

  await e.brush(1, 64, '#d6ad67');
  await e.draw('M300 640 C560 820 1040 820 1300 640', { pressure: .7 });
  await e.invoke('new_vector_layer');
  const lineArt = await e.active();
  await e.layer({ op: 'rename', id: lineArt, name: 'Line art' });
  await e.brush(1, 14, '#303638');
  await e.draw(swash, { pressure: .6 });
  await e.draw(ribbon, { pressure: .6 });
  const along = await e.path(swash, 60);
  const [onSwash] = along.slice(Math.floor(along.length / 2));

  await shoot('vector/layers-panel', { target: { selector: '#layer-rows .layer-swipe', all: true } });

  await e.send({ type: 'color', action: { op: 'set_slot', slot: 'background', color: ochre } });
  await e.layer({ op: 'tool', tool: { figure: { shape: 'star', paint: 'both' } } });
  await drag([1300, 90], [1530, 320]);
  await e.show('tool_settings');
  await fit('tool_settings');
  await shoot('vector/figure-settings', { target: group('tool_settings'), variant: refit('tool_settings') });

  await e.show('properties');
  await e.wait(`!!document.querySelector('${group('properties')} [data-property-key=path_miter_limit]')`);
  await fit('properties');
  await shoot('vector/path-properties', { target: '.properties-panel .effect-properties', variant: refit('properties') });

  await e.invoke('move');
  await tap(...onSwash);
  await e.show('tool_settings');
  await fit('tool_settings');
  await shoot('vector/operation-settings', { target: group('tool_settings'), variant: refit('tool_settings') });

  await e.invoke('edit_points');
  await drag([150, 150], [1330, 700]);
  await shoot('vector/edit-points', { target: { documentRect: [190, 270, 1080, 450] } });

  await e.invoke('eraser');
  await e.show('brushes');
  await fit('brushes');
  await shoot('vector/eraser-modes', { target: group('brushes'), variant: refit('brushes') });

  await e.brush(1, 14, '#303638');
  await e.layer({ op: 'tool', tool: { figure: { shape: 'path', paint: 'outline' } } });
  await tap(140, 720); await tap(260, 880); await tap(400, 780);
  await shoot('vector/path-bar', { target: ['.canvas-action-bar', { documentRect: [100, 660, 340, 260] }], ready: canvasBar, pad: 16 });
  await e.invoke('cancel_path');

  await e.send({ type: 'select_brush', id: 2 });
  await shoot('vector/refusal-notice', notice(async () => { await tap(800, 940); await e.wait(noticeShown); }));
  await e.send({ type: 'select_brush', id: 1 });

  await shoot('vector/merge-notice', notice(async () => { await e.invoke('merge_down'); await e.wait(noticeShown); }));
  assert.equal(await e.read('layerApp.state().layers.length'), 3, 'Merge Down waits for the notice');

  await e.send({ type: 'color', action: { op: 'set_slot', slot: 'foreground', color: ink } });
  await restoreLayout(paint);
}
