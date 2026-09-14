---
title: "移动与变换"
description: "移动、缩放或旋转图层及选中像素。"
purpose: "Operation移动已有内容，Scale / rotate提供缩放和旋转手柄。这些操作会改变保存的作品，与画布视图操作不同。"
techniques: ["选择图层及可选的像素选区。", "用手柄移动、缩放和旋转。", "应用或取消预览。"]
figure: "1：Tool中的位置控制。2：画布中的变换预览。3：编辑图层。"
related: ["tools/selections", "workspace", "illustration/draft"]
image: {"light": "/assets/guides/tools-transforms-light.webp", "dark": "/assets/guides/tools-transforms-dark.webp", "alt": "1：Tool中的位置控制。2：画布中的变换预览。3：编辑图层。"}
---

## 选择修改对象

点击目标图层的内容缩略图。只改一部分时，先建立[像素选区](/zh/docs/tools/selections/)。**Operation**移动编辑目标，**Scale / rotate**提供变换手柄。

拖动前检查缩略图。选中蒙版时改变的是可见边界；链接蒙版可随图层移动，仅在要单独移动蒙版时解除链接。

## 调整预览

拖动内容进行移动，拖动周围手柄缩放，使用旋转手柄改变角度。需要保持比例时开启**Keep proportions**。Tool显示操作控制，调整期间预览保持待确认状态。

尽量在一次预览内完成相关变化。反复应用栅格变换可能使边缘变软；需要比较多个方案时，先复制原图层。

## 应用或取消

**Apply transform**保留修改，**Cancel transform**返回原状。去其他位置绘画前解除选区。

如果只是想换个绘画角度，使用Navigator或[视图控制](/zh/docs/workspace/)。这里介绍的是移动、缩放与旋转，不包含透视变形流程。
