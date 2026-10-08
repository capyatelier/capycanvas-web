---
title: "底色"
description: "插畫教學第 3 階段：為每個形狀建立一個繪畫圖層，用遮罩限定在形狀內，並填色底色。"
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

這一階段為每個形狀建立一個繪畫圖層，填色底色並用遮罩限定在形狀內。底色放在繪畫圖層上，是因為填色圖層不能作為第 4 階段中明暗圖層的剪貼基底。

## 1. 新增 Block 圖層

隱藏 *Sketch*，選擇其所在行，然後用**新增圖層**新增一個名為 *Block* 的圖層。新圖層出現在 *Sketch* 正上方、*Line art* 下方。

## 2. 用遮罩將圖層限定在方塊內

按 **M**，或選擇「工具」工具列**選取**組中的**套索選取範圍**，然後沿 *Line art* 中方塊的輪廓描一圈。再選擇選取範圍操作欄中的**遮罩**（[使用選取範圍](/zh-Hant/docs/selections/working/)）。

![選取範圍操作欄中的遮罩，位於方塊周圍的選取範圍旁邊。](shot:illustration/mask-selection-bar)

選取範圍成為 *Block* 的遮罩（[遮罩](/zh-Hant/docs/layers/masks/)）。該行上出現遮罩縮圖，畫布底部的欄顯示「正在編輯Block的遮罩」。

## 3. 填色圖層

編輯遮罩時**填色選取範圍**無法使用。要填色圖層：

1. 選擇 *Block* 行上的圖層縮圖，或選擇畫布底部欄中的**編輯內容**。
2. 在**色彩**面板中選擇赤陶色。
3. 選擇**選取 > 選取所有像素**，或按 **Ctrl+A**。
4. 選擇**編輯 > 填色選取範圍**，或按 **Shift+Backspace**。
5. 選擇**選取 > 取消像素選取**，或按 **Ctrl+D**。

色彩覆蓋整個圖層，遮罩只在方塊內顯示色彩。

## 4. 新增 Disc 和 Ribbon

用同樣的方法建立赭黃色的 *Disc*，再建立藍綠色的 *Ribbon*。

![圖層面板，Line art 下方是 Ribbon、Disc 和 Block，每個都有遮罩縮圖。](shot:illustration/mask-layers)

圖層列表依次為 *Line art*、*Ribbon*、*Disc*、*Block*、*Sketch*、*Color rough* 和**紙張**。

## 5. 調整邊緣

選擇 *Ribbon* 行上的遮罩縮圖。畫布底部的欄顯示「正在編輯Ribbon的遮罩」。

![畫布底部顯示「正在編輯Ribbon的遮罩」的欄，包含反轉、禁用、應用遮罩和編輯內容。](shot:illustration/mask-bar)

用 **G 筆**筆刷沿邊緣塗抹可顯示更多藍綠色，或用**橡皮擦**修整邊緣。在遮罩上，筆刷會忽略繪畫色彩。

下一階段：[細化](/zh-Hant/docs/illustration/render/)。
