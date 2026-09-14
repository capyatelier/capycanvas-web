---
title: "Masking"
description: "Give Ribbon, Disc and Block their own editable color boundaries."
purpose: "A base-color layer holds paint, while its mask controls the visible boundary. Filling behind the mask lets you reveal a little more color later without repainting the whole region."
techniques: ["Define a region with Lasso or Auto select.", "Create a mask from the selection and fill the underlying layer.", "Select the mask thumbnail to refine its edge."]
figure: "1: Ribbon’s selected mask thumbnail. 2: Separate Ribbon, Disc and Block layers below Line art. 3: White paint for revealing mask coverage."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Ribbon’s selected mask thumbnail. 2: Separate Ribbon, Disc and Block layers below Line art. 3: White paint for revealing mask coverage."}
---

## 1. Select a base shape

Hide **Sketch** and **Color rough**. Use **Lasso selection** to define the ribbon outline, as in the example. For an enclosed ink region, you can instead mark **Line art** as a reference layer, choose **Auto select → Reference**, and click inside it.

Check the boundary before continuing. Adjust tolerance, gap closing and expansion before repeating automatic selection if needed. [Selections and fill](/docs/tools/selections/) explains those controls.

## 2. Make the masked layer

Create **Ribbon** below Line art. With the pixel selection present, open Ribbon’s context menu and choose **Mask: reveal selection**. Clear any remaining pixel selection, then choose Ribbon’s **content thumbnail**.

Choose the base color, use **Select → Select all pixels**, then **Edit → Fill selection** to fill the entire layer. Use **Deselect pixels** afterward. The mask shows only the selected silhouette, but paint remains behind its hidden area. Temporarily show Color rough to sample a color if needed, then hide it again.

## 3. Refine the edge

Select Ribbon’s **mask thumbnail**. Paint black to hide excess coverage or white to reveal more. Return to the content thumbnail before recoloring the paint.

Make **Disc** and **Block** the same way. Keep Disc below Ribbon and Block below Disc, with Line art above all three. Save, then continue to [Rendering](/docs/illustration/render/) for clipped shading.
