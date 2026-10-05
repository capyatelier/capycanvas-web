---
title: "Katman türleri"
description: "Bir çizimdeki katman türleri ve her birinin kuralları."
related: ["layers/panel", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Bir seçim katmanı, Geçiş ayarlı bir grup, bir Eğriler filtresi, bir Gradyan dolgusu katmanı, bir Düz renk katmanı, Geçerli mürekkep boya katmanı ve Kâğıt ile Katmanlar paneli.](shot:layers/types-rows)

## Boya katmanı

Boya katmanı boyanmış pikselleri tutar. Fırçalar, **Doldur**, **Gradyan** ve
**Şekil** yalnızca boya katmanlarına piksel ekler.

Boya katmanı eklemek için **Katman > Yeni > Yeni katman** komutunu seçin veya
Katmanlar panelinin altındaki **Yeni katman** düğmesini seçin.

Yeni bir çizim, **Kâğıt** katmanının üstünde **Geçerli mürekkep** adlı boş bir
boya katmanıyla başlar. **Alfa kilidi**, **Renk modu**, **Katmanın tamamını
temizle** ve **Maskeyi katmana uygula** yalnızca boya katmanlarında bulunur.

## Grup

Grup, katmanları tek satıra daraltabileceğiniz bir klasörde tutar.

Aşağıdakilerden birini yapın:

- **Katman > Yeni > Yeni grup** komutunu seçin.
- Katmanlar panelinin altındaki **Yeni grup** düğmesini seçin.
- Birkaç satır seçin ve **Katman > Düzenle > Seçili katmanları grupla** komutunu seçin.

Grubu genişletmek veya daraltmak için klasör küçük resmini seçin. Klasör
üzerindeki bir rozet, [Geçiş](/tr/docs/layers/settings/) ayarlı bir grubu belirtir.

Grup, Geçiş ayarlı değilse önce kendi katmanlarını birleştirir, sonra sonucu
altındaki katmanlarla karıştırır. Grubun kendine ait pikselleri yoktur.

## Dolgu katmanları

Dolgu katmanı tuvali tek bir renkle (**Düz renk**) veya bir gradyanla
(**Gradyan dolgusu**) kaplar.

Aşağıdakilerden birini yapın:

- **Katman > Yeni > Düz renk dolgusu** veya **Gradyan dolgusu** komutunu seçin.
- **Filtre > Dolgu > Düz renk** veya **Gradyan dolgusu** komutunu seçin.
- **Filtreler** panelinin **Dolgu** kategorisinde **Düz renk** veya **Gradyan dolgusu** öğesini seçin.

Dolgu katmanı, etkin katmanın ve ona kırpılmış katmanların üstüne eklenir. Yeni
bir Düz renk geçerli boya rengini kullanır. Yeni bir Gradyan dolgusu siyahtan
beyaza gider. Etkin bir seçim varsa seçim, dolgu katmanının maskesi olur.

Bir Düz renk katmanının rengini değiştirmek için küçük resmini seçerek
[Rengi düzenle](/tr/docs/color/edit-color/) penceresini açın veya **Özellikler**
panelinde **Renk** ayarını değiştirin. Gradyan dolgusunun ayarları
[Gradyan](/tr/docs/drawing/gradient/) sayfasında anlatılır.

Bir dolgu katmanına boyamak için maske ekleyin. Fırçalar dolguya değil, maskeye
boyar. Bir dolgu katmanını kırpabilirsiniz, ancak ona başka katmanları
kırpamaz veya filtre iliştiremezsiniz.

## Filtre katmanları

Filtre katmanı piksel yerine bir filtre tutar. Satırında filtrenin simgesi ve
adı görünür. Bkz. [Filtre ekleme ve düzenleme](/tr/docs/filters/adding/) ve
[Filtrelerin uygulanması](/tr/docs/filters/how-filters-apply/).

Bir filtre katmanı seçiliyken fırçalar altındaki katmana veya filtrenin
iliştirildiği katmana boyar. Filtrenin maskesi varsa fırçalar maskeye boyar.

## Seçim katmanları

Seçim katmanı bir seçimi saklar. Seçim katmanı eklemek için Katmanlar panelinin
altındaki **Yeni seçim katmanı** düğmesini seçin.

Küçük resmin sağındaki düğme saklanan seçimi yükler. Göz simgesi tuvaldeki seçim
kaplamasını gizler veya gösterir. Seçim katmanının opaklığı, karıştırma modu,
maskesi, kırpma veya referans ayarı yoktur ve seçim katmanı birleştirilemez.
Saklanan seçimi düzenleme [Seçim katmanları](/tr/docs/selections/selection-layers/)
sayfasında anlatılır.

## Kâğıt

**Kâğıt**, yeni bir çizimin en altındaki beyaz bir **Düz renk** dolgu katmanıdır.
**Kâğıt** katmanını diğer dolgu katmanları gibi yeniden renklendirebilir,
gizleyebilir veya silebilirsiniz.

[Yeni çizim](/tr/docs/files/new/) iletişim kutusunda **Arka plan** ayarı
**Saydam** olduğunda ve açtığınız bir fotoğrafta **Kâğıt** gizli başlar.

## Fotoğraf katmanları

Fotoğraf katmanı, özgün fotoğrafı kendi boyutunda, bit derinliğinde ve renk
profilinde tutan bir boya katmanıdır. Boyama ve silme işlemleri fotoğrafın
üstünde saklanır.

Fotoğraf katmanı eklemek için aşağıdakilerden birini yapın:

- **Dosya > Aç…** komutunu seçin ve bir fotoğraf seçin.
- **Dosya > Görüntüyü katman olarak içe aktar…** komutunu seçin.
- Bir görüntü dosyasını tuvale bırakın.

Özgün fotoğraf tutulduğu sürece **Katman > Katman ayarları** şu komutları listeler:

- **Özgün fotoğrafa dön** boyamayı, silmeyi ve uygulanmış maskeleri atar. Konum, maske, opaklık ve karıştırma modu kalır, **Renk modu** ise **Tam renk** ayarına döner.
- **Kaynağı pikselleştir…** özgün fotoğrafı tam boyutta, çizimin renk uzayına ve bit derinliğine dönüştürür. Bundan sonra **Özgün fotoğrafa dön** kullanılamaz.
- **Kaynak profilini onar…** özgün fotoğrafın okunduğu profili değiştirir: **sRGB**, **Display P3**, **Adobe RGB (1998)** veya **ProPhoto RGB**. Katmanda boyama varsa bunun yerine **Düzeltilmiş kaynak ekle** düzeltilmiş fotoğrafı yeni bir katman olarak ekler.

**Özgün fotoğrafa dön** ve **Kaynağı pikselleştir…** **Düzenle** menüsünde de
bulunur. **Katmanın tamamını temizle** özgün fotoğrafı da atar.
