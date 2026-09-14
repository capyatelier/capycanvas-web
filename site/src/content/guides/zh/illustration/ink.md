---
title: "线稿"
description: "在淡化草稿上方的新图层上勾线。"
purpose: "把最终轮廓与草稿分开，便于擦除或改色而不改变草稿，再将最终颜色放在线稿下方。"
techniques: ["淡化Sketch并选择Line art。", "使用钢笔预设与视图旋转。", "闭合用于自动选择的轮廓。"]
figure: "1：淡化Sketch上方的Line art。2：Navigator视图控制。3：Tool Set中的钢笔预设。"
related: ["layers/basics", "advanced/input", "workspace"]
image: {"light": "/assets/guides/illustration-ink-light.webp", "dark": "/assets/guides/illustration-ink-dark.webp", "alt": "1：淡化Sketch上方的Line art。2：Navigator视图控制。3：Tool Set中的钢笔预设。"}
---

## 1. 分开线稿

选择**Sketch**并降低图层不透明度，使其清晰但不干扰新线条。隐藏**Color rough**，在Sketch上方添加**Line art**，绘画前选择内容缩略图。

选用**Pen → G-Pen**或其他勾线预设，以平常压感测试粗细。降低草稿不透明度不会自动切换绘画目标。

## 2. 描画与修正

画出形状轮廓、自由环线和短排线。曲线角度不方便时，用Navigator或触摸旋转视图；这不会旋转保存的作品。

用Eraser或撤销修正Line art。笔迹显示落后于笔尖时，在[输入设置](/zh/docs/advanced/input/)中比较预测选项，并重复相同曲线。预测过强可能越过预期的转弯位置。

## 3. 检查轮廓

隐藏Sketch，单独检查线稿。需要自动选择的区域应闭合意外缺口；准备用套索定义底色时，内部细节可以保持开放。

后续阶段始终把Line art放在颜色上方。保存后继续[蒙版](/zh/docs/illustration/mask/)。截图保留淡化草稿，以展示图层分离。
