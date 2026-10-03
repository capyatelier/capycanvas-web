---
title: "Bir görüntüyü dışa aktar"
description: "Paylaşmak veya yazdırmak için çiziminizin PNG, JPEG veya TIFF kopyasını kaydedin."
purpose: "Dışa aktarma, çiziminizdeki sıradan bir görüntüyü çevrimiçi yayınlamaya, birine göndermeye veya yazdırmaya hazır hale getirir. .capy dosyanız tüm katmanlarıyla birlikte olduğu gibi kalır, böylece çizimi istediğiniz zaman değiştirebilir ve yeniden dışa aktarabilirsiniz."
techniques: ["Bir hedef ön ayarı seçin.", "Dosya biçimini ve boyutunu seçin.", "Dışa aktarılan görüntüyü kaydedin."]
figure: "1: Hedef ön ayarları. 2: Format, renk profili ve bit derinliği. 3: Boş alanların nasıl kaydedileceğine karar veren şeffaflık."
related: ["tools/files", "color/management", "filters/image-editing"]
image: {"light": "/assets/guides/output-export-light.webp", "dark": "/assets/guides/output-export-dark.webp", "alt": "1: Hedef ön ayarları. 2: Format, renk profili ve bit derinliği. 3: Boş alanların nasıl kaydedileceğine karar veren şeffaflık."}
---

## Resmin nereye gideceğini seçin

**Export image** iletişim kutusunu açmak için **File → Export…**'yu seçin. Başlamak için en kolay yer, sizin için mantıklı ayarları dolduran **Destination**'dur. **Web / Share**, tüm tarayıcılarda veya uygulamalarda doğru görünen standart bir görüntü oluşturur. **Wide-color image**, modern ekranların gösterebileceği daha canlı renkleri korur ve **Further editing**, başka bir düzenleyicide açılabilmesi için mümkün olduğunca fazla ayrıntıyı korur.

Yalnızca görünür katmanlar dışa aktarılır; bu nedenle, ilk önce son görüntüde olmasını istemediğiniz çizim veya referans katmanlarını gizleyin.

## Ayrıntıları ayarlayın

Daha fazla kontrol istiyorsanız hedefin altındaki ayarları değiştirin. **Format**, PNG, JPEG ve TIFF arasından seçim yapar. PNG, keskin kenarları veya şeffaf alanları olan sanat eserleri için iyi bir seçimdir; JPEG ise fotoğraflar için daha küçük dosyalar oluşturur. Genellikle **Output profile** ve **Bit depth**'yu hedefin belirlediği şekilde bırakabilirsiniz.

**Transparency** çizimin boş alanlarına ne olacağına karar verir. Bunları destekleyen formatlarda şeffaf tutabilir veya beyaz veya siyahla doldurabilirsiniz. **Pixel size**, örneğin bir web sitesi için daha küçük bir kopya oluşturmanıza olanak tanır. Bir ayar kombinasyonunu beğendiğinizde, bunu kendi ön ayarınız olarak kaydedebilirsiniz.

## Dosyayı kaydet

Kaydetmeden önce sonucu görmek istiyorsanız **Preview Output**'yu seçin, ardından görüntü için bir ad ve yer seçmek üzere **Choose File…**'yu seçin. Dışa aktarılan dosyayı bir kez açarak beklediğiniz gibi görünüp görünmediğini kontrol edin.

HDR çizimleri, **Dynamic range** altında daha fazla seçeneğe sahiptir; bunlara HDR JPEG ve HDR ekranlarında parlak görünen ve yine de sıradan ekranlarda düzgün görünen AVIF dosyaları dahildir. [Renk uzayları, HDR ve prova ](/tr/docs/color/management/) bunların ne zaman kullanılacağını açıklıyor.
