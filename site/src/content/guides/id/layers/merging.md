---
title: "Menggabungkan lapisan"
description: "Menggabungkan beberapa lapisan menjadi satu lapisan lukis dengan perintah gabung."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types"]
---

Anda dapat menggabungkan lapisan menjadi satu lapisan lukis. Perintah gabung ada di
dekat akhir menu **Lapisan** dan menu setiap lapisan.

![Menu Lapisan dengan Ribbon aktif, menampilkan Gabungkan Lapisan Terkliping, Gabungkan yang Terlihat, Cap yang Terlihat, dan Ratakan Gambar.](shot:layers/merging-menu)

Setiap penggabungan adalah satu langkah urungkan. [Lapisan foto](/id/docs/layers/types/)
kehilangan foto aslinya saat digabungkan. Anda tidak dapat menggabungkan lapisan
selama mengedit lapisan seleksi atau Mask Cepat, atau selama transformasi.

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

Pilih **Lapisan > Gabungkan yang Terlihat** untuk menggabungkan setiap lapisan yang
terlihat, termasuk **Kertas**, menjadi satu lapisan. Lapisan tersembunyi tetap
seperti semula.

Lapisan hasil gabungan mengambil nama dan posisi lapisan terlihat yang paling bawah
(**Kertas**, jika terlihat). Lapisan tersembunyi yang tadinya diklip ke lapisan yang
digabungkan akan dilepas. Lapisan yang terlihat harus tidak terkunci, dan grup di
antaranya tidak boleh berisi lapisan seleksi.

## Cap yang Terlihat

Pilih **Lapisan > Cap yang Terlihat** untuk menambahkan lapisan baru di posisi
teratas daftar yang berisi gabungan semua yang terlihat. Semua lapisan lain tetap
ada.

Lapisan baru itu bernama "Visible", menutupi kanvas, dan menjadi lapisan aktif.
Lapisan yang terkunci tidak menghalangi **Cap yang Terlihat**.

## Ratakan Gambar

Pilih **Lapisan > Ratakan Gambar** untuk menggabungkan setiap lapisan yang terlihat
menjadi satu lapisan. Lapisan tersembunyi dan piksel di luar kanvas dibuang, tetapi
lapisan seleksi di luar grup tetap ada. Lapisan yang terlihat harus tidak terkunci.

![Pemberitahuan di atas kanvas bertuliskan "Flattening discards 2 hidden layers", dengan tombol Flatten.](shot:layers/merging-flatten-notice)

Jika gambar memiliki lapisan tersembunyi, pemberitahuan di atas kanvas menyebutkan
jumlahnya, misalnya "Flattening discards 2 hidden layers". Tidak ada yang berubah
sampai Anda memilih **Flatten** di pemberitahuan itu.
