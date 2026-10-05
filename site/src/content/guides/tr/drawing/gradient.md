---
title: "Gradyan"
description: "Gradyan aracıyla gradyan boyama, gradyanın renklerini düzenleme ve Gradyan dolgusu katmanları ekleme."
related: ["drawing/fill", "layers/types", "filters/color", "color/edit-color"]
---

**Gradyan** aracıyla bir katmana gradyan boyayabilir veya düzenlenebilir kalan
bir **Gradyan dolgusu** katmanı ekleyebilirsiniz.

## Gradyan aracı

Aşağıdakilerden birini yapın:

- **G** tuşuna basın.
- Boya'da Araçlar çubuğunda **Gradyan** düğmesini seçin.
- Fotoğraf'ta Araçlar çubuğunda **Sıvılaştır** düğmesinden sonra gelen gradyan ve dolgu düğmesini seçin.
- Komut aramada **Gradyan** öğesini arayın.

Başlangıç noktasından bitiş noktasına sürükleyin. İşaretçiyi bir çizgi izler ve
bıraktığınızda gradyan boyanır.

- Gradyan katmanın tamamını kaplar: başlangıç noktasından önce ilk renk, bitiş noktasından sonra son renk bulunur.
- İptal etmek için sürükleme sırasında **Escape** tuşuna basın.
- Parmakla sürüklemek bunun yerine tuvali taşır.
- Etkin bir seçim gradyanı sınırlar ve **Alfa kilidi** dikkate alınır.
- Hızlı maskede veya bir seçim katmanında gradyan seçim maskesine gider.
- Her gradyan bir geri alma adımıdır.

Araç yalnızca katmanın çizimine ve yalnızca fırçanın boyayabildiği katmanlara
boyar ([Fırça araçları](/tr/docs/drawing/brush-tools/)).

## Şekil

- **Doğrusal**: renk sürükleme boyunca değişir.
- **Radyal**: başlangıç noktası merkezdir, sürükleme yarıçapı belirler.
- **Reflected**: Doğrusal gibidir, başlangıç noktasının iki yanına aynalanır.

Aşağıdakilerden birini yapın:

- Şekli **Araç** panelinin üstündeki **Şekil** satırında veya **Araç seti** panelinde seçin.
- Araçlar çubuğundaki Gradyan düğmesine sağ tıklayın veya düğmeyi basılı tutun ve bir şekil seçin.
- Araç seçenekleri çubuğunda şekli **Çeşit** menüsünden, Fotoğraf'ta ise **Araç** menüsünden seçin.

## Durak düzenleyicisi

![Gradyan aracı için Araç paneli: Şekil satırı, durak düzenleyicisi ve Opaklık.](shot:drawing/gradient-tool-panel)

Gradyanın renklerini **Araç** panelinde **Şekil** satırının altındaki durak
düzenleyicisinde düzenleyebilirsiniz. Araç seçenekleri çubuğundaki gradyan
düğmesi düzenleyiciyi açılır pencerede açar. Gradyan dolgusu katmanları ve
**Gradyan haritası** filtresi aynı düzenleyiciyi kullanır
([Renk filtreleri](/tr/docs/filters/color/)).

Siz düzenleyene kadar aracın gradyanı ön plan renginden arka plan rengine
uzanır ve iki rengin değişikliklerini izler. Düzenlemeden sonra gradyan,
**Gradyanı sıfırla** seçilene kadar renk duraklarını korur. Aracın gradyanında
yapılan düzenlemeler geri alma adımı değildir.

### Interpolation

Duraklar arasında renklerin nasıl karışacağını belirler. **Oklab** (varsayılan)
renkleri gözün algıladığı gibi eşit karıştırır, **Doğrusal ışık** ışığın
karıştığı gibi karıştırır, **Klasik** ise saklanan renk değerlerini karıştırır.

### Tersine çevir

Durakların sırasını ters çevirir.

### Gradyanı sıfırla

Aracın gradyanını ön plan ve arka plan renklerine, Gradyan dolgusu katmanının
veya Gradyan haritasının gradyanını siyah ve beyaza döndürür.

### Renk durağı ekle

O noktadaki renkle bir durak eklemek için şeridi işaretçilerden uzak bir yerde
seçin. Bir gradyanda en fazla 32 durak olabilir.

### Durak işaretçileri

Bir durağı seçmek için işaretçisini seçin, durağı taşımak için işaretçiyi
sürükleyin.

### Konum

Seçili durağın konumunu yüzde olarak belirler. Uç duraklar %0 ve %100'de kalır
ve bir durak komşularını geçemez.

### Renk durağını kaldır

Seçili durağı kaldırır. Uç duraklar kaldırılamaz.

### Renk

Seçili durak için [Rengi düzenle](/tr/docs/color/edit-color/) penceresini açar.

### Seçili rengi kullan

Seçili durağı geçerli renge ayarlar.

## Opaklık

**Opaklık** gradyanın gücünü belirler ve geçerli fırçanın **Opaklık** değeriyle
aynıdır. Eskiz'de sol kenardaki opaklık kaydırıcısını kullanın.

## Gradyan dolgusu katmanları

Gradyanı düzenlenebilir kalan bir dolgu katmanı ekleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Katman > Yeni > Gradyan dolgusu** komutunu seçin.
- **Filtre > Dolgu > Gradyan dolgusu** komutunu seçin.
- Filtreler panelinde **Dolgu** altında **Gradyan dolgusu** öğesini seçin.

Katmanın ayarları Özellikler panelindedir ve her değişiklik bir geri alma
adımıdır.

Etkin bir seçim yeni katmanın maskesi olur. Katmana boyamak için önce bir maske
ekleyin ([Katman türleri](/tr/docs/layers/types/)).

![Gradyan dolgusu katmanı için Özellikler paneli: Şekil, durak düzenleyicisi, Açı, Ölçek ve Konum.](shot:drawing/gradient-fill-properties)

### Şekil

Gradyan aracındaki gibi **Doğrusal**, **Radyal** veya **Reflected**.

### Gradyan

Durak düzenleyicisi. Yeni bir katman siyahtan beyaza giden bir gradyanla başlar.

### Açı

Gradyanın yönünü −180° ile 180° arasında belirler.

### Ölçek

Gradyanın uzunluğunu %10 ile %400 arasında belirler.

### Merkez X ve Merkez Y

**Konum** altında, gradyanın merkezini tuval genişliğinin ve yüksekliğinin
yüzdesi olarak belirler.
