---
title: "打开、保存与恢复"
description: "打开作品和照片，同时处理多幅作品，并确保作品安全。"
purpose: "Capy Canvas的作品保存为.capy文件，其中保留了全部图层、蒙版和调整，方便日后继续编辑。你可以同时打开多幅作品，每幅都有自己的标签页；在你保存之前，编辑器还会保留一份恢复副本，以防出现意外。"
techniques: ["打开.capy文件或照片。", "用标签页在打开的作品之间切换。", "保存作品，并恢复未保存的修改。"]
figure: "1：File菜单。2：已打开作品的标签页。3：Open、Import Image as Layer、Save和Save As。"
related: ["output/export", "filters/image-editing", "workspace/management"]
image: {"light": "/assets/guides/tools-files-light.webp", "dark": "/assets/guides/tools-files-dark.webp", "alt": "1：File菜单。2：已打开作品的标签页。3：Open、Import Image as Layer、Save和Save As。"}
---

## 打开作品或照片

选择<strong>File → Open…</strong>可以打开`.capy`文件。照片和其他图像也可以用同样的方式打开，包括JPEG、PNG、TIFF、WebP、HEIC、AVIF和OpenEXR文件。照片会以原始尺寸作为一幅新作品打开，颜色也会保持拍摄时的样子。

如果要把图像加入当前已打开的作品，请改用<strong>File → Import Image as Layer…</strong>，或者直接把图像文件拖到画布上。[编辑照片](/zh/docs/filters/image-editing/)更详细地介绍了这两种方式。

## 同时处理多幅作品

在Paint和Photo中，你打开或新建的每幅作品在窗口顶部都有自己的标签页。点击标签页可以切换到对应的作品，拖动标签页可以调整顺序。名称旁边的圆点表示这幅作品有尚未保存的修改。<strong>File → Drawings…</strong>会列出所有打开的作品，在任何工作区中都能使用。

用标签页上的按钮或**File → Close**可以关闭作品。如果作品有未保存的修改，Capy Canvas会询问你是否要先保存。

## 保存并恢复作品

第一次保存作品时选择<strong>File → Save As…</strong>，之后用**File → Save**更新同一个文件。保存你打开的照片时，Capy Canvas会询问新的`.capy`文件要保存在哪里，原始照片保持不变。

如果浏览器在你保存之前就关闭了，下次打开Capy Canvas时，它会提出帮你恢复作品。这只是一道安全网，所以请定期保存`.capy`文件，并为重要的作品保留副本。

要制作用于分享或打印的图像，请参阅[导出图像](/zh/docs/output/export/)。
