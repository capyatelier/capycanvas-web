---
title: "Geri alma ve yineleme"
description: "Çizimdeki değişiklikleri geri alma ve yineleme ile düzen değişikliklerinin ayrı geçmişi."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

Çizimdeki değişiklikleri adım adım geri alabilir, geri aldığınız adımları
yineleyebilirsiniz. Her açık çizimin kendi geçmişi vardır.

![Komutlar çubuğundaki Geri al ve Yinele düğmeleri.](shot:start/undo-commands)

## Geri al

Aşağıdakilerden birini yapın:

- **Düzenle > Geri al** komutunu seçin.
- **Ctrl+Z** tuşlarına basın.
- Komutlar çubuğunda **Geri al** düğmesini seçin. Eskiz'de **Geri al**, ekranın sol kenarındaki çubuktadır.
- Tuvale iki parmakla dokunun.

## Yinele

Aşağıdakilerden birini yapın:

- **Düzenle > Yinele** komutunu seçin.
- **Ctrl+Shift+Z** veya **Ctrl+Y** tuşlarına basın.
- Komutlar çubuğunda ya da Eskiz'de sol kenardaki çubukta **Yinele** düğmesini seçin.
- Tuvale üç parmakla dokunun.

Geri aldıktan sonra yapılan yeni bir değişiklik, yinelenebilecek adımları temizler.

## Adım sayılan değişiklikler

Her fırça darbesi, dolgu, filtre değişikliği, dönüştürme, kırpma, tuval boyutu
değişikliği ve seçim değişikliği bir adımdır. Bir katmanda yapılan her değişiklik
de bir adımdır. Görünüm, araç, fırça, renk ve düzen değişiklikleri adım sayılmaz.

Bir görüntü yerleştirirken, bir katmanı dönüştürürken veya Kırp aracını
kullanırken Geri al, bir adım geri gitmek yerine o işlemi iptal eder.

## Geçmiş uzunluğu

Her çizim en fazla 256 adım saklar. Önce en eski adımlar silinir.

## Kaydetme ve yeniden açma

Kaydetmek geçmişi temizlemez. `.capy` dosyasından açtığınız bir çizim boş bir
geçmişle başlar. Capy Canvas'ı yeniden başlattığınızda yeniden açılan çizimler
ise geri alma adımlarını korur.

## Düzen değişiklikleri

Panellerde, araç çubuklarında, başlık çubuğunda ve çalışma alanlarında yapılan
değişikliklerin ayrı bir geçmişi vardır. **Düzenle > Geri al** hiçbir zaman bir
düzen değişikliğini geri almaz.

Aşağıdakilerden birini yapın:

- **Pencere > Düzen değişikliğini geri al** veya **Pencere > Düzen değişikliğini yinele** komutunu seçin.
- **Ctrl+Alt+Z** veya **Ctrl+Alt+Shift+Z** tuşlarına basın.

Her çalışma alanı kendi düzen geçmişini tutar ve bu geçmiş yeniden başlatmadan
sonra da korunur. **Pencere > Çalışma alanları > Düzen geçmişi…**, geçerli
çalışma alanının önceki düzenlerini listeler.
