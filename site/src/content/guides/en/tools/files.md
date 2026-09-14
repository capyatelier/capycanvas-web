---
title: "Saving and exporting"
description: "Keep an editable .capy project and export a flattened PNG."
purpose: "A .capy project retains document structure for further editing. PNG records the visible image for sharing. Save the project before exporting so later revisions can use the same layers, masks and effects."
techniques: ["Create, save and reopen a .capy project.", "Export the visible image as PNG.", "Keep workspace settings separate from artwork."]
figure: "1: File menu. 2: Save and Save As commands. 3: Export PNG command."
related: ["filters/image-editing", "layers/basics", "illustration/render"]
image: {"light": "/assets/guides/tools-files-light.webp", "dark": "/assets/guides/tools-files-dark.webp", "alt": "1: File menu. 2: Save and Save As commands. 3: Export PNG command."}
---

## Save the editable document

Use **File → Save As…** for a new `.capy` project or another working copy. **Save** updates the current file when the browser can retain its file handle. Where direct file access is unavailable, the web editor uses a download flow; confirm the file was saved before dismissing it.

**Open…** opens a `.capy` project. To add an ordinary image to the current drawing, use **Import image as layer** in Layers instead.

## Export the visible result

Choose **File → Export PNG…**. Export produces a flattened image without merging the working layers. Hide Sketch and Color rough if they should not appear; check Paper’s visibility when you need transparency.

Open the PNG afterward to check its pixel dimensions, edges and background. Canvas zoom and view rotation do not change the exported artwork. Keep the `.capy` file alongside it for future edits.

## Keep files when changing devices

Workspace changes save separately in browser storage. They do not save the drawing, sync files to another device, or replace a project backup. Transfer the `.capy` file itself and reopen it on the destination before removing the original.

When New, Open or Close prompts about unsaved changes, save, discard, or cancel deliberately. Cancel returns to the current drawing.
