---
title: "Parlaklığa göre seçme"
description: "Pikselleri parlaklığa göre seçen Ton aralığı aracı."
related: ["selections/tools", "selections/quick-mask", "color-management/hdr", "customize/toolbars"]
---

**Ton aralığı** aracıyla pikselleri parlaklığa göre seçebilirsiniz. Parlaklık,
referans beyaza (0) göre poz cinsinden ölçülür. Araç, tüm katmanlarıyla birlikte
görünür görüntüyü okur ve yumuşak kenarlı bir seçim oluşturur.

## Ton aralığını seçme

Aşağıdakilerden birini yapın:

- [Komut aramaya](/tr/docs/start/command-search/) “Ton aralığı” yazın.
- Eskiz'de başlık çubuğundaki **Seç** düğmesini seçin, çekmeceyi açmak için düğmeyi yeniden seçin ve **Ton aralığı** aracını seçin.
- [Klavye kısayolları](/tr/docs/input/keyboard/) bölümünde **Ton aralığı** aracına atadığınız tuşa basın.
- **Araçları ekle…** ile eklediğiniz bir araç çubuğunda **Ton aralığı** düğmesini seçin (bkz. [Araç çubukları ve başlık çubuğu](/tr/docs/customize/toolbars/)).

**Ton aralığı** aracının varsayılan tuşu yoktur ve Boya veya Fotoğraf araç
çubuklarında düğmesi bulunmaz. Etkin araç bu olduğunda Araç seti paneli tüm
seçim araçlarını listeler.

![Eskiz Seç çekmecesinde Mod, Tonlar, Yumuşaklık ve Kenar yumuşatma ile Ton aralığı ayarları.](shot:selections/tonal-range-settings)

## Tonlar

O parlaklık bandını seçmek için **Tonlar · referans beyaza göre poz cinsinden**
satırında bir düğme seçin. Band, **Mod** ayarına göre geçerli seçimle birleşir
(bkz. [Seçim araçları](/tr/docs/selections/tools/)).

Her düğmenin araç ipucu bandını belirtir:

- **Gölgeler · −5 pozun altında**
- **Orta gölgeler · −5 ile −3,5 poz arası**
- **Orta tonlar · −3,5 ile −1,5 poz arası**
- **Orta açık tonlar · −1,5 ile −0,5 poz arası**
- **Açık tonlar · −0,5 pozun üstünde**
- **Parlak HDR · +1 pozun üstünde**, yalnızca [HDR çizimlerde](/tr/docs/color-management/hdr/)
- **Özel · poz cinsinden bir aralık ayarlayın veya örnekleyin**

Bir ton düğmesi seçiliyken seçim **Yumuşaklık**, **Kenar yumuşatma**,
**Başlangıç** ve **Bitiş** değişikliklerini izler. Başka bir araç veya **Mod**
seçmek ton düğmesinin seçimini kaldırır.

## Özel aralık

Bandı kendiniz ayarlayabilir veya tuvalden örnekleyebilirsiniz.

Aşağıdakilerden birini yapın:

- **Özel · poz cinsinden bir aralık ayarlayın veya örnekleyin** düğmesini seçin ve **Başlangıç** ile **Bitiş** değerlerini poz cinsinden ayarlayın. Varsayılanlar −3,5 ve −1,5'tir.
- O alandaki parlaklık aralığını kullanmak için tuvalde bir alan boyunca sürükleyin.
- Bandı o noktadaki parlaklığa ortalamak için tuvale tıklayın. Band geçerli Özel genişliğini korur, başka bir ton seçiliyse 1 poz genişliğinde olur.

Tuvalde örnekleme yapmak tonu Özel olarak değiştirir. Web düzenleyicisinde
**Başlangıç** ve **Bitiş** tek bir aralık denetimini paylaşır.

![Özel seçili ve aralık poz cinsinden gösterilirken Ton aralığı ayarları.](shot:selections/tonal-range-custom)

## Yumuşaklık

Bandın iki ucundaki yumuşak geçişi %0 ile %200 arasında genişletir. Varsayılan
%100'dür.

## Kenar yumuşatma

Seçimin kenarını en fazla 100 px yumuşatır.

## Mod ve basılı tutulan tuşlar

**Ton aralığı** aracında diğer seçim araçlarıyla aynı **Mod** düğmeleri bulunur,
**Kenar düzleştirme** yoktur. Eklemek, çıkarmak veya kesiştirmek için tıklarken
ya da sürüklerken **Shift**, **Alt** veya **Shift+Alt** tuşunu basılı tutun.

## Hızlı maske ve seçim katmanları

**Ton aralığı** [Hızlı maskede](/tr/docs/selections/quick-mask/) ve bir
[seçim katmanını](/tr/docs/selections/selection-layers/) düzenlerken de çalışır
ve o maskeyi değiştirir. Aracın tuval çubuğu, tuvalin alt kenarındaki
[seçim çubuğudur](/tr/docs/selections/working/).
