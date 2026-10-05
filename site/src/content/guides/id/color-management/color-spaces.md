---
title: "Ruang warna, kedalaman bit, dan pembauran"
description: "Memilih ruang warna, kedalaman bit, dan Pembauran gambar, serta mengubahnya nanti dari menu Edit."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Anda dapat memilih ruang warna, kedalaman bit, dan Pembauran gambar saat membuatnya, dan
mengubahnya nanti dari menu **Edit**.

## Ruang warna

Ruang warna kerja gambar adalah **sRGB**, **Display P3**, **Adobe RGB (1998)**, atau
**ProPhoto RGB**. ProPhoto RGB memakai titik putih D50, sedangkan tiga lainnya memakai
D65.

Profil ICC tidak dapat menjadi ruang kerja. Anda dapat memakainya untuk
[simulasi cetak](/id/docs/color-management/proof/) dan [ekspor](/id/docs/files/export/).

## Kedalaman bit

Kedalaman bit gambar adalah **SDR 8-bit**, **SDR 16-bit**,
**HDR pecahan mengambang 16-bit**, atau **HDR pecahan mengambang 32-bit**. Kedalaman
pecahan mengambang menjadikannya [gambar HDR](/id/docs/color-management/hdr/), yang
disimpan sebagai RGB linear dengan 1.0 sebagai putih SDR pada 203 cd/m².

## Memilihnya untuk gambar baru

Pilih **Berkas > Baru…** (**Ctrl+N**) lalu atur **Ruang warna**, **Kedalaman bit**,
dan **Pembauran**, atau pilih **Prasetel**:

| Prasetel | Ruang warna | Kedalaman bit | Pembauran |
| --- | --- | --- | --- |
| **Gambar standar** | sRGB | SDR 8-bit | Perseptual |
| **Warna luas** | Display P3 | SDR 8-bit | Perseptual |
| **Pengeditan foto** | ProPhoto RGB | SDR 16-bit | Perseptual |
| **Gambar HDR** | sRGB | HDR pecahan mengambang 16-bit | Cahaya linear |

Pada kedalaman pecahan mengambang, **Pembauran** tetap pada Cahaya linear. Aktifkan
**Gunakan pengaturan ini untuk gambar baru** agar pilihan ini, termasuk Pembauran,
menjadi bawaan untuk gambar baru.

![Dialog Gambar baru dengan Ruang warna disetel ke Display P3, Kedalaman bit, Pembauran, dan baris ringkasan.](shot:color-management/new-dialog-color)

## Bawaan di Preferensi

Pilih **Edit > Preferensi** lalu buka halaman **Warna**:

- Di bawah **Gambar baru**, atur **Ruang warna**, **Kedalaman bit**, dan **Latar belakang** untuk gambar berikutnya. Gambar yang terbuka tidak berubah.
- Di bawah **Membuka foto**, atur **Presisi pengeditan** (**Kedalaman sumber** atau **16-bit**) dan **RGB dan skala abu-abu tanpa profil** (**Anggap sRGB** atau **Tanyakan**). Dengan **Tanyakan**, membuka foto tanpa profil menampilkan **Pilih interpretasi gambar**. Foto yang memiliki profil mempertahankan profil tertanamnya.
- Pilih **Kelola Profil…** untuk membuka [Pustaka Profil Warna](/id/docs/color-management/proof/).

Preferensi tidak memiliki pengaturan Pembauran.

## Tetapkan Profil

Pilih **Edit > Tetapkan Profil…** untuk mempertahankan angka RGB gambar dan membacanya
dalam ruang kerja lain. Pilih ruang di bawah **Ruang warna**, tempat Adobe RGB (1998)
tercantum sebagai **Adobe RGB**. Lapisan foto mempertahankan profil sumber dari
[foto aslinya](/id/docs/layers/types/).

## Konversi Ruang Warna

Pilih **Edit > Konversi Ruang Warna…** untuk mengubah angka RGB sehingga warna tetap
terlihat sama dalam ruang kerja lain, di dalam batas gamutnya.

Dengan **Simpan salinan yang diratakan**, **Terapkan** menjadi **Simpan Salinan…**.
Salinan memiliki satu lapisan, dengan ukuran dan kedalaman bit yang sama. Nama berkasnya
harus diakhiri `.capy` dan tidak boleh sama dengan berkas gambar yang sedang terbuka.

![Dialog Konversi Ruang Warna dengan perbandingan Sebelum dan Sesudah serta pesan gamut.](shot:color-management/convert-dialog)

