---
title: "Açma ve kaydetme"
description: "Çizimleri ve fotoğrafları açma, .capy dosyalarını kaydetme ve birden çok açık çizimle çalışma."
related: ["files/new", "files/export", "transform/move-transform", "start/undo"]
---

Bu sayfadaki komutlar **Dosya** menüsündedir. Eskiz'de bu menüyü başlık
çubuğundaki **Ana menü** üzerinden açın.

![Dosya menüsü.](shot:files/file-menu)

## Çizim veya fotoğraf açma

`.capy` çizimlerini ve OpenEXR, TIFF, PNG, WebP, BMP, JPEG, GIF, HEIF ve AVIF biçimindeki fotoğrafları açabilirsiniz. Her biri kendi sekmesinde açılır.

Aşağıdakilerden birini yapın:

- **Dosya > Aç…** seçin. Linux dışında birden fazla dosya seçebilirsiniz.
- **Ctrl+O** tuşlarına basın.
- Boyama ve Fotoğraf alanlarında Komutlar çubuğunda **Aç…** seçin.
- Web düzenleyicisinde veya Linux üzerinde dosyaları başlık çubuğundaki çizim adına veya sekmelere sürükleyin.
- Web düzenleyicisini uygulama olarak yüklediyseniz sisteminizden desteklenen bir dosyayı {appName} ile açın.

## Fotoğraflar

Fotoğraf, dosyanın adını taşıyan bir boya katmanıyla yeni bir çizim olarak açılır. Çizim, fotoğrafın orijinal boyutunu, renk profilini ve varsayılan olarak bit derinliğini korur. Çizimi kaydetmek bir `.capy` dosyası oluşturur ve kaynak görüntünün üzerine yazmaz.

- Hareketli bir GIF veya WebP dosyasının ilk karesi açılır.
- Fotoğrafın her kenarı en fazla 32768 piksel olabilir.
- CMYK fotoğraf yalnızca gömülü bir renk profiliyle açılır.
- HDR HEIF ve AVIF fotoğraflar açılamaz.

[Tercihler](/tr/docs/preferences/) içinde **Profilsiz RGB ve gri tonlama** ayarı
**Sor** olduğunda, renk profili olmayan bir fotoğraf **Görüntü yorumlamasını seçin** iletişim kutusunu açar.

## Görüntüleri katman olarak içe aktarma

Çizime yeni katmanlar olarak görüntüler ekleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Dosya > Görüntüyü katman olarak içe aktar…** komutunu seçin.
- **Ctrl+Shift+O** tuşlarına basın.
- Görüntüleri tuvalin veya **Katmanlar** panelindeki bir satırın üzerine sürükleyin.

Her görüntü seçili katmanın üzerinde dosya adını taşıyan bir [nesne katmanına](/tr/docs/layers/types/) dönüşür ve yerleştirme için [dönüştürme tutamaçları](/tr/docs/transform/move-transform/) gösterir. Tuvalden büyük görüntü sığacak şekilde küçültülür.

`.capy` dosyası içe aktarılamaz. Web düzenleyicisinde bir görüntü en fazla 512 MiB
olabilir.

## Kaydetme

Çizimi tüm katmanlarıyla bir `.capy` dosyası olarak kaydedebilirsiniz.

Aşağıdakilerden birini yapın:

- **Dosya > Kaydet** komutunu seçin.
- **Ctrl+S** tuşlarına basın.
- Boya ve Fotoğraf'ta Komutlar çubuğunda **Kaydet** düğmesini seçin.

İlk kaydetme konum sorar; sonraki kaydetmeler aynı dosyayı kullanır. Kaydedilen sekmede dosya adı ● işareti olmadan görünür.

Firefox ve Safari'de çizim, ancak **Dosyayı indir** iletişim kutusunda önce
**İndir**, sonra **Dosya kaydedildi** düğmesini seçtiğinizde kaydedilmiş sayılır.

![İptal, İndir ve Dosya kaydedildi düğmelerini içeren Dosyayı indir iletişim kutusu.](shot:files/download-file)

**Dosya > Farklı kaydet…** (**Ctrl+Shift+S**) her zaman konum sorar ve sonraki
kaydetmeler yeni dosyaya gider. Dosya, açtığınızdan veya kaydettiğinizden beri
diskte değiştiyse **Kaydet** de konum sorar.

Kırpma veya dönüştürme açıkken **Kaydet** kullanılamaz.

## .capy dosyasının sakladıkları

