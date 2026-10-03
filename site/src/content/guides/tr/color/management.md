---
title: "Renk uzayları, HDR ve prova"
description: "Bir çizimin rengi nasıl depoladığını seçin, HDR'da çalışın ve bir görüntünün nasıl yazdırılacağını önizleyin."
purpose: "Çoğu çizim varsayılan ayarlarla harika görünür. Fotoğrafları düzenlediğinizde, çalışmanızı baskıya hazırladığınızda veya modern bir ekranın canlı renklerini istediğinizde, çizimin ne kadar renk tutabileceğini seçebilir ve başka bir yerde nasıl görüneceğini önizleyebilirsiniz."
techniques: ["Yeni bir çizim için bir renk alanı ve bit derinliği seçin.", "Paint'yu seçin ve HDR'da düzenleyin.", "Basılı renkleri Prova ile önizleyin."]
figure: "1: Çizim ön ayarları. 2: Renk alanı ve bit derinliği. 3: Yeni çizimi açan Oluştur."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: Çizim ön ayarları. 2: Renk alanı ve bit derinliği. 3: Yeni çizimi açan Oluştur."}
---

## Yeni çizimin rengini seçin

**File → New…**'yu seçtiğinizde **Preset** menüsü birkaç başlangıç ​​noktası sunar. **Standard drawing** çoğu sanat eserine ve çevrimiçi olarak paylaşacağınız her şeye uygundur. **Wide color**, birçok modern ekranın gösterdiği daha canlı renkleri tutabilir ve **Photo editing**, güçlü ayarlamaların yumuşak geçişlerde şeritlenmeye neden olmaması için ekstra hassasiyeti korur.

**Color space**, çizimin tutabileceği renk aralığını ayarlar ve **Bit depth**, her rengin ne kadar hassas şekilde saklanacağını ayarlar. Daha sonra fikrinizi değiştirirseniz **Edit → Convert Color Space…** veya **Edit → Change Bit Depth…** kullanın. Fotoğraflar, çekildikleri renkleri korur; dolayısıyla, bir fotoğrafı açtığınızda ayarlamanız gereken hiçbir şey yoktur.

## HDR'da çalışın

HDR çizimi yapmak için bit derinliği olarak **16-bit float HDR** veya **32-bit float HDR**'yu seçin. HDR çizimleri, güneş ışığı ve parlayan ışıklar gibi beyazdan daha parlak renkleri tutabilir. Bir HDR çizimini düzenlediğinizde renk tekerleğinin altında bir yoğunluk yayı görünür, böylece beyazdan daha parlak renklerle de boyama yapabilirsiniz.

Tarayıcınız ve ekranınız desteklediğinde HDR tam parlaklıkta gösterilir. Diğer ekranlarda görüntünün standart bir sürümünü görürsünüz. [Görüntüyü dışa aktarma](/tr/docs/output/export/) bölümünde açıklandığı gibi, HDR çizimini HDR JPEG veya AVIF olarak kaydedebilirsiniz. Bu dosyalar standart ekranlarda da doğru görünür.

## Kanıtlı Önizleme

Çalışmanızı yazıcıya göndermeden önce **View → Proof**, renklerin kağıt üzerinde nasıl görüneceğini gösterir. **Proof** panelinde **Print**'yu seçin, ardından yazıcının veya yazdırma hizmetinin renk profilini seçin veya ekleyin. **Gamut warning**, yazıcının üretemediği renkleri işaretler, böylece bunları yazdırmadan önce ayarlayabilirsiniz.

HDR çizimleri için aynı paneldeki **SDR** seçeneği, görüntünün sıradan bir ekranda nasıl görüneceğini gösterir ve o sürümün parlaklık ve kontrastına ince ayar yapmanıza olanak tanır.
