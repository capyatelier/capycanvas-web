---
title: "Pen, touch and shortcuts"
description: "Check pressure and put frequent actions on reachable controls."
purpose: "Check the device’s input before changing brush settings. Once pressure works, use preferences and shortcuts to make repeated drawing operations comfortable."
techniques: ["Test pressure response with a pencil.", "Adjust pressure response and stroke prediction.", "Assign shortcuts and distinguish pen input from touch."]
figure: "1: Preferences categories. 2: Input controls. 3: Keyboard Shortcuts entry."
related: ["painting/brushes", "advanced/brush-engine", "workspace"]
image: {"light": "/assets/guides/advanced-input-light.webp", "dark": "/assets/guides/advanced-input-dark.webp", "alt": "1: Preferences categories. 2: Input controls. 3: Keyboard Shortcuts entry."}
---

## Check the pen

Choose a built-in pencil and draw a stroke that starts lightly, becomes heavier, then fades. If it stays uniform, test pressure in another drawing app. Failure in both suggests a device or driver problem; failure only here calls for checking this editor’s input and preset settings.

On a separate tablet, map the active area to the correct display and preserve its aspect ratio. On a pen display, check cursor alignment near the center and edges. Pen pressure and tilt require device support.

## Adjust the response

Open **Preferences** and inspect the input controls. **Pressure response** changes how reported pressure is mapped. **Enable stroke prediction** estimates the next pen position. **Use browser stroke prediction** selects the browser’s estimate; **Prediction amount** controls the editor’s own prediction when available. Higher prediction can reduce the visible gap but may overshoot. Change one setting and compare the same curve before keeping it.

Touch can pan, pinch and rotate the view. Check your device’s touch behavior if resting a hand produces unexpected marks. See [Brush settings](/docs/advanced/brush-engine/) for changes belonging to one preset.

## Set shortcuts

Open **Keyboard Shortcuts**, select a command, and add the desired keys. Resolve reported conflicts before applying the assignment. Common defaults include **Ctrl+Z** for undo, **Space-drag** to pan, **F** to fit, and **Tab** for Zen. Apple systems can use Command where the platform mapping provides it.

Map pen buttons to those keys through the tablet driver when needed.
