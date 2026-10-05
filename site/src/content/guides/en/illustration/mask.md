---
title: "Base colors"
description: "Stage 3 of the illustration tutorial: a paint layer for each shape, masked to the shape and filled with its base color."
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

This stage produces a paint layer for each shape, filled with its base color
and masked to the shape. The base colors go on paint layers because a fill
layer can't be a clipping base for the shading in stage 4.

## 1. Add the Block layer

Hide *Sketch*, select its row, and add a layer named *Block* with
**New layer**. The new layer appears directly above *Sketch*, below
*Line art*.

## 2. Mask the layer to the block

Press **M**, or select **Lasso selection** in the **Select** group of the
Tools toolbar, and trace the outline of the block in *Line art*. Then select
**Mask** in the selection bar
([Working with selections](/docs/selections/working/)).

![The selection bar with Mask, beside a selection around the block.](shot:illustration/mask-selection-bar)

The selection becomes the mask of *Block* ([Masks](/docs/layers/masks/)). A
mask thumbnail appears on the row, and a bar at the bottom of the canvas reads
"Editing Block mask".

## 3. Fill the layer

**Fill selection** isn't available while you edit a mask. To fill the layer:

1. Select the layer thumbnail on the *Block* row, or select **Edit Content** in the bar at the bottom of the canvas.
2. Choose terracotta in the **Color** panel.
3. Choose **Select > Select all pixels**, or press **Ctrl+A**.
4. Choose **Edit > Fill selection**, or press **Shift+Backspace**.
5. Choose **Select > Deselect pixels**, or press **Ctrl+D**.

The color covers the whole layer, and the mask shows it only inside the block.

## 4. Add Disc and Ribbon

Make *Disc* in ochre, then *Ribbon* in teal, in the same way.

![The Layers panel with Ribbon, Disc and Block, each with a mask thumbnail, below Line art.](shot:illustration/mask-layers)

The layer list reads *Line art*, *Ribbon*, *Disc*, *Block*, *Sketch*,
*Color rough*, and **Paper**.

## 5. Adjust an edge

Select the mask thumbnail on the *Ribbon* row. The bar at the bottom of the
canvas reads "Editing Ribbon mask".

![The bar at the bottom of the canvas reading Editing Ribbon mask, with Invert, Disable, Apply Mask and Edit Content.](shot:illustration/mask-bar)

Paint along an edge with the **G-Pen** brush to show more of the teal, or use
the **Eraser** to trim the edge. On a mask, brushes ignore the paint color.

Next stage: [Rendering](/docs/illustration/render/).
