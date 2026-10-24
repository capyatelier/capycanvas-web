---
title: "Vektör katmanları"
description: "Piksel yerine yol tutan katmanlar ve bunlar üzerinde çalışan kalemler, şekiller ve silgi."
related: ["layers/paths", "layers/types", "drawing/figure", "layers/merging"]
---

Vektör katmanı piksel yerine yollar tutar. Yollarını çizdikten sonra yeniden biçimlendirebilirsiniz ([Yolları düzenleme](/tr/docs/layers/paths/)).

## Vektör katmanı oluşturma

Aşağıdakilerden birini yapın:

- Katmanlar panelinin altındaki **Yeni vektör katmanı** seçeneğini seçin.
- **Katman > Yeni > Yeni vektör katmanı** komutunu seçin.
- **Ctrl+Alt+Shift+N** tuşlarına basın.
- [Komut aramaya](/tr/docs/start/command-search/) “çizgi sanatı” yazın.

Vektör katmanının küçük resminde bir yol rozeti bulunur.

![Katmanlar paneli: Geçerli mürekkep ve Kâğıdın üstünde Line art vektör katmanı, küçük resminde yol rozeti.](shot:vector/layers-panel)

## Yol çizme

Yolları, genişliği kalem basıncını izleyen **G kalem** ve tek genişliği koruyan **Tek çizgi** ile çizebilirsiniz. Her çizgi bir yol olur. Seçili bir yolun açık ucundan başlayan çizgi o yolu sürdürür.

Bir vektör katmanını seçmek, yol çizen son kaleme geçer; başlangıçta bu G kalemdir. Bir boya katmanını yeniden seçmek, önceki fırçanızı geri getirir.

Vektör katmanında **Araç seti**, yol çizemeyen fırçaları soluk gösterir. Bir kalemin **Sertlik** veya **Güç** ayarını düşürdüğünüzde kalem yol çizmeyi bırakır.

![Yol çizemeyen bir fırça için tuvalin üstündeki bildirim: G kalem Kullan, Yeni Boya Katmanı ve Katmanı pikselleştir.](shot:vector/refusal-notice)

Başka bir fırçayla çizilen çizgi hiçbir şey boyamaz ve bir bildirim katmanın adını söyler. Bildirimdeki eylemler şunlardır: **G kalem Kullan**, **Yeni Boya Katmanı** (üste bir boya katmanı ekler) ve **Katmanı pikselleştir**. Bir ayar kalemi durdurduğunda **G kalem Kullan** yerine ayarın adını taşıyan **Sıfırla** eylemi gelir, örneğin **Sertlik Sıfırla**.

## Şekiller

**Şekil** ile her **Çizgi**, **Dikdörtgen**, **Elips**, **Çokgen**, **Yıldız** ve **Yol** bir yol olur; seçili gelir ve diğerlerinin önündedir. Bkz. [Şekil](/tr/docs/drawing/figure/).

## Yolları silme

Yolları **Silgi** ile, **Saydam boya** ile veya kalemin silgi ucuyla silebilirsiniz. Vektör katmanında Silgi etkinken **Araç seti** panelinde silgi fırçalarının üstünde üç mod görünür. Eskiz'de bunlar **Silgi** çekmecesindeki **Araçlar** sütununun başında yer alır.

![Vektör katmanında Silgi için Araç seti paneli: Silgi fırçasının üstünde Dokunulan kısmı sil, Yolların tamamını sil ve Kesişime kadar sil.](shot:vector/eraser-modes)

- **Dokunulan kısmı sil**, silginin dokunduğu yerde yolu keser ve yolun geri kalanını olduğu gibi bırakır. Varsayılan budur.
- **Yolların tamamını sil**, silginin dokunduğu her yolu kaldırır.
- **Kesişime kadar sil**, yolun dokunulan kısmını diğer yollarla veya kendisiyle olan en yakın kesişimlere kadar kaldırır. Hiçbir şeyi kesmeyen bir yol tamamen kaldırılır.

Silmek dolgulu alanı kaldırmaz.

## Doldur

**Doldur** tıkladığınız kapalı yolu renklendirir, **Kement dolgusu** ise dolgulu bir yol ekler. Bkz. [Dolgu araçları](/tr/docs/drawing/fill/).

## Katmanı pikselleştir

Bir vektör katmanını, yollarının gösterdiğini tutan bir boya katmanına dönüştürmek için **Katman > Katmanı pikselleştir** komutunu seçin.

## Birleştirme

**Alttakiyle birleştir**, bir vektör katmanı başka bir vektör katmanıyla birleşirken yolları korur. Diğer her birleştirme, bir bildirimden sonra yolları piksele dönüştürür. Bkz. [Katmanları birleştirme](/tr/docs/layers/merging/).
