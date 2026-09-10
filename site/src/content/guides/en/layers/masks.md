---
title: "Layer masks and clipping"
description: "Choose how to restrict paint while keeping the parts you need editable."
figure: "The same base shape edited with a mask, a clipped layer, and alpha lock."
related: ["illustration/mask", "layers/basics"]
---

## Edit an outline with a layer mask

A layer mask controls which parts of a layer are visible. Select its thumbnail to edit visibility: black hides the layer, white reveals it, and gray makes it partly visible. Switch back to the paint thumbnail when you want to change the color itself.

Use a mask when you expect to revise a boundary, such as the hair shape in [Masking](/docs/illustration/mask/). Hiding an edge preserves the paint underneath, so painting white on the mask can restore it. A mask cannot restore paint that was erased from the layer itself.

## Keep shading separate with clipping

Place a new layer above a base-color layer and enable clipping on the new layer. Its paint is visible only within the base's shape. If that shape changes, including through a mask, the clipped result changes with it.

This is the setup used in [Rendering](/docs/illustration/render/): Hair holds the base color and Hair shading holds the paint above it. Edit the base or its mask to change the silhouette; edit the clipped layer to change only the shading. Check the base layer before trying to erase a repeated edge problem from several clipped layers.

## Recolor with alpha lock or a selection

Alpha lock is useful when you want to paint directly over existing pixels without extending their shape, for example when recoloring line art. It changes the original paint, unlike putting a correction on a separate clipped layer.

A [selection](/docs/tools/selections/) temporarily restricts editing to an area and can be combined with either method. Clear it after the operation. If a brush unexpectedly stops at an invisible boundary, check for an active selection before changing the mask or brush.
