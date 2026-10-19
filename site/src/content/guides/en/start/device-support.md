---
title: "Device support"
description: "Operating system, browser, and graphics requirements for native apps and the web editor."
related: ["quickstart", "input/pen", "input/touch"]
---

{appName} uses the device's graphics processor to draw and display the canvas. Support depends on the app or browser, operating system, and graphics hardware together.

## Native apps

The desktop app supports Windows, macOS, and Linux. The native iPad app requires iPadOS 17.5 or later. The Android app requires Android 12 or later.

The iPad and Android apps are beta releases. Meeting the operating-system requirement does not by itself confirm that every graphics processor or pen works.

## Web editor

The web editor runs in these browsers:

| System | Browsers |
| --- | --- |
| Windows | Chrome, Edge, and Firefox 141 or later |
| macOS | Chrome, Edge, Safari 26 or later, and Firefox 147 or later on Apple silicon |
| Linux with Wayland | Chrome, Edge |
| iPadOS 26 or later | Safari |
| Android 12 or later | Chrome |

The native iPad app's iPadOS 17.5 minimum does not apply to Safari. The web editor requires iPadOS 26 or later because it uses browser graphics features supplied by that release.

## Graphics support

If the canvas cannot start, {appName} shows a message describing the missing graphics capability. Update the operating system, browser, and graphics driver first. If the message remains, include its exact text, the device, and the graphics model when reporting the problem.
