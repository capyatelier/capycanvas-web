---
title: "Color space, bit depth and blending"
description: "Choosing a drawing's color space, bit depth and Blending, and changing them later from the Image menu."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

You can choose a drawing's color space, bit depth and Blending when you create
it, and change them later from the **Image** menu.

## Color spaces

A drawing's working color space is **sRGB**, **Display P3**, **Adobe RGB
(1998)** or **ProPhoto RGB**. ProPhoto RGB uses a D50 white point, and the
other three use D65.

ICC profiles can't be working spaces. You can use them for [print
proofing](/docs/color-management/proof/) and [export](/docs/files/export/).

## Bit depths

A drawing's bit depth is **8-bit SDR**, **16-bit SDR**, **16-bit float HDR** or
**32-bit float HDR**. A float depth makes it an [HDR
drawing](/docs/color-management/hdr/), stored as linear RGB in which 1.0 is SDR
white at 203 cd/m².

## Choosing them for a new drawing

Choose **File > New…** (**Ctrl+N**) and set **Color space**, **Bit depth** and
**Blending** under **Color**. A preset from **Presets** sets them along with
the sheet and Paper. The dialog keeps the choices of the last drawing you
created.

At a float depth, **Blending** is fixed to Linear light.

![The New drawing dialog with Color space set to Display P3, Bit depth and Blending under Color.](shot:color-management/new-dialog-color)

## Defaults in Preferences

Choose **Edit > Preferences** and open the **Color** page:

- Under **Opening photos**, set **Editing precision** (**Source depth** or **16-bit**) and **Untagged RGB and grayscale** (**Assume sRGB** or **Ask**). With **Ask**, opening an untagged photo shows **Choose image interpretation**. Tagged photos keep their embedded profiles.
- Select **Manage Profiles…** to open the [Color Profile Library](/docs/color-management/proof/).

## Assign Profile

Choose **Image > Color Management > Assign Profile…** to keep the drawing's RGB numbers and read
them in another working space. Choose the space under **Color space**, where
Adobe RGB (1998) is listed as **Adobe RGB**. Object layers keep the source
profile of their [original photo](/docs/layers/types/).

## Convert Color Space

Choose **Image > Color Management > Convert Color Space…** to change the RGB numbers so that the
colors keep their appearance in another working space, within its gamut.

With **Save flattened copy**, **Apply** becomes **Create Copy**. The copy opens as a new drawing with one layer, at the same size and bit depth. Choose **File > Save** to save it as a `.capy` file.

![The Convert Color Space dialog with the Before and After comparison and the gamut message.](shot:color-management/convert-dialog)

### Color space

The working space to convert to. The current space is selected at first.

### Result

**Editable layers** (default) converts every layer in place. **Save flattened copy** opens a converted, flattened copy as a new drawing and leaves the original unchanged.

### Rendering intent

**Relative colorimetric** (default), **Perceptual**, **Saturation** or
**Absolute colorimetric**. Black point compensation is always off.

## Change Bit Depth

Choose **Image > Color Management > Change Bit Depth…** to change the stored precision. The color
space doesn't change.

Changing to a float depth makes the drawing HDR and sets Blending to Linear
light in the same step. Changing back to an integer depth keeps Linear light
until you change [Blending](#blending). Lowering the depth can clip colors.

### Bit depth

The new bit depth. The current depth is selected at first.

### Dither

**None** (default) or **Stochastic (8-bit)**. Dither applies only when the
target is 8-bit SDR.

## Previewing and applying

To apply Assign Profile, Convert Color Space or Change Bit Depth:

1. Set the fields in the dialog.
2. Compare **Before** and **After** when the preview appears.
3. Select **Apply** (or **Create Copy**).

**Apply** stays unavailable until the preview is ready. Changing a field updates the comparison. The status line reports any colors that clip.

Apply is one undo step. Undo and Redo open **Undo Color Change** and **Redo
Color Change**. These dialogs apply the change without further input and offer
only **Cancel**.

## Blending

You can combine layers on the drawing's encoded values or in linear light. Do
one of the following:

- Choose **Image > Blending > Perceptual Blending** or **Image > Blending > Linear Light Blending**.
- Set **Blending** to **Perceptual** or **Linear light** in the New dialog.

![The Blending submenu with Perceptual Blending checked.](shot:color-management/edit-blending-menu)

Painted pixels keep their values. Blending changes:

- how layers combine;
- how dry brushes lay color over existing paint;
- Gaussian Blur, Unsharp Mask, High Pass, Edge-Preserving Smooth and Soft Focus (Motion Blur, Vignette and Bloom always work in linear light);
- the neutral gray of **New Dodge & Burn Layer**;
- [Frequency Separation…](/docs/retouch/dodge-burn/), which needs Perceptual.

Changing Blending is one undo step. HDR drawings always use Linear light, and
both menu items are unavailable. New drawings and photos opened from image
files start with Perceptual. Photos that open at a float depth and `.capy` files
saved before Blending existed use Linear light.

## Document Properties

Choose **File > Document Properties…** to see the drawing's **Canvas size**,
**Working color space**, **Bit depth**, **Blending** and **Resolution
metadata**. HDR drawings add **HDR reference white**. Each original photo in
the drawing adds a row with its source profile. You can't change anything in
this dialog.
