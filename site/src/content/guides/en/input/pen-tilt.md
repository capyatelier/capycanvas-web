---
title: "Pen tilt"
description: "Calibrating a pen’s tilt curve and direction while drawing on the canvas."
related: ["input/pen", "input/pen-pressure", "brushes/dry-media", "preferences"]
---

You can change the tilt response and direction for each pen.

## Opening tilt calibration

Do one of the following:

- Open [Preferences](/docs/preferences/), select **Pen & Input**, then select **Adjust…** beside **Pen tilt**.
- Search commands for **Pen tilt…**.

Use your pen on the canvas to select the device to calibrate. The dialog shows the device name and its tilt direction. Each pen keeps its own calibration.

![The Pen tilt dialog with the response curve and direction controls.](shot:pen/tilt-calibration)

## Tilt curve

The horizontal axis is the pen’s tilt in degrees. The vertical axis is the tilt used by the brush. A marker follows the current tilt.

Select the graph to add a control point. Drag points to shape the curve. Double-click an interior point or drag it outside the graph to remove it.

**Less sensitive** requires a larger pen tilt for the same brush angle. **More sensitive** increases the output from smaller tilts.

## Direction

- **Reverse horizontal** reverses the horizontal tilt direction.
- **Reverse vertical** reverses the vertical tilt direction.
- **Swap axes** exchanges horizontal and vertical tilt.

The direction indicator shows the pen’s reported tilt and the adjusted tilt.

## Testing and finishing

Draw on the canvas while the dialog is open to test the active brush. Test strokes remain in the drawing’s undo history.

**Reset** restores the curve and direction controls. **Apply** saves the calibration for the pen. **Cancel** discards calibration changes but leaves test strokes in the drawing.
