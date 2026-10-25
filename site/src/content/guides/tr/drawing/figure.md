---
title: "Şekil"
description: "Şekil aracıyla çizgi, dikdörtgen, elips, çokgen, yıldız ve yol çizme."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

Seçili katmana **Şekil** aracıyla çizgiler, dikdörtgenler, elipsler, çokgenler,
yıldızlar ve yollar çizebilirsiniz. [Vektör katmanında](/tr/docs/layers/vector/)
her şekil düzenleyebileceğiniz bir yol olur. Boya katmanında piksel boyar.

## Şekil aracı

Aşağıdakilerden birini yapın:

- **U** tuşuna basın.
- Boya'da Araçlar çubuğunda **Şekil** düğmesini seçin. **Çizgi**, **Dikdörtgen**, **Elips**, **Çokgen**, **Yıldız** veya **Yol** seçmek için düğmeye sağ tıklayın veya düğmeyi basılı tutun.
- Komut aramada **Şekil** öğesini veya **Şekil › Dikdörtgen** gibi bir şekli arayın.

Eskiz'de ve Fotoğraf'ta Şekil düğmesi yoktur. **Araçları ekle…** ile bir Şekil
düğmesi ekleyebilirsiniz
([Araç çubukları ve başlık çubuğu](/tr/docs/customize/toolbars/)).

![Boya'nın Araçlar çubuğundaki Şekil düğmesinin menüsü: Çizgi, Dikdörtgen, Elips, Çokgen, Yıldız ve Yol.](shot:drawing/figure-menu)

**Yol** dışındaki her şekli çizmek için tuvalde sürükleyin. Sürüklerken kesikli
bir anahat şekli gösterir ve şekil bıraktığınızda görünür. 45° adımlarla çizgi,
kare, daire ya da düzgün çokgen veya yıldız çizmek için sürüklerken **Shift**
tuşunu basılı tutun.

- Şekiller yalnızca katmanın çizimine çizilir; vektör katmanlarında ve fırçanın boyayabildiği katmanlarda çalışır ([Fırça araçları](/tr/docs/drawing/brush-tools/)).
- **Alfa kilidi** dikkate alınır.
- Boya katmanında etkin bir seçim **Çizgi**, **Dikdörtgen** ve **Elips** şekillerini kırpar. **Çokgen**, **Yıldız**, **Yol** veya yuvarlatılmış köşeli dikdörtgeni kırpmaz.
- Renk panelinde **Saydam boya** seçiliyken boya katmanında **Çizgi**, **Dikdörtgen** ve **Elips** siler. Diğer her şekil bir renk istendiğini belirten bir bildirim gösterir.
- Kalem basıncı şeklin kalınlığını değiştirmez.
- Şekiller kılavuzlara uymaz.
- Şekil, Hızlı maskede veya seçim katmanında kullanılamaz.
- Her şekil bir geri alma adımıdır.

## Şekil türü

- **Çizgi**, bastığınız yerden bıraktığınız yere uzanır ve uçları yuvarlaktır.
- **Dikdörtgen** şeklinin köşeleri basma ve bırakma noktalarındadır, kenarları tuval kenarlarına paraleldir.
- **Elips**, basma ve bırakma noktaları arasındaki kutuya sığar.
- **Çokgen** ve **Yıldız** kutuya sığar; ilk köşe veya uç üsttedir.
- **Yol**, bağlantı noktası bağlantı noktası çizilir.

Şekli **Araç seti** panelinin üstünden, Şekil düğmesinin menüsünden veya Araç
seçenekleri çubuğundaki **Araç** menüsünden seçin.

## Anahat ve dolgu

- **Anahat**, şeklin kenarını geçerli renkle, kenarın üzerinde ortalayarak çizer.
- **Dolgu**, şekli geçerli renkle kaplar.
- **Anahat + dolgu**, anahattı ön plan rengiyle çizer ve içini arka plan rengiyle doldurur.

Modu **Araç seti** panelinde şekillerin altından veya Araç seçenekleri
çubuğundaki **Çeşit** menüsünden seçin. Çizgi yalnızca **Anahat** ile
çizilebilir.

![Araç seti paneli: Anahat, Dolgu ve Anahat + dolgu seçeneklerinin üstünde Çizgi, Dikdörtgen, Elips, Çokgen, Yıldız ve Yol.](shot:drawing/figure-tool-set)

## Şekil ayarları

![Yıldız için Araç paneli: Çizgi genişliği, Opaklık, Kol sayısı ve İç yarıçap.](shot:vector/figure-settings)

**Köşe yarıçapı**, **Köşe sayısı**, **Kol sayısı** ve **İç yarıçap**, ait oldukları
şekil için **Araç** panelinde ve Araç seçenekleri çubuğunda bulunur.

### Köşe yarıçapı

**Dikdörtgen** köşelerini 0 ile 4096 px arasında yuvarlar.

### Köşe sayısı

**Çokgen** köşe sayısını 3 ile 100 arasında belirler. Varsayılan 5'tir.

### Kol sayısı

**Yıldız** kol sayısını 3 ile 100 arasında belirler. Varsayılan 5'tir.

### İç yarıçap

**Yıldız** iç köşelerinin merkezden ne kadar uzakta olacağını, dış yarıçapın
yüzdesi olarak %5 ile %100 arasında belirler. Varsayılan %50'dir.

## Yol

Bir yolu bağlantı noktası bağlantı noktası çizebilirsiniz.

- Köşe bağlantı noktası eklemek için tıklayın. Yumuşak bir bağlantı noktası için tutamaçları çekmek üzere basıp sürükleyin ya da yalnızca çıkış tutamacını sürüklemek için **Alt** tuşunu basılı tutun.
- Sonraki bağlantı noktasını sonuncudan itibaren 45° adımlarla yerleştirmek için **Shift** tuşunu basılı tutun.
- Yolu kapatmak için ilk bağlantı noktasına tıklayın.
- Yolu eklemek için tuval çubuğunda **Yolu bitir** düğmesini seçin veya **Enter** tuşuna basın. **Yolu iptal et** veya **Escape** yolu atar.
- **Son noktayı kaldır** veya **Backspace** son bağlantı noktasını kaldırır, **Geri al** da öyle.

![Son noktayı kaldır, Yolu iptal et ve Yolu bitir ile bir yol çizilirken tuval çubuğu.](shot:vector/path-bar)

Yol geçerli modu, **Çizgi genişliği** değerini ve renkleri kullanır; köşeleri sivri, uçları düzdür. Vektör katmanında bitirdiğinizde seçili olur ve seçili bir yolun açık ucundan başlayan yol onu sürdürür.

## Çizgi genişliği ve Opaklık

**Çizgi genişliği** ve **Opaklık**, **Araç** panelinde ve Araç seçenekleri
çubuğunda bulunur. Bu ayarlar değerlerini geçerli fırçanın **Fırça boyutu** ve
**Opaklık** ayarlarıyla paylaşır ([Boyut, güç ve opaklık](/tr/docs/brushes/basics/)).
**[** ve **]** tuşları Çizgi genişliğini değiştirir.

### Çizgi genişliği

Anahattın genişliğini 0,5 ile 2048 px arasında belirler. **Dolgu** modunda
görünmez. Vektör katmanında konturu sonradan [Özellikler](/tr/docs/layers/paths/)
panelindeki **Kontur kalınlığı** değiştirir.

### Opaklık

Anahattın ve dolgunun gücünü aynı ölçüde belirler.
