---
title: "Input settings"
description: "Check pen response and make frequently used controls accessible."
figure: "Light-to-heavy pencil strokes beside the pressure response settings."
related: ["workspace", "advanced/brush-engine"]
purpose: "Pen input passes through the device and operating system before reaching the editor and brush. If pressure is missing or the cursor is offset, first work out where the problem starts. Once the pen works, you can assign frequently used commands to controls that are comfortable while drawing."
techniques: ["Distinguish missing pressure from a brush response that needs adjustment.", "Check tablet-to-screen mapping and separate pen input from touch navigation.", "Assign undo, brush size, and canvas navigation to reachable keys or pen buttons."]
---

## Check pressure before changing the brush

Use the built-in **Pencil** preset with its default settings. Pressing harder should make the line wider and darker. Draw a stroke that gradually increases and decreases in force. If the stroke stays uniform, check whether pressure works in another drawing application. A problem in both apps points to the device or its driver; a problem only in Capy Canvas calls for checking its input and preset settings.

If pressure works but takes too much force, adjust the pressure response. Test with your normal grip rather than pressing harder to reach the preset's maximum. Use the [brush engine settings](/docs/advanced/brush-engine/) for the response of an individual preset.

## Map the pen and touch input

On a separate tablet, check that its active area maps to the display containing Capy Canvas. A mismatched aspect ratio can make a circular hand movement produce an oval on screen. On a pen display, check alignment near the center and edges if the cursor appears offset from the tip.

If resting your hand creates marks, check palm rejection and whether touch is assigned to drawing or canvas navigation. Pressure and tilt require support from both the pen and the device; a touchscreen or stylus does not necessarily provide either.

## Set up controls for drawing

Open **Preferences → Keyboard Shortcuts** from the settings gear in the web version, or Preferences in the native app menu. Choose a command, select **Add**, and press the desired keys. The editor flags conflicts before you apply the assignment. For pen buttons, assign the same keys in your tablet driver.

The defaults used in this tutorial are **Ctrl+Z** for undo (**Command+Z** on Apple systems), **Space-drag** to pan, **F** to fit the canvas, and **Tab** for [Zen mode](/docs/workspace/). You can assign your preferred brush sizes in the shortcut editor.

If a stroke trails behind the pen, reduce stabilization before changing pressure settings. In the web version, also compare a smaller brush and a smaller document to narrow down whether the delay is related to rendering. Note the device, browser, preset, and document size when reporting the problem.
