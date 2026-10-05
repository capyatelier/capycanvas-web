---
title: "Katmanlar paneli"
description: "Katman menüsü dâhil, Katmanlar panelinin her bölümünün gösterdikleri ve yaptıkları."
related: ["layers/working", "layers/settings", "layers/types", "layers/masks"]
---

**Katmanlar** paneli çizimin katmanlarını listeler. En öndeki katman en üsttedir.
Panel başlığı etkin katmanın ayarlarını gösterir.

![Bitmiş illüstrasyonun katmanlarını gösteren Katmanlar paneli.](shot:layers/panel "1 Başlık · 2 Katman satırları · 3 Alt düğmeler")

## Katmanlar panelini açma

Aşağıdakilerden birini yapın:

- **Pencere > Katmanlar** komutunu seçin.
- Boya'da sağ sütundaki **Katmanlar** öğesini seçin.
- Eskiz'de başlık çubuğundaki **Katmanlar paneli** düğmesini seçin.
- [Komut aramaya](/tr/docs/start/command-search/) “Katmanlar paneli” yazın.

Fotoğraf'ta panel sağ sütunda açıktır.

## Başlık

![Ribbon shading için Katmanlar paneli başlığı, Alttaki katmana kırp açık.](shot:layers/panel-header "1 Katman karıştırma modu · 2 Katman opaklığı · 3 Alfa kilidi · 4 Düzenlemeyi kilitle · 5 Alttaki katmana kırp · 6 Seçili katmanları referans olarak kullan")

1. **Katman karıştırma modu** geçerli modu gösterir ve [karıştırma menüsünü](/tr/docs/layers/blend-modes/) açar.
2. **Katman opaklığı**, 0 ile 100 arasında. Kaydırıcıyı sürükleyin veya bir değer yazın.
3. **Alfa kilidi**.
4. **Düzenlemeyi kilitle**.
5. **Alttaki katmana kırp**. Bir filtrede düğmenin adı **_katman_ üzerine uygula** veya **Alttaki katmanlara uygula** olur (bkz. [Filtrelerin uygulanması](/tr/docs/filters/how-filters-apply/)).
6. **Seçili katmanları referans olarak kullan**. Etkin katman tek seçili satırsa ve zaten referanssa düğmenin adı **Bu katmanı referans olarak kullanmayı bırak** olur.

Vurgulanan bir anahtar açıktır (bkz. [Katman ayarları](/tr/docs/layers/settings/)).
Seçim katmanlarında ve kilitli katmanlarda **Katman karıştırma modu** ve
**Katman opaklığı** kullanılamaz.

## Katman satırları

![Maskeli, Alfa kilidi açık ve opaklığı %80 olan Ribbon satırı.](shot:layers/panel-row "1 Göz · 2 Satır düğmesi · 3 Küçük resim · 4 Maske bağlantısı · 5 Maske küçük resmi · 6 Ad ve alt başlık · 7 Kilit · 8 Tutamaç")

Bir gruptaki katmanlar grubun altında içeriden başlar.

1. Göz simgesi katmanı gizler veya gösterir.
2. Satır düğmesi, etkin katmanı değiştirmeden satırı seçime ekler veya seçimden çıkarır. Boyayı alan katmanda fırça, referans katmanda deniz feneri, diğer seçili satırlarda onay işareti gösterir.
3. Katmanın piksellerine boyamak için küçük resmi seçin. Bir grupta küçük resim grubu genişletir veya daraltır.
4. Maskesi olan bir katmanda bağlantı düğmesi, maskenin katmanla birlikte taşınıp taşınmayacağını belirler (**Maskenin katmanla bağlantısını kaldır**, **Maskeyi katmana bağla**).
5. [Maskeye](/tr/docs/layers/masks/) boyamak için maske küçük resmini seçin.
6. Adın altındaki alt başlık; renk modu, karıştırma modu ve opaklık Tam renk, Normal ve %100 değilse bunları gösterir, örneğin “Çarp · %60”.
7. Kilit simgesi kilitli bir katmanı, alfa kilidi simgesi de **Alfa kilidi** açık bir katmanı belirtir.
8. [Katmanı taşımak](/tr/docs/layers/working/) için tutamacı sürükleyin.

Bir satırı seçtiğinizde o satır etkin katman ve tek seçili satır olur.
[Katman türleri](/tr/docs/layers/types/) her türün küçük resmini gösterir.

Bir boya katmanının opaklığını seçim olarak yüklemek için **Ctrl** tuşunu basılı
tutarak küçük resmine tıklayın. Maskeyi yüklemek için aynı şekilde maske küçük
resmine tıklayın. Seçime eklemek için **Shift**, seçimden çıkarmak için **Alt**,
seçimle kesiştirmek için **Shift+Alt** tuşlarını da basılı tutun.

## Satır göstergeleri

- Küçük resmin veya maske küçük resminin çevresindeki çerçeve, fırçaların neye boyadığını gösterir.
- Küçük resimlerin solundaki ray, [kırpılmış katmanları](/tr/docs/layers/settings/) tabanlarına bağlar.
- İki küçük resim arasındaki zincir halkası, [iliştirilmiş bir filtreyi](/tr/docs/filters/how-filters-apply/) altındaki satıra bağlar.
- Soluk, üstü çizili bir göz, açık olduğu hâlde grubu nedeniyle gizli kalan bir katmanı veya katmanı gizli olan iliştirilmiş bir filtreyi belirtir.
- Soluk bir maske küçük resmi, devre dışı bırakılmış bir maskeyi belirtir.
- [Hızlı maske](/tr/docs/selections/quick-mask/) açıkken en üstte bir **Hızlı maske** satırı görünür.

