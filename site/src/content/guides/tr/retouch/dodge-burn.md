---
title: "Açıklaştırma ve koyulaştırma, frekans ayrımı"
description: "Açıklaştırma ve koyulaştırma katmanı ekleme ve Frekans ayrımı ile bir katmanı Düşük frekans ve Yüksek frekans katmanlarına ayırma."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## Yeni açıklaştırma ve koyulaştırma katmanı

Açıklaştırma ve koyulaştırma için **Yumuşak ışık** modunda nötr gri bir katman
ekleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Katman > Yeni > Yeni açıklaştırma ve koyulaştırma katmanı** komutunu seçin.
- Katmanlar panelinde bir katmanın menüsünü açın ve **Yeni > Yeni açıklaştırma ve koyulaştırma katmanı** komutunu seçin.

Etkin katmanın ve ona kırpılmış katmanların üstünde, tuval boyutunda
*Açıklaştırma ve koyulaştırma* adlı bir katman görünür ve etkin katman olur.

Kilitli bir gruba veya bir kırpma ya da dönüştürme açıkken bu katmanı
ekleyemezsiniz.

![Teraryum fotoğrafının üstünde Açıklaştırma ve koyulaştırma katmanı bulunan Katmanlar paneli.](shot:retouch/dodge-burn-layer)

## Frekans ayrımı…

Etkin katmanı tek adımda frekans ayrımı için bölebilirsiniz.

**Filtre > Frekans ayrımı…** komutunu seçin. Tuvalin altında varsayılanı 4 px
olan **Yarıçap** değeriyle bir panel açılır. **Yarıçap** değerini değiştirirken
tuval *Düşük frekans* katmanının bulanıklığını önizler.

![Yarıçap değeriyle Frekans ayrımı paneli.](shot:retouch/frequency-separation-panel)

**Uygula**, katmanın bulunduğu yere *Frekans ayrımı* adlı bir grup koyar:

- *Yüksek frekans* ince dokuyu tutar ve **Doğrusal ışık** modundadır. En üstteki katmandır ve etkin katman olur.
- *Düşük frekans* renkleri ve tonları tutar, yarıçapa göre **Gauss bulanıklığı** ile bulanıklaştırılmıştır ve **Normal** modundadır.

Grup, özgün katmanın opaklığını ve kırpmasını alır. Özgün katman grubun hemen
altında gizli olarak kalır.

Katmanın görünür ve **Normal** modunda olması, çizimin de
**Düzenle > Karıştırma > Algısal karıştırma** kullanması gerekir (bkz.
[Renk uzayı, bit derinliği ve karıştırma](/tr/docs/color-management/color-spaces/)).
Panel açıkken çizim değişirse panel kapanır.

![Frekans ayrımı grubu, Düşük frekans üstünde Yüksek frekans ve gizli özgün katmanla Katmanlar paneli.](shot:retouch/frequency-separation-layers)
