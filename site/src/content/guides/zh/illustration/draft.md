---
title: "草稿"
description: "用铅笔画出草稿，并在单独的图层上试色。"
purpose: "草稿用来确定形状，色稿用来尝试颜色。把它们放在不同的图层上，你就可以随意反复修改颜色，而不会碰到铅笔线条。"
techniques: ["用铅笔和压感绘画。", "选中并修正草稿的一部分。", "把色稿放在草稿下方的图层上。"]
figure: "1：铅笔笔刷。2：Layers中位于Color rough上方的Sketch。3：铅笔的大小和不透明度。"
related: ["tools/selections", "tools/transforms", "painting/color"]
image: {"light": "/assets/guides/illustration-draft-light.webp", "dark": "/assets/guides/illustration-draft-dark.webp", "alt": "1：铅笔笔刷。2：Layers中位于Color rough上方的Sketch。3：铅笔的大小和不透明度。"}
---

## 1. 绘制草稿

添加一个新图层，命名为**Sketch**。选择**Pencil**工具，并在Tool Set中选一支铅笔。先用轻淡的线条找出圆形、弯曲的带状形和倾斜的四边形，再加重力度，确定想要保留的轮廓。在Tool面板中设置铅笔的大小。

在形状周围留出一些空间。这会让后面的阶段更轻松，因为你能清楚地看到每个形状在哪里结束。时不时在顶部工具栏中选择**Flip view horizontally**，看看镜像后的草稿；这样更容易发现比例上的错误。

## 2. 修正不太对的部分

如果某个部分的位置或大小不对，不必重画。选择**Lasso selection**，在那部分周围画一个圈。然后选择**Scale / rotate**，把它拖到合适的位置或调整大小，再选择**Apply transform**。继续绘画之前，选择**Select → Deselect pixels**。

[选区](/zh/docs/tools/selections/)和[变换](/zh/docs/tools/transforms/)指南更详细地介绍了这些工具。如果修改出了问题，撤销即可。

## 3. 尝试配色

再添加一个名为**Color rough**的图层，把它拖到Sketch下方。为每个形状选择一种颜色，用**Lasso selection**沿形状画一圈，然后选择**Edit → Fill selection**。示例中，带状形用蓝绿色，圆形用土黄色，四边形用陶土色。这些只是粗略的颜色，边缘不需要整齐。稍微降低这个图层的不透明度，让铅笔线条依然清晰可见。

想单独查看草稿时，随时可以暂时隐藏Color rough。保存作品，然后继续[线稿](/zh/docs/illustration/ink/)阶段。
