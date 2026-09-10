---
title: "Layer masks and clipping"
description: "Choose how to restrict paint while keeping the parts you need editable."
figure: "The same base shape edited with a mask, a clipped layer, and alpha lock."
related: ["illustration/mask", "layers/basics"]
purpose: "Masks, clipping, and alpha lock restrict paint in different ways. A mask edits what is visible, clipping confines a separate layer to a base shape, and alpha lock lets you recolor existing marks. Choose according to what you want to change and what you need to preserve."
techniques: ["Use a mask when an outline needs to remain editable.", "Use clipping when shading should stay separate from its base color.", "Use alpha lock for direct recoloring, and selections for temporary limits on an edit."]
---

Creating a mask from a selection is part of the planned workflow. Its control location will be documented when that operation is available.

## Edit an outline with a layer mask

A layer mask controls which parts of a layer are visible. Select its thumbnail to edit visibility: black hides the layer, white reveals it, and gray makes it partly visible. Switch back to the paint thumbnail when you want to change the color itself.

Use a mask when you expect to revise a boundary, such as the hair shape in [Masking](/docs/illustration/mask/). That tutorial fills the whole paint layer before refining its mask, so hidden color is available when the outline expands. White reveals existing paint; it cannot reveal an unpainted area or restore pixels erased from the layer.

## Keep shading separate with clipping

Place a new layer above a base-color layer and enable clipping on the new layer. Its paint is visible only within the base's shape. If that shape changes, including through a mask, the clipped result changes with it.

This is the setup used in [Rendering](/docs/illustration/render/): Hair holds the base color and Hair shading holds the paint above it. Edit the base or its mask to change the silhouette; edit the clipped layer to change only the shading. Check the base layer before trying to erase a repeated edge problem from several clipped layers.

## Recolor with alpha lock or a selection

Alpha lock is useful when you want to paint directly over existing pixels without extending their shape, for example when recoloring line art. It changes the original paint, unlike putting a correction on a separate clipped layer.

A [selection](/docs/tools/selections/) temporarily restricts editing to an area and can be combined with either method. Clear it after the operation. If a brush unexpectedly stops at an invisible boundary, check for an active selection before changing the mask or brush.
