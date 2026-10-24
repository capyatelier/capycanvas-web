---
title: "Yolları düzenleme"
description: "Bir vektör katmanının yollarını seçme, taşıma, yeniden biçimlendirme ve görünümünü değiştirme."
related: ["layers/vector", "drawing/figure", "transform/move-transform", "layers/types"]
---

[Vektör katmanının](/tr/docs/layers/vector/) yollarını çizdikten sonra düzenleyebilirsiniz.

## Yolları seçme ve taşıma

**İşlem** aracıyla ([Taşıma ve dönüştürme](/tr/docs/transform/move-transform/)) bir yol seçin. Yol eklemek veya kaldırmak için **Shift** tuşunu basılı tutun. Seçim dikdörtgeninin tamamen içine aldığı yolları seçmek için boş tuvalde sürükleyin ya da her yolu seçmek için **Ctrl+A** tuşlarına basın.

![Bir yol seçiliyken İşlem için Araç paneli: Sırala düğmeleri, çevirme ve döndürme düğmeleri ve Kontur kalınlığını ölçekle.](shot:vector/operation-settings)

Seçimi tutamaçlı kesikli bir çerçeve çevreler.

- Taşımak için seçili bir yolu sürükleyin. Kopyasını taşımak için **Alt** tuşunu basılı tutun.
- Ölçeklemek için bir tutamacı, döndürmek için çerçevenin üstündeki tutamacı sürükleyin. **Shift** oranları korur veya 15°'lik adımlarla döndürür.
- Ok tuşları 1 px, **Shift** ile 10 px kaydırır.
- **Araç** panelindeki çevirme ve döndürme düğmeleri seçimi merkezi çevresinde çevirir veya döndürür.
- **Delete** seçili yolları kaldırır.

**Araç** panelindeki **Kontur kalınlığını ölçekle** varsayılan olarak açıktır. Yolları ölçeklerken kontur kalınlıklarını korumak için kapatın.

## Noktaları düzenle

Seçili yolların bağlantı noktalarını taşıyabilir, ekleyebilir ve silebilirsiniz.

Aşağıdakilerden birini yapın:

- **A** tuşuna basın.
- **İşlem** aracındayken **Enter** tuşuna basın veya bir yola çift tıklayın.
- Boya ve Fotoğraf'ta Araçlar çubuğundaki **İşlem / Dönüştür / Noktaları düzenle** düğmesine sağ tıklayın veya düğmeyi basılı tutun ve **Noktaları düzenle** aracını seçin.

Bağlantı noktaları karelerle gösterilir, seçili noktalar tutamaçlarını da gösterir. **İşlem** aracına dönmek için **Escape** tuşuna basın.

![Bir yolda bağlantı noktaları ve tutamaçları seçili olarak Noktaları düzenle.](shot:vector/edit-points)

- Bir bağlantı noktasını seçmek için tıklayın, eklemek veya kaldırmak için **Shift** tuşuyla tıklayın ya da içindeki noktaları seçmek için boş tuvalde sürükleyin.
- Bağlantı noktalarını taşımak için sürükleyin. Eğriyi döndürmek için bir tutamacı sürükleyin ya da eşinden ayrı taşımak için **Alt** tuşunu basılı tutun.
- Bir segmenti bükmek için sürükleyin. Bağlantı noktası eklemek için bir segmente tıklayın.
- Bir bağlantı noktasını köşe ile yumuşak arasında değiştirmek için çift tıklayın.
- **Delete** seçili bağlantı noktalarını kaldırır.

Bir bağlantı noktasını düzenlemek dikdörtgeni veya elipsi sıradan bir yola dönüştürür.

## Yol komutları

Seçili yolları **Düzenle > Yol** ile birleştirebilir, kapatabilir, bölebilir, ters çevirebilir ve bir araya getirebilirsiniz. **Noktaları düzenle** için **Araç** paneli ilk dördünü listeler.

- **Yolları birleştir** iki açık yolun en yakın uçlarını bağlar veya bir açık yolu kapatır.
- **Yolu kapat** seçili her açık yolun uçlarını bağlar.
- **Noktada böl** seçili yolları seçili bağlantı noktalarından keser.
- **Yönü ters çevir** her yolu diğer yöne çevirir.
- **Bileşik yol oluştur** seçili yolları, üst üste geldikleri yerlerde delik bırakan tek bir yolda birleştirir. **Bileşik yolu çöz** onları yeniden ayırır.

Etki edemeyen bir komut neyin seçileceğini söyler, örneğin “Birleştirmek için bir veya iki açık yol seçin”.

## Sırala

Seçili yolların katmanları içindeki yığın sırasını **Düzenle > Sırala** ile değiştirebilirsiniz: **En öne getir**, **Öne getir**, **Geriye gönder** ve **En geriye gönder**. **İşlem** için **Araç** panelinde aynı düğmeler bulunur.

## Yol ayarları

Yollar seçiliyken **Özellikler** paneli, seçili yolların en öndekini gösterir. Seçili yollar birbirinden farklıysa etiketin sonunda “(karışık)” yazar ve yapılan değişiklik seçili her yola uygulanır.

![Dolgusu ve konturu olan bir yol için Özellikler paneli.](shot:vector/path-properties)

### Dolgu

Dolguyu açar veya kapatır. Yeni dolgu arka plan rengini kullanır.

### Dolgu rengi

Dolgunun rengini belirler.

### Çakışmalar

Çakışan kısımların nasıl dolacağını belirler. **Dolu** onları doldurur, **Delik** boş bırakır. **Dolgu** açıkken görünür.

### Kontur

Konturu açar veya kapatır. Yeni kontur ön plan rengini kullanır.

### Kontur rengi

Konturun rengini belirler.

### Kontur kalınlığı

Konturun kalınlığını 0,1 ile 4096 px arasında belirler.

### Çizgi uçları

Açık uçların şeklini belirler: **Düz**, **Yuvarlak** veya **Kare**.

### Köşeler

Konturun köşelerdeki şeklini belirler: **Sivri**, **Yuvarlak** veya **Pahlı**.

### Keskin köşe sınırı

Sivri bir köşenin ne kadar uzayabileceğini 1 ile 20 arasında belirler. Sınırın ötesinde köşe pahlanır. **Köşeler** **Sivri** olduğunda görünür.
