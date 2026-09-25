---
title: "Moving and transforming"
description: "Move, resize or rotate a layer or part of your drawing."
purpose: "Sometimes a part of the drawing is almost right but a little too big, too low, or at the wrong angle. The Operation tool lets you move, scale and rotate it without redrawing, and you can check the result before you commit to it."
techniques: ["Choose what to move.", "Move, scale and rotate with the handles.", "Apply or cancel the change."]
figure: "1: Transform controls in Tool. 2: The transform preview on the canvas. 3: The layer being edited."
related: ["tools/selections", "workspace", "illustration/draft"]
image: {"light": "/assets/guides/tools-transforms-light.webp", "dark": "/assets/guides/tools-transforms-dark.webp", "alt": "1: Transform controls in Tool. 2: The transform preview on the canvas. 3: The layer being edited."}
---

## Choose what to move

Select the layer you want to change in the Layers panel. If only part of the layer should move, [select](/docs/tools/selections/) that part first. Without a selection, the whole layer moves.

Choose the **Operation** tool in the toolbar. Its **Move** mode moves the content as you drag, and **Scale / rotate** adds handles for changing its size and angle. In Sketch, the **Scale / rotate** button in the title bar starts the same thing.

## Move, scale and rotate

Drag inside the box to move the content. Drag the handles on its corners and sides to make it larger or smaller, and drag the handle outside the box to rotate it. Hold **Shift** while you resize to keep the drawing's proportions, or while you rotate to turn it in neat 15° steps. If you need exact values, type them into the position, size and angle fields in the Tool panel.

Nothing is final while the handles are showing, so take your time. It is best to make all of the changes you need in one go, because resizing the same paint over and over can gradually soften its edges. If you're unsure, duplicate the layer first so you can compare.

## Apply or cancel

Select **Apply transform** to keep the change, or **Cancel transform** to put everything back as it was. If you selected part of the layer, choose **Select → Deselect pixels** afterwards so your next strokes aren't limited to that area.

The same handles appear when you [import an image](/docs/filters/image-editing/) into a drawing, so you can place and size it before selecting **Apply**. To turn the view rather than the artwork, use the rotate buttons in Navigator described in [Workspaces and canvas](/docs/workspace/).
