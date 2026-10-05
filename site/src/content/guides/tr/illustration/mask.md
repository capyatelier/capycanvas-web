---
title: "Temel renkler"
description: "İllüstrasyon eğitiminin 3. aşaması: her şekil için şekle göre maskelenmiş ve temel rengiyle doldurulmuş bir boya katmanı."
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

Bu aşamada her şekil için temel rengiyle doldurulmuş ve şekle göre maskelenmiş
bir boya katmanı oluşur. Temel renkler boya katmanlarına konur, çünkü bir dolgu
katmanı 4. aşamadaki gölgelendirme için kırpma tabanı olamaz.

## 1. Block katmanını ekleyin

*Sketch* katmanını gizleyin, satırını seçin ve **Yeni katman** ile *Block* adlı
bir katman ekleyin. Yeni katman *Sketch* katmanının hemen üstünde, *Line art*
katmanının altında görünür.

## 2. Katmanı bloğa göre maskeleyin

**M** tuşuna basın veya Araçlar çubuğunun **Seç** grubunda **Kement seçimi**
aracını seçin ve *Line art* katmanındaki bloğun dış çizgisini izleyin. Ardından
seçim çubuğunda **Maske** düğmesini seçin
([Seçimlerle çalışma](/tr/docs/selections/working/)).

![Bloğun çevresindeki bir seçimin yanında Maske düğmesiyle seçim çubuğu.](shot:illustration/mask-selection-bar)

Seçim *Block* katmanının maskesi olur ([Maskeler](/tr/docs/layers/masks/)).
Satırda bir maske küçük resmi görünür ve tuvalin altındaki bir çubukta
“Maske düzenleniyor: Block” yazar.

## 3. Katmanı doldurun

Bir maskeyi düzenlerken **Seçimi doldur** kullanılamaz. Katmanı doldurmak için:

1. *Block* satırındaki katman küçük resmini seçin veya tuvalin altındaki çubukta **İçeriği düzenle** düğmesini seçin.
2. **Renk** panelinde terrakota rengini seçin.
3. **Seç > Tüm pikselleri seç** komutunu seçin veya **Ctrl+A** tuşlarına basın.
4. **Düzenle > Seçimi doldur** komutunu seçin veya **Shift+Backspace** tuşlarına basın.
5. **Seç > Piksel seçimini kaldır** komutunu seçin veya **Ctrl+D** tuşlarına basın.

Renk katmanın tamamını kaplar, maske ise rengi yalnızca bloğun içinde gösterir.

## 4. Disc ve Ribbon katmanlarını ekleyin

Aynı şekilde aşı boyası renginde *Disc*, ardından petrol mavisi renginde
*Ribbon* katmanını oluşturun.

![Line art altında her biri maske küçük resmine sahip Ribbon, Disc ve Block ile Katmanlar paneli.](shot:illustration/mask-layers)

Katman listesinde *Line art*, *Ribbon*, *Disc*, *Block*, *Sketch*,
*Color rough* ve **Kâğıt** yer alır.

## 5. Bir kenarı düzeltin

*Ribbon* satırındaki maske küçük resmini seçin. Tuvalin altındaki çubukta
“Maske düzenleniyor: Ribbon” yazar.

![Tuvalin altında Maske düzenleniyor: Ribbon yazan, Tersine çevir, Devre dışı bırak, Maskeyi uygula ve İçeriği düzenle düğmeleriyle çubuk.](shot:illustration/mask-bar)

Petrol mavisinin daha fazlasını göstermek için **G kalem** fırçasıyla bir kenar
boyunca boyayın veya kenarı kırpmak için **Silgi** kullanın. Maskede fırçalar
boya rengini dikkate almaz.

Sonraki aşama: [Gölgelendirme](/tr/docs/illustration/render/).
