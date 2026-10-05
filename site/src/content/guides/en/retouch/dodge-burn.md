---
title: "Dodge and burn, frequency separation"
description: "Adding a Dodge & Burn layer, and splitting a layer into Low and High layers with Frequency Separation."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## New Dodge & Burn Layer

You can add a neutral gray layer in **Soft Light** for dodging and burning.

Do one of the following:

- Choose **Layer > New > New Dodge & Burn Layer**.
- Open a layer's menu in the Layers panel and choose **New > New Dodge & Burn Layer**.

A canvas-sized layer named *Dodge & Burn* appears above the active layer and
any layers clipped to it, and becomes the active layer.

You can't add the layer into a locked group, or while a crop or transform is
open.

![The Layers panel with a Dodge & Burn layer above the terrarium photo.](shot:retouch/dodge-burn-layer)

## Frequency Separation…

You can split the active layer for frequency separation in one step.

Choose **Filter > Frequency Separation…**. A panel opens at the bottom of the
canvas with **Radius**, 4 px by default, and the canvas previews the blur of
the *Low* layer while you change **Radius**.

![The Frequency Separation panel with the Radius value.](shot:retouch/frequency-separation-panel)

**Apply** puts a group named *Frequency Separation* where the layer was:

- *High* holds the fine texture, set to **Linear Light**. It is the top layer and becomes the active layer.
- *Low* holds the colors and tones, blurred with **Gaussian Blur** to the radius, set to **Normal**.

The group takes the original layer's opacity and clipping. The original layer
stays directly below the group, hidden.

The layer has to be visible and set to **Normal**, and the drawing has to use
**Edit > Blending > Perceptual Blending** (see
[Color space, bit depth and blending](/docs/color-management/color-spaces/)).
If the drawing changes while the panel is open, the panel closes.

![The Layers panel with the Frequency Separation group, High above Low, and the hidden original layer.](shot:retouch/frequency-separation-layers)
