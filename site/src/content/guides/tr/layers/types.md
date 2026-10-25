---
title: "Katman türleri"
description: "Boya, nesne, vektör, kâğıt, grup, dolgu, filtre ve seçim katmanları ve her birinin kuralları."
related: ["layers/panel", "layers/vector", "layers/paper", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Katmanlar paneli: bir seçim katmanı, bir grup, bir boya katmanı, bir filtre, dolgu katmanları, bir vektör katmanı ve Kâğıt.](shot:layers/types-rows)

## Boya katmanı

Boya katmanı çizimin renk uzayında pikseller tutar. Fırçalar, **Dolgu**, **Gradyan** ve **Şekil** bu katman türünde boyar.

**Katman > Yeni > Yeni katman** veya Katmanlar panelinin altındaki **Yeni katman** seçeneğini seçin. Yeni çizim, Kâğıdın üzerinde **Geçerli mürekkep** ile başlar.

## Nesne katmanı

Nesne katmanı, içe aktarılan görüntünün boyutunu, bit derinliğini ve renk profilini korur. Görüntüyü katman olarak içe aktarmak, tuvale bırakmak veya başka bir uygulamadan yapıştırmak Nesne katmanı oluşturur.

Nesne katmanını kaynağını tekrar tekrar örneklemeden taşıyabilir, ölçekleyebilir ve döndürebilirsiniz. Piksellerini boyamak veya boya katmanı gerektiren bir komut kullanmak için **Katman > Katmanı pikselleştir** seçin. Pikselleştirme onu çizimin renk uzayına, bit derinliğine ve piksel ızgarasına dönüştürür.

## Vektör katmanı

Vektör katmanı piksel yerine yollar tutar. **Katman > Yeni > Yeni vektör katmanı** komutunu seçin veya Katmanlar panelinin altındaki **Yeni vektör katmanı** seçeneğini seçin. Küçük resminde bir yol rozeti bulunur. Bkz. [Vektör katmanları](/tr/docs/layers/vector/).

## Kâğıt

Kâğıt arka plan rengini ve **Doku gücü** olan fırçaların tepki verdiği dokuyu sağlar. Katman yığınının en altında kalır ve renk ile doku küçük resimleri bulunur.

Çizim bir Kâğıt içerebilir. Kâğıdın maskesi olamaz, kırpma katmanı olamaz, normal katmanların üzerine taşınamaz veya normal katmanla birleştirilemez. Doku, ışık ve diğer ayarları için bkz. [Kâğıt](/tr/docs/layers/paper/).

## Grup

Grup, katmanları daraltılabilir bir klasörde tutar. **Katman > Yeni > Yeni grup**, katman listesinin altındaki **Yeni grup** veya **Katman > Düzenle > Seçili katmanları grupla** seçeneğini seçin.

[Geçiş](/tr/docs/layers/settings/) açık değilse grup, altındaki katmanlarla karıştırmadan önce içeriğini birleştirir.

## Dolgu katmanları

**Düz renk** ve **Gradyan dolgusu** tuvali üretilen içerikle kaplar. **Katman > Yeni**, **Filtre > Dolgu** menüsü veya **Filtreler** panelinden ekleyin.

**Rengi düzenle** açmak için Düz Renk küçük resmini seçin. Dolgunun görünür alanını boyamak için maske ekleyin. Dolgu katmanını kırpabilirsiniz ancak diğer katmanları ona kırpamazsınız.

## Filtre katmanları

Filtre katmanı piksel tutmak yerine altındaki katmanları değiştirir. Satırında filtrenin simgesi ve adı görünür. Bkz. [Filtrelerin uygulanması](/tr/docs/filters/how-filters-apply/).

## Seçim katmanları

Seçim katmanı bir seçimi saklar. Eklemek için katman listesinin altındaki **Yeni seçim katmanı** seçeneğini seçin. Opaklığı, karıştırma modu, maskesi, kırpması veya referans ayarı yoktur ve birleştirilemez.
