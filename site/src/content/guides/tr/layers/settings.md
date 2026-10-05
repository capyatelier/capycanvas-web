---
title: "Katman ayarları"
description: "Katmanlar paneli başlığındaki, Katman ayarları menüsündeki ve Özellikler panelindeki katman ayarları."
related: ["layers/panel", "layers/blend-modes", "layers/types", "filters/how-filters-apply"]
---

Bu ayarları Katmanlar paneli başlığında veya katman menüsündeki
**Katman ayarları** altında değiştirebilirsiniz. **Katman** menüsünde de aynı
öğeler bulunur.

![Ribbon shading katmanının Katman ayarları alt menüsü; Alttaki katmana kırp işaretli ve sağda “Ribbon katmanına kırpıldı” yazıyor.](shot:layers/settings-menu)

## Alfa kilidi

Bir boya katmanının saydamlığını kilitleyebilirsiniz. Bu durumda fırçalar
yalnızca zaten boyanmış pikselleri değiştirir.

Aşağıdakilerden birini yapın:

- Katmanı seçin, ardından Katmanlar paneli başlığında **Alfa kilidi** düğmesini seçin.
- Katmanın menüsünü açın ve **Katman ayarları > Alfa kilidi** komutunu seçin.
- Satırı kalemle veya parmakla sağa kaydırın.

Alfa kilidi açıkken satırın sağında bir alfa kilidi simgesi görünür.

**Doldur** ve **Gradyan** da saydamlığı korur. **Silgi** ise hiçbir etki yapmaz.

## Düzenlemeyi kilitle

Bir katmanı, üzerine boyanamayacak ve değiştirilemeyecek şekilde
kilitleyebilirsiniz.

Aşağıdakilerden birini yapın:

- Katmanı seçin, ardından Katmanlar paneli başlığında **Düzenlemeyi kilitle** düğmesini seçin.
- Katmanın menüsünü açın ve **Katman ayarları > Düzenlemeyi kilitle** komutunu seçin.
- Seçim katmanında, menüsünden **Düzenlemeyi kilitle** komutunu seçin.

Kilitli bir katmanın satırında kilit simgesi görünür.

Kilitli bir katmana boyayamaz, onu yeniden adlandıramaz, silemez veya
maskeleyemez, opaklığını ya da karıştırma modunu değiştiremez, ona filtre
ekleyemezsiniz. Bir grubu kilitlemek, içindeki her katmanı kilitler. Kilitli bir
grubun içindeki katmanda **Düzenlemeyi kilitle** ayarını kapatamazsınız.

## Alttaki katmana kırp

Bir katmanı, alttaki katmanın boyalı alanıyla sınırlamak için kırpabilirsiniz.

Aşağıdakilerden birini yapın:

- Katmanı seçin, ardından Katmanlar paneli başlığında **Alttaki katmana kırp** düğmesini seçin.
- Katmanın menüsünü açın ve **Katman ayarları > Alttaki katmana kırp** komutunu seçin.
- Yeni bir kırpılmış katman eklemek için katmanın menüsünden **Yeni > Yeni kırpma katmanı** komutunu seçin.

Küçük resimlerin solundaki ray, kırpılmış katmanları tabanlarına bağlar.
Katmanın menüsünde öğe tabanın adını verir, örneğin “Ribbon katmanına kırpıldı”.
Taban katmanı taşıdığınızda ona kırpılmış katmanlar da birlikte taşınır.

Geçiş ayarlı bir gruba kırpamazsınız. Önce gruptaki Geçiş ayarını kapatın.

Taban, aynı grupta alttaki en yakın kırpılmamış katmandır. Seçim katmanları
atlanır. Bu katman bir dolgu katmanı veya filtreyse öğede
**İliştirilecek alt katman yok** yazar. Bir filtrede öğe bunun yerine filtreyi
iliştirir (bkz. [Filtrelerin uygulanması](/tr/docs/filters/how-filters-apply/)).

## Referans olarak kullan

Boya katmanlarını ve grupları, **Referans katmanlar** örnekleyen araçlar için
referans olarak işaretleyebilirsiniz. **Otomatik seç**, **Doldur** ve
[rötuş araçları](/tr/docs/retouch/clone-heal/) bu araçlardandır.

Aşağıdakilerden birini yapın:

