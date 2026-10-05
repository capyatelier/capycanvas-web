---
title: "Yeni çizimler"
description: "Yeni çizim iletişim kutusu ve yeni bir çizimin başlangıçtaki katmanları."
related: ["color-management/color-spaces", "layers/types", "files/open-save"]
---

**Yeni çizim** iletişim kutusunda yeni bir çizim başlatabilirsiniz. Yeni çizim
kendi sekmesinde açılır ve geçerli çizim açık kalır.

## Yeni çizim iletişim kutusunu açma

Aşağıdakilerden birini yapın:

- **Dosya > Yeni…** komutunu seçin.
- **Ctrl+N** tuşlarına basın (web düzenleyicisinde çalışmaz).
- Boya ve Fotoğraf'ta Komutlar çubuğunda **Yeni…** düğmesini seçin.

Aşağıdaki ayarları seçin, ardından **Oluştur** düğmesini seçin.

Kırpma veya dönüştürme açıkken **Yeni…** kullanılamaz. Çok fazla çizim verisi
açıksa yeni çizim, bazı çizimleri kapatana kadar açılmaz.

## Ayarlar

![Standart çizim hazır ayarının seçili olduğu Yeni çizim iletişim kutusu.](shot:files/new-dialog)

### Hazır ayar

Tüm alanları yerleşik bir hazır ayardan veya kaydettiğiniz bir hazır ayardan
doldurur. Sonradan bir alanı değiştirmek **Hazır ayar** değerini **Özel** yapar.

Tüm yerleşik hazır ayarlar beyaz arka planlı ve 2048 × 1536 pikseldir.

| Hazır ayar | Renk uzayı | Bit derinliği | Karıştırma |
| --- | --- | --- | --- |
| **Standart çizim** | sRGB | 8 bit SDR | Algısal |
| **Geniş renk** | Display P3 | 8 bit SDR | Algısal |
| **Fotoğraf düzenleme** | ProPhoto RGB | 16 bit SDR | Algısal |
| **HDR çizimi** | sRGB | 16 bit kayan noktalı HDR | Doğrusal ışık |

### Kaydedilen hazır ayarı kaldır

Seçili kayıtlı hazır ayarı siler. Yerleşik hazır ayarlar kaldırılamaz.

### Genişlik (px) ve Yükseklik (px)

1 ile 8192 piksel arası. Alanlar “160*2” gibi işlemleri kabul eder.

### Renk uzayı

**sRGB**, **Display P3**, **Adobe RGB (1998)** veya **ProPhoto RGB** (bkz.
[Renk uzayı, bit derinliği ve karıştırma](/tr/docs/color-management/color-spaces/)).
**ProPhoto RGB** ve **8 bit SDR** seçildiğinde iletişim kutusu 16 bit SDR önerir.

### Bit derinliği

**8 bit SDR**, **16 bit SDR**, **16 bit kayan noktalı HDR** veya **32 bit kayan
noktalı HDR**. Kayan noktalı bir bit derinliği HDR çizimi oluşturur.

### Karıştırma

**Algısal** veya **Doğrusal ışık**. Kayan noktalı bir bit derinliğinde
**Karıştırma**, **Doğrusal ışık** olarak sabittir.

### Arka plan

**Beyaz** veya **Saydam**. **Saydam**, **Kâğıt** katmanını gizler.

### Hazır ayar adı

**Oluştur** düğmesini seçtiğinizde ayarları bu adla bir hazır ayar olarak
kaydeder. Ad en fazla 64 karakter olabilir ve en fazla 64 hazır ayar
saklayabilirsiniz.

### Bu ayarları yeni çizimler için kullan

Açıkken iletişim kutusu bir sonraki sefer bu ayarlarla açılır. Renk uzayı, bit
derinliği ve arka plan, [Tercihler](/tr/docs/preferences/) içindeki **Yeni
çizimler** ayarları da olur.

## İlk katmanlar

![Yeni bir çizimin Katmanlar paneli: Kâğıt'ın üstünde Geçerli mürekkep.](shot:files/new-layers)

Yeni bir çizimde iki katman bulunur. Beyaz bir dolgu katmanı olan **Kâğıt**
katmanının üstündeki boş boya katmanı **Geçerli mürekkep** seçilidir (bkz.
[Katman türleri](/tr/docs/layers/types/)). Sonradan eklediğiniz katmanlar
“Katman” ve bir sayıyla adlandırılır.

## Diğer platformlar

iPad, macOS ve Android'de **Hazır ayar adı** ve **Bu ayarları yeni çizimler
için kullan** yerine bir **Hazır ayarı kaydet…** alanı ve bir **Varsayılanları
kullan** seçeneği bulunur. iPad ve macOS'te **Kaydedilen hazır ayarı kaldır**
düğmesi yoktur.

Linux'ta **Hazır ayarı kaydet…** ad için ayrı bir iletişim kutusu açar. **Renk
uzayı**, **Bit derinliği** ve **Karıştırma** ise **Renk** altında gruplanır.
