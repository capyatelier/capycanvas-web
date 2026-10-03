---
title: "Seçim araçları"
description: "Değişikliklerin yalnızca o alanı etkilemesi için çiziminizin bir bölümünü seçin."
purpose: "Seçim, çizimin üzerinde çalışmak istediğiniz bölümünü işaretler. Etkin durumdayken boyama, doldurma ve dönüştürme yalnızca seçilen alanı etkiler, böylece çizimin geri kalanı güvende kalır. Capy Canvas'da basit şekiller, serbest taslaklar ve benzer renkteki alanlar için seçim araçları bulunur."
techniques: ["Doğru seçim aracını seçin.", "Seçime ekleme veya seçimden çıkarma.", "Bir seçimi doldurun ve işiniz bittiğinde seçimi kaldırın."]
figure: "1: Araç Setindeki seçim araçları. 2: Seçim modu, geçiş yumuşatma ve şekil seçenekleri. 3: Diskin etrafında bir elips seçimi."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Araç Setindeki seçim araçları. 2: Seçim modu, geçiş yumuşatma ve şekil seçenekleri. 3: Diskin etrafında bir elips seçimi."}
---

## Bir seçim aracı seçin

Paint'da, araç çubuğunda **Lasso selection** veya **Auto select**'yu seçin; Araç Seti tüm seçim araçlarını listeleyecektir. Sketch'da bunlar **Select** düğmesinin altındadır ve Photo bunların çoğunu araç çubuğunda tutar.

**Rectangle select** ve **Ellipse select** basit şekiller çizer; Bir kare veya daire için **Shift**'yu ve merkezden çizmek için **Alt**'yu tutun. **Lasso selection** kaleminizi serbestçe takip eder ve **Polygonal lasso** tıklattığınız noktalar arasındaki düz çizgileri birleştirir; ilk noktaya tekrar tıklayın veya kapatmak için **Enter** tuşuna basın. **Auto select** tek tıklamayla benzer renkteki bir alanı seçer ve **Select by color** aynı anda o rengin her alanını seçer. İki aracın daha, **Paint selection** ve **Tonal range**'nun kendi sayfaları vardır: [Hızlı Maske ve seçim katmanları](/tr/docs/selections/quick-mask/) ve [Parlaklığa göre seç](/tr/docs/selections/tonal-range/).

## Seçimleri birleştirme ve yumuşatma

**Tool** panelinin üst kısmındaki dört düğme, başka bir seçim yaptığınızda ne olacağını seçer. Mevcut olanın yerini alabilir, ona ekleme yapabilir, çıkarma yapabilir veya yalnızca ikisinin çakıştığı alanı tutabilir. Ayrıca düğmeleri değiştirmeden, eklemek için **Shift**'yu veya çıkarmak için **Alt**'yu da tutabilirsiniz.

**Feather radius**, seçimin kenarlarını yumuşatır, böylece boya ve ayarlamalar sabit bir çizgide durmak yerine yavaş yavaş kaybolur. Otomatik seçim için **Tolerance**, bir rengin ne kadar farklı olabileceğini ve yine de dahil edilebileceğini kontrol eder ve **Close gaps**, seçimin çizgi resminizdeki küçük kesintilerden sızmasını engeller.

## Seçimi kullan

Bir katmanda boyalı her şeyi seçmek için **Ctrl** tuşunu basılı tutun ve katmanın küçük resmine tıklayın. Seçim etkinken özgürce boyayın: konturlar yalnızca seçimin içine iner. Geçerli renkle doldurmak için **Edit → Fill selection**'yu seçin veya onu bir [katman maskesi](/tr/docs/layers/masks/)'ye dönüştürün. **Select** menüsü ayrıca seçimi tersine çevirebilir, birkaç piksel büyütebilir veya küçültebilir veya **Reselect** ile son seçimi geri getirebilir.

İşiniz bittiğinde **Select → Deselect pixels**'yu seçin, böylece sonraki vuruşlarınız istediğiniz yere gidebilir.
