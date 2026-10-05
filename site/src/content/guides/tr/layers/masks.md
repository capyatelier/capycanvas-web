---
title: "Maskeler"
description: "Bir katmanın bölümlerini maskeyle gizleme ve maskeyi değiştiren tüm komutlar."
related: ["layers/panel", "selections/working", "filters/how-filters-apply", "layers/merging"]
---

Bir katmanın bölümlerini maskeyle gizleyebilirsiniz. Maskede boyalı alanlar
katmanı gösterir, boş alanlar katmanı gizler. Boya katmanları, fotoğraf
katmanları, gruplar, dolgu katmanları ve filtreler maskeye sahip olabilir.

## Maske ekleme

Aşağıdakilerden birini yapın:

- **Katman > Maske > Maske ekle** komutunu seçin.
- Katmanlar panelinin altındaki **Maske ekle** düğmesini seçin.

![Maske küçük resminin çevresinde çerçeve olan Ribbon satırı.](shot:layers/masks-row)

Maske küçük resmi katman küçük resminin sağında görünür. Çevresindeki çerçeve,
fırçaların hedefinin maske olduğunu gösterir. Yeni bir maske katmanın tamamını
gösterir. Etkin bir seçim varsa maske yalnızca seçili alanı gösterir ve seçim
temizlenir.

Katmanın zaten maskesi varsa **Maske ekle** o maskeyi boyama için seçer. Seçim
katmanına veya kilitli bir katmana maske ekleyemezsiniz.

## Maskeye boyama

Maskeye boyamak için maske küçük resmini seçin. Yeniden katmana boyamak için
katman küçük resmini seçin veya **Escape** tuşuna basın.

> **Not:** Fırçalar maskede boya rengini dikkate almaz. Fırçalar katmanı gösterir, **Silgi** ise gizler.

Tersine çevrilmiş bir maskede fırçalar ve **Silgi** rollerini değiştirir. Maske
fırça darbeleri kurudur: karışma, yayılma veya doku olmaz.

## Maske düzenleme çubuğu

Maskeye boyarken tuvalin altında “Maske düzenleniyor: *katman*” etiketli bir
çubuk görünür.

![Tersine çevir, Devre dışı bırak, Maskeyi uygula, Diğer ve İçeriği düzenle düğmeleriyle maske düzenleme çubuğu.](shot:layers/masks-bar)

- **Tersine çevir**
- **Devre dışı bırak** maskeyi kapatır. Bu durumda düğmenin adı **Etkinleştir** olur.
- **Maskeyi uygula** maskenin gizlediği pikselleri siler, ardından maskeyi kaldırır.
- **Diğer**, **Katman** menüsünü ve **Tuval eylem çubuğunu göster** seçeneğini içerir. Çubuğu gizlemek için **Tuval eylem çubuğunu göster** seçeneğini kapatın.
- **İçeriği düzenle** katmana boyamaya döner.

## Seçimden maske

Geçerli seçimden maske oluşturabilirsiniz.

Aşağıdakilerden birini yapın:

- **Katman > Maske > Maske: seçimi göster** veya **Maske: seçimi gizle** komutunu seçin. Maskesi olan bir katmanda öğelerin adı **Maskeyi değiştir: seçimi göster** ve **Maskeyi değiştir: seçimi gizle** olur.
- Tuvaldeki [seçim çubuğunda](/tr/docs/selections/working/) **Maske** düğmesini seçin. Yeni maske seçili alanı gösterir ve katmanın varsa maskesinin yerini alır.

Etkin bir seçim varken eklenen filtre veya dolgu katmanı seçimden bir maske
alır. **İçine yapıştır** seçime göre maskelenmiş yeni bir katman oluşturur (bkz.
[Kopyalama ve yapıştırma](/tr/docs/transform/clipboard/)).

## Maskeden seçim

