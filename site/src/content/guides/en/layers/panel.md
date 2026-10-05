---
title: "Layers panel"
description: "What each part of the Layers panel shows and does, including the layer menu."
related: ["layers/working", "layers/settings", "layers/types", "layers/masks"]
---

The **Layers** panel lists the layers of the drawing, with the front layer at
the top. The header shows the settings of the active layer.

![The Layers panel with the layers of the finished illustration.](shot:layers/panel "1 Header · 2 Layer rows · 3 Footer buttons")

## Opening the Layers panel

Do one of the following:

- Choose **Window > Layers**.
- In Paint, select **Layers** in the right column.
- In Sketch, select **Layers panel** in the title bar.
- Type "Layers panel" in [command search](/docs/start/command-search/).

In Photo, the panel is open in the right column.

## Header

![The Layers panel header for Ribbon shading, with Clip to Layer Below on.](shot:layers/panel-header "1 Layer blend mode · 2 Layer opacity · 3 Alpha lock · 4 Lock editing · 5 Clip to Layer Below · 6 Use selected layers as references")

1. **Layer blend mode** shows the current mode and opens the [blend menu](/docs/layers/blend-modes/).
2. **Layer opacity**, from 0 to 100. Drag the slider or type a value.
3. **Alpha lock**.
4. **Lock editing**.
5. **Clip to Layer Below**. For a filter, the button reads **Apply to *layer*** or **Apply to layers below** (see [How filters apply](/docs/filters/how-filters-apply/)).
6. **Use selected layers as references**. It reads **Stop using this layer as a reference** when the active layer is the only selected row and is already a reference.

A highlighted switch is on (see [Layer settings](/docs/layers/settings/)).
**Layer blend mode** and **Layer opacity** are unavailable for selection layers
and locked layers.

## Layer rows

![The Ribbon row, with its mask, Alpha lock on and the opacity at 80%.](shot:layers/panel-row "1 Eye · 2 Row button · 3 Thumbnail · 4 Mask link · 5 Mask thumbnail · 6 Name and subtitle · 7 Lock · 8 Grip")

Layers in a group are indented below the group.

1. The eye hides or shows the layer.
2. The row button adds the row to the selection or removes it, without changing the active layer. It shows a brush on the layer that receives paint, a lighthouse on a reference layer, and a check mark on other selected rows.
3. Select the thumbnail to paint on the layer's pixels. On a group, it expands or collapses the group.
4. On a layer with a mask, the link button sets whether the mask moves with the layer (**Unlink mask from layer**, **Link mask to layer**).
5. Select the mask thumbnail to paint on the [mask](/docs/layers/masks/).
6. The subtitle under the name shows the color mode, blend mode and opacity when they aren't Full color, Normal and 100%, for example "Multiply · 60%".
7. A lock icon marks a locked layer, and an alpha lock icon marks a layer with **Alpha lock** on.
8. Drag the grip to [move the layer](/docs/layers/working/).

Select a row to make it the active layer and the only selected row.
[Layer types](/docs/layers/types/) shows the thumbnail of each type.

**Ctrl**+click a paint layer's thumbnail to load its opacity as a selection, or
the mask thumbnail to load the mask. Add **Shift** to add to the selection,
**Alt** to subtract from it, or **Shift+Alt** to intersect with it.

## Row indicators

- An outline around the thumbnail or the mask thumbnail marks what brushes paint on.
- A rail to the left of the thumbnails joins [clipped layers](/docs/layers/settings/) to their base.
- A chain link between two thumbnails joins an [attached filter](/docs/filters/how-filters-apply/) to the row below it.
- A faded, crossed-out eye marks a layer that is turned on but hidden by its group, or an attached filter whose layer is hidden.
- A faded mask thumbnail marks a disabled mask.
- While [Quick Mask](/docs/selections/quick-mask/) is on, a **Quick Mask** row appears at the top.

## Footer buttons

![The buttons at the bottom of the Layers panel.](shot:layers/panel-footer "1 New layer · 2 New group · 3 New Selection Layer · 4 Add mask · 5 Add Filter · 6 Import Image as Layer… · 7 Delete selected layers · 8 Layer actions")

1. **New layer** adds a paint layer.
2. **New group**. With several rows selected, it groups them.
3. **New Selection Layer** (see [Selection layers](/docs/selections/selection-layers/)).
4. **Add mask**.
5. **Add Filter** attaches a filter to the active layer.
6. **Import Image as Layer…**
7. **Delete selected layers**.
8. **Layer actions** opens the layer menu of the active layer.

A button is unavailable when its action doesn't apply to the active layer, for
example **Add mask** on a locked layer (see
[Working with layers](/docs/layers/working/)).

## Swipes and holds

With a pen or a finger:

- Swipe a row to the left to show **Delete** at its right end. Select **Delete** to delete the layer, or swipe right to hide the button.
- Swipe a paint layer to the right to turn **Alpha lock** on or off.
- Swipe a group to the right to turn **Pass Through** on or off.
- Hold a row to open its layer menu. Move without lifting to drag the row instead.

![A row swiped to the left, with Delete at its right end.](shot:layers/panel-swipe-delete)

A short swipe changes nothing. Swipes don't work with a mouse, on the grip, or
on locked layers.

## Layer menu

You can open a menu of commands for each layer.

Do one of the following:

- Open the **Layer** menu. It holds the menu of the active layer, without **Add Filter**.
- Right-click a row, or hold it with a pen or a finger.
- Select **Layer actions** at the bottom of the panel.
- With a row focused, press **Shift+F10** or the Menu key.

![The layer menu of Ribbon.](shot:layers/panel-menu)

| Item | Contents |
| --- | --- |
| **New** | **New layer**, **New clipping layer**, **New group**, **Solid Color Fill**, **Gradient Fill**, **New Dodge & Burn Layer**, **Copy Selection to New Layer**, **Cut Selection to New Layer** |
| **Add Filter** | Filters to attach to the layer, by category |
| **Organize** | **Rename layer…**, **Duplicate**, **Group selected layers**, and **Ungroup** for a group |
| **Blend Mode** | Every [blend mode](/docs/layers/blend-modes/) |
| **Layer Settings** | The [layer settings](/docs/layers/settings/) |
| **Mask** | The [mask](/docs/layers/masks/) commands |
| **Pixel Selection** | **Select Layer Opacity**, **Add Opacity to Selection**, **Subtract Opacity from Selection**, **Intersect with Layer Opacity**, **Fill Selection**, **Invert Selection**, **Deselect Pixels** |
| **Layer Row Selection** | **Select All Layer Rows**, **Clear Layer Row Selection** |
| **Visibility** | **Show layer**, **Show layer and parent groups**, **Isolate selected layers**, **Show all layers** |
| **Move layer / mask** | Selects the [Operation](/docs/transform/move-transform/) tool |
| **Merge Down**, **Merge Visible**, **Stamp Visible**, **Flatten Image** | See [Merging layers](/docs/layers/merging/) |
| **Clear Entire Layer**, **Delete layer** | **Clear Entire Layer** appears on paint layers only |

Opening the menu of a row makes that layer active. A group's menu starts with
**New Selection Layer in Group…** and **Save Current Selection in Group…**.
Selection layers have a menu of their own (see
[Layer types](/docs/layers/types/)). Right-click or hold the mask thumbnail to
open the [mask menu](/docs/layers/masks/).
