---
title: "Maskeler ve kırpma"
description: "Katmanın parçalarını silmeden gizleyin ve şeklin içinde gölgelendirmeyi sürdürün."
purpose: "Maske, herhangi bir boyayı silmeden katmanın bir kısmını gizler; böylece kenarın nerede olması gerektiği konusunda fikrinizi her zaman değiştirebilirsiniz. Kırpma, bir katmanı altındaki katmanın şeklinin içinde tutar; bu, hiçbir zaman çizgilerin dışına taşmayan gölgeleme eklemenin en kolay yoludur."
techniques: ["Seçimden bir maske yapın.", "Boyayı göstermek veya gizlemek için maske üzerinde Paint.", "Aşağıdaki katmana gölgelemeyi klipsleyin."]
figure: "1: Ribbon'un maske küçük resmi. 2: Şerit üzerinde gölgeleme kırpıldı. 3: Aşağıdaki katmana klipsleyin ve Alfa kilit kontrollerini kullanın."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: Ribbon'un maske küçük resmi. 2: Şerit üzerinde gölgeleme kırpıldı. 3: Aşağıdaki katmana klipsleyin ve Alfa kilit kontrollerini kullanın."}
---

## Seçimden maske oluşturma

Öncelikle görünür kalmasını istediğiniz alanı [seçin](/tr/docs/tools/selections/). Ardından katmanın menüsünü açın ve **Mask → Mask: reveal selection** seçeneğini seçin. Seçimin dışındaki her şey gizlenir ancak hiçbir şey silinmez. Seçilen alanı gizlemek için **Mask: hide selection** seçeneğini kullanabilirsiniz. Sonraki fırça darbelerinizin bu alanla sınırlı kalmaması için ardından seçimi kaldırın.

Bir maske yalnızca gerçekte katman üzerinde bulunan boyayı gösterebilir. Şekli daha sonra genişletmek isteyebileceğinizi düşünüyorsanız, öğreticinin [maskeleme aşaması](/tr/docs/illustration/mask/)'nun yaptığı gibi, maskelemeden önce tüm katmanı renkle doldurun.

## Maskede Paint

Boya yerine maskeyi düzenlemek için katmanın yanındaki maske küçük resmine tıklayın. Artık herhangi bir fırça, boyadığınız her yerde katmanın daha fazlasını ortaya çıkarır ve **Eraser** onu yeniden gizler. Maskede boyadığınız rengin bir önemi yoktur. İşiniz bittiğinde normal şekilde boyamaya geri dönmek için boyama küçük resmine tıklayın.

Maskenin menüsü maskeyi bir süreliğine kapatabilir, ters çevirebilir veya silebilir. Bunu kapatmak, sonucu alttaki boyayla karşılaştırmanın kullanışlı bir yoludur.

## Gölgelendirmeyi bir şekle klipsleyin

Doğrudan temel katmanın üzerine yeni bir katman ekleyin, menüsünü açın ve **Layer Settings → Clip to layer below**'yu seçin. Kırpılan katmanın üzerine boyadığınız her şey artık yalnızca taban katmanının boyasının olduğu yeri gösterir, böylece kenarları aşmadan serbestçe gölgeleyebilirsiniz. Biri gölgeler için, diğeri açıktonlar için olmak üzere, aynı tabanın üzerine birkaç kırpılmış katmanı istifleyebilirsiniz.

Çizgi sanatı gibi zaten var olan konturları yeniden renklendirmek istediğinizde **Alpha lock** daha basit bir alternatiftir. Yeni boyayı aynı katmandaki mevcut vuruşların içinde tutar. Öğreticinin [oluşturma aşaması](/tr/docs/illustration/render/) her ikisini de kullanır.
