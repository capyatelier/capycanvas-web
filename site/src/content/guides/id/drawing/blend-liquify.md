---
title: "Baurkan dan Cairkan"
description: "Alat Baurkan dan Cairkan untuk mengoleskan cat dan memindahkan piksel pada lapisan."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

Anda dapat mengoleskan dan mencampur cat pada lapisan dengan **Baurkan**, dan
memindahkan pikselnya dengan **Cairkan**.

## Baurkan

Lakukan salah satu langkah berikut:

- Tekan **J**.
- Di Lukis, pilih **Baurkan** di bilah alat Alat. Tombol yang sama memuat **Stempel Klon**.
- Di Foto, pilih **Baurkan** di bilah alat Alat.
- Di Sketsa, pilih sebuah pembaur di laci **Pahat**.
- Cari **Baurkan** di pencarian perintah.

Pilih set dan pembaur di **Set Alat**. **Coreng** adalah pembaur bawaan.

| Set | Pembaur |
| --- | --- |
| **Baurkan** | **Coreng**, **Pembaur Lembut**, **Buram**, **Stik pembaur kertas**, **Tisu**, **Pembaur Berbutir**, **Pembaur Penjaga Tekstur**, **Pembaur Rona** |
| **Cat basah** | **Pembaur Alami**, **Pembaur Basah**, **Pencampur Warna**, **Pisau Pembaur**, **Pembaur Bulu Kuas** |
| **Efek** | **Pembaur Lukis**, **Pembaur Sisir**, **Pembaur Tebar**, **Pertajam**, **Marmer**, **Pembaur Kristal**, **Pembaur Dither** |

Pengaturan setiap pembaur ada di
[Pencampuran, rembesan, dan bulu kuas](/id/docs/brushes/wet-media/).

## Cairkan

Lakukan salah satu langkah berikut:

- Tekan **J** saat Baurkan aktif.
- Di Lukis atau Foto, pilih **Cairkan** di bilah alat Alat. Klik kanan atau tahan tombol itu untuk memilih mode.
- Di Sketsa, pilih mode di set **Cairkan** pada laci **Pahat**.
- Cari **Cairkan** di pencarian perintah.

Setiap mode adalah prasetel di **Set Alat**:

| Prasetel | Efek |
| --- | --- |
| **Cairkan: Dorong** | Menyeret piksel sepanjang goresan. |
| **Cairkan: Putar Berlawanan Jarum Jam** | Memutar piksel berlawanan arah jarum jam di sekitar pusat kuas. |
| **Cairkan: Putar Searah Jarum Jam** | Memutar piksel searah jarum jam di sekitar pusat kuas. |
| **Cairkan: Cubit** | Menarik piksel ke arah pusat kuas. |
| **Cairkan: Perbesar** | Mendorong piksel menjauh dari pusat kuas. |
| **Cairkan: Kristal** | Memecah gambar di bawah kuas menjadi sel-sel kecil yang tersebar. |
| **Tepi** | Menarik piksel ke arah garis goresan dari kedua sisi. |
| **Pulihkan** | Mengembalikan deformasi Cairkan di bawah kuas. |

Cairkan tidak memiliki tombol Terapkan. Setiap goresan mengubah lapisan dan menjadi
langkah urungkan tersendiri. Goresan terus mendeformasi piksel yang dimiliki lapisan
sebelum goresan pertama, sampai Anda melukis, mengisi, memfilter, mentransformasi,
atau menempelkan sesuatu ke lapisan itu.

## Sesuaikan Liquify dan Atur ulang Liquify

Anda dapat mengurangi semua yang telah dilakukan Cairkan pada lapisan dengan
**Sesuaikan Liquify**, atau mengembalikan lapisan ke pikselnya sebelum goresan pertama
dengan **Atur ulang Liquify**.

Lakukan salah satu langkah berikut:

- Di panel **Alat**, aktifkan **Sesuaikan Liquify** atau pilih **Atur ulang Liquify**.
- Cari **Sesuaikan Liquify** atau **Atur ulang Liquify** di pencarian perintah.

Saat **Sesuaikan Liquify** aktif, penggeser **Jumlah** muncul di panel **Alat**. Pada
100% deformasi tetap seperti adanya, dan pada 0% deformasi hilang. Melepas penggeser
adalah satu langkah urungkan, begitu pula **Atur ulang Liquify**.

Kedua perintah tidak tersedia, dengan pesan "Terapkan Liquify ke lapisan ini terlebih
dahulu", sampai lapisan memiliki perubahan Cairkan.

## Pengaturan Cairkan

![Panel Alat untuk Cairkan: Kristal dengan Kekuatan, grup Cairkan yang menampilkan Distorsi dan Momentum, serta Sesuaikan Liquify dan Atur ulang Liquify.](shot:drawing/liquify-settings)

**Distorsi** dan **Momentum** ada di grup **Cairkan** pada panel **Alat**.

### Kekuatan

Mengatur sejauh apa setiap tapak kuas memindahkan piksel. Efeknya lebih lemah pada
tekanan pena yang ringan dan di dekat tepi ujung kuas yang lembut.

### Distorsi

Membuat gerakan tidak beraturan. Pada **Cairkan: Kristal**, pengaturan ini menentukan
sejauh apa sel-sel menyebar. **Pulihkan** tidak memiliki **Distorsi**.

### Momentum

Melanjutkan efek sepanjang arah terakhir goresan setelah Anda mengangkat pena.
**Pulihkan** tidak memiliki **Momentum**.

## Laci Pahat di Sketsa

Di Sketsa, pilih **Pahat** di bilah judul untuk memakai alat Baurkan, Cairkan, atau
Retus terakhir, pilih lagi untuk membuka lacinya, dan sekali lagi untuk menutup laci.
Laci menampilkan set, alat dari set yang dipilih, dan pengaturannya. **Pahat** dan
**Kuas** masing-masing mengingat prasetel dan ukuran kuas terakhirnya sendiri.

![Laci Pahat di Sketsa dengan set Baurkan, Cat basah, Efek, Cairkan, dan Retus di kiri, pembaur dari set Baurkan di tengah, dan pengaturan Coreng di kanan.](shot:drawing/sketch-sculpt-drawer)

## Melukis pada mask

Pada mask, Baurkan dan Cairkan melukis cakupan polos tanpa mengoleskan atau memindahkan
piksel. Goresan pertama seperti itu pada setiap mask menampilkan pemberitahuan.
