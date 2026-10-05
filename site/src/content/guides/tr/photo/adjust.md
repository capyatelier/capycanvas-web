---
title: "Ayarlama ve dışa aktarma"
description: "Fotoğraf düzenleme eğitiminin 3. aşaması: filtre katmanlarında ton ve renk ayarları ve JPEG dışa aktarma."
related: ["filters/how-filters-apply", "filters/tone", "selections/working", "files/export"]
---

Bu aşamada fotoğrafın üstünde ton ve renk için filtre katmanları ve web için bir
JPEG oluşur.

## 1. Eğriler ekleyin

*Retouch* katmanını seçin. Bu durumda **Filtre** menüsünden eklediğiniz
filtreler *Retouch* katmanının hemen üstüne eklenir ve hem *Retouch* katmanını
hem de fotoğrafı değiştirir
([Filtrelerin uygulanması](/tr/docs/filters/how-filters-apply/)).

**Filtre > Ton > Eğriler** komutunu seçin. *Retouch* katmanının üstünde bir
**Eğriler** katmanı görünür ve ayarları **Özellikler** panelinde açılır. **RGB**
eğrisinde gölgelere bir nokta ekleyip aşağı sürükleyin, ardından açık tonlara
bir nokta ekleyip yukarı sürükleyin ([Ton filtreleri](/tr/docs/filters/tone/)).

![Eğriler filtresinde S biçiminde bir RGB eğrisi bulunan Özellikler paneli.](shot:photo/adjust-curves)

## 2. Canlılık ekleyin

**Filtre > Renk > Canlılık** komutunu seçin ve **Özellikler** panelinde
**Canlılık** değerini 25 yapın ([Renk filtreleri](/tr/docs/filters/color/)).
**Canlılık** katmanı **Eğriler** katmanının üstünde görünür.

## 3. Kayayı seçin

1. **M** tuşuna basın veya Araçlar çubuğunda **Kement seçimi** aracını seçin ve kayanın çevresini çizin.
2. **Seç > Seçim kenarlarını yumuşat…** komutunu seçin veya seçim çubuğunda **İyileştir** düğmesini seçip **Kenarları yumuşat…** komutunu seçin ([Seçimlerle çalışma](/tr/docs/selections/working/)).
3. **Feather radius** değerini 20 px yapın ve **Uygula** düğmesini seçin.

## 4. Kayadaki gölgeleri açın

Fotoğrafın tamamındaki gölgeleri açmak siyah arka planı griye çevirir. Örnekte
gölgeler yalnızca kayada açılır.

Seçim çubuğunda **Ayarla** düğmesini seçin ve
**Ton > Gölgeler/Parlak alanlar** komutunu seçin. **Özellikler** panelinde
**Gölgeler** değerini %35 yapın.

![Kayanın çevresindeki seçimin yanında, Ayarla menüsü Ton kategorisinde açık seçim çubuğu.](shot:photo/adjust-bar)

Seçim, yeni **Gölgeler/Parlak alanlar** katmanının maskesi olur. Yalnızca kaya
değişir.

## 5. Çizimi kaydedin

**Dosya > Kaydet** komutunu seçin veya **Ctrl+S** tuşlarına basın. Açılmış bir
fotoğrafın ilk kaydı, **Farklı kaydet…** gibi bir klasör ve ad ister. `.capy`
dosyası özgün fotoğrafı, katmanları, maskeleri ve filtre katmanlarını tutar
([Açma ve kaydetme](/tr/docs/files/open-save/)).

## 6. JPEG dışa aktarın

1. **Dosya > Dışa aktar…** komutunu seçin veya **Ctrl+Shift+E** tuşlarına basın.
2. **Hedef** ayarını **Web / paylaşım** olarak bırakın ve **Biçim** ayarını **JPEG görüntüsü** yapın.
3. **Piksel boyutu** ayarını **Sınırlara sığdır** yapın ve **En büyük genişlik (px)** ile **En büyük yükseklik (px)** değerlerini 2048 olarak bırakın.
4. **Dosya seç…** düğmesini seçin, bir klasör ve ad seçin.

![Web / paylaşım, JPEG görüntüsü, Kalite 90 ve Sınırlara sığdır ayarlarıyla Görüntüyü dışa aktar iletişim kutusu.](shot:photo/export-jpeg)

Dışa aktarma çizimi değiştirmez
([Görüntüleri dışa aktarma](/tr/docs/files/export/)).
