---
title: "Moving and transforming"
description: "Reposition, scale or rotate a layer or selected pixels."
purpose: "Operation moves existing content. Scale / rotate provides handles for changing its size and angle. These edits change the saved artwork, unlike canvas view navigation."
techniques: ["Choose a layer and optional pixel selection.", "Move, scale and rotate with the tool’s handles.", "Apply or cancel the preview."]
figure: "1: Position controls in Tool. 2: The transform preview on the canvas. 3: The editing layer."
related: ["tools/selections", "workspace", "illustration/draft"]
image: {"light": "/assets/guides/tools-transforms-light.webp", "dark": "/assets/guides/tools-transforms-dark.webp", "alt": "1: Position controls in Tool. 2: The transform preview on the canvas. 3: The editing layer."}
---

## Choose what changes

Select the content thumbnail of the layer to edit. Use a [pixel selection](/docs/tools/selections/) first if only part of the paint should change. The **Operation** tool moves the editing target; choose **Scale / rotate** for its transform handles.

Check the thumbnail before dragging. A selected mask changes the visibility boundary. A linked mask can move with its layer; unlink it only when you intend to reposition the mask independently.

## Adjust the preview

Drag the content to move it, use the surrounding handles to scale, and use the rotation handle to change its angle. Enable **Keep proportions** when the drawing should retain its aspect ratio. Tool exposes the available controls and the preview remains pending while you adjust it.

Make related changes in one preview. Repeatedly applying raster transforms can soften edges through resampling. Duplicate the original layer first if you expect to compare substantially different arrangements.

## Apply or cancel

Choose **Apply transform** to keep the change or **Cancel transform** to return to the original. Clear any pixel selection before drawing elsewhere.

Use Navigator or the [View controls](/docs/workspace/) when you only want a more comfortable drawing angle. The current transform workflow covers movement, scaling and rotation; it does not provide a perspective-warp procedure.
