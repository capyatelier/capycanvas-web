---
title: "Undo and redo"
description: "Undoing and redoing changes to a drawing, and the separate history for layout changes."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

You can undo changes to a drawing one step at a time, and redo the steps you
undid. Each open drawing has its own history.

![The Undo and Redo buttons in the Commands toolbar.](shot:start/undo-commands)

## Undo

Do one of the following:

- Choose **Edit > Undo**.
- Press **Ctrl+Z**.
- Select **Undo** in the Commands toolbar. In Sketch, **Undo** is on the bar at the left edge of the screen.
- Tap the canvas with two fingers.

## Redo

Do one of the following:

- Choose **Edit > Redo**.
- Press **Ctrl+Shift+Z** or **Ctrl+Y**.
- Select **Redo** in the Commands toolbar, or on the bar at the left edge in Sketch.
- Tap the canvas with three fingers.

A new change after Undo clears the steps you could redo.

## What counts as a step

Each stroke, fill, filter change, transform, crop, canvas size change and
selection change is one step, and so is each change to a layer. Changes to the
view, the tool, the brush, the color and the layout are not steps.

While you place an image, transform a layer or use the Crop tool, Undo cancels
that operation instead of stepping back.

## History length

Each drawing keeps up to 256 steps. The oldest steps are dropped first.

## Saving and reopening

Saving doesn't clear the history. A drawing you open from a `.capy` file starts
with an empty history, but drawings that reopen when you restart {appName}
keep their undo steps.

## Layout changes

Changes to panels, toolbars, the title bar and workspaces have their own
history. **Edit > Undo** never undoes a layout change.

Do one of the following:

- Choose **Window > Undo Layout Change** or **Window > Redo Layout Change**.
- Press **Ctrl+Alt+Z** or **Ctrl+Alt+Shift+Z**.

Each workspace keeps its own layout history, and the history survives a
restart. **Window > Workspaces > Layout History…** lists earlier layouts of the
current workspace.
