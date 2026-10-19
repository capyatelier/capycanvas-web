---
title: "New drawings"
description: "Sheet size, resolution, paper and color settings, and presets in the New drawing dialog."
related: ["layers/paper", "color-management/color-spaces", "layers/types", "files/open-save"]
---

Choose **File > New…**, press **Ctrl+N** where available, or select **New…** in the Commands toolbar. The new drawing opens in its own tab.

![The New drawing dialog with A4 dimensions, 300 ppi resolution, color and Paper settings, and Create.](shot:files/new-dialog)

## Presets

Choose a preset by category, search by name, or select a recently used preset. A preset fills the dimensions, resolution, color settings and Paper settings.

![The New drawing preset browser.](shot:files/new-presets)

Before you have used or saved another setup, Presets selects **Sketchbook**: A4 portrait (210 × 297 mm), Drawing paper in Natural white, and 2480 × 3508 px at 300 ppi.

Save the current settings as a named preset for reuse. Open a saved preset's menu to rename or delete it. Built-in presets cannot be renamed or deleted.

## Sheet

The preview shows the sheet's proportions and orientation. Enter a drawing name, then set **Width** and **Height** in pixels, inches, centimeters or millimeters. Use the link control to keep the current proportions, and the orientation control to exchange width and height.

**Resolution** sets the pixels per inch used for physical dimensions and [Paper texture](/docs/layers/paper/) scale. Changing only the resolution changes print-size metadata without resampling the drawing.

A new window starts with a separate blank A4 landscape drawing at 300 ppi (3508 × 2480 px).

The dialog shows the resulting pixel dimensions and estimated capacity. Settings beyond the device's current drawing limit cannot be created; the limit depends on the dimensions, bit depth and available graphics resources.

## Paper

![Paper texture choices in New drawing.](shot:files/new-paper)

Choose a built-in or imported Paper texture for the new drawing. **Import…** adds an image to the paper library and selects it. Choose **No paper** to create the drawing without a Paper layer.

![Paper Color and Transparent choices in New drawing.](shot:files/new-paper-color)

**Color** sets the Paper color. **Transparent** keeps the Paper layer but starts it hidden. This differs from **No paper**, which creates no Paper layer.

## Color settings

Choose the drawing's **Color space**, **Bit depth** and **Blending**. Float bit depths use **Linear light** blending. See [Color space, bit depth and blending](/docs/color-management/color-spaces/).

## Creating the drawing

Select **Create**. The drawing starts with an empty paint layer, **Current ink**, above the chosen Paper when one was included.

The dialog retains the last choices used to create a drawing. Selecting a preset replaces them with that preset's values.