`.capy` dosyası her katmanı maskesi ve ayarlarıyla, gömülü nesne kaynak görüntülerini ve içe aktarılmış Kâğıt dokularını, filtreleri, kayıtlı seçim ve kılavuzları, renk uzayını, bit derinliğini, karıştırmayı ve fotoğrafın EXIF, XMP ve IPTC verilerini saklar. Geri alma geçmişini, görünümü veya etkin seçimi saklamaz.

## Yalnızca görüntülenebilen çizimler

Desteklenmeyen yeni bir biçimdeki veya hasarlı bir dosya dahil {appName} uygulamasının düzenleyemediği `.capy` dosyası sekme yerine iletişim kutusunda açılır. **Copy Original File…** dosyanın bir kopyasını, **Export Preview Image…** ise çizimin önizlemesini PNG olarak kaydeder.

## Çizim sekmeleri

![Başlık çubuğunda, biri kaydedilmemiş olarak işaretli üç çizim sekmesi.](shot:files/drawing-tabs)

Başlık çubuğunda her açık çizim için bir sekme bulunur. Yalnızca bir çizim
açıkken bunun yerine çizimin adı ve boyutu gösterilir.

Bir çizime geçmek için sekmesini seçin veya şu tuşları kullanın:

| Amaç | Web düzenleyicisi | Linux |
| --- | --- | --- |
| Önceki çizimi göstermek | **Alt+Page Up** | **Ctrl+Page Up** veya **Ctrl+Shift+Tab** |
| Sonraki çizimi göstermek | **Alt+Page Down** | **Ctrl+Page Down** veya **Ctrl+Tab** |
| Çizimler listesini açmak | **Ctrl+Alt+D** | **Ctrl+Shift+A** |

Web düzenleyicisinde sekmeleri yeniden sıralamak için bir sekmeyi yana sürükleyin.

Adın önündeki ●, kaydedilmemiş değişiklikleri belirtir. Dar bir başlık
çubuğunda sekmeler, Çizimler listesini açan tek bir düğmeye dönüşür.

Her sekme geri alma geçmişini, görünümü ve seçimi korur. Sekmeler çalışma alanının parçası değildir.

## Çizimler…

![Üç çizim içeren Çizimler listesi.](shot:files/drawings-list)

Tüm açık çizimleri tek bir listede görebilirsiniz.

Aşağıdakilerden birini yapın:

- **Dosya > Çizimler…** veya **Pencere > Çizimler…** komutunu seçin.
- Web düzenleyicisinde bir sekmeye sağ tıklayın.

Bir çizime geçmek için satırını seçin, yeniden sıralamak için satırın solundaki
tutamacı sürükleyin veya çizimi kapatmak için **×** düğmesini seçin. Sekme
sırasının listenin altında kendi **Sekme sırasını geri al** ve **Sekme sırasını yinele** düğmeleri vardır.

## Çizimi kapatma

Aşağıdakilerden birini yapın:

- **Dosya > Kapat** komutunu seçin.
- **Ctrl+W** tuşlarına basın. Web düzenleyicisinde **Ctrl+Alt+W** tuşlarına basın.
- Çizimin sekmesindeki **×** düğmesini seçin.

Çizimde kaydedilmemiş değişiklikler varsa “‘*ad*’ değişiklikleri kaydedilsin
mi?” sorusunu ve **İptal**, **Değişiklikleri at** ve **Kaydet** düğmelerini
içeren bir iletişim kutusu açılır.

Son çizimi kapattığınızda web düzenleyicisi yeni ve boş bir çizim açar. Linux'ta
pencere kapanır.

## Yeniden başlatmadan sonra yeniden açma

Kaydedilmiş olsun olmasın tüm açık çizimler, {appName}'ı bir sonraki
başlatışınızda geri alma geçmişi, görünümü, seçimi ve son dışa aktarımıyla
birlikte yeniden açılır. {appName}'tan çıkarken kaydetmeniz istenmez.

Web düzenleyicisinde sitenin verilerini temizlemek kaydedilmemiş çizimleri siler.

{appName} beklenmedik şekilde kapandıktan sonra yeniden açılan çizimlerin
adından sonra, siz kaydedene kadar “(kurtarıldı)” yazar.

## Yeni pencere

Windows, macOS, Linux ve iPad'de **Dosya > Yeni pencere** (**Ctrl+Shift+N**),
kendi çizimleri olan başka bir pencere açar.
