---
title: "Kâğıt"
description: "Kâğıt rengi ve dokusu, içe aktarılan kâğıtlar, ölçek, ışık ve katman kısıtlamaları."
related: ["layers/types", "layers/panel", "brushes/dry-media", "files/new"]
---

Kâğıt, çizimin arka plan rengini ve **Doku gücü** olan fırçaların tepki verdiği dokuyu sağlar.

## Kâğıt satırı

![Renk ve doku küçük resimleriyle Kâğıt satırı.](shot:layers/paper-row)

Kâğıt normal katmanların altında kalır. İlk küçük resmi **Rengi düzenle**, doku küçük resmi **Dokuyu seç** açar. Ayarlarını **Özellikler** içinde düzenlemek için satırı seçin.

Kâğıdı gizleyebilir veya silebilirsiniz. Çizimde Kâğıt yoksa geri getirmek için Katmanlar panelinin altındaki **Kâğıt ekle** seçeneğini seçin.

![Katman listesinin altında Kâğıt ekle.](shot:layers/add-paper)

Çizimde yalnızca bir Kâğıt bulunabilir. Kâğıdın maskesi olamaz, kırpma katmanı olamaz, başka bir katmanın üzerine taşınamaz veya seçim katmanı olarak kullanılamaz.

## Doku seçme

Kâğıt satırındaki doku küçük resmini veya **Özellikler** içindeki **Dokuyu seç** seçeneğini seçin. Bir kâğıt seçin ve **Dokuyu kullan** seçeneğini seçin.

![Doku Seç içindeki yerleşik kâğıtlar.](shot:layers/paper-choose-texture)

Kitaplık tek bir kaydırılabilir ızgaradır; suluboya ve çizim kâğıtlarından beton, ahşap ve kum gibi yüzey dokularına doğru sıralanır. Doku yönü olan kâğıtlar **yatay** ve **dikey** çiftler hâlinde gelir.

**İçe aktar…**, RGB veya gri tonlamalı bir görüntüyü yeniden kullanılabilir kâğıt dokusu olarak ızgaranın sonuna ekler. İçe aktarılan kâğıtlar çizime gömülür.

İçe aktarılan kâğıdın menüsünü açıp **Yeniden adlandır…** veya **Sil** seçin. Çizime gömülü olup kitaplığınızda bulunmayan kâğıtta bunun yerine **Kitaplığa ekle** bulunur.

![İçe aktarılan kâğıdın menüsü.](shot:layers/paper-imported-menu)

## Özellikler

![Özellikler içindeki Kâğıt denetimleri.](shot:layers/paper-properties)

### Renk

Kâğıt rengini belirler.

### Doku

**Dokuyu seç** iletişim kutusunu açar.

### Ölçek

Dokunun fiziksel ölçeğini %25 ile %400 arasında belirler. Ölçeği değiştirirken tuval doku kabartmasını kısa süreliğine gösterir.

### Doku görünürlüğü

Dokunun ışığının bitmiş resimde ne kadar görüneceğini %0 ile %300 arasında belirler. %0 değerinde doku ışığı kapalıdır.

### Işık

Kâğıt dokusu üzerindeki ışığın yönünü belirler.

### Boyanın altından görünür

Kâğıt ışığının üstündeki boyanın üzerinde ne kadar görüneceğini belirler. %0 değerinde opak Normal boya ışığı örter; %100 değerinde ışık tüm resmi etkiler.

![Tuvaldeki çizgiler ve yanında Kâğıt'ın Özellikler paneli; Keten seçili, Doku görünürlüğü %55, Işık 130° ve Boyanın altından görünür %100.](shot:layers/paper-lighting)

Yerel uygulamadan dışa aktarma görünür kâğıt ışığını içerir. Web düzenleyici şu anda kâğıt ışığı olmadan dışa aktarır. **Doku** veya **Ölçek** değiştirildikten sonra gösterilen kısa doku önizlemesi dışa aktarılmaz.

## Çizgiler ve geometri

**Doku gücü** olan fırçaların yeni çizgileri kendi katmanlarında veya altında en yakın Kâğıdı kullanır. Kâğıdı gizlemek dokusunun yeni çizgilere etkisini durdurmaz. Dokuyu veya ölçeğini değiştirmek çizilmiş izleri değiştirmez.

Kâğıt fiziksel ölçeğini korumak için çizimin baskı çözünürlüğünü kullanır. **Görüntü > Görüntü boyutu…** bu çözünürlüğü değiştirebilir. Görüntüyü yeniden boyutlandırmak veya döndürmek Kâğıdı çizimle birlikte yeniden örnekler; kırpmak ölçeğini değiştirmez.
