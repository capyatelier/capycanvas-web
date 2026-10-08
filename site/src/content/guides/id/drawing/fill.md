---
title: "Alat isi"
description: "Mengisi area, bentuk bebas, dan wilayah tertutup pada lapisan dengan warna saat ini."
related: ["drawing/gradient", "layers/settings", "selections/working", "drawing/brush-tools"]
---

Anda dapat mengisi bagian lapisan yang dipilih dengan warna saat ini menggunakan
**Isi**, **Isi laso**, dan **Lingkari dan Isi**. Setiap pengisian adalah satu langkah
urungkan, dan **Kunci alpha** tetap berlaku.

Pengisian hanya melukis karya pada lapisan, tidak pernah mask lapisan atau mask filter.
Pada lapisan yang tidak dapat dilukis kuas, pengisian tidak melukis apa pun dan sebuah
pemberitahuan menyebutkan alasannya ([Alat kuas](/id/docs/drawing/brush-tools/)).

## Memilih alat isi

Lakukan salah satu langkah berikut:

- Tekan **F** untuk memilih Isi. Dua alat lainnya tidak memiliki tombol bawaan.
- Di Lukis, pilih **Isi** di bilah alat Alat. Klik kanan atau tahan tombol itu untuk memilih alat isi lain.
- Di Foto, klik kanan atau tahan tombol gradasi dan isi setelah **Cairkan** di bilah alat Alat, lalu pilih alat.
- Saat alat isi aktif, pilih **Isi** atau **Isi laso** di panel **Set Alat**. **Lingkari dan Isi** tercantum di bawah **Isi laso**.
- Cari nama alat di pencarian perintah.

Sketsa tidak memiliki tombol isi.

## Isi

Anda dapat mengisi area bersambung yang warnanya mirip dengan mengekliknya. **Sumber**
menentukan piksel mana yang diperiksa Isi untuk menemukan area.

- Seleksi yang aktif membatasi pengisian di dalam seleksi.
- Di Mask Cepat atau pada lapisan seleksi, Isi mengisi mask seleksi ([Mask Cepat](/id/docs/selections/quick-mask/)).

## Isi laso

Anda dapat menggambar bentuk bebas dan mengisinya dengan warna saat ini. Seret garis
bentuk di kanvas, dan bentuk itu terisi saat Anda melepasnya.

Isi laso hanya memiliki pengaturan **Opasitas**. Alat ini tidak tersedia di Mask Cepat
atau pada lapisan seleksi.

## Lingkari dan Isi

Anda dapat mengisi setiap wilayah transparan yang tertutup di dalam lingkaran yang Anda
gambar. Lingkari dan Isi mencari wilayah itu di piksel **Sumber**.

- Tekan **Escape** saat menggambar untuk membatalkan lingkaran.
- Satu kali urungkan menghapus semua yang diisi oleh satu lingkaran.
- Seleksi yang aktif membatasi pengisian di dalam seleksi.
- Lingkari dan Isi tidak tersedia saat Anda mengedit mask seleksi atau mask lapisan.

## Sumber

Anda dapat memilih piksel mana yang diperiksa Isi dan Lingkari dan Isi untuk menemukan
area. Cat selalu masuk ke lapisan yang dipilih.

- **Karya terlihat**: semua yang terlihat di gambar.
- **Lapisan yang diedit**: hanya lapisan yang dipilih.
- **Lapisan acuan**: lapisan yang ditandai dengan **Gunakan sebagai acuan** ([Pengaturan lapisan](/id/docs/layers/settings/)).

Pilih sumber di daftar di bawah alat di **Set Alat** untuk Isi, atau di panel **Alat**
untuk Lingkari dan Isi. Bilah Opsi Alat memiliki menu **Sumber** untuk keduanya.

![Panel Set Alat dengan Isi dipilih dan pilihan Karya terlihat, Lapisan yang diedit, dan Lapisan acuan di bawahnya.](shot:drawing/fill-tool-set)

Setiap alat menyimpan sumbernya sendiri. Isi dimulai pada **Karya terlihat**, sedangkan
Lingkari dan Isi kembali ke **Lapisan acuan** setiap kali Anda membuka {appName}.

Jika Isi memakai **Lapisan acuan** dan tidak ada lapisan yang ditandai, Isi tidak
melukis apa pun dan sebuah pemberitahuan menawarkan untuk menandai lapisan di bawahnya.

## Pengaturan isi

![Panel Alat untuk Isi dengan Toleransi, grup Tepi, dan Opasitas.](shot:drawing/fill-settings)

Isi dan Lingkari dan Isi memakai pengaturan di bawah ini bersama-sama.
**Seleksi otomatis** dan **Seleksi berdasarkan warna** memakai nilai yang sama untuk
semua pengaturan kecuali **Opasitas**. Untuk mengatur ulang sebuah pengaturan, klik
ganda labelnya di bilah Opsi Alat ([Ukuran, opasitas, dan aliran cat](/id/docs/brushes/basics/)).

### Toleransi

Mengatur seberapa besar perbedaan warna yang masih dihitung sebagai bagian dari area
yang sama. Bawaannya 10%.

### Tutup celah

Menutup celah pada garis hingga lebar ini, dari 0 hingga 32 px, sebelum area dicari.
Lebar ini dalam piksel gambar, bukan piksel layar.

### Perluasan

Memperbesar area yang diisi sebanyak jumlah piksel ini, atau memperkecilnya dengan nilai
negatif, dari −32 hingga 32 px.

### Penghalusan tepi

Menghaluskan tepi bergerigi pada area yang diisi. Pada 0%, pengisian mempertahankan tepi
piksel yang tegas.

### Opasitas

Mengatur kekuatan pengisian. Mengubahnya akan mengubah **Opasitas** kuas saat ini, dan
sebaliknya. Di Sketsa, gunakan penggeser opasitas pada bilah di tepi kiri.

## Mengisi seleksi

Untuk mengisi seleksi dengan warna saat ini, pilih **Edit > Isi seleksi** atau tekan
**Shift+Backspace** ([Bekerja dengan seleksi](/id/docs/selections/working/)).
