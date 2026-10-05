---
title: "Gölgelendirme"
description: "İllüstrasyon eğitiminin 4. aşaması: her temel renge kırpılmış katmanlarda gölgelendirme ve doku, ardından PNG dışa aktarma."
related: ["layers/settings", "drawing/brush-tools", "files/open-save", "files/export"]
---

Bu aşamada her şeklin gölgelendirmesi, şeklin temel rengine kırpılmış
katmanlarda oluşur ve çalışmanın PNG dışa aktarımı yapılır.

## 1. Kırpma katmanı ekleyin

*Ribbon* katmanını seçin, ardından **Katman > Yeni > Yeni kırpma katmanı**
komutunu veya satırın menüsünden **Yeni > Yeni kırpma katmanı** komutunu seçin
([Katman ayarları](/tr/docs/layers/settings/)). Yeni katmanı *Ribbon shading*
olarak yeniden adlandırın.

![Yeni alt menüsü açık ve içinde Yeni kırpma katmanı bulunan katman menüsü.](shot:illustration/render-new-menu)

*Ribbon shading* *Ribbon* katmanının hemen üstünde görünür ve küçük resimlerin
solundaki ray kırpmayı gösterir. Kırpma, katmanın tamamını dolduran petrol
mavisini değil, *Ribbon* katmanının maskesini izler.

## 2. Şeridi gölgelendirin

Araçlar çubuğunda **Boya fırçası** düğmesini, Araç setinde **Suluboya yıkama**
fırçasını seçin ([Fırça araçları](/tr/docs/drawing/brush-tools/)). **Araç**
panelinde **Opaklık** değerini %65 yapın ve şeridin kıvrımlarındaki gölgeleri
koyu maviyle boyayın. Ardından **Boya fırçası** fırçasıyla adaçayı yeşili
vurgular ekleyin.

## 3. Doku katmanı ekleyin

*Ribbon shading* seçiliyken yeniden **Katman > Yeni > Yeni kırpma katmanı**
komutunu seçin ve katmanı *Ribbon texture* olarak yeniden adlandırın. Katman
aynı kırpma içinde *Ribbon shading* katmanının üstüne eklenir. **Kurşun kalem**
aracını ve **Kurşun kalem** fırçasını seçin, krem rengi tarama çizgileri ve
parlak noktalar çizin.

## 4. Diski ve bloğu gölgelendirin

*Disc* katmanını seçin, *Disc shading* adlı bir kırpma katmanı ekleyin ve
diskin alt yarısını terrakota renginde **Pistole** ile gölgelendirin. Sol üste
krem rengi bir parlak nokta ekleyin.

*Block shading* aynı şekilde *Block* katmanına eklenir: sağ ve alt kenarlar
boyunca **Boya fırçası** fırçasıyla koyu mavi, ardından **Kurşun kalem**
fırçasıyla krem rengi tarama.

![Ribbon katmanına kırpılmış Ribbon texture ve Ribbon shading ile tabanlarına kırpılmış Disc shading ve Block shading bulunan Katmanlar paneli.](shot:illustration/render-layers)

Katman listesi [giriş](/tr/docs/illustration/) sayfasındaki bitmiş katmanlarla
eşleşir.

## 5. Kaydedin ve dışa aktarın

**Dosya > Kaydet** komutunu seçin veya **Ctrl+S** tuşlarına basın ve çizimi
`.capy` dosyası olarak kaydedin ([Açma ve kaydetme](/tr/docs/files/open-save/)).
PNG dışa aktarmak için:

1. **Dosya > Dışa aktar…** komutunu seçin veya **Ctrl+Shift+E** tuşlarına basın.
2. **Hedef** ayarını **Web / paylaşım** olarak bırakın ve **Biçim** ayarını **PNG görüntüsü** yapın.
3. **Dosya seç…** düğmesini seçin, bir klasör ve ad seçin.

İlk dışa aktarmadan sonra **Dosya > Yeniden Dışa Aktar** iletişim kutusunu
açmadan aynı dosyayı aynı ayarlarla yazar
([Görüntüleri dışa aktarma](/tr/docs/files/export/)).
