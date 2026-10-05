---
title: "Katmanlarla çalışma"
description: "Katmanlar panelinde katman ekleme, düzenleme ve silme."
related: ["layers/panel", "layers/types", "layers/merging", "files/open-save"]
---

## Katman oluşturma

Aşağıdakilerden birini yapın:

- **Katman > Yeni** menüsünü açın ve **Yeni katman**, **Yeni kırpma katmanı** veya **Yeni grup** komutunu seçin.
- Katmanlar panelinin altındaki **Yeni katman** veya **Yeni grup** düğmesini seçin.

Yeni katman, etkin katmanın ve ona kırpılmış ya da iliştirilmiş katmanların hemen
üstüne eklenir. Etkin olan bir grupsa yeni katman grubun en üstüne eklenir.
Kilitli bir gruba katman ekleyemezsiniz.

**Yeni kırpma katmanı** için etkin bir boya katmanı veya Geçiş ayarlı olmayan
etkin bir grup gerekir.

## Katman seçme

Birlikte gruplamak, çoğaltmak, silmek veya taşımak için birden çok satır
seçebilirsiniz.

- Yalnızca o katmanı seçip etkin katman yapmak için bir satırı seçin.
- Bir satırla daha önce seçtiğiniz satır arasındaki satırları seçmek için **Shift** tuşunu basılı tutarak satıra tıklayın.
- Bir satırı seçime eklemek veya seçimden çıkarmak için **Ctrl** tuşunu basılı tutarak satıra tıklayın.
- Etkin katmanı değiştirmeden satırı eklemek veya çıkarmak için küçük resmin solundaki satır düğmesini seçin.
- **Katman > Katman satırı seçimi > Tüm katman satırlarını seç** veya **Katman satırı seçimini temizle** komutunu seçin.

Zaten seçili bir satırı seçtiğinizde diğer satırlar seçili kalır. Satır
seçimindeki değişiklikler geri alma adımı oluşturmaz.

## Katmanları gizleme

Aşağıdakilerden birini yapın:

- **Katman > Görünürlük > Katmanı göster** komutunu seçin.
- Satırdaki göz simgesini seçin.

**Katman > Görünürlük** menüsünde ayrıca **Katmanı ve üst gruplarını göster**,
**Seçili katmanları yalıt** ve **Tüm katmanları göster** komutları bulunur.

## Katmanları yeniden adlandırma

Aşağıdakilerden birini yapın:

- **Katman > Düzenle > Katmanı yeniden adlandır…** komutunu seçin (grup için **Grubu yeniden adlandır…**).
- Ada çift tıklayın.

![Adı bir metin alanında olan katman satırı.](shot:layers/working-rename)

Adı kabul etmek için **Enter**, iptal etmek için **Escape** tuşuna basın. Kilitli
bir katmanı yeniden adlandıramazsınız.

## Katmanların sırasını değiştirme

Bir satırı listede yukarı veya aşağı sürükleyin. Kalemle veya parmakla önce
satırı basılı tutun ya da satırın sağ ucundaki tutamacı sürükleyin.

![Sürüklenen bir satır ve bırakılacağı yeri gösteren, iki satır arasındaki çizgi.](shot:layers/working-drag)

Bir satırın üstündeki veya altındaki çizgi, katmanın bırakılacağı yeri gösterir.
Katmanı bir grubun içine taşımak için grup satırının ortasına bırakın (satırın
çevresinde bir çerçeve görünür). Sürüklemeyi iptal etmek için **Escape** tuşuna
basın.

Seçili satırların tümü birlikte taşınır. Kırpılmış katmanlar ve iliştirilmiş
filtreler kendi katmanlarıyla birlikte taşınır.
[Komut aramadaki](/tr/docs/start/command-search/) **Katmanı yükselt** ve
**Katmanı alçalt** komutları seçili satırları bir adım taşır.

## Gruplama ve grubu çözme

