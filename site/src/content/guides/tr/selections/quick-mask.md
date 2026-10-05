---
title: "Hızlı maske"
description: "Hızlı maskede bir seçimi boyanmış bir maske olarak düzenleme."
related: ["selections/working", "selections/selection-layers", "selections/tonal-range", "layers/masks"]
---

Hızlı maskede bir seçimi boyanmış bir maske olarak düzenleyebilirsiniz.

## Hızlı maskeye girme

Aşağıdakilerden birini yapın:

- **Seç > Hızlı maske** komutunu seçin.
- **Q** tuşuna basın.
- [Seçim çubuğunda](/tr/docs/selections/working/) **Hızlı maske** düğmesini seçin.

Geçerli seçim maske olur. Seçim yoksa maske boş başlar. **Ton aralığı** etkin
olduğu durum dışında araç geçerli fırçaya geçer.

Bir dönüştürme açıkken Hızlı maskeye giremezsiniz.

## Hızlı maskenin gösterdikleri

Varsayılan olarak %50 kırmızı olan bir kaplama tuvalde maskeyi işaretler.
**Seçimi boya** modunda kaplama seçili alanı, **Gri tonlamalı maske** modunda
seçimin dışındaki alanı kaplar.

Katmanlar panelinin en üstünde **Hızlı maske** adlı seçili bir satır görünür.
Bu satırın göz düğmesi, komut aramadaki **Maske kaplamasını göster** gibi
kaplamayı gösterir veya gizler. Renk paneli çizim renkleri yerine maske
renklerini gösterir.

![Hızlı maskede teraryum fotoğrafı, kaplama açık tonların üstünde.](shot:selections/quick-mask-overlay)

## Maskeyi boyama

Maskeyi değiştirmek için kalem, kurşun kalem, pistole veya silgiyle boyayın.
Diğer fırçalar Hızlı maskede boyamaz. **Doldur**, **Gradyan** ve **Seçimi boya**
da maskeyi değiştirir.

- **Seçimi boya** modunda her renk seçer. Silgi ve saydam renk seçimi kaldırır.
- **Gri tonlamalı maske** modunda rengin gri değeri maskeyi belirler: beyaz seçer, siyah seçimi kaldırır, griler kısmen seçer.

Maskenin, Hızlı maske başladığında çizim renklerinden kopyalanan kendi ön plan
ve arka plan renkleri vardır. Siyah ön plan ve beyaz arka plan için **D**
(**Siyah / beyaza sıfırla**) tuşuna basın. Maske renklerinin yerini değiştirmek
için komut aramadan **Maske renklerini değiştir** komutunu çalıştırın.

**Seçili pikselleri temizle** ve **Dönüştür** gibi çizimi değiştiren komutlar
Hızlı maskede kullanılamaz.

## Hızlı maske çubuğu

Tuvalin altındaki [tuval çubuğunun](/tr/docs/selections/working/) başlığı
“Hızlı maske” olur:

- **Tersine çevir**: **Seçimi tersine çevir**.
- **Doldur** ve **Temizle**: **Maskeyi doldur** maskenin tamamını doldurur, **Seçim kapsamını temizle** maskeyi boşaltır.
- **İyileştir**: **Genişlet…**, **Daralt…**, **Kenarları yumuşat…**, **Kenarlık…** ve **Düzleştir…**. **Seçim anahattını dönüştür** burada kullanılamaz.
- **Kaydet**: **Seçim katmanı olarak kaydet** (bkz. [Seçim katmanları](/tr/docs/selections/selection-layers/)).
- **Çık**: **Çizime dön**.

Tuval çubuğu gizliyse Hızlı maske çubuğu görünmez.

![Tuvalin altındaki Hızlı maske çubuğu.](shot:selections/quick-mask-bar)

## Hızlı maske menüsü

Hızlı maske açıkken **Katman** menüsü **Hızlı maske** menüsüne dönüşür. Aynı
menü için **Hızlı maske** satırına sağ tıklayın veya satırı basılı tutun.

- **Çizime dön**
- **Seçim katmanı olarak kaydet**
- **Değiştir**: **Seçimi tersine çevir**, **Tüm pikselleri seç**, **Seçim kapsamını temizle**, **Maskeyi doldur**, **Genişlet…**, **Daralt…**, **Kenarları yumuşat…**, **Kenarlık…** ve **Düzleştir…**

## Kaplama ayarları

Hızlı maske açıkken Özellikler paneli maskenin ayarlarını gösterir.

![Mod, Kaplama rengi ve Kaplama opaklığı ayarlarıyla Hızlı maske için Özellikler paneli.](shot:selections/quick-mask-properties)

### Mod

**Seçimi boya** (varsayılan) veya **Gri tonlamalı maske**. Mod, Hızlı maske ve
her seçim katmanı için, tüm çizimlerde tek bir ayardır. Komut aramadaki
**Gri tonlamalı maske** komutu da modu değiştirir.

### Kaplama rengi

Kaplamanın rengini belirler. Varsayılan kırmızıdır.

### Kaplama opaklığı

%0 ile %100 arası. Varsayılan %50'dir.

## Hızlı maskeden çıkma

Aşağıdakilerden birini yapın:

- **Seç > Hızlı maske** komutunu seçin veya **Q** tuşuna basın.
- **Katman > Çizime dön** komutunu seçin.
- Hızlı maske çubuğunda **Çık** düğmesini seçin.
- **Escape** tuşuna basın.
- **Hızlı maske** satırında küçük resmin yanındaki yükleme düğmesini seçin.

Maske geçerli seçim olur. **Piksel seçimini kaldır** (**Ctrl+D**) da Hızlı
maskeden çıkar ve seçimi kaldırır.
