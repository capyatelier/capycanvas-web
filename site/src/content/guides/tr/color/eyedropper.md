---
title: "Damlalık"
description: "Damlalık ile tuvalden boya rengi alma ve Tarz, Kaynak ve Örnek boyutu seçenekleri."
related: ["color/color-panel", "color/edit-color", "input/touch", "input/keyboard"]
---

Boyamak için tuvalden bir renk alabilirsiniz. Renk alındıktan sonra
kullandığınız araca geri dönülür.

## Damlalığı başlatma

Aşağıdakilerden birini yapın:

- **I** tuşuna basın (GIMP tarzı tuş eşlemesinde **O**).
- Komut aramada **Damlalık** öğesini seçin.
- Boya ve Fotoğraf'ta Araçlar çubuğunda **Damlalık** düğmesini seçin.
- Eskiz'de sol kenardaki çubukta, boyut ve opaklık kaydırıcılarının arasındaki **Renk seçici** düğmesini seçin.

Renk almadan durdurmak için **I** tuşuna basın veya aynı düğmeyi yeniden seçin,
**Escape** tuşuna basın ya da başka bir araç veya fırça seçin. Basılı tutmadan
yapılan bir parmak dokunuşu da Damlalığı durdurur.

## Renk alma

Rengin Renk panelinde önizlemesini görmek için tuvalin üzerinde gezinin. Boya
rengi yalnızca rengi aldığınızda değişir.

| Giriş | Önizleme | Alma |
| --- | --- | --- |
| Fare | Üzerine gelme | Tıklama |
| Kalem | Üzerine gelme veya kalemi bastırma | Kalemi kaldırma |
| Parmak | Dokunma | Parmağı kaldırma |

Parmakla örnekleme noktası parmak ucunun üstündedir.

Saydam piksellerden renk alınmaz ve alınan renkler her zaman opaktır. Renkler
çizimin renk uzayında alınır. HDR çiziminde alınan renk SDR beyazından daha
parlak olabilir. Maske düzenlerken alınan renk maske rengini ayarlar.

## Boyarken renk alma

Bir fırça ya da Karıştır, Sıvılaştır, Doldur veya Gradyan aracı seçiliyken
**Alt** tuşunu basılı tutun. Her tıklama bir renk alır. Araca dönmek için
**Alt** tuşunu bırakın.

Krita tarzı ve GIMP tarzı tuş eşlemeleri bunun yerine **Ctrl** kullanır.
[Klavye kısayolları](/tr/docs/input/keyboard/) sayfasında bu kısayol **Basılı
tutulurken Renk örnekle** olarak geçer. **Kalem ve giriş** sayfasında
Damlalık'a bir kalem düğmesi de atayabilirsiniz ([Kalem](/tr/docs/input/pen/)).

## Parmağı basılı tutma

Herhangi bir araçla renk almaya başlamak için bir parmağınızı tuvalde sabit
tutun. Rengi almak ve araca dönmek için parmağınızı kaldırın.

- Web'de ve iPad'de basılı tutma yarım saniye sürer. Android, Windows ve Linux sistemin uzun basma süresini kullanır.
- Seçici başlamadan önce parmağı hareket ettirmek basılı tutmayı iptal eder.
- Basılı tutma yalnızca tuvalde tek parmak varken ve sürmekte olan başka bir işlem yokken çalışır.
- Basılı tutarken **Kaynak** ayarını **Görünür renk** ile **Seçili katman** arasında değiştirmek için ikinci bir parmakla dokunun.

## Tarz

Renk alırken Araç seçenekleri çubuğunda (Fotoğraf'ta pencerenin üstünde)
**Tarz** seçeneğini belirleyin:

- **Renk seçici** yuvarlak bir büyüteç gösterir. Halkasının üst yarısı örneklenen rengi, alt yarısı geçerli rengi gösterir.
- **Damlalık**, ucu örneklenen noktada olan bir pipet imleci gösterir.

![Kırmızı bir darbenin üzerinde Renk seçici büyüteci: halkasında örneklenen ve geçerli renkler.](shot:color/eyedropper-loupe)

Dokunmatik girişte her zaman büyüteç kullanılır. Eskiz'de **Renk seçici**
düğmesini seçmek **Tarz** ayarını **Renk seçici** yapar. **Kaynak** ayarı
**Seçili katman** olduğunda küçük bir katman işareti görünür.

## Kaynak ve Örnek boyutu

Bunları renk alırken Araç panelinde veya Araç seçenekleri çubuğunda ayarlayın.
Eskiz'de bu ayarları açmak için **Renk seçici** düğmesine çift tıklayın veya
çift dokunun.

![Renk alırken Araç paneli: Kaynak ve Örnek boyutu.](shot:color/eyedropper-settings)

### Kaynak

**Görünür renk** (varsayılan) çizimi gördüğünüz gibi örnekler. **Seçili katman**
ise seçili katmanın kendi boyasını opaklığı, maskeleri ve kırpması uygulanmadan
önceki hâliyle örnekler. **Seçili katman** yalnızca kilitsiz bir boya katmanı
için sunulur.

### Örnek boyutu

**Tek piksel** (varsayılan), **5 px daire**, **15 px daire**, **51 px daire**
veya **101 px daire**. Daire, içindeki piksellerin ortalamasını alır.
