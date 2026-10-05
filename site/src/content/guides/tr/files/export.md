---
title: "Görüntüleri dışa aktarma"
description: "Görüntüyü dışa aktar iletişim kutusu ve Yeniden Dışa Aktar ile çizimin düzleştirilmiş bir görüntü kopyasını dışa aktarma."
related: ["files/open-save", "color-management/hdr", "color-management/color-spaces"]
---

Çizimin düzleştirilmiş bir görüntü kopyasını dışa aktarabilirsiniz. Dışa aktarma
`.capy` çizimini değiştirmez ve kaydetme sayılmaz.

## Görüntü dışa aktarma

Aşağıdakilerden birini yapın:

- **Dosya > Dışa aktar…** komutunu seçin.
- **Ctrl+Shift+E** tuşlarına basın.

**Görüntüyü dışa aktar** iletişim kutusu **Web / paylaşım** hedefiyle açılır.
**Dosya seç…** düğmesini seçin ve bir konum belirleyin. Önerilen ad, çizimin adı
ile biçimin uzantısından oluşur, örneğin “Adsız.png”. Firefox ve Safari'de bunun
yerine **Dosyayı indir** iletişim kutusu açılır (bkz.
[Açma ve kaydetme](/tr/docs/files/open-save/)).

Dosya adı biçimin uzantısıyla bitmelidir. Kırpma veya dönüştürme açıkken
**Dışa aktar…** kullanılamaz.

## Ayarlar

![Hedef ayarı Web / paylaşım olan Görüntüyü dışa aktar iletişim kutusu.](shot:files/export-dialog)

Bazı ayarlar yalnızca belirli biçimlerde görünür.

### Hedef

Diğer tüm ayarları tek seferde belirler. Kayıtlı dışa aktarma hazır ayarları şu
yerleşik hedeflerden sonra listelenir:

- **Web / paylaşım**: özgün boyutta 8 bit sRGB PNG.
- **Geniş renkli görüntü**: aynısı, Display P3 olarak.
- **İleri düzenleme**: çizimin renk uzayında 16 bit TIFF.
- **Özel**: **Web / paylaşım** ayarlarıyla başlar.

### Dinamik aralık

SDR çizimde **SDR**, HDR çizimde ise HDR biçimleri arasında bir seçim (aşağıdaki
HDR dışa aktarma bölümüne bakın).

### Aralık dışındaki HDR renklerini kırp

HDR PNG, HDR JPEG ve HDR AVIF aralığının dışındaki renkleri kırpar. Yalnızca bu
biçimlerde görünür.

### Biçim

**PNG görüntüsü**, **TIFF görüntüsü**, **JPEG görüntüsü** veya **WebP ·
kayıpsız** (aşağıdaki Biçim sınırları bölümüne bakın).

### Çıktı profili

**sRGB**, **Display P3**, **Adobe RGB (1998)** veya **ProPhoto RGB**; ayrıca
kendi gömülü profili olan her fotoğraf katmanı için “Özgün: *ad*”.

### Bit derinliği

**8 bit** veya **16 bit**.

### Saydamlık

**Koru**, **Beyaz arka plan** veya **Siyah arka plan**.

### Renk dönüştürme amacı

**Göreli kolorimetrik** (varsayılan), **Algısal**, **Doygunluk** veya **Mutlak
kolorimetrik**.

### Ton dağılımı

**Yok** veya **Rastgele (8 bit çıktı)**.

### Kalite

1 ile 100 arasında sıkıştırma kalitesi, varsayılanı 90. JPEG, HDR JPEG ve HDR
AVIF için görünür.

### Piksel boyutu

**Özgün boyut** veya **Sınırlara sığdır**. **Sınırlara sığdır**, **En büyük
genişlik (px)** ve **En büyük yükseklik (px)** alanlarını ekler ve görüntüyü
oranlarını değiştirmeden bu sınırların içine sığacak şekilde küçültür.

### Çözünürlük üst verileri

**Özgünü koru**, **İnç başına piksel** veya **Atla**. **İnç başına piksel**,
1 ile 65535 arasında, varsayılanı 300 olan bir alan ekler.

### Üst veriler

**Tümü**, **Telif hakkı ve iletişim** veya **Yok**. **Tümü** seçildiğinde
**Konumu kaldır** varsayılan olarak açıktır. Bu satırlar yalnızca kamera veya
telif hakkı bilgileri içeren bir fotoğraftan açılan çizimlerde görünür.

### ICC profilini içe aktar… ve Kaydedilen profiller…

**ICC profilini içe aktar…**, en fazla 16 MiB boyutunda bir `.icc` veya `.icm`
dosyasını **Çıktı profili** listesine ekler. **Kaydedilen profiller…**, **Renk
profili kitaplığı** penceresini açar.

