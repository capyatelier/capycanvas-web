---
title: "Preferences"
description: "The Preferences dialog and the settings on its Appearance, Canvas, Color, Pen & Input and About pages."
related: ["input/pen", "input/pen-pressure", "input/keyboard", "customize/zen", "color-management/color-spaces"]
---

You can change settings for the whole app in the **Preferences** dialog. Each
change applies and is saved at once.

![The Preferences dialog on the Appearance page.](shot:preferences/appearance)

## Opening Preferences

Do one of the following:

- Choose **Edit > Preferences**. On macOS, choose **Settings…** in the app menu.
- Press **Ctrl+,**.
- In Paint and Photo, select the gear button at the right end of the title bar.
- Type "Preferences" in [command search](/docs/start/command-search/).

Preferences opens on **Appearance**. Choose **Edit > Keyboard Shortcuts** for keyboard shortcuts, or **About {appName}** from the application menu for About.

While Preferences is open, canvas shortcuts, pen buttons and finger taps do
nothing.

## Searching preferences

Select **Search preferences** at the top of the sidebar, or start typing anywhere
outside a text field.

The search also finds keyboard shortcuts, pen buttons and finger taps. Selecting
a shortcut opens its shortcut editor. In other languages, the search matches the
English names too.

![Search results for "cursor" in the Preferences sidebar.](shot:preferences/search)

## Resetting a setting

On the web and in the Linux app, right-click a setting, or hold it with a finger
or pen, and choose **Reset to Default**. The menu item shows the default value.
It is unavailable while the setting has its default value.

Clearing a number field or a hex color field also restores the default.

![The Reset to Default menu of the Dark theme base color setting.](shot:preferences/reset-menu)

## Appearance

Base colors and the accent color change only the interface, never the drawing.

### Language

Sets the language of the interface. **Use system language** is the default, and
each language is listed in its own name.

### Color theme

Choose **System** (the default), **Light** or **Dark**. The **Dark Mode** command
in command search switches between **Light** and **Dark**.

### Panel transparency

Sets how much of the blurred artwork shows through panels and bars: **Off**,
**Low** (the default), **Medium** or **High**. See [Panels and
columns](/docs/customize/panels/).

### Dark theme base color

Sets the gray of the interface in the dark theme. Choose a swatch, or **Custom**
to type a six-digit hex color.

### Light theme base color

Sets the gray of the interface in the light theme, with the same choices.

### Accent color

**System** uses the operating system's accent color. It is the default on Linux,
Windows, macOS and Android, and isn't offered on the web or iPad. The other
choices are
**Blue** (the default on the web and iPad), **Teal**, **Green**, **Yellow**,
**Orange**, **Red**, **Pink**, **Purple**, **Slate** and **Custom**.

### Show Capy in Zen mode

Keeps the Capy button on screen in [Zen mode](/docs/customize/zen/). On by
default.

### Button icon

Sets the Capy button's picture: **Looking up** (the default), **Facing
forward**, **Bathing** or **Sleeping**.

## Canvas

![Canvas navigation settings.](shot:preferences/canvas-navigation)

### Mouse wheel

Choose whether an unmodified mouse wheel pans or zooms the canvas. Holding **Ctrl** uses the other action.

### Rotate with two fingers

Allows a two-finger twist to rotate the view. Turn it off to keep two-finger gestures to pan and zoom.

### Scroll pan speed

Scales how far the mouse wheel, the trackpad and a game controller's left stick
scroll the canvas, from 0.25 × to 4.00 × (default 1.00 ×).

### Scroll zoom speed

Scales zooming with **Ctrl** and the mouse wheel, or with a game controller's
right stick, from 0.25 × to 4.00 × (default 1.00 ×).

### Use Pass Through for new groups

Sets new groups to [Pass Through](/docs/layers/blend-modes/). Off by default.
Existing groups don't change.

## Color

The **Opening photos** settings apply to photos you open.

![The Opening photos settings on the Color page of Preferences.](shot:preferences/color)

### Editing precision

**Source depth** (the default) keeps a photo's own bit depth. **16-bit** opens
8-bit photos as 16-bit, and float photos stay float.

### Untagged RGB and grayscale

Sets how photos without a color profile open: **Assume sRGB** (the default) or
**Ask**. Photos with a profile keep it.

### Manage Profiles…

Opens the color profile library. See [Color space, bit depth and
blending](/docs/color-management/color-spaces/).

## Pen & Input

The settings on this page are described in [Pen](/docs/input/pen/) and [Touch
gestures](/docs/input/touch/).

## Keyboard Shortcuts

The keymap, modifier keys and shortcuts on this page are described in [Keyboard
shortcuts](/docs/input/keyboard/).

## About

The **About** page lists the **Version**, **Application license**, **Canvas
rendering**, **Website**, **Source code** and **Dedicated to** rows.

## Where preferences are kept

Each device keeps its own preferences. In the web app, preferences belong to the
browser and are shared by all its tabs. To move keys, modifier keys, pen buttons
and finger taps to another device, export a keymap from the [Keyboard
Shortcuts](/docs/input/keyboard/) page.
