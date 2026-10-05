---
title: "Ukuran dan rotasi gambar"
description: "Perintah Edit > Gambar yang mengubah ukuran dan orientasi seluruh gambar."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Anda dapat mengubah ukuran, memutar, dan membalik seluruh gambar dari
**Edit > Gambar**. Gambar tetap di tempatnya di layar.

Perintah ini tidak tersedia selama pemangkasan atau transformasi masih terbuka, dan
selama Anda mengedit mask, Mask Cepat, atau lapisan seleksi. Untuk **Pangkas** dan
**Pangkas Kanvas ke Seleksi**, lihat [Pangkas](/id/docs/transform/crop/).

![Submenu Gambar di menu Edit.](shot:transform/image-menu)

## Ukuran Gambar…

Anda dapat menskalakan seluruh gambar, atau hanya mengubah resolusinya.

Pilih **Edit > Gambar > Ukuran Gambar…**. Lapisan lukis dan mask disampel ulang,
sedangkan foto yang ditempatkan mempertahankan piksel aslinya. Seleksi, garis bantu,
dan pengaturan filter yang diukur dalam piksel ikut berskala bersama gambar.

![Dialog Ukuran Gambar.](shot:transform/image-size-dialog)

### Lebar dan Tinggi

Setel ukuran baru dalam **Piksel** atau **Persen**. Mengganti satuan akan
mengonversi nilainya.

### Pertahankan proporsi

Menautkan **Lebar** dan **Tinggi**. Aktif secara bawaan.

### Resolusi

Menyetel resolusi dalam piksel per inci. Jika Anda hanya mengubah resolusi, piksel
tetap seperti semula. Kolom ini awalnya berisi resolusi gambar, atau 72 ppi jika
gambar tidak memiliki resolusi.

### Ambil sampel ulang

**Otomatis** (bawaan) memakai Lanczos saat gambar diperkecil dan Bikubik saat gambar
diperbesar. Anda juga dapat memilih **Bikubik**, **Lanczos**, **Bilinear**, atau
**Tetangga terdekat**.

## Ukuran Kanvas…

Anda dapat menambah atau mengurangi kanvas di sekeliling gambar tanpa pengambilan
sampel ulang.

Pilih **Edit > Gambar > Ukuran Kanvas…**. Piksel di luar kanvas yang lebih kecil tetap
ada di lapisannya, dalam keadaan tersembunyi, dan kanvas yang lebih besar
menampilkannya kembali.

![Dialog Ukuran Kanvas.](shot:transform/canvas-size-dialog)

### Lebar dan Tinggi

Setel ukuran baru dalam **Piksel** atau **Persen**. Mengganti satuan akan
mengonversi nilainya.

### Relatif

Menambahkan nilai yang Anda masukkan ke ukuran saat ini. Nonaktif secara bawaan.

### Jangkar

Memilih sisi atau sudut gambar yang tetap di tempatnya, dari kisi 3 × 3. **Tengah**
adalah bawaannya.

## Memutar dan membalik gambar

Pilih salah satu perintah berikut dari **Edit > Gambar**:

- **Putar Gambar 90° ke Kiri**
- **Putar Gambar 90° ke Kanan**
- **Putar Gambar 180°**
- **Balik Gambar secara Horizontal**
- **Balik Gambar secara Vertikal**

Seluruh gambar berputar atau tercermin beserta seleksi dan garis bantunya. Piksel
tidak disampel ulang. Untuk memutar atau mencerminkan tampilan saja, lihat
[Melihat kanvas](/id/docs/start/canvas/).

## Pangkas Tepi

Pilih **Edit > Gambar > Pangkas Tepi** untuk mengecilkan kanvas ke piksel yang
terlihat. Piksel di luar kanvas baru tetap ada di lapisannya, dalam keadaan
tersembunyi.

## Tampilkan Semua

Pilih **Edit > Gambar > Tampilkan Semua** untuk memperbesar kanvas sampai menampilkan
piksel setiap lapisan, termasuk lapisan tersembunyi dan piksel di luar kanvas.
