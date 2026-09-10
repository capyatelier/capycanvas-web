---
title: "Layer basics"
description: "Choose the drawing target and keep revisions separate."
figure: "Sketch, Line art, Hair, and Hair shading in the Layers panel."
related: ["layers/masks", "layers/groups"]
---

## Choose where a stroke goes

The selected layer receives your drawing, fill, and erase operations. Visibility and selection are independent: showing a layer does not make it the drawing target. Before making a correction, check the selected row and, if it has a mask, whether the paint or mask thumbnail is active.

Layers higher in the stack appear over layers below them. In the [illustration tutorial](/docs/illustration/draft/), Line art stays above the base colors so a fill does not cover the ink. Reordering a layer can change the picture even though no pixels on that layer have changed.

## Separate work that needs separate adjustment

Use different layers when you expect to recolor, move, hide, or replace parts independently. A sketch and its ink belong on different layers because you need to fade or hide the sketch. A highlight only needs its own layer if you want to adjust it independently of the shading beneath it.

Name layers for their contents, such as Hair or Hair shading. Duplicate a layer before an uncertain edit when you need a directly comparable copy. A [group](/docs/layers/groups/) keeps related layers together without combining their paint.

## Opacity, locks, and merging

Layer opacity fades everything on a layer, including existing marks. A layer lock prevents accidental edits; alpha lock allows recoloring while preserving transparency. The [mask reference](/docs/layers/masks/) explains when alpha lock is useful.

Merge layers only when you no longer need to edit them separately. After merging, their individual opacity, masks, and blending settings are no longer independently adjustable. To share a single image, [export](/docs/tools/files/) it instead of flattening the working document.