Katmanları gruplamak için satırlarını seçin ve
**Katman > Düzenle > Seçili katmanları grupla** komutunu seçin ya da Katmanlar
panelinin altındaki **Yeni grup** düğmesini seçin.
Satırlar aynı grupta olmalıdır. Bir kırpma tabanı, ona kırpılmış katmanlarla
birlikte gruplanmalıdır.

Grubu çözmek için **Katman > Düzenle > Grubu çöz** komutunu seçin. Gizli bir grup
çözüldüğünde katmanları gizli kalır. Grubun maskesi, %100'ün altında opaklığı,
Normal veya Geçiş dışında bir karıştırma modu, kırpması ya da iliştirilmiş
filtreleri varsa veya katmanları grup olmadan farklı görünecekse **Grubu çöz**
kullanılamaz.

## Katmanları çoğaltma

**Katman > Düzenle > Çoğalt** komutunu seçin. Birden çok satır seçiliyse
**Seçili katmanları çoğalt** komutunu seçin.

Kopyalar, kırpılmış katmanları ve iliştirilmiş filtreleriyle birlikte
özgünlerin hemen üstüne eklenir ve “*ad* kopyası” olarak adlandırılır. Kilitli
bir gruptaki katmanı çoğaltamazsınız.

## Katmanları silme

Aşağıdakilerden birini yapın:

- **Katman > Katmanı sil** komutunu seçin. Birden çok satır seçiliyse **Seçili katmanları sil** komutunu seçin.
- Katmanlar panelinin altındaki **Seçili katmanları sil** düğmesini seçin.
- Kalemle veya parmakla satırı sola kaydırın ve **Sil** düğmesini seçin.

Daraltılmış bir grupta menü öğesinin adı **Grubu ve içeriğini sil** olur.
Genişletilmiş bir grubu silmek, **Grubu çöz** gibi katmanlarını korur.

Bir katmanı sildiğinizde ona kırpılmış katmanlar ve iliştirilmiş filtreler
kalır. Kilitli bir katmanı silemezsiniz. **Delete** tuşu katmanları değil,
seçili pikselleri temizler.

## Seçimi yeni katmana kopyala

Bir boya katmanının seçili piksellerini yerinde, yeni bir katmana kopyalayabilir
veya taşıyabilirsiniz.

Aşağıdakilerden birini yapın:

- **Katman > Yeni > Seçimi yeni katmana kopyala** (**Ctrl+J**) veya **Seçimi kesip yeni katmana taşı** (**Ctrl+Shift+J**) komutunu seçin.
- Aynı komutları **Seç** menüsünden seçin.
- Bu komutları tuvaldeki [seçim çubuğunda](/tr/docs/selections/working/) **Katmana kopyala** altından seçin.

Yeni katman, kaynak katmanın üstüne aynı opaklık ve karıştırma moduyla eklenir
ve “*ad* kopyası” olarak adlandırılır. Seçim temizlenir. **Seç > Yeniden seç**
seçimi geri getirir.

Seçim yokken **Seçimi yeni katmana kopyala** seçili katmanları çoğaltır.
**Seçimi kesip yeni katmana taşı** için bir seçim gerekir ve **Alfa kilidi**
açıkken bu komut kullanılamaz.

## Görüntü içe aktarma

Aşağıdakilerden birini yapın:

- **Dosya > Görüntüyü katman olarak içe aktar…** komutunu seçin veya **Ctrl+Shift+O** tuşlarına basın.
- Katmanlar panelinin altındaki **Görüntüyü katman olarak içe aktar…** düğmesini seçin.
- Görüntü dosyalarını tuvale veya Katmanlar panelindeki bir satırın üzerine sürükleyin.

Her dosya, etkin katmanın üstünde ya da bırakıldığı satırın üstünde, altında
veya içinde bir [fotoğraf katmanı](/tr/docs/layers/types/) olur. Görüntü
ortalanır, tuvale sığacak şekilde küçültülür ve
[yerleştirme tutamaçlarıyla](/tr/docs/transform/move-transform/) gösterilir.
