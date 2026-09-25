---
title: "蒙版"
description: "为带状形、圆形和四边形分别建立边缘可编辑的颜色图层。"
purpose: "在这个阶段，每个形状都会得到自己的颜色图层。颜色填满整个图层，蒙版则决定你能看到其中的哪一部分。由于没有擦除任何内容，以后只需在蒙版上绘画，就能调整任何形状的边缘。"
techniques: ["用套索或Auto select选中形状。", "把选区转换为蒙版，并用颜色填满图层。", "在蒙版上绘画来调整边缘。"]
figure: "1：Ribbon处于选中状态的蒙版缩略图。2：位于Line art下方的Ribbon、Disc和Block。3：Eraser，用于在蒙版上隐藏部分内容。"
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1：Ribbon处于选中状态的蒙版缩略图。2：位于Line art下方的Ribbon、Disc和Block。3：Eraser，用于在蒙版上隐藏部分内容。"}
---

## 1. 选中形状

隐藏**Sketch**和**Color rough**。选择**Lasso selection**，像示例那样仔细地沿带状形描一圈。

如果线稿在某个形状周围是闭合的，**Auto select**只需点击一下就能完成这一步。在**Line art**的菜单中选择**Layer Settings → Use as reference**，把它标记为参考图层。然后选择**Auto select**，在Tool面板中选择**Sample reference layers**，再在形状内部点击。[选区工具](/zh/docs/tools/selections/)介绍了控制选区扩展范围的设置。

## 2. 建立带蒙版的颜色图层

在Line art下方添加一个名为**Ribbon**的新图层。保持选区激活，打开Ribbon的菜单，选择**Mask → Mask: reveal selection**。现在这个图层有了一个只显示带状形的蒙版。

点击Ribbon的内容缩略图，选择带状形的颜色。依次选择**Select → Select all pixels**和**Edit → Fill selection**，用颜色填满整个图层，最后选择**Select → Deselect pixels**。画面上只显示带状形，但颜色在蒙版下面继续延伸，等你以后想扩大形状时就能用上。

## 3. 调整边缘

点击Ribbon的蒙版缩略图来编辑蒙版。这时，无论用哪支笔刷，画过的地方都会显示出更多颜色，而**Eraser**会再次把它隐藏起来。想修改颜色本身时，再点击内容缩略图。

用同样的方法建立**Disc**和**Block**。让Disc位于Ribbon下方，Block位于Disc下方，Line art位于三者之上。保存作品，然后继续[细化](/zh/docs/illustration/render/)阶段。
