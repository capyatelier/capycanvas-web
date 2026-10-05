---
title: "Ayrıntı ve bulanıklık filtreleri"
description: "Ayrıntı ve Bulanıklık kategorilerindeki filtrelerin ayarları."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Bu filtreler **Filtre > Ayrıntı** ve **Filtre > Bulanıklık** menülerinde ve
**Filtreler** panelinin **Ayrıntı** ve **Bulanıklık** kategorilerinde bulunur.
Ayarlarını **Özellikler** panelinde değiştirirsiniz.

![Her filtrenin önizlemesiyle Ayrıntı ve Bulanıklık kategorilerini gösteren Filtreler paneli.](shot:filters/detail-blur-list)

## Netlik

Pozitif bir **Miktar** yerel kontrastı artırır, negatif bir değer azaltır. Değişim
en fazla 2 pozdur.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Miktar** | −%100 ile %100 arası | %0 |

## Sisi gider

Pozitif bir **Miktar** pusu giderir, negatif bir değer pus ekler. Pus
giderilirken beyaza ve griye yakın alanlar korunur.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Miktar** | −%100 ile %100 arası | %0 |

## Keskinleştirme maskesi

Kenarları **Miktar** kadar keskinleştirir. **Eşik** değerinden küçük farklar
değişmeden kalır.

![Yarıçap, Miktar ve Eşik ayarlarıyla Keskinleştirme maskesi için Özellikler paneli.](shot:filters/unsharp-mask-properties)

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Yarıçap** | 0–21 px, yazarak en fazla 85 px | 1,5 px |
| **Miktar** | %0–300 | %100 |
| **Eşik** | %0–100 | %2 |

## Yüksek geçiren

%50 gri bir taban üzerinde yalnızca **Yarıçap** değerinden ince ayrıntıları
tutar.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Yarıçap** | 0–21 px, yazarak en fazla 85 px | 4 px |
| **Güç** | %0–300 | %100 |

## Kenarları koruyarak düzleştirme

Kenarları keskin tutarak gürültüyü yumuşatır. Daha yüksek bir **Güç** daha
büyük renk farklarını da yumuşatır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Güç** | %0–100 | %25 |

## Kenar algılama

Görüntünün kenarlarını siyah üzerinde beyaz çizgiler olarak, **Tersine çevir**
açıkken de beyaz üzerinde koyu çizgiler olarak gösterir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Genişlik** | 0,5–8 px | 1 px |
| **Güç** | %0–400 | %100 |
| **Tersine çevir** | Açık veya kapalı | Kapalı |

## Kabartma

Görüntüyü gri bir kabartmaya dönüştürür. **Açı** kabartmanın yönünü belirler.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Genişlik** | 0,5–8 px | 1,5 px |
| **Açı** | −180° ile 180° arası | 135° |
| **Derinlik** | %0–400 | %100 |

## Gauss bulanıklığı

Görüntüyü eşit olarak bulanıklaştırır. Saydam alanların yanındaki kenarlar
dışarı doğru bulanıklaşır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Yarıçap** | 0–21 px, yazarak en fazla 85 px | 3 px |

## Hareket bulanıklığı

**Açı** yönünde, **Mesafe** uzunluğunda düz bir çizgi boyunca bulanıklaştırır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Mesafe** | 0–64 px | 12 px |
| **Açı** | −180° ile 180° arası | 0° |

## Işıma

**Eşik** değerinden parlak tonların çevresine ışıma ekler. Işıma saydam alanlara
yayılabilir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Yarıçap** | 0–21 px, yazarak en fazla 85 px | 6 px |
| **Güç** | %0–200 | %60 |
| **Eşik** | %0–100 | %60 |

## Yumuşak odak

Görüntünün üstüne Açıklaştır karıştırma modunda, **Güç** opaklığında
**Yarıçap** büyüklüğünde bir bulanıklık bindirerek görüntüyü yumuşatır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Yarıçap** | 0–21 px, yazarak en fazla 85 px | 5 px |
| **Güç** | %0–100 | %40 |
