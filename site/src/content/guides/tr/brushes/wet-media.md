---
title: "Karıştırma, yayılma ve kıllar"
description: "Islak, suluboya, karıştırma ve kıl fırçalarının boyayı nasıl işleyeceğini belirleyen ayarlar."
related: ["brushes/tip-texture", "brushes/basics", "drawing/blend-liquify", "drawing/brush-tools"]
---

Islak ve karıştırma fırçalarının boyayı nasıl işleyeceğini **Araç** panelinde
ayarlayabilirsiniz. Her grup yalnızca kendi bölümünde adı geçen fırçalarda
görünür.

![Islak suluboya için Araç paneli: Karıştırma, Suluboya ve Yayılma grupları ile renk karıştırma düğmeleri.](shot:brushes/wet-media-settings)

## Karıştırma

**Karıştırma**; **Islak yuvarlak fırça**, **Opak guaj**, **Bol boyalı yağlı
boya**, **Palet bıçağı**, **Suluboya yıkama**, **Islak suluboya**, **Doğal
karıştırıcı** ve **Lekeleme** fırçalarında görünür. Suluboya fırçaları dışında,
boya yüklü bir fırçanın boyası darbe boyunca, her fırça için sabit bir hızla
tükenir.

### Boya yükü

Fırçanın kendi renginden ne kadar taşıyacağını, suluboya fırçalarında ise
pigment gücünü belirler. Düşük değerlerde katmandan alınan renk baskın gelir.

### Renk alma

Fırçanın katmandan aldığı rengi darbe boyunca ne kadar sürükleyeceğini belirler.

### Seyreltme

Fırçanın taşıdığı boyayı inceltir. Yüksek değerler, fırçanın kendi renginin
karışımdaki etkisini zayıflatır.

## Suluboya

**Suluboya yıkama** ve **Islak suluboya** fırçalarında, boyanın biriktiği
yerdeki koyu kenar için bir **Suluboya** grubu bulunur. Suluboya yalnızca aynı
katmandaki boyaya tepki verir.

### Kenar gücü

Kenarın ne kadar koyu olacağını belirler.

### Kenar genişliği

Kenarın genişliğini 0 ile 32 px arasında belirler.

## Yayılma

İki suluboya fırçasındaki **Yayılma** grubu, suyun ve pigmentin darbenin
çevresindeki kâğıda nasıl yayılacağını belirler. Boya yalnızca darbe sırasında
yayılır, kalemi kaldırdıktan sonra yayılmaz.

### Islak yayılma

Boyanın zaten ıslak olan kâğıda ne kadar hızlı yayılacağını belirler.

### Kuru yayılma

Boyanın kuru kâğıda ne kadar hızlı yayılacağını belirler.

### Yayılma mesafesi

Boyanın her fırça izinden ne kadar uzağa yayılabileceğini 0 ile 96 px arasında
belirler.

### Su yükü

Her fırça izinin kâğıda ne kadar su bırakacağını belirler.

## Renk karıştırma

Karıştırma fırçasının aldığı renkleri nasıl birleştireceğini seçebilirsiniz.

Aşağıdakilerden birini yapın:

- **Araç** panelinin altında **Oklab karıştırma**, **Doğrusal ışıkta karıştırma** veya **Klasik karıştırma** düğmesini seçin.
- Araç seçenekleri çubuğundaki **Renk karıştırma** menüsünden seçin ([Boyut, opaklık ve akış](/tr/docs/brushes/basics/)).
- Komut aramada seçeneğin adını arayın.

| Seçenek | Karıştırma |
| --- | --- |
| **Oklab karıştırma** | Alınan renkleri gözün algıladığı gibi eşit karıştırır. |
| **Doğrusal ışıkta karıştırma** | Alınan renkleri ışığın karıştığı gibi karıştırır. |
| **Klasik karıştırma** | Renk değerlerini çizimde saklandıkları gibi karıştırır. |

Tüm yerleşik karıştırma fırçaları **Oklab karıştırma** ile başlar. Bu seçenek
fırçayla birlikte kaydedilir ve çizimin **Karıştırma** ayarı onu
değiştirmez. Karıştırma yapmayan bir fırçada bu seçenekler kullanılamaz.

![Bol boyalı yağlı boya için Araç seçenekleri çubuğunda açık Renk karıştırma menüsü.](shot:brushes/color-mixing-menu)

## Kıllar

**Kıllar** grubu yalnızca **Kıl boya fırçası** fırçasında görünür. Bu fırça, ön
plan ve arka plan çiftinin diğer rengini kalın boya sırtlarının içine çizgi
çizgi işler.

### Kıl ölçeği

Kıl izlerinin boyutunu fırça boyutuna göre belirler. Kaydırıcı %25 ile %200
arasında gider; %400'e kadar değer yazabilirsiniz.

### Boya yükü

Fırçanın her darbenin başında ne kadar boya taşıyacağını belirler.
