---
title: "Dolgu araçları"
description: "Bir katmandaki alanları, serbest çizilmiş şekilleri ve kapalı bölgeleri geçerli renkle doldurma."
related: ["drawing/gradient", "layers/settings", "selections/working", "drawing/brush-tools"]
---

Seçili katmanın bölümlerini **Doldur**, **Kement dolgusu** ve **Çevrele ve
doldur** ile geçerli renkle doldurabilirsiniz. Her dolgu bir geri alma adımıdır
ve **Alfa kilidi** dikkate alınır.

Dolgular yalnızca katmanın çizimine boyar, hiçbir zaman katman maskesine veya
filtre maskesine boyamaz. Fırçanın boyayamadığı bir katmanda dolgu hiçbir şey
boyamaz ve bir bildirim nedenini açıklar
([Fırça araçları](/tr/docs/drawing/brush-tools/)).

## Dolgu aracı seçme

Aşağıdakilerden birini yapın:

- Doldur'u seçmek için **F** tuşuna basın. Diğer iki aracın varsayılan tuşu yoktur.
- Boya'da Araçlar çubuğunda **Doldur** düğmesini seçin. Başka bir dolgu aracı seçmek için düğmeye sağ tıklayın veya düğmeyi basılı tutun.
- Fotoğraf'ta Araçlar çubuğunda **Sıvılaştır** düğmesinden sonra gelen gradyan ve dolgu düğmesine sağ tıklayın veya düğmeyi basılı tutun, ardından bir araç seçin.
- Bir dolgu aracı etkinken **Araç seti** panelinde **Doldur** veya **Kement dolgusu** öğesini seçin. **Çevrele ve doldur**, **Kement dolgusu** altında listelenir.
- Komut aramada aracın adını arayın.

Eskiz'de dolgu düğmesi yoktur.

## Doldur

Benzer renkteki bitişik bir alanı üzerine tıklayarak doldurabilirsiniz.
**Kaynak**, Doldur'un alanı bulmak için hangi piksellere bakacağını belirler.

- Etkin bir seçim, dolguyu seçimin içiyle sınırlar.
- Hızlı maskede veya bir seçim katmanında Doldur, seçim maskesini doldurur ([Hızlı maske](/tr/docs/selections/quick-mask/)).

## Kement dolgusu

Serbest elle bir şekil çizip geçerli renkle doldurabilirsiniz. Tuvalde şeklin
anahattını sürükleyin. Bıraktığınızda şekil dolar.

Kement dolgusunun yalnızca **Opaklık** ayarı vardır. Hızlı maskede veya seçim
katmanında kullanılamaz.

## Çevrele ve doldur

Çizdiğiniz bir halkanın içindeki tüm kapalı saydam bölgeleri doldurabilirsiniz.
Çevrele ve doldur, bölgeleri **Kaynak** piksellerinde bulur.

- Halkayı iptal etmek için çizerken **Escape** tuşuna basın.
- Tek bir geri alma, bir halkanın doldurduğu her şeyi kaldırır.
- Etkin bir seçim, dolguyu seçimin içiyle sınırlar.
- Seçim maskesi veya katman maskesi düzenlerken Çevrele ve doldur kullanılamaz.

## Kaynak

Doldur ile Çevrele ve doldur'un alanı bulmak için hangi piksellere bakacağını
seçebilirsiniz. Boya her zaman seçili katmana gider.

- **Görünür çizim**: çizimde görünen her şey.
- **Düzenlenen katman**: yalnızca seçili katman.
- **Referans katmanlar**: **Referans olarak kullan** ile işaretlenmiş katmanlar ([Katman ayarları](/tr/docs/layers/settings/)).

Doldur için kaynağı **Araç seti** içinde araçların altındaki listeden,
Çevrele ve doldur için **Araç** panelinden seçin. Araç seçenekleri çubuğunda
ikisi için de bir **Kaynak** menüsü bulunur.

![Doldur seçili Araç seti paneli: altta Görünür çizim, Düzenlenen katman ve Referans katmanlar seçenekleri.](shot:drawing/fill-tool-set)

Her araç kendi kaynağını korur. Doldur **Görünür çizim** ile başlar. Çevrele ve
doldur ise {appName}'ı her açtığınızda **Referans katmanlar** ayarına döner.

Doldur **Referans katmanlar** kullanıyorsa ve işaretli katman yoksa Doldur
hiçbir şey boyamaz. Bir bildirim, alttaki katmanı işaretlemeyi önerir.

## Dolgu ayarları

![Doldur için Araç paneli: Tolerans, Kenarlar grubu ve Opaklık.](shot:drawing/fill-settings)

Doldur ile Çevrele ve doldur aşağıdaki ayarları paylaşır. **Otomatik seç** ve
**Renge göre seç**, **Opaklık** dışındaki tüm ayarlarda aynı değerleri kullanır.
Bir ayarı sıfırlamak için Araç seçenekleri çubuğunda ayarın etiketine çift
tıklayın ([Boyut, opaklık ve akış](/tr/docs/brushes/basics/)).

### Tolerans

Bir rengin ne kadar farklı olup yine de aynı alanın parçası sayılacağını
belirler. Varsayılan değer %10'dur.

### Boşlukları kapat

Alan bulunmadan önce çizgilerdeki bu genişliğe kadar olan açıklıkları kapatır
(0 ile 32 px arası). Genişlik ekran pikseli değil, çizim pikseli cinsindendir.

### Genişletme

Doldurulan alanı bu kadar piksel büyütür veya negatif bir değerle küçültür
(−32 ile 32 px arası).

### Kenar düzleştirme

Doldurulan alanın basamaklı kenarlarını yumuşatır. %0'da dolgu sert piksel
kenarlarını korur.

### Opaklık

Dolgunun gücünü belirler. Bu ayarı değiştirmek geçerli fırçanın **Opaklık**
değerini de değiştirir; tersi de geçerlidir. Eskiz'de sol kenardaki çubukta
bulunan opaklık kaydırıcısını kullanın.

## Seçimi doldurma

Bir seçimi geçerli renkle doldurmak için **Düzenle > Seçimi doldur** komutunu
seçin veya **Shift+Backspace** tuşlarına basın
([Seçimlerle çalışma](/tr/docs/selections/working/)).