- Katmanları seçin, ardından Katmanlar paneli başlığında **Seçili katmanları referans olarak kullan** düğmesini seçin.
- Katmanın menüsünü açın ve **Katman ayarları > Referans olarak kullan** komutunu seçin. Birden çok satır seçiliyse **Seçili katmanları referans olarak kullan** komutunu seçin.

Bir katmanı referans olarak kullanmayı bırakmak için yalnızca o katmanı seçin,
ardından başlıkta **Bu katmanı referans olarak kullanmayı bırak** düğmesini seçin
veya katmanın menüsünde **Referans olarak kullan** seçeneğini kapatın.

Referans katmanın satır düğmesinde bir deniz feneri simgesi görünür. Katmanları
başlıktaki düğmeyle işaretledikten sonra yalnızca etkin katman seçili kalır.

## Alttaki katmanı referans olarak kullan

Etkin katmanın altındaki en yakın görünür boya katmanını referans olarak
işaretleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Katman > Katman ayarları > Alttaki katmanı referans olarak kullan** komutunu seçin.
- Bir araç referans katmanlardan örnek alıyorsa ve hiçbiri işaretli değilse tuvalin üstündeki bildirimde **_ad_ katmanını referans olarak kullan** düğmesini seçin.

## Geçiş

Bir grubu Geçiş olarak ayarlayabilirsiniz. Bu durumda grubun katmanları doğrudan
grubun altındaki katmanlarla karışır. Grubun opaklığı ve maskesi, bu sonuçla
alttaki katmanlar arasında geçiş yapar.

Aşağıdakilerden birini yapın:

- Grubun menüsünü açın ve **Katman ayarları > Geçiş** komutunu seçin.
- Katmanlar paneli başlığındaki **Katman karıştırma modu** listesinden veya **Özellikler** panelindeki **Karıştırma modu** listesinden **Geçiş** seçeneğini seçin.
- Grubun satırını kalemle veya parmakla sağa kaydırın.

Grubun klasöründe bir rozet görünür ve alt başlıkta “Geçiş” yazar.

Geçiş ayarını kapatmak grubu Normal moduna getirir. Geçiş ayarlı bir grup
kırpılamaz, kırpma tabanı olamaz ve ona filtre iliştirilemez. Kilitli bir grupta
Geçiş ayarını değiştiremezsiniz.

[Tercihler](/tr/docs/preferences/) bölümünün **Tuval** sayfasında
**Yeni gruplar için Geçiş modunu kullan** açık değilse yeni gruplar Normal
modunu kullanır. Normal dışında bir karıştırma modu kullanan katmanları veya
kendi katmanındaki bir filtreyi gruplamak, yeni grubu Geçiş yapar.

## Renk modu

Bir boya katmanını **Tam renk**, **Gri tonlama** veya
**İki ton (siyah ve beyaz)** olarak saklayabilirsiniz. Katmana boyama bu moda
uyar.

![Opaklık, Karıştırma modu ve Renk modu ayarlarıyla bir boya katmanının Özellikler paneli.](shot:layers/settings-color-mode)

Aşağıdakilerden birini yapın:

- Katmanı seçin, ardından **Özellikler** panelindeki **Renk modu** listesinden bir mod seçin.
- [Komut aramaya](/tr/docs/start/command-search/) “Renk modu” yazın ve bir mod seçin.

**Renk modu** katmanın menüsünde yoktur. Mod Tam renk değilse satırın alt
başlığı modu gösterir.

Modu değiştirmek mevcut pikselleri dönüştürür. Tam renk moduna dönmek özgün
renkleri geri getirmez. İki ton, her pikseli siyah veya beyaz ve tamamen opak ya
da tamamen saydam yapar. Katmanın maskesine boyarken **Renk modu** gizlenir.

## Diğer Katman ayarları öğeleri

**Katman ayarları** ayrıca **Dönüşümü piksellere uygula** komutunu listeler
(bkz. [Taşıma ve dönüştürme](/tr/docs/transform/move-transform/)). Fotoğraf
katmanında **Kaynak profilini onar…**, **Kaynağı pikselleştir…** ve
**Özgün fotoğrafa dön** komutlarını listeler (bkz.
[Katman türleri](/tr/docs/layers/types/)).
