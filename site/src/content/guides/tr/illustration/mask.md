---
title: "Maskeleme"
description: "Şeride, diske ve bloka, düzenlenebilir kenarlarla kendi renk katmanlarını verin."
purpose: "Bu aşamada her şekil kendi renk katmanını alır. Renk tüm katmanı doldurur ve maske hangi kısmını göreceğinize karar verir. Hiçbir şey silinmediği için herhangi bir şeklin kenarını daha sonra yalnızca maskesini boyayarak ayarlayabilirsiniz."
techniques: ["Kement veya Otomatik seçim ile bir şekil seçin.", "Seçimi bir maskeye dönüştürün ve katmanı renkle doldurun.", "Kenarı ayarlamak için maskenin üzerindeki Paint."]
figure: "1: Ribbon'un seçili maske küçük resmi. 2: Çizgi sanatının altındaki Şerit, Disk ve Blok. 3: Maskenin bazı kısımlarını gizleyen silgi."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Ribbon'un seçili maske küçük resmi. 2: Çizgi sanatının altındaki Şerit, Disk ve Blok. 3: Maskenin bazı kısımlarını gizleyen silgi."}
---

## 1. Bir şekil seçin

**Sketch** ve **Color rough**'yu gizleyin. **Lasso selection**'yu seçin ve örnekte olduğu gibi şeridin etrafını dikkatlice çizin.

Çizgi resminiz bir şeklin etrafında kapalıysa **Auto select** bunu tek tıklamayla yapabilir. Menüsünde **Layer Settings → Use as reference**'yu seçerek **Line art**'yu referans katmanı olarak işaretleyin. Daha sonra **Auto select**'yu seçin, Araç panelinde **Sample reference layers**'yu seçin ve şeklin içine tıklayın. [Seçim araçları](/tr/docs/tools/selections/), seçimin ne kadar yayılacağını kontrol eden ayarları açıklar.

## 2. Maskelenmiş renk katmanını oluşturun

Çizgi sanatının altına **Ribbon** adlı yeni bir katman ekleyin. Seçim hala etkinken Ribbon menüsünü açın ve **Mask → Mask: reveal selection**'yu seçin. Katmanın artık yalnızca şeridin şeklini gösteren bir maskesi var.

Şerit'in boyama küçük resmine tıklayın ve şeridin rengini seçin. Tüm katmanı renkle doldurmak için **Select → Select all pixels**'yu ve ardından **Edit → Fill selection**'yu seçin ve **Select → Deselect pixels** ile bitirin. Yalnızca şerit görünür ancak renk, şekli genişletmek istediğinizde kullanıma hazır şekilde maskenin altında da devam eder.

## 3. Kenarı ayarlayın

Maskeyi düzenlemek için Şerit'in maske küçük resmine tıklayın. Artık herhangi bir fırça, boyadığınız yerdeki rengin daha fazlasını ortaya çıkarır ve **Eraser** onu yeniden gizler. Rengin kendisini değiştirmek istediğinizde boya küçük resmine tekrar tıklayın.

**Disc** ve **Block**'yu aynı şekilde yapın. Diski Şerit'in altında ve Blok'u Disk'in altında tutun; Çizgi sanatı bu üçünün üzerinde olsun. Çiziminizi kaydedin ve ardından [Rendering](/tr/docs/illustration/render/).jpg] işlemine devam edin.
