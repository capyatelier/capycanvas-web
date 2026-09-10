---
title: "Line art"
description: "Ink above the sketch without changing the underlying drawing."
figure: "The Line art layer selected above the faded Sketch layer."
related: ["layers/basics", "advanced/input"]
---

## Separate the ink from the sketch

In the Layers panel, lower the opacity of **Sketch** until it is visible without competing with a new stroke. Hide **Color rough**, then add a layer named **Line art** above Sketch. Select Line art before drawing; changing the sketch's opacity does not select a new drawing layer.

Choose an ink preset and test its line width with your usual pen pressure. Use the existing preset for now. If the width does not respond to pressure, follow the checks in [Input settings](/docs/advanced/input/).

## Ink and correct the lines

Rotate the canvas view for curves that are awkward at the current angle. This changes your drawing position without rotating the layer's pixels. If you need steadier lines, increase stroke stabilization only enough to help; stronger stabilization can make the stroke trail behind the pen.

Make corrections on Line art. Erasing a stroke there leaves the sketch intact, and undo lets you replace the last stroke without rebuilding the area around it.

## Prepare the contours for color

Hide Sketch periodically to inspect the ink by itself. Close accidental gaps around areas you want to fill, such as a sleeve or a section of hair. Internal detail lines can remain open; the next stage also uses freehand selections where an enclosed outline is not available.

Keep Line art above the color layers in [Masking](/docs/illustration/mask/). You can hide the sketch while retaining it for later revisions; there is no need to merge the layers.
