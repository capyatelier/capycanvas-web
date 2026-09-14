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

export async function illustration(e, record, directory) {
  await e.newDocument(1200, 1200);
  await e.layer({ op: 'rename', id: await e.active(), name: 'Color rough' });
  for (const [name, shape] of Object.entries(shapes)) {
    await e.brush(4, 80, colors[name], .45);
    await e.layer({ op: 'tool', tool: 'lasso_fill' }); await e.draw(shape);
  }
  await e.add('Sketch'); await e.brush(2, 8, colors.ink, .8);
  for (const d of ink) await e.draw(d, { taper: true });
  await e.brush(2, 5, colors.sage, .6);
  for (const d of ['M132 389 L656 389', 'M396 133 L396 645', 'M828 192 C1044 390 423 483 643 711 S806 898 608 1004', 'M170 651 L599 981']) await e.draw(d, { taper: true });
  await e.save('01-sketch.capy', directory);
  await record('illustration-draft', [
    { selector: '.tool-subtools' }, { selector: '#layer-rows' }, { selector: '.tool-settings-control' },
  ]);

  await e.visible('Color rough', false);
  await e.send({ type: 'set_layer_opacity', opacity: .22 });
  await e.add('Line art'); await e.brush(1, 4.5, colors.ink);
  for (const d of ink) await e.draw(d, { pressure: .7, taper: true });
  await e.save('02-line-art.capy', directory);
  await record('illustration-ink', [{ selector: '#layer-rows' }, { selector: '.navigator-buttons' }, { selector: '.tool-subtools' }]);

  await e.visible('Sketch', false); await e.select('Sketch');
  // Full paint behind each lasso mask lets later white mask strokes reveal more.
  for (const [name, key] of [['Block', 'block'], ['Disc', 'disc'], ['Ribbon', 'ribbon']]) {
    await e.add(name); await e.brush(4, 40, colors[key]);
    await e.lasso(shapes[key]);
    await e.layer({ op: 'mask_selection', id: await e.active(), hide: false });
    await e.select(name); await e.invoke('select_all'); await e.invoke('fill_selection'); await e.invoke('deselect');
  }
  await e.select('Ribbon', true); await e.brush(1, 20, '#ffffff');
  await e.save('03-base-colors.capy', directory);
  await record('illustration-mask', [{ selector: '.layer-thumbnail.editing-target' }, { selector: '#layer-rows' }, { selector: '.color-panel' }]);

  await e.select('Ribbon'); await e.add('Ribbon shading', { clipped: true });
  await e.brush(20, 100, colors.ink, .65);
  for (const d of ['M928 235 C1038 396 651 424 626 565', 'M548 564 C520 705 817 738 735 870', 'M811 889 Q755 1001 647 1050']) {
    for (let pass = 0; pass < 2; pass++) await e.draw(d, { pressure: .85, taper: true });
  }
  await e.brush(4, 50, colors.sage, .65);
  for (const d of ['M849 193 C958 327 699 397 641 470', 'M597 583 Q574 646 679 722', 'M737 847 Q696 915 609 958']) await e.draw(d, { taper: true });
  await e.add('Ribbon texture', { clipped: true }); await e.brush(2, 12, colors.cream, .9);
  for (let n = 0; n < 8; n++) await e.draw(`M${632 + n * 13} ${467 - n * 6} l58 72`, { taper: true });
  for (const d of ['M860 216 Q905 283 836 316', 'M582 574 Q560 642 640 694', 'M605 980 Q668 949 700 910']) await e.draw(d, { taper: true });
  await e.select('Disc'); await e.add('Disc shading', { clipped: true });
  await e.brush(5, 170, colors.block, .5);
  for (const d of ['M215 470 Q392 672 571 455', 'M221 507 Q399 653 591 481', 'M273 546 Q388 622 504 562']) await e.draw(d, { pressure: .8, taper: true });
  await e.brush(5, 150, colors.cream, .55);
  await e.draw('M231 298 Q308 176 427 241', { taper: true });
  await e.select('Block'); await e.add('Block shading', { clipped: true });
  await e.brush(4, 75, colors.ink, .45);
  for (const d of ['M472 633 L542 976', 'M223 982 L562 934']) await e.draw(d, { pressure: .75, taper: true });
  await e.brush(2, 18, colors.cream, .85);
  for (let n = 0; n < 7; n++) await e.draw(`M${240 + n * 27} 684 l40 48`, { taper: true });
  await e.select('Ribbon shading'); await e.brush(20, 70, colors.ink, .65);
  await e.save('04-finished.capy', directory);
  await e.save('abstract-study.png', directory);
  await record('illustration-render', [{ selector: '#layer-rows' }, { selector: '.layer-flags' }, { selector: '#layer-opacity' }]);
  await record('illustration', []);
}
