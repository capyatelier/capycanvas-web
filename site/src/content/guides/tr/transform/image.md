---
title: "Görüntü boyutu ve döndürme"
description: "Tüm görüntünün boyutunu ve yönünü değiştiren Görüntü menüsü komutları."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Görüntünün tamamını **Görüntü** menüsünden yeniden boyutlandırabilir,
döndürebilir ve çevirebilirsiniz. Görüntü ekranda yerinde kalır.

Bir kırpma veya dönüştürme açıkken ve bir maskeyi, Hızlı maskeyi ya da bir seçim
katmanını düzenlerken bu komutlar kullanılamaz. **Kırp** ve
**Tuvali seçime göre kırp** için bkz. [Kırpma](/tr/docs/transform/crop/).

![Görüntü menüsü.](shot:transform/image-menu)

## Görüntü boyutu…

Görüntünün tamamını ölçekleyebilir veya yalnızca çözünürlüğünü
değiştirebilirsiniz.

**Görüntü > Görüntü boyutu…** seçin. Boya katmanları ve maskeler yeniden örneklenir; nesne katmanları kaynak piksellerini korur. Seçimler, kılavuzlar ve piksel cinsinden filtre ayarları görüntüyle birlikte ölçeklenir.

Kâğıt görüntüyle birlikte yeniden örneklenir. Yalnızca çözünürlüğü değiştirmek pikselleri yeniden örneklemeden fiziksel ölçeğini günceller.

![Görüntü boyutu iletişim kutusu.](shot:transform/image-size-dialog)

### Genişlik ve Yükseklik

Yeni boyutu **Piksel** veya **Yüzde** cinsinden ayarlayın. Birimi değiştirmek
değerleri dönüştürür.

### Oranları koru

**Genişlik** ve **Yükseklik** değerlerini bağlar. Varsayılan olarak açıktır.

### Çözünürlük

Çözünürlüğü inç başına piksel cinsinden ayarlar. Yalnızca çözünürlüğü
değiştirirseniz pikseller olduğu gibi kalır. Alan çizimin çözünürlüğüyle, çizimin
çözünürlüğü yoksa 72 ppi ile başlar.

### Yeniden örnekle

**Otomatik** (varsayılan) görüntü küçülürken Lanczos, büyürken çift kübik
yöntemini kullanır. **Çift kübik**, **Lanczos**, **Çift doğrusal** veya
**En yakın komşu** seçeneğini de seçebilirsiniz.

## Tuval boyutu…

Yeniden örnekleme yapmadan görüntünün çevresine tuval ekleyebilir veya tuvalden
kaldırabilirsiniz.

**Görüntü > Tuval boyutu…** komutunu seçin. Daha küçük bir tuvalin
dışında kalan pikseller kendi katmanlarında gizli olarak kalır. Daha büyük bir
tuval bu pikselleri yeniden gösterir.

![Tuval boyutu iletişim kutusu.](shot:transform/canvas-size-dialog)

### Genişlik ve Yükseklik

Yeni boyutu **Piksel** veya **Yüzde** cinsinden ayarlayın. Birimi değiştirmek
değerleri dönüştürür.

### Göreli

Girdiğiniz değerleri geçerli boyuta ekler. Varsayılan olarak kapalıdır.

### Sabitleme noktası

Görüntünün yerinde kalacak kenarını veya köşesini 3 × 3'lük bir ızgaradan seçer.
Varsayılan **Orta** seçeneğidir.

## Görüntüyü döndürme ve çevirme

**Görüntü** menüsünden şunlardan birini seçin:

- **Görüntüyü 90° sola döndür**
- **Görüntüyü 90° sağa döndür**
- **Görüntüyü 180° döndür**
- **Görüntüyü yatay çevir**
- **Görüntüyü dikey çevir**

Görüntünün tamamı seçimi ve kılavuzlarıyla birlikte döner veya yansıtılır.
Pikseller yeniden örneklenmez. Yalnızca görünümü döndürmek veya yansıtmak için
bkz. [Tuvali görüntüleme](/tr/docs/start/canvas/).

## Kenarları kırp

Tuvali görünür piksellere küçültmek için **Görüntü > Kenarları kırp**
komutunu seçin. Yeni tuvalin dışında kalan pikseller kendi katmanlarında gizli
olarak kalır.

## Tümünü göster

Tuvali, gizli katmanlar ve tuvalin dışındaki pikseller dâhil tüm katmanların
piksellerini gösterene kadar büyütmek için **Görüntü > Tümünü göster**
komutunu seçin.
