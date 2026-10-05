---
title: "Mengekspor gambar"
description: "Mengekspor salinan gambar yang sudah diratakan dengan dialog Ekspor gambar dan Ekspor Lagi."
related: ["files/open-save", "color-management/hdr", "color-management/color-spaces"]
---

Anda dapat mengekspor salinan gambar yang sudah diratakan. Mengekspor tidak mengubah
gambar `.capy` dan tidak terhitung sebagai menyimpan.

## Mengekspor gambar

Lakukan salah satu langkah berikut:

- Pilih **Berkas > Ekspor…**.
- Tekan **Ctrl+Shift+E**.

Dialog **Ekspor gambar** terbuka dengan tujuan **Web / Bagikan**. Pilih
**Pilih Berkas…** lalu pilih lokasi. Nama yang disarankan adalah nama gambar dengan
ekstensi formatnya, misalnya "Tanpa judul.png". Di Firefox dan Safari, yang terbuka
adalah dialog **Unduh berkas** (lihat [Membuka dan menyimpan](/id/docs/files/open-save/)).

Nama berkas harus diakhiri dengan ekstensi format. **Ekspor…** tidak tersedia selama
pemangkasan atau transformasi sedang terbuka.

## Pengaturan

![Dialog Ekspor gambar dengan Tujuan disetel ke Web / Bagikan.](shot:files/export-dialog)

Beberapa pengaturan hanya muncul untuk format tertentu.

### Tujuan

Mengatur semua pengaturan lain sekaligus. Prasetel ekspor yang tersimpan muncul setelah
tujuan bawaan berikut:

- **Web / Bagikan**: PNG sRGB 8-bit dalam ukuran asli.
- **Gambar warna luas**: sama, tetapi dalam Display P3.
- **Pengeditan lanjutan**: TIFF 16-bit dalam ruang warna gambar.
- **Khusus**: dimulai seperti **Web / Bagikan**.

### Rentang dinamis

**SDR** pada gambar SDR, atau pilihan format HDR pada gambar HDR (lihat Ekspor HDR
di bawah).

### Potong warna HDR di luar rentang

Memotong warna yang melampaui rentang HDR PNG, HDR JPEG, dan HDR AVIF. Pengaturan ini
hanya muncul untuk format-format tersebut.

### Format

**Gambar PNG**, **Gambar TIFF**, **Gambar JPEG**, atau **WebP · tanpa kehilangan data**
(lihat Batasan format di bawah).

### Profil keluaran

**sRGB**, **Display P3**, **Adobe RGB (1998)**, atau **ProPhoto RGB**, ditambah
"Asli: *nama*" untuk setiap lapisan foto yang memiliki profil tertanamnya sendiri.

### Kedalaman bit

**8-bit** atau **16-bit**.

### Transparansi

**Pertahankan**, **Latar belakang putih**, atau **Latar belakang hitam**.

### Tujuan perenderan

**Kolorimetrik relatif** (bawaan), **Perseptual**, **Saturasi**, atau
**Kolorimetrik absolut**.

### Dither

**Tidak ada** atau **Stokastik (keluaran 8-bit)**.

### Kualitas

Kualitas kompresi dari 1 hingga 100, bawaannya 90. Pengaturan ini muncul untuk JPEG,
HDR JPEG, dan HDR AVIF.

### Ukuran piksel

**Ukuran asli** atau **Sesuaikan dalam batas**. **Sesuaikan dalam batas** menambahkan
**Lebar maksimum (px)** dan **Tinggi maksimum (px)**, lalu memperkecil gambar agar muat
di dalam batas itu tanpa mengubah proporsinya.

### Metadata resolusi

**Pertahankan asli**, **Piksel per inci**, atau **Hilangkan**. **Piksel per inci**
menambahkan kolom dari 1 hingga 65535, bawaannya 300.

### Metadata

**Semua**, **Hak Cipta & Kontak**, atau **Tidak ada**. Dengan **Semua**, **Hapus lokasi**
aktif secara bawaan. Baris-baris ini hanya muncul untuk gambar yang dibuka dari foto
dengan data kamera atau hak cipta.

### Impor Profil ICC… dan Profil Tersimpan…

**Impor Profil ICC…** menambahkan berkas `.icc` atau `.icm` berukuran hingga 16 MiB ke
**Profil keluaran**. **Profil Tersimpan…** membuka **Pustaka Profil Warna**.

