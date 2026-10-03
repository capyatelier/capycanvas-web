---
title: "Hareket etmek ve dönüşmek"
description: "Çiziminizin bir katmanını veya bir bölümünü taşıyın, yeniden boyutlandırın veya döndürün."
purpose: "Bazen çizimin bir kısmı neredeyse doğru ama biraz fazla büyük, çok alçak veya yanlış açıda olabilir. Operasyon aracı, yeniden çizmeye gerek kalmadan onu taşımanıza, ölçeklendirmenize ve döndürmenize olanak tanır ve bunu yapmadan önce sonucu kontrol edebilirsiniz."
techniques: ["Neyin taşınacağını seçin.", "Tutamaçları kullanarak hareket ettirin, ölçeklendirin ve döndürün.", "Değişikliği uygulayın veya iptal edin."]
figure: "1: Araçtaki kontrolleri dönüştürün. 2: Tuval üzerindeki dönüşümün önizlemesi. 3: Düzenlenmekte olan katman."
related: ["tools/selections", "workspace", "illustration/draft"]
image: {"light": "/assets/guides/tools-transforms-light.webp", "dark": "/assets/guides/tools-transforms-dark.webp", "alt": "1: Araçtaki kontrolleri dönüştürün. 2: Tuval üzerindeki dönüşümün önizlemesi. 3: Düzenlenmekte olan katman."}
---

## Neyin taşınacağını seçin

Katmanlar panelinde değiştirmek istediğiniz katmanı seçin. Katmanın yalnızca bir kısmının taşınması gerekiyorsa, [öncelikle o kısmı seçin](/tr/docs/tools/selections/). Seçim yapılmazsa tüm katman hareket eder.

Araç çubuğunda **Operation** aracını seçin. **Move** modu, siz sürükledikçe içeriği hareket ettirir ve **Scale / rotate**, boyutunu ve açısını değiştirmek için tutamaçlar ekler. Sketch'da başlık çubuğundaki **Scale / rotate** düğmesi aynı şeyi başlatır.

## Taşı, ölçeklendir ve döndür

İçeriği taşımak için kutunun içine sürükleyin. Kutuyu büyütmek veya küçültmek için köşelerindeki ve kenarlarındaki tutamaçları sürükleyin ve döndürmek için tutamacı kutunun dışına sürükleyin. Çizimin oranlarını korumak için yeniden boyutlandırırken veya çizimi 15°'lik düzgün adımlarla döndürmek için döndürürken **Shift**'yu basılı tutun. Kesin değerlere ihtiyacınız varsa bunları Araç panelindeki konum, boyut ve açı alanlarına yazın.

Tutamaçlar görünürken hiçbir şey nihai değildir, bu yüzden acele etmeyin. İhtiyacınız olan tüm değişiklikleri tek seferde yapmak en iyisidir çünkü aynı boyayı tekrar tekrar yeniden boyutlandırmak kenarlarını yavaş yavaş yumuşatabilir. Emin değilseniz karşılaştırabilmeniz için önce katmanı çoğaltın.

## Uygula veya iptal et

Değişikliği korumak için **Apply transform**'yu veya her şeyi olduğu gibi geri koymak için **Cancel transform**'yu seçin. Katmanın bir bölümünü seçtiyseniz sonraki vuruşlarınızın o alanla sınırlı olmaması için daha sonra **Select → Deselect pixels**'yu seçin.

Aynı tutamaçlar, [bir image](/tr/docs/filters/image-editing/)'yu bir çizime içe aktardığınızda görünür, böylece **Apply**'yu seçmeden önce onu yerleştirebilir ve boyutlandırabilirsiniz. Resim yerine görünümü döndürmek için Gezgin'deki [Çalışma Alanları ve tuval](/tr/docs/workspace/)'de açıklanan döndürme düğmelerini kullanın.
