---
title: "Seçimlerle çalışma"
description: "Tuval çubuğu ve bir seçimi ya da seçimin içindeki pikselleri değiştiren komutlar."
related: ["selections/tools", "selections/quick-mask", "selections/selection-layers", "layers/masks"]
---

Bir seçimi ve içindeki pikselleri **Seç** menüsünden ve tuvaldeki seçim
çubuğundan değiştirebilirsiniz.

## Tuval çubuğu

Tuval çubuğu, tuvalde düzenlediğiniz öğe için sonraki adımları sunan bir düğme
satırıdır.

| Tuval çubuğu şu durumda görünür | Anlatıldığı yer |
| --- | --- |
| Yeni bir seçimin yanında | Aşağıda, seçim çubuğu |
| **Çokgen kement** seçiminin köşelerini yerleştirirken | [Seçim araçları](/tr/docs/selections/tools/) |
| Hızlı maskede | [Hızlı maske](/tr/docs/selections/quick-mask/) |
| Bir seçim katmanını düzenlerken | [Seçim katmanları](/tr/docs/selections/selection-layers/) |
| Bir katmanın maskesini düzenlerken | [Maskeler](/tr/docs/layers/masks/) |
| Katmanları veya pikselleri dönüştürürken ya da bir görüntü yerleştirirken | [Taşıma ve dönüştürme](/tr/docs/transform/move-transform/) |
| Kırparken | [Kırpma](/tr/docs/transform/crop/) |
| Bir kılavuz seçtiğinizde | [Cetveller ve kılavuzlar](/tr/docs/drawing/ruler/) |
| Klonlama kaynağı diskine tıkladığınızda | [Klonlama ve düzeltme](/tr/docs/retouch/clone-heal/) |
| Düzeyler, Eğriler veya Beyaz dengesi için örnek nokta seçerken | [Filtre ekleme ve düzenleme](/tr/docs/filters/adding/) |

Çubuk, nesnenin yanında veya tuvalin alt kenarında durur. Soldan sağa şunları
içerir:

- “Hızlı maske” veya “Seçim anahattını dönüştür” gibi bir başlık.
- Düğmeler. Soluk bir düğme kullanılamaz. Nedenini görmek için düğmeyi seçin.
- Sığmayan düğmeleri, ardından seçim için **Seç** menüsünü veya maske için **Katman** menüsünü içeren **Diğer**.
- **Uygula** veya **Çık** gibi işlemi bitiren düğme.

Bir nesnenin yanındaki çubuk, tuvale dokunurken veya görünümü taşırken gizlenir.

Tuval çubuğunu gizlemek için aşağıdakilerden birini yapın:

- **Görünüm > Tuval eylem çubuğunu göster** komutunu seçin.
- **Diğer** menüsünün altındaki **Tuval eylem çubuğunu göster** seçeneğini seçin.

Her çalışma alanı kendi ayarını tutar. Çubuk gizliyken kırpma, dönüştürme,
yerleştirilmiş görüntüler ve çokgenler bitirme düğmelerini yine alt kenarda
gösterir.

## Seçim çubuğu

Seçim çubuğu, bir seçim aracı veya **İşlem** etkinken seçimin yanında görünür.
Diğer araçlarla yeni bir seçimin yanında görünür, ancak Geri al veya Yinele ile
geri gelen bir seçimin yanında görünmez. Fırçalar, dolgu araçları,
**Gradyan** ve **Şekil** çubuğu hiçbir zaman göstermez.

![Dikdörtgen bir seçimin altındaki seçim çubuğu.](shot:selections/working-selection-bar)

- **Seçimi kaldır** ve **Tersine çevir**: aşağıdaki Seç menüsüne bakın.
- **Kopya bırak**: yalnızca **İşlem** ile, bkz. [Taşıma ve dönüştürme](/tr/docs/transform/move-transform/).
- **Katmana kopyala**: **Seçimi yeni katmana kopyala** veya **Seçimi kesip yeni katmana taşı**.
- **Kopyala**: **Kopyala**, **Birleştirileni kopyala** veya **Kes**, bkz. [Kopyalama ve yapıştırma](/tr/docs/transform/clipboard/).
- **Dönüştür**: seçili pikselleri dönüştürür.
- **İyileştir**: iyileştirme komutları ve **Seçim anahattını dönüştür**.
- **Maske**: etkin katmanı seçime göre maskeler.
- **Ayarla**: seçimi maske olarak kullanan bir filtre ekler, bkz. [Filtrelerin uygulanması](/tr/docs/filters/how-filters-apply/).
- **Doldur**: **Seçimi doldur**.
- **Temizle**: **Seçili pikselleri temizle** veya **Seçimin dışını temizle**.
- **Kırp**: **Tuvali seçime göre kırp**, bkz. [Kırpma](/tr/docs/transform/crop/).
- **Hızlı maske**: bkz. [Hızlı maske](/tr/docs/selections/quick-mask/).
- **Kaydet**: **Seçim katmanı olarak kaydet**, bkz. [Seçim katmanları](/tr/docs/selections/selection-layers/).

