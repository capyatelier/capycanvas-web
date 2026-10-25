---
title: "Blend and Liquify"
description: "The Blend and Liquify tools for smearing paint and moving pixels on a layer."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

You can smear and mix the paint on a layer with **Blend**, and move its pixels
with **Liquify**.

## Blend

Do one of the following:

- Press **J**.
- In Paint, select **Blend** in the Tools toolbar. The same button holds **Clone Stamp**.
- In Photo, select **Blend** in the Tools toolbar.
- In Sketch, choose a blender in the **Sculpt** drawer.
- Search commands for **Blend**.

Choose a set and a blender in **Tool Set**. **Smudge** is the default blender.

| Set | Blenders |
| --- | --- |
| **Blend** | **Smudge**, **Soft Blender**, **Blur**, **Blending Stump**, **Tissue**, **Grainy Blender**, **Texture-Keeping Blender**, **Hue Blender** |
| **Wet paint** | **Natural Blender**, **Wet Blender**, **Color Mixer**, **Blending Knife**, **Bristle Blender** |
| **Effects** | **Painterly Blender**, **Comb Blender**, **Scatter Blender**, **Sharpen**, **Marbling**, **Crystal Blender**, **Dither Blender** |

The settings of each blender are in
[Mixing, bleed and bristles](/docs/brushes/wet-media/).

### Bristle Blender

**Bristle Blender** pulls paint into streaks. The left end of this sample is unblended.

![Bristle Blender streaking the shaded paint at the right.](shot:examples/bristle-blender)

### Dither Blender

**Dither Blender** mixes the bands into a dither pattern.

![Dither Blender mixing the shaded bands at the right.](shot:examples/dither-blender)

### Marbling

**Marbling** curls the paint into swirls.

![Marbling curling the shaded bands at the right.](shot:examples/marbling)

## Liquify

Do one of the following:

- Press **J** while Blend is active.
- In Paint or Photo, select **Liquify** in the Tools toolbar. Right-click or hold the button to choose a mode.
- In Sketch, choose a mode in the **Liquify** set of the **Sculpt** drawer.
- Search commands for **Liquify**.

Each mode is a preset in **Tool Set**:

| Preset | Effect |
| --- | --- |
| **Liquify Push** | Drags pixels along the stroke. |
| **Liquify Twirl Counterclockwise** | Turns pixels counterclockwise around the center of the brush. |
| **Liquify Twirl Clockwise** | Turns pixels clockwise around the center of the brush. |
| **Liquify Pinch** | Pulls pixels in toward the center of the brush. |
| **Liquify Expand** | Pushes pixels out from the center of the brush. |
| **Liquify Crystals** | Breaks the image under the brush into small scattered cells. |
| **Edge** | Pulls pixels toward the stroke line from both sides. |
| **Reconstruct** | Takes back Liquify deformation under the brush. |

Liquify has no Apply button. Each stroke changes the layer and is its own undo
step. Strokes keep deforming the pixels the layer had before the first stroke,
until you paint on, fill, filter, transform or paste into the layer.

### Edge

**Edge** pulls paint toward the stroke line. The bands at the left show the original paint.

![Edge pulling the colored bands toward a horizontal stroke at the right.](shot:examples/liquify-edge)

### Reconstruct

**Reconstruct** restores the original paint under the brush. Here it restores the right half of the distorted bands.

![Distorted bands on the left and paint restored with Reconstruct on the right.](shot:examples/liquify-reconstruct)

## Adjust Liquify and Reset Liquify

You can scale back everything Liquify has done to a layer with
**Adjust Liquify**, or return the layer to its pixels from before the first
stroke with **Reset Liquify**.

Do one of the following:

- In the **Tool** panel, turn on **Adjust Liquify** or select **Reset Liquify**.
- Search commands for **Adjust Liquify** or **Reset Liquify**.

With **Adjust Liquify** on, an **Amount** slider appears in the **Tool** panel.
At 100% the deformation stays as it is, and at 0% it is gone. Releasing the
slider is one undo step, and so is **Reset Liquify**.

Both commands are unavailable, with the message "Apply Liquify to this layer
first", until the layer has Liquify changes.

## Liquify settings

![The Tool panel for Liquify Crystals with Strength, the Liquify group showing Distortion and Momentum, and Adjust Liquify and Reset Liquify.](shot:drawing/liquify-settings)

**Distortion** and **Momentum** are in the **Liquify** group of the **Tool** panel.

### Strength

Sets how far each dab moves the pixels. The effect is weaker at light pen
pressure and toward the edge of a soft tip.

### Distortion

Makes the movement irregular. On **Liquify Crystals** it sets how far the cells
scatter. **Reconstruct** has no **Distortion**.

### Momentum

Carries the effect on along the last direction of the stroke after you lift the
pen. **Reconstruct** has no **Momentum**.

## Sculpt drawer in Sketch

In Sketch, select **Sculpt** in the title bar to use the last Blend, Liquify or
Retouch tool, select it again to open its drawer, and once more to close the
drawer. The drawer lists the sets, the tools of the chosen set, and their
settings. **Sculpt** and **Brush** each keep their own last preset and brush size.

![The Sculpt drawer in Sketch with the sets Blend, Wet paint, Effects, Liquify and Retouch on the left, the blenders of the Blend set in the middle and the settings of Smudge on the right.](shot:drawing/sketch-sculpt-drawer)

## Painting on a mask

On a mask, Blend and Liquify paint plain coverage without smearing or moving
pixels. The first such stroke on each mask shows a notice.
