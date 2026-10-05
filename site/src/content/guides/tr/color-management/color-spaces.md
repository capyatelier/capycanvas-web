---
title: "Renk uzayı, bit derinliği ve karıştırma"
description: "Bir çizimin renk uzayını, bit derinliğini ve Karıştırma ayarını seçme ve bunları daha sonra Düzenle menüsünden değiştirme."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Bir çizimin renk uzayını, bit derinliğini ve Karıştırma ayarını çizimi
oluştururken seçebilir, daha sonra **Düzenle** menüsünden değiştirebilirsiniz.

## Renk uzayları

Bir çizimin çalışma renk uzayı **sRGB**, **Display P3**, **Adobe RGB (1998)**
veya **ProPhoto RGB** olur. ProPhoto RGB D50 beyaz noktasını, diğer üçü D65'i
kullanır.

ICC profilleri çalışma renk uzayı olamaz. Bunları
[baskı renk provası](/tr/docs/color-management/proof/) ve
[dışa aktarma](/tr/docs/files/export/) için kullanabilirsiniz.

## Bit derinlikleri

Bir çizimin bit derinliği **8 bit SDR**, **16 bit SDR**, **16 bit kayan noktalı
HDR** veya **32 bit kayan noktalı HDR** olur. Kayan noktalı bir derinlik çizimi
[HDR çizimi](/tr/docs/color-management/hdr/) yapar. HDR çizimi, 1,0 değerinin
203 cd/m² düzeyindeki SDR beyazı olduğu doğrusal RGB olarak saklanır.

## Yeni çizim için seçme

**Dosya > Yeni…** (**Ctrl+N**) komutunu seçin ve **Renk uzayı**, **Bit
derinliği** ile **Karıştırma** ayarlarını yapın ya da bir **Hazır ayar** seçin:

| Hazır ayar | Renk uzayı | Bit derinliği | Karıştırma |
| --- | --- | --- | --- |
| **Standart çizim** | sRGB | 8 bit SDR | Algısal |
| **Geniş renk** | Display P3 | 8 bit SDR | Algısal |
| **Fotoğraf düzenleme** | ProPhoto RGB | 16 bit SDR | Algısal |
| **HDR çizimi** | sRGB | 16 bit kayan noktalı HDR | Doğrusal ışık |

Kayan noktalı derinlikte **Karıştırma**, Doğrusal ışık olarak sabittir.
Karıştırma dâhil seçimlerinizi yeni çizimlerin varsayılanı yapmak için **Bu
ayarları yeni çizimler için kullan** seçeneğini açın.

![Yeni çizim iletişim kutusu: Renk uzayı Display P3, Bit derinliği, Karıştırma ve özet satırı.](shot:color-management/new-dialog-color)

## Tercihlerdeki varsayılanlar

**Düzenle > Tercihler** komutunu seçin ve **Renk** sayfasını açın:

- **Yeni çizimler** altında gelecekteki çizimlerin **Renk uzayı**, **Bit derinliği** ve **Arka plan** ayarlarını yapın. Açık çizimler değişmez.
- **Fotoğraf açma** altında **Düzenleme hassasiyeti** (**Kaynak derinliği** veya **16 bit**) ve **Profilsiz RGB ve gri tonlama** (**sRGB varsay** veya **Sor**) ayarlarını yapın. **Sor** seçiliyken profilsiz bir fotoğraf açmak **Görüntü yorumlamasını seçin** penceresini gösterir. Profilli fotoğraflar gömülü profillerini korur.
- [Renk profili kitaplığını](/tr/docs/color-management/proof/) açmak için **Profilleri yönet…** düğmesini seçin.

Tercihler'de Karıştırma ayarı yoktur.

## Profil ata

Çizimin RGB sayılarını koruyup başka bir çalışma renk uzayında yorumlamak için
**Düzenle > Profil ata…** komutunu seçin. Renk uzayını **Renk uzayı** altında
seçin; burada Adobe RGB (1998), **Adobe RGB** olarak listelenir. Fotoğraf
katmanları [özgün fotoğraflarının](/tr/docs/layers/types/) kaynak profilini
korur.

## Renk uzayını dönüştür

Renklerin başka bir çalışma renk uzayında, o uzayın gamı içinde görünümlerini
korumaları için RGB sayılarını değiştirmek üzere **Düzenle > Renk uzayını
dönüştür…** komutunu seçin.

**Düzleştirilmiş kopyayı kaydet** seçiliyken **Uygula**, **Kopyayı kaydet…**
olur. Kopyanın tek bir katmanı vardır; boyutu ve bit derinliği aynıdır. Dosya
adı `.capy` ile bitmelidir ve açık çizimin dosyası olamaz.

![Renk uzayını dönüştür iletişim kutusu: Önce ve Sonra karşılaştırması ve gam iletisi.](shot:color-management/convert-dialog)

### Renk uzayı

