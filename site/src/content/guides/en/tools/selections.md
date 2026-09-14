---
title: "Selections and fill"
description: "Define an area, choose a boundary source, and fill the intended layer."
purpose: "A pixel selection limits where an edit can happen. It does not choose the editing layer. This lets you read outlines on one layer while putting color on another."
techniques: ["Draw a lasso or use Auto select.", "Choose Visible, Editing or Reference as the boundary source.", "Adjust tolerance and edges, then clear the selection."]
figure: "1: Auto select tool and source choices. 2: Tolerance and edge controls. 3: The editing layer, separate from the boundary source."
related: ["tools/transforms", "layers/masks", "illustration/mask"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Auto select tool and source choices. 2: Tolerance and edge controls. 3: The editing layer, separate from the boundary source."}
---

## Choose a selection method

Use **Lasso selection** to draw the boundary yourself. **Auto select** reads a region from the existing image. In Tool Set, choose the visible image, editing layer, or reference layers as its source. To use Line art as a reference, select its row and use **Use selected layers as references** in Layers.

Return to the intended paint layer before filling. **Lasso Fill** draws and fills a freehand region directly; it is a different subtool from a persistent pixel selection.

## Read an outline and correct the edge

Choose **Fill** to fill a detected region directly, or **Auto select** to inspect a selection first. Their **Tool** controls include **Tolerance**, **Close gaps**, **Expansion** and **Edge smoothing**.

Increase tolerance when a varied color region is being split into pieces. Close gaps can bridge small openings; check the outline if the operation escapes into another area. A small expansion helps the fill reach beneath antialiased ink. These settings apply to the next region operation.

## Finish the operation

Use **Fill selection** to fill the selected pixels on the editing layer, or turn the selection into a [layer mask](/docs/layers/masks/). After a fill or [transform](/docs/tools/transforms/), use **Select → Deselect pixels** so subsequent strokes are unrestricted.
