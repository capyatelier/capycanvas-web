---
title: "Dolgular ve degradeler"
description: "Bir alanı tek tıklamayla veya bir renkten diğerine yumuşak bir karışımla doldurun."
purpose: "Doldurma aracı, çizgi resimde renklendirmenin en hızlı yolu olan, tek tıklamayla bir alana renk döker. Bunun yerine degrade bir renkten diğerine yumuşak bir şekilde karışır; bu da gökyüzü, arka planlar ve yumuşak ışıklandırma için kullanışlıdır."
techniques: ["Tek tıklamayla çizgi resminizin içindeki bir alanı doldurun.", "Doğrusal veya radyal bir degrade çizin.", "Seçimin içinde dolgu veya degrade tutun."]
figure: "1: Araç Setindeki degrade türleri. 2: Ön plan ve arka plan renkleri. 3: Degradeyi alan katman."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: Araç Setindeki degrade türleri. 2: Ön plan ve arka plan renkleri. 3: Degradeyi alan katman."}
---

## Tek tıklamayla bir alanı doldurun

**Fill** aracını seçin veya **F** tuşuna basın ve bir alanın içine tıklayarak alanı ön plan rengiyle doldurun. Başka bir katmandaki çizgi resmi renklendirmek için önce çizgi resim katmanını **Layer Settings → Use as reference** ile referans olarak işaretleyin ve Araç Seti'nde **Reference layers**'yu seçin. Daha sonra boyamak istediğiniz boş katmanı seçin ve alanın içine tıklayın. Dolgu, farklı bir katmanda olsalar bile çizgilerde durur.

Dolgu hatlarınızdaki küçük bir boşluktan dışarı sızıyorsa, Araç panelinde **Close gaps**'yu yükseltin. **Expansion** dolguyu hafifçe çizgilerin altına iter, böylece renk ile mürekkep arasında ince beyaz kenar kalmaz.

## Renkleri ve katmanı seçin

Degradenin kendine ait bir katmanı varsa daha sonra değiştirilmesi en kolay yoldur; bu nedenle önce yeni bir katman ekleyin. Ardından **Color** panelinde iki rengi seçin: degrade ön plan rengiyle başlar ve arka plan rengiyle biter.

**Gradient** aracını seçin, ardından **Tool Set**'da bir tür seçin. **Linear** degradeleri düz bir çizgide karışır ve **Radial** degradeleri bir merkez noktadan itibaren bir daire şeklinde yayılır. *Temizlenecek renk* versiyonları, arka plan rengine karışmak yerine ön plan rengini soluklaştırıp şeffaf hale getirir.

## Çizmek için sürükleyin

Doğrusal bir degrade için, ilk rengin olması gereken yerden ikinci rengin olması gereken yere sürükleyin. Radyal degrade için merkezden başlayın ve dışarı doğru sürükleyin. Kısa bir sürükleme renkler arasında hızlı bir değişiklik yapar ve uzun bir sürükleme karışımı çizimin daha fazla kısmına yayar.

Sonuç pek doğru değilse geri alın ve tekrar sürükleyin. Doğru açıyı ve uzunluğu bulmak genellikle birkaç denemeyi gerektirir.

## İstediğin yerde tut

Bir [selection](/tr/docs/tools/selections/) etkinse degrade yalnızca seçilen alanı doldurur. Daha sonra seçimi kaldırın, böylece sonraki vuruşlarınız istediğiniz yere gidebilir. Daha sonra ayarlamak isteyebileceğiniz bir sınır için seçim yerine [mask](/tr/docs/layers/masks/) kullanın. Degrade kendi katmanında olduğundan, daha sonra katmanın opaklığını azaltarak da yumuşatabilirsiniz.
