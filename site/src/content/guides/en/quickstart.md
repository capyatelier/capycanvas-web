---
title: "Quickstart"
description: "Opening {appName}, drawing on the first blank drawing, saving it as a .capy file and exporting a PNG."
related: ["start/workspaces", "files/open-save", "files/export", "input/keyboard"]
---

## Opening {appName}

Do one of the following:

- Open the web editor at [editor.capycanvas.art](https://editor.capycanvas.art/).
- Get the desktop app, the iPad or Android beta, or the steps to install the web editor as an app from the [Download](/download/) page.

The web editor runs in these browsers:

| System | Browsers |
| --- | --- |
| Windows | Chrome, Edge, Firefox 141 or later |
| macOS | Chrome, Edge, Safari 26 or later, Firefox 147 or later (Apple silicon) |
| Linux (Wayland) | Chrome, Edge |
| iPadOS 26 or later | Safari |
| Android 12 or later | Chrome |

After your first visit, the web editor also opens without an internet connection.

## The first drawing

![The Layers panel of a new drawing, with Current ink above Paper.](shot:files/new-layers)

The first time you open {appName}, it shows the [Paint](/docs/start/workspaces/)
workspace with a blank drawing, and the title bar reads "Untitled · 2048 × 1536".
**Current ink**, an empty paint layer, is selected above **Paper**, a white fill
layer. The **Pen** tool is active with the **G-Pen** brush and a near-black color.

Later, {appName} opens with the workspace you used last and the drawings that
were open.

## Drawing

Drag on the canvas with a pen or a mouse. To use another tool, select it in the
Tools toolbar at the left edge of the window. In Sketch, select **Brush** in the
title bar.

> **Memo:** Fingers never draw. Two fingers on the canvas pan, zoom and rotate the view.

To undo a stroke, choose **Edit > Undo**, press **Ctrl+Z** or tap the canvas
with two fingers (see [Undo and redo](/docs/start/undo/)).

## Keys on macOS and iPad

This manual writes keys as on Windows and Linux. On macOS and iPad, press
**Command** (⌘) where the manual says **Ctrl**. **Ctrl** also works in the web
editor and the macOS app.

The web editor labels every shortcut with **Ctrl**. The browser keeps **F5**,
**F11**, **F12**, and **Ctrl** or **Ctrl+Shift** with **W**, **T**, **N**,
**R**, **L**, **Q** or **P**. A command that uses one of these keys has no key
in the web editor. Choose it from the menu or from
[command search](/docs/start/command-search/).

## Starting another drawing

Choose **File > New…** and select **Create** in the [New drawing](/docs/files/new/)
dialog. The new drawing opens in its own tab next to the first one.

## Saving the drawing

![The File menu with New…, Open…, Save, Save As… and Export….](shot:files/file-menu)

To save the drawing with all its layers:

1. Choose **File > Save**, or press **Ctrl+S**.
2. Choose a folder and a name. The suggested name is "Untitled.capy".

The title bar then shows the file name. In Firefox and Safari, the drawing
counts as saved only after you select **Download** and then **File saved** in
the **Download file** dialog.

## Exporting a PNG

![The Export image dialog with Destination set to Web / Share.](shot:files/export-dialog)

To export a flattened PNG copy of the drawing:

1. Choose **File > Export…**, or press **Ctrl+Shift+E**.
2. Leave **Destination** set to **Web / Share**, and select **Choose File…**.
3. Choose a folder and a name. The suggested name is "Untitled.png".

**Web / Share** writes an 8-bit sRGB PNG at the drawing's full size. Exporting
doesn't change or save the drawing.
