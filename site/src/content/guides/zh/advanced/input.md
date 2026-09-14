---
title: "笔、触摸与快捷键"
description: "检查压感，把频繁操作放在容易使用的控制上。"
purpose: "先确认设备输入，再修改画笔。压感正常后，通过偏好设置和快捷键调整反复使用的操作。"
techniques: ["用铅笔测试压感。", "比较压力响应与笔画预测。", "分配快捷键，区分笔与触摸。"]
figure: "1：Preferences分类。2：Input控制。3：Keyboard Shortcuts入口。"
related: ["painting/brushes", "advanced/brush-engine", "workspace"]
image: {"light": "/assets/guides/advanced-input-light.webp", "dark": "/assets/guides/advanced-input-dark.webp", "alt": "1：Preferences分类。2：Input控制。3：Keyboard Shortcuts入口。"}
---

## 检查笔

用内置铅笔画一条由轻到重、再放轻的线。如果粗细不变，在其他绘画应用中测试。两边都失败时检查设备或驱动；只有这里失败时检查编辑器输入与预设。

数位板应映射到正确屏幕并保持比例。数位屏需检查中央和边缘的光标对齐。压感与倾斜需要设备支持。

## 调整响应

在**Preferences**中检查输入设置。**Pressure response**改变传入压力的映射；**Enable stroke prediction**估计下一次笔位置。**Use browser stroke prediction**使用浏览器提供的估计；可用时，**Prediction amount**调整编辑器自身的预测量。提高预测可缩短可见笔迹与笔尖的距离，但也可能越过转弯位置。每次改一项，用同一曲线比较。

触摸支持平移、捏合和旋转。如果手掌落下时产生笔迹，检查设备触摸行为。单个预设的调整见[画笔设置](/zh/docs/advanced/brush-engine/)。

## 设置快捷键

在**Keyboard Shortcuts**中选择命令并添加按键，应用前处理冲突。常用默认键包括**Ctrl+Z**撤销、**空格拖动**平移、**F**适合画布、**Tab**进入Zen。Apple系统在平台映射支持时可使用Command。

需要时通过数位板驱动把笔按钮映射为这些按键。
