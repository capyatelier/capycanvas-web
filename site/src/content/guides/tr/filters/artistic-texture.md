---
title: "Sanatsal ve doku filtreleri"
description: "Sanatsal ve Doku kategorilerindeki filtrelerin ayarları."
related: ["filters/adding", "filters/distort", "filters/how-filters-apply"]
---

Bu filtreler **Filtre > Sanatsal** ve **Filtre > Doku** menülerinde ve
**Filtreler** panelinin **Sanatsal** ve **Doku** kategorilerinde bulunur.
Ayarlarını **Özellikler** panelinde değiştirirsiniz.

![Her filtrenin önizlemesiyle Sanatsal kategorisini gösteren Filtreler paneli.](shot:filters/artistic-list)

## Posterleştirme

Her renk kanalını eşit aralıklı **Düzeyler** sayıda değere indirir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Düzeyler** | 2–256 | 6 |

## Yarım ton

Görüntüyü **Kâğıt** üzerinde yuvarlak **Mürekkep** noktalarıyla yeniden çizer.
Her noktanın boyutu altındaki koyuluğa göre belirlenir. **Kontrast** küçük ve
büyük noktalar arasındaki farkı artırır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Nokta aralığı** | 3–48 px | 9 px |
| **Açı** | −180° ile 180° arası | 15° |
| **Kontrast** | %0–100 | %30 |
| **Mürekkep** | Herhangi bir renk | #0D1217 |
| **Kâğıt** | Herhangi bir renk | #F5F0DE |

## Çapraz tarama

Görüntüyü **Kâğıt** üzerinde **Mürekkep** ile taramaya dönüştürür. Koyu alanlar
en fazla dört olmak üzere daha fazla çizgi yönü alır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Aralık** | 3–32 px | 8 px |
| **Çizgi genişliği** | 0,25–4 px | 1 px |
| **Açı** | −180° ile 180° arası | 0° |
| **Mürekkep** | Herhangi bir renk | #121417 |
| **Kâğıt** | Herhangi bir renk | #F7F2E8 |

## Piksel mozaiği

Görüntüyü **Hücre boyutu** büyüklüğünde karelere böler. Her kare kendi
merkezindeki renkle doldurulur.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Hücre boyutu** | 1–96 px | 12 px |

## Resimsel

**Yarıçap** içindeki ayrıntıyı kenarları koruyarak düz renkli lekelere
indirger ve görüntüye yağlı boya görünümü verir. **Güç** sonucu özgün görüntüyle
karıştırır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Yarıçap** | 1–16 px | 5 px |
| **Güç** | %0–100 | %100 |

## Kurşun kalem

Görüntünün kenarlarını **Kâğıt** üzerinde **Mürekkep** çizgileri olarak çizer.
**Kontrast** çizgileri koyulaştırır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Yarıçap** | 0–21 px, yazarak en fazla 85 px | 2 px |
| **Kontrast** | %0–100 | %40 |
| **Mürekkep** | Herhangi bir renk | #120F0D |
| **Kâğıt** | Herhangi bir renk | #F7F2E6 |

## Film grenleri

Zamanla değişen ve orta tonlarda en güçlü olan gren ekler. **Renkli gren** her
renk kanalına kendi grenini verir.

![Her filtrenin önizlemesiyle Doku kategorisini gösteren Filtreler paneli.](shot:filters/texture-list)

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Miktar** | %0–100 | %18 |
| **Boyut** | 0,5–8 px | 1 px |
| **Renkli gren** | Açık veya kapalı | Kapalı |
| **Hız** | 0–4 | 1 |
| **Hareketlendir** | Açık veya kapalı | Açık |
| **Dondurulmuş zaman** | 0–3600 sn | 0 sn |

## VHS

Görüntüye video kaseti görünümü verir: satırlar yana doğru en fazla **İzleme**
kadar titrer, kırmızı ve mavi saçaklar, tarama çizgileri ve gürültü eklenir.
Titreme ve gürültü zamanla değişir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **İzleme** | 0–32 px | 5 px |
| **Gürültü** | %0–100 | %12 |
| **Tarama çizgileri** | %0–100 | %20 |
| **Hız** | 0–4 | 1 |
| **Hareketlendir** | Açık veya kapalı | Açık |
| **Dondurulmuş zaman** | 0–3600 sn | 0 sn |

## CRT

Görüntüyü eski bir televizyon ekranı gibi gösterir: kavisli bir ekran, kırmızı
ve mavi saçaklar, çizgili bir RGB piksel maskesi, tarama çizgileri ve zamanla
kayan bir parlaklık bandı. Görüntünün kavisli ekranın dışına itilen bölümleri
saydam olur.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Eğrilik** | %0–30 | %8 |
| **Tarama çizgileri** | %0–100 | %35 |
| **Piksel maskesi** | %0–100 | %25 |
| **Ayrılma** | 0–5 px | 1 px |
| **Hareketlendir** | Açık veya kapalı | Açık |
| **Dondurulmuş zaman** | 0–3600 sn | 0 sn |

## Animasyon

**Film grenleri**, **VHS** ve **CRT** hareketli filtrelerdir ve **Filtreler**
panelindeki satırlarında animasyon işareti bulunur. **Hareketlendir** açıkken
filtre **Hız** değerinde sürekli oynar (CRT'nin **Hız** ayarı yoktur). Filtreyi
**Dondurulmuş zaman** ile ayarlanan anda sabit tutmak için **Hareketlendir**
seçeneğini kapatın.

Dışa aktarılan görüntü, animasyonu dışa aktarma anındaki hâliyle gösterir.
