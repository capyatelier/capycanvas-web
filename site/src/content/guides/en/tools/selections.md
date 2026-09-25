---
title: "Selection tools"
description: "Select part of your drawing so that changes only affect that area."
purpose: "A selection marks the part of the drawing you want to work on. While it is active, painting, filling and transforming only affect the selected area, so the rest of the drawing stays safe. Capy Canvas has selection tools for simple shapes, freehand outlines, and areas of similar color."
techniques: ["Choose the right selection tool.", "Add to or subtract from a selection.", "Fill a selection and clear it when you're done."]
figure: "1: Selection tools in Tool Set. 2: Selection mode, feather and shape options. 3: An ellipse selection around the disc."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Selection tools in Tool Set. 2: Selection mode, feather and shape options. 3: An ellipse selection around the disc."}
---

## Choose a selection tool

In Paint, choose **Lasso selection** or **Auto select** in the toolbar, and Tool Set will list all of the selection tools. In Sketch, they are under the **Select** button, and Photo keeps most of them in its toolbar.

**Rectangle select** and **Ellipse select** draw simple shapes; hold **Shift** for a square or circle, and **Alt** to draw from the center. **Lasso selection** follows your pen freehand, and **Polygonal lasso** joins straight lines between the points you click; click the first point again or press **Enter** to close it. **Auto select** picks an area of similar color with one click, and **Select by color** picks every area of that color at once. Two more tools, **Paint selection** and **Tonal range**, have their own pages: [Quick Mask and selection layers](/docs/selections/quick-mask/) and [Select by brightness](/docs/selections/tonal-range/).

## Combine and soften selections

The four buttons at the top of the **Tool** panel choose what happens when you make another selection. It can replace the current one, add to it, subtract from it, or keep only the area where the two overlap. You can also hold **Shift** to add, or **Alt** to subtract, without changing the buttons.

**Feather radius** softens the edge of the selection, so that paint and adjustments fade out gradually instead of stopping at a hard line. For Auto select, **Tolerance** controls how different a color can be and still be included, and **Close gaps** stops the selection from leaking through small breaks in your line art.

## Use the selection

With a selection active, paint freely: strokes only land inside it. Choose **Edit → Fill selection** to fill it with the current color, or turn it into a [layer mask](/docs/layers/masks/). The **Select** menu can also invert the selection, grow or shrink it by a few pixels, or bring back the last selection with **Reselect**.

When you're finished, choose **Select → Deselect pixels** so your next strokes can go anywhere again.
