---
title: "按亮度选择"
description: "用Tonal range工具选择图像的阴影、中间调或高光。"
purpose: "摄影师常常只想调整画面中较暗或较亮的部分，例如提亮阴影，或压暗过亮的天空。Tonal range工具按照明暗程度选择区域，并带有柔和的边缘，让调整自然地融入画面。"
techniques: ["用预设选择色调范围。", "从图像中取样，自定义范围。", "柔化选区，并用它进行调整。"]
figure: "1：从阴影到高光的色调预设。2：柔和度和羽化。3：画布上被选中的中间调。"
related: ["tools/selections", "filters/overview", "filters/image-editing"]
image: {"light": "/assets/guides/selections-tonal-range-light.webp", "dark": "/assets/guides/selections-tonal-range-dark.webp", "alt": "1：从阴影到高光的色调预设。2：柔和度和羽化。3：画布上被选中的中间调。"}
---

## 选择色调范围

在选区工具中选择**Tonal range**。Tool面板会显示一排预设，从**Shadows**经过**Midtones**一直到**Highlights**。选择其中一个，图像中相应的部分就会立即被选中。

要自己选择范围，请选择**Custom**，然后在想要匹配的图像部分上点击或拖动。之后可以调整范围的两端，直到选区恰好覆盖你想要的色调。

## 柔化边缘

**Softness**决定选区在你所选的色调与周围色调之间过渡得有多平缓。较高的柔和度会带来平滑自然的过渡，通常最适合照片。**Feather**会让选中区域的外边缘变得更加柔和。和其他选区工具一样，你可以用Tool面板顶部的按钮对色调选区进行添加或减去。

## 使用选区

选区激活时，从[滤镜与调整](/zh/docs/filters/overview/)中添加一个调整，例如**Curves**或**Exposure**。调整只会影响选中的色调。例如，可以选中阴影并提亮，显现其中的细节；或者选中高光并压暗，找回发白的天空。

要保留选区以便日后使用，请按照[快速蒙版与选区图层](/zh/docs/selections/quick-mask/)中的说明，把它保存为选区图层。
