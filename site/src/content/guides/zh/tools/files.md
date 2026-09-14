---
title: "保存与导出"
description: "保留可编辑的.capy，并导出合成PNG。"
purpose: ".capy保留文档结构以便继续编辑，PNG记录可见图像供分享。先保存项目，后续修改才能继续使用原有图层、蒙版和效果。"
techniques: ["创建、保存并重新打开项目。", "将可见图像导出为PNG。", "分别保存工作区设置与作品。"]
figure: "1：File菜单。2：Save与Save As。3：Export PNG。"
related: ["filters/image-editing", "layers/basics", "illustration/render"]
image: {"light": "/assets/guides/tools-files-light.webp", "dark": "/assets/guides/tools-files-dark.webp", "alt": "1：File菜单。2：Save与Save As。3：Export PNG。"}
---

## 保存可编辑文档

新项目或另一份工作副本使用<strong>File → Save As…</strong>。浏览器能保留文件句柄时，**Save**更新当前文件；不支持直接访问时使用下载流程，请确认文件已经保存。

<strong>Open…</strong>打开`.capy`。普通图像要加入当前作品时，使用Layers的**Import image as layer**。

## 导出可见结果

<strong>File → Export PNG…</strong>生成合成图像，但不合并工作图层。隐藏不需要的Sketch和Color rough；需要透明背景时检查Paper可见性。

打开PNG检查像素尺寸、边缘和背景。视图缩放、旋转不改变导出的作品。保留`.capy`以便修改。

## 更换设备时保留文件

工作区设置单独保存在浏览器中，不会保存作品、同步文件或替代备份。转移`.capy`文件本身，删除原件前在目标设备确认可以打开。

New、Open或Close提示未保存修改时，按需保存、丢弃或取消。取消会回到当前作品。
