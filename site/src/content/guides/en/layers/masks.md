---
title: "Layer masks and clipping"
description: "Selections, alpha lock, layer masks, and clipping."
figure: "Comparison of a selection, alpha lock, a layer mask, and a clipped layer."
related: ["illustration/mask", "layers/basics"]
---

## Selections and alpha lock
A selection restricts the area affected by an operation. Alpha lock preserves the active layer's transparency, allowing its existing pixels to be recolored without extending the painted area.

## Layer masks
A layer mask controls which parts of a layer are visible. White reveals, black hides, and gray produces partial visibility. Editing the mask does not erase the layer's pixels.

## Clipping
A clipped layer uses the transparency of the base layer to limit its visibility. Shading and texture remain on a separate layer. Changes to the base shape also change the visible area of the clipped layers.
