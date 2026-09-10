---
title: "Line art"
description: "Ink above the sketch without changing the underlying drawing."
figure: "The Line art layer selected above the faded Sketch layer."
related: ["layers/basics", "advanced/input"]
purpose: "In this stage, you will draw the finished outlines over the faded sketch. The new ink stays on its own layer so you can erase it, inspect it without the sketch, and add color underneath it later."
techniques: ["Lower the sketch layer's opacity without changing the pencil marks themselves.", "Use an ink preset, canvas rotation, and optional stroke stabilization for the lines.", "Check for gaps in outlines that will become filled color regions."]
---

## 1. Separate the ink from the sketch

In the Layers panel, lower the opacity of **Sketch** until it is visible without competing with a new stroke. Hide **Color rough**, then add a layer named **Line art** above Sketch. Select Line art before drawing; changing the sketch's opacity does not select a new drawing layer.

Choose an ink preset and test its line width with your usual pen pressure. Some presets keep a fixed width. If you expect pressure to vary the line but it does not, test with the built-in Pencil preset as described in [Input settings](/docs/advanced/input/).

## 2. Ink and correct the lines

Rotate the canvas view for curves that are awkward at the current angle. This changes your drawing position without rotating the layer's pixels. If you need steadier lines, increase stroke stabilization only enough to help; stronger stabilization can make the stroke trail behind the pen.

Make corrections on Line art. Erasing a stroke there leaves the sketch intact, and undo lets you replace the last stroke.

## 3. Prepare the contours for color

Hide Sketch periodically to inspect the ink by itself. Close accidental gaps around areas you want to fill, such as a sleeve or a section of hair. Internal detail lines can remain open; the next stage also uses freehand selections where an enclosed outline is not available.

Keep Line art above the color layers in [Masking](/docs/illustration/mask/). You can hide the sketch while retaining it for later revisions; there is no need to merge the layers.
