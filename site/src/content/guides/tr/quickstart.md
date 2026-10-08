---
title: "Hızlı başlangıç"
description: "{appName}'ı açma, ilk boş çizimde çizme, çizimi .capy dosyası olarak kaydetme ve PNG dışa aktarma."
related: ["start/workspaces", "files/open-save", "files/export", "input/keyboard"]
---

## {appName}'ı açma

Aşağıdakilerden birini yapın:

- Web düzenleyicisini [editor.capycanvas.art](https://editor.capycanvas.art/) adresinde açın.
- Masaüstü uygulamasını, iPad veya Android betasını ya da web düzenleyicisini uygulama olarak yükleme adımlarını [İndir](/tr/download/) sayfasından edinin.

Web düzenleyicisi şu tarayıcılarda çalışır:

| Sistem | Tarayıcılar |
| --- | --- |
| Windows | Chrome, Edge, Firefox 141 veya üstü |
| macOS | Chrome, Edge, Safari 26 veya üstü, Firefox 147 veya üstü (Apple silicon) |
| Linux (Wayland) | Chrome, Edge |
| iPadOS 26 veya üstü | Safari |
| Android 12 veya üstü | Chrome |

İlk ziyaretten sonra web düzenleyicisi internet bağlantısı olmadan da açılır.

## İlk çizim

![Yeni bir çizimin Katmanlar paneli: Kâğıt'ın üstünde Geçerli mürekkep.](shot:files/new-layers)

{appName} ilk açıldığında boş bir çizimle [Boya](/tr/docs/start/workspaces/)
çalışma alanını gösterir ve başlık çubuğunda “Adsız · 2048 × 1536” yazar. Beyaz
bir dolgu katmanı olan **Kâğıt** katmanının üstündeki boş boya katmanı
**Geçerli mürekkep** seçilidir. **Kalem** aracı, **G kalem** fırçası ve siyaha
yakın bir renkle etkindir.

Sonraki açılışlarda {appName}, en son kullandığınız çalışma alanıyla ve açık
olan çizimlerle açılır.

## Çizme

Tuvalde kalemle veya fareyle sürükleyin. Başka bir araç kullanmak için o aracı
pencerenin sol kenarındaki Araçlar çubuğunda seçin. Eskiz'de başlık
çubuğundaki **Fırça** düğmesini seçin.

> **Not:** Parmaklar hiçbir zaman çizmez. Tuvaldeki iki parmak görünümü kaydırır, yakınlaştırır ve döndürür.

Bir fırça darbesini geri almak için **Düzenle > Geri al** komutunu seçin,
**Ctrl+Z** tuşlarına basın veya tuvale iki parmakla dokunun (bkz.
[Geri alma ve yineleme](/tr/docs/start/undo/)).

## macOS ve iPad'de tuşlar

Bu kılavuz tuşları Windows ve Linux'taki gibi yazar. macOS ve iPad'de, kılavuzda
**Ctrl** yazan yerde **Command** (⌘) tuşuna basın. **Ctrl** tuşu web
düzenleyicisinde ve macOS uygulamasında da çalışır.

Web düzenleyicisi her kısayolu **Ctrl** ile gösterir. Tarayıcı **F5**, **F11**,
**F12** tuşlarını ve **W**, **T**, **N**, **R**, **L**, **Q** veya **P** ile
birlikte **Ctrl** ya da **Ctrl+Shift** kombinasyonlarını kendine ayırır. Bu
tuşlardan birini kullanan bir komutun web düzenleyicisinde kısayolu yoktur. Böyle
bir komutu menüden veya [komut aramadan](/tr/docs/start/command-search/) seçin.

## Başka bir çizim başlatma

**Dosya > Yeni…** komutunu seçin ve [Yeni çizim](/tr/docs/files/new/) iletişim
kutusunda **Oluştur** düğmesini seçin. Yeni çizim, ilk çizimin yanında kendi
sekmesinde açılır.

## Çizimi kaydetme

![Yeni…, Aç…, Kaydet, Farklı kaydet… ve Dışa aktar… öğelerini içeren Dosya menüsü.](shot:files/file-menu)

Çizimi tüm katmanlarıyla kaydetmek için:

1. **Dosya > Kaydet** komutunu seçin veya **Ctrl+S** tuşlarına basın.
2. Bir klasör ve ad seçin. Önerilen ad “Adsız.capy” olur.

Ardından başlık çubuğunda dosya adı görünür. Firefox ve Safari'de çizim, ancak
**Dosyayı indir** iletişim kutusunda önce **İndir**, sonra **Dosya kaydedildi**
düğmesini seçtiğinizde kaydedilmiş sayılır.

## PNG dışa aktarma

![Hedef ayarı Web / paylaşım olan Görüntüyü dışa aktar iletişim kutusu.](shot:files/export-dialog)

Çizimin düzleştirilmiş bir PNG kopyasını dışa aktarmak için:

1. **Dosya > Dışa aktar…** komutunu seçin veya **Ctrl+Shift+E** tuşlarına basın.
2. **Hedef** ayarını **Web / paylaşım** olarak bırakın ve **Dosya seç…** düğmesini seçin.
3. Bir klasör ve ad seçin. Önerilen ad “Adsız.png” olur.

**Web / paylaşım**, çizimin tam boyutunda 8 bit sRGB bir PNG yazar. Dışa aktarma
çizimi değiştirmez ve kaydetmez.
