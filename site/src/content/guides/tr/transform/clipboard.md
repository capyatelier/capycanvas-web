---
title: "Kopyalama ve yapıştırma"
description: "Pikselleri kopyalama ve katman, maske veya yeni çizim olarak yapıştırma."
related: ["selections/working", "transform/move-transform", "layers/types", "files/open-save"]
---

Pano komutları **Düzenle** menüsünde ve komut aramasındadır.

![Düzenle menüsünde Özel Yapıştır.](shot:transform/clipboard-edit-menu)

## Kopyalama ve kesme

**Kopyala** (**Ctrl+C**), seçili katmanın seçim içindeki piksellerini opaklığı, maskesi veya ekli filtreleri olmadan kopyalar. Seçim yoksa katmanı tuval sınırları içinde kopyalar.

**Kes** (**Ctrl+X**) aynı pikselleri kopyalar ve siler. Kilitli veya **Alfa kilidi** açık katmanda kullanılamaz.

**Birleştirileni kopyala** (**Ctrl+Shift+C**), Kâğıt ışığı dahil seçim içindeki görünür sonucu kopyalar. Grupların, filtre katmanlarının ve seçim katmanlarının kendi pikselleri yoktur.

## Yapıştır

**Yapıştır** (**Ctrl+V**) panodaki çizimi yeni katman olarak ekler ve yerleştirme gerektiğinde dönüştürme tutamaçlarını açar. Başka uygulamadan gelen görüntü, pikselleştirene kadar kaynağını koruyan bir [nesne katmanı](/tr/docs/layers/types/) olur.

{appName} içinde alınan kopya, kopyalandığı konum görünürse oraya döner. Aksi halde görünümün ortasına yerleşir.

## Özel Yapıştır

Hedef seçmek için **Düzenle > Özel Yapıştır** yolunu açın.

- **Yerine yapıştır**, dönüştürme tutamaçlarını açmadan kopyalanan konuma katman ekler.
- **İçine yapıştır**, etkin seçimi maske olarak kullanan bir katman ekler, ardından seçimi temizler.
- **Maskeyi yapıştır**, seçili katmanın maskesini panodaki görüntüyle değiştirir veya ekler.
- **Yeni Görüntü Olarak Yapıştır**, panodan yeni çizim oluşturur.

Seçim, düzenlenebilir katman veya uyumlu pano görüntüsü gerektiren komutlar soluk görünür.

![Katmanlar, maskeler ve yeni çizimler için Özel Yapıştır seçenekleri.](shot:transform/paste-special)

## Uygulamalar arasında

Diğer uygulamalar {appName} kopyasını 8 bit sRGB PNG olarak alır. Dahili kopya panoda kaldığı sürece başka bir {appName} çizimi özgün hassasiyetini alır.

Web düzenleyicisinde yapıştırılan görüntü en fazla 512 MiB olabilir. Tarayıcı görüntü yapıştıramıyorsa **Dosya > Görüntüyü katman olarak içe aktar…** kullanın.
