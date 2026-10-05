---
title: "Panel Lapisan"
description: "Apa yang ditampilkan dan dilakukan setiap bagian panel Lapisan, termasuk menu lapisan."
related: ["layers/working", "layers/settings", "layers/types", "layers/masks"]
---

Panel **Lapisan** mencantumkan lapisan gambar, dengan lapisan terdepan di posisi
teratas. Kepala panel menampilkan pengaturan lapisan aktif.

![Panel Lapisan dengan lapisan-lapisan ilustrasi yang sudah selesai.](shot:layers/panel "1 Kepala panel · 2 Baris lapisan · 3 Tombol bawah")

## Membuka panel Lapisan

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Lapisan**.
- Di Lukis, pilih **Lapisan** di kolom kanan.
- Di Sketsa, pilih **Panel Lapisan** di bilah judul.
- Ketik "Panel Lapisan" di [pencarian perintah](/id/docs/start/command-search/).

Di Foto, panel ini sudah terbuka di kolom kanan.

## Kepala panel

![Kepala panel Lapisan untuk Ribbon shading, dengan Klip ke lapisan di bawah aktif.](shot:layers/panel-header "1 Mode baur lapisan · 2 Opasitas lapisan · 3 Kunci alpha · 4 Kunci pengeditan · 5 Klip ke lapisan di bawah · 6 Gunakan lapisan terpilih sebagai acuan")

1. **Mode baur lapisan** menampilkan mode saat ini dan membuka [menu baur](/id/docs/layers/blend-modes/).
2. **Opasitas lapisan**, dari 0 hingga 100. Seret penggeser atau ketik nilainya.
3. **Kunci alpha**.
4. **Kunci pengeditan**.
5. **Klip ke lapisan di bawah**. Pada filter, tombol ini bertuliskan **Terapkan ke *lapisan*** atau **Terapkan ke lapisan di bawah** (lihat [Cara filter diterapkan](/id/docs/filters/how-filters-apply/)).
6. **Gunakan lapisan terpilih sebagai acuan**. Tombol ini bertuliskan **Berhenti menggunakan lapisan ini sebagai acuan** jika lapisan aktif adalah satu-satunya baris terpilih dan sudah menjadi acuan.

Sakelar yang disorot berarti aktif (lihat [Pengaturan lapisan](/id/docs/layers/settings/)).
**Mode baur lapisan** dan **Opasitas lapisan** tidak tersedia untuk lapisan seleksi
dan lapisan terkunci.

## Baris lapisan

![Baris Ribbon, dengan mask, Kunci alpha aktif, dan opasitas 80%.](shot:layers/panel-row "1 Mata · 2 Tombol baris · 3 Gambar mini · 4 Tautan mask · 5 Gambar mini mask · 6 Nama dan subjudul · 7 Kunci · 8 Pegangan")

Lapisan di dalam grup tampil menjorok di bawah grupnya.

1. Ikon mata menyembunyikan atau menampilkan lapisan.
2. Tombol baris menambahkan baris ke seleksi atau mengeluarkannya, tanpa mengubah lapisan aktif. Tombol ini menampilkan kuas pada lapisan yang menerima cat, mercusuar pada lapisan acuan, dan tanda centang pada baris terpilih lainnya.
3. Pilih gambar mini untuk melukis di piksel lapisan. Pada grup, gambar mini membuka atau menutup grup.
4. Pada lapisan yang memiliki mask, tombol tautan menentukan apakah mask ikut berpindah bersama lapisan (**Lepaskan tautan mask dari lapisan**, **Tautkan mask ke lapisan**).
5. Pilih gambar mini mask untuk melukis di [mask](/id/docs/layers/masks/).
6. Subjudul di bawah nama menampilkan mode warna, mode baur, dan opasitas jika nilainya bukan Warna penuh, Normal, dan 100%, misalnya "Perkalian · 60%".
7. Ikon gembok menandai lapisan terkunci, dan ikon kunci alpha menandai lapisan dengan **Kunci alpha** aktif.
8. Seret pegangan untuk [memindahkan lapisan](/id/docs/layers/working/).

Pilih sebuah baris untuk menjadikannya lapisan aktif dan satu-satunya baris terpilih.
[Jenis lapisan](/id/docs/layers/types/) menampilkan gambar mini setiap jenis.

**Ctrl**+klik gambar mini lapisan lukis untuk memuat opasitasnya sebagai seleksi, atau
gambar mini mask untuk memuat mask. Tambahkan **Shift** untuk menambah ke seleksi,
**Alt** untuk mengurangi dari seleksi, atau **Shift+Alt** untuk mengambil irisannya.

## Penanda baris

- Garis tepi di sekeliling gambar mini atau gambar mini mask menandai bagian yang menjadi sasaran kuas.
- Rel di sebelah kiri gambar mini menghubungkan [lapisan yang diklip](/id/docs/layers/settings/) ke lapisan dasarnya.
- Mata rantai di antara dua gambar mini menghubungkan [filter terlampir](/id/docs/filters/how-filters-apply/) ke baris di bawahnya.
- Ikon mata yang pudar dan dicoret menandai lapisan yang aktif tetapi tersembunyi karena grupnya, atau filter terlampir yang lapisannya tersembunyi.
- Gambar mini mask yang pudar menandai mask yang dinonaktifkan.
- Selama [Mask Cepat](/id/docs/selections/quick-mask/) aktif, baris **Mask Cepat** muncul di posisi teratas.

