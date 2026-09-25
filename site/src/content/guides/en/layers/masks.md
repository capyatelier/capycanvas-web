---
title: "Masks and clipping"
description: "Hide parts of a layer without erasing them, and keep shading inside a shape."
purpose: "A mask hides part of a layer without deleting any paint, so you can always change your mind about where the edge should be. Clipping keeps one layer inside the shape of the layer below it, which is the easiest way to add shading that never spills outside the lines."
techniques: ["Make a mask from a selection.", "Paint on a mask to show or hide paint.", "Clip shading to the layer below."]
figure: "1: Ribbon’s mask thumbnail. 2: Shading clipped above Ribbon. 3: Clip to layer below and Alpha lock controls."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: Ribbon’s mask thumbnail. 2: Shading clipped above Ribbon. 3: Clip to layer below and Alpha lock controls."}
---

## Make a mask from a selection

First [select](/docs/tools/selections/) the area you want to keep visible. Then open the layer's menu and choose **Mask → Mask: reveal selection**. Everything outside the selection is hidden, but none of it is erased. You can also choose **Mask: hide selection** to hide the selected area instead. Remember to deselect afterwards, so your next strokes aren't limited to the selection.

A mask can only show paint that is actually on the layer. If you think you might want to widen the shape later, fill the whole layer with color before masking it, as the [masking stage](/docs/illustration/mask/) of the tutorial does.

## Paint on the mask

Click the mask thumbnail next to the layer to edit the mask instead of the paint. Now any brush reveals more of the layer wherever you paint, and the **Eraser** hides it again. The color you paint with doesn't matter on a mask. When you're done, click the paint thumbnail to go back to painting normally.

The mask's menu can turn the mask off for a moment, invert it, or delete it. Turning it off is a handy way to compare the result with the paint underneath.

## Clip shading to a shape

Add a new layer directly above a base layer, open its menu, and choose **Layer Settings → Clip to layer below**. Whatever you paint on the clipped layer now only shows where the base layer has paint, so you can shade freely without going over the edges. You can stack several clipped layers above the same base, one for shadows and another for highlights.

**Alpha lock** is a simpler alternative when you want to recolor strokes that already exist, such as line art. It keeps new paint inside the existing strokes on the same layer. The [rendering stage](/docs/illustration/render/) of the tutorial uses both.
