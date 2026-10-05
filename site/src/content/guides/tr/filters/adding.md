---
title: "Filtre ekleme ve düzenleme"
description: "Filtre ekleme ve filtre ayarlarını Özellikler panelinde değiştirme."
related: ["filters/how-filters-apply", "filters/tone", "filters/color", "start/command-search"]
---

Bir filtreyi [kendi katmanında veya tek bir katmana iliştirilmiş olarak](/tr/docs/filters/how-filters-apply/)
ekleyebilir ve ayarlarını **Özellikler** panelinde değiştirebilirsiniz.

## Filtreler paneli

**Filtreler** panelinde bir filtreyi seçerek onu kendi katmanında
ekleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Pencere > Filtreler** komutunu seçin.
- Boya ve Fotoğraf'ta sağ sütunda **Özellikler** sekmesinin yanındaki **Filtreler** sekmesini seçin.
- Eskiz'de başlık çubuğundaki **Filtreler** düğmesini seçin.

![Kategori menüsü, arama düğmesi ve önizlemeli filtre satırlarıyla Filtreler paneli.](shot:filters/filters-panel)

Bir katman seçiliyken her satır, filtreyi o katman ve altındaki katmanlar
üzerinde önizler. Hareketli filtrelerin simgesinden önce bir işaret bulunur.

Üstteki menü tek bir kategoriyi veya **Tüm filtreler** seçeneğini gösterir.
**Filtrelerde ara**, seçilen kategori içinde bir filtreyi adıyla bulur.

Bir filtre ekledikten sonra **Özellikler** paneli **Filtreler** panelinin
yanında öne gelir.

## Filtre menüsü

**Filtre** menüsünden bir filtreyi kendi katmanında ekleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Filtre** menüsünden bir kategori ve bir filtre seçin.
- Eskiz'de **Ana menü > Filtre** menüsünü açın, ardından bir kategori ve bir filtre seçin.
- Filtrenin adını [komut aramaya](/tr/docs/start/command-search/) yazın.

Menüde ayrıca [**Frekans ayrımı…**](/tr/docs/retouch/dodge-burn/) bulunur ve
menünün **Dolgu** alt menüsü [dolgu katmanları](/tr/docs/layers/types/) ekler.
Hızlı maskede veya bir seçim katmanını düzenlerken filtre eklenemez.

## Ayarla

Geçerli seçime göre maskelenmiş bir filtre ekleyebilirsiniz. Tuvaldeki seçim
çubuğunda **Ayarla** düğmesini seçin, ardından bir kategori ve bir filtre seçin.

![Ayarla menüsü Ton kategorisinde açık olan seçim çubuğu.](shot:filters/selection-adjust)

## Filtre ekle

Seçili katmana bir filtre iliştirebilirsiniz.

Aşağıdakilerden birini yapın:

- Katmanlar panelinin veya **Özellikler** panelinin altındaki **Filtre ekle** düğmesini seçin.
- Katmanın menüsünü açın ve **Filtre ekle** öğesini seçin.

![Katmanlar panelinin altından açılan Filtre ekle menüsü.](shot:filters/add-filter-menu)

**Filtre ekle** kilitsiz boya katmanlarında, fotoğraf katmanlarında ve Geçiş
ayarlı olmayan gruplarda çalışır. Menüsünde **Dolgu** dışındaki tüm kategoriler
bulunur.

## Eskiz Filtreler çekmecesi

Eskiz'de **Filtreler** çekmecesinde filtre seçebilir ve
ayarlarını değiştirebilirsiniz. Başlık çubuğundaki **Filtreler** düğmesini
seçin, ardından **Filtre türü** altında bir kategori ve **Filtreler** altında bir
filtre seçin.

![Filtre türü, Filtreler ve Özellikler sütunlarıyla Eskiz Filtreler çekmecesi.](shot:filters/sketch-drawer)

| Seçili katman | Çekmecede filtre seçmek |
| --- | --- |
| Bir filtre | Filtreyi değiştirir; adını, maskesini, opaklığını, karıştırma modunu ve yerini korur |
| Kırpılmış bir katman | Filtreyi o katmana iliştirir |
| Diğer katmanlar | Filtreyi katmanın üstünde kendi katmanında ekler |

**Filtre türü** sütununun altındaki **İptal** seçili filtreyi siler ve
çekmeceyi kapatır. Filtreyi korumak için başlık çubuğundaki **Filtreler**
düğmesini yeniden seçin.

## Özellikler paneli

Seçili filtrenin ayarlarını **Özellikler** panelinde değiştirebilirsiniz.

Aşağıdakilerden birini yapın:

- **Pencere > Özellikler** komutunu seçin.
- Boya ve Fotoğraf'ta sağ sütundaki **Özellikler** sekmesini seçin.
- Eskiz'de **Filtreler** çekmecesinin sağ sütununu kullanın.

