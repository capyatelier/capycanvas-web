---
title: "Layers"
description: "Keep separate parts of a drawing editable."
purpose: "A layer holds one part of your document. Select its content before painting, and keep unrelated parts on separate layers so corrections do not affect everything at once."
techniques: ["Create and name paint layers.", "Distinguish the editing target from selected rows.", "Change visibility, order and opacity."]
figure: "1: Layer rows and content thumbnails. 2: Visibility controls. 3: New layer, group, mask and image-import actions."
related: ["layers/masks", "layers/groups", "tools/files"]
image: {"light": "/assets/guides/layers-basics-light.webp", "dark": "/assets/guides/layers-basics-dark.webp", "alt": "1: Layer rows and content thumbnails. 2: Visibility controls. 3: New layer, group, mask and image-import actions."}
---

## Create a useful stack

Use **New layer** at the bottom of **Layers**, then double-click its name to rename it. For the tutorial, keep Sketch, Line art and each base color separate. Place Line art above the colors so they do not cover the outlines.

Click a layer’s content thumbnail to make it the editing target. Row-selection controls can select layers for a group operation without changing where you draw. A mask thumbnail selects a different editing target on the same layer.

## Inspect and reorder

Toggle the eye to hide a layer without deleting its contents. Drag rows to change the stacking order. With touch or pen, hold a row before dragging, or use its grip immediately. Mouse can drag the row directly.

A layer’s menu provides operations such as duplication and deletion. Duplicate important paint before trying a major [transform](/docs/tools/transforms/) or a different treatment.

## Adjust the whole layer

The opacity control above the rows changes all visible paint on the editing layer. The blend-mode selector controls how it combines with lower content; begin with **Normal**.

**Lock editing** protects the layer. **Alpha lock** lets new paint change existing colored pixels without extending into transparent space. Use [masks and clipping](/docs/layers/masks/) when you need a separate editable boundary.
