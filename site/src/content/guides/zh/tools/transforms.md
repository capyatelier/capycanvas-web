---
title: "移动与变换"
description: "移动、缩放或旋转一个图层或作品的一部分。"
purpose: "有时画面的某一部分几乎画对了，只是稍微大了一点、低了一点，或者角度不对。Operation工具可以移动、缩放和旋转它，不必重画，而且你可以先检查结果，再决定是否应用。"
techniques: ["选择要移动的内容。", "用控制柄移动、缩放和旋转。", "应用或取消修改。"]
figure: "1：Tool中的变换控件。2：画布上的变换预览。3：正在编辑的图层。"
related: ["tools/selections", "workspace", "illustration/draft"]
image: {"light": "/assets/guides/tools-transforms-light.webp", "dark": "/assets/guides/tools-transforms-dark.webp", "alt": "1：Tool中的变换控件。2：画布上的变换预览。3：正在编辑的图层。"}
---

## 选择要移动的内容

在Layers面板中选择要修改的图层。如果只需要移动图层的一部分，请先用[选区](/zh/docs/tools/selections/)圈出那部分。没有选区时，整个图层都会移动。

在工具栏中选择**Operation**工具。它的**Move**模式会在你拖动时移动内容，**Scale / rotate**则会添加用于改变大小和角度的控制柄。在Sketch中，标题栏里的**Scale / rotate**按钮也能启动同样的操作。

## 移动、缩放和旋转

在框内拖动可以移动内容。拖动四角和四边的控制柄可以放大或缩小，拖动框外的控制柄可以旋转。缩放时按住**Shift**可以保持画面的比例，旋转时按住**Shift**则会以15°为一档整齐地转动。如果需要精确的数值，可以在Tool面板的位置、大小和角度字段中输入。

只要控制柄还显示着，一切都还没有定下来，所以不必着急。最好一次完成所有需要的修改，因为反复缩放同一片颜色会让边缘逐渐变软。如果拿不准，可以先复制图层，方便比较。

## 应用或取消

选择**Apply transform**保留修改，或选择**Cancel transform**让一切恢复原样。如果你只选中了图层的一部分，之后请选择**Select → Deselect pixels**，这样接下来的笔画就不会被限制在那个区域内。

向作品中[导入图像](/zh/docs/filters/image-editing/)时，也会出现同样的控制柄，方便你在选择**Apply**之前调整它的位置和大小。如果想转动视图而不是作品，请使用[工作区与画布](/zh/docs/workspace/)中介绍的Navigator旋转按钮。
