---
title: "Masks and clipping"
description: "Control visibility without erasing the underlying paint."
purpose: "A layer mask changes what is visible; clipping restricts another layer to a base layer’s shape. Alpha lock restricts new paint on the layer itself. Choose the one that matches the correction."
techniques: ["Create a mask from a selection.", "Edit or disable a mask separately from its paint.", "Clip shading above a base layer."]
figure: "1: Ribbon’s mask thumbnail. 2: Shading clipped above Ribbon. 3: Clip to layer below and Alpha lock controls."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: Ribbon’s mask thumbnail. 2: Shading clipped above Ribbon. 3: Clip to layer below and Alpha lock controls."}
---

## Make a mask from a selection

Select the layer and define the region you want visible. Its context menu offers **Mask: reveal selection** or **Mask: hide selection**; an existing mask changes these labels to **Replace mask**. The mask keeps that boundary independently of later pixel selections.

Clear the selection afterward. If you intend to extend the visible shape later, keep paint behind the hidden region: a mask can reveal only paint that already exists.

## Edit the correct thumbnail

Click the mask thumbnail to edit coverage. Paint black to hide or white to reveal; choose the content thumbnail to edit ordinary color. The mask’s menu can disable, invert, show or remove it. Disabling is useful for comparing the underlying paint without throwing away the boundary.

A linked mask moves with its layer. Check the link before transforming a boundary independently.

## Add clipped shading

Create a shading layer directly above the base, then enable **Clip to layer below**. New shading remains separate while its visible coverage follows the base. Keep a sequence of clipped layers immediately above that base.

Use **Alpha lock** for recoloring existing pixels on one layer, such as Line art. It does not create a mask or a separate shading layer. The [rendering stage](/docs/illustration/render/) demonstrates the difference.
