---
title: "Retouching"
description: "Stage 2 of the photo editing tutorial: dust and a smudge removed with the healing brushes on a layer above the photo."
related: ["retouch/clone-heal", "layers/settings", "layers/working"]
---

This stage produces a *Retouch* layer that covers dust and a smudge in the
photo. The photo layer doesn't change.

## 1. Add a retouch layer

1. Select **New layer** at the bottom of the Layers panel, and rename the new layer *Retouch*.
2. Choose **Layer > Layer Settings > Use layer below as reference** ([Layer settings](/docs/layers/settings/)).

The photo layer becomes a reference layer, and a lighthouse icon appears next
to the eye on its row. The healing tools copy from the reference layers by
default and paint on *Retouch*.

![The Layers panel with Retouch above the terrarium layer, which shows the reference icon.](shot:photo/retouch-layers)

## 2. Remove dust

The **Spot Healing Brush** replaces what you paint over with texture from the
most similar nearby area when you lift the pen
([Clone and heal](/docs/retouch/clone-heal/)). The example removes dust from
the glass at the base of the terrarium.

1. Choose **View > Actual Pixels**, or press **Ctrl+1**, to see the photo at 100%.
2. Select **Spot Healing Brush** in the Tools toolbar, or press **S** until it is selected.
3. Press **]** until the brush is larger than the specks.
4. Paint over each speck.

## 3. Remove the smudge

The **Healing Brush** paints with pixels copied from a source, then matches
them to the color and brightness around the stroke.

1. Right-click **Spot Healing Brush** in the Tools toolbar, or hold it, and choose **Healing Brush**.
2. Hold **Alt** and click a clean area next to the smudge, or select **Set Source** in **Tool Options** and click the clean area.
3. Paint over the smudge.

![The Healing Brush source disc on the glass, with its bar of source options.](shot:photo/retouch-disc-bar)

A disc on the canvas marks the source. Drag the disc to move the source, or
select the disc to show its bar.

To compare with the original photo, hide *Retouch*.

Next stage: [Adjusting and exporting](/docs/photo/adjust/).
