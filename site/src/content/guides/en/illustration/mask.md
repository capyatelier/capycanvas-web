---
title: "Masking"
description: "Separate the base colors and make their boundaries editable."
figure: "The Hair layer with a mask, below Line art and above the other base colors."
related: ["layers/masks", "tools/selections"]
purpose: "The line art gives you outlines, but the areas inside them still need separate paint. You will create base-color layers for hair, skin, and clothing, then give each a mask: an editable boundary that can hide paint without erasing it."
techniques: ["Read the line art with a selection tool while putting the fill on a different layer.", "Extend a fill slightly beneath the ink to remove pale gaps.", "Edit a layer mask to correct the edge of a colored area."]
---

## 1. Select the hair shape

Hide **Sketch** and **Color rough**, leaving **Line art** visible. Choose the automatic selection tool and set its reference to Line art, then select inside the hair outline. The reference tells the tool which layer's contours to read.

Check the selection before continuing. If it escapes through an opening, clear it, close the gap in Line art, and select again. Use a freehand selection where the outline is not closed. Expand the finished selection slightly beneath the ink to avoid pale gaps. [Selections and fill](/docs/tools/selections/) explains these adjustments.

## 2. Fill a masked base-color layer

Add a layer named **Hair** below Line art. With the hair region still selected, create a layer mask from the selection on Hair, then clear the selection. The mask will show paint inside the hair shape and hide it outside.

Select Hair's paint thumbnail, choose its base color from **Color rough**, and fill the whole layer. Show Color rough temporarily to sample the color if needed. Filling the whole layer leaves color behind the hidden part of the mask, so you can later extend the hair outline by editing only the mask.

## 3. Refine the mask

Inspect the boundary at actual size. Select the mask thumbnail and paint black to hide excess color or white to reveal more of it beneath the ink. Switch back to the paint thumbnail before changing the color itself.

Make separate **Skin** and **Clothing** layers in the same way. These let you revise the hair without affecting the face or coat. Small color variations can share a layer.

In [Rendering](/docs/illustration/render/), you will add paint above these base layers and use clipping to keep it within their shapes. The [mask reference](/docs/layers/masks/) explains how masks and clipping work together.
