---
title: "Lapisan seleksi"
description: "Menyimpan seleksi sebagai lapisan seleksi di panel Lapisan dan memuatnya kembali."
related: ["selections/working", "selections/quick-mask", "layers/types", "layers/panel"]
---

Anda dapat menyimpan seleksi sebagai lapisan di panel Lapisan dan memuatnya kembali
nanti.

## Menyimpan seleksi

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Simpan sebagai Lapisan Seleksi**.
- Pilih **Simpan** di bilah seleksi atau di bilah Mask Cepat.
- Di Mask Cepat, pilih **Lapisan > Simpan sebagai Lapisan Seleksi**.

Lapisan baru ditempatkan di posisi teratas daftar lapisan, dengan nama *Seleksi* dan
sebuah angka. Lapisan itu terbuka untuk diedit dengan namanya siap diketik.
Menyimpan dari Mask Cepat juga mempertahankan warna dan opasitas hamparan Mask
Cepat.

Untuk menyimpan ke dalam grup, buka menu grup, lalu pilih **Simpan Seleksi Saat Ini
dalam Grup…**.

## Lapisan Seleksi Baru

Anda dapat memulai lapisan seleksi dalam keadaan kosong lalu melukis seleksinya.

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Lapisan Seleksi Baru**.
- Pilih **Lapisan Seleksi Baru** di bagian bawah panel Lapisan.
- Buka menu grup, lalu pilih **Lapisan Seleksi Baru dalam Grup…**.

## Baris lapisan seleksi

Baris lapisan seleksi memiliki gambar mini seleksi, tombol mata yang menampilkan atau
menyembunyikan hamparannya, dan tombol muat di samping gambar mini.

Memilih baris membuka lapisan untuk diedit. Lapisan seleksi tidak memiliki opasitas,
mode baur, atau mask, dan tidak dapat digabungkan atau dilukis di luar pengeditan.

![Baris lapisan seleksi di panel Lapisan, dengan tombol muat di samping gambar mini.](shot:selections/selection-layer-row)

## Mengedit lapisan seleksi

Selama Anda mengedit lapisan seleksi, kuas, **Isi**, dan **Gradasi** mengubah seleksi
yang tersimpan, seperti di [Mask Cepat](/id/docs/selections/quick-mask/). Panel
Properti menampilkan **Warna hamparan** dan **Opasitas hamparan** lapisan itu, serta
**Mode** yang dipakai bersama.

[Bilah kanvas](/id/docs/selections/working/) di bagian bawah kanvas berketerangan
"Mengedit" dan nama lapisan. Jika bilah kanvas disembunyikan, bilah ini tidak muncul.

- **Muat** menjadikan lapisan itu seleksi saat ini dan kembali ke karya.
- **Balikkan** membalik seleksi yang tersimpan dan membiarkan lapisan tetap terbuka untuk diedit.
- **Kembali ke Karya** mengakhiri pengeditan. **Escape** melakukan hal yang sama.

Setelah pengeditan, lapisan yang Anda edit sebelumnya kembali aktif, atau lapisan
lukis teratas jika sebelumnya tidak ada.

Untuk memperbaiki seleksi yang tersimpan, buka menu lapisan seleksi, lalu pilih dari
**Ubah**. **Seleksi > Perluas Seleksi…** dan perintah perbaikan lainnya di menu
**Seleksi** kembali ke karya terlebih dahulu dan mengubah seleksi saat ini.

![Bilah kanvas untuk lapisan seleksi yang diedit, dengan Muat, Balikkan, dan Kembali ke Karya.](shot:selections/selection-layer-bar)

## Memuat lapisan seleksi

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Muat Seleksi**, pilih lapisannya, lalu pilih **Muat Seleksi**, **Tambah ke Seleksi**, **Kurangi dari Seleksi**, **Irisan dengan Seleksi**, atau **Muat Seleksi Terbalik**.
- Pilih tombol muat di baris lapisan.
- Tahan **Ctrl** lalu klik gambar mini lapisan. Tambahkan **Shift** untuk menambah, **Alt** untuk mengurangi, atau **Shift+Alt** untuk mengambil irisan.
- Selama Anda mengedit lapisan, pilih **Muat** di bilah kanvas.

Memuat akan kembali ke karya terlebih dahulu. Lapisan seleksi tetap seperti semula.
Lapisan di dalam grup dicantumkan di bawah **Muat Seleksi** menurut jalur grupnya,
misalnya *Grup 1 / Seleksi 1*.

## Mengganti lapisan seleksi

Untuk menyimpan seleksi saat ini ke lapisan seleksi yang sudah ada, pilih
**Seleksi > Ganti Lapisan Seleksi dari Seleksi Saat Ini**, lalu pilih lapisannya.
Lapisan seleksi yang terkunci tidak dapat diganti.

## Menu lapisan seleksi

Klik kanan atau tahan baris lapisan seleksi untuk membuka menunya.

- **Muat Seleksi**: lima item yang sama seperti di menu Seleksi.
- **Ubah**: **Ganti dari Seleksi Saat Ini**, **Balikkan**, **Pilih Semua**, **Bersihkan**, **Isi**, **Perluas…**, **Perkecil…**, **Perhalus Tepi…**, **Bingkai…**, dan **Haluskan…**.
- **Atur**: **Kelompokkan Lapisan Terpilih**, **Pindahkan ke Akar**, **Pindahkan ke Atas**, **Pindahkan ke Bawah**, dan **Pindahkan ke dalam Grup**.
- **Ubah Nama…**, **Duplikat**, **Hapus**, dan **Kunci Pengeditan**. Pada lapisan yang terkunci, **Kunci Pengeditan** bertuliskan **Buka Kunci Pengeditan**.

**Ubah** tidak tersedia pada lapisan seleksi yang terkunci. Jika beberapa lapisan
terpilih, menu menampilkan **Duplikat Lapisan Terpilih** dan **Hapus Lapisan
Terpilih**.
