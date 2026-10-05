---
title: "Mask Cepat"
description: "Mengedit seleksi sebagai mask yang dilukis di Mask Cepat."
related: ["selections/working", "selections/selection-layers", "selections/tonal-range", "layers/masks"]
---

Anda dapat mengedit seleksi sebagai mask yang dilukis di Mask Cepat.

## Masuk ke Mask Cepat

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Mask Cepat**.
- Tekan **Q**.
- Pilih **Mask Cepat** di [bilah seleksi](/id/docs/selections/working/).

Seleksi saat ini menjadi mask. Jika tidak ada seleksi, mask dimulai dalam keadaan
kosong. Alat berganti ke kuas saat ini, kecuali jika **Rentang nada** sedang aktif.

Anda tidak dapat masuk ke Mask Cepat selama transformasi masih terbuka.

## Tampilan Mask Cepat

Hamparan, secara bawaan merah dengan opasitas 50%, menandai mask di kanvas. Dalam mode
**Lukis seleksi**, hamparan menutupi area yang terseleksi, dan dalam mode **Mask
skala abu-abu**, hamparan menutupi area di luar seleksi.

Baris bernama **Mask Cepat** muncul di posisi teratas panel Lapisan, dalam keadaan
terpilih. Tombol matanya menampilkan atau menyembunyikan hamparan, sama seperti
**Tampilkan Hamparan Mask** di pencarian perintah. Panel Warna menampilkan warna mask
sebagai pengganti warna gambar.

![Foto terarium di Mask Cepat, dengan hamparan di atas sorotan.](shot:selections/quick-mask-overlay)

## Melukis mask

Lukis dengan pena, pensil, kuas semprot halus, atau penghapus untuk mengubah mask. Kuas lain
tidak melukis di Mask Cepat. **Isi**, **Gradasi**, dan **Lukis seleksi** juga
mengubah mask.

- Dalam mode **Lukis seleksi**, warna apa pun menyeleksi. Penghapus dan warna transparan membatalkan seleksi.
- Dalam mode **Mask skala abu-abu**, nilai abu-abu warna menentukan mask: putih menyeleksi, hitam membatalkan seleksi, dan abu-abu menyeleksi sebagian.

Mask memiliki warna latar depan dan latar belakangnya sendiri, yang disalin dari
warna gambar saat Mask Cepat dimulai. Tekan **D** (**Atur Ulang ke Hitam / Putih**)
untuk latar depan hitam dan latar belakang putih. Untuk menukar warna mask, jalankan
**Tukar Warna Mask** dari pencarian perintah.

Perintah yang mengubah karya, seperti **Bersihkan Piksel Terpilih** dan
**Transformasi**, tidak tersedia di Mask Cepat.

## Bilah Mask Cepat

[Bilah kanvas](/id/docs/selections/working/) di bagian bawah kanvas berketerangan
"Mask Cepat":

- **Balikkan**: **Balikkan seleksi**.
- **Isi** dan **Bersihkan**: **Isi Mask** mengisi seluruh mask, dan **Bersihkan Cakupan Seleksi** mengosongkan mask.
- **Perbaiki**: **Perluas…**, **Perkecil…**, **Perhalus Tepi…**, **Bingkai…**, dan **Haluskan…**. **Transformasi Garis Seleksi** tidak tersedia di sini.
- **Simpan**: **Simpan sebagai Lapisan Seleksi** (lihat [Lapisan seleksi](/id/docs/selections/selection-layers/)).
- **Keluar**: **Kembali ke Karya**.

Jika bilah kanvas disembunyikan, bilah Mask Cepat tidak muncul.

![Bilah Mask Cepat di bagian bawah kanvas.](shot:selections/quick-mask-bar)

## Menu Mask Cepat

Selama Mask Cepat aktif, menu **Lapisan** menjadi menu **Mask Cepat**. Klik kanan
atau tahan baris **Mask Cepat** untuk membuka menu yang sama.

- **Kembali ke Karya**
- **Simpan sebagai Lapisan Seleksi**
- **Ubah**: **Balikkan seleksi**, **Pilih semua piksel**, **Bersihkan Cakupan Seleksi**, **Isi Mask**, **Perluas…**, **Perkecil…**, **Perhalus Tepi…**, **Bingkai…**, dan **Haluskan…**

## Pengaturan hamparan

Panel Properti menampilkan pengaturan mask selama Mask Cepat aktif.

![Panel Properti untuk Mask Cepat, dengan Mode, Warna hamparan, dan Opasitas hamparan.](shot:selections/quick-mask-properties)

### Mode

**Lukis seleksi** (bawaan) atau **Mask skala abu-abu**. Mode ini adalah satu
pengaturan untuk Mask Cepat dan setiap lapisan seleksi, di setiap gambar. Perintah
**Mask skala abu-abu** di pencarian perintah juga mengalihkannya.

### Warna hamparan

Menyetel warna hamparan. Bawaannya merah.

### Opasitas hamparan

Dari 0 hingga 100%. Bawaannya 50%.

## Keluar dari Mask Cepat

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Mask Cepat** atau tekan **Q**.
- Pilih **Lapisan > Kembali ke Karya**.
- Pilih **Keluar** di bilah Mask Cepat.
- Tekan **Escape**.
- Pilih tombol muat di samping gambar mini pada baris **Mask Cepat**.

Mask menjadi seleksi saat ini. **Batalkan seleksi piksel** (**Ctrl+D**) juga keluar
dari Mask Cepat, dan membuang seleksi.
