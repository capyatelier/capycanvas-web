---
title: "Seçim araçları"
description: "Seçim araçları ve Araç panelindeki ayarları."
related: ["selections/working", "selections/tonal-range", "selections/quick-mask", "customize/toolbars"]
---

Seçim araçlarıyla bir çizimin bir bölümünü seçebilirsiniz. Bir aracın ayarları
Araç panelinde, Fotoğraf'ta ayrıca pencerenin üstündeki Araç seçenekleri
çubuğunda bulunur.

| Araç | Seçtiği | Tuş |
| --- | --- | --- |
| **Dikdörtgen seçim** | Sürüklediğiniz bir dikdörtgen | |
| **Elips seçim** | Sürüklediğiniz bir elips | |
| **Kement seçimi** | Serbest elle çizdiğiniz bir şekil | **M** |
| **Çokgen kement** | Köşe köşe tıkladığınız bir şekil | |
| **Otomatik seç** | Benzer renkli bitişik bir alan | **W** |
| **Renge göre seç** | Bitişik olsun olmasın, benzer renkteki her piksel | |
| **Seçimi boya** | Boyadığınız alan | |
| **Ton aralığı** | Bir parlaklık bandındaki pikseller (bkz. [Parlaklığa göre seçme](/tr/docs/selections/tonal-range/)) | |

## Seçim aracı seçme

Aşağıdakilerden birini yapın:

- Aracın adını [komut aramaya](/tr/docs/start/command-search/) yazın.
- **Kement seçimi** için **M**, **Otomatik seç** için **W** tuşuna basın.
- Boya'da Araçlar çubuğundaki **Seç** veya **Otomatik seç / Renge göre seç** düğmesini seçin.
- Fotoğraf'ta Araçlar çubuğundaki **Dikdörtgen seçim / Elips seçim**, **Kement seçimi / Çokgen kement**, **Otomatik seç / Renge göre seç** veya **Seçimi boya** düğmesini seçin.
- Eskiz'de başlık çubuğundaki **Seç** düğmesini seçin. Araç panelinin yanında tüm seçim araçlarını içeren bir çekmece açmak için düğmeyi yeniden seçin.

Birden çok araç içeren bir araç çubuğu düğmesi en son kullandığınız aracı
gösterir. Başka bir araç seçmek için düğmeye sağ tıklayın veya düğmeyi basılı
tutun ya da aracı **Araç seti** panelinde seçin. Eskiz başlık çubuğundaki
**Seç** düğmesi en son kullandığınız seçim aracına döner.

**Ton aralığı** aracının Boya veya Fotoğraf araç çubuklarında düğmesi yoktur.

Hızlı maskede veya bir seçim katmanını düzenlerken bir seçim aracı seçmek o
modu açık tutar.

