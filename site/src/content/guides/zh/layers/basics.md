---
title: "图层"
description: "让作品的不同部分保持独立可编辑。"
purpose: "图层保存文档的一部分。绘画前选择其内容缩略图，把无关部分分开，就能局部修正而不影响整张画。"
techniques: ["创建并命名绘画图层。", "区分绘画目标与行选择。", "调整可见性、顺序与不透明度。"]
figure: "1：图层行及内容缩略图。2：可见性控制。3：新建图层、组、蒙版与图像导入。"
related: ["layers/masks", "layers/groups", "tools/files"]
image: {"light": "/assets/guides/layers-basics-light.webp", "dark": "/assets/guides/layers-basics-dark.webp", "alt": "1：图层行及内容缩略图。2：可见性控制。3：新建图层、组、蒙版与图像导入。"}
---

## 建立图层顺序

点击**Layers**底部的**New layer**，双击名称重命名。教程将Sketch、Line art与各个底色分开；把Line art放在颜色上方，避免盖住轮廓。

点击内容缩略图设置绘画目标。行选择用于批量操作，不一定改变绘画位置；蒙版缩略图则选择同一图层上的另一个编辑目标。

## 检查与排序

眼睛按钮可隐藏图层而不删除内容。拖动行改变顺序；触摸和笔需长按行，或直接拖动手柄，鼠标可直接拖动行。

图层菜单提供复制和删除。进行大幅[变换](/zh/docs/tools/transforms/)或尝试另一种处理前，先复制重要内容。

## 调整整个图层

行上方的不透明度控制影响当前编辑图层的所有内容。混合模式决定与下方内容如何合成，开始时使用**Normal**。

**Lock editing**防止编辑；**Alpha lock**允许重画已有像素而不延伸到透明区。需要独立的可编辑边界时，使用[蒙版与剪贴](/zh/docs/layers/masks/)。
