---
title: "Komut arama"
description: "Komutları, araçları, fırçaları ve ayarları adlarını yazarak bulma ve çalıştırma."
related: ["input/keyboard", "start/undo", "customize/toolbars"]
---

Komutları, araçları, fırçaları, katman özelliklerini, çalışma alanlarını ve
renkleri adlarını yazarak bulabilir ve çalıştırabilirsiniz.

## Komut aramayı açma

Aşağıdakilerden birini yapın:

- **Düzenle > Komutlarda ara…** komutunu seçin.
- **Ctrl+K** veya **Ctrl+Shift+P** tuşlarına basın. Web düzenleyicisinde yalnızca **Ctrl+K** çalışır.
- Komut aramayı bir araç çubuğuna eklediyseniz düğmesini seçin (bkz. [Araç çubukları ve başlık çubuğu](/tr/docs/customize/toolbars/)).

Diğer klavye hazır ayarları başka tuşlar kullanır (bkz.
[Klavye kısayolları](/tr/docs/input/keyboard/)). Bu tuşlar bir metin alanına
yazarken de çalışır.

Arama kutusu, alanı boş olarak pencerenin üst kısmına yakın bir yerde açılır.

Komut arama, fırça darbesi sırasında, **Tercihler** açıkken veya başlık çubuğunu
özelleştirirken kullanılamaz.

## Öneriler

![Alanı boş komut arama: Geri al, Tuvali sığdır, Kaydet, Tercihler ve Klavye kısayolları listeleniyor.](shot:start/command-search-suggestions)

Alan boşken listede en fazla beş girdi bulunur: önce aramadan en son
çalıştırdıklarınız, ardından **Geri al**, **Tuvali sığdır**, **Kaydet**,
**Tercihler** ve **Klavye kısayolları**. O anda çalıştırılamayan girdiler listede
yer almaz.

Yalnızca aramadan çalıştırdığınız girdiler son kullanılanlara eklenir. {appName}'tan çıktığınızda son kullanılanlar listesi temizlenir.

## Arama

Bir adın bir kısmını yazın. Listede en fazla sekiz eşleşme gösterilir ve tam
eşleşen adlar önce gelir.

- Büyük ve küçük harfler birbiriyle eşleşir. Aksanlı harfler aynen eşleşmelidir.
- Sırayla yazılan harfler de eşleşir: “tvl sğdr”, **Tuvali sığdır** öğesini bulur.
- İngilizce adlar her uygulama dilinde eşleşir.
- Bazı girdiler başka sözcüklerle de eşleşir: “settings” **Tercihler**, “color picker” **Damlalık**, “resize” ise **Dönüştür** öğesini bulur.
- “brush” veya “brushes” yazdığınızda tek tek fırçalar listelenmez.

Hiçbir şey eşleşmezse listede “Eşleşen komut yok” yazar.

## Bulabilecekleriniz

- Menülerdeki tüm öğeler.
- Tüm araçlar ve **Cetvel › Radyal** gibi her araç çeşidi.
- Tüm fırçalar ve “*set* fırçaları” biçiminde her fırça seti.
- Geçerli aracın **Fırça boyutu…** gibi ayarları.
- Seçili katmanın **Katman opaklığı…** gibi özellikleri.
- Tüm çalışma alanları.
- **Ön plan rengi**, **Arka plan rengi**, **Saydam boya**, **Geçici renk**, **Ön plan ve arka planı değiştir**, **Siyah** ve **Beyaz**.
- **Pencere** menüsündeki tüm paneller ve araç çubukları.

## Sonuçlar

![“undo” sorgusuyla komut arama: Geri al satırı soluk, altta “Geri alınacak bir şey yok” yazıyor.](shot:start/command-search-unavailable)

Her satırda ad ve sağda girdinin tuşu gösterilir. Onay işareti, açık olan bir
ayarı ve geçerli çalışma alanını belirtir.

Kutunun altındaki satır, vurgulanan girdiyi yardım metniyle, menüdeki yeriyle
veya değer aralığıyla açıklar. O anda çalıştırılamayan bir girdi soluk görünür
ve alt satırda nedeni yazar, örneğin “Geri alınacak bir şey yok”.

## Sonucu çalıştırma

Aşağıdakilerden birini yapın:

- Bir satırı vurgulamak için **↑** veya **↓** tuşuna, ardından **Enter** tuşuna basın.
- Bir satır seçin.

Arama kapanır ve girdi çalışır. Girdi çalıştırılamıyorsa arama açık kalır ve
nedeni gösterir.

## Değer yazma

![Fırça boyutu… için değer isteyen komut arama: px birimi, altta geçerli değer ve aralık.](shot:start/command-search-typed-value)

**Fırça boyutu…** ve **Katman opaklığı…** gibi sayısal ayarların girdileri bir
değer ister. Alt satırda geçerli değer ve aralık gösterilir.

Değer ayarlamak için:

1. Girdiyi seçin veya vurgulayıp **Enter** tuşuna basın.
2. Değeri yazın ve **Enter** tuşuna basın.

“12 * 2” veya “sqrt(9)” gibi işlemler ve “50%” gibi yüzdeler yazabilirsiniz.
Aralığın dışındaki bir değer en yakın sınıra ayarlanır. Sonuçlara dönmek için
**Escape** tuşuna basın.

## Metin alanından veya paletten geri alma

Komut aramayı bir metin alanından açarsanız **Geri al** ve **Yinele**,
**Metin düzenlemesini geri al** ve **Metin düzenlemesini yinele** olur. Bunlar
aramadan çalıştırılamaz. Alana yazdıklarınızı geri almak için önce aramayı
kapatın.

**Paletler** panelinden açılan arama bunların yerine **Renk sıralamasını geri
al** ve **Renk sıralamasını yinele** girdilerini listeler. Bu girdiler çizimdeki
değil, paletin renk sırasındaki değişiklikleri geri alır ve yineler.

## Komut aramayı kapatma

Aşağıdakilerden birini yapın:

- **Escape** tuşuna basın.
- Alanın sağındaki **×** düğmesini seçin.
- Kutunun dışına tıklayın veya dokunun.

Kutunun dışına tıklamak tuvale boya sürmez.
