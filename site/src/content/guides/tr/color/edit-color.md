---
title: "Rengi düzenle"
description: "Rengi düzenle iletişim kutusunda bir rengi sayılarıyla, hex koduyla veya renk metniyle ayarlama."
related: ["color/color-panel", "color/palettes", "color/eyedropper"]
---

**Rengi düzenle** iletişim kutusunda bir rengi sayılarıyla ayarlayabilirsiniz.
**Rengi kullan** düğmesini seçene kadar hiçbir şey değişmez.

![Rengi düzenle iletişim kutusu: solda çember, sağ üstte Geçerli ve Yeni ile hex kodu, üç değer satırı ve alt kısımda son renkler.](shot:color/edit-color "1 Çember ve şekiller · 2 Geçerli ve Yeni · 3 Tuvalden al · 4 Hex · 5 Değer satırları · 6 Son renkler")

## Rengi düzenle iletişim kutusunu açma

Aşağıdakilerden birini yapın:

- [Renk panelinin](/tr/docs/color/color-panel/) sağ üstündeki **Rengi düzenle…** (kalem) öğesini seçin.
- Renk panelinde ön plan veya arka plan renk örneğine çift tıklayın.
- Özellikler'de bir renk düğmesini seçin; örneğin bir Düz renk dolgu katmanının **Renk** düğmesini veya Siyah beyaz filtresinin **Ton rengi** düğmesini.
- Katmanlar panelinde bir Düz renk dolgu katmanının küçük resmini seçin.
- Gradyan düzenleyicisinde bir durağın **Renk** düğmesini seçin.
- **Fırça rengi** düğmesini gösteren bir panelde bu düğmeyi seçin. Düğmeyi Fırçalar ve Fırça boyutu panellerine ekleyebilirsiniz ([Paneller ve sütunlar](/tr/docs/customize/panels/)).
- Windows, Linux ve Android'de ön plan veya arka plan renk örneğine sağ tıklayın ya da örneği basılı tutun ve **Rengi düzenle…** öğesini seçin.

## Çember ve şekiller

Çember, Renk panelindeki gibi çalışır. Alanı daireye, kareye veya üçgene çevirmek
için çemberin altında **OKLCH**, **HSB** veya **HLS** düğmesini seçin.

## Geçerli ve Yeni

**Yeni**, oluşturduğunuz rengi gösterir. **Yeni** rengini başladığınız renge
döndürmek için **Geçerli** öğesini seçin.

## Hex

