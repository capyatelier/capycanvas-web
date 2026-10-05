---
title: "Mode baur"
description: "Menyetel mode baur dan opasitas lapisan, serta mode-mode di menu baur."
related: ["layers/settings", "layers/panel", "color-management/color-spaces", "color-management/hdr"]
---

Anda dapat menentukan cara lapisan berpadu dengan lapisan di bawahnya.

![Menu baur terbuka di atas panel Lapisan, dengan Normal dicentang.](shot:layers/blend-menu)

## Memilih mode baur

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Mode Baur**, lalu pilih mode.
- Pilih **Mode baur lapisan** di kiri atas kepala panel Lapisan, lalu pilih mode.
- Pilih mode dari **Mode baur** di panel **Properti**.
- Ketik nama mode di [pencarian perintah](/id/docs/start/command-search/).

Mode saat ini diberi tanda centang di menu, dan namanya muncul di tombol kepala
panel. Subjudul baris menampilkan mode jika bukan Normal. Lapisan baru memakai
Normal.

Mode baur lapisan seleksi atau lapisan terkunci tidak dapat diubah.
[Gabungkan ke Bawah](/id/docs/layers/merging/) memerlukan kedua lapisan disetel ke
Normal. Mode baur mencampur warna di ruang pembauran gambar, yang disetel dengan
**Edit > Pembauran** (lihat [Ruang warna, kedalaman bit, dan pembauran](/id/docs/color-management/color-spaces/)).

## Mode di menu baur

Menu baur mencantumkan mode dalam bagian-bagian berikut:

- **Lewat Langsung** (hanya untuk grup, lihat [Lewat Langsung](/id/docs/layers/settings/)), **Normal**
- **Gelapkan**, **Perkalian**, **Bakar Warna**, **Bakar Linear**
- **Terangkan**, **Layar**, **Terangkan Warna**, **Tambah**
- **Hamparan**, **Cahaya Lembut**, **Cahaya Keras**, **Cahaya Tajam**, **Cahaya Linear**, **Cahaya Pin**, **Campuran Keras**
- **Selisih**, **Pengecualian**, **Kurangi**, **Bagi**
- **Rona**, **Saturasi**, **Warna**, **Luminositas**

## Mode di gambar HDR

Di [gambar HDR](/id/docs/color-management/hdr/), menu baur tidak memuat
**Hamparan**, **Cahaya Lembut**, **Cahaya Keras**, **Bakar Warna**, **Terangkan Warna**,
**Cahaya Tajam**, **Campuran Keras**, dan **Pengecualian**. Mode-mode ini hanya
terdefinisi untuk warna di antara hitam dan putih. Lapisan yang sudah memakai salah
satunya tetap memakai mode itu, dan menu tetap mencantumkan mode tersebut untuk
lapisan itu.

## Opasitas

Lakukan salah satu langkah berikut:

- Seret **Opasitas lapisan** di kepala panel Lapisan, atau ketik nilai dari 0 hingga 100.
- Ubah **Opasitas** di panel **Properti**.
- Ketik "Opasitas lapisan" dan sebuah nilai di pencarian perintah.

Subjudul baris menampilkan opasitas jika di bawah 100%. Opasitas lapisan seleksi
atau lapisan terkunci tidak dapat diubah, begitu pula selama Mask Cepat aktif.
