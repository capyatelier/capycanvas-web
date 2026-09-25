---
title: "Fills and gradients"
description: "Fill an area with one click, or with a smooth blend from one color to another."
purpose: "The Fill tool pours color into an area with a single click, which is the quickest way to color in line art. A gradient blends smoothly from one color to another instead, which is useful for skies, backgrounds and soft lighting."
techniques: ["Fill an area inside your line art with one click.", "Draw a linear or radial gradient.", "Keep a fill or gradient inside a selection."]
figure: "1: Gradient types in Tool Set. 2: Foreground and background colors. 3: The layer that receives the gradient."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: Gradient types in Tool Set. 2: Foreground and background colors. 3: The layer that receives the gradient."}
---

## Fill an area with one click

Choose the **Fill** tool, or press **F**, and click inside an area to fill it with the foreground color. To color in line art that is on another layer, first mark the line art layer as a reference with **Layer Settings → Use as reference** and choose **Reference layers** in Tool Set. Then select the empty layer you want to paint on and click inside the area. The fill stops at the lines, even though they are on a different layer.

If the fill leaks out through a small gap in your lines, raise **Close gaps** in the Tool panel. **Expansion** pushes the fill slightly under the lines, so no thin white edge is left between the color and the ink.

## Choose the colors and the layer

A gradient is easiest to change later if it has a layer of its own, so add a new layer first. Then choose the two colors in the **Color** panel: the gradient starts with the foreground color and ends with the background color.

Choose the **Gradient** tool, then pick a type in **Tool Set**. **Linear** gradients blend in a straight line, and **Radial** gradients spread out in a circle from a center point. The *color to clear* versions fade the foreground color out to transparency instead of blending into the background color.

## Drag to draw it

For a linear gradient, drag from where the first color should be to where the second color should be. For a radial gradient, start at the center and drag outwards. A short drag makes a quick change between the colors, and a long drag spreads the blend across more of the drawing.

If the result isn't quite right, undo and drag again. It often takes a couple of tries to find the right angle and length.

## Keep it where you want it

If a [selection](/docs/tools/selections/) is active, the gradient only fills the selected area. Deselect afterwards so your next strokes can go anywhere. For a boundary you might want to adjust later, use a [mask](/docs/layers/masks/) instead of a selection. Because the gradient is on its own layer, you can also soften it later by lowering the layer's opacity.
