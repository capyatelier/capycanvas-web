---
title: "Selections and fill"
description: "Select a region, fill it on the right layer, and correct its edges."
figure: "A hair selection read from Line art and filled on the separate Hair layer."
related: ["illustration/draft", "illustration/mask"]
---

## Choose the selection method

Use a freehand selection when you want to draw the boundary yourself, such as around part of a sketch that needs moving. Use automatic selection when an existing color region or enclosed outline provides the boundary. Add to or subtract from the selection to correct it without starting over.

A selection limits where an operation can act; it does not choose which layer is edited. After selecting an area from the line art, select the intended base-color layer before filling it, as in [Masking](/docs/illustration/mask/).

## Read one layer and fill another

The reference setting tells an automatic selection or fill which layers to inspect for boundaries. An empty base-color layer has no outline to detect, so use the line art as the reference when filling beneath it.

Tolerance controls how much color variation counts as the same region. Increase it when a slightly varied area is being split into unwanted pieces. If the fill spreads into a neighboring region, check for an open contour before increasing tolerance further; gap closing or a freehand selection may be more appropriate.

## Correct the edge and clear the selection

Expansion extends a selected or filled area outward. A small expansion can cover pale gaps beneath anti-aliased line art. Inspect the result at actual size so the fill reaches beneath the ink without extending visibly past it.

Feathering deliberately softens a selection's edge. Leave it off for a crisp base-color boundary. Once the fill or [transform](/docs/tools/transforms/) is complete, clear the selection so subsequent strokes are not unexpectedly cut off.
