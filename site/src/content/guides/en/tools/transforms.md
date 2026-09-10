---
title: "Transformations"
description: "Reposition a layer or part of a sketch without changing unrelated paint."
figure: "A selected hand repositioned on Sketch while the other layers remain unchanged."
related: ["workspace", "illustration/draft"]
---

## Choose the content to transform

Select the layer you want to edit. To change only part of it, enclose that area with a [selection](/docs/tools/selections/) before starting the transform. In the sketch stage, this lets you move a hand without moving the rest of the figure or its color rough.

Keep the transformation on the intended paint layer. If a mask thumbnail is selected, you may be changing the visibility boundary instead of the drawing. Check both the selected layer and thumbnail when the result is unexpected.

## Make the adjustment in one pass

Move, rotate, or scale the selected content, preserving proportions when the shape should stay the same. Use perspective or distortion controls only when the shape itself needs to change. Confirm the adjustment when the preview is correct, then clear the selection before drawing again.

Repeatedly applying small transforms can soften raster artwork because the pixels are resampled each time. Combine adjustments in one transform where possible. Duplicate the original layer before a substantial change if you expect to try several alternatives.

## Distinguish the artwork from its view

Use canvas rotation or mirroring from [Workspace and canvas](/docs/workspace/) when you only want a different drawing angle or a reversed view. Those operations leave the document unchanged. Transforming or flipping layer content changes what will be saved and exported.
