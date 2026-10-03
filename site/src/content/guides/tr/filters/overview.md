---
title: "Filtreler ve ayarlamalar"
description: "Düzenlenebilir bir filtre ekleyin ve ayarlarını istediğiniz zaman değiştirin."
purpose: "Filtreler, basit parlaklık ve renk ayarlamalarından bulanıklaştırma ve sanatsal efektlere kadar altlarındaki katmanların görünümünü değiştirir. Her filtre kendi katmanıdır, böylece daha sonra altındaki boyaya dokunmadan ayarlayabilir, gizleyebilir veya kaldırabilirsiniz."
techniques: ["Bir filtre bulun ve ekleyin.", "Özellikler'deki ayarlarını değiştirin.", "Filtreyi çizimin bir kısmıyla sınırlandırın."]
figure: "1: Filtreler paneli. 2: Katmanlar'daki ayarlama katmanı. 3: Düzenlemek için Özellikler sekmesi."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1: Filtreler paneli. 2: Katmanlar'daki ayarlama katmanı. 3: Düzenlemek için Özellikler sekmesi."}
---

## Filtre ekle

Filtrenin üzerinde durması gereken katmanı seçin ve ardından **Filters** panelini açın. Filtreler Ton, Renk, Bulanıklık ve Sanatsal gibi gruplara ayrılmıştır ve **Curves** veya **Gaussian Blur** gibi ada göre bulmak için arama kutusuna yazabilirsiniz. Yeni katman olarak eklemek için bir filtre seçin. Pencerenin üst kısmındaki **Filter** menüsü aynı filtreleri listeler.

Sketch'da başlık çubuğundaki **Filters** düğmesi bunun yerine bir çekmece açar. Soldan bir grup, ardından bir filtre seçin; ayarları sağda görünecektir.

## Ayarları değiştirin

Filtrenin katmanını seçin ve ayarlarını görmek için **Properties**'yu açın. Bazı filtreler kaydırıcıları kullanırken diğerleri bir eğri veya renk kullanır. Her seferinde bir ayarı değiştirin ve ilerledikçe çizimi izleyin. Çalışırken görüntünün tonlarının nasıl dağıldığını görmek isterseniz **View → Histogram…**'yu açın.

Sonucu orijinalle karşılaştırmak için filtre katmanını gizleyin ve gösterin veya tüm efekti daha yumuşak hale getirmek için opaklığını azaltın. Ayarları tekrar değiştirmek için istediğiniz zaman Özellikler'e geri dönebilirsiniz.

## Geçerli olduğu yeri sınırlayın

Bir filtre, katman listesinde altındaki her şeyi etkiler. Bunu çizimin bir kısmından uzak tutmak için, filtre katmanına bir [mask](/tr/docs/layers/masks/) ekleyin veya filtreyi bir grubun içine yerleştirerek yalnızca o gruptaki katmanları etkilemesini sağlayın. Çizgi resmini ve değiştirilmesini istemediğiniz diğer ayrıntıları filtrenin üzerinde tutun.

Birkaç filtre kullandığınızda bunların sırası önemlidir; bu nedenle sonuç beklediğiniz gibi değilse filtreleri yukarı veya aşağı taşımayı deneyin. Fotoğraflı tam bir örnek için bkz. [Fotoğrafı düzenleme](/tr/docs/filters/image-editing/).
