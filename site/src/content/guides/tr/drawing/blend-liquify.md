---
title: "Karıştır ve Sıvılaştır"
description: "Katmandaki boyayı sürüp dağıtmak ve pikselleri taşımak için Karıştır ve Sıvılaştır araçları."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

Katmandaki boyayı **Karıştır** ile sürüp karıştırabilir, katmanın piksellerini
**Sıvılaştır** ile taşıyabilirsiniz.

## Karıştır

Aşağıdakilerden birini yapın:

- **J** tuşuna basın.
- Boya'da Araçlar çubuğunda **Karıştır** düğmesini seçin. **Klonlama damgası** da aynı düğmededir.
- Fotoğraf'ta Araçlar çubuğunda **Karıştır** düğmesini seçin.
- Eskiz'de **Şekillendir** çekmecesinde bir karıştırıcı seçin.
- Komut aramada **Karıştır** öğesini arayın.

**Araç seti** içinde bir set ve bir karıştırıcı seçin. Varsayılan karıştırıcı:
**Lekeleme**.

| Set | Karıştırıcılar |
| --- | --- |
| **Karıştır** | **Lekeleme**, **Yumuşak karıştırıcı**, **Bulanıklaştırma**, **Kâğıt karıştırma kalemi**, **Kâğıt mendil**, **Grenli karıştırıcı**, **Dokuyu koruyan karıştırıcı**, **Ton karıştırıcı** |
| **Islak boya** | **Doğal karıştırıcı**, **Islak karıştırıcı**, **Renk karıştırıcı**, **Karıştırma bıçağı**, **Kıl karıştırıcı** |
| **Efektler** | **Ressamca karıştırıcı**, **Tarak karıştırıcı**, **Dağınık karıştırıcı**, **Keskinleştirme**, **Ebru**, **Kristal karıştırıcı**, **Dither karıştırıcı** |

Her karıştırıcının ayarları
[Karıştırma, yayılma ve kıllar](/tr/docs/brushes/wet-media/) bölümündedir.

### Kıl karıştırıcı

**Kıl karıştırıcı** boyayı çizgiler halinde çeker. Bu numunenin sol ucu harmanlanmamıştır.

![Kıl karıştırıcı sağdaki gölgeli boyayı çiziyor.](shot:examples/bristle-blender)

### Dither karıştırıcı

**Dither karıştırıcı**, bantları bir renk taklidi düzeninde karıştırır.

![Dither karıştırıcı sağdaki gölgeli bantları karıştırıyor.](shot:examples/dither-blender)

### Ebru

**Ebru** boyayı kıvrımlar halinde kıvırır.

![Ebru sağdaki gölgeli bantları kıvırıyor.](shot:examples/marbling)

## Sıvılaştır

Aşağıdakilerden birini yapın:

- Karıştır etkinken **J** tuşuna basın.
- Boya'da veya Fotoğraf'ta Araçlar çubuğunda **Sıvılaştır** düğmesini seçin. Bir mod seçmek için düğmeye sağ tıklayın veya düğmeyi basılı tutun.
- Eskiz'de **Şekillendir** çekmecesindeki **Sıvılaştır** setinde bir mod seçin.
- Komut aramada **Sıvılaştır** öğesini arayın.

Her mod, **Araç seti** içinde bir hazır ayardır:

| Hazır ayar | Etki |
| --- | --- |
| **Sıvılaştırma itme** | Pikselleri darbe boyunca sürükler. |
| **Sıvılaştırma saat yönünün tersine döndürme** | Pikselleri fırçanın merkezi çevresinde saat yönünün tersine döndürür. |
| **Sıvılaştırma saat yönünde döndürme** | Pikselleri fırçanın merkezi çevresinde saat yönünde döndürür. |
| **Sıvılaştırma sıkıştırma** | Pikselleri fırçanın merkezine doğru çeker. |
| **Sıvılaştırma genişletme** | Pikselleri fırçanın merkezinden dışarı doğru iter. |
| **Sıvılaştırma kristalleri** | Fırçanın altındaki görüntüyü küçük, dağınık hücrelere böler. |
| **Kenar** | Pikselleri iki yandan darbe çizgisine doğru çeker. |
| **Yeniden oluştur** | Fırçanın altında Sıvılaştırma ile yapılan deformasyonu geri alır. |

