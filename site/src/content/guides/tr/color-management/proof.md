---
title: "Renk provası"
description: "Renk provası panelinde baskının ekran provası, renk gamı uyarısı ve alt çubuktaki ekran çipi."
related: ["color-management/hdr", "color-management/color-spaces", "files/export", "start/canvas"]
---

Bir çizimin baskıda nasıl görüneceğini, çizimi değiştirmeden **Renk provası**
panelinde görebilirsiniz.

## Renk provası paneli

Aşağıdakilerden birini yapın:

- **Pencere > Renk provası** komutunu seçin.
- Komut aramada **Renk provası paneli** öğesini seçin.
- Boya ve Fotoğraf'ta **Gezgin** sekmesinin yanındaki **Renk provası** sekmesini seçin.

Panelin üstünde bir mod seçin:

- **Kapalı** çizimi normal gösterir.
- **SDR**, bir [HDR çiziminin](/tr/docs/color-management/hdr/) SDR sürümünü gösterir. Bu mod yalnızca HDR çizimlerde bulunur.
- **Baskı**, bir ICC profiliyle baskıyı benzetir.

Renk provası tuvalde ve Gezgin'de görünür; dışa aktarımlarda ve Histogram'da
hiçbir zaman görünmez. Mod seçmek çizimi değişmiş olarak işaretlemez. Yeniden
açılan bir çizim, renk provası kapalı olarak başlar ancak baskı profilini korur.

## Renk provasını açma ve kapatma

Aşağıdakilerden birini yapın:

- **Görünüm > Renk provası** komutunu seçin.
- **Ctrl+Alt+P** tuşlarına basın. Photoshop tarzı ve Krita tarzı tuş eşlemeleri **Ctrl+Y** tuşlarını da kullanır.

Renk provası en son kullandığınız modda açılır (ilk seferde HDR çizimler için
SDR, SDR çizimler için Baskı). Renk provası paneli açılır ve **Görünüm > Renk
provası** öğesinin yanında onay işareti görünür.

[Klavye kısayolları](/tr/docs/input/keyboard/) sayfasında komut **Renkleri prova
et** olarak geçer. Bu komuta, yalnızca basılı tuttuğunuz sürece prova yapan bir
tuş atayabilirsiniz.

## Baskı renk provası

RGB, CMYK veya gri tonlamalı bir ICC profiliyle baskıyı benzetebilirsiniz.
**Baskı** modunu seçin ve bir **Profil** seçin. Profil seçene kadar tuvalde renk
provası yapılmaz.

Baskı renk provası açıkken alt çubukta “Renk provası: *profil*” yazar. Prova
başarısız olursa “Renk provası kullanılamıyor” yazar ve nedeni araç ipucunda yer
alır.

Profil ve seçenekler çizime kaydedilir. Profil seçmek çizimi değişmiş olarak
işaretler ve tek bir geri alma adımıdır. Geri alma, profili kaldırır ve renk
provasını kapatır. `.capy` dosyasına yalnızca etkin baskı profili kaydedilir.
Çizimde kayıtlı profili değiştirdiğinizde eski profil önce **Kaydedilen
profiller** listesine eklenir. HDR çizimlerin provası SDR sürümlerinden yapılır.

![Baskı sayfasında Renk provası paneli: profil olarak Adobe RGB (1998) seçili.](shot:color-management/proof-panel-print)

### Profil

Listede çizimde kayıtlı **Belge profili**, kitaplıktaki **Kaydedilen profiller**
ve **Standart renk uzayları** bulunur. **Profil ekle…** kitaplığa bir `.icc`
veya `.icm` dosyası ekler ve onu seçer. **Profilleri yönet…** ise Renk profili
kitaplığını açar.

### Benzetim

**Renkler**, **Siyah mürekkep** (varsayılan) veya **Kâğıt ve mürekkep**.
**Kâğıt ve mürekkep** siyah mürekkebi de benzetir.

### Amaç

**Göreli** (varsayılan), **Algısal**, **Doygunluk** veya **Mutlak**.

### Siyah nokta telafisi

Varsayılan olarak açıktır. **Mutlak** ile kullanılamaz.

### Renk gamı uyarısı

Aşağıda anlatılan **Renk gamı uyarısı** komutuyla aynı anahtardır.

## Renk profili kitaplığı

**Renk profili kitaplığı** penceresini açmak için **Profil** listesinde veya
[Tercihler](/tr/docs/preferences/) içindeki **Renk** sayfasında **Profilleri
yönet…** öğesini seçin.

- **ICC profilini içe aktar…**, en fazla 16 MiB boyutunda bir `.icc` veya `.icm` dosyası ekler.
- **Profil menülerinde göster** ve **Profil menülerinden gizle**, **Profil** listesinde hangi profillerin sunulacağını belirler.
- **Kaldır**, bir profili kitaplıktan çıkarır.

Kitaplıkta toplam en fazla 128 profil ve 64 MiB bulunabilir.

## Renk gamı uyarısı

Baskı profilinin üretemediği renkleri tuvalde orta gri olarak gösterebilirsiniz.
Aşağıdakilerden birini yapın:

- Renk provası panelinin Baskı sayfasında **Renk gamı uyarısı** seçeneğini açın.
- **Ctrl+Shift+Y** tuşlarına basın.
- Komut aramada **Renk gamı uyarısı** öğesini seçin.

Alt çubukta “Renk provası: *profil* · Renk gamı uyarısı” yazar. Baskı benzetimi
kapalıyken “Renk gamı: *profil*” yazar.

Renk gamı uyarısı yalnızca bir baskı profili seçtikten sonra kullanılabilir.
**Kapalı** veya **SDR** modunu seçmek ya da **Görünüm > Renk provası** öğesini
kapatmak uyarıyı kapatır. Uyarı açıkken HDR çizimler SDR sürümlerini gösterir.

## Ekran çipi

Alt çubuğun solundaki bir çip, ekran çizimi veya renk provasını doğru
gösteremediğinde uyarır. Ayrıntılarını açmak için çipi seçin. Ayrıntıları
kapatmak için çipi yeniden seçin veya **Escape** tuşuna basın.

| Çip | Gösterildiği durum |
| --- | --- |
| “Renkler kırpılıyor” | Ekran, çizimin veya renk provasının görünen bazı renklerini gösteremiyor. |
| “Baskıyla eşleşmeyebilir” | Baskı renk provası veya renk gamı uyarısı açık ve Capy Canvas ekranın renkleri nasıl gösterdiğini belirleyemiyor. |

HDR çizimde çip, ekranın HDR gösterip göstermediğini de bildirir (bkz.
[HDR](/tr/docs/color-management/hdr/)).

![Alt çubukta Renkler kırpılıyor çipi: ayrıntıları ve Bu renkleri vurgula.](shot:color-management/screen-chip)

Kırpılan renkleri tuvalde maviye boyamak için ayrıntılarda **Bu renkleri
vurgula** seçeneğini açın. Vurgu hiçbir zaman kaydedilmez.

Eskiz alt çubuğu varsayılan olarak gizler. Alt çubuğu göstermek için **Pencere >
Başlık çubuğunu özelleştir…** komutunu seçin ve **Alt çubuğu göster** seçeneğini
açın.