Hex alanı Yeni rengi sRGB'de `#RRGGBB` olarak gösterir. Hex kodu veya başka bir
[renk metni](#renkleri-yapıştırma) yazmak için alanı seçin.

Hex kodunun solundaki bir etiket şu durumları belirtir:

- “≈”: renk sRGB'nin dışındadır ve hex en yakın sRGB rengini gösterir.
- “Temel”: HDR çiziminde hex, rengi yoğunluk uygulanmadan önceki hâliyle gösterir.
- “sRGB”: çizimin renk uzayı sRGB değildir.

## Değer satırları

Her satır Yeni rengi bir biçimde gösterir. Başka bir biçim seçmek için satırın
başındaki biçim adını seçin. İletişim kutusu seçtiğiniz biçimleri korur.

| Satır | Biçimler |
| --- | --- |
| 1 | **RGB** (0–255, varsayılan), **RGB 0–1**, **Doğrusal RGB** (0–1). Değerler çizimin renk uzayındadır; renk uzayı satırdaki bir etikette gösterilir. |
| 2 | **HSB** (varsayılan), **HSL** |
| 3 | **OKLCH** (varsayılan), **OKLab** |

![İlk satırın biçim menüsü açık hâlde değer satırları.](shot:color/edit-color-formats)

## Değerleri düzenleme

- Sayı yazmak için bir değeri seçin. Onaylamak için **Enter**, iptal etmek için **Escape** tuşuna basın.
- Değeri değiştirmek için yukarı veya aşağı sürükleyin. Daha büyük adımlar için **Shift**, daha küçük adımlar için **Alt** veya **Ctrl** tuşunu basılı tutun.
- Bir değeri bir adım değiştirmek için değerin üzerindeyken **↑** veya **↓** tuşuna basın.

Alanın aralığını aşan bir değer en yakın sınıra ayarlanır. Ton 360°'de başa
döner. Ne sayı ne de renk olan bir metin yazarsanız alan bir hatayla açık kalır.
Değeri düzeltene veya **Escape** tuşuna basana kadar **Rengi kullan**
kullanılamaz.

## Renkleri kopyalama

Bir değeri metin olarak kopyalamak için hex alanının veya satırın sonundaki
kopyalama düğmesini seçin. Düğmedeki onay işareti kopyalamayı doğrular. Hex
kodunu kopyalamak için iletişim kutusunda, bir metin alanının dışındayken
**Ctrl+C** tuşlarına basın.

| Biçim | sRGB çizimlerde kopyalanan metin | Diğer renk uzaylarında |
| --- | --- | --- |
| Hex | `#RRGGBB` | `#RRGGBB` |
| RGB | `rgb(R G B)` | 0 ile 1 arasında `color(display-p3 r g b)`, `color(a98-rgb r g b)` veya `color(prophoto-rgb r g b)` |
| RGB 0–1 | `color(srgb r g b)` | RGB'deki gibi |
| Doğrusal RGB | `color(srgb-linear r g b)` | `r g b` |
| HSB, HSL | `hsb(h s% b%)`, `hsl(h s% l%)` | `h° s% b%`, `h° s% l%` |
| OKLCH, OKLab | `oklch(L% C h)`, `oklab(L% a b)` | aynısı |

## Renkleri yapıştırma

Yeni rengi renk metninden ayarlamak için iletişim kutusunda, bir metin alanının
dışındayken **Ctrl+V** tuşlarına basın. Hex alanı ve değer alanları aynı metni
kabul eder:

- `#` veya `0x` ile ya da ikisi olmadan 3, 4, 6 veya 8 basamaklı hex kodları (alfa basamakları yok sayılır);
- `teal` gibi CSS renk adları;
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsb()`, `hsv()`, `oklch()` ve `oklab()`;
- `srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb` veya `srgb-linear` ile `color()`;
- üç sayı. Değer satırı bunları kendi biçiminde okur. Diğer yerlerde 0 ile 255 arasında RGB olarak, üçü de 1 veya daha küçükse ve biri ondalık nokta içeriyorsa 0 ile 1 arasında RGB olarak okunur.

Renk metni rengin alfasını hiçbir zaman değiştirmez.

## Tuvalden al

Yeni rengi çizimden örneklemek için **Tuvalden al** (Geçerli ve Yeni'nin
yanındaki damlalık) öğesini seçin. İletişim kutusu gizlenir ve tuvalin bir
köşesindeki şerit Geçerli rengi, örneklenen rengi ve değerlerini gösterir.

Rengi almak için tıklayın veya kalemi ya da parmağınızı kaldırın. İletişim
kutusu, alınan renk Yeni olarak ayarlanmış şekilde geri gelir. Değişiklik
yapmadan geri dönmek için **Escape** tuşuna basın veya şeridi seçin.

Parmakla örnekleme noktası parmak ucunun üstündedir. Rengi düzenle başka bir
iletişim kutusundan açıldığında **Tuvalden al** gizlenir.

## Son renkler ve paletler

Alt kısımda son renkleriniz gösterilir. Bir rengi Yeni yapmak için seçin.

Son renklerinizi ve tüm [paletleri](/tr/docs/color/palettes/) içeren bir sayfa
açmak için **Son renkler ve tüm paletler** (son renklerden sonraki ok) öğesini
seçin. Palet adlarını, renk adlarını veya hex kodlarını bulmak için arama
alanına yazın. Bir paletin sonundaki **+**, Yeni rengi o palete kaydeder.
Sayfayı kapatmak için **Paletleri kapat** öğesini seçin veya **Escape** tuşuna
basın.

![Renk örneği sayfası: arama alanı, Son renkler ve paletler.](shot:color/edit-color-swatches)

## HDR yoğunluğu

[HDR çiziminde](/tr/docs/color-management/hdr/) **Yoğunluk (EV)** satırı ve
çemberin altındaki yay, parlaklığı SDR beyazına göre poz cinsinden belirler.
Yayda ve değeri sürüklerken aralık −2 ile +6 EV'dir. Yazılan bir değer, çizimin
bit derinliğinin aralığı içinde bunun ötesine geçebilir.

## Rengi kullan ve İptal

Yeni rengi uygulamak için **Rengi kullan** düğmesini seçin. Değişiklik yapmadan
kapatmak için **İptal** düğmesini seçin veya **Escape** tuşuna basın. Bir biçim
menüsü veya renk örneği sayfası açıksa **Escape** önce onu kapatır.
