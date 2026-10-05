---
title: "细化"
description: "插画教程第 4 阶段：在剪贴到各底色的图层上绘制明暗和纹理，并导出 PNG。"
related: ["layers/settings", "drawing/brush-tools", "files/open-save", "files/export"]
---

这一阶段在剪贴到各形状底色的图层上绘制每个形状的明暗，并将习作导出为 PNG。

## 1. 添加剪贴图层

选择 *Ribbon*，然后选择**图层 > 新建 > 新建剪贴图层**，或从该行的菜单中选择**新建 > 新建剪贴图层**（[图层设置](/zh/docs/layers/settings/)）。将新图层重命名为 *Ribbon shading*。

![图层菜单，新建已展开，其中有新建剪贴图层。](shot:illustration/render-new-menu)

*Ribbon shading* 出现在 *Ribbon* 正上方，缩略图左侧的竖线标出剪贴关系。剪贴范围跟随 *Ribbon* 的蒙版，而不是填满整个图层的蓝绿色。

## 2. 为带子绘制明暗

选择“工具”工具栏中的**绘画画笔**，并在工具组中选择**水彩平涂**（[画笔工具](/zh/docs/drawing/brush-tools/)）。在**工具设置**面板中将**不透明度**设为 65%，然后用深蓝色画出带子弯折处的阴影。再用**画笔**画笔添加灰绿色点缀。

## 3. 添加纹理图层

选中 *Ribbon shading*，再次选择**图层 > 新建 > 新建剪贴图层**，将该图层重命名为 *Ribbon texture*。它位于 *Ribbon shading* 上方，属于同一剪贴组。选择**铅笔**和**铅笔**画笔，画出米白色的排线笔触和高光。

## 4. 为圆盘和方块绘制明暗

选择 *Disc*，添加名为 *Disc shading* 的剪贴图层，用**喷枪**以赤陶色为圆盘下半部分绘制明暗。在左上方添加一处米白色高光。

用同样的方法在 *Block* 上添加 *Block shading*：用**画笔**画笔沿右边缘和下边缘画深蓝色，然后用**铅笔**画笔画米白色排线。

![图层面板，Ribbon texture 和 Ribbon shading 剪贴到 Ribbon，Disc shading 和 Block shading 剪贴到各自的基底图层。](shot:illustration/render-layers)

图层列表与[简介](/zh/docs/illustration/)中完成后的图层一致。

## 5. 保存和导出

选择**文件 > 保存**，或按 **Ctrl+S**，将画作保存为 `.capy` 文件（[打开和保存](/zh/docs/files/open-save/)）。要导出 PNG：

1. 选择**文件 > 导出…**，或按 **Ctrl+Shift+E**。
2. 保持**用途**为**网页 / 分享**，并将**格式**设为 **PNG 图像**。
3. 选择**选择文件…**，然后选择文件夹和名称。

第一次导出之后，**文件 > 再次导出**会以相同设置写入同一文件，不显示对话框（[导出图像](/zh/docs/files/export/)）。
