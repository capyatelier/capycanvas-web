---
title: "Katmanları birleştirme"
description: "Birleştirme komutlarıyla katmanları tek bir boya katmanında birleştirme."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types"]
---

Katmanları tek bir boya katmanında birleştirebilirsiniz. Birleştirme komutları
**Katman** menüsünün ve her katman menüsünün sonlarına doğru bulunur.

![Ribbon etkinken Katman menüsü; Kırpılan katmanları birleştir, Görünenleri birleştir, Görünenlerden yeni katman oluştur ve Görüntüyü düzleştir görünüyor.](shot:layers/merging-menu)

Her birleştirme bir geri alma adımıdır. [Nesne katmanı](/tr/docs/layers/types/) birleştirildiğinde pikselleştirilir. Seçim katmanı veya Hızlı Maske düzenlerken ya da dönüştürme sırasında birleştiremezsiniz.

## Alttakiyle birleştir

Etkin katmanı altındaki katmanla birleştirebilirsiniz.

Aşağıdakilerden birini yapın:

- **Katman > Alttakiyle birleştir** komutunu seçin.
- **Ctrl+E** tuşlarına basın (GIMP tarzı tuş eşlemesinde yoktur).

Birleştirilmiş katman alttaki katmanın adını, yerini, kırpmasını ve
**Alfa kilidi** ayarını alır. Opaklığı %100, karıştırma modu Normal olur ve
maskesi olmaz. Katmanlardan biri referanssa birleştirilmiş katman da referans
olur.

İki katman da görünür, kilitsiz ve Normal modunda olmalıdır. Alttaki katman bir
filtre olamaz ve etkin katman da kırpılmış değilse kırpılmış olamaz.

## Kırpılan katmanları birleştir

Bir kırpma tabanı etkinken **Alttakiyle birleştir** komutunun adı
**Kırpılan katmanları birleştir** olur. Bu komut tabanı ve görünür kırpılmış
katmanlarını, tabanın adını taşıyan tek bir katmanda birleştirir. Gizli
kırpılmış katmanlar birleştirilmiş katmana kırpılmış olarak kalır.

Kırpılmış bir filtrede veya kırpılmış ya da kırpma tabanı olan bir katmana
iliştirilmiş bir filtrede de komutun adı **Kırpılan katmanları birleştir** olur.
Taban görünür ve Normal modunda olmalı, en az bir kırpılmış katman da görünür
olmalıdır.

## Efekti alttaki katmana uygula

Bir filtre etkinken, filtre bir kırpma yığınının parçası değilse
**Alttakiyle birleştir** komutunun adı **Efekti alttaki katmana uygula** olur.
Bu komut filtreyi altındaki katmana veya iliştirildiği katmana uygular (bkz.
[Filtrelerin uygulanması](/tr/docs/filters/how-filters-apply/)).

## Grubu birleştir

Bir grup etkinken **Alttakiyle birleştir** yerine **Katman > Grubu birleştir**
bulunur.

Grup, grubun karıştırma modunu ve opaklığını taşıyan tek bir katman olur. Geçiş
Normal olur. Grubun maskesi uygulanır ve grubun içindeki gizli katmanlar atılır.

Grup görünür ve kilitsiz olmalıdır, seçim katmanı içeremez.

## Görünenleri birleştir

Görünür normal katmanları birleştirmek için **Katman > Görünenleri birleştir** seçin. Kâğıt, alttaki Kâğıt katmanı olarak kalır. Gizli katmanlar değişmez.

Birleştirilen katman en alttaki birleştirilen katmanın adını ve yerini alır. Birleştirilen katmana kırpılmış gizli katmanlar serbest bırakılır. Görünür katmanların kilidi açık olmalı ve aralarındaki gruplar seçim katmanı içermemelidir.

## Görünenlerden yeni katman oluştur

Görünen her şeyin birleştirildiği yeni bir katmanı listenin en üstüne eklemek
için **Katman > Görünenlerden yeni katman oluştur** komutunu seçin. Diğer tüm
katmanlar kalır.

Yeni katmanın adı “Visible” olur. Katman tuvali kaplar ve etkin katman olur.
Kilitli katmanlar **Görünenlerden yeni katman oluştur** komutunu engellemez.

## Görüntüyü düzleştir

Görünür normal katmanları birleştirmek için **Katman > Görüntüyü düzleştir** seçin. Kâğıt en altta Kâğıt olarak kalır. Gizli katmanlar ve tuval dışındaki pikseller atılır, ancak gruplar dışındaki seçim katmanları kalır. Görünür katmanların kilidi açık olmalıdır.

![Tuvalin üstünde “Düzleştirme 2 gizli katmanı atar” yazan ve Görüntüyü düzleştir düğmesi bulunan bildirim.](shot:layers/merging-flatten-notice)

Çizimde gizli katmanlar varsa tuvalin üstündeki bir bildirim bunların sayısını
verir, örneğin “Düzleştirme 2 gizli katmanı atar”. Bildirimde **Görüntüyü düzleştir**
düğmesini seçene kadar hiçbir şey değişmez.