Dönüştürülecek çalışma renk uzayı. Başlangıçta geçerli renk uzayı seçilidir.

### Sonuç

**Düzenlenebilir katmanlar** (varsayılan) her katmanı yerinde dönüştürür.
**Düzleştirilmiş kopyayı kaydet**, dönüştürülmüş ve düzleştirilmiş bir kopyayı
yeni bir `.capy` dosyası olarak kaydeder ve açık çizimi değiştirmez.

### Renk dönüştürme amacı

**Göreli kolorimetrik** (varsayılan), **Algısal**, **Doygunluk** veya **Mutlak
kolorimetrik**. Siyah nokta telafisi her zaman kapalıdır.

## Bit derinliğini değiştir

Saklanan hassasiyeti değiştirmek için **Düzenle > Bit derinliğini değiştir…**
komutunu seçin. Renk uzayı değişmez.

Kayan noktalı bir derinliğe geçmek çizimi HDR yapar ve aynı adımda Karıştırma'yı
Doğrusal ışık olarak ayarlar. Tam sayı derinliğe geri dönüldüğünde,
[Karıştırma](#karıştırma) ayarını değiştirene kadar Doğrusal ışık korunur.
Derinliği düşürmek renkleri kırpabilir.

### Bit derinliği

Yeni bit derinliği. Başlangıçta geçerli derinlik seçilidir.

### Ton dağılımı

**Yok** (varsayılan) veya **Rastgele (8 bit)**. Ton dağılımı yalnızca hedef
8 bit SDR olduğunda uygulanır.

## Önizleme ve uygulama

Profil ata, Renk uzayını dönüştür veya Bit derinliğini değiştir işlemini
uygulamak için:

1. İletişim kutusundaki alanları ayarlayın.
2. **Sonucun tamamını önizle** düğmesini seçin.
3. **Önce** ve **Sonra** görüntülerini karşılaştırın.
4. **Uygula** (veya **Kopyayı kaydet…**) düğmesini seçin.

Önizleme hazır olana kadar **Uygula** kullanılamaz ve bir alanı değiştirmek
önizlemeyi atar. Herhangi bir renk kırpılırsa durum satırında “Bazı renkler
hedef renk gamını aşıyor. Uygulamadan önce sonucu karşılaştırın.” yazar.

Uygulama tek bir geri alma adımıdır. Geri al ve Yinele, **Renk değişikliğini
geri al** ve **Renk değişikliğini yinele** iletişim kutularını açar. Bu
iletişim kutuları değişikliği başka bir giriş beklemeden uygular ve yalnızca
**İptal** seçeneğini sunar.

## Karıştırma

Katmanları çizimin kodlanmış değerleri üzerinde veya doğrusal ışıkta
birleştirebilirsiniz. Aşağıdakilerden birini yapın:

- **Düzenle > Karıştırma > Algısal karıştırma** veya **Düzenle > Karıştırma > Doğrusal ışıkta karıştırma** komutunu seçin.
- Yeni çizim iletişim kutusunda **Karıştırma** ayarını **Algısal** veya **Doğrusal ışık** yapın.

![Karıştırma alt menüsü açık ve Algısal karıştırma işaretli Düzenle menüsü.](shot:color-management/edit-blending-menu)

Boyanmış pikseller değerlerini korur. Karıştırma şunları değiştirir:

- katmanların nasıl birleştiğini;
- kuru fırçaların rengi mevcut boyanın üzerine nasıl sürdüğünü;
- Gauss bulanıklığı, Keskinleştirme maskesi, Yüksek geçiren, Kenarları koruyarak düzleştirme ve Yumuşak odak filtrelerini (Hareket bulanıklığı, Vinyet ve Işıma her zaman doğrusal ışıkta çalışır);
- **Yeni açıklaştırma ve koyulaştırma katmanı** komutunun nötr grisini;
- Algısal gerektiren [Frekans ayrımı…](/tr/docs/retouch/dodge-burn/) komutunu.

Karıştırma'yı değiştirmek tek bir geri alma adımıdır. HDR çizimler her zaman
Doğrusal ışık kullanır ve iki menü öğesi de kullanılamaz. Yeni çizimler ve
görüntü dosyalarından açılan fotoğraflar Algısal ile başlar. Kayan noktalı
derinlikte açılan fotoğraflar ve Karıştırma ayarı eklenmeden önce kaydedilmiş
`.capy` dosyaları Doğrusal ışık kullanır.

## Belge özellikleri

Çizimin **Tuval boyutu**, **Çalışma renk uzayı**, **Bit derinliği**,
**Karıştırma** ve **Çözünürlük üst verileri** bilgilerini görmek için **Dosya >
Belge özellikleri…** komutunu seçin. HDR çizimlerde **HDR referans beyazı** da
gösterilir. Çizimdeki her özgün fotoğraf, kaynak profilini gösteren bir satır
ekler. Bu iletişim kutusunda hiçbir şeyi değiştiremezsiniz.
