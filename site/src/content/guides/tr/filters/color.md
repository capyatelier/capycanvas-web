---
title: "Renk filtreleri"
description: "Renk kategorisindeki filtrelerin ayarları."
related: ["filters/adding", "filters/tone", "filters/how-filters-apply"]
---

Renk filtreleri **Filtre > Renk** menüsünde ve **Filtreler** panelinin **Renk**
kategorisinde bulunur. Ayarlarını **Özellikler** panelinde değiştirirsiniz.

![Her filtrenin önizlemesiyle Renk kategorisini gösteren Filtreler paneli.](shot:filters/color-list)

## Ton / doygunluk

**Genel** sayfasında görüntünün tamamının, **Kırmızılar** ile **Macentalar**
arasındaki sayfalarda ise tek bir renk aralığının tonunu, doygunluğunu ve
açıklığını kaydırır. **Renklendir** her piksele tek bir ton ve doygunluk verir,
pikselin açıklığını korur.

![Kırmızılar sayfasında Ton / doygunluk için Özellikler paneli.](shot:filters/hue-saturation-properties)

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Ton** | −180° ile 180° arası, **Renklendir** ile 0–360° | 0° |
| **Doygunluk** | −%100 ile %100 arası, **Renklendir** ile %0–100 | %0, **Renklendir** ile %25 |
| **Açıklık** | −%100 ile %100 arası | %0 |
| **Merkez** | 0–360° Oklab tonu. Yalnızca renk sayfalarında. | Kırmızılar 30°, Sarılar 110°, Yeşiller 145°, Camgöbekleri 195°, Maviler 265°, Macentalar 330° |
| **Genişlik** | 0–180°. Yalnızca renk sayfalarında. | 30° |
| **Kenar yumuşatma** | 0–90°. Yalnızca renk sayfalarında. | 30° |
| **Renklendir** | Açık veya kapalı. Açıkken yalnızca **Genel** sayfası kalır. | Kapalı |

## Ters çevir

Her renk kanalını tersine çevirir. Ayarı yoktur.

## Doygunluğu kaldır

Her rengi aynı HSL açıklığına sahip bir griyle değiştirir. Ayarı yoktur.

## Fotoğraf filtresi

Görüntüyü **Yoğunluk** oranında **Renk** yönünde renklendirir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Renk** | Herhangi bir renk | #FFB873 |
| **Yoğunluk** | %0–100 | %25 |
| **Parlaklığı koru** | Açık veya kapalı | Açık |

## Seçici renk

Her sayfada tek bir renk aralığındaki camgöbeği, macenta, sarı ve siyahı
değiştirir. **Kırmızılar** ile **Macentalar** arasındaki sayfalar doygun
renklere, **Beyazlar**, **Nötrler** ve **Siyahlar** griye yakın tonlara etki
eder.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Camgöbeği** | −%100 ile %100 arası | %0 |
| **Macenta** | −%100 ile %100 arası | %0 |
| **Sarı** | −%100 ile %100 arası | %0 |
| **Siyah** | −%100 ile %100 arası | %0 |
| **Yöntem** | **Göreli** her değişikliği renkte zaten bulunan mürekkebe göre ölçekler. **Mutlak** değişikliği olduğu gibi ekler. Her sayfaya uygulanır. | **Göreli** |

## Kanal karıştırıcı

**Kırmızı**, **Yeşil** ve **Mavi** sayfalarında her çıktı kanalını kırmızı,
yeşil ve mavi giriş kanallarının karışımından ve **Sabit** değerinden oluşturur.
**Tek renk** açıkken yalnızca **Gri** sayfası kalır ve bu sayfadaki karışım gri
bir görüntü oluşturur.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Kırmızı** | −%200 ile %200 arası | **Kırmızı** sayfasında %100, **Gri** sayfasında %21,26, diğerlerinde %0 |
| **Yeşil** | −%200 ile %200 arası | **Yeşil** sayfasında %100, **Gri** sayfasında %71,52, diğerlerinde %0 |
| **Mavi** | −%200 ile %200 arası | **Mavi** sayfasında %100, **Gri** sayfasında %7,22, diğerlerinde %0 |
| **Sabit** | −%100 ile %100 arası | %0 |
| **Tek renk** | Açık veya kapalı | Kapalı |

## Renk arama (LUT)

Görünüm menüsündeki bir arama tablosunu renklere uygular ve sonucu
**Yoğunluk** oranında özgün görüntüyle karıştırır. Menü geçerli görünümü
gösterir, örneğin **Sıcak**. Kendi LUT dosyanızı kullanmak için görünüm
menüsünün yanındaki **LUT içe aktar…** düğmesini seçin ve en fazla 16 MB
boyutunda bir 3B `.cube` dosyası açın.

