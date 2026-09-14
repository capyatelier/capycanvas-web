---
title: "Line art"
description: "Ink on a new layer above the faded sketch."
purpose: "Keep the finished outlines separate from the preliminary drawing. You can erase or recolor the ink without altering the sketch, then put the final colors underneath it."
techniques: ["Fade Sketch and select a separate Line art layer.", "Use a pen preset and view rotation.", "Close contours that will guide selections."]
figure: "1: Line art above the faded Sketch. 2: Navigator’s view controls. 3: Pen presets in Tool Set."
related: ["layers/basics", "advanced/input", "workspace"]
image: {"light": "/assets/guides/illustration-ink-light.webp", "dark": "/assets/guides/illustration-ink-dark.webp", "alt": "1: Line art above the faded Sketch. 2: Navigator’s view controls. 3: Pen presets in Tool Set."}
---

## 1. Separate the ink

Select **Sketch** and lower its layer opacity until it is visible without competing with the next stroke. Hide **Color rough**. Add **Line art** above Sketch and select its content thumbnail before drawing.

Choose **Pen → G-Pen**, or another ink preset in Tool Set. Test the width with your usual pressure. Changing the sketch’s opacity does not itself select a new drawing layer.

## 2. Trace and correct

Ink the shape contours, looping scribbles and short hatch marks. Rotate the view using Navigator or touch for curves that are awkward at the current angle. View rotation does not rotate the saved artwork.

Use Eraser or undo to correct Line art. If the visible stroke trails behind the pen, compare the prediction controls in [input settings](/docs/advanced/input/) and test the same curve again. Too much prediction can overshoot the intended turn.

## 3. Check the contours

Hide Sketch to inspect the ink alone. Close accidental gaps in regions you intend to select automatically. Internal details can remain open when you will use a lasso to define the base-color shape.

Keep Line art above the colors throughout the following stages. Save the document, then continue to [Masking](/docs/illustration/mask/). The screenshot retains a faded sketch so the separation of layers remains visible.
