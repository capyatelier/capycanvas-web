---
title: "Touch gestures"
description: "What fingers do on the canvas, and the finger taps you can assign."
related: ["input/pen", "start/canvas", "start/undo", "color/eyedropper", "customize/bubbles"]
---

You can move the canvas, pick colors and run commands with your fingers on a
touchscreen.

> **Memo:** Fingers never draw. Use a pen or a mouse to draw on the canvas.

## Moving the canvas

Drag the canvas with two fingers to scroll. Pinch with two fingers to zoom, and
rotate two fingers to rotate the canvas. With the **Hand** tool, one finger also
scrolls.

**Lock rotation** and **Lock zoom** in the zoom menu at the bottom of the canvas
stop pinching from rotating or zooming the view. See [Viewing the
canvas](/docs/start/canvas/).

While the pen is on the canvas, fingers don't move the canvas. A finger on a
transform or crop handle, or on the source of the **Clone Stamp**, drags the
handle or the source instead.

**Snap rotation** is on by default and holds the view near quarter turns. Turn it off in **View > Snap rotation** for free rotation.

## Picking a color

Hold one finger still on the canvas to pick the color under it. A magnifying
ring appears above the finger. Drag to aim, and lift the finger to take the
color. Press **Escape** to cancel.

A second finger on the canvas cancels the pick.

## Clearing the layer

Scrub the canvas with three fingers to run **Clear Entire Layer** on the active
layer. Move all three fingers together, reverse, then reverse again without
lifting. One **Undo** restores the layer. A locked layer isn't cleared.

## Moving a bubble

Drag a [bubble](/docs/customize/bubbles/) with two fingers to move it from
anywhere on it.

## Toolbars in Zen mode

In the Linux app, swipe inward from a window edge with one finger in
[Zen mode](/docs/customize/zen/) to show the toolbars and panels docked at that edge.

## Finger taps

You can run an action by tapping the canvas with two, three or four fingers.

| Tap | Default action |
| --- | --- |
| **Two-finger tap** | **Undo** |
| **Three-finger tap** | **Redo** |
| **Four-finger tap** | **Nothing**, or **Zen mode** with the **Procreate Style** keymap |

All the fingers of a tap must touch down before any of them lifts. Fingers that
move, or stay down as long as a long press, don't count as a tap. If a tap moved
the view, the view moves back.

## Assigning finger taps

To change a tap:

1. Choose **Edit > Preferences** and select **Pen & Input**.
2. Select the tap under **Touch gestures**.
3. Choose an action, or **Nothing** to turn the tap off.

**Reset** in the list of actions restores the default. Actions that last only
while held, such as **Pan**, aren't listed.

A keymap you export from the [Keyboard shortcuts](/docs/input/keyboard/) page
includes the taps. **Reset All Shortcuts** on that page resets the taps too.

![The Touch gestures settings with their default actions.](shot:touch/touch-gestures)

## Platforms

Touch gestures work on Linux, Windows, Android, iPad and the web. The **Touch
gestures** group isn't shown on macOS, where a three-finger scrub on the trackpad
still clears the layer.