## Seç menüsü

**Seç** menüsünü seçim çubuğundaki **Diğer** menüsünden ve Araç panelinde bir
seçim aracının ayarlarının altındaki **Seç** düğmesinden de açabilirsiniz.

| Komut | İşlevi | Tuş |
| --- | --- | --- |
| **Tüm pikselleri seç** | Tuvalin tamamını seçer | **Ctrl+A** |
| **Piksel seçimini kaldır** | Seçimi kaldırır, Hızlı maskeyi veya seçim katmanı düzenlemeyi bitirir | **Ctrl+D** |
| **Yeniden seç** | Son değişikliğin kaldırdığı seçimi geri yükler | **Ctrl+Shift+D** |
| **Seçimi tersine çevir** | Seçimin dışındaki her şeyi seçer | **Ctrl+Shift+I** |
| **Seçim anahattını göster** | Seçim anahattını gösterir veya gizler | |

**Yeniden seç** yalnızca hiçbir şey seçili değilken kullanılabilir.

Seçim anahattını gizlemek seçimi korur. **Seçim anahattını göster** Görünüm
menüsünde de bulunur.

![Seç menüsü.](shot:selections/working-select-menu)

## Seçimi iyileştirme

Bir seçimi canlı önizlemeyle genişletebilir, daraltabilir, kenarlarını
yumuşatabilir, kenarlığa dönüştürebilir veya düzleştirebilirsiniz.

Aşağıdakilerden birini yapın:

- **Seç > Seçimi genişlet…**, **Seçimi daralt…**, **Seçim kenarlarını yumuşat…**, **Seçimi kenarlığa dönüştür…** veya **Seçimi düzleştir…** komutunu seçin.
- Seçim çubuğunda **İyileştir** düğmesini seçin ve **Genişlet…**, **Daralt…**, **Kenarları yumuşat…**, **Kenarlık…** veya **Düzleştir…** komutunu seçin.

Tuvalin altında tek bir değer içeren bir panel açılır. Sonucu korumak için
**Uygula** düğmesini seçin veya **Enter** tuşuna basın. **İptal** ve **Escape**
önceki seçimi geri yükler.

| Komut | Değer | Aralık | Varsayılan |
| --- | --- | --- | --- |
| **Seçimi genişlet…** | **Grow by** | 1–128 px | 5 px |
| **Seçimi daralt…** | **Shrink by** | 1–128 px | 5 px |
| **Seçim kenarlarını yumuşat…** | **Feather radius** | 0,1–100 px | 5 px |
| **Seçimi kenarlığa dönüştür…** | **Border width** | 1–128 px | 5 px |
| **Seçimi düzleştir…** | **Smooth radius** | 1–64 px | 5 px |

**Seçimi kenarlığa dönüştür…** seçimi, kenarı boyunca uzanan bir bantla
değiştirir. Düzleştirme, yarıçapın iki katından dar çentikleri doldurur ve
çıkıntıları kaldırır, ancak tuval kenarında duran kenarları taşımaz. Genişletme
ve daraltma yumuşak kenarları yumuşak tutar.

Hızlı maskede bu komutlar maskeyi değiştirir.

![Seçim çubuğundaki İyileştir menüsü.](shot:selections/working-refine-menu)

## Seçim anahattını dönüştür

Seçim anahattını hiçbir pikseli taşımadan taşıyabilir, ölçekleyebilir,
döndürebilir, eğebilir veya çevirebilirsiniz.

Aşağıdakilerden birini yapın:

- **Seç > Seçim anahattını dönüştür** komutunu seçin.
- Seçim çubuğunda **İyileştir > Seçim anahattını dönüştür** komutunu seçin.

