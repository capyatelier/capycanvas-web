---
title: "笔刷与绘画"
description: "选择绘画工具和笔刷，然后设置下一笔的大小和不透明度。"
purpose: "Capy Canvas中的每种笔刷都属于一种绘画工具，例如Pencil或Paint Brush。工具决定你画出哪一类笔迹，Tool Set则让你在该工具中挑选具体的笔刷。先从内置笔刷开始，只调整下一笔真正需要的设置。"
techniques: ["选择工具、分组和笔刷。", "调整大小、不透明度和流量。", "擦除、混色和推动颜料。"]
figure: "1：绘画工具。2：Tool Set中的Watercolor分组和笔刷。3：当前笔刷的设置。"
related: ["painting/color", "advanced/brush-engine", "layers/basics"]
image: {"light": "/assets/guides/painting-brushes-light.webp", "dark": "/assets/guides/painting-brushes-dark.webp", "alt": "1：绘画工具。2：Tool Set中的Watercolor分组和笔刷。3：当前笔刷的设置。"}
---

## 选择笔刷

绘画工具位于Paint左边缘的工具栏中。**Pen**和**Pencil**用于画线，**Paint Brush**用于上色，**Airbrush**用于柔和的阴影。选择一个工具后，**Tool Set**会显示属于它的笔刷。有些工具包含多个分组，例如Paint Brush就有Paint、Watercolor和Oil paint三组。先选择分组，再选择**Watercolor Wash**之类的笔刷。

在Sketch中，标题栏里的**Brush**按钮会在抽屉中打开同样的选项。抽屉把所有种类的笔刷集中在一处，还会记住你上次使用的笔刷，轻点一下就能回到它。

绘画前，先在**Layers**中确认选中的是哪个图层。新画的颜色总是落在选中的图层上。

## 设置大小和不透明度

**Tool**面板显示当前笔刷的设置。**Brush size**决定笔画的宽度，**Opacity**决定新画颜色的透明程度。旁边的**Brush size**标签页保存着一排尺寸，方便你快速切换。在Sketch中，屏幕边缘的滑块起同样的作用，拖动时还会显示笔尖的预览。

不透明度只影响你接下来要画的笔画。要淡化图层上已有的颜色，请改为在Layers中降低该图层的不透明度。**Flow**与不透明度略有不同：它控制在同一笔中反复经过同一区域时，颜料会累积多少。[笔刷设置](/zh/docs/advanced/brush-engine/)对这些设置有更深入的说明。

## 擦除、混色与推动颜料

**Eraser**会从选中的图层上擦除颜色。**Blend**会柔化并融合画布上已有的颜色，**Liquify**则像推动未干的颜料一样推移画面。在Sketch中，Blend和Liquify一起放在**Sculpt**按钮下。这些工具会改变已有的颜色，如果想保留原来的样子，可以先在图层副本上尝试。

要选择颜色，请继续阅读[颜色与吸管](/zh/docs/painting/color/)。
