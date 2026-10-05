---
title: "Paletler"
description: "Renkleri paletlere kaydetme ve Paletler panelinde kayıtlı ve son kullanılan renklerle boyama."
related: ["color/color-panel", "color/edit-color", "color/eyedropper"]
---

Renkleri paletlere kaydedebilir ve **Paletler** panelinden bu renklerle
boyayabilirsiniz. Paletler ve son renkler tüm çalışma alanlarında aynıdır.

![Paletler paneli: üstte son renkler, etkin paletin renk örnekleri, altta palet adı ve renk adı.](shot:color/palettes-panel)

## Paletler panelini açma

Aşağıdakilerden birini yapın:

- **Pencere > Paletler** komutunu seçin.
- Komut aramada **Paletler paneli** öğesini seçin.
- Boya'da **Renk** sekmesinin yanındaki **Paletler** sekmesini seçin.
- Araçlar çubuğunun sonundaki veya Eskiz'de başlık çubuğunun sağ ucundaki **Fırça rengi** düğmesini seçin. Çekmecede Paletler, Renk panelinin altındadır.
- Windows, Linux ve Android'de Renk panelindeki ön plan veya arka plan renk örneğine sağ tıklayın ya da örneği basılı tutun ve **Paletler…** öğesini seçin.

## Son renkler

Üst satırda çizimde kullandığınız en fazla 64 renk, en yenisi önce olmak üzere
gösterilir. Son kullanılan bir renkle boyamak için o rengi seçin. En fazla dört
satır göstermek için **Renk geçmişini genişlet** (satırın sonundaki ok) öğesini
seçin.

Bir renk, bir fırça darbesi, dolgu, gradyan veya şekil onu kullandığında
eklenir. Renk almak, silmek, maskeye boyamak ve Karıştır ya da Sıvılaştır
kullanmak renk eklemez. Geri alma son renkleri kaldırmaz.

## Kayıtlı bir renkle boyama

Rengiyle boyamak veya maske düzenlerken maske rengini ayarlamak için bir renk
örneği seçin. Geçerli renkle eşleşen renk örneğinin çevresinde bir çerçeve
bulunur.

## Renk ekleme

Geçerli boya rengini palete kaydetmek için son renk örneğinden sonraki **+**
düğmesini seçin. Renk örneği rengi; renk uzayı, alfa ve HDR yoğunluğu dâhil tam
olarak korur. **Saydam boya** seçiliyken **+** kullanılamaz.

## Renkleri adlandırma

Geçerli rengin adı panelin sağ altında, sRGB önizlemesi olarak hex koduyla
birlikte yer alır. HDR yoğunluğu olan bir renkte yoğunluk da gösterilir, örneğin
“+1.0 EV”. Kaydedilmemiş bir renk, “Turkuaz” veya “Umbra” gibi önerilen bir ad
gösterir.

Başka bir ad yazmak için adı seçin, ardından onaylamak için **Enter**, iptal
etmek için **Escape** tuşuna basın. Kaydedilmemiş bir renk, **+** ile
kaydettiğinizde bu adı alır. Kayıtlı bir renk örneğinde yeni ad eskisinin yerini
alır.

Adlar 1 ile 64 karakter arasındadır ve bir palet içinde benzersizdir.

## Renkleri düzenleme ve kaldırma

Bir renk örneğini taşımak için sürükleyin. Taşımayı iptal etmek için ızgaranın
dışında bırakın veya **Escape** tuşuna basın.

Şu komutlar için bir renk örneğine sağ tıklayın ya da örneği basılı tutun (veya
**Shift+F10** tuşlarına basın):

- **Rename Color…**
- **Remove Color**
- **Renk sıralamasını geri al** ve **Renk sıralamasını yinele**

Panel odaktayken **Ctrl+Z** ve **Ctrl+Shift+Z** (veya **Ctrl+Y**) yeniden
sıralamaları geri alır ve yineler. Renk örneği eklemek veya kaldırmak paletin
sıralama geçmişini temizler.

## Palet seçme

Palet listesini açmak için panelin sol altındaki palet adını seçin. Listeyi
süzmek için **Palet bul** alanına yazın. Etkin yapmak istediğiniz paleti seçin.

![Palet listesi: arama alanı, + düğmesi ve her paletin adı ile renkleri.](shot:color/palettes-chooser)

## Yeni paletler

Palet listesinde **+** düğmesini seçin ve **New Palette…** öğesini seçin.
Adsız bırakılan bir paletin adı “Yeni palet” olur.

Kitaplıkta toplam en fazla 64 palet ve 4.096 renk bulunabilir.

## Paletleri yeniden adlandırma ve kaldırma

Palet listesinde bir palete sağ tıklayın ya da paleti basılı tutun ve **Rename
Palette…** veya **Remove Palette…** öğesini seçin. Son palet kaldırılamaz.

## Paletleri içe ve dışa aktarma

Bir palet dosyasını içe aktarmak için palet listesinde **+** düğmesini seçin ve
**Import Palette…** öğesini seçin. Capy Canvas en fazla 1 MB boyutundaki
`.capycolor`, `.aco`, `.cls`, `.swatches`, `.ase`, `.afpalette`, `.gpl`, `.kpl`
ve `.json` dosyalarını okur. Dosya, dosyada saklanan adla veya dosya adıyla yeni
bir palet olur.

Bir paleti dışa aktarmak için palet listesinde palete sağ tıklayın ya da paleti
basılı tutun, **Export Palette** öğesini ve ardından bir biçim seçin:

- **Capycolor (.capycolor)**, renkleri renk uzayı, alfa ve HDR yoğunluğu dâhil tam olarak korur.
- **Clip Studio Paint, Photoshop (.aco)**, **Procreate (.swatches)**, **Affinity, Adobe (.ase)** ve **Krita, GIMP (.gpl)** opak sRGB renkler kaydeder. sRGB'nin dışındaki renkler kırpılır. Procreate dosyası ilk 30 rengi tutar.

Panel kaç rengin kırpıldığını veya opak yapıldığını bildirir.

![Export Palette biçimlerini içeren palet menüsü.](shot:color/palettes-menu)

## Başlangıç paletleri

Capy Canvas'ta Okyanus çalışması, Piksel oyun salonu, Karanlık fantezi, Pop
sanat, Şeker pastel tonları, Riso baskı, Synthwave, Yetmişler baskısı, Ahşap
baskı ve Mürekkep paletleri bulunur. Başlangıç paletlerini diğer paletler gibi
değiştirebilirsiniz. Kaldırılan bir başlangıç paleti geri gelmez.
