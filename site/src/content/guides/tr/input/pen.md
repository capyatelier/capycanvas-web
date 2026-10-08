---
title: "Kalem"
description: "Tercihler'deki kalem ayarları ve Apple Pencil'da çift dokunma ve sıkıştırma."
related: ["input/touch", "input/keyboard", "preferences", "brushes/basics"]
---

Kalem ayarları **Düzenle > Tercihler** içindeki **Kalem ve giriş** sayfasındadır.

![Tercihler'in Kalem ve giriş sayfası.](shot:pen/pen-and-input)

## Basınç tepkisi

Kalemin hafif basınca nasıl tepki vereceğini **Kalem tepkisi** altındaki
**Basınç tepkisi** ile değiştirebilirsiniz. Düşük değerler hafif basıncı
güçlendirir, yüksek değerler daha fazla kuvvet gerektirir. Aralık 0,25 × ile
4,00 × arasıdır. Varsayılan değer olan 1,00 × ile kalemin basıncı
değiştirilmeden kullanılır.

Ayar, **Seçimi boya** ve **Hızlı maske** dâhil tüm fırçalara ve araçlara
uygulanır. Önceden çizdiğiniz darbeler değişmez.

## Fırça darbesi tahmini

Fırça darbesi tahmini, darbenin kısa bir bölümünü kalem ucunun önünde çizer; siz
çizdikçe gerçek darbe bu bölümün yerini alır. Ayarlar **Kalem tepkisi**
altındadır:

- **Fırça darbesi tahminini etkinleştir**, iki tahmin türünü de açar veya kapatır.
- ***sistem* fırça darbesi tahminini kullan** (örneğin **Windows fırça darbesi tahminini kullan**), sistemin veya tarayıcının tahminini kullanır.
- **Tahmin miktarı**, {appName}'ın kendi başına ne kadar ileriyi tahmin edeceğini 0 ile 64 ms arasında belirler.

İki anahtar da varsayılan olarak açıktır ve **Tahmin miktarı** 16 ms'dir.
**Fırça darbesi tahminini etkinleştir** kapalıyken diğer iki ayar kullanılamaz.

| Sistem | Sistemin tahmini |
| --- | --- |
| iPad | Kullanılabilir |
| Windows | Windows sunuyorsa kullanılabilir |
| Android | Android 14 ve üstü, sistemin desteklediği bir kalemle |
| Web | Bunu sunan tarayıcılarda |
| macOS, Linux | Hiçbir zaman kullanılamaz |

Sistemin tahmini kullanılamadığında anahtarı da kullanılamaz ve tahmini
**Tahmin miktarı** belirler. Sistemin tahmini kullanılırken **Tahmin miktarı**
kullanılamaz (iPad'de gizlidir).

İmleç tahmin edilen darbeyi değil, kalemi izler.

![Kalem tepkisi ayarları.](shot:pen/prediction)

## İmleç şekli

Tuvalin üzerinde gösterilen işaretçiyi **İşaretçi** altındaki **İmleç şekli**
ile seçebilirsiniz.

| Seçenek | Gösterdiği |
| --- | --- |
| **Fırça boyutu** | Fırça ucunun boyutu, şekli ve dönüşüyle anahattı (varsayılan) |
| **Artı**, **Üçgen** | Bir artı veya küçük bir üçgen |
| **Nokta** | Çok küçük bir artı |
| **Tek piksellik nokta** | Ekranın bir pikseli |
| **Nişangâh** | Ortasında nokta olan bir artı |
| **Araç** | Çalışma noktası işaretçide olacak şekilde aracın simgesi |
| **Araç ve fırça boyutu**, **Fırça boyutu ve artı**, **Fırça boyutu ve nokta**, **Fırça boyutu ve tek piksellik nokta** | Fırça anahattı ile birlikte diğer işaret |
| **Yok** | Ekran üzerindeki kalem için hiçbir şey. Fare, izleme dörtgeni veya ekransız tablet **Nişangâh** gösterir. |

Şekil, boyama araçlarına ve **Seçimi boya** aracına uygulanır. Diğer araçlar,
şekil **Araç** içeriyorsa kendi simgelerini, aksi hâlde bir artı gösterir.

![İmleç şekli listesi.](shot:pen/cursor-shapes)

## Boyarken imleci gizle

**Boyarken imleci gizle** açıkken (varsayılan), bir boyama aracıyla kalem tuvale
değdiğinde veya fare düğmesi basılıyken imleç kaybolur. Silerken fırça anahattı
görünür kalır.

## Silgi ucu

Kaleminizin silgi ucunun ne yapacağını seçebilirsiniz. **Silgi ucu** grubu
iPad'de gösterilmez.

- **Araç**: **Geçerli araç** (varsayılan) kullandığınız aracı korur. **Silgi**, **Kalem**, **Kurşun kalem**, **Boya fırçası**, **Pistole** ve **Karıştır**, silgi ucunu kullanırken o araca geçer; ardından önceki araç geri gelir.
- **Saydam boya**: açıkken (varsayılan) silgi ucu aracın fırçasıyla siler. Kapalıyken silgi ucu boyar. **Araç** ayarı **Silgi** olduğunda bu anahtar gizlenir.

## Kalem düğmeleri

Kaleminizin her yan düğmesine bir eylem, hatta her araç türü için farklı bir
eylem atayabilirsiniz.

Bir kalem düğmesini ayarlamak için:

1. **Kalem düğmeleri** altında düğmeyi seçin.
2. **Eylem** öğesini seçin veya **Her araç için aynı** seçeneğini kapatıp **Çizim araçları** gibi bir araç türü seçin.
3. Bir eylem seçin. **Hiçbir şey** düğmenin atamasını temizler.

**Gezin** veya **Renk örnekle** gibi araçlar, fırçalar ve modlar düğmeyi basılı
tuttuğunuz sürece geçerlidir. Diğer eylemler bir kez çalışır. Darbe sırasında
yapılan bir basma darbeden sonra etkili olur.

Her düğme **Hiçbir şey** olarak başlar. **Hiçbir şey** olarak ayarlanan bir
düğme, tablet sürücünüzün veya sistemin verdiği eylemi korur.

| Sistem | Listelenen düğmeler |
| --- | --- |
| Linux | **Alt yan düğme**, **Üst yan düğme**, **Üçüncü yan düğme** |
| Windows | **Alt yan düğme** |
| macOS, Android, web | **Alt yan düğme**, **Üst yan düğme** |
| iPad | Yok |

Linux'ta ve Android'de tabletin üzerindeki düğmeler
[Klavye kısayolları](/tr/docs/input/keyboard/) sayfasında tuş olarak ayarlanır.

![Alt yan düğmenin sayfası: her araç türü için bir eylem.](shot:pen/pen-button-page)

## Apple Pencil'da çift dokunma ve sıkıştırma

iPad'de Apple Pencil'a çift dokunma ve Apple Pencil Pro'yu sıkıştırma, iPad'in
**Ayarlar > Apple Pencil** içindeki kendi ayarını izler.

- “Switch between current tool and eraser”, **Silgi** aracına geçer ve geri döner.
- “Switch between current tool and last used”, daha önce seçtiğiniz araca geçer.

Diğer seçenekler {appName}'ta hiçbir şey yapmaz. Sıkıştırma, bıraktığınızda
etkili olur. Apple Pencil ekranın üzerinde gezinirken imleç görünür.
