---
title: "İşleme"
description: "Her şekle kırpılan katmanlara gölgeleme ve doku ekleyin, ardından sonucu dışa aktarın."
purpose: "Oluşturma, şekillerin ışığını ve gölgesini aldığı yerdir. Kırpılan katmanlardaki gölgelemeyi boyamak, her şeklin içinde otomatik olarak kalmasını sağlar ve gölgeleme temel renkten ayrı olduğundan hiçbir şey kaybetmeden onu ayarlayabilir veya yeniden yapabilirsiniz."
techniques: ["Bir gölgelendirme katmanını Şerit'e klipsleyin.", "Gölgelemenin gücünü kontrol edin.", "Diğer şekilleri gölgeleyin, katmanları kontrol edin ve dışa aktarın."]
figure: "Şekil 1: Şerit dokusu ve Şerit üzerindeki Şerit gölgelemesi. 2: Aşağıdaki katmana klipsleyin. 3: Tüm gölgeleme geçişi için katman opaklığı."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "Şekil 1: Şerit dokusu ve Şerit üzerindeki Şerit gölgelemesi. 2: Aşağıdaki katmana klipsleyin. 3: Tüm gölgeleme geçişi için katman opaklığı."}
---

## 1. Kırpılmış gölgeleme ekleyin

**Ribbon**'yu seçin, doğrudan üstüne yeni bir katman ekleyin ve **Ribbon shading** olarak adlandırın. Menüsünü açın ve **Layer Settings → Clip to layer below**'yu seçin. Şimdi şeridin kıvrımlarındaki gölgeleri **Watercolor Wash** ile boyayın ve **Paintbrush** ile birkaç adaçayı vurgusu ekleyin. Yalnızca şeridin içindeki kısım göründüğü için vuruşlarınız şeridin kenarını geçebilir.

Gölgelendirme katmanının karışım modunu şimdilik **Normal**'da bırakın. Temel renk, Şerit katmanında güvenli bir şekilde kalır, böylece gölgelemenin silinmesi, altındaki rengin hiçbir zaman silinmesine neden olmaz.

## 2. Gücü kontrol edin

Fırça opaklığı boyamak üzere olduğunuz konturları değiştirir. **opacity of the Ribbon shading layer**, halihazırda boyamış olduğunuz tüm gölgelemeleri değiştirir. Her gölge çok güçlü görünüyorsa yeniden boyamak yerine katmanın opaklığını azaltın.

Öne çıkanlar için **Ribbon texture**'yu doğrudan Şerit gölgelendirmenin üzerine ekleyin ve onu da kırpın. Birkaç hafif işaret için küçük bir kalem veya dokulu bir fırça kullanın. Katman sırası artık Şerit dokusu, Şerit gölgelendirme ve ardından Şerit şeklindedir. [Fırça ayarları](/tr/docs/advanced/brush-engine/), opaklığı ve akışı daha ayrıntılı olarak açıklar.

## 3. Bitirin ve dışa aktarın

**Disc** ve **Block**'yu her biri kendi kırpılmış katmanlarıyla aynı şekilde gölgeleyin. Örnekte, diskteki yumuşak gölgelendirme için Airbrush ve küçük krem ​​rengi tarama işaretleri için Kurşun Kalem kullanılmıştır. **Line art**'yu her şeyin üstünde tutun. Bir şeklin dış kenarının düzeltilmesi gerekiyorsa o şeklin maskesini boyayın; yalnızca gölgeleme yanlışsa gölgeleme katmanını değiştirin. [Maskeler ve kırpma](/tr/docs/layers/masks/) ayrıca mürekkebin alfa kilidiyle nasıl yeniden renklendirileceğini de gösterir.

Memnun kaldığınızda kaba katmanları gizleyin, `.capy` dosyanızı kaydedin ve paylaşmak için [bir image](/tr/docs/output/export/) dosyasını dışa aktarın. Dışa aktarılan dosyayı bir kez açarak beklediğiniz gibi görünüp görünmediğini kontrol edin.
