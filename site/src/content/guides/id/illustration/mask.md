---
title: "Warna dasar"
description: "Tahap 3 tutorial ilustrasi: lapisan lukis untuk setiap bentuk, di-mask sesuai bentuknya dan diisi warna dasarnya."
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

Tahap ini menghasilkan lapisan lukis untuk setiap bentuk, yang diisi warna dasarnya
dan di-mask sesuai bentuknya. Warna dasar ditempatkan di lapisan lukis karena lapisan
isian tidak dapat menjadi dasar kliping untuk shading di tahap 4.

## 1. Tambahkan lapisan Block

Sembunyikan *Sketch*, pilih barisnya, lalu tambahkan lapisan bernama *Block* dengan
**Lapisan baru**. Lapisan baru muncul tepat di atas *Sketch*, di bawah *Line art*.

## 2. Beri mask sesuai balok

Tekan **M**, atau pilih **Seleksi laso** di grup **Seleksi** pada bilah alat Alat,
lalu telusuri garis luar balok di *Line art*. Kemudian pilih **Mask** di bilah seleksi
([Bekerja dengan seleksi](/id/docs/selections/working/)).

![Bilah seleksi dengan Mask, di samping seleksi di sekeliling balok.](shot:illustration/mask-selection-bar)

Seleksi menjadi mask *Block* ([Mask](/id/docs/layers/masks/)). Gambar mini mask muncul
di baris, dan bilah di bagian bawah kanvas bertuliskan "Mengedit mask Block".

## 3. Isi lapisan

**Isi seleksi** tidak tersedia selama Anda mengedit mask. Untuk mengisi lapisan:

1. Pilih gambar mini lapisan di baris *Block*, atau pilih **Edit Isi** di bilah di bagian bawah kanvas.
2. Pilih warna terakota di panel **Warna**.
3. Pilih **Seleksi > Pilih semua piksel**, atau tekan **Ctrl+A**.
4. Pilih **Edit > Isi seleksi**, atau tekan **Shift+Backspace**.
5. Pilih **Seleksi > Batalkan seleksi piksel**, atau tekan **Ctrl+D**.

Warna menutupi seluruh lapisan, dan mask hanya menampilkannya di dalam balok.

## 4. Tambahkan Disc dan Ribbon

Buat *Disc* dengan warna oker, lalu *Ribbon* dengan warna hijau toska, dengan cara
yang sama.

![Panel Lapisan dengan Ribbon, Disc, dan Block, masing-masing dengan gambar mini mask, di bawah Line art.](shot:illustration/mask-layers)

Daftar lapisan berisi *Line art*, *Ribbon*, *Disc*, *Block*, *Sketch*,
*Color rough*, dan **Kertas**.

## 5. Sesuaikan tepi

Pilih gambar mini mask di baris *Ribbon*. Bilah di bagian bawah kanvas bertuliskan
"Mengedit mask Ribbon".

![Bilah di bagian bawah kanvas bertuliskan Mengedit mask Ribbon, dengan Balikkan, Nonaktifkan, Terapkan Mask, dan Edit Isi.](shot:illustration/mask-bar)

Lukis di sepanjang tepi dengan kuas **Pena G** untuk menampilkan lebih banyak warna
hijau toska, atau gunakan **Penghapus** untuk merapikan tepinya. Di mask, kuas
mengabaikan warna cat.

Tahap berikutnya: [Rendering](/id/docs/illustration/render/).