## Tombol bawah

![Tombol-tombol di bagian bawah panel Lapisan.](shot:layers/panel-footer "1 Lapisan baru · 2 Grup baru · 3 Lapisan Seleksi Baru · 4 Tambah mask · 5 Tambahkan filter · 6 Impor Gambar sebagai Lapisan… · 7 Hapus lapisan terpilih · 8 Tindakan lapisan")

1. **Lapisan baru** menambahkan lapisan lukis.
2. **Grup baru**. Jika beberapa baris terpilih, tombol ini mengelompokkannya.
3. **Lapisan Seleksi Baru** (lihat [Lapisan seleksi](/id/docs/selections/selection-layers/)).
4. **Tambah mask**.
5. **Tambahkan filter** melampirkan filter ke lapisan aktif.
6. **Impor Gambar sebagai Lapisan…**
7. **Hapus lapisan terpilih**.
8. **Tindakan lapisan** membuka menu lapisan dari lapisan aktif.

Tombol tidak tersedia jika tindakannya tidak berlaku untuk lapisan aktif, misalnya
**Tambah mask** pada lapisan terkunci (lihat
[Bekerja dengan lapisan](/id/docs/layers/working/)).

## Usapan dan tahanan

Dengan pena atau jari:

- Usap baris ke kiri untuk memunculkan **Hapus** di ujung kanannya. Pilih **Hapus** untuk menghapus lapisan, atau usap ke kanan untuk menyembunyikan tombol itu.
- Usap lapisan lukis ke kanan untuk mengaktifkan atau menonaktifkan **Kunci alpha**.
- Usap grup ke kanan untuk mengaktifkan atau menonaktifkan **Lewat Langsung**.
- Tahan baris untuk membuka menu lapisannya. Gerakkan tanpa mengangkat untuk menyeret baris itu.

![Baris yang diusap ke kiri, dengan Hapus di ujung kanannya.](shot:layers/panel-swipe-delete)

Usapan pendek tidak mengubah apa pun. Usapan tidak berfungsi dengan tetikus, pada
pegangan, atau pada lapisan terkunci.

## Menu lapisan

Anda dapat membuka menu perintah untuk setiap lapisan.

Lakukan salah satu langkah berikut:

- Buka menu **Lapisan**. Menu ini memuat menu lapisan aktif, tanpa **Tambahkan filter**.
- Klik kanan sebuah baris, atau tahan baris itu dengan pena atau jari.
- Pilih **Tindakan lapisan** di bagian bawah panel.
- Saat sebuah baris terfokus, tekan **Shift+F10** atau tombol Menu.

![Menu lapisan Ribbon.](shot:layers/panel-menu)

| Item | Isi |
| --- | --- |
| **Baru** | **Lapisan baru**, **Lapisan kliping baru**, **Grup baru**, **Isian Warna Solid**, **Isian Gradasi**, **Lapisan Terangkan & Gelapkan Baru**, **Salin Seleksi ke Lapisan Baru**, **Potong Seleksi ke Lapisan Baru** |
| **Tambahkan filter** | Filter untuk dilampirkan ke lapisan, menurut kategori |
| **Atur** | **Ubah nama lapisan…**, **Duplikat**, **Kelompokkan lapisan terpilih**, dan **Pisahkan grup** untuk grup |
| **Mode Baur** | Semua [mode baur](/id/docs/layers/blend-modes/) |
| **Pengaturan Lapisan** | [Pengaturan lapisan](/id/docs/layers/settings/) |
| **Mask** | Perintah [mask](/id/docs/layers/masks/) |
| **Seleksi Piksel** | **Seleksi Opasitas Lapisan**, **Tambah Opasitas ke Seleksi**, **Kurangi Opasitas dari Seleksi**, **Irisan dengan Opasitas Lapisan**, **Isi Seleksi**, **Balikkan Seleksi**, **Batalkan Seleksi Piksel** |
| **Seleksi Baris Lapisan** | **Pilih Semua Baris Lapisan**, **Bersihkan Seleksi Baris Lapisan** |
| **Visibilitas** | **Tampilkan lapisan**, **Tampilkan lapisan dan grup induk**, **Isolasi lapisan terpilih**, **Tampilkan semua lapisan** |
| **Pindahkan lapisan / mask** | Memilih alat [Operasi](/id/docs/transform/move-transform/) |
| **Gabungkan ke Bawah**, **Gabungkan yang Terlihat**, **Cap yang Terlihat**, **Ratakan Gambar** | Lihat [Menggabungkan lapisan](/id/docs/layers/merging/) |
| **Bersihkan Seluruh Lapisan**, **Hapus lapisan** | **Bersihkan Seluruh Lapisan** hanya muncul pada lapisan lukis |

Membuka menu sebuah baris menjadikan lapisan itu aktif. Menu grup diawali
**Lapisan Seleksi Baru dalam Grup…** dan **Simpan Seleksi Saat Ini dalam Grup…**.
Lapisan seleksi memiliki menunya sendiri (lihat
[Jenis lapisan](/id/docs/layers/types/)). Klik kanan atau tahan gambar mini mask untuk
membuka [menu mask](/id/docs/layers/masks/).