![Sayfa menüsü, Noktadan örnek al, Hedefli ayar ve eğri grafiğiyle Eğriler için Özellikler paneli.](shot:filters/properties-curves)

| Denetim | Kullanım |
| --- | --- |
| Sayfa menüsü | Bir filtrenin ayarlarından tek bir sayfayı gösterir, örneğin **Eğriler** filtresinin **Kırmızı** eğrisi. |
| Kaydırıcı | Sürükleyin veya **−** ya da **+** düğmesini seçin. Bir sayı, birim veya `85/2` gibi bir ifade yazmak için değeri seçin. Varsayılanı geri yüklemek için değeri temizleyin. |
| Renk | [Rengi düzenle](/tr/docs/color/edit-color/) penceresini açar. **Seçili rengi kullan** rengi geçerli renge ayarlar. |
| Gradyan | Durakları [Gradyan](/tr/docs/drawing/gradient/) aracındaki gibi düzenler. |

Her sürükleme tek bir geri alma adımıdır. Sürükleme sırasında **Escape** değeri
geri yükler. Bazı ayarlar kaydırıcının uçlarının ötesinde yazılan değerleri
kabul eder.

px cinsinden boyutlar tuval pikselidir. [**Görüntü boyutu…**](/tr/docs/transform/image/)
komutundan sonra efekt görüntüyle birlikte ölçeklenir ve sayı aynı kalır.

**Gölgeler/Parlak alanlar**, **Netlik** veya **Sisi gider** güncellenirken panel
başlığı “Güncelleniyor…” ile biter. Kilitli bir filtrenin ayarları
değiştirilemez.

## Tonları görüntüden ayarlama

**Düzeyler**, **Eğriler** ve **Beyaz dengesi** filtrelerinde, **Özellikler**
panelinin üstünde görüntüyü filtreye ulaştığı hâliyle okuyan düğmeler bulunur.

| Düğme | Filtre | İşlevi |
| --- | --- | --- |
| **Noktadan örnek al > Siyah nokta seç**, **Nötr nokta seç** veya **Beyaz nokta seç** | **Düzeyler**, **Eğriler** | O noktayı ayarlamak için tuvale tıklayın. |
| **Nötr nokta seç** | **Beyaz dengesi** | Noktayı nötr yapacak şekilde **Sıcaklık** ve **Renk tonu** değerlerini ayarlamak için tuvale tıklayın. |
| **Otomatik** | **Düzeyler** | Geçerli sayfanın giriş **Siyah**, **Beyaz** ve **Orta tonlar** değerlerini görüntüden ayarlar. Çalışırken adı **İptal** olur. |
| **Hedefli ayar** | **Eğriler** | İşaretçinin altındaki tonda eğriyi yükseltmek veya alçaltmak için tuvalde yukarı ya da aşağı sürükleyin. |

**RGB** sayfasında düğmeler tüm kanalları, bir kanal sayfasında yalnızca o kanalı
değiştirir.

Bir seçici veya **Hedefli ayar** açıkken tuvalin altındaki bir çubuk bir
yönerge ile **İptal** ya da **Bitti** düğmesini gösterir. Bir nokta
kullanılamıyorsa bir ileti görünür ve seçici açık kalır.

## Histogram paneli

Görüntünün tonlarını **Histogram** panelinde inceleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Pencere > Histogram** komutunu seçin.
- Fotoğraf'ta sağ sütunun üstündeki **Histogram** sekmesini seçin.

![Kaynak ve kanal menüleri, grafik ve kırpılma düğmeleriyle Histogram paneli.](shot:filters/histogram)

| Denetim | Seçenekler |
| --- | --- |
| Kaynak menüsü (başta **Görünür**) | **Görünür**, **Seçili katman**, **Referans** (**Referans olarak kullan** ayarlı katmanlar), **Seçim** (seçimin içindeki görünür görüntü) |
| Kanal menüsü (başta **RGB**) | **RGB**, **Kırmızı**, **Yeşil**, **Mavi**, **Parlaklık** |
| **Logaritmik sayımlar** | Piksel sayılarını logaritmik ölçekte gösterir. |
| **Gölgeler**, **Açık tonlar** | Tuvalde kırpılmış alanları işaretler. HDR bir çizimde adları **Gölgeler (SDR)** ve **Açık tonlar (SDR)** olur. |

Sayım tamamlandığında grafiğin altındaki durumda “Kesin” yazar.

## Dalga biçimi paneli

Görüntü boyunca soldan sağa parlaklığı ve rengi **Dalga biçimi** panelinde
görebilirsiniz.

Aşağıdakilerden birini yapın:

- **Pencere > Dalga biçimi** komutunu seçin.
- Fotoğraf'ta **Histogram** sekmesinin yanındaki **Dalga biçimi** sekmesini seçin.

Panelin kendi kanal menüsü ve **Logaritmik sayımlar** seçeneği vardır. Kaynak
menüsü ve kırpılma düğmeleri **Histogram** paneliyle ortaktır.
