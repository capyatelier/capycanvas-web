---
title: "Simulasi Cetak"
description: "Soft proofing hasil cetak di panel Simulasi Cetak, peringatan gamut, dan chip layar di bagian bawah jendela."
related: ["color-management/hdr", "color-management/color-spaces", "files/export", "start/canvas"]
---

Anda dapat melihat bagaimana gambar akan tercetak di panel **Simulasi Cetak** tanpa
mengubah karya.

## Panel Simulasi Cetak

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Simulasi Cetak**.
- Pilih **Panel Simulasi Cetak** di pencarian perintah.
- Di Lukis dan Foto, pilih tab **Simulasi Cetak** di samping **Navigator**.

Pilih mode di bagian atas panel:

- **Nonaktif** menampilkan gambar seperti biasa.
- **SDR** menampilkan versi SDR dari [gambar HDR](/id/docs/color-management/hdr/). Hanya gambar HDR yang memiliki mode ini.
- **Cetak** menyimulasikan hasil cetak dengan profil ICC.

Simulasi tampil di kanvas dan di Navigator, tidak pernah di hasil ekspor atau di
Histogram. Memilih mode tidak menandai gambar sebagai berubah. Gambar yang dibuka kembali
dimulai dengan simulasi nonaktif, tetapi tetap menyimpan profil cetaknya.

## Mengaktifkan dan menonaktifkan simulasi

Lakukan salah satu langkah berikut:

- Pilih **Tampilan > Simulasi Cetak**.
- Tekan **Ctrl+Alt+P**. Pemetaan tombol Gaya Photoshop dan Gaya Krita juga memakai **Ctrl+Y**.

Simulasi aktif dalam mode yang terakhir Anda gunakan (pada awalnya, SDR untuk gambar HDR
dan Cetak untuk gambar SDR). Panel Simulasi Cetak terbuka, dan
**Tampilan > Simulasi Cetak** menampilkan tanda centang.

Di halaman [Pintasan Papan Ketik](/id/docs/input/keyboard/), perintah ini bernama
**Simulasikan Warna Cetak**. Anda dapat memberinya tombol yang menjalankan simulasi
hanya selama tombol itu ditahan.

## Simulasi cetak

Anda dapat menyimulasikan hasil cetak dengan profil ICC RGB, CMYK, atau abu-abu. Pilih
**Cetak** lalu pilih **Profil**. Kanvas tidak disimulasikan sampai Anda memilih profil.

Selama simulasi cetak aktif, bagian bawah jendela bertuliskan "Simulasi cetak: *profil*".
Jika simulasi gagal, tulisannya "Simulasi cetak tidak tersedia", dengan alasannya di
keterangan alat.

Profil dan opsinya disimpan di gambar. Memilih profil menandai gambar sebagai berubah dan
merupakan satu langkah urungkan. Urungkan menghapus profil dan menonaktifkan simulasi.
Hanya profil cetak yang aktif yang disimpan di berkas `.capy`. Saat Anda mengganti profil
yang tersimpan di gambar, profil lama terlebih dahulu ditambahkan ke **Profil Tersimpan**.
Gambar HDR disimulasikan dari versi SDR-nya.

![Panel Simulasi Cetak pada halaman Cetak dengan Adobe RGB (1998) dipilih sebagai profil.](shot:color-management/proof-panel-print)

### Profil

Daftar ini memuat **Profil Dokumen** yang tersimpan di gambar, **Profil Tersimpan** dari
pustaka, dan **Ruang Warna Standar**. **Tambah Profil…** menambahkan berkas `.icc` atau
`.icm` ke pustaka dan memilihnya, dan **Kelola Profil…** membuka Pustaka Profil Warna.

### Simulasikan

**Warna**, **Tinta hitam** (bawaan), atau **Kertas & tinta**. **Kertas & tinta** juga
menyimulasikan tinta hitam.

### Tujuan

**Relatif** (bawaan), **Perseptual**, **Saturasi**, atau **Absolut**.

### Kompensasi titik hitam

Aktif secara bawaan. Tidak tersedia dengan **Absolut**.

### Peringatan gamut

Sakelar yang sama dengan perintah **Peringatan Gamut**, yang dijelaskan di bawah.

## Pustaka Profil Warna

Pilih **Kelola Profil…** di daftar **Profil**, atau di halaman **Warna** pada
[Preferensi](/id/docs/preferences/), untuk membuka **Pustaka Profil Warna**.

- **Impor Profil ICC…** menambahkan berkas `.icc` atau `.icm` berukuran hingga 16 MiB.
- **Tampilkan di Menu Profil** dan **Sembunyikan dari Menu Profil** menentukan profil yang ditawarkan daftar **Profil**.
- **Hapus** mengeluarkan profil dari pustaka.

Pustaka dapat memuat hingga 128 profil dan total 64 MiB.

## Peringatan gamut

Anda dapat menampilkan warna yang tidak dapat dihasilkan profil cetak sebagai abu-abu
sedang di kanvas. Lakukan salah satu langkah berikut:

- Aktifkan **Peringatan gamut** di halaman Cetak pada panel Simulasi Cetak.
- Tekan **Ctrl+Shift+Y**.
- Pilih **Peringatan Gamut** di pencarian perintah.

Bagian bawah jendela bertuliskan "Simulasi cetak: *profil* · Peringatan gamut". Jika
simulasi cetak nonaktif, tulisannya "Gamut: *profil*".

Peringatan gamut hanya tersedia setelah Anda memilih profil cetak. Memilih **Nonaktif**
atau **SDR**, atau menonaktifkan **Tampilan > Simulasi Cetak**, akan menonaktifkannya.
Selama peringatan aktif, gambar HDR menampilkan versi SDR-nya.

## Chip layar

Sebuah chip di sebelah kiri bagian bawah jendela memberi peringatan jika layar tidak
dapat menampilkan gambar atau simulasi secara akurat. Pilih chip untuk membuka
detailnya, dan pilih lagi atau tekan **Escape** untuk menutup detail.

| Chip | Ditampilkan jika |
| --- | --- |
| "Warna terpotong" | Layar tidak dapat menampilkan sebagian warna yang terlihat pada gambar atau simulasi. |
| "Mungkin tidak sesuai hasil cetak" | Simulasi cetak atau peringatan gamut aktif, dan {appName} tidak dapat mengetahui cara layar menampilkan warna. |

Untuk gambar HDR, chip juga melaporkan apakah layar menampilkan HDR (lihat
[HDR](/id/docs/color-management/hdr/)).

![Chip Warna terpotong di bagian bawah jendela dengan detailnya dan Soroti warna ini.](shot:color-management/screen-chip)

Aktifkan **Soroti warna ini** di detail untuk mewarnai warna yang terpotong dengan biru
di kanvas. Sorotan ini tidak pernah disimpan.

Secara bawaan, Sketsa menyembunyikan bagian bawah jendela. Untuk menampilkannya, pilih
**Jendela > Sesuaikan Bilah Judul…** lalu aktifkan **Tampilkan bagian bawah**.
