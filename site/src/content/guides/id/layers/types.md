---
title: "Jenis lapisan"
description: "Jenis-jenis lapisan dalam gambar dan aturan untuk masing-masing."
related: ["layers/panel", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Panel Lapisan dengan lapisan seleksi, grup Lewat Langsung, filter Kurva, lapisan Isian Gradasi, lapisan Warna Solid, lapisan lukis Tinta saat ini, dan Kertas.](shot:layers/types-rows)

## Lapisan lukis

Lapisan lukis menyimpan piksel hasil lukisan. Kuas, **Isi**, **Gradasi**, dan
**Bentuk** hanya menambahkan piksel ke lapisan lukis.

Untuk menambahkan lapisan lukis, pilih **Lapisan > Baru > Lapisan baru**, atau pilih
**Lapisan baru** di bagian bawah panel Lapisan.

Gambar baru dimulai dengan lapisan lukis kosong, **Tinta saat ini**, di atas
**Kertas**. Hanya lapisan lukis yang memiliki **Kunci alpha**, **Mode warna**,
**Bersihkan Seluruh Lapisan**, dan **Terapkan mask ke lapisan**.

## Grup

Grup menyimpan lapisan dalam sebuah folder yang dapat Anda ciutkan menjadi satu baris.

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Baru > Grup baru**.
- Pilih **Grup baru** di bagian bawah panel Lapisan.
- Pilih beberapa baris, lalu pilih **Lapisan > Atur > Kelompokkan lapisan terpilih**.

Pilih gambar mini folder untuk membuka atau menutup grup. Lencana pada folder
menandai grup yang disetel ke [Lewat Langsung](/id/docs/layers/settings/).

Grup menggabungkan lapisan-lapisannya terlebih dahulu, lalu membaurkan hasilnya
dengan lapisan di bawahnya, kecuali jika grup disetel ke Lewat Langsung. Grup tidak
memiliki piksel sendiri.

## Lapisan isian

Lapisan isian menutupi kanvas dengan satu warna (**Warna Solid**) atau gradasi
(**Isian Gradasi**).

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Baru > Isian Warna Solid** atau **Isian Gradasi**.
- Pilih **Filter > Isi > Warna Solid** atau **Isian Gradasi**.
- Pilih **Warna Solid** atau **Isian Gradasi** di kategori **Isi** pada panel **Filter**.

Lapisan isian ditempatkan di atas lapisan aktif dan lapisan yang diklip ke lapisan
aktif. Warna Solid baru memakai warna cat saat ini, dan Isian Gradasi baru berjalan
dari hitam ke putih. Jika ada seleksi aktif, seleksi itu menjadi mask lapisan isian.

Untuk mengganti warna lapisan Warna Solid, pilih gambar mininya untuk membuka
[Edit Warna](/id/docs/color/edit-color/), atau ubah **Warna** di panel **Properti**.
[Gradasi](/id/docs/drawing/gradient/) menjelaskan pengaturan Isian Gradasi.

Untuk melukis di lapisan isian, tambahkan mask. Kuas melukis di mask, bukan di
isian. Lapisan isian dapat diklip, tetapi lapisan lain tidak dapat diklip ke lapisan
isian dan filter tidak dapat dilampirkan ke lapisan isian.

## Lapisan filter

Lapisan filter menyimpan filter, bukan piksel. Barisnya menampilkan ikon dan nama
filter. Lihat [Menambahkan filter](/id/docs/filters/adding/) dan
[Cara filter diterapkan](/id/docs/filters/how-filters-apply/).

Saat lapisan filter terpilih, kuas melukis di lapisan di bawahnya, atau di lapisan
tempat filter itu dilampirkan. Jika filter memiliki mask, kuas melukis di mask.

## Lapisan seleksi

Lapisan seleksi menyimpan seleksi. Untuk menambahkannya, pilih **Lapisan Seleksi
Baru** di bagian bawah panel Lapisan.

Tombol di sebelah kanan gambar mini memuat seleksi yang tersimpan. Ikon mata
menyembunyikan atau menampilkan hamparan seleksi di kanvas. Lapisan seleksi
tidak memiliki opasitas, mode baur, mask, kliping, atau pengaturan acuan, dan tidak
dapat digabungkan. [Lapisan seleksi](/id/docs/selections/selection-layers/) membahas
cara mengedit seleksi yang tersimpan.

## Kertas

**Kertas** adalah lapisan isian **Warna Solid** putih di dasar gambar baru. Anda dapat
mengganti warna, menyembunyikan, atau menghapus **Kertas** seperti lapisan isian
lainnya.

**Kertas** tersembunyi sejak awal jika **Latar belakang** disetel ke **Transparan**
di dialog [Gambar baru](/id/docs/files/new/), dan pada foto yang Anda buka.

## Lapisan foto

Lapisan foto adalah lapisan lukis yang menyimpan foto asli dalam ukuran, kedalaman
bit, dan profil warnanya sendiri. Hasil melukis dan menghapus disimpan di atas foto.

Untuk menambahkan lapisan foto, lakukan salah satu langkah berikut:

- Pilih **Berkas > Buka…**, lalu pilih foto.
- Pilih **Berkas > Impor Gambar sebagai Lapisan…**.
- Jatuhkan berkas gambar ke kanvas.

Selama foto asli masih tersimpan, **Lapisan > Pengaturan Lapisan** memuat perintah
berikut:

- **Kembalikan ke Foto Asli** membuang hasil melukis dan menghapus, serta mask yang sudah diterapkan. Posisi, mask, opasitas, dan mode baur tetap, dan **Mode warna** kembali ke **Warna penuh**.
- **Rasterisasi Sumber…** mengonversi foto asli ke ruang warna dan kedalaman bit gambar, dalam ukuran penuh. Setelah itu, **Kembalikan ke Foto Asli** tidak tersedia.
- **Perbaiki Profil Sumber…** mengubah profil yang dipakai untuk membaca foto asli: **sRGB**, **Display P3**, **Adobe RGB (1998)**, atau **ProPhoto RGB**. Jika lapisan sudah dilukis, **Tambah Sumber Terkoreksi** menambahkan foto yang sudah dikoreksi sebagai lapisan baru, bukan mengubah profil lapisan itu.

**Kembalikan ke Foto Asli** dan **Rasterisasi Sumber…** juga ada di menu **Edit**.
**Bersihkan Seluruh Lapisan** juga membuang foto asli.
