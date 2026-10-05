---
title: "Klonlama ve düzeltme"
description: "Klonlama damgası, düzeltme fırçaları ve bunların kopyaladığı kaynak."
related: ["retouch/dodge-burn", "layers/settings", "brushes/basics", "photo/retouch"]
---

Kusurların üzerini görüntünün başka bir yerinden kopyalanan piksellerle
boyayabilirsiniz.

| Araç | İşlevi |
| --- | --- |
| **Klonlama damgası** | Kaynak diskinden kopyalanan piksellerle boyar. |
| **Düzeltme fırçası** | **Klonlama damgası** gibi boyar. Kalemi kaldırdığınızda kopya, fırça darbesinin çevresindeki rengi ve parlaklığı alır, dokusunu korur. |
| **Nokta düzeltme fırçası** | Kalemi kaldırdığınızda üzerini boyadığınız lekeyi yakındaki en benzer alandan alınan dokuyla değiştirir ve çevresine karıştırır. |

## Rötuş aracı seçme

Aşağıdakilerden birini yapın:

- **S** tuşuna basın. **Düzeltme fırçası**, ardından **Nokta düzeltme fırçası** aracına geçmek için tuşa yeniden basın.
- Fotoğraf'ta Araçlar çubuğundaki **Klonlama damgası** veya **Nokta düzeltme fırçası / Düzeltme fırçası** düğmesini seçin.
- Boya'da Araçlar çubuğundaki **Karıştır / Klonlama damgası** düğmesini seçin. **Klonlama damgası** aracını seçmek için düğmeye sağ tıklayın veya düğmeyi basılı tutun.
- Eskiz'de başlık çubuğundaki **Şekillendir** düğmesini seçin, çekmeceyi açmak için düğmeyi yeniden seçin ve **Klonla**, **Düzelt** veya **Nokta düzeltme** seçeneğini seçin.
- Aracın adını [komut aramaya](/tr/docs/start/command-search/) yazın.

Boya'da **Düzeltme fırçası** ve **Nokta düzeltme fırçası** için düğme
yoktur.

Her araç bir fırçadır. Araç panelinde **Fırça boyutu**, **Opaklık**, **Akış** ve
**Uç** ayarları bulunur (bkz. [Boyut, opaklık ve akış](/tr/docs/brushes/basics/)).

![Fırça ayarları ve kaynak ayarlarıyla Klonlama damgası için Araç paneli.](shot:retouch/clone-tool-panel)

## Kaynak

Araç panelindeki **Kaynak**, araçların neyi kopyalayacağını belirler:

- **Referans katmanlar** (varsayılan) boyadığınız katmanı, altındaki referans olarak işaretlenmiş katmanlarla birlikte kopyalar.
- **Düzenlenen katman** yalnızca boyadığınız katmanı kopyalar.

**Referans katmanlar** ile fotoğrafın üstündeki boş bir katmanda rötuş
yapabilirsiniz. Fotoğrafı [Referans olarak kullan](/tr/docs/layers/settings/) ile
işaretleyin veya **Katman > Katman ayarları > Alttaki katmanı referans olarak kullan**
komutunu seçin. Boş bir katmana boyarsanız ve altında işaretli bir referans
yoksa ileti **_ad_ katmanını referans olarak kullan** seçeneğini sunar.

Ölçeklenmiş veya döndürülmüş bir katmanda doğrudan rötuş yapamazsınız.
Ölçeklenmiş veya döndürülmüş katmanın üstündeki yeni bir katmanda rötuş yapın.

## Kaynağı ayarlama

**Klonlama damgası** ve **Düzeltme fırçası**, artı işaretli küçük bir halka olan
kaynak diskinden kopyalar.

Aşağıdakilerden birini yapın:

- **Alt** tuşunu basılı tutun ve kopyalamak istediğiniz yere tıklayın.
- **Kaynağı ayarla** düğmesini seçin, ardından tıklayın.

Siz ayarlayana kadar kaynak görünümün ortasındadır. Kaynağı taşımak için diski
sürükleyin. Parmak diski sürükleyebilir, ancak kaynağı hiçbir zaman ayarlamaz.
Boyarken disk kopyalanan noktayı izler.

**Nokta düzeltme fırçası** kendi kaynağını bulur ve diski yoktur.

## Kaynak ayarları

Bu ayarlar **Klonlama damgası** ve **Düzeltme fırçası** içindir.

### Hizalı kaynak

Fırça darbeleri boyunca kaynak ile fırça arasında tek bir ofset tutar. Kapalıyken
her fırça darbesi kaynak diskinden kopyalamaya başlar. Varsayılan olarak
açıktır.

### Kaynağı yatay çevir ve Kaynağı dikey çevir

Kopyalanan pikselleri kaynak diski çevresinde yansıtır.

### Kaynak ofsetini sıfırla

Sonraki fırça darbesinin kaynak diskinden yeniden kopyalamaya başlamasını
sağlar. Hizalı bir fırça darbesinden sonra kullanılabilir.

### Kaynağı ayarla

Sonraki tıklama kaynağı ayarlar.

## Kaynak diski için tuval çubuğu

Kaynak diskine sürüklemeden tıklayarak yanında **Hizalı**, **Kaynak**, iki
çevirme düğmesi, **Ofseti sıfırla** ve **Kaynağı ayarla** düğmelerini içeren
[tuval çubuğunu](/tr/docs/selections/working/) gösterin. Çubuğu gizlemek için
diske yeniden tıklayın veya başka bir araç seçin.

![Kaynak diski ve tuval çubuğu.](shot:retouch/clone-source-bar)
