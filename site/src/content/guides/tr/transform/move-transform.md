---
title: "Taşıma ve dönüştürme"
description: "İşlem aracı ve Dönüştür ile katmanları ve seçili pikselleri taşıma ve dönüştürme."
related: ["selections/working", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Katmanları ve seçili pikselleri **İşlem** aracıyla taşıyabilir, **Dönüştür**
ile ölçekleyebilir, döndürebilir, eğebilir, bozabilir veya çarpıtabilirsiniz.

## İşlem aracı

Aşağıdakilerden birini yapın:

- Katmanlar panelinde bir katmanın menüsünü açın ve **Katmanı / maskeyi taşı** komutunu seçin.
- **O** tuşuna basın.
- Boya ve Fotoğraf'ta Araçlar çubuğundaki **İşlem / Dönüştür** düğmesini seçin. **İşlem** aracını seçmek için düğmeye sağ tıklayın veya düğmeyi basılı tutun.
- [Komut aramaya](/tr/docs/start/command-search/) “İşlem” yazın.

Eskiz'de **İşlem** düğmesi yoktur.

## Katmanları taşıma

Seçim yokken seçili katmanları taşımak için tuvalde sürükleyin. Ok tuşları
katmanları 1 px, **Shift** ile 10 px kaydırır.

Kilitli bir katmanı taşıyamazsınız.

## Seçili pikselleri taşıma

Seçim varken etkin boya katmanının seçili piksellerini tam piksel adımlarıyla
taşımak için sürükleyin. Bir maskeyi düzenlerken **İşlem** maskeyi taşır.

Kılavuzlar gösterilirken **İşlem** kılavuzları da seçer ve sürükler (bkz.
[Cetveller ve kılavuzlar](/tr/docs/drawing/ruler/)).

## Kopya bırak

Seçili piksellerin bir kopyasını taşıyıp özgün pikselleri yerinde
bırakabilirsiniz.

Araç panelinde veya [seçim çubuğunda](/tr/docs/selections/working/)
**Kopya bırak** seçeneğini açın. Tek bir sürükleme için tersini yapmak üzere
sürüklemeye başlarken **Alt** tuşunu basılı tutun.

## Dönüştür

Aşağıdakilerden birini yapın:

- **Düzenle > Dönüştür** komutunu seçin.
- **Ctrl+T** tuşlarına basın.
- Boya ve Fotoğraf'ta Komutlar çubuğundaki, Eskiz'de başlık çubuğundaki **Dönüştür** düğmesini seçin.
- Seçim çubuğunda **Dönüştür** düğmesini seçin.
- Boya ve Fotoğraf'ta Araçlar çubuğundaki **İşlem / Dönüştür** düğmesine sağ tıklayın veya düğmeyi basılı tutun ve **Dönüştür** aracını seçin.

Seçim varken **Dönüştür** etkin katmanın veya maskenin seçili piksellerini
değiştirir. Seçim yoksa seçili katmanları değiştirir. Tutamaçlı bir kutu ve
tuval çubuğu görünür.

Bitirmek için **Uygula** düğmesini seçin veya **Enter** tuşuna basın. **İptal**
veya **Escape** dönüştürmeyi atar. Katmanları dönüştürürken **Geri al** da aynı
işi yapar.

Birden çok katmanı dönüştürmek için önce seçimi temizleyin.

## Tutamaçlar

**Serbest** ve **Orantılı** modlarında:

- Kutuyu taşımak için kutunun içinde sürükleyin. Yalnızca yatay veya dikey taşımak için **Shift** tuşunu basılı tutun.
- Karşı kenardan ölçeklemek için bir köşe veya kenar tutamacını sürükleyin. Oranları korumak için **Shift**, pivot noktası çevresinde ölçeklemek için **Alt** tuşunu basılı tutun.
- Eğmek için **Ctrl** tuşunu basılı tutarak bir kenar tutamacını sürükleyin. Eğim en fazla 85°'dir.
- Pivot noktası çevresinde döndürmek için üst kenarın üstündeki tutamacı sürükleyin. 15°'lik adımlar için **Shift** tuşunu basılı tutun.
- Pivot noktasını taşımak için sürükleyin.

**Boz** modunda:

- Bir köşeyi tek başına taşımak için köşeyi, bir kenarı taşımak için kenar tutamacını sürükleyin.
- Simetrik perspektif için bir köşede **Shift** tuşunu basılı tutarak hareketi komşu köşeye yansıtın.

**Çarpıt** modunda:

- Ağ noktalarını ve seçili noktanın teğet tutamaçlarını sürükleyin.
- Birden çok noktayı birlikte taşımak için **Shift** tuşunu basılı tutarak noktalara tıklayın.

Tüm modlarda:

- Ok tuşları kutuyu 1 px, **Shift** ile 10 px kaydırır.
- Dokunmatik ekranda bir tutamacın üstündeki veya kutunun içindeki parmak onu sürükler. Başka bir yerdeki parmak görünümü taşır.

## Dönüştürme çubuğu

![Mod, Hizala, çevirme ve döndürme düğmeleri, Sıfırla, Enterpolasyon, İptal ve Uygula ile dönüştürme için tuval çubuğu.](shot:transform/transform-bar)

### Mod

**Serbest**, **Orantılı**, **Boz** veya **Çarpıt**. **Orantılı** oranları
korur. Katman dönüştürmeleri **Orantılı** modunda açılır.

### Özgün boyut

Yerleştirilmiş bir fotoğrafı %100'e döndürür. Yalnızca **Boz** veya **Çarpıt**
uygulanmamış fotoğraflar için.

### Hizala

Kutunun kenarlarını ve merkezini tuvale, diğer görünür katmanlara ve
kılavuzlara hizalar. Döndürme hizalanmaz. Varsayılan olarak kapalıdır.

### Perspektif

**Boz** ile her köşe sürüklemesini komşu köşeye yansıtır.

### Çarpıtma ızgarası

**Çarpıt** ile:

- **Izgarayı böl**: **Dikey böl**, **Yatay böl** veya **İki yönde böl** seçeneğini seçin, ardından şekli değiştirmeden oraya bir ızgara çizgisi eklemek için çarpıtmaya dokunun. **Escape** bölmeyi iptal eder. Bir ızgara her yönde en fazla 32 hücre tutar.
- **Noktaları seç**: noktaları seçip birlikte taşımak için noktalara dokunun.
- **Izgarayı sıfırla**: çarpıtmayı düz bir ızgarayla değiştirir.
- **Izgara**: **3 × 3** (varsayılan), **4 × 4** veya **5 × 5**. Şekli değiştirene kadar kullanılabilir.

![Çarpıt modunda Izgarayı böl, Noktaları seç, Izgarayı sıfırla ve Izgara ile tuval çubuğu.](shot:transform/warp-bar)

### Çevirme ve döndürme düğmeleri

**Yatay çevir**, **Dikey çevir**, **90° sola döndür** ve **90° sağa döndür**
simge düğmeleri içeriği pivot noktası çevresinde yansıtır veya döndürür.

### Sıfırla

Bu dönüştürmede yapılan tüm değişiklikleri geri alır ve dönüştürmeyi açık
tutar. **Mod** **Serbest** ayarına döner.

### Enterpolasyon

Piksellerin nasıl yeniden örnekleneceğini belirler: **En yakın**,
**Çift doğrusal**, **Çift kübik** veya **Lanczos**. **Serbest** ve **Orantılı**
modlarında varsayılan **Çift doğrusal**, **Boz** ve **Çarpıt** modlarında
**Çift kübik** seçeneğidir.

## Araç panelindeki dönüştürme değerleri

Araç paneli ve Fotoğraf'ta Araç seçenekleri çubuğu, açık bir
dönüştürmenin değerlerini gösterir. **Çarpıt** modunda gösterilmez.

- **Konum sabitleme noktası**: piksel cinsinden **X** ve **Y**. Üstlerindeki sabitleme ızgarası, bu değerlerin kutunun hangi noktasını verdiğini belirler.
- **Ölçek**: yüzde cinsinden **Genişlik** ve **Yükseklik**. **Orantılı** bunları bağlı tutar.
- **Döndürme**: −180° ile 180° arasında **Açı**.
- **Eğme**: −85° ile 85° arasında **Eğme**.

![Dönüştürme sırasında Konum sabitleme noktası, Ölçek, Döndürme ve Eğme ile Araç paneli.](shot:transform/transform-numbers)

## Katman dönüştürmeleri

Boya veya fotoğraf katmanlarının tamamına uygulanan bir dönüştürme her katmanla
birlikte saklanır ve pikseller yeniden örneklenmez. **Dönüştür** saklanan
dönüştürmeden yeniden açılır.

Dönüştürmeyi piksellere uygulayana kadar ölçeklenmiş veya döndürülmüş bir
katmanda rötuş yapamaz, bozulmuş veya çarpıtılmış bir katmana boyayamazsınız.

## Dönüşümü piksellere uygula

Bir katmanın saklanan dönüştürmesini piksellerinin parçası yapabilirsiniz.

Aşağıdakilerden birini yapın:

- **Düzenle > Dönüşümü piksellere uygula** komutunu seçin.
- **Katman > Katman ayarları > Dönüşümü piksellere uygula** komutunu seçin.

İşlem sürerken tuvalin altındaki bir çubukta “Dönüşüm uygulanıyor…” yazar ve
**İptal** düğmesi bulunur.

## Dönüştürmeyi yinele

Seçim yokken son katman dönüştürmesini seçili katmanlara uygulamak için
**Düzenle > Dönüştürmeyi yinele** komutunu seçin. Yapıştırmalar, içe aktarmalar
ve seçili piksel dönüştürmeleri yinelenmez.

## Yerleştirilmiş görüntüler

Başka bir uygulamadan bir görüntü yapıştırdığınızda veya
**Dosya > Görüntüyü katman olarak içe aktar…** komutunu seçtiğinizde görüntü
dönüşüm kutusunda açılır. **Uygula** görüntüyü yerleştirir, **İptal** görüntüyü
kaldırır. Birini seçene kadar diğer komutlar kullanılamaz.
