---
title: "图层组与混合"
description: "整理相关图层，控制颜色的合成方式。"
purpose: "图层组把相关内容放在一起；混合模式决定颜色如何组合，图层不透明度控制整体强度。"
techniques: ["创建图层组并放入相关图层。", "比较阴影层的混合模式。", "保持蒙版和剪贴层的正确顺序。"]
figure: "1：图层堆栈。2：混合模式。3：新建组。"
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1：图层堆栈。2：混合模式。3：新建组。"}
---

## 整理相关内容

在Layers中使用**New group**，把相关图层移入。人物的底色、阴影和Line art可以放在一起，背景单独保留。折叠组可缩短列表。

移动后检查层级。父组隐藏时，内部图层即使开启也不可见。剪贴层应与底色保持同一堆栈关系，紧邻底色上方。

## 比较混合模式

选择阴影层，在行上方切换模式。**Multiply**用于压暗，**Screen**用于提亮，**Normal**进行普通覆盖合成。其他模式同时依赖当前颜色与下方内容。

切换可见性比较结果，整体过强时降低图层不透明度。画笔不透明度只影响新笔画。

## 保持独立编辑

不必为了缩短列表而合并图层，使用组即可。为其他应用合成内容前，保留可编辑的`.capy`副本。

需要保留可调参数的颜色修正时，使用[滤镜与属性](/zh/docs/filters/overview/)，避免直接画入底色。