### Nama prasetel dan tombol prasetel

**Simpan Prasetel** menyimpan pengaturan sebagai tujuan baru dengan nama di
**Nama prasetel**. **Perbarui Prasetel** dan **Hapus Prasetel** mengubah atau menghapus
prasetel tersimpan yang dipilih. **Atur Ulang Tujuan** memulihkan pengaturan tujuan
bawaan.

### Pratinjau Keluaran

Menampilkan gambar hasil ekspor di samping karya, dengan keterangan **Karya** dan
**Keluaran**, serta peringatan jika ada warna di luar gamut keluaran. Mengubah
pengaturan apa pun akan menghapus pratinjau.

### Pilih Berkas…

Menanyakan lokasi penyimpanan gambar.

## Batasan format

- JPEG dan WebP hanya 8-bit.
- JPEG tidak dapat mempertahankan transparansi.
- WebP mendukung hingga 16384 piksel per sisi.
- Dengan profil keluaran skala abu-abu, WebP tidak tersedia.
- Dengan profil keluaran CMYK, hanya TIFF dan JPEG yang tersedia, tanpa transparansi.

Pilihan yang tidak cocok dengan pengaturan lain tampak redup.

## Prasetel ekspor

Setelah ekspor, tujuan bawaan menyimpan pengaturan yang Anda gunakan. Saat Anda
mengekspor dengan prasetel tersimpan, pengaturannya disimpan di **Khusus**, dan
prasetel itu sendiri hanya berubah melalui **Perbarui Prasetel**.

Nama prasetel terdiri dari paling banyak 80 karakter, dan Anda dapat menyimpan hingga
64 prasetel. Prasetel berlaku untuk semua gambar.

## Ekspor HDR

![Dialog Ekspor gambar untuk gambar HDR dengan HDR JPEG · peta penguatan, setelah Pratinjau Keluaran.](shot:files/export-hdr-preview)

Pada gambar pecahan mengambang 16-bit atau 32-bit, **Rentang dinamis** menyediakan
pilihan berikut:

| Pilihan | Menulis |
| --- | --- |
| **Hasil SDR** | Versi SDR gambar, dengan pengaturan SDR |
| **HDR JPEG · peta penguatan** | Berkas `.jpg` dengan peta penguatan |
| **HDR AVIF · peta penguatan dengan transparansi** | Berkas `.avif` dengan peta penguatan dan transparansi |
| **HDR PNG · BT.2020 PQ** | Berkas `.png` yang dienkode dalam BT.2020 PQ, dengan transparansi |
| **OpenEXR · pecahan mengambang 32-bit** | Berkas `.exr` dalam ruang warna gambar, dengan transparansi |

**Hasil SDR** memakai versi SDR yang diatur dengan
[Simulasi SDR](/id/docs/color-management/hdr/). OpenEXR tidak menyimpan data kamera
atau hak cipta. Pada gambar HDR, **Pengeditan lanjutan** bernama
**Pengeditan lanjutan (SDR)** dan memakai OpenEXR.

Untuk HDR JPEG dan HDR AVIF, **Pratinjau Keluaran** menambahkan **Pratinjau hasil**,
dengan **Rekonstruksi HDR · pratinjau SDR** dan **Dasar SDR terenkode**.

Jika pratinjau menemukan warna di luar rentang HDR PNG, JPEG, atau AVIF,
**Pilih Berkas…** tidak tersedia sampai Anda mengaktifkan
**Potong warna HDR di luar rentang** atau memilih OpenEXR.

## Ekspor Lagi

**Berkas > Ekspor Lagi** mengulangi ekspor terakhir gambar dengan pengaturan dan berkas
yang sama, tanpa dialog. Perintah ini tidak tersedia sampai Anda mengekspor gambar
satu kali.

Setiap gambar menyimpan ekspor terakhirnya sendiri, juga setelah aplikasi dimulai ulang.
Di Firefox dan Safari, **Ekspor Lagi** menampilkan dialog **Unduh berkas**.

## Platform lain

Di Linux, pengaturan dibagi ke halaman **Ukuran**, **Warna & transparansi**, dan
**Prasetel**, dan beberapa label berbeda. Dialog di iPad dan macOS juga memakai
labelnya sendiri.
