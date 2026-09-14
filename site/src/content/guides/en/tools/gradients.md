---
title: "Gradients"
description: "Fill an area with a transition between colors."
purpose: "Gradient creates a color transition on the editing layer. Its drag determines the transition’s direction and extent; a selection can keep the result inside a chosen region."
techniques: ["Choose linear or radial Gradient.", "Use foreground/background colors or fade to transparency.", "Limit the gradient with a selection or mask."]
figure: "1: Gradient subtools. 2: Foreground and background colors. 3: The gradient’s destination layer."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: Gradient subtools. 2: Foreground and background colors. 3: The gradient’s destination layer."}
---

## Choose the colors and target

Add a paint layer for the gradient, or select the layer that should receive it. Choose foreground and background colors in **Color**. Use a [selection](/docs/tools/selections/) when only one part of the layer should change.

Select **Gradient**, then choose its linear or radial variant in **Tool Set**. The transparent variant fades the foreground color into transparency instead of the background color.

## Drag the transition

For a linear gradient, drag from its starting color toward its ending color. For a radial gradient, begin at the center and drag outward. A longer drag spreads the transition over more of the document.

Inspect the result at a useful zoom. Undo and repeat the drag to change its placement. Keep the gradient separate from ink or details that you want to preserve above it.

## Refine its extent

Clear the selection after creating the gradient so later edits are unrestricted. Use a [mask](/docs/layers/masks/) if the visibility boundary needs continued revision. A separate gradient layer also lets you adjust its opacity or blending without changing the base paint.

The [Color guide](/docs/painting/color/) explains the foreground/background pair and transparent paint.