Dönüşüm kutusu, “Seçim anahattını dönüştür” başlıklı bir tuval çubuğuyla
görünür. [Dönüştür](/tr/docs/transform/move-transform/) gibi çalışır, ancak
**Boz**, **Çarpıt** ve **Enterpolasyon** kullanılamaz.

## Doldurma ve temizleme

- **Seçimi doldur** etkin boya katmanının seçili piksellerini fırçanın opaklığında geçerli renkle doldurur.
- **Seçili pikselleri temizle** etkin katmanın seçili piksellerini siler. Yumuşak kenarlar kısmen silinir.
- **Seçimin dışını temizle** seçimin dışındaki pikselleri siler.

Aşağıdakilerden birini yapın:

- Komutu **Düzenle** menüsünden seçin. Temizleme komutları **Seç** menüsünde de bulunur.
- Doldurmak için **Shift+Backspace**, seçili pikselleri temizlemek için **Delete** veya **Backspace** tuşuna basın.
- Seçim çubuğunda **Doldur** düğmesini veya **Temizle** düğmesini ve bir komutu seçin.
- Boya'da Komutlar çubuğundaki **Seçimi doldur** düğmesini seçin.
- Katmanın menüsünü açın ve **Piksel seçimi > Seçimi doldur** komutunu seçin.

Hızlı maskede, bir maskede veya **Alfa kilidi** açık bir katmanda piksel
temizleyemezsiniz.

## Yeni katmana kopyalama

**Seçimi yeni katmana kopyala**, etkin boya katmanının seçili piksellerini hemen
üstteki yeni bir katmana yerinde kopyalar. **Seçimi kesip yeni katmana taşı**
ayrıca bu pikselleri özgün katmandan siler.

Aşağıdakilerden birini yapın:

- **Seç > Seçimi yeni katmana kopyala** veya **Seç > Seçimi kesip yeni katmana taşı** komutunu seçin.
- Kopyalamak için **Ctrl+J**, kesmek için **Ctrl+Shift+J** tuşlarına basın.
- Seçim çubuğunda **Katmana kopyala** düğmesini seçin ve bir komut seçin.

Yeni katman özgün katmanın adını alır, örneğin *Ribbon kopyası*, ve özgün
katmanın opaklığını, görünürlüğünü ve karıştırma modunu korur. **Yeniden seç**
komutunu seçene kadar seçim kaldırılmış olur.

Seçim yokken **Seçimi yeni katmana kopyala** seçili katmanları çoğaltır.

## Katmanı seçime göre maskeleme

Etkin katmana yalnızca seçimi gösteren bir maske ekleyebilirsiniz.

Aşağıdakilerden birini yapın:

- Katmanın menüsünü açın ve **Maske > Maske: seçimi göster** komutunu seçin. Seçili alanı gizlemek için **Maske > Maske: seçimi gizle** komutunu seçin.
- Seçim çubuğunda **Maske** düğmesini seçin.

Katmanın zaten maskesi varsa seçim mevcut maskenin yerini alır. Seçim kaldırılır
ve maske düzenleme için açılır (bkz. [Maskeler](/tr/docs/layers/masks/)).

## Katmanlardan seçim

Bir katmanın boyasını, maskesini veya bir seçim katmanını seçim olarak
yükleyebilirsiniz.

Aşağıdakilerden birini yapın:

- Bir boya katmanı için **Seç > Katman Opaklığından** altından bir öğe seçin: **Katman opaklığını seç**, **Opaklığı seçime ekle**, **Opaklığı seçimden çıkar** veya **Katman opaklığıyla kesiştir**.
- Maskesi olan bir katman için **Seç > Katman Maskesinden** altından bir öğe seçin: **Maskeyi seçim olarak yükle**, **Maskeyi seçime ekle**, **Maskeyi seçimden çıkar** veya **Maskeyle kesiştir**.
- Katmanın menüsünü açın ve aynı öğeleri **Piksel seçimi** altından seçin.
- **Ctrl** tuşunu basılı tutun ve Katmanlar panelinde katmanın küçük resmine tıklayın. Seçime eklemek için **Shift**, çıkarmak için **Alt**, kesiştirmek için **Shift+Alt** tuşlarını da basılı tutun.

**Seç > Seçimi yükle** [seçim katmanlarını](/tr/docs/selections/selection-layers/) yükler.