Bir maskeyi seçim olarak yükleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Seç > Katman Maskesinden** menüsünden **Maskeyi seçim olarak yükle**, **Maskeyi seçime ekle**, **Maskeyi seçimden çıkar** veya **Maskeyle kesiştir** komutunu seçin.
- Aynı öğeleri maske menüsündeki **Piksel seçimi** altından seçin.
- **Ctrl** tuşunu basılı tutarak maske küçük resmine tıklayın. Seçime eklemek için **Shift**, seçimden çıkarmak için **Alt**, seçimle kesiştirmek için **Shift+Alt** tuşlarını da basılı tutun.

## Maske menüsü

Aşağıdakilerden birini yapın:

- **Katman > Maske** menüsünü açın (ilk öğenin adı **Maskeyi düzenle** olur).
- Maske küçük resmine sağ tıklayın veya maske küçük resmini basılı tutun.
- Maskeye boyarken **Katman** menüsünü açın veya Katmanlar panelinin altındaki **Katman eylemleri** düğmesini seçin.

Maskesi olmayan bir katmanda **Katman > Maske** menüsünde yalnızca
**Maske ekle**, **Maske: seçimi göster**, **Maske: seçimi gizle** ve
**Maskeyi yapıştır** bulunur.

![Ribbon katmanının maske menüsü.](shot:layers/masks-menu)

| Öğe | İşlevi |
| --- | --- |
| **Katman içeriğini düzenle** | Katmana boyamaya döner. |
| **Maske alanını göster** | Maskeyi tuvalde gösterir ve boyama için seçer. |
| **Maskeyi etkinleştir** | Maskeyi değiştirmeden açar veya kapatır. Devre dışı bir maskenin küçük resmi soluktur. |
| **Maskeyi katmana bağla** | Açıkken maske katmanla birlikte taşınır. Kapalıyken **Katmanı / maskeyi taşı**, hangisine boyuyorsanız katmanı veya maskeyi taşır. Küçük resimler arasındaki bağlantı düğmesi de aynı işi yapar. |
| **Maskeyi değiştir: seçimi göster**, **Maskeyi değiştir: seçimi gizle** | Maskeyi seçimle değiştirir. |
| **Maskeyi kopyala** | Maskeyi, başka bir katmanda **Kopyalanan maskeyle değiştir** veya maskesi olmayan bir katmanda **Maskeyi yapıştır** için kopyalar. |
| **Maskeyi tersine çevir** | Gösterilen ve gizlenen alanları değiştirir. |
| **Tümünü göster**, **Tümünü gizle** | Maskenin katmanın tamamını göstermesini veya gizlemesini sağlar ve tersine çevirmeyi kapatır. |
| **Maskeyi katmana uygula** | Maskenin gizlediği pikselleri siler, ardından maskeyi kaldırır. |
| **Maskeyi sil** | Maskeyi kaldırır. Katmanın pikselleri değişmez. |
| **Piksel seçimi** | Maskeyi seçim olarak yükler. |

**Katman içeriğini düzenle**, **Maske alanını göster** ve **Maskeyi kopyala**
dışındaki her öğe için katmanın kilitli olmaması gerekir.

## Maskeyi uygulama

Aşağıdakilerden birini yapın:

- **Katman > Maske > Maskeyi katmana uygula** komutunu seçin.
- Maske düzenleme çubuğunda **Maskeyi uygula** düğmesini seçin.

**Maskeyi katmana uygula** yalnızca boya katmanlarında çalışır ve maskenin etkin
olması gerekir. Bozulmuş veya çarpıtılmış bir katmanda önce
**Dönüşümü piksellere uygula** komutunu seçin. Bir grubun maskesini uygulamak
için **Grubu birleştir** komutunu kullanın (bkz.
[Katmanları birleştirme](/tr/docs/layers/merging/)).

Fotoğraf katmanında **Özgün fotoğrafa dön**, uygulanan maskenin sildiklerini
geri getirir.

## Filtre ve dolgu katmanlarındaki maskeler

Bir filtrenin maskesi filtrenin nereye uygulanacağını belirler. Bir filtre veya
dolgu katmanı seçiliyken fırçalar her zaman onun maskesine boyar. **Doldur**,
**Gradyan** ve çizim üreten diğer araçlar bir filtrenin maskesinde çalışmaz. Bir
dolgu katmanına boyamak için maske gerekir.
