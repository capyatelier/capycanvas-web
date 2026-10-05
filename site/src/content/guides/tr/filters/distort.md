---
title: "Bozma filtreleri"
description: "Bozma kategorisindeki filtrelerin ayarları."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Bozma filtreleri **Filtre > Bozma** menüsünde ve **Filtreler** panelinin
**Bozma** kategorisinde bulunur. Ayarlarını **Özellikler** panelinde
değiştirirsiniz. Her biri boyayı bir katmanın saydam alanlarına taşıyabilir.

![Her filtrenin önizlemesiyle Bozma kategorisini gösteren Filtreler paneli.](shot:filters/distort-list)

## Renk sapması

Kırmızı kanalı bir yöne, mavi kanalı öbür yöne **Açı** boyunca **Ayrılma**
kadar kaydırarak kenarlarda renk saçakları ekler.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Ayrılma** | 0–32 px | 3 px |
| **Açı** | −180° ile 180° arası | 0° |

## Kaleydoskop

Görüntünün bir dilimini merkezin çevresinde **Dilimler** sayıda dilime
yansıtır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Dilimler** | 2–24 | 6 |
| **Açı** | −180° ile 180° arası | 0° |
| **Merkez X**, **Merkez Y** (**Konum** altında) | Tuval genişliğinin ve yüksekliğinin %0–100'ü | %50 |

## Girdap

Görüntüyü merkezin çevresinde **Bükülme** kadar büker. Bükülme **Yarıçap**
sınırına doğru azalarak sıfıra iner.

![Bükülme, Yarıçap ve Konum ayarlarıyla Girdap için Özellikler paneli.](shot:filters/swirl-properties)

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Bükülme** | −720° ile 720° arası | 120° |
| **Yarıçap** | Tuvalin kısa kenarının yarısının %1–150'si | %70 |
| **Merkez X**, **Merkez Y** (**Konum** altında) | Tuval genişliğinin ve yüksekliğinin %0–100'ü | %50 |

## Dalgalanma

Görüntüyü merkezin çevresinde, aralarında **Dalga uzunluğu** kadar mesafe olan
halkalar hâlinde en fazla **Genlik** kadar kaydırır. Halkalar zamanla dışarı
doğru ilerler.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Genlik** | 0–48 px | 12 px |
| **Dalga uzunluğu** | 8–256 px | 64 px |
| **Hız** | 0–4 | 0,5 |
| **Merkez X**, **Merkez Y** (**Konum** altında) | Tuval genişliğinin ve yüksekliğinin %0–100'ü | %50 |
| **Hareketlendir** | Açık veya kapalı | Açık |
| **Dondurulmuş zaman** | 0–3600 sn | 0 sn |

## Cam

Görüntüyü **Doku boyutu** büyüklüğünde buzlu cam deseniyle en fazla
**Bozulma** kadar bozar. **Pürüzlülük** daha ince bir desen ekler.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Bozulma** | 0–48 px | 12 px |
| **Doku boyutu** | 4–160 px | 24 px |
| **Pürüzlülük** | %0–100 | %35 |

## Yağmurlu cam

Zamanla iz bırakarak aşağı kayan ve görüntüyü en fazla **Işık kırılması** kadar
büken yağmur damlaları ekler. **Yağmur** damla sayısını belirler.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Işık kırılması** | 0–32 px | 8 px |
| **Damla boyutu** | 12–120 px | 48 px |
| **Yağmur** | %0–100 | %65 |
| **Hız** | 0–4 | 0,5 |
| **Hareketlendir** | Açık veya kapalı | Açık |
| **Dondurulmuş zaman** | 0–3600 sn | 0 sn |

## Isı puslanması

Görüntüyü zamanla titreştirir. Titreşim tuvalin altında en fazla **Bozulma**
kadardır, üstte hiç yoktur. **Ayrıntı** daha ince dalgalanmalar ekler.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Bozulma** | 0–48 px | 8 px |
| **Dalga boyutu** | 10–240 px | 90 px |
| **Hız** | 0–4 | 0,6 |
| **Ayrıntı** | %0–100 | %50 |
| **Hareketlendir** | Açık veya kapalı | Açık |
| **Dondurulmuş zaman** | 0–3600 sn | 0 sn |

## Alan çarpıtma

Görüntüyü **Desen boyutu** büyüklüğünde mermer desenli bir örüntüyle en fazla
**Bozulma** kadar çarpıtır. Desen zamanla kayar.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Bozulma** | 0–64 px | 24 px |
| **Desen boyutu** | 8–256 px | 96 px |
| **Hız** | 0–4 | 0,25 |
| **Hareketlendir** | Açık veya kapalı | Açık |
| **Dondurulmuş zaman** | 0–3600 sn | 0 sn |

## Animasyon

**Dalgalanma**, **Yağmurlu cam**, **Isı puslanması** ve **Alan çarpıtma**
hareketli filtrelerdir ve **Filtreler** panelindeki satırlarında animasyon
işareti bulunur. **Hareketlendir** açıkken filtre **Hız** değerinde sürekli
oynar. Filtreyi **Dondurulmuş zaman** ile ayarlanan anda sabit tutmak için
**Hareketlendir** seçeneğini kapatın.

Dışa aktarılan görüntü, animasyonu dışa aktarma anındaki hâliyle gösterir.
