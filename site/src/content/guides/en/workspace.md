---
title: "Workspace and canvas"
description: "Arrange the controls around your drawing and navigate the canvas."
figure: "Workspace with the brush list and three watercolor strokes."
related: ["advanced/input", "tools/transforms"]
image: {"light": "/assets/workspace-light.webp", "dark": "/assets/workspace-dark.webp", "alt": "Workspace with the brush list and three watercolor strokes."}
purpose: "You can move Capy Canvas's panels and toolbars to suit your screen and drawing hand. Canvas view controls let you change your drawing angle without rotating the artwork itself. This page covers those adjustments and when to hide the controls with Zen mode."
techniques: ["Place the brush list and Layers panel where you can reach them without covering the drawing.", "Pan, zoom, and rotate the view while keeping the document unchanged.", "Use Zen mode with undo and navigation still accessible from your keyboard or pen."]
---

## Arrange panels and toolbars

Keep the brush list and Layers panel visible while following the tutorial. Drag a panel by its tab, or by the bottom grip if its tab is hidden; drag a toolbar by its grip. Release at a docking indicator to attach it, or over the canvas to leave it floating. Right-click or press and hold its tab or grip, then choose **Configure** to change the controls it contains.

Tool settings apply to the active tool. When you switch from a brush to a selection tool, check the settings again: a brush's opacity and a selection's edge settings affect different operations. The [brush engine reference](/docs/advanced/brush-engine/) covers the detailed brush controls.

## Navigate without changing the drawing

On a touch-enabled screen, turn two fingers to rotate the canvas view until a long curve is comfortable to draw. **F** fits the canvas and resets its rotation. Rotation currently requires touch input; with a mouse or a separate pen tablet, keep the view upright. View adjustments leave the artwork unchanged. Use [Transformations](/docs/tools/transforms/) to move or reshape the actual drawing.

Hold **Space** and drag to pan. Use **Ctrl+mouse wheel**, or pinch with two fingers, to zoom while checking the zoom percentage. Actual size means **100% zoom**; a direct 100% control is not available yet. Zoom in to inspect fine marks and fill edges, since fitting a large document to the window can hide small gaps.

## Use Zen mode

Choose a brush and layer, then press **Tab** or use the **Zen** button to hide the surrounding controls while drawing. Press Tab again to leave Zen mode. In the default configuration, moving to an occupied screen edge temporarily reveals its panels. Hiding controls does not change the active tool or layer.

If you often draw this way, keep undo and canvas navigation accessible through your keyboard or pen buttons. Set those up in [Input settings](/docs/advanced/input/) before hiding the controls.
