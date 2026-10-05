---
title: "HDR"
description: "HDR çizimler, ekranda nasıl göründükleri ve SDR sürümleri."
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

HDR çiziminde SDR beyazından daha parlak renklerle boyayabilirsiniz. **16 bit
kayan noktalı HDR** veya **32 bit kayan noktalı HDR** derinliğindeki bir çizim
HDR çizimidir.

## HDR çizimler

HDR çizimi elde etmek için aşağıdakilerden birini yapın:

- **Dosya > Yeni…** içinde **HDR çizimi** hazır ayarını veya kayan noktalı bir **Bit derinliği** seçin.
- **Düzenle > Bit derinliğini değiştir…** komutunu ve kayan noktalı bir derinlik seçin.
- Bir HDR PNG (BT.2020 PQ) veya HDR AVIF dosyası (16 bit kayan noktalı HDR) ya da bir OpenEXR dosyası (32 bit kayan noktalı HDR) açın.
- Yeni çizimleri HDR yapmak için [Tercihler](/tr/docs/preferences/) içindeki **Renk** sayfasında **Bit derinliği** ayarını kayan noktalı bir derinlik yapın.

HDR çiziminde:

- [Renk paneli](/tr/docs/color/color-panel/) ve [Rengi düzenle](/tr/docs/color/edit-color/) boyanın yoğunluğunu EV cinsinden ayarlar.
- [Karıştırma](/tr/docs/color-management/color-spaces/) her zaman Doğrusal ışıktır.
- Kaplama, Yumuşak ışık, Sert ışık, Renk yakma, Renk açma, Canlı ışık, Sert karışım ve Dışlama [karıştırma modu](/tr/docs/layers/blend-modes/) olarak sunulmaz.
- Eğriler'de bir **Logaritmik HDR** alanı ve bir **HDR aralığı** bulunur.
- [Ton aralığı](/tr/docs/selections/tonal-range/) aracı **Parlak HDR · +1 pozun üstünde** seçeneğini sunar.
- Histogram SDR beyazını işaretler.
- [Dışa aktarma](/tr/docs/files/export/) HDR biçimleri sunar.

Web düzenleyicisinde 12 megapikselden büyük bir HDR çizimi açılamaz.

## Ekranda HDR

HDR gösterebilen bir ekranda, [Renk provası](/tr/docs/color-management/proof/)
panelinde **Kapalı** seçiliyken ve renk gamı uyarısı kapalıyken tuval ve Gezgin
HDR çizimi HDR olarak gösterir. Aksi hâlde bunlar ve renk denetimleri çizimin
SDR sürümünü gösterir. Web düzenleyicisinde HDR için HDR ekran bildiren bir
tarayıcı gerekir.

Alt çubuğun solundaki bir çip, hangi sürümü gördüğünüzü gösterir. Ayrıntılar
için çipi seçin.

| Çip | Gösterildiği durum |
| --- | --- |
| “HDR” | Çizim HDR olarak gösteriliyor. |
| “SDR önizlemesi” | Çizim, HDR gösteren bir ekranda SDR modunda. |
| “SDR gösteriliyor” | Ekran HDR göstermiyor. |

## SDR sürümü

Her HDR çiziminin kaydedilmiş bir SDR sürümü vardır. Bu sürüm şu durumlarda
kullanılır:

- HDR olmayan ekranlarda ve SDR modunda;
- katman küçük resimlerinde;
- baskı renk provasında;
- SDR dışa aktarımlarında ve HDR JPEG ile HDR AVIF dışa aktarımlarının SDR tabanında.

SDR sürümünü HDR piksellerini değiştirmeden ayarlayabilirsiniz.
Aşağıdakilerden birini yapın:

- **Görünüm > SDR renk provası** komutunu seçin (Windows'ta yoktur).
- Komut aramada **SDR renk provası** öğesini seçin.
- Renk provası panelinin üstünde **SDR** modunu seçin.

![Renk provası panelinin SDR sayfası: denge, kontrast, parlaklık ve renk yoğunluğu için kadran.](shot:color-management/proof-panel-sdr)

Paneldeki kadran dört değeri ayarlar. Kadranın ortasında çizim değil, sabit bir
örnek görsel bulunur. Kadranın bir bölümünün değerlerini sıfırlamak için o
bölüme çift tıklayın veya çift dokunun. Dördünü birden sıfırlamak için sağ
üstteki **SDR görünümünü sıfırla** düğmesini seçin. Kadran odaktayken ok
tuşları bir değeri adım adım değiştirir, **Shift** ise daha büyük adımlar atar.
**Escape** sürüklemeyi iptal eder. Her sürükleme tek bir geri alma adımıdır ve
çizimle birlikte kaydedilir.

### Denge

Kadranın ortasını sola veya sağa sürükleyin (−%100 ile +%100 arası). Sol taraf
geniş biçimleri, sağ taraf ince dokuyu öne çıkarır.

### Kontrast

Kadranın ortasını aşağı veya yukarı sürükleyin (%50 ile %200 arası).

### Parlaklık

Üst yayı sürükleyin (−%50 ile +%50 arası).

### Renk yoğunluğu

Alt yayı sürükleyin: %0'da beyaz, %100'de tam renk. Varsayılan değer %30'dur.

## SDR önizleme

Renk provası panelini açmadan HDR ile SDR sürümü arasında geçiş yapabilirsiniz.
Komut aramada **SDR önizleme** öğesini seçin veya
[Klavye kısayolları](/tr/docs/input/keyboard/) sayfasında bu komuta bir tuş
atayın.

**SDR önizleme** yalnızca HDR gösteren bir ekranda, baskı renk provası ve renk
gamı uyarısı kapalıyken bir HDR çiziminde çalışır.
