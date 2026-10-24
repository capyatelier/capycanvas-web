---
title: "Gambar baru"
description: "Ukuran lembar, resolusi, kertas, pengaturan warna, dan preset dalam dialog Gambar baru."
related: ["layers/paper", "color-management/color-spaces", "layers/types", "files/open-save"]
---

Pilih **Berkas > Baru…**, tekan **Ctrl+N** jika tersedia, atau pilih **Baru…** di bilah Perintah. Gambar baru terbuka di tab tersendiri.

![Dialog Gambar baru dengan dimensi A4, resolusi 300 ppi, pengaturan warna dan Kertas, serta Buat.](shot:files/new-dialog)

## Preset

Pilih preset menurut kategori, cari berdasarkan nama, atau pilih preset yang baru digunakan. Preset mengisi dimensi, resolusi, pengaturan warna, dan pengaturan Kertas.

![Penjelajah preset Gambar baru dengan kategori Sketsa, Cat air, Pastel, Kanvas, Media campuran, Komik, Cetakan, dan Digital.](shot:files/new-presets)

Simpan pengaturan saat ini sebagai preset bernama untuk digunakan kembali. Buka menu preset tersimpan untuk mengganti nama atau menghapusnya. Preset bawaan tidak dapat diganti nama atau dihapus.

## Lembar

Pratinjau menunjukkan proporsi dan orientasi lembar. Masukkan nama gambar, lalu atur **L** dan **T**, dan pilih px, in, cm, atau mm sebagai satuan. Gunakan kontrol tautan untuk mempertahankan proporsi saat ini, dan kontrol orientasi untuk menukar lebar dan tinggi.

**Resolusi** mengatur piksel per inci untuk dimensi fisik dan skala [tekstur Kertas](/id/docs/layers/paper/). Mengubah resolusi saja mengubah metadata ukuran cetak tanpa mengambil sampel ulang gambar.

Dialog menampilkan dimensi piksel yang dihasilkan dan perkiraan kapasitas. Pengaturan di luar batas gambar perangkat saat ini tidak dapat dibuat; batas bergantung pada dimensi, kedalaman bit, dan sumber daya grafis yang tersedia.

## Kertas

![Laci Kertas di Gambar baru dengan Tanpa kertas, ubin kertas, dan Visibilitas tekstur.](shot:files/new-paper)

Pilih ubin tekstur di bawah **Kertas** untuk memilih tekstur Kertas bawaan atau impor untuk gambar baru. **Visibilitas tekstur** di bagian bawah laci mengatur nilai yang sama seperti di [Properti](/id/docs/layers/paper/) lapisan Kertas, dan ubin menampilkannya di bawah nama tekstur. **Impor…** adalah ubin terakhir. Ubin ini menambahkan gambar ke pustaka kertas dan memilihnya.

Pilih **Tanpa kertas** untuk membuat gambar tanpa lapisan Kertas. **Visibilitas tekstur** kemudian tidak tersedia.

![Pilihan Warna dan Transparan Kertas di Gambar baru.](shot:files/new-paper-color)

**Warna** mengatur warna Kertas. **Transparan** mempertahankan lapisan Kertas tetapi menyembunyikannya sejak awal. Ini berbeda dari **Tanpa kertas**, yang tidak membuat lapisan Kertas.

## Pengaturan warna

Pilih **Ruang warna**, **Kedalaman bit**, dan **Paduan** gambar. Kedalaman bit float menggunakan pencampuran **Cahaya linear**. Lihat [Ruang warna, kedalaman bit, dan pencampuran](/id/docs/color-management/color-spaces/).

## Membuat gambar

Pilih **Buat**. Gambar dimulai dengan lapisan cat kosong, **Tinta saat ini**, di atas Kertas yang dipilih jika disertakan.

Dialog menyimpan pilihan terakhir yang digunakan untuk membuat gambar. Memilih preset menggantikannya dengan nilai preset tersebut.