![Eskiz'deki Seç çekmecesi; seçim araçları Dikdörtgen seçim için Araç panelinin yanında.](shot:selections/tools-sketch-select-drawer)

## Mod

Seçeceğiniz sonraki alanı geçerli seçimle birleştirebilirsiniz.

Araç panelinin **Mod** satırında **Yeni seçim**, **Seçime ekle**,
**Seçimden çıkar** veya **Seçimle kesiştir** seçeneğini seçin. Varsayılan
**Yeni seçim** seçeneğidir.

Modu tek bir seçim için değiştirmek üzere seçime başlarken bir tuşu basılı
tutun:

- **Shift**: **Seçime ekle**
- **Alt**: **Seçimden çıkar**
- **Shift+Alt**: **Seçimle kesiştir**
- **Ctrl**: **Yeni seçim**

Tuşu basılı tuttuğunuz sürece **Mod** satırı tuşun seçtiği modu gösterir.
**Seçimi boya** aracında yalnızca **Seçime ekle** ve **Seçimden çıkar** bulunur.

## Kenar düzleştirme ve Kenar yumuşatma yarıçapı

**Kenar düzleştirme** varsayılan olarak açıktır. **Kenar yumuşatma yarıçapı**
her yeni seçimin kenarını en fazla 100 px yumuşatır ve 0 değeriyle başlar.

**Seçimi boya** aracında bu ayarların hiçbiri yoktur. **Ton aralığı** aracında
**Kenar yumuşatma** vardır, **Kenar düzleştirme** yoktur.

## Dikdörtgen seçim ve Elips seçim

Bir köşeden karşı köşeye sürükleyin. Sürüklemeye başladıktan sonra kare veya
daire için **Shift**, merkezden çizmek için **Alt** tuşunu basılı tutun.

- **Sabit en boy oranı** seçimi **Oran genişliği** ve **Oran yüksekliği** ile ayarlanan oranda tutar. Varsayılan 1 : 1'dir.
- **Sabit boyut**, ayarladığınız **Genişlik** ve **Yükseklik** değerlerinde, piksel cinsinden bir seçim çizer. Varsayılan 256 × 256'dır.
- **Merkezden çiz** seçimin merkezini sürüklemeye başladığınız yere koyar.

**Sabit en boy oranı** açıldığında **Sabit boyut** kapanır, bunun tersi de
geçerlidir. Sürüklemeden yapılan bir tıklama seçimi olduğu gibi bırakır.

## Kement seçimi

Alanın çevresini çizin. Kalemi kaldırdığınızda veya fare düğmesini
bıraktığınızda kapalı şekil seçim olur.

## Çokgen kement

Şeklin her köşesine tıklayın. Bitirmek için aşağıdakilerden birini yapın:

- İlk köşeye yeniden tıklayın.
- **Enter** tuşuna basın.
- Tuval çubuğunda **Bitir** düğmesini veya Araç panelinde **Seçimi bitir** düğmesini seçin.

Bir çokgen en az üç köşe gerektirir.

- Son köşeyi kaldırmak için **Backspace** veya **Delete** tuşuna basın ya da tuval çubuğunda **Noktayı kaldır** düğmesini veya Araç panelinde **Son noktayı kaldır** düğmesini seçin.
- Çokgeni iptal etmek için **Escape** tuşuna basın ya da tuval çubuğunda **İptal** düğmesini veya Araç panelinde **Seçimi iptal et** düğmesini seçin.
- Sonraki kenarı 45°'lik adımlara oturtmak için **Shift** tuşunu basılı tutun. Tüm kenarları oturtmak için Araç panelinde **Kenarları 45° ile sınırla** seçeneğini açın.

Köşeleri yerleştirirken tuvalin altındaki [tuval çubuğu](/tr/docs/selections/working/)
**Noktayı kaldır**, **İptal** ve **Bitir** düğmelerini gösterir.

![Noktayı kaldır, İptal ve Bitir düğmeleriyle çokgen için tuval çubuğu.](shot:selections/tools-polygon-bar)

## Otomatik seç ve Renge göre seç

Tuvalde bir renge tıklayın. **Otomatik seç** o noktanın çevresindeki bitişik
alanı, **Renge göre seç** görüntünün her yerindeki eşleşen pikselleri alır.

![Mod, Kenar düzleştirme, Kaynak, Tolerans, Kenarlar ayarları ve Kenar yumuşatma yarıçapıyla Otomatik seç için Araç paneli.](shot:selections/tools-auto-select-settings)

### Kaynak

Araçların renkleri nerede arayacağını belirler: **Görünür çizim** (varsayılan),
**Düzenlenen katman** veya **Referans katmanlar**, yani
[Referans olarak kullan](/tr/docs/layers/settings/) ile işaretlenen katmanlar.

### Tolerans

Bir rengin, tıkladığınız renkten ne kadar farklı olup yine de seçileceğini
belirler. Varsayılan %10'dur.

### Boşlukları kapat

Alanın çevresindeki kenarlarda bu genişliğe kadar olan boşlukları kapatır, 0 ile
32 px arası. Yalnızca **Otomatik seç** aracında.

### Genişletme

Seçimi en fazla 32 px büyütür veya negatif bir değerle küçültür.

### Kenar düzleştirme

Seçimin basamaklı kenarlarını yumuşatır. %0'da kenarlar tam pikselleri izler.
**Kenar düzleştirme** anahtarı kapalıyken bu kaydırıcı gizlidir.

**Otomatik seç** ve **Renge göre seç** tek bir **Kaynak** ayarını paylaşır;
**Tolerans** ve **Kenarlar** ayarlarını da [Dolgu araçlarıyla](/tr/docs/drawing/fill/)
paylaşır.

## Seçimi boya

Alanın üzerini yuvarlak bir fırçayla boyayın. Boyadığınız kapalı bir halka
içten dolar.

- **Seçime ekle** veya **Seçimden çıkar** fırçanın ne yapacağını belirler.
- **Basınç boyutu denetler** varsayılan olarak kapalıdır.
- **Boyut**, **Sertlik** ve **Opaklık** yuvarlak fırçayı ayarlar.

Boyarken eklemek için **Shift**, geçerli ayarın tersini yapmak için **Alt**
tuşunu basılı tutun. Kalemin silgi ucu çıkarır. Seçim yokken çıkaran bir fırça
darbesi hiçbir şey yapmaz.

## Seç düğmesi

Araç panelinde bir seçim aracının ayarlarının altındaki **Seç** düğmesi
[Seç menüsünü](/tr/docs/selections/working/) açar. **Ton aralığı** ayarlarında
**Seç** düğmesi yoktur.
