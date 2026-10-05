---
title: "Karıştırma modları"
description: "Bir katmanın karıştırma modunu ve opaklığını ayarlama ve karıştırma menüsündeki modlar."
related: ["layers/settings", "layers/panel", "color-management/color-spaces", "color-management/hdr"]
---

Bir katmanın altındaki katmanlarla nasıl birleşeceğini ayarlayabilirsiniz.

![Katmanlar panelinin üstünde açık karıştırma menüsü, Normal işaretli.](shot:layers/blend-menu)

## Karıştırma modu seçme

Aşağıdakilerden birini yapın:

- **Katman > Karıştırma modu** menüsünden bir mod seçin.
- Katmanlar paneli başlığının sol üstündeki **Katman karıştırma modu** düğmesini seçin, ardından bir mod seçin.
- **Özellikler** panelindeki **Karıştırma modu** listesinden bir mod seçin.
- Modun adını [komut aramaya](/tr/docs/start/command-search/) yazın.

Menüde geçerli modun yanında onay işareti bulunur ve modun adı başlıktaki
düğmede görünür. Mod Normal değilse satırın alt başlığı modu gösterir. Yeni
katmanlar Normal modunu kullanır.

Bir seçim katmanının veya kilitli bir katmanın karıştırma modunu
değiştiremezsiniz. [Alttakiyle birleştir](/tr/docs/layers/merging/) için iki
katmanın da Normal modunda olması gerekir. Karıştırma modları renkleri,
**Düzenle > Karıştırma** ile ayarlanan çizimin karıştırma uzayında karıştırır
(bkz. [Renk uzayı, bit derinliği ve karıştırma](/tr/docs/color-management/color-spaces/)).

## Karıştırma menüsündeki modlar

Karıştırma menüsü modları şu bölümlerde listeler:

- **Geçiş** (yalnızca gruplar, bkz. [Geçiş](/tr/docs/layers/settings/)), **Normal**
- **Koyulaştır**, **Çarp**, **Renk yakma**, **Doğrusal yakma**
- **Açıklaştır**, **Ekran**, **Renk açma**, **Ekle**
- **Kaplama**, **Yumuşak ışık**, **Sert ışık**, **Canlı ışık**, **Doğrusal ışık**, **Noktasal ışık**, **Sert karışım**
- **Fark**, **Dışlama**, **Çıkar**, **Böl**
- **Ton**, **Doygunluk**, **Renk**, **Parlaklık**

## HDR çizimlerde modlar

Bir [HDR çizimde](/tr/docs/color-management/hdr/) karıştırma menüsünde
**Kaplama**, **Yumuşak ışık**, **Sert ışık**, **Renk yakma**, **Renk açma**,
**Canlı ışık**, **Sert karışım** ve **Dışlama** bulunmaz. Bu modlar yalnızca
siyah ile beyaz arasındaki renkler için tanımlıdır. Bu modlardan birini zaten
kullanan bir katman modunu korur ve menü o katman için bu modu listelemeye devam
eder.

## Opaklık

Aşağıdakilerden birini yapın:

- Katmanlar paneli başlığındaki **Katman opaklığı** kaydırıcısını sürükleyin veya 0 ile 100 arasında bir değer yazın.
- **Özellikler** panelinde **Opaklık** ayarını değiştirin.
- Komut aramaya “Katman opaklığı” ve bir değer yazın.

Opaklık %100'ün altındaysa satırın alt başlığı opaklığı gösterir. Bir seçim
katmanının veya kilitli bir katmanın opaklığını ve Hızlı maske açıkken herhangi
bir katmanın opaklığını değiştiremezsiniz.
