---
title: "蒙版"
description: "为带状形、圆形和四边形建立可编辑的颜色边界。"
purpose: "底色图层保存颜色，蒙版控制可见边界。把蒙版后面也填满，以后稍微扩大范围时无需重新上色。"
techniques: ["用套索或自动选择定义区域。", "从选区建立蒙版并填满底层。", "选择蒙版缩略图修正边缘。"]
figure: "1：Ribbon选中的蒙版缩略图。2：Line art下方的Ribbon、Disc和Block。3：显示蒙版区域的白色。"
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1：Ribbon选中的蒙版缩略图。2：Line art下方的Ribbon、Disc和Block。3：显示蒙版区域的白色。"}
---

## 1. 选择底色形状

隐藏**Sketch**和**Color rough**。示例用**Lasso selection**圈定带状形的外形。封闭线稿也可将**Line art**设为参考层，再用**Auto select → Reference**点击内部。

继续前检查边界，必要时调整容差、闭合间隙和扩张后重新选择。详见[选区与填充](/zh/docs/tools/selections/)。

## 2. 建立蒙版图层

在Line art下方创建**Ribbon**。保留像素选区，在Ribbon菜单中选择**Mask: reveal selection**。清除剩余选区，再选择Ribbon的**内容缩略图**。

选择底色，使用**Select → Select all pixels**，再用**Edit → Fill selection**填满整层，最后**Deselect pixels**。蒙版只显示外形，隐藏处仍有颜色。需要取色时临时显示Color rough，用完再隐藏。

## 3. 修正边缘

选择Ribbon的**蒙版缩略图**，画黑色隐藏多余部分，画白色扩大显示。修改普通颜色前切回内容缩略图。

同样创建**Disc**和**Block**。把Disc放在Ribbon下方，Block放在Disc下方，Line art保持在三个形状上方。保存后继续[细化](/zh/docs/illustration/render/)，添加剪贴阴影。
