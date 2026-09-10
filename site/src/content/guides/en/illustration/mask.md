---
title: "Masking"
description: "Separate the base colors and make their boundaries editable."
figure: "The Hair layer with a mask, below Line art and above the other base colors."
related: ["layers/masks", "tools/selections"]
---

## Make the first base-color layer

Hide **Sketch** and **Color rough**, leaving **Line art** visible. Add a layer named **Hair** below Line art. Choose the hair's base color from the color rough, showing it temporarily if needed.

Use the automatic selection tool to select the area inside the hair outline. Set its reference to the line art so it reads those contours instead of the empty Hair layer. The selection defines the area you can edit; the active layer determines where the paint goes. With Hair active, fill the selection with the base color.

## Correct the fill boundary

Inspect the edge at actual size. If a pale fringe remains beneath the ink, expand the selection slightly and fill again. If the selection escapes through an opening, close that gap in Line art or define the missing boundary with a freehand selection. [Selections and fill](/docs/tools/selections/) explains the relevant settings.

## Keep the boundary editable

With the region still selected, add a layer mask from the selection to Hair, then clear the selection. A mask controls visibility without erasing the paint. Select the mask thumbnail and paint black to hide part of the edge or white to reveal it again. Select the layer's paint thumbnail before adding color; painting on the mask changes visibility instead.

Make separate **Skin** and **Clothing** layers in the same way. Separating these regions lets you revise the hair without affecting the face or coat. You do not need a separate layer for every small color variation.

In [Rendering](/docs/illustration/render/), you will add paint above these base layers and use clipping to keep it within their shapes. The [mask reference](/docs/layers/masks/) explains how masks and clipping work together.
