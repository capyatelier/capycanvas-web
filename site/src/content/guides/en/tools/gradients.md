---
title: "Gradients"
description: "Fill an area with a smooth blend from one color to another."
purpose: "A gradient blends smoothly from one color to another, which is useful for skies, backgrounds and soft lighting. You set the direction and length of the blend by dragging across the canvas."
techniques: ["Choose a linear or radial gradient.", "Blend between two colors or fade to transparent.", "Keep the gradient inside a selection."]
figure: "1: Gradient types in Tool Set. 2: Foreground and background colors. 3: The layer that receives the gradient."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: Gradient types in Tool Set. 2: Foreground and background colors. 3: The layer that receives the gradient."}
---

## Choose the colors and the layer

A gradient is easiest to change later if it has a layer of its own, so add a new layer first. Then choose the two colors in the **Color** panel: the gradient starts with the foreground color and ends with the background color.

Choose the **Gradient** tool, then pick a type in **Tool Set**. **Linear** gradients blend in a straight line, and **Radial** gradients spread out in a circle from a center point. The *color to clear* versions fade the foreground color out to transparency instead of blending into the background color.

## Drag to draw it

For a linear gradient, drag from where the first color should be to where the second color should be. For a radial gradient, start at the center and drag outwards. A short drag makes a quick change between the colors, and a long drag spreads the blend across more of the drawing.

If the result isn't quite right, undo and drag again. It often takes a couple of tries to find the right angle and length.

## Keep it where you want it

If a [selection](/docs/tools/selections/) is active, the gradient only fills the selected area. Deselect afterwards so your next strokes can go anywhere. For a boundary you might want to adjust later, use a [mask](/docs/layers/masks/) instead of a selection. Because the gradient is on its own layer, you can also soften it later by lowering the layer's opacity.
