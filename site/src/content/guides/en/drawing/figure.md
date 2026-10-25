---
title: "Figure"
description: "Drawing lines, rectangles, ellipses, polygons, stars and paths with the Figure tool."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

You can draw lines, rectangles, ellipses, polygons, stars and paths on the selected layer with
the **Figure** tool. On a [vector layer](/docs/layers/vector/), each figure becomes a path you can edit. On a paint layer, it paints pixels.

## Figure tool

Do one of the following:

- Press **U**.
- In Paint, select **Figure** in the Tools toolbar. Right-click or hold the button to choose **Line**, **Rectangle**, **Ellipse**, **Polygon**, **Star** or **Path**.
- Search commands for **Figure**, or for a shape such as **Figure › Rectangle**.

Sketch and Photo have no Figure button. You can add one with **Insert Tools…**
([Toolbars and title bar](/docs/customize/toolbars/)).

![The menu of the Figure button in the Paint Tools toolbar, with Line, Rectangle, Ellipse, Polygon, Star and Path.](shot:drawing/figure-menu)

Drag on the canvas to draw any figure except **Path**. A dashed outline shows the shape while
you drag, and the figure appears when you release. Hold **Shift** while dragging
to draw a line in 45° steps, a square, a circle, or a regular polygon or star.

- Figures draw only a layer's artwork, on vector layers and on layers a brush can paint ([Brush tools](/docs/drawing/brush-tools/)).
- **Alpha lock** is respected.
- On a paint layer, an active selection clips **Line**, **Rectangle** and **Ellipse**. It doesn't clip **Polygon**, **Star**, **Path** or a rectangle with rounded corners.
- With **Transparent paint** selected in the Color panel, **Line**, **Rectangle** and **Ellipse** erase on a paint layer. Every other figure shows a notice asking for a color.
- Pen pressure doesn't change the width of a figure.
- Figures don't follow guides.
- Figure isn't available in Quick Mask or on a selection layer.
- Each figure is one undo step.

## Shape

- **Line** runs from where you press to where you release, with round ends.
- **Rectangle** has its corners at the press and release points, with its sides parallel to the canvas edges.
- **Ellipse** fits the box between the press and release points.
- **Polygon** and **Star** fit the box, with the first corner or point at the top.
- **Path** is drawn anchor by anchor.

Choose the shape at the top of the **Tool Set** panel, from the menu of the
Figure button, or from **Tool** in the Tool Options bar.

## Outline and fill

- **Outline** draws the edge of the shape in the current color, centered on the edge.
- **Fill** covers the shape with the current color.
- **Outline + fill** draws the outline in the foreground color and fills the inside with the background color.

Choose the mode below the shapes in the **Tool Set** panel, or from
**Variant** in the Tool Options bar. A line can only be drawn with **Outline**.

![The Tool Set panel with Line, Rectangle, Ellipse, Polygon, Star and Path above Outline, Fill and Outline + fill.](shot:drawing/figure-tool-set)

## Shape settings

![The Tool panel for Star, with Line width, Opacity, Points and Inner radius.](shot:vector/figure-settings)

**Corner radius**, **Corners**, **Points** and **Inner radius** are in the **Tool**
panel and the Tool Options bar, for the shape they belong to.

### Corner radius

Rounds the corners of a **Rectangle**, from 0 to 4096 px.

### Corners

Sets the number of corners of a **Polygon**, from 3 to 100. The default is 5.

### Points

Sets the number of points of a **Star**, from 3 to 100. The default is 5.

### Inner radius

Sets how far the inner corners of a **Star** sit from its center, as a percentage of the outer radius, from 5% to 100%. The default is 50%.

## Path

You can draw a path anchor by anchor.

- Click to add a corner anchor. Press and drag to pull out handles for a smooth anchor, or hold **Alt** to drag only the outgoing handle.
- Hold **Shift** to place the next anchor in 45° steps from the last.
- Click the first anchor to close the path.
- Select **Finish path** on the canvas bar or press **Enter** to add the path. **Cancel path** or **Escape** discards it.
- **Remove last point** or **Backspace** removes the last anchor, and so does **Undo**.

![The canvas bar while a path is drawn, with Remove last point, Cancel path, and Finish path.](shot:vector/path-bar)

The path uses the current mode, **Line width** and colors, with sharp corners and flat ends. On a vector layer it is selected when you finish, and a path that starts at the open end of a selected path continues it.

## Line width and Opacity

**Line width** and **Opacity** are in the **Tool** panel and the Tool Options
bar. They share their values with the current brush's **Brush size** and
**Opacity** ([Size, strength and opacity](/docs/brushes/basics/)), and **[** and
**]** change Line width.

### Line width

Sets the width of the outline, from 0.5 to 2048 px. It doesn't appear in
**Fill** mode. On a vector layer, **Outline width** in [Properties](/docs/layers/paths/) changes it later.

### Opacity

Sets the strength of the outline and the fill alike.