### Hazır ayar adı ve hazır ayar düğmeleri

**Hazır ayarı kaydet**, ayarları **Hazır ayar adı** altında yeni bir hedef
olarak kaydeder. **Hazır ayarı güncelle** ve **Hazır ayarı sil**, seçili kayıtlı
hazır ayarı değiştirir veya kaldırır. **Hedefi sıfırla**, yerleşik bir hedefin
ayarlarını geri yükler.

### Çıktıyı önizle

Dışa aktarılan görüntüyü çizimin yanında **Çizim** ve **Çıktı** başlıklarıyla
gösterir. Renkler çıktının renk gamının dışına düşerse bir uyarı çıkar. Herhangi
bir ayarı değiştirmek önizlemeyi temizler.

### Dosya seç…

Görüntünün nereye kaydedileceğini sorar.

## Biçim sınırları

- JPEG ve WebP yalnızca 8 bit olabilir.
- JPEG saydamlığı koruyamaz.
- WebP her kenarda en fazla 16.384 piksele izin verir.
- Gri tonlamalı bir çıktı profiliyle WebP kullanılamaz.
- CMYK çıktı profiliyle yalnızca TIFF ve JPEG kullanılabilir ve saydamlık korunmaz.

Diğer ayarlarla uyuşmayan seçenekler soluk görünür.

## Dışa aktarma hazır ayarları

Dışa aktarmadan sonra yerleşik bir hedef, kullandığınız ayarları korur. Kayıtlı
bir hazır ayarla dışa aktardığınızda ayarlar **Özel** altında tutulur. Hazır
ayarın kendisi yalnızca **Hazır ayarı güncelle** ile değişir.

Hazır ayar adı en fazla 80 karakter olabilir ve en fazla 64 hazır ayar
saklayabilirsiniz. Hazır ayarlar tüm çizimlerde geçerlidir.

## HDR dışa aktarma

![Çıktıyı önizle'den sonra, HDR JPEG · kazanç haritası seçili bir HDR çizimin Görüntüyü dışa aktar iletişim kutusu.](shot:files/export-hdr-preview)

16 bit veya 32 bit kayan noktalı bir çizimde **Dinamik aralık** şu seçenekleri
sunar:

| Seçenek | Yazılan dosya |
| --- | --- |
| **SDR yorumlaması** | SDR ayarlarıyla, çizimin SDR sürümü |
| **HDR JPEG · kazanç haritası** | Kazanç haritalı bir `.jpg` |
| **HDR AVIF · saydamlıklı kazanç haritası** | Kazanç haritalı ve saydamlıklı bir `.avif` |
| **HDR PNG · BT.2020 PQ** | BT.2020 PQ ile kodlanmış, saydamlıklı bir `.png` |
| **OpenEXR · 32 bit kayan noktalı** | Çizimin renk uzayında, saydamlıklı bir `.exr` |

**SDR yorumlaması**, [SDR renk provası](/tr/docs/color-management/hdr/) ile
ayarlanan SDR sürümünü kullanır. OpenEXR kamera veya telif hakkı bilgilerini
saklamaz. HDR çizimde **İleri düzenleme**, **İleri düzenleme (SDR)** adını alır
ve OpenEXR kullanır.

HDR JPEG ve HDR AVIF için **Çıktıyı önizle**, **HDR yeniden oluşturma · SDR
önizlemesi** ve **Kodlanmış SDR tabanı** seçeneklerini içeren **Yorumlamayı
önizle** ayarını ekler.

Önizleme HDR PNG, JPEG veya AVIF aralığının dışında renkler bulursa, **Aralık
dışındaki HDR renklerini kırp** seçeneğini açana veya OpenEXR'ı seçene kadar
**Dosya seç…** kullanılamaz.

## Yeniden Dışa Aktar

**Dosya > Yeniden Dışa Aktar**, çizimin son dışa aktarımını iletişim kutusunu
açmadan aynı ayarlarla ve aynı dosyaya tekrarlar. Çizimi bir kez dışa aktarana
kadar kullanılamaz.

Her çizim kendi son dışa aktarımını yeniden başlatmadan sonra da korur. Firefox
ve Safari'de **Yeniden Dışa Aktar**, **Dosyayı indir** iletişim kutusunu
gösterir.

## Diğer platformlar

Linux'ta ayarlar **Boyut**, **Renk ve saydamlık** ve **Hazır ayar** sayfalarına
bölünür ve bazı etiketler farklıdır. iPad ve macOS iletişim kutuları da kendi
etiketlerini kullanır.