## Alt düğmeler

![Katmanlar panelinin altındaki düğmeler.](shot:layers/panel-footer "1 Yeni katman · 2 Yeni grup · 3 Yeni seçim katmanı · 4 Maske ekle · 5 Filtre ekle · 6 Görüntüyü katman olarak içe aktar… · 7 Seçili katmanları sil · 8 Katman eylemleri")

1. **Yeni katman** bir boya katmanı ekler.
2. **Yeni grup**. Birden çok satır seçiliyse bu satırları gruplar.
3. **Yeni seçim katmanı** (bkz. [Seçim katmanları](/tr/docs/selections/selection-layers/)).
4. **Maske ekle**.
5. **Filtre ekle** etkin katmana bir filtre iliştirir.
6. **Görüntüyü katman olarak içe aktar…**
7. **Seçili katmanları sil**.
8. **Katman eylemleri** etkin katmanın katman menüsünü açar.

Eylemi etkin katmana uygulanmayan bir düğme kullanılamaz, örneğin kilitli bir
katmanda **Maske ekle** (bkz. [Katmanlarla çalışma](/tr/docs/layers/working/)).

## Kaydırma ve basılı tutma

Kalemle veya parmakla:

- Bir satırın sağ ucunda **Sil** düğmesini göstermek için satırı sola kaydırın. Katmanı silmek için **Sil** düğmesini seçin. Düğmeyi gizlemek için satırı sağa kaydırın.
- Bir boya katmanında **Alfa kilidi** ayarını açmak veya kapatmak için satırı sağa kaydırın.
- Bir grupta **Geçiş** ayarını açmak veya kapatmak için satırı sağa kaydırın.
- Katman menüsünü açmak için bir satırı basılı tutun. Satırı sürüklemek için kaldırmadan hareket ettirin.

![Sola kaydırılmış, sağ ucunda Sil düğmesi görünen bir satır.](shot:layers/panel-swipe-delete)

Kısa bir kaydırma hiçbir şeyi değiştirmez. Kaydırma fareyle, tutamaçta veya
kilitli katmanlarda çalışmaz.

## Katman menüsü

Her katman için bir komut menüsü açabilirsiniz.

Aşağıdakilerden birini yapın:

- **Katman** menüsünü açın. Bu menü, etkin katmanın menüsünü **Filtre ekle** olmadan içerir.
- Bir satıra sağ tıklayın veya satırı kalemle ya da parmakla basılı tutun.
- Panelin altındaki **Katman eylemleri** düğmesini seçin.
- Bir satır odaktayken **Shift+F10** tuşlarına veya Menü tuşuna basın.

![Ribbon katmanının menüsü.](shot:layers/panel-menu)

| Öğe | İçerik |
| --- | --- |
| **Yeni** | **Yeni katman**, **Yeni kırpma katmanı**, **Yeni grup**, **Düz renk dolgusu**, **Gradyan dolgusu**, **Yeni açıklaştırma ve koyulaştırma katmanı**, **Seçimi yeni katmana kopyala**, **Seçimi kesip yeni katmana taşı** |
| **Filtre ekle** | Katmana iliştirilecek filtreler, kategoriye göre |
| **Düzenle** | **Katmanı yeniden adlandır…**, **Çoğalt**, **Seçili katmanları grupla** ve bir grup için **Grubu çöz** |
| **Karıştırma modu** | Tüm [karıştırma modları](/tr/docs/layers/blend-modes/) |
| **Katman ayarları** | [Katman ayarları](/tr/docs/layers/settings/) |
| **Maske** | [Maske](/tr/docs/layers/masks/) komutları |
| **Piksel seçimi** | **Katman opaklığını seç**, **Opaklığı seçime ekle**, **Opaklığı seçimden çıkar**, **Katman opaklığıyla kesiştir**, **Seçimi doldur**, **Seçimi tersine çevir**, **Piksel seçimini kaldır** |
| **Katman satırı seçimi** | **Tüm katman satırlarını seç**, **Katman satırı seçimini temizle** |
| **Görünürlük** | **Katmanı göster**, **Katmanı ve üst gruplarını göster**, **Seçili katmanları yalıt**, **Tüm katmanları göster** |
| **Katmanı / maskeyi taşı** | [İşlem](/tr/docs/transform/move-transform/) aracını seçer |
| **Alttakiyle birleştir**, **Görünenleri birleştir**, **Görünenlerden yeni katman oluştur**, **Görüntüyü düzleştir** | Bkz. [Katmanları birleştirme](/tr/docs/layers/merging/) |
| **Katmanın tamamını temizle**, **Katmanı sil** | **Katmanın tamamını temizle** yalnızca boya katmanlarında görünür |

Bir satırın menüsünü açmak o katmanı etkin katman yapar. Bir grubun menüsü
**Grupta yeni seçim katmanı…** ve **Geçerli seçimi grupta kaydet…** ile başlar.
Seçim katmanlarının kendi menüsü vardır (bkz.
[Katman türleri](/tr/docs/layers/types/)). [Maske menüsünü](/tr/docs/layers/masks/)
açmak için maske küçük resmine sağ tıklayın veya maske küçük resmini basılı tutun.
