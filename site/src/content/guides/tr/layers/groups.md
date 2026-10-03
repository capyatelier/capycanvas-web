---
title: "Gruplar ve karıştırma"
description: "İlgili katmanları bir arada tutun ve renklerinin birleşme şeklini değiştirin."
purpose: "Çizim büyüdükçe gruplar ilgili katmanları bir arada tutar, böylece listenin okunması kolay kalır. Karışım modları, bir katmanın renklerinin aşağıdaki katmanlarla nasıl karışacağını değiştirir; bu, gölgeler, açık tonlar ve renk yıkamalar için kullanışlıdır."
techniques: ["İlgili katmanları bir gruba yerleştirin.", "Gölgelendirme katmanında karışım modunu deneyin.", "Uzun bir katman listesini düzenli tutun."]
figure: "1: Katman yığını. 2: Karışım modu. 3: Yeni grup düğmesi."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: Katman yığını. 2: Karışım modu. 3: Yeni grup düğmesi."}
---

## Grupla ilgili katmanlar

Katmanlar panelinin alt kısmında **New group**'yu seçin, ardından katmanları buraya sürükleyin. Örneğin, bir karakterin renklerini, gölgelemesini ve çizimlerini bir grupta, arka planını ise başka bir grupta tutabilirsiniz. İçeriğini görmeniz gerekmediğinde bir grubu katlamak için yanındaki oku seçin.

Bir grubu gizlemek, içindeki her şeyi gizler. Bir katman gözü açık olmasına rağmen kaybolmuş gibi görünüyorsa, içinde bulunduğu grubun gizli olup olmadığını kontrol edin. Kırpılan katmanları bir gruba taşıdığınızda doğrudan temel katmanlarının üzerinde tutun, böylece gruba bağlı kalırlar.

## Karışım modunu deneyin

Bir gölgelendirme katmanı seçin ve listenin üzerindeki karışım modu menüsünü açın. **Multiply** aşağıdaki renkleri koyulaştırır, bu da gölgeler için iyi olmasını sağlar. **Screen** onları aydınlatır; bu da parlaklıklara ve vurgulara uygundur. **Normal** basitçe aşağıdakinin üzerini boyar ve diğer modların her biri renkleri kendi yöntemleriyle karıştırır.

Sonucu karşılaştırmak için katmanı gizleyin ve gösterin. Efekt çok güçlüyse, katmanı yeniden boyamak yerine opaklığını azaltın.

## Listeyi düzenli tutun

Gruplar uzun bir listeyi düzenli tutarken her katman düzenlenebilir kalır. Üzerinde çalışmadığınız grupları daraltabilirsiniz. Başka bir uygulama için tek bir düz görüntüye ihtiyacınız varsa, [bir kopyasını dışa aktarın](/tr/docs/output/export/) ve `.capy` dosyasını tüm katmanlarıyla birlikte saklayın.

Parlaklık veya doygunluk gibi ayarlamaya devam etmek istediğiniz renk değişiklikleri için, değişikliği bir katmana boyamak yerine [Filtreler ve ayarlamalar](/tr/docs/filters/overview/)'dan bir filtre katmanı kullanın.
