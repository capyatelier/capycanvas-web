---
title: "Taşıma ve dönüştürme"
description: "İşlem aracı ve Dönüştür ile katmanları, seçili pikselleri ve yolları taşıma ve dönüştürme."
related: ["selections/working", "layers/paths", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Katmanları ve seçili pikselleri **İşlem** aracıyla taşıyabilir, **Dönüştür**
ile ölçekleyebilir, döndürebilir, eğebilir, bozabilir veya çarpıtabilirsiniz.

## İşlem aracı

Aşağıdakilerden birini yapın:

- Katmanlar panelinde bir katmanın menüsünü açın ve **Katmanı / maskeyi taşı** komutunu seçin.
- **O** tuşuna basın.
- Boya ve Fotoğraf'ta Araçlar çubuğundaki **İşlem / Dönüştür / Noktaları düzenle** düğmesini seçin. **İşlem** aracını seçmek için düğmeye sağ tıklayın veya düğmeyi basılı tutun.
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

## Yolları taşıma

Vektör katmanında **İşlem**, katmanı taşımak yerine yolları seçer, taşır, ölçekler
ve döndürür. Her yolu seçmek için **Ctrl+A** tuşlarına basın. Yollar seçiliyken
**Düzenle > Dönüştür** komutu **İşlem** aracına ve çerçevesine geçer. Bkz.
[Yolları düzenleme](/tr/docs/layers/paths/).

## Kopya bırak

Seçili piksellerin bir kopyasını taşıyıp özgün pikselleri yerinde
bırakabilirsiniz.

**Araç** panelinde **Kopya bırak** seçeneğini açın veya [seçim çubuğunda](/tr/docs/selections/working/) **Diğer > Kopya bırak** yolunu seçin. Sürüklemeye başlarken **Alt** tuşunu basılı tutmak, yalnızca o sürükleme için seçimi tersine çevirir.

## Dönüştür

Aşağıdakilerden birini yapın:

- **Düzenle > Dönüştür** komutunu seçin.
- **Ctrl+T** tuşlarına basın.
- Boya ve Fotoğraf'ta Komutlar çubuğundaki, Eskiz'de başlık çubuğundaki **Dönüştür** düğmesini seçin.
- Seçim çubuğunda **Dönüştür** düğmesini seçin.
- Boya ve Fotoğraf'ta Araçlar çubuğundaki **İşlem / Dönüştür / Noktaları düzenle** düğmesine sağ tıklayın veya düğmeyi basılı tutun ve **Dönüştür** aracını seçin.

Seçim varken **Dönüştür** etkin katmanın veya maskenin seçili piksellerini
değiştirir. Seçim yoksa seçili katmanları değiştirir. Tutamaçlı bir kutu ve
tuval çubuğu görünür.

Bitirmek için **Dönüşümü uygula** düğmesini seçin veya **Enter** tuşuna basın. **Dönüşümü iptal et**
veya **Escape** dönüştürmeyi atar. Katmanları dönüştürürken **Geri al** da aynı
işi yapar.

Birden çok katmanı dönüştürmek için önce seçimi temizleyin.

## Tutamaçlar

Ölçeklendirme sırasında:

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

![Mod düğmeleri, çevirme ve yakalama kontrolleri, Dönüşümü iptal et ve Dönüşümü uygula içeren dönüştürme çubuğu.](shot:transform/transform-bar)

### Mod

Çubukta **Ölçekle**, **Boz** veya **Çarpıt** seçeneğini seçin. **Oranları koru**, ölçeklendirme sırasında en boy oranını korur ve **Perspektif**, **Boz**'deki köşe sürüklemelerini yansıtır. **Ölçekle** varsayılandır.

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

- **Izgara**, **3 × 3** (varsayılan), **4 × 4** ve **5 × 5** seçeneğini ve ızgara bölme komutlarını açar. Şekli değiştirene kadar ızgara boyutu kullanılabilir.
- **Dikey böl**, **Yatay böl** veya **İki yönde böl** seçeneğini seçin, ardından şekli değiştirmeden ızgara çizgisi eklemek için ağ üzerinde bir nokta seçin. **Escape** bölünmeyi iptal eder. Bir ızgara her yönde en fazla 32 hücreyi tutar.
- **Noktaları seç** birlikte hareket edecek noktaları seçer.
- **Izgarayı sıfırla** düz bir ağı geri yükler.

![Izgara ve Noktaları seç ile Çarpıt modundaki dönüştürme çubuğu.](shot:transform/warp-bar)

### Çevirme ve döndürme düğmeleri

**Yatay çevir** çubukta. **Diğer**, **Dikey çevir**, **90° sola döndür** ve **90° sağa döndür** seçeneğini içerir. Pivot hakkındaki içeriği yansıtır veya döndürürler.

### Dönüşümü sıfırla

Geçerli dönüşümdeki her değişikliği geri almak için **Diğer**'de **Dönüşümü sıfırla** seçeneğini seçin. Dönüşüm açık kalır ve **Ölçekle**'ye geri döner.

### Enterpolasyon

Piksellerin nasıl yeniden örnekleneceğini ayarlamak için **Diğer**'de **Interpolation** seçeneğini seçin: **En yakın komşu**, **Çift doğrusal**, **Çift kübik** veya **Lanczos**. Ölçeklendirme sırasında **Çift doğrusal** varsayılandır ve **Boz** ve **Çarpıt**'de **Çift kübik**.

## Araç panelindeki dönüştürme değerleri

Araç paneli ve Fotoğraf'ta Araç seçenekleri çubuğu, açık bir
dönüştürmenin değerlerini gösterir. **Çarpıt** modunda gösterilmez.

- **Konum sabitleme noktası**: piksel cinsinden **X** ve **Y**. Üstlerindeki sabitleme ızgarası, bu değerlerin kutunun hangi noktasını verdiğini belirler.
- **Ölçekle**: yüzde cinsinden **Genişlik** ve **Yükseklik**. **Oranları koru** bunları bağlı tutar.
- **Döndürme**: −180° ile 180° arasında **Açı**.
- **Eğme**: −85° ile 85° arasında **Eğme**.

![Dönüştürme sırasında Konum sabitleme noktası, Ölçek, Döndürme ve Eğme ile Araç paneli.](shot:transform/transform-numbers)

## Katman dönüştürmeleri

Boya veya nesne katmanlarının tamamına uygulanan bir dönüştürme her katmanla
birlikte saklanır ve pikseller yeniden örneklenmez. **Dönüştür** saklanan
dönüştürmeden yeniden açılır.

Dönüştürmeyi piksellere uygulayana kadar ölçeklenmiş veya döndürülmüş bir
katmanda rötuş yapamaz, bozulmuş veya çarpıtılmış bir katmana boyayamazsınız.

## Dönüşümü uygula

Bir katmanın saklanan dönüştürmesini piksellerinin parçası yapabilirsiniz.

Aşağıdakilerden birini yapın:

- **Düzenle > Dönüşümü uygula** komutunu seçin.
- **Katman > Katman ayarları > Dönüşümü uygula** komutunu seçin.

İşlem sürerken tuvalin altındaki bir çubukta “Dönüşüm uygulanıyor…” yazar ve
**Dönüşümü iptal et** düğmesi bulunur.

## Dönüştürmeyi yinele

Seçim yokken son katman dönüştürmesini seçili katmanlara uygulamak için
**Düzenle > Dönüştürmeyi yinele** komutunu seçin. Yapıştırmalar, içe aktarmalar
ve seçili piksel dönüştürmeleri yinelenmez.

## Yerleştirilmiş görüntüler

Başka bir uygulamadan bir görüntü yapıştırdığınızda veya
**Dosya > Import Image as
Layer…** komutunu seçtiğinizde görüntü
dönüşüm kutusunda açılır. **Dönüşümü uygula** görüntüyü yerleştirir, **Dönüşümü iptal et** görüntüyü
kaldırır. Birini seçene kadar diğer komutlar kullanılamaz.
