---
title: "Gambar baru"
description: "Dialog Gambar baru dan lapisan awal pada gambar baru."
related: ["color-management/color-spaces", "layers/types", "files/open-save"]
---

Anda dapat memulai gambar di dialog **Gambar baru**. Gambar baru terbuka di tabnya
sendiri, dan gambar saat ini tetap terbuka.

## Membuka dialog Gambar baru

Lakukan salah satu langkah berikut:

- Pilih **Berkas > Baru…**.
- Tekan **Ctrl+N** (tidak di editor web).
- Di Lukis dan Foto, pilih **Baru…** di bilah alat Perintah.

Pilih pengaturan di bawah, lalu pilih **Buat**.

**Baru…** tidak tersedia selama pemangkasan atau transformasi sedang terbuka. Jika data
gambar yang terbuka sudah terlalu banyak, gambar baru tidak terbuka sampai Anda menutup
beberapa gambar.

## Pengaturan

![Dialog Gambar baru dengan prasetel Gambar standar.](shot:files/new-dialog)

### Prasetel

Mengisi setiap kolom dari prasetel bawaan atau prasetel yang Anda simpan. Mengubah
kolom setelahnya mengalihkan **Prasetel** ke **Khusus**.

Setiap prasetel bawaan berukuran 2048 × 1536 piksel dengan latar belakang putih.

| Prasetel | Ruang warna | Kedalaman bit | Pembauran |
| --- | --- | --- | --- |
| **Gambar standar** | sRGB | SDR 8-bit | Perseptual |
| **Warna luas** | Display P3 | SDR 8-bit | Perseptual |
| **Pengeditan foto** | ProPhoto RGB | SDR 16-bit | Perseptual |
| **Gambar HDR** | sRGB | HDR pecahan mengambang 16-bit | Cahaya linear |

### Hapus prasetel tersimpan

Menghapus prasetel tersimpan yang dipilih. Prasetel bawaan tidak dapat dihapus.

### Lebar (px) dan Tinggi (px)

Dari 1 hingga 8192 piksel. Kolom ini menerima hitungan seperti "160*2".

### Ruang warna

**sRGB**, **Display P3**, **Adobe RGB (1998)**, atau **ProPhoto RGB** (lihat
[Ruang warna, kedalaman bit, dan pembauran](/id/docs/color-management/color-spaces/)).
Dengan **ProPhoto RGB** dan **SDR 8-bit**, dialog menyarankan SDR 16-bit.

### Kedalaman bit

**SDR 8-bit**, **SDR 16-bit**, **HDR pecahan mengambang 16-bit**, atau
**HDR pecahan mengambang 32-bit**. Kedalaman bit pecahan mengambang menghasilkan gambar
HDR.

### Pembauran

**Perseptual** atau **Cahaya linear**. Dengan kedalaman bit pecahan mengambang,
**Pembauran** tetap pada **Cahaya linear**.

### Latar belakang

**Putih** atau **Transparan**. **Transparan** menyembunyikan lapisan **Kertas**.

### Nama prasetel

Menyimpan pengaturan sebagai prasetel dengan nama ini saat Anda memilih **Buat**. Nama
terdiri dari paling banyak 64 karakter, dan Anda dapat menyimpan hingga 64 prasetel.

### Gunakan pengaturan ini untuk gambar baru

Jika aktif, dialog terbuka dengan pengaturan ini pada kesempatan berikutnya. Ruang
warna, kedalaman bit, dan latar belakang juga menjadi pengaturan **Gambar baru** di
[Preferensi](/id/docs/preferences/).

## Lapisan awal

![Panel Lapisan pada gambar baru, dengan Tinta saat ini di atas Kertas.](shot:files/new-layers)

Gambar baru memiliki dua lapisan. **Tinta saat ini**, lapisan lukis yang kosong,
terpilih di atas **Kertas**, lapisan isian putih (lihat [Jenis lapisan](/id/docs/layers/types/)).
Lapisan yang Anda tambahkan kemudian diberi nama "Lapisan" dan sebuah nomor.

## Platform lain

Di iPad, macOS, dan Android, kolom **Simpan Prasetel…** dan opsi **Gunakan Bawaan**
menggantikan **Nama prasetel** dan **Gunakan pengaturan ini untuk gambar baru**. iPad
dan macOS tidak memiliki tombol **Hapus prasetel tersimpan**.

Di Linux, **Simpan Prasetel…** membuka dialog terpisah untuk nama, sedangkan
**Ruang warna**, **Kedalaman bit**, dan **Pembauran** dikelompokkan di bawah **Warna**.