### Ruang warna

Ruang kerja tujuan konversi. Awalnya ruang saat ini yang dipilih.

### Hasil

**Lapisan yang dapat diedit** (bawaan) mengonversi setiap lapisan di tempat.
**Simpan salinan yang diratakan** menyimpan salinan hasil konversi yang diratakan sebagai
berkas `.capy` baru dan membiarkan gambar yang terbuka tidak berubah.

### Tujuan perenderan

**Kolorimetrik relatif** (bawaan), **Perseptual**, **Saturasi**, atau
**Kolorimetrik absolut**. Kompensasi titik hitam selalu nonaktif.

## Ubah Kedalaman Bit

Pilih **Edit > Ubah Kedalaman Bit…** untuk mengubah presisi penyimpanan. Ruang warna
tidak berubah.

Mengubah ke kedalaman pecahan mengambang menjadikan gambar HDR dan sekaligus mengatur
Pembauran ke Cahaya linear. Mengubah kembali ke kedalaman bilangan bulat mempertahankan
Cahaya linear sampai Anda mengubah [Pembauran](#pembauran). Menurunkan kedalaman dapat
memotong warna.

### Kedalaman bit

Kedalaman bit baru. Awalnya kedalaman saat ini yang dipilih.

### Dither

**Tidak ada** (bawaan) atau **Stokastik (8-bit)**. Dither hanya berlaku jika targetnya
SDR 8-bit.

## Pratinjau dan penerapan

Untuk menerapkan Tetapkan Profil, Konversi Ruang Warna, atau Ubah Kedalaman Bit:

1. Atur kolom di dialog.
2. Pilih **Pratinjau Hasil Lengkap**.
3. Bandingkan **Sebelum** dan **Sesudah**.
4. Pilih **Terapkan** (atau **Simpan Salinan…**).

**Terapkan** tetap tidak tersedia sampai pratinjau siap, dan mengubah kolom membuang
pratinjau. Jika ada warna yang terpotong, baris status berbunyi "Sebagian warna melebihi
gamut tujuan. Bandingkan hasil sebelum menerapkan."

Terapkan adalah satu langkah urungkan. Urungkan dan Ulangi membuka
**Urungkan Perubahan Warna** dan **Ulangi Perubahan Warna**. Dialog ini menerapkan
perubahan tanpa masukan lain dan hanya menyediakan **Batal**.

## Pembauran

Anda dapat menggabungkan lapisan berdasarkan nilai terenkode gambar atau dalam cahaya
linear. Lakukan salah satu langkah berikut:

- Pilih **Edit > Pembauran > Pembauran Perseptual** atau **Edit > Pembauran > Pembauran Cahaya Linear**.
- Atur **Pembauran** ke **Perseptual** atau **Cahaya linear** di dialog Gambar baru.

![Menu Edit dengan submenu Pembauran terbuka dan Pembauran Perseptual dicentang.](shot:color-management/edit-blending-menu)

Piksel yang sudah dilukis mempertahankan nilainya. Pembauran mengubah:

- cara lapisan digabungkan;
- cara kuas kering meletakkan warna di atas cat yang sudah ada;
- Kabur Gaussian, Mask Penajaman, Lolos Tinggi, Halus dengan Tepi Terjaga, dan Fokus Lembut (Kabur Gerak, Vinyet, dan Pendar selalu bekerja dalam cahaya linear);
- abu-abu netral pada **Lapisan Terangkan & Gelapkan Baru**;
- [Pemisahan Frekuensi…](/id/docs/retouch/dodge-burn/), yang memerlukan Perseptual.

Mengubah Pembauran adalah satu langkah urungkan. Gambar HDR selalu memakai Cahaya linear,
dan kedua item menu itu tidak tersedia. Gambar baru dan foto yang dibuka dari berkas
gambar dimulai dengan Perseptual. Foto yang terbuka pada kedalaman pecahan mengambang dan
berkas `.capy` yang disimpan sebelum ada Pembauran memakai Cahaya linear.

## Properti Dokumen

Pilih **Berkas > Properti Dokumen…** untuk melihat **Ukuran kanvas**,
**Ruang warna kerja**, **Kedalaman bit**, **Pembauran**, dan **Metadata resolusi**
gambar. Gambar HDR menambahkan **Putih acuan HDR**. Setiap foto asli di dalam gambar
menambahkan baris dengan profil sumbernya. Anda tidak dapat mengubah apa pun di dialog
ini.
