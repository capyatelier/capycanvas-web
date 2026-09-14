---
title: "蒙版与剪贴"
description: "保留原有颜色，用独立边界控制可见范围。"
purpose: "蒙版决定图层哪里可见，剪贴把另一层限制在底层形状内，锁定透明像素则限制当前图层上的新笔画。按修改目的选择。"
techniques: ["从选区建立蒙版。", "单独编辑或禁用蒙版。", "把阴影剪贴在底色上方。"]
figure: "1：Hair的蒙版缩略图。2：剪贴在Hair上方的阴影。3：剪贴与锁定透明像素。"
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1：Hair的蒙版缩略图。2：剪贴在Hair上方的阴影。3：剪贴与锁定透明像素。"}
---

## 从选区建立蒙版

选择图层并圈定希望显示的区域。在其菜单中选择**Mask: reveal selection**或**Mask: hide selection**；已有蒙版时，名称变为**Replace mask**。之后的像素选区不会改变已保存的蒙版边界。

完成后解除选区。如果以后需要扩大可见范围，隐藏区域后面也要有颜色：蒙版只能显示已存在的内容。

## 选对缩略图

点击蒙版缩略图，画黑色隐藏、画白色显示；要编辑普通颜色，切回内容缩略图。蒙版菜单可禁用、反相、单独显示或移除蒙版。暂时禁用可以比较原始颜色而不丢失边界。

链接的蒙版随图层移动。单独变换边界前先检查链接状态。

## 添加剪贴阴影

在底色正上方新建阴影层，开启**Clip to layer below**。阴影独立保存，但显示范围跟随底色。连续的剪贴层应紧邻底色上方。

**Alpha lock**适合在单层上给已有像素换色，例如Line art；它不会建立蒙版或独立阴影层。[细化阶段](/zh/docs/illustration/render/)展示了区别。