![Görünüm menüsü ve LUT içe aktar… düğmesiyle Renk arama (LUT) için Özellikler paneli.](shot:filters/color-lookup)

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| Görünüm menüsü | **Özgün** (değişiklik yok), **Sıcak**, **Soğuk**, **Tek renk** veya kendi başlığıyla içe aktarılmış bir LUT. İçe aktarılan LUT'lar çizimde kaydedilir. | **Özgün** |
| **LUT renk uzayı** | **sRGB**, **Display P3**, **Adobe RGB (1998)**, **ProPhoto RGB**: içe aktarılan bir LUT'un beklediği renk uzayı. **Özgün** ve yerleşik görünümlerde gizlidir. | **sRGB** |
| **Yoğunluk** | %0–100 | %100 |

## Renk dengesi

Renkleri **Gölgeler**, **Orta tonlar** ve **Açık tonlar** sayfalarında ayrı
ayrı kaydırır. Pozitif değerler, her kaydırıcının etiketindeki ikinci renge
doğru kaydırır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Camgöbeği — kırmızı** | −100 ile 100 arası | 0 |
| **Macenta — yeşil** | −100 ile 100 arası | 0 |
| **Sarı — mavi** | −100 ile 100 arası | 0 |
| **Parlaklığı koru** | Açık veya kapalı, tüm sayfalar için | Açık |

## Canlılık

**Canlılık**, soluk renklerin doygunluğunu doygun renklerinkinden daha fazla
artırır. **Doygunluk** tüm renkleri eşit olarak değiştirir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Canlılık** | −%100 ile %100 arası | %0 |
| **Doygunluk** | −%100 ile %100 arası | %0 |
| **Cilt tonlarını koru** | Açık veya kapalı. Pozitif bir **Canlılık** değerini turuncu ve cilt tonlarında sınırlar. | Açık |

## Siyah beyaz

Görüntüyü griye dönüştürür. Her tonun ne kadar açık olacağını bir kaydırıcı
belirler. **Renk tonu** sonucu **Ton rengi** ile renklendirir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Kırmızılar** | −%100 ile %200 arası | %40 |
| **Sarılar** | −%100 ile %200 arası | %60 |
| **Yeşiller** | −%100 ile %200 arası | %40 |
| **Camgöbekleri** | −%100 ile %200 arası | %60 |
| **Maviler** | −%100 ile %200 arası | %20 |
| **Macentalar** | −%100 ile %200 arası | %80 |
| **Renk tonu** | Açık veya kapalı | Kapalı |
| **Ton rengi** | Herhangi bir renk | #BF874C |

## Gradyan haritası

Görüntünün tonlarını **Gradyan** üzerine eşler: en koyu tonlar için soldaki
durak, en açık tonlar için sağdaki durak kullanılır. **Miktar** sonucu özgün
görüntüyle karıştırır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Gradyan** | [Gradyan](/tr/docs/drawing/gradient/) aracındaki gibi düzenlenen herhangi bir gradyan | Siyahtan beyaza, **Oklab** enterpolasyonu |
| **Miktar** | %0–100 | %100 |

## Beyaz dengesi

Görüntüyü **Sıcaklık** ile ısıtır veya soğutur, **Renk tonu** ile macentaya ya
da yeşile kaydırır. **Özellikler** panelinin üstündeki **Nötr nokta seç**, tuvalde
tıkladığınız bir nokta nötr olacak şekilde ikisini de ayarlar.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Sıcaklık** | −100 ile 100 arası, yazarak ±1000'e kadar. Pozitif değerler daha sıcaktır. | 0 |
| **Renk tonu** | −100 ile 100 arası, yazarak ±800'e kadar. Pozitif değerler daha macentadır. | 0 |
| **Parlaklığı koru** | Açık veya kapalı | Açık |

## Bölünmüş tonlama

Parlaklıklarını koruyarak gölgeleri **Gölgeler** rengine, açık tonları
**Açık tonlar** rengine doğru renklendirir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Gölgeler** | Herhangi bir renk | #295494 |
| **Açık tonlar** | Herhangi bir renk | #F5AD57 |
| **Denge** | −100 ile 100 arası. İki tonlamanın buluştuğu noktayı kaydırır. Pozitif değerler görüntünün daha büyük bölümüne **Gölgeler** rengini verir. | 0 |
| **Güç** | %0–100 | %30 |

## Solarizasyon

Her renk kanalını, **Eşik** değerinden açık olduğu yerlerde tersine çevirir.
**Güç** sonucu özgün görüntüyle karıştırır.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Eşik** | %0–100 | %50 |
| **Güç** | %0–100 | %100 |

## Yanardönerlik

Görüntünün parlaklığını izleyen ve zamanla kayan ince film gökkuşağı ekler.
Dışa aktarılan görüntü renkleri dışa aktarma anındaki hâliyle gösterir.

| Ayar | Aralık veya seçenekler | Varsayılan |
| --- | --- | --- |
| **Güç** | %0–100 | %55 |
| **Film boyutu** | 8–240 px | 64 px |
| **Hız** | 0–4 | 0,3 |
| **Hareketlendir** | Açık veya kapalı. Açıkken renkler **Hız** değerinde sürekli kayar. | Açık |
| **Dondurulmuş zaman** | 0–3600 sn: **Hareketlendir** kapalıyken gösterilen an | 0 sn |
