---
title: "Kırpma"
description: "Kırp aracıyla tuvali kırpma ve düzeltme."
related: ["transform/image", "selections/working", "drawing/ruler", "photo/crop"]
---

**Kırp** aracıyla tuvali bir çerçeveye göre kırpabilirsiniz. **Kırpılanı sil**
seçeneğini açmadığınız sürece kırpılan pikseller kendi katmanlarında gizli
olarak kalır.

## Kırpma

Aşağıdakilerden birini yapın:

- **Düzenle > Görüntü > Kırp** komutunu seçin.
- **C** tuşuna basın.
- Fotoğraf'ta Araçlar çubuğundaki **Kırp** düğmesini seçin.

Tuvalin tamamının çevresinde veya seçilen oranın en büyük çerçevesi olarak
tutamaçlı bir çerçeve görünür. Çerçevenin dışındaki tuval soluklaşır ve kırpma
için [tuval çubuğu](/tr/docs/selections/working/) tuvalin alt kenarında görünür.

- Çerçeveyi taşımak için içinde sürükleyin.
- Çerçeveyi yeniden boyutlandırmak için bir köşe veya kenar tutamacını sürükleyin. Oranlarını korumak için **Shift**, merkezden boyutlandırmak için **Alt** tuşunu basılı tutun.
- Saydam tuval eklemek için çerçeveyi tuval kenarının ötesine sürükleyin.

Dokunmatik ekranda parmağa yalnızca tutamaçlar yanıt verir. Çerçevenin içindeki
parmak görünümü taşır.

Bitirmek için **Uygula** düğmesini seçin veya **Enter** tuşuna basın. **İptal**,
**Escape** ve **Geri al** kırpmayı atar. Her iki durumda da daha önce
kullandığınız araca dönülür.

**Uygula** kilitli katmanları da kırpar. Bir dönüştürme açıkken kırpmaya
başlayamazsınız.

![Teraryum fotoğrafındaki kırpma çerçevesi ve alt kenardaki tuval çubuğu.](shot:transform/crop-bar)

## Oran

Tuval çubuğundaki **Oran** menüsünden **Serbest**, **Özgün**, **1:1**, **4:5**,
**2:3**, **5:7** veya **16:9** seçeneğini seçin. Çerçeve o oranın en büyük
çerçevesi olur. Varsayılan **Serbest** seçeneğidir.

**Oran** menüsünün yanındaki simge düğmesi **Kırpma yönünü değiştir**, çerçeveyi
yatay ile dikey arasında çevirir.

Oran, kaplama ve **Kırpılanı sil** sonraki kırpmaya aktarılır.

![Kırpma çubuğundaki Oran menüsü.](shot:transform/crop-ratio-menu)

## İçeriğe sığdır

**İçeriğe sığdır** çerçeveyi düz olarak, tuvalin ötesindeki pikseller dâhil
görünür piksellerin sınırlarına ayarlar. **Oran** **Serbest** olarak değişir.

## Kaplama

**Kaplama** menüsünden **Üçler**, **Izgara**, **Çapraz** veya **Altın oran**
seçeneğini seçin. Varsayılan **Üçler** seçeneğidir. Kırparken sonraki kaplamayı
göstermek için **O** tuşuna basın.

## Düzeltme

Tuval çubuğunda **Düzelt** düğmesini seçin, ardından yatay veya dikey olması
gereken bir şey boyunca bir çizgi çizin. Çerçeve çizgiye uyacak şekilde döner.
Çizgiyi 15°'lik adımlara oturtmak için **Shift** tuşunu basılı tutun.
Dokunmatik ekranda **Düzelt** seçiliyken parmak çizgiyi çizer.

Açıyı Araç panelindeki **Düzelt** alanında da ayarlayabilirsiniz. Çerçeve iki
yöne de en fazla 45° döner.

Döndürülmüş bir kırpmayı uyguladığınızda boya katmanları ve maskeler yeniden
örneklenir. Yerleştirilmiş fotoğraflar özgün piksellerini korur.

Bir kılavuza göre düzeltmek için kılavuzu seçin ve kılavuzun tuval çubuğunda
**Düzelt** düğmesini seçin (bkz. [Cetveller ve kılavuzlar](/tr/docs/drawing/ruler/)).
Kılavuzla aynı hizaya döndürülmüş bir kırpma açılır.

## Kırpılanı sil

Kırpmayı uyguladığınızda çerçevenin dışındaki pikselleri atmak için
**Kırpılanı sil** seçeneğini açın. Yerleştirilmiş fotoğraflar özgün
piksellerini korur. Varsayılan olarak kapalıdır.

Gizli pikseller korunduğunda çok büyük olacak bir kırpma yalnızca
**Kırpılanı sil** açıkken çalışır.

## Sıfırla

**Sıfırla** çerçeveyi düz olarak tuvalin tamamına döndürür ve **Düzelt**
ayarını kapatır. Bir oran seçiliyse çerçeve o oranın en büyük çerçevesi olur.

## Araç panelindeki kırpma ayarları

Kırparken Araç paneli (ve Fotoğraf'ta Araç seçenekleri çubuğu)
şunları gösterir:

- **Boyut**: çerçevenin piksel cinsinden **Genişlik** ve **Yükseklik** değerleri. Bir oran seçiliyse diğer kenar onu izler.
- **Düzelt**: çerçevenin −45° ile 45° arasındaki açısı.
- Tuval çubuğunun düğmeleri.

![Kırparken Genişlik, Yükseklik ve Düzelt ile Araç paneli.](shot:transform/crop-tool-panel)

## Tuvali seçime göre kırp

Tuvali bir seçimin sınırlarına göre kırpabilirsiniz.

Aşağıdakilerden birini yapın:

- **Düzenle > Görüntü > Tuvali seçime göre kırp** komutunu seçin.
- [Seçim çubuğunda](/tr/docs/selections/working/) **Kırp** düğmesini seçin.

Seçimin sınırları dışındaki pikseller kendi katmanlarında gizli olarak kalır.
Tersine çevrilmiş bir seçime göre kırpamazsınız.

## Kırpılan pikselleri geri getirme

Tuvali tüm katmanların piksellerini gösterene kadar büyütmek için
**Düzenle > Görüntü > Tümünü göster** komutunu seçin veya tuvali
**Düzenle > Görüntü > Tuval boyutu…** ile büyütün (bkz.
[Görüntü boyutu ve döndürme](/tr/docs/transform/image/)).
