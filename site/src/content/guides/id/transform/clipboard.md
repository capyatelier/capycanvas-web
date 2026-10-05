---
title: "Salin dan tempel"
description: "Menyalin piksel dan menempelkannya sebagai lapisan baru, di dalam Capy Canvas maupun antaraplikasi."
related: ["selections/working", "transform/move-transform", "layers/working", "files/open-save"]
---

Anda dapat menyalin piksel dari lapisan atau dari gambar yang terlihat, lalu
menempelkannya sebagai lapisan baru. Perintahnya ada di menu **Edit** dan di
pencarian perintah.

![Perintah papan klip di menu Edit.](shot:transform/clipboard-edit-menu)

| Perintah | Tombol |
| --- | --- |
| **Potong** | **Ctrl+X** |
| **Salin** | **Ctrl+C** |
| **Salin Gabungan** | **Ctrl+Shift+C** |
| **Tempel** | **Ctrl+V** |
| **Tempel di Tempat** | **Ctrl+Shift+V** |
| **Tempel ke Dalam** | |

**Salin** di [bilah seleksi](/id/docs/selections/working/) memuat **Salin**,
**Salin Gabungan**, dan **Potong**.

## Salin

Menyalin piksel milik lapisan aktif sendiri di dalam seleksi, tanpa opasitas, mask,
dan filter terlampir lapisan itu. Jika tidak ada seleksi, perintah ini menyalin
seluruh lapisan di dalam kanvas.

## Potong

Menyalin seperti **Salin**, lalu menghapus piksel terseleksi dari lapisan. Anda tidak
dapat memotong dari lapisan dengan **Kunci alpha** aktif.

## Salin Gabungan

Menyalin gambar yang terlihat di dalam seleksi, sebagaimana tampilannya dalam
ekspor.

## Yang tidak dapat disalin

Grup, lapisan filter, dan lapisan seleksi tidak memiliki piksel sendiri. Untuk
menyalin dari grup, pilih lapisan di dalamnya. Karya tidak dapat disalin di Mask
Cepat, dan **Salin** serta **Potong** tidak tersedia selama Anda mengedit mask.

Penyalinan berukuran besar menampilkan catatan kemajuan dengan **Batal**.

## Tempel

Menambahkan isi papan klip sebagai lapisan aktif baru.

- Salinan dari Capy Canvas diletakkan di tempat asal salinannya jika tempat itu terlihat, atau di tengah tampilan jika tidak.
- Gambar dari aplikasi lain terbuka di kotak transformasi. **Terapkan** menempatkan gambar dan **Batal** membuang tempelan (lihat [Pemindahan dan transformasi](/id/docs/transform/move-transform/)).

## Tempel di Tempat

Menambahkan isi papan klip sebagai lapisan baru di tempat asal salinannya, tanpa
kotak transformasi. Gambar dari aplikasi lain diletakkan di tengah tampilan dalam
ukuran penuh.

## Tempel ke Dalam

Bekerja seperti **Tempel di Tempat**, dan memberi lapisan baru sebuah
[mask](/id/docs/layers/masks/) yang hanya menampilkan seleksi. Setelah itu, seleksi
dibuang. **Tempel ke Dalam** memerlukan seleksi.

## Menempel antaraplikasi

Aplikasi lain menerima salinan dari Capy Canvas sebagai gambar PNG sRGB 8-bit.
Menempelkan kembali ke Capy Canvas memakai salinan dengan kedalaman bit penuhnya
selama salinan itu masih ada di papan klip.

Salinan yang ditempelkan ke gambar dengan pengaturan warna lain menjadi
[lapisan foto](/id/docs/layers/types/), yang dikonversi dari profil warnanya sendiri.

Selama Anda mengetik di kolom teks, tombol papan klip memotong, menyalin, dan
menempelkan teks.

Di editor web, gambar yang ditempelkan dapat berukuran hingga 512 MiB. Di peramban
yang tidak dapat menempelkan gambar, pilih **Berkas > Impor Gambar sebagai
Lapisan…** sebagai gantinya.
