---
title: "Masking"
description: "Give the ribbon, disc and block their own color layers with editable edges."
purpose: "In this stage, each shape gets its own layer of color. The color fills the whole layer, and a mask decides which part of it you see. Because nothing is erased, you can adjust the edge of any shape later just by painting on its mask."
techniques: ["Select a shape with a lasso or Auto select.", "Turn the selection into a mask and fill the layer with color.", "Paint on the mask to adjust the edge."]
figure: "1: Ribbon’s selected mask thumbnail. 2: Ribbon, Disc and Block below Line art. 3: Eraser, which hides parts of the mask."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Ribbon’s selected mask thumbnail. 2: Ribbon, Disc and Block below Line art. 3: Eraser, which hides parts of the mask."}
---

## 1. Select a shape

Hide **Sketch** and **Color rough**. Choose **Lasso selection** and carefully trace around the ribbon, as in the example.

If your line art is closed around a shape, **Auto select** can do this with one click. Mark **Line art** as a reference layer by choosing **Layer Settings → Use as reference** in its menu. Then choose **Auto select**, choose **Sample reference layers** in the Tool panel, and click inside the shape. [Selection tools](/docs/tools/selections/) explains the settings that control how far the selection spreads.

## 2. Make the masked color layer

Add a new layer named **Ribbon** below Line art. With the selection still active, open Ribbon's menu and choose **Mask → Mask: reveal selection**. The layer now has a mask that shows only the ribbon's shape.

Click Ribbon's paint thumbnail and choose the ribbon's color. Choose **Select → Select all pixels** and then **Edit → Fill selection** to fill the whole layer with color, and finish with **Select → Deselect pixels**. Only the ribbon shows, but the color continues underneath the mask, ready for when you want to widen the shape.

## 3. Adjust the edge

Click Ribbon's mask thumbnail to edit the mask. Now any brush reveals more of the color where you paint, and the **Eraser** hides it again. Click the paint thumbnail again when you want to change the color itself.

Make **Disc** and **Block** in the same way. Keep Disc below Ribbon and Block below Disc, with Line art above all three. Save your drawing, then continue to [Rendering](/docs/illustration/render/).
