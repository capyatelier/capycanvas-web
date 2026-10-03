---
title: "Fotoğrafı düzenleme"
description: "Bir fotoğraf açın, düzenlenebilir katmanlarla renklerini ayarlayın ve sonucu dışa aktarın."
purpose: "Photo, resimlerin ayarlanmasına yönelik çalışma alanıdır. Orijinal dosyayı değiştirmeden, doğrudan kameranızdan veya telefonunuzdan bir fotoğrafı açabilir, ayarlama katmanlarıyla parlaklaştırabilir veya renklerini değiştirebilir ve bitmiş bir kopyasını dışa aktarabilirsiniz."
techniques: ["Bir fotoğraf açın veya mevcut bir çizime bir fotoğraf ekleyin.", "Düzenlenebilir bir filtre katmanıyla ayarlayın.", "Düzenlemelerinizi kaydedin ve bir kopyasını dışa aktarın."]
figure: "1: Photo çalışma alanı. 2: Fotoğraf ve ayarlama katmanı. 3: Ayarlamaya ilişkin özellikler."
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1: Photo çalışma alanı. 2: Fotoğraf ve ayarlama katmanı. 3: Ayarlamaya ilişkin özellikler."}
---

## Fotoğrafı aç

Çalışma alanı değiştiricide **Photo**'yu seçin, ardından **File → Open…**'yu seçin ve resminizi seçin. Capy Canvas, JPEG, PNG, TIFF, WebP, HEIC, AVIF ve OpenEXR dosyalarını açar; böylece çoğu kamera ve telefondaki fotoğraflar doğrudan açılır. Fotoğraf kendi sekmesinde orijinal renkleriyle tam boyutta açılır.

Zaten açık olan bir çizime fotoğraf eklemek için **File → Import Image as Layer…**'yu seçin veya dosyayı tuvalin üzerine sürükleyin. Fotoğraf, taşıyabilmeniz ve yeniden boyutlandırabilmeniz için tutamaçlarla birlikte görünür; yerinde olduğunda **Apply**'yu veya gerçek boyutunda kullanmak için **Original Size (100%)**'yu seçin.

## Ayarlama yapın

**Filters**'yu açın ve **Curves**, **Vibrance** veya **Hue / Saturation** gibi bir ayarlama seçin. Fotoğrafın üzerine yeni bir katman olarak eklenir ve ayarları **Properties**'da görünür. Bunları yavaş yavaş değiştirin ve ilerledikçe fotoğrafı izleyin. Sonucu orijinalle karşılaştırmak için ayarlama katmanını gizleyin ve gösterin.

Ayarlama kendi katmanında bulunduğundan istediğiniz zaman geri gelip değiştirebilir veya iz bırakmadan silebilirsiniz. Fotoğrafın yalnızca bir kısmını ayarlamak için önce o alanı seçin, örneğin gökyüzünü [Parlaklığa göre seç](/tr/docs/selections/tonal-range/). [Filtreler ve ayarlamalar](/tr/docs/filters/overview/), bir ayarlamayı sınırlamanın daha fazla yolunu açıklıyor.

## Kaydet ve dışa aktar

Düzenlediğiniz bir fotoğrafı kaydettiğinizde Capy Canvas, tüm ayarlama katmanlarınızla birlikte bir `.capy` dosyası kaydeder ve hiçbir zaman orijinal fotoğrafınızın üzerine yazılmaz. Sonucu paylaşmak için **File → Export…**'yu seçin ve bir JPEG veya PNG kaydedin. [Bir görüntüyü dışa aktarın](/tr/docs/output/export/), dışa aktarma ayarlarını açıklar.
