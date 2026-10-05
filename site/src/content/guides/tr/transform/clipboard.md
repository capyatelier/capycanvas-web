---
title: "Kopyalama ve yapıştırma"
description: "Capy Canvas içinde ve uygulamalar arasında pikselleri kopyalama ve yeni katman olarak yapıştırma."
related: ["selections/working", "transform/move-transform", "layers/working", "files/open-save"]
---

Pikselleri bir katmandan veya görünür görüntüden kopyalayabilir ve yeni bir
katman olarak yapıştırabilirsiniz. Komutlar **Düzenle** menüsünde ve komut
aramada bulunur.

![Düzenle menüsündeki pano komutları.](shot:transform/clipboard-edit-menu)

| Komut | Tuş |
| --- | --- |
| **Kes** | **Ctrl+X** |
| **Kopyala** | **Ctrl+C** |
| **Birleştirileni kopyala** | **Ctrl+Shift+C** |
| **Yapıştır** | **Ctrl+V** |
| **Yerine yapıştır** | **Ctrl+Shift+V** |
| **İçine yapıştır** | |

[Seçim çubuğundaki](/tr/docs/selections/working/) **Kopyala** düğmesi
**Kopyala**, **Birleştirileni kopyala** ve **Kes** komutlarını içerir.

## Kopyala

Etkin katmanın seçim içindeki kendi piksellerini, katmanın opaklığı, maskesi ve
iliştirilmiş filtreleri olmadan kopyalar. Seçim yoksa katmanın tuval içindeki
tamamını kopyalar.

## Kes

**Kopyala** gibi kopyalar, ardından seçili pikselleri katmandan siler.
**Alfa kilidi** açık bir katmandan kesemezsiniz.

## Birleştirileni kopyala

Seçimin içindeki görünür görüntüyü, dışa aktarmada göründüğü gibi kopyalar.

## Kopyalanamayanlar

Grupların, filtre katmanlarının ve seçim katmanlarının kendine ait pikselleri
yoktur. Bir gruptan kopyalamak için içindeki bir katmanı seçin. Hızlı maskede
çizim kopyalayamazsınız. Bir maskeyi düzenlerken **Kopyala** ve **Kes**
kullanılamaz.

Büyük bir kopyalama, **İptal** düğmesiyle bir ilerleme notu gösterir.

## Yapıştır

Panodakini yeni etkin katman olarak ekler.

- Capy Canvas'tan yapılan bir kopya, kopyalandığı yer görünümdeyse oraya, değilse görünümün ortasına yerleşir.
- Başka bir uygulamadan gelen görüntü dönüşüm kutusunda açılır. **Uygula** görüntüyü yerleştirir, **İptal** yapıştırmayı atar (bkz. [Taşıma ve dönüştürme](/tr/docs/transform/move-transform/)).

## Yerine yapıştır

Panodakini, dönüşüm kutusu olmadan, kopyalandığı yere yeni bir katman olarak
ekler. Başka bir uygulamadan gelen görüntü tam boyutta görünümün ortasına
yerleşir.

## İçine yapıştır

**Yerine yapıştır** gibi çalışır ve yeni katmana yalnızca seçimi gösteren bir
[maske](/tr/docs/layers/masks/) verir. Ardından seçim kaldırılır.
**İçine yapıştır** için bir seçim gerekir.

## Uygulamalar arasında yapıştırma

Diğer uygulamalar Capy Canvas'tan yapılan bir kopyayı 8 bit sRGB PNG görüntüsü
olarak alır. Kopya panoda kaldığı sürece Capy Canvas'a geri yapıştırma, kopyayı
tam bit derinliğiyle kullanır.

Farklı renk ayarlarına sahip bir çizime yapıştırılan kopya, kendi renk
profilinden dönüştürülerek bir [fotoğraf katmanı](/tr/docs/layers/types/) olur.

Bir metin alanına yazarken pano tuşları metni keser, kopyalar ve yapıştırır.

Web düzenleyicisinde yapıştırılan bir görüntü en fazla 512 MiB olabilir.
Görüntü yapıştıramayan bir tarayıcıda bunun yerine
**Dosya > Görüntüyü katman olarak içe aktar…** komutunu seçin.