Sıvılaştır'ın Uygula düğmesi yoktur. Her darbe katmanı değiştirir ve kendi
başına bir geri alma adımıdır. Siz katmana boyayana, katmanı doldurana,
filtreleyene, dönüştürene veya katmana yapıştırana kadar darbeler, katmanın ilk
darbeden önceki piksellerini bozmayı sürdürür.

### Kenar

**Kenar** boyayı kontur çizgisine doğru çeker. Soldaki bantlar orijinal boyayı göstermektedir.

![Kenar renkli bantları sağdaki yatay çizgiye doğru çekiyor.](shot:examples/liquify-edge)

### Yeniden oluştur

**Yeniden oluştur** fırçanın altındaki orijinal boyayı geri kazandırır. Burada bozuk bantların sağ yarısını geri yükler.

![Solda bozuk bantlar ve sağda Yeniden oluştur ile onarılmış boya.](shot:examples/liquify-reconstruct)

## Sıvılaştırmayı ayarla ve Sıvılaştırmayı sıfırla

Bir katmanda Sıvılaştır'ın yaptığı her şeyi **Sıvılaştırmayı ayarla** ile
azaltabilir ya da katmanı ilk darbeden önceki piksellerine **Sıvılaştırmayı
sıfırla** ile döndürebilirsiniz.

Aşağıdakilerden birini yapın:

- **Araç** panelinde **Sıvılaştırmayı ayarla** seçeneğini açın veya **Sıvılaştırmayı sıfırla** düğmesini seçin.
- Komut aramada **Sıvılaştırmayı ayarla** veya **Sıvılaştırmayı sıfırla** öğesini arayın.

**Sıvılaştırmayı ayarla** açıkken **Araç** panelinde bir **Miktar** kaydırıcısı
görünür. %100'de deformasyon olduğu gibi kalır, %0'da ortadan kalkar.
Kaydırıcıyı bırakmak tek bir geri alma adımıdır, **Sıvılaştırmayı sıfırla** da
öyle.

Katmanda Sıvılaştırma değişikliği olana kadar iki komut da kullanılamaz ve
“Önce bu katmana sıvılaştırma uygulayın” iletisi görünür.

## Sıvılaştırma ayarları

![Sıvılaştırma kristalleri için Araç paneli: Güç, ardından Bozulma ve Momentum'u gösteren Sıvılaştırma grubu, Sıvılaştırmayı ayarla ve Sıvılaştırmayı sıfırla.](shot:drawing/liquify-settings)

**Bozulma** ve **Momentum**, **Araç** panelinin **Sıvılaştırma** grubundadır.

### Güç

Her fırça izinin pikselleri ne kadar taşıyacağını belirler. Etki, hafif kalem
basıncında ve yumuşak bir ucun kenarına doğru zayıflar.

### Bozulma

Hareketi düzensiz yapar. **Sıvılaştırma kristalleri** modunda hücrelerin ne
kadar dağılacağını belirler. **Yeniden oluştur** modunda **Bozulma** yoktur.

### Momentum

Kalemi kaldırdıktan sonra etkiyi darbenin son yönünde sürdürür. **Yeniden
oluştur** modunda **Momentum** yoktur.

## Eskiz'de Şekillendir çekmecesi

Eskiz'de son Karıştır, Sıvılaştır veya Rötuş aracını kullanmak için başlık
çubuğunda **Şekillendir** düğmesini seçin, çekmecesini açmak için yeniden,
çekmeceyi kapatmak için bir kez daha seçin. Çekmece setleri, seçilen setin
araçlarını ve ayarlarını listeler. **Şekillendir** ve **Fırça**, kendi son hazır
ayarlarını ve fırça boyutlarını ayrı ayrı korur.

![Eskiz'de Şekillendir çekmecesi: solda Karıştır, Islak boya, Efektler, Sıvılaştır ve Rötuş setleri, ortada Karıştır setinin karıştırıcıları, sağda Lekeleme ayarları.](shot:drawing/sketch-sculpt-drawer)

## Maskeye boyama

Karıştır ve Sıvılaştır maskede pikselleri dağıtmadan veya taşımadan düz kapsam
boyar. Her maskedeki bu türden ilk darbe bir bildirim gösterir.
