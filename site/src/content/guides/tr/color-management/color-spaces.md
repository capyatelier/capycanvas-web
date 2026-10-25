---
title: "Renk uzayı, bit derinliği ve karıştırma"
description: "Bir çizimin renk uzayını, bit derinliğini ve Karıştırma ayarını seçme ve bunları daha sonra Görüntü menüsünden değiştirme."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Bir çizimin renk uzayını, bit derinliğini ve Karıştırma ayarını çizimi
oluştururken seçebilir, daha sonra **Görüntü** menüsünden değiştirebilirsiniz.

## Renk uzayları

Bir çizimin çalışma renk uzayı **sRGB**, **Display P3**, **Adobe RGB (1998)**
veya **ProPhoto RGB** olur. ProPhoto RGB D50 beyaz noktasını, diğer üçü D65'i
kullanır.

ICC profilleri çalışma renk uzayı olamaz. Bunları
[baskı renk provası](/tr/docs/color-management/proof/) ve
[dışa aktarma](/tr/docs/files/export/) için kullanabilirsiniz.

## Bit derinlikleri

Bir çizimin bit derinliği **8 bit SDR**, **16 bit SDR**, **16 bit kayan noktalı HDR** veya **32 bit kayan noktalı HDR** olur. Kayan noktalı bir derinlik çizimi
[HDR çizimi](/tr/docs/color-management/hdr/) yapar. HDR çizimi, 1,0 değerinin
203 cd/m² düzeyindeki SDR beyazı olduğu doğrusal RGB olarak saklanır.

## Yeni çizim için seçme

**Dosya > Yeni…** (**Ctrl+N**) komutunu seçin ve **Renk** altında **Renk uzayı**, **Bit derinliği** ile **Karıştırma** ayarlarını yapın. **Hazır ayarlar** içindeki bir hazır ayar bunları yaprak ve Kâğıtla birlikte ayarlar. İletişim kutusu, oluşturduğunuz son çizimin seçimlerini korur.

Kayan noktalı derinlikte **Karıştırma**, Doğrusal ışık olarak sabittir.

![Yeni çizim iletişim kutusu: Renk uzayı Display P3, Bit derinliği ve Karıştırma Renk altında.](shot:color-management/new-dialog-color)

## Tercihlerdeki varsayılanlar

**Düzenle > Tercihler** komutunu seçin ve **Renk** sayfasını açın:

- **Fotoğraf açma** altında **Düzenleme hassasiyeti** (**Kaynak derinliği** veya **16 bit**) ve **Profilsiz RGB ve gri tonlama** (**sRGB varsay** veya **Sor**) ayarlarını yapın. **Sor** seçiliyken profilsiz bir fotoğraf açmak **Görüntü yorumlamasını seçin** penceresini gösterir. Profilli fotoğraflar gömülü profillerini korur.
- [Renk profili kitaplığını](/tr/docs/color-management/proof/) açmak için **Profilleri yönet…** düğmesini seçin.

## Profil ata

Çizimin RGB sayılarını koruyup başka bir çalışma renk uzayında yorumlamak için
**Görüntü > Renk Yönetimi > Profil ata…** komutunu seçin. Renk uzayını **Renk uzayı** altında
seçin; burada Adobe RGB (1998), **Adobe RGB** olarak listelenir. Nesne
katmanları [özgün fotoğraflarının](/tr/docs/layers/types/) kaynak profilini
korur.

## Renk uzayını dönüştür

Renklerin başka bir çalışma renk uzayında, o uzayın gamı içinde görünümlerini
korumaları için RGB sayılarını değiştirmek üzere **Görüntü > Renk Yönetimi > Renk uzayını dönüştür…** komutunu seçin.

**Düzleştirilmiş kopyayı kaydet** seçildiğinde **Uygula**, **Kopya oluştur** olur. Kopya, aynı boyut ve bit derinliğinde, tek katmanlı yeni bir çizim olarak açılır. `.capy` dosyası olarak kaydetmek için **Dosya > Kaydet** komutunu seçin.

![Renk uzayını dönüştür iletişim kutusu: Önce ve Sonra karşılaştırması ve gam iletisi.](shot:color-management/convert-dialog)

### Renk uzayı

Dönüştürülecek çalışma renk uzayı. Başlangıçta geçerli renk uzayı seçilidir.

### Sonuç

**Düzenlenebilir katmanlar** (varsayılan) her katmanı yerinde dönüştürür. **Düzleştirilmiş kopyayı kaydet** dönüştürülmüş, düzleştirilmiş bir kopyayı yeni bir çizim olarak açar ve orijinali değiştirmeden bırakır.

### Renk dönüştürme amacı

**Göreli kolorimetrik** (varsayılan), **Algısal**, **Doygunluk** veya **Mutlak kolorimetrik**. Siyah nokta telafisi her zaman kapalıdır.

## Bit derinliğini değiştir

Saklanan hassasiyeti değiştirmek için **Görüntü > Renk Yönetimi > Bit derinliğini değiştir…**
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
2. Önizleme göründüğünde **Önce** ile **Sonra** arasındaki farkı karşılaştırın.
3. **Uygula** veya **Kopya oluştur** seçeneğini seçin.

Önizleme hazır olana kadar **Uygula** kullanılamaz durumda kalır. Bir alanı değiştirmek karşılaştırmayı günceller. Durum satırı, kırpılan tüm renkleri bildirir.

Uygulama tek bir geri alma adımıdır. Geri al ve Yinele, **Renk değişikliğini geri al** ve **Renk değişikliğini yinele** iletişim kutularını açar. Bu
iletişim kutuları değişikliği başka bir giriş beklemeden uygular ve yalnızca
**İptal** seçeneğini sunar.

## Karıştırma

Katmanları çizimin kodlanmış değerleri üzerinde veya doğrusal ışıkta
birleştirebilirsiniz. Aşağıdakilerden birini yapın:

- **Görüntü > Karıştırma > Algısal karıştırma** veya **Görüntü > Karıştırma > Doğrusal ışıkta karıştırma** komutunu seçin.
- Yeni çizim iletişim kutusunda **Karıştırma** ayarını **Algısal** veya **Doğrusal ışık** yapın.

![Algısal karıştırma işaretli Karıştırma alt menüsü.](shot:color-management/edit-blending-menu)

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
**Karıştırma** ve **Çözünürlük üst verileri** bilgilerini görmek için **Dosya > Belge özellikleri…** komutunu seçin. HDR çizimlerde **HDR referans beyazı** da
gösterilir. Çizimdeki her özgün fotoğraf, kaynak profilini gösteren bir satır
ekler. Bu iletişim kutusunda hiçbir şeyi değiştiremezsiniz.
