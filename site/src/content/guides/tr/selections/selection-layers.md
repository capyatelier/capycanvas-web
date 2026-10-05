---
title: "Seçim katmanları"
description: "Seçimleri Katmanlar panelinde seçim katmanı olarak saklama ve yeniden yükleme."
related: ["selections/working", "selections/quick-mask", "layers/types", "layers/panel"]
---

Bir seçimi Katmanlar panelinde bir katman olarak saklayabilir ve daha sonra
yeniden yükleyebilirsiniz.

## Seçimi kaydetme

Aşağıdakilerden birini yapın:

- **Seç > Seçim katmanı olarak kaydet** komutunu seçin.
- Seçim çubuğunda veya Hızlı maske çubuğunda **Kaydet** düğmesini seçin.
- Hızlı maskede **Katman > Seçim katmanı olarak kaydet** komutunu seçin.

Yeni katman, katman listesinin en üstüne *Seçim* ve bir sayıdan oluşan bir adla
eklenir. Katman, adı yazmaya hazır şekilde düzenleme için açılır. Hızlı maskeden
kaydetmek, Hızlı maske kaplamasının rengini ve opaklığını da korur.

Bir grubun içine kaydetmek için grubun menüsünü açın ve
**Geçerli seçimi grupta kaydet…** komutunu seçin.

## Yeni seçim katmanı

Bir seçim katmanını boş başlatıp seçimi boyayabilirsiniz.

Aşağıdakilerden birini yapın:

- **Seç > Yeni seçim katmanı** komutunu seçin.
- Katmanlar panelinin altındaki **Yeni seçim katmanı** düğmesini seçin.
- Bir grubun menüsünü açın ve **Grupta yeni seçim katmanı…** komutunu seçin.

## Seçim katmanı satırları

Bir seçim katmanının satırında seçimin küçük resmi, kaplamasını gösteren veya
gizleyen bir göz düğmesi ve küçük resmin yanında bir yükleme düğmesi bulunur.

Satırı seçmek katmanı düzenleme için açar. Seçim katmanlarının opaklığı,
karıştırma modu veya maskesi yoktur. Seçim katmanlarını birleştiremez ve
düzenleme dışında üzerlerine boyayamazsınız.

![Katmanlar panelinde, küçük resminin yanında yükleme düğmesi olan bir seçim katmanı satırı.](shot:selections/selection-layer-row)

## Seçim katmanını düzenleme

Bir seçim katmanını düzenlerken fırçalar, **Doldur** ve **Gradyan**, saklanan
seçimi [Hızlı maskedeki](/tr/docs/selections/quick-mask/) gibi değiştirir.
Özellikler paneli katmanın **Kaplama rengi** ve **Kaplama opaklığı** ayarlarını
ve ortak **Mod** ayarını gösterir.

Tuvalin altındaki [tuval çubuğunun](/tr/docs/selections/working/) başlığı
“Düzenleniyor:” ve katmanın adıdır. Tuval çubuğu gizliyse bu çubuk görünmez.

- **Yükle** katmanı geçerli seçim yapar ve çizime döner.
- **Tersine çevir** saklanan seçimi tersine çevirir ve katmanı düzenleme için açık tutar.
- **Çizime dön** düzenlemeyi bitirir. **Escape** de aynısını yapar.

Düzenlemeden sonra daha önce düzenlediğiniz katman yeniden etkin olur. Böyle bir
katman yoksa en üstteki boya katmanı etkin olur.

Saklanan seçimi iyileştirmek için seçim katmanının menüsünü açın ve
**Değiştir** altından seçin. **Seç > Seçimi genişlet…** ve **Seç** menüsündeki
diğer iyileştirme komutları önce çizime döner ve geçerli seçimi değiştirir.

![Yükle, Tersine çevir ve Çizime dön düğmeleriyle düzenlenen bir seçim katmanının tuval çubuğu.](shot:selections/selection-layer-bar)

## Seçim katmanını yükleme

Aşağıdakilerden birini yapın:

- **Seç > Seçimi yükle** menüsünü açın, katmanı seçin ve **Seçimi yükle**, **Seçime ekle**, **Seçimden çıkar**, **Seçimle kesiştir** veya **Ters seçimi yükle** komutunu seçin.
- Katmanın satırındaki yükleme düğmesini seçin.
- **Ctrl** tuşunu basılı tutun ve katmanın küçük resmine tıklayın. Eklemek için **Shift**, çıkarmak için **Alt**, kesiştirmek için **Shift+Alt** tuşlarını da basılı tutun.
- Katmanı düzenlerken tuval çubuğunda **Yükle** düğmesini seçin.

Yükleme önce çizime döner. Seçim katmanı olduğu gibi kalır. Gruplardaki
katmanlar **Seçimi yükle** altında *Grup 1 / Seçim 1* gibi grup yollarıyla
listelenir.

## Seçim katmanını değiştirme

Geçerli seçimi mevcut bir seçim katmanında saklamak için
**Seç > Seçim katmanını geçerli seçimle değiştir** komutunu seçin ve katmanı
seçin. Kilitli bir seçim katmanını değiştiremezsiniz.

## Seçim katmanı menüsü

Menüsünü açmak için bir seçim katmanının satırına sağ tıklayın veya satırı
basılı tutun.

- **Seçimi yükle**: Seç menüsündekiyle aynı beş öğe.
- **Değiştir**: **Geçerli seçimle değiştir**, **Tersine çevir**, **Tümünü seç**, **Temizle**, **Doldur**, **Genişlet…**, **Daralt…**, **Kenarları yumuşat…**, **Kenarlık…** ve **Düzleştir…**.
- **Düzenle**: **Seçili katmanları grupla**, **Köke taşı**, **Yukarı taşı**, **Aşağı taşı** ve **Gruba taşı**.
- **Yeniden adlandır…**, **Çoğalt**, **Sil** ve **Düzenlemeyi kilitle**. Kilitli bir katmanda **Düzenlemeyi kilitle** öğesinin adı **Düzenleme kilidini aç** olur.

Kilitli bir seçim katmanında **Değiştir** kullanılamaz. Birden çok katman
seçiliyken menü **Seçili katmanları çoğalt** ve **Seçili katmanları sil**
öğelerini gösterir.
