---
title: "Ton filtreleri"
description: "Ton kategorisindeki filtrelerin ayarları."
related: ["filters/adding", "filters/color", "filters/how-filters-apply"]
---

Ton filtreleri **Filtre > Ton** menüsünde ve **Filtreler** panelinin **Ton**
kategorisinde bulunur. Ayarlarını **Özellikler** panelinde değiştirirsiniz.

![Her filtrenin önizlemesiyle Ton kategorisini gösteren Filtreler paneli.](shot:filters/tone-list)

## Gölgeler/Parlak alanlar

Çevresindeki alanın parlaklığına göre koyu alanları **Gölgeler** ile açar,
parlak alanları **Parlak alanlar** ile koyulaştırır. %100'de her biri pozlamayı
en fazla 2 poz değiştirir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Gölgeler** | %0–100 | %0 |
| **Parlak alanlar** | %0–100 | %0 |

## Eğriler

Tonları **RGB** sayfasında tüm kanallar için bir eğriyle, **Kırmızı**, **Yeşil**
ve **Mavi** sayfalarında her kanal için ayrı bir eğriyle değiştirir. Kanal
eğrileri **RGB** eğrisinden önce uygulanır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **RGB**, **Kırmızı**, **Yeşil**, **Mavi** sayfaları | Her biri için bir eğri | Düz çizgi |
| **Noktadan örnek al**, **Hedefli ayar** | Eğriyi görüntüden ayarlar (bkz. [Filtre ekleme ve düzenleme](/tr/docs/filters/adding/)) | |
| **Eğri uzayı** | **Kodlanmış RGB**, **Logaritmik HDR**. Yalnızca bir [HDR çizimde](/tr/docs/color-management/hdr/) veya **Logaritmik HDR** ayarlıyken gösterilir. | **Kodlanmış RGB**, HDR çizimde **Logaritmik HDR** |
| **HDR aralığı** | 0–15 EV, yazarak en fazla 127 EV. Yalnızca **Logaritmik HDR** ile gösterilir: eğrinin ulaştığı, SDR beyazının üstündeki poz sayısı. | 4 EV |

| Grafikte | Nasıl |
| --- | --- |
| Nokta ekleme | Boş bir yere basın. Bir eğri en fazla 32 nokta tutar. |
| Noktayı taşıma | Noktayı sürükleyin veya seçip ok tuşlarına basın. **Shift** noktayı daha uzağa taşır. Uç noktalar yalnızca yukarı ve aşağı hareket eder. |
| Kesin değer girme | Bir nokta seçin ve grafiğin altındaki **Giriş** ve **Çıktı** alanlarına yazın. |
| Noktayı kaldırma | Noktaya çift tıklayın, grafiğin dışına sürükleyin veya seçip **Delete** ya da **Backspace** tuşuna basın. |
| Baştan başlama | **Eğriyi sıfırla** düğmesini seçin. |

## Düzeyler

Girişin siyah noktasını, beyaz noktasını ve orta tonlarını ayarlar, ardından
bunları **Çıktı** aralığına eşler. **Kırmızı**, **Yeşil** ve **Mavi** sayfaları
**RGB** sayfasından önce uygulanır.

![Histogram, Otomatik, Noktadan örnek al ve Giriş, Çıktı ve Kırpma ayarlarıyla Düzeyler için Özellikler paneli.](shot:filters/levels-properties)

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Otomatik**, **Noktadan örnek al** | Girişi görüntüden ayarlar (bkz. [Filtre ekleme ve düzenleme](/tr/docs/filters/adding/)) | |
| **Gölgeler**, **Açık tonlar** (histogramın altında) | Tuvalde kırpılmış alanları işaretler | |
| **Siyah** (**Giriş**) | 0–1, yazarak her değer. Giriş **Beyaz** değerinin altında kalır. | 0 |
| **Beyaz** (**Giriş**) | 0–1, yazarak her değer | 1 |
| **Orta tonlar** | 0,1–10. 1'in üstü açar. | 1 |
| **Siyah** (**Çıktı**) | 0–1, yazarak her değer | 0 |
| **Beyaz** (**Çıktı**) | 0–1, yazarak her değer | 1 |
| **Girişi sınırla** | Giriş **Siyah** ve **Beyaz** dışındaki tonları her sayfada kırpar | Kapalı |
| **Çıktıyı sınırla** | Sonucu her sayfada çıktı aralığına kırpar | Kapalı |

## Parlaklık / kontrast

**Kontrast** tonları orta gri çevresinde açar veya sıkıştırır, ardından
**Parlaklık** tüm tonları aynı miktarda açar veya koyulaştırır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Parlaklık** | −100 ile 100 arası | 0 |
| **Kontrast** | −100 ile 100 arası. 50 kontrastı iki katına çıkarır, −50 yarıya indirir. | 0 |

## Eşik

**Eşik** değerinden koyu pikselleri siyah, kalanları beyaz yapar.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Eşik** | 0–1, yazarak her değer | 0,5 |

## Pozlama

Pozlamayı poz cinsinden değiştirir. **Ofset** siyahları yükseltir veya alçaltır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Pozlama** | −10 ile 10 EV arası, yazarak ±126 EV'ye kadar | 0 EV |
| **Ofset** | −0,5 ile 0,5 arası | 0 |
| **Gama** | 0,1–10. 1'in üstü orta tonları açar. | 1 |

## Vinyet

Görüntüyü, tuvalin oranlarına sahip bir elipsin dışında koyulaştırır veya
**Güç** negatifken açar. ±%100'de kenarlar en fazla 2 poz değişir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Güç** | −%100 ile %100 arası | %40 |
| **Yarıçap** | Tuval boyutunun yarısının %10–150'si | %95 |
| **Yumuşaklık** | Geçiş için kullanılan yarıçapın %0–100'ü | %55 |
| **Merkez X**, **Merkez Y** (**Konum** altında) | Tuval genişliğinin ve yüksekliğinin %0–100'ü | %50 |
