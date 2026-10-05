---
title: "Cetveller ve kılavuzlar"
description: "Fırça darbelerini düz çizgilere bağlayan kılavuzlar ve görüntüyü bir kılavuz boyunca düzeltme."
related: ["drawing/figure", "transform/crop", "transform/move-transform", "drawing/brush-tools"]
---

Tuvale, fırça darbelerini düz çizgilere bağlayan kılavuzlar yerleştirebilirsiniz.
Kılavuzlar `.capy` dosyasına kaydedilir ve dışa aktarılan görüntülerde görünmez.

## Cetvel aracı

Aşağıdakilerden birini yapın:

- **Shift+U** tuşlarına basın.
- Boya'da Araçlar çubuğunda **Cetvel** düğmesini seçin. **Düz**, **Paralel** veya **Radyal** seçmek için düğmeye sağ tıklayın veya düğmeyi basılı tutun.
- Komut aramada **Cetvel** öğesini arayın.

Eskiz'de ve Fotoğraf'ta Cetvel düğmesi yoktur. **Araçları ekle…** ile bir Cetvel
düğmesi ekleyebilirsiniz
([Araç çubukları ve başlık çubuğu](/tr/docs/customize/toolbars/)).

Kılavuz eklemek için tuvalin boş bir kısmında sürükleyin veya Radyal kılavuz
eklemek için tıklayın. Düz veya Paralel bir kılavuzu 45° adımlarla döndürmek
için sürüklerken **Shift** tuşunu basılı tutun.

Kılavuzun açısını ve uzunluğunu değiştirmek için tutamacını, kılavuzun tamamını
taşımak için çizgisini sürükleyin.

- Bir sürüklemeyi iptal etmek için **Escape** tuşuna basın.
- Kılavuz eklemek, taşımak ve silmek geri alma adımlarıdır.
- Kılavuzlar gizliyken bir sürükleme yeni bir kılavuz ekler ve tüm kılavuzları yeniden gösterir.
- Kırp, Görüntü boyutu, Tuval boyutu, döndürme ve çevirme kılavuzları görüntüyle birlikte taşır.

## Kılavuz türleri

![Tuvalde Düz, Paralel ve Radyal kılavuzlar: kesikli çizgiler, kare tutamaçlar ve radyal artı işareti.](shot:drawing/ruler-guides)

Düz ve Paralel kılavuzlar, her tutamacında bir kare bulunan kesikli çizgilerdir.
Radyal kılavuz, kesikli bir artı işareti olan bir karedir. Seçili kılavuzun
tutamaçları daha büyüktür.

Kılavuzlara yalnızca fırça araçlarının darbeleri uyar.

### Düz

Kılavuz çizgisine 12 ekran pikseli mesafe içinde başlayan bir darbe o çizgiyi
izler. Çizgi tuvalin tamamı boyunca uzanır.

### Paralel

Her darbe, bastığınız noktadan itibaren kılavuza paralel ilerler.

### Radyal

Darbeler kılavuzun merkezine doğru yönelir. Her darbe, merkezden başlayıp
bastığınız noktadan geçen çizgiyi izler.

## Darbenin izlediği kılavuz

Yakındaki bir Düz kılavuz, Paralel ve Radyal kılavuzlardan önce gelir. Birden
çok Paralel ve Radyal kılavuz arasında, ilk tutamacı veya merkezi darbenin
başlangıcına en yakın olan kılavuz geçerli olur.

## Kılavuzları gösterme ve hizalama

Kılavuzları gizleyebilir veya hizalamayı kapatabilirsiniz.

Aşağıdakilerden birini yapın:

- **Görünüm > Cetvelleri göster** veya **Görünüm > Cetvellere hizala** komutunu seçin.
- Cetvel aracı etkinken veya İşlem ile bir kılavuz seçiliyken **Araç** panelinde **Cetvelleri göster** veya **Cetvellere hizala** seçeneğini seçin.
- Kılavuz çubuğunda **Kılavuzlar** veya **Hizala** düğmesini seçin.

İkisi de varsayılan olarak açıktır. Kılavuzlar gizliyken **Cetvellere hizala**
kullanılamaz.

## Kılavuz silme

Kılavuzu seçin, ardından aşağıdakilerden birini yapın:

- **Delete** veya **Backspace** tuşuna basın.
- **Araç** panelinde **Cetveli sil** düğmesini seçin.
- Kılavuz çubuğunda **Sil** düğmesini seçin.

**Delete** ve **Backspace** tuşları kılavuzu yalnızca Cetvel, Şekil, İşlem,
Dönüştür veya Kırp etkin araçken siler. Diğer araçlarla bu tuşlar **Seçili
pikselleri temizle** komutunu çalıştırır.

## Kılavuz çubuğu

Cetvel veya İşlem aracıyla bir kılavuz seçtiğinizde tutamaçlarının altında bir
çubuk görünür.

| Düğme | Eylem |
| --- | --- |
| **Sil** | Kılavuzu siler. |
| **Hizala** | **Cetvellere hizala** ayarını açar veya kapatır. |
| **Kılavuzlar** | Tüm kılavuzları gösterir veya gizler. Gizlemek çubuğu da gizler. |
| **Düzelt** | **Görüntüyü kılavuza göre düzelt** işlemini başlatır. Yalnızca Düz kılavuz için. |

**Görünüm > Tuval eylem çubuğunu göster** kapatıldığında kılavuz çubuğu
kaldırılır.

![Seçili bir Düz kılavuzun altındaki kılavuz çubuğu: Sil, Hizala, Kılavuzlar ve Düzelt.](shot:drawing/ruler-guide-bar)

## İşlem ile kılavuzları taşıma

[İşlem](/tr/docs/transform/move-transform/) aracıyla katman yerine kılavuzu
taşımak için kılavuzun tutamacını veya çizgisini sürükleyin. İşlem hiçbir zaman
kılavuz eklemez.

## Görüntüyü kılavuza göre düzelt

Görüntüyü bir Düz kılavuz boyunca düzleyebilirsiniz.

Bir Düz kılavuz seçin, ardından aşağıdakilerden birini yapın:

- Kılavuz çubuğunda **Düzelt** düğmesini seçin.
- Komut aramada **Görüntüyü kılavuza göre düzelt** öğesini arayın.

Kırp aracı, çerçevesi kılavuzu yataya veya dikeye (hangisi daha yakınsa)
getirecek şekilde döndürülmüş olarak açılır. Görüntüyü döndürmek için kırpmayı
uygulayın ([Kırpma](/tr/docs/transform/crop/)).
