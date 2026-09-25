---
title: "选区工具"
description: "选中作品的一部分，让修改只作用于该区域。"
purpose: "选区标出你想处理的那部分画面。选区激活时，绘画、填充和变换都只会影响选中的区域，作品的其余部分不会受到影响。Capy Canvas提供了多种选区工具，可以选择简单的形状、徒手画出的轮廓，以及颜色相近的区域。"
techniques: ["选择合适的选区工具。", "增加或减去选区。", "填充选区，完成后取消选择。"]
figure: "1：Tool Set中的选区工具。2：选区模式、羽化和形状选项。3：围绕圆形的椭圆选区。"
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1：Tool Set中的选区工具。2：选区模式、羽化和形状选项。3：围绕圆形的椭圆选区。"}
---

## 选择选区工具

在Paint中，从工具栏选择**Lasso selection**或**Auto select**，Tool Set就会列出所有选区工具。在Sketch中，它们位于**Select**按钮下；Photo则把大部分选区工具放在自己的工具栏中。

**Rectangle select**和**Ellipse select**用于画出简单的形状；按住**Shift**可以画出正方形或正圆，按住**Alt**可以从中心开始画。**Lasso selection**会跟随笔的轨迹自由圈选，**Polygonal lasso**则会在你点击的各点之间连出直线；再次点击第一个点或按**Enter**即可闭合选区。**Auto select**只需点击一下就能选中颜色相近的区域，**Select by color**则会一次选中所有该颜色的区域。另外两个工具**Paint selection**和**Tonal range**有各自的页面：[快速蒙版与选区图层](/zh/docs/selections/quick-mask/)和[按亮度选择](/zh/docs/selections/tonal-range/)。

## 组合与柔化选区

**Tool**面板顶部的四个按钮决定再次创建选区时会发生什么：替换当前选区、添加到当前选区、从当前选区中减去，或者只保留两者重叠的区域。你也可以按住**Shift**添加、按住**Alt**减去，而不必切换按钮。

**Feather radius**会柔化选区的边缘，让颜色和调整逐渐淡出，而不是在一条硬线上戛然而止。使用Auto select时，**Tolerance**控制颜色相差多少仍会被选中，**Close gaps**则可以防止选区从线稿的小缺口中漏出去。

## 使用选区

要选中图层上画过的所有内容，请按住**Ctrl**并点击该图层的缩略图。选区激活时可以放心绘画，笔画只会落在选区之内。选择**Edit → Fill selection**可以用当前颜色填充选区，你也可以把选区转换为[图层蒙版](/zh/docs/layers/masks/)。**Select**菜单还可以反选、把选区扩展或收缩几个像素，或者用**Reselect**恢复上一次的选区。

完成后，选择**Select → Deselect pixels**，让接下来的笔画可以画到任何地方。
