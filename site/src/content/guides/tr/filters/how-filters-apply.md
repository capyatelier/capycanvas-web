---
title: "Filtrelerin uygulanması"
description: "Kendi katmanındaki bir filtrenin ve tek bir katmana iliştirilmiş bir filtrenin görüntüyü nasıl değiştirdiği."
related: ["filters/adding", "layers/masks", "layers/merging", "layers/settings"]
---

Filtre, kendine ait boyası olmayan bir katmandır. Ayarları **Özellikler**
panelinde düzenlenebilir kalır.

![Teraryum fotoğrafına iliştirilmiş Eğriler ve Netlik ile bunların üstünde kendi katmanında bir Vinyet filtresi bulunan Katmanlar paneli.](shot:filters/layers-chain)

| | Kendi katmanındaki filtre | İliştirilmiş filtre |
| --- | --- | --- |
| Ekleme yolu | **Filtreler** paneli, **Filtre** menüsü, seçim çubuğundaki **Ayarla** | **Filtre ekle** |
| Değiştirdiği | Grubunda altındaki her katman | Yalnızca iliştirildiği katman |
| Katmanlar panelinde | Kendine ait bir satır | Alttaki satıra zincir halkasıyla bağlı bir satır |

## Kendi katmanındaki filtre

Yeni bir filtre, seçili katmanın ve ona kırpılmış ya da iliştirilmiş katmanların
üstüne eklenir. Bir grubun içinde filtre, grup [Geçiş](/tr/docs/layers/settings/)
ayarlı değilse yalnızca o grupta altında kalan katmanları değiştirir.

## İliştirilmiş filtre

Filtreleri bir boya katmanına, fotoğraf katmanına veya Geçiş ayarlı olmayan bir
gruba iliştirebilirsiniz. Katmanı seçin, ardından Katmanlar panelinin altında,
**Özellikler** panelinde veya katmanın menüsünde **Filtre ekle** öğesini seçin.

İliştirilmiş filtreler zincirin altından yukarı doğru, katmanın maskesinden sonra
ve opaklığıyla karıştırma modundan önce uygulanır. Bir kırpma tabanında
kırpılmış katmanların nerede görüneceğini de değiştirirler. **Gauss bulanıklığı**
ve **Girdap** gibi bulanıklaştırma ve bozma filtreleri, katmanın boyasını
kenarlarının ötesine yayabilir.

Katmanı taşımak, çoğaltmak veya gizlemek, iliştirilmiş filtrelerine de aynısını
yapar. Katmanı silerseniz iliştirilmiş filtreleri kendi katmanlarında filtre
olarak kalır.

## *Katman* üzerine uygula ve Alttaki katmanlara uygula

Seçili bir filtreyi bu iki tür arasında değiştirebilirsiniz.

Aşağıdakilerden birini yapın:

- **Katman > Katman ayarları > _katman_ üzerine uygula** veya **Alttaki katmanlara uygula** komutunu seçin.
- Katmanlar paneli başlığında, **Alttaki katmana kırp** düğmesinin yerindeki zincir halkası düğmesini seçin.
- Filtreyi bir katmana iliştirmek için filtreyi o katmanın küçük resminin üzerine sürükleyin.

![Seçili bir filtre için zincir halkası düğmesinin göründüğü Katmanlar paneli başlığı.](shot:filters/attachment-button)

**_katman_ üzerine uygula** filtreyi alttaki en yakın katmana iliştirir.
**Alttaki katmanlara uygula** filtreyi, iliştirildiği katmanın ve o katmanın
kırpılmış katmanlarının üstünde kendi katmanına koyar.

Filtre veya alttaki katman kilitliyken düğme kullanılamaz. Alttaki katman bir
boya katmanı, fotoğraf katmanı veya grup değilse düğmenin araç ipucunda
“İliştirilecek alt katman yok” yazar.

## Filtre maskesi olarak seçimler

Filtre eklediğinizde etkin bir seçim varsa seçim, filtrenin
[maskesi](/tr/docs/layers/masks/) olur. Tek bir **Geri al** filtreyi kaldırır ve
seçimi geri yükler.

## Efekti alttaki katmana uygula

Bir filtreyi alttaki katmana boya olarak birleştirebilirsiniz.

Filtreyi seçin, ardından aşağıdakilerden birini yapın:

- **Katman > Efekti alttaki katmana uygula** komutunu seçin veya bu komutu filtrenin katman menüsünden seçin.
- **Ctrl+E** tuşlarına basın.

![Efekti alttaki katmana uygula komutunu içeren bir filtrenin katman menüsü.](shot:filters/apply-effect-menu)

Kendi katmanındaki bir filtre yalnızca hemen altındaki katmana uygulanır.
İliştirilmiş bir filtrede katman ve katmanın tüm filtre zinciri boyaya dönüşür.
Bu katman kırpılmışsa veya ona kırpılmış katmanlar varsa komutun adı
**Kırpılan katmanları birleştir** olur (bkz.
[Katmanları birleştirme](/tr/docs/layers/merging/)).

Filtre ve alttaki katman görünür, kilitsiz ve Normal modunda olmalıdır. Hemen
alttaki katman başka bir katmana iliştirilmiş bir filtreyse komut kullanılamaz.
