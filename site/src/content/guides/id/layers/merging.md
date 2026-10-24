---
title: "Menggabungkan lapisan"
description: "Menggabungkan beberapa lapisan menjadi satu lapisan dengan perintah gabung, dan apa yang terjadi pada lapisan vektor."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types", "layers/vector"]
---

Anda dapat menggabungkan lapisan menjadi satu lapisan lukis, atau dua lapisan vektor
menjadi satu lapisan vektor. Perintah gabung ada di dekat akhir menu **Lapisan** dan
menu setiap lapisan.

![Menu Lapisan dengan Ribbon aktif, menampilkan Gabungkan Lapisan Terkliping, Gabungkan yang Terlihat, Cap yang Terlihat, dan Ratakan Gambar.](shot:layers/merging-menu)

Setiap penggabungan merupakan satu langkah urung. [Lapisan Objek](/id/docs/layers/types/) dirasterisasi saat digabung. Anda tidak dapat menggabung saat menyunting lapisan seleksi atau Mask Cepat, atau selama transformasi.

## Gabungkan ke Bawah

Anda dapat menggabungkan lapisan aktif ke lapisan di bawahnya.

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Gabungkan ke Bawah**.
- Tekan **Ctrl+E** (tidak berlaku di peta tombol Gaya GIMP).

Lapisan hasil gabungan mengambil nama, posisi, kliping, dan **Kunci alpha** dari
lapisan bawah, dengan opasitas 100%, mode baur Normal, dan tanpa mask. Lapisan itu
menjadi acuan jika salah satu lapisan asalnya adalah acuan.

Kedua lapisan harus terlihat, tidak terkunci, dan disetel ke Normal. Lapisan di
bawah tidak boleh berupa filter, dan tidak boleh diklip kecuali lapisan aktif juga
diklip.

## Menggabungkan lapisan vektor

**Gabungkan ke Bawah** mempertahankan jalur saat [lapisan vektor](/id/docs/layers/vector/)
digabung ke lapisan vektor di bawahnya, dan menempatkannya di depan. Kedua lapisan
harus beropasitas 100%, tanpa mask, tanpa kliping, dan tanpa filter terlampir.

Setiap penggabungan lain yang menyertakan lapisan vektor mengubah jalurnya menjadi
piksel. Sebuah pemberitahuan menyebutkan lapisan itu, misalnya "Menggabungkan mengubah
jalur di “Line art” menjadi piksel.", dan penggabungan berjalan saat Anda memilih
tombolnya. **Ratakan Gambar** menambahkan nama-nama itu ke pemberitahuan lapisan
tersembunyinya.

![Pemberitahuan bertuliskan "Menggabungkan mengubah jalur di “Line art” menjadi piksel.", dengan tombol Gabungkan ke Bawah.](shot:vector/merge-notice)

## Gabungkan Lapisan Terkliping

Saat dasar kliping aktif, **Gabungkan ke Bawah** bertuliskan **Gabungkan Lapisan
Terkliping**. Perintah ini menggabungkan dasar dan lapisan terklip yang terlihat
menjadi satu lapisan yang dinamai sesuai dasarnya. Lapisan terklip yang tersembunyi
tetap diklip ke lapisan hasil gabungan.

Perintah ini juga bertuliskan **Gabungkan Lapisan Terkliping** untuk filter yang
diklip, atau filter yang dilampirkan ke lapisan yang diklip atau yang menjadi dasar
kliping. Dasarnya harus terlihat dan disetel ke Normal, dan setidaknya satu lapisan
terklip harus terlihat.

## Terapkan Efek ke Lapisan di Bawah

Saat filter aktif, **Gabungkan ke Bawah** bertuliskan **Terapkan Efek ke Lapisan di
Bawah**, kecuali jika filter itu bagian dari tumpukan kliping. Perintah ini
menerapkan filter ke lapisan di bawahnya, atau ke lapisan tempat filter itu
dilampirkan (lihat [Cara filter diterapkan](/id/docs/filters/how-filters-apply/)).

## Gabungkan Grup

Saat grup aktif, **Lapisan > Gabungkan Grup** menggantikan **Gabungkan ke Bawah**.

Grup menjadi satu lapisan dengan mode baur dan opasitas grup. Lewat Langsung
menjadi Normal. Mask grup diterapkan, dan lapisan tersembunyi di dalam grup dibuang.

Grup harus terlihat dan tidak terkunci, serta tidak boleh berisi lapisan seleksi.

## Gabungkan yang Terlihat

Pilih **Lapisan > Gabungkan yang Terlihat** untuk menggabungkan lapisan biasa yang terlihat. Kertas tetap menjadi lapisan Kertas terbawah. Lapisan tersembunyi tetap seperti semula.

Lapisan gabungan mengambil nama dan posisi lapisan paling bawah yang digabung. Lapisan tersembunyi yang diklip ke lapisan gabungan dilepaskan. Lapisan yang terlihat harus tidak terkunci, dan grup di antaranya tidak boleh berisi lapisan seleksi.

## Cap yang Terlihat

Pilih **Lapisan > Cap yang Terlihat** untuk menambahkan lapisan baru di posisi
teratas daftar yang berisi gabungan semua yang terlihat. Semua lapisan lain tetap
ada.

Lapisan baru itu bernama "Visible", menutupi kanvas, dan menjadi lapisan aktif.
Lapisan yang terkunci tidak menghalangi **Cap yang Terlihat**.

## Ratakan Gambar

Pilih **Lapisan > Ratakan Gambar** untuk menggabungkan lapisan biasa yang terlihat. Kertas tetap sebagai Kertas di bagian bawah. Lapisan tersembunyi dan piksel di luar kanvas dibuang, tetapi lapisan seleksi di luar grup tetap ada. Lapisan yang terlihat harus tidak terkunci.

![Pemberitahuan di atas kanvas bertuliskan "Meratakan gambar akan membuang 2 lapisan tersembunyi", dengan tombol Ratakan Gambar.](shot:layers/merging-flatten-notice)

Jika gambar memiliki lapisan tersembunyi, pemberitahuan di atas kanvas menyebutkan
jumlahnya, misalnya "Meratakan gambar akan membuang 2 lapisan tersembunyi". Tidak ada yang berubah
sampai Anda memilih **Ratakan Gambar** di pemberitahuan itu.
