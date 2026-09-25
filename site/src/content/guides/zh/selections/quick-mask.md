---
title: "快速蒙版与选区图层"
description: "用笔刷画出选区，并保存选区以便日后再次使用。"
purpose: "有些区域画出来比圈出来更容易，例如柔软的头发、云朵或模糊的背景。快速蒙版（Quick Mask）会把选区显示为彩色叠加层，你可以用任何笔刷在上面绘画。选区图层则把选区保存在作品中，需要时随时可以再次载入。"
techniques: ["在Quick Mask中用笔刷修整选区。", "用Paint selection直接画出选区。", "把选区保存为选区图层，以后再载入。"]
figure: "1：临时的Quick Mask图层。2：Quick Mask设置，包括叠加颜色。3：显示为彩色叠加层的选区，已用一笔笔刷扩大。"
related: ["tools/selections", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/selections-quick-mask-light.webp", "dark": "/assets/guides/selections-quick-mask-dark.webp", "alt": "1：临时的Quick Mask图层。2：Quick Mask设置，包括叠加颜色。3：显示为彩色叠加层的选区，已用一笔笔刷扩大。"}
---

## 在快速蒙版中修整选区

先用任意选区工具建立一个粗略的选区，然后选择**Select → Quick Mask**或按**Q**。选区会显示为彩色叠加层，Layers面板顶部也会出现一个临时的**Quick Mask**图层。现在用任意笔刷绘画可以增加选区，用**Eraser**则可以减去选区。柔软的笔刷会画出柔和的边缘，这正是处理毛发或枝叶时需要的效果。

如果叠加层在作品上不容易看清，可以在**Properties**中修改它的颜色或不透明度。选区看起来合适后，选择**Return to Artwork**，就能在保持选区激活的状态下回到绘画。

## 直接画出选区

如果想跳过第一步，可以在选区工具中选择**Paint selection**工具。你画的每一笔都会加入选区，圈住一个区域就会选中其中的全部内容。按住**Alt**，或在Tool面板中切换模式，就能把部分选区重新画掉。

## 保存选区以便日后使用

一旦建立新的选区，原来的选区就会丢失，所以需要再次使用的选区请先保存下来。选择**Select → Save as Selection Layer**，或在Quick Mask图层的菜单中选择**Save as Selection Layer**。选区会作为选区图层存放在Layers面板中，并随作品一起保存。

要再次使用它，请选择**Select → Load Selection**，或者按住**Ctrl**点击选区图层的缩略图。你也可以通过该图层的菜单，把它与当前选区组合起来。Layers面板底部的**New Selection Layer**按钮会创建一个空的选区图层，你可以直接在里面绘制。
