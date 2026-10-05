---
title: "Renk paneli"
description: "Renk panelinin çemberi ve renk örnekleriyle boya rengini seçme."
related: ["color/edit-color", "color/palettes", "color/eyedropper", "color-management/hdr"]
---

Boya rengini **Renk** panelinde seçebilirsiniz. Tüm çalışma alanları aynı boya
rengini kullanır.

![Renk paneli: renk çemberi, sol üstte değer göstergesi ve çemberin altında renk örnekleri.](shot:color/panel "1 Değer göstergesi · 2 Şekil düğmeleri · 3 Rengi düzenle · 4 Ön plan ve arka plan · 5 Değiştir · 6 Saydam boya · 7 Siyah ve beyaz")

## Renk panelini açma

Aşağıdakilerden birini yapın:

- **Pencere > Renk** komutunu seçin.
- Komut aramada **Renk paneli** öğesini seçin.
- Boya'da sol sütundaki **Renk** sekmesini seçin.
- Araçlar çubuğunun sonundaki veya Eskiz'de başlık çubuğunun sağ ucundaki **Fırça rengi** düğmesini seçin. Renk ve Paletler panellerini içeren bir çekmece açılır.

## Renk çemberi

Renk tonunu ayarlamak için dış halkayı, doygunluğu ve parlaklığı ayarlamak için
halkanın içindeki alanı sürükleyin.

Dairede beyaza, tam renge veya siyaha yapışmak için alanın kenarını sol üstte,
sağ üstte veya altta aşacak şekilde sürükleyin. Gri bir renk, halkada en son
ayarladığınız renk tonunu korur.

## Alan şekilleri

Alan şeklini değiştirmek için halkanın dışında, sağ üstteki iki küçük düğmeden
birini seçin. Düğmelerin araç ipuçlarında **Okhsv dairesi kullan**, **HSV karesi
kullan** ve **HLS üçgeni kullan** yazar.

| Şekil | Alan | Değer göstergesi |
| --- | --- | --- |
| Daire (varsayılan) | Okhsv. Sol üstte beyaz, sağ üstte tam renk, altta siyah. | OKLCH |
| Kare | HSV. Doygunluk sağa, parlaklık yukarı doğru artar. | HSB |
| Üçgen | HLS. Köşeler beyaz, siyah ve saf renk tonudur. | HLS |

## Değer göstergesi

Panelin sol üstündeki sayılar rengi alan şeklinin modelinde gösterir. Bu model
ile 0 ile 255 arasındaki RGB değerleri arasında geçiş yapmak için göstergeyi
seçin.

## Ön plan ve arka plan renkleri

Bir renkle boyamak için **Ön plan rengi** (sol alttaki büyük renk örneği) veya
**Arka plan rengi** (onun arkasındaki renk örneği) öğesini seçin. Komut aramada
da aynı adlar bulunur. Seçili renk örneğinin çerçevesi daha kalındır.

Kıl fırçaları her darbeye, boyamadığınız rengi çizgi çizgi işler.

> **Not:** [Hızlı maskede](/tr/docs/selections/quick-mask/) ve bir [seçim katmanında](/tr/docs/selections/selection-layers/) renk örnekleri, başlangıçta siyah ve beyaz olan ayrı bir çift tutar ve boya, rengin gri değerini kullanır. Bunlardan çıktığınızda çizim renkleri geri gelir. Katman maskesinde renk önemli değildir: fırçalar gösterir, Silgi gizler.

## Saydam boya

Saydam boyayla boyayarak herhangi bir fırçayla veya Şekil ile silebilirsiniz.
Aşağıdakilerden birini yapın:

- **Saydam boya** (sağ alttaki damalı renk örneği) öğesini seçin.
- Komut aramada **Saydam boya** öğesini seçin.
- [Klavye kısayolları](/tr/docs/input/keyboard/) sayfasında **Saydam boya** eylemine bir tuş atayın, ardından saydam boyayı açmak veya kapatmak için o tuşa basın. **Basılı tutulurken Saydam boya**, saydam boyayı yalnızca tuşu basılı tuttuğunuz sürece kullanır.

Çemberde sürüklemek yeniden renkle boyamaya geçer.

## Renkleri değiştirme

Ön plan ve arka plan renklerinin yerini değiştirebilirsiniz. Aşağıdakilerden
birini yapın:

- **Ön plan ve arka planı değiştir** (arka plan renk örneğinin sağındaki iki ok) öğesini seçin.
- Komut aramada **Ön plan ve arka planı değiştir** öğesini seçin.
- Photoshop tarzı, Krita tarzı, Clip Studio Paint tarzı ve GIMP tarzı tuş eşlemelerinde **X**, Affinity tarzında **Shift+X** tuşuna basın.

Aynı renk örneği seçili kalır. CapyCanvas tuş eşlemesinde **Renkleri değiştir**
için bir tuş yoktur.

## Siyah ve beyaz

**Siyahla boya** veya **Beyazla boya** (saydam renk örneğinin yanındaki iki
küçük daire) öğesini seçin ya da komut aramada **Siyah** veya **Beyaz** öğesini
seçin.

Siyah veya beyaz, seçili ön plan veya arka plan renk örneğinin renginin yerini
alır. **Saydam boya** seçiliyse siyah veya beyaz bunun yerine geçici bir boya
rengi olur. Bu durumda çember geçici rengi düzenler; ön plan ve arka plan renkleri
değişmez.

## Rengi düzenle

Rengi [Rengi düzenle](/tr/docs/color/edit-color/) penceresinde sayılarıyla
ayarlamak için **Rengi düzenle…** (panelin sağ üstündeki kalem) öğesini seçin
veya ön plan ya da arka plan renk örneğine çift tıklayın. **Saydam boya**
seçiliyken **Rengi düzenle…** kullanılamaz.

## Renk örneği menüsü

Windows, Linux ve Android'de **Rengi düzenle…**, **Paletler…** ve **Ön plan ve
arka planı değiştir** için ön plan veya arka plan renk örneğine sağ tıklayın ya
da örneği basılı tutun.

## HDR yoğunluğu

[HDR çiziminde](/tr/docs/color-management/hdr/) çemberin altındaki bir yay,
boyanın yoğunluğunu SDR beyazına göre poz (EV) cinsinden −2 ile +6 EV arasında
belirler. Değer renk örneklerinin altında görünür, örneğin “+2.00 EV”.

![HDR çiziminde Renk paneli: çemberin altında yoğunluk yayı.](shot:color/panel-hdr)

- Yoğunluğu ayarlamak için yay boyunca sürükleyin.
- 0 EV'ye dönmek için yaya çift tıklayın.
- Yay odaktayken 0,1 EV'lik adımlarla değiştirmek için ok tuşlarına, 0 EV için **Home** tuşuna basın.

Çember temel rengi belirler, yoğunluk ise bu rengi doğrusal ışıkta çarpar. Renk
örnekleri ve yay, renklerin önizlemesini çizimin SDR sürümü üzerinden gösterir.
**Saydam boya** seçiliyken yay kullanılamaz.
