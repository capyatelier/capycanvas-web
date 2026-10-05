---
title: "Mask"
description: "Menyembunyikan bagian lapisan dengan mask, dan setiap perintah yang mengubah mask."
related: ["layers/panel", "selections/working", "filters/how-filters-apply", "layers/merging"]
---

Anda dapat menyembunyikan bagian lapisan dengan mask. Area yang dilukis di mask
menampilkan lapisan, dan area kosong menyembunyikannya. Lapisan lukis, lapisan foto,
grup, lapisan isian, dan filter dapat memiliki mask.

## Menambahkan mask

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Mask > Tambah mask**.
- Pilih **Tambah mask** di bagian bawah panel Lapisan.

![Baris Ribbon, dengan garis tepi di sekeliling gambar mini mask-nya.](shot:layers/masks-row)

Gambar mini mask muncul di sebelah kanan gambar mini lapisan, dengan garis tepi
yang menandainya sebagai sasaran kuas. Mask baru menampilkan seluruh lapisan. Jika
ada seleksi aktif, mask hanya menampilkan area yang terseleksi, dan seleksi itu
dibatalkan.

Jika lapisan sudah memiliki mask, **Tambah mask** memilih mask itu untuk dilukis.
Mask tidak dapat ditambahkan ke lapisan seleksi atau lapisan terkunci.

## Melukis di mask

Pilih gambar mini mask untuk melukis di mask. Untuk kembali melukis di lapisan,
pilih gambar mini lapisan atau tekan **Escape**.

> **Catatan:** Di mask, kuas mengabaikan warna cat. Kuas menampilkan lapisan, dan **Penghapus** menyembunyikannya.

Pada mask yang dibalik, peran kuas dan **Penghapus** bertukar. Goresan di mask
bersifat kering, tanpa pencampuran, rembesan, atau tekstur.

## Bilah pengeditan mask

Selama Anda melukis di mask, bilah bertuliskan "Mengedit mask *lapisan*" muncul di
bagian bawah kanvas.

![Bilah pengeditan mask dengan Balikkan, Nonaktifkan, Terapkan Mask, Lainnya, dan Edit Isi.](shot:layers/masks-bar)

- **Balikkan**
- **Nonaktifkan** mematikan mask, lalu tombolnya bertuliskan **Aktifkan**.
- **Terapkan Mask** menghapus piksel yang disembunyikan mask, lalu membuang mask.
- **Lainnya** memuat menu **Lapisan** dan **Tampilkan bilah tindakan kanvas**. Nonaktifkan **Tampilkan bilah tindakan kanvas** untuk menyembunyikan bilah ini.
- **Edit Isi** kembali ke melukis di lapisan.

## Mask dari seleksi

Anda dapat membuat mask dari seleksi saat ini.

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Mask > Mask: tampilkan seleksi** atau **Mask: sembunyikan seleksi**. Pada lapisan yang sudah memiliki mask, item ini bertuliskan **Ganti mask: tampilkan seleksi** dan **Ganti mask: sembunyikan seleksi**.
- Pilih **Mask** di [bilah seleksi](/id/docs/selections/working/) pada kanvas. Mask baru menampilkan area yang terseleksi dan menggantikan mask yang sudah dimiliki lapisan.

Filter atau lapisan isian yang ditambahkan selama ada seleksi aktif mendapat mask
dari seleksi itu. **Tempel ke Dalam** membuat lapisan baru yang di-mask sesuai
seleksi (lihat [Salin dan tempel](/id/docs/transform/clipboard/)).

## Seleksi dari mask

Anda dapat memuat mask sebagai seleksi.

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Dari Mask Lapisan**, lalu **Muat Mask sebagai Seleksi**, **Tambah Mask ke Seleksi**, **Kurangi Mask dari Seleksi**, atau **Irisan dengan Mask**.
- Pilih item yang sama dari **Seleksi Piksel** di menu mask.
- **Ctrl**+klik gambar mini mask. Tambahkan **Shift** untuk menambah ke seleksi, **Alt** untuk mengurangi dari seleksi, atau **Shift+Alt** untuk mengambil irisannya.

## Menu mask

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Mask** (item pertama bertuliskan **Edit mask**).
- Klik kanan atau tahan gambar mini mask.
- Selama Anda melukis di mask, buka menu **Lapisan** atau pilih **Tindakan lapisan** di bagian bawah panel Lapisan.

Pada lapisan tanpa mask, **Lapisan > Mask** hanya memuat **Tambah mask**,
**Mask: tampilkan seleksi**, **Mask: sembunyikan seleksi**, dan **Tempel mask**.

![Menu mask Ribbon.](shot:layers/masks-menu)

| Item | Fungsi |
| --- | --- |
| **Edit isi lapisan** | Kembali ke melukis di lapisan. |
| **Tampilkan area mask** | Menampilkan mask di kanvas dan memilihnya untuk dilukis. |
| **Aktifkan mask** | Mengaktifkan atau menonaktifkan mask tanpa mengubahnya. Mask yang nonaktif memiliki gambar mini yang pudar. |
| **Tautkan mask ke lapisan** | Jika aktif, mask berpindah bersama lapisan. Jika nonaktif, **Pindahkan lapisan / mask** memindahkan lapisan atau mask, tergantung mana yang sedang Anda lukis. Tombol tautan di antara gambar mini melakukan hal yang sama. |
| **Ganti mask: tampilkan seleksi**, **Ganti mask: sembunyikan seleksi** | Mengganti mask dengan seleksi. |
| **Salin mask** | Menyalin mask, untuk **Ganti dengan mask yang disalin** di lapisan lain, atau **Tempel mask** di lapisan tanpa mask. |
| **Balikkan mask** | Menukar area yang ditampilkan dan yang disembunyikan. |
| **Tampilkan semua**, **Sembunyikan semua** | Membuat mask menampilkan atau menyembunyikan seluruh lapisan, dan menonaktifkan pembalikan. |
| **Terapkan mask ke lapisan** | Menghapus piksel yang disembunyikan mask, lalu membuang mask. |
| **Hapus mask** | Membuang mask. Piksel lapisan tidak berubah. |
| **Seleksi Piksel** | Memuat mask sebagai seleksi. |

Setiap item kecuali **Edit isi lapisan**, **Tampilkan area mask**, dan **Salin mask**
memerlukan lapisan yang tidak terkunci.

## Menerapkan mask

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Mask > Terapkan mask ke lapisan**.
- Pilih **Terapkan Mask** di bilah pengeditan mask.

**Terapkan mask ke lapisan** hanya berfungsi pada lapisan lukis, dan mask harus
aktif. Pada lapisan yang didistorsi atau dilengkungkan, pilih **Terapkan
Transformasi ke Piksel** terlebih dahulu. Untuk menerapkan mask grup, gunakan
**Gabungkan Grup** (lihat [Menggabungkan lapisan](/id/docs/layers/merging/)).

Pada lapisan foto, **Kembalikan ke Foto Asli** memulihkan bagian yang dihapus oleh
mask yang sudah diterapkan.

## Mask pada lapisan filter dan lapisan isian

Mask filter menentukan tempat filter diterapkan. Saat lapisan filter atau lapisan
isian terpilih, kuas selalu melukis di mask-nya. **Isi**, **Gradasi**, dan alat lain
yang menggambar karya tidak berfungsi di mask filter. Melukis di lapisan isian
memerlukan mask.
