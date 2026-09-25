---
title: "Quick Mask and selection layers"
description: "Paint a selection with a brush, and save selections to use again later."
purpose: "Some areas are easier to paint than to outline, such as soft hair, clouds or a blurry background. Quick Mask shows your selection as a colored overlay that you can paint with any brush. Selection layers keep a selection in your drawing so you can load it again whenever you need it."
techniques: ["Refine a selection with a brush in Quick Mask.", "Paint a selection directly with Paint selection.", "Save a selection as a selection layer and load it later."]
figure: "1: The temporary Quick Mask layer. 2: Quick Mask settings, including the overlay color. 3: The selection shown as a colored overlay, extended with a brush stroke."
related: ["tools/selections", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/selections-quick-mask-light.webp", "dark": "/assets/guides/selections-quick-mask-dark.webp", "alt": "1: The temporary Quick Mask layer. 2: Quick Mask settings, including the overlay color. 3: The selection shown as a colored overlay, extended with a brush stroke."}
---

## Refine a selection in Quick Mask

Make a rough selection with any selection tool, then choose **Select → Quick Mask** or press **Q**. The selection appears as a colored overlay, and a temporary **Quick Mask** layer appears at the top of the Layers panel. Now paint with any brush to add to the selection, and use the **Eraser** to take away from it. Soft brushes make soft edges, which is exactly what you want for fur or foliage.

If the overlay is hard to see against your drawing, change its color or opacity in **Properties**. When the selection looks right, choose **Return to Artwork** to go back to painting with the selection active.

## Paint a selection directly

If you'd rather skip the first step, choose the **Paint selection** tool from the selection tools. Every stroke you make adds to the selection, and circling an area selects everything inside it. Hold **Alt** or switch the mode in the Tool panel to paint parts of the selection away again.

## Save selections for later

A selection is lost as soon as you make a new one, so save any selection you'll need again. Choose **Select → Save as Selection Layer**, or **Save as Selection Layer** from the Quick Mask layer's menu. The selection is stored as a selection layer in the Layers panel and is saved with your drawing.

To use it again, choose **Select → Load Selection**, or hold **Ctrl** and click the selection layer's thumbnail. You can also combine it with the current selection from the layer's menu. The **New Selection Layer** button at the bottom of the Layers panel makes an empty selection layer that you can paint into directly.
