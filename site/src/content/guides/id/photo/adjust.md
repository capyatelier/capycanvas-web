---
title: "Menyesuaikan dan mengekspor"
description: "Tahap 3 tutorial pengeditan foto: penyesuaian nada dan warna di lapisan filter, serta ekspor JPEG."
related: ["filters/how-filters-apply", "filters/tone", "selections/working", "files/export"]
---

Tahap ini menghasilkan lapisan filter untuk nada dan warna di atas foto, serta JPEG
untuk web.

## 1. Tambahkan Kurva

Pilih *Retouch*. Filter yang Anda tambahkan dari menu **Filter** kemudian ditempatkan
tepat di atas *Retouch* dan mengubah *Retouch* maupun foto
([Cara filter diterapkan](/id/docs/filters/how-filters-apply/)).

Pilih **Filter > Nada > Kurva**. Lapisan **Kurva** muncul di atas *Retouch*, dan
pengaturannya terbuka di panel **Properti**. Pada kurva **RGB**, tambahkan titik di
area bayangan lalu seret ke bawah, kemudian tambahkan titik di area sorotan lalu
seret ke atas ([Filter Nada](/id/docs/filters/tone/)).

![Panel Properti dengan kurva RGB berbentuk S di Kurva.](shot:photo/adjust-curves)

## 2. Tambahkan Vibransi

Pilih **Filter > Warna > Vibransi**, lalu setel **Vibransi** ke 25 di panel
**Properti** ([Filter Warna](/id/docs/filters/color/)). Lapisan **Vibransi** muncul di
atas **Kurva**.

## 3. Seleksi batu

1. Tekan **M**, atau pilih **Seleksi laso** di bilah alat Alat, lalu gambar di sekeliling batu.
2. Pilih **Seleksi > Perhalus Tepi Seleksi…**, atau pilih **Perbaiki** di bilah seleksi lalu pilih **Perhalus Tepi…** ([Bekerja dengan seleksi](/id/docs/selections/working/)).
3. Setel **Feather radius** ke 20 px, lalu pilih **Terapkan**.

## 4. Angkat bayangan di batu

Mengangkat bayangan di seluruh foto akan mengubah latar belakang hitam menjadi
abu-abu. Contoh ini hanya mengangkat bayangan di batu.

Pilih **Sesuaikan** di bilah seleksi, lalu pilih **Nada > Bayangan/Sorotan**. Setel
**Bayangan** ke 35% di panel **Properti**.

![Bilah seleksi dengan menu Sesuaikan terbuka pada kategori Nada, di samping seleksi di sekeliling batu.](shot:photo/adjust-bar)

Seleksi menjadi mask lapisan **Bayangan/Sorotan** yang baru. Hanya batu yang berubah.

## 5. Simpan gambar

Pilih **Berkas > Simpan**, atau tekan **Ctrl+S**. Penyimpanan pertama foto yang dibuka
meminta folder dan nama, sama seperti **Simpan Sebagai…**. Berkas `.capy` menyimpan
foto asli, lapisan, mask, dan lapisan filter
([Membuka dan menyimpan](/id/docs/files/open-save/)).

## 6. Ekspor JPEG

1. Pilih **Berkas > Ekspor…**, atau tekan **Ctrl+Shift+E**.
2. Biarkan **Tujuan** tetap **Web / Bagikan**, lalu setel **Format** ke **Gambar JPEG**.
3. Setel **Ukuran piksel** ke **Sesuaikan dalam batas**, lalu biarkan **Lebar maksimum (px)** dan **Tinggi maksimum (px)** tetap 2048.
4. Pilih **Pilih Berkas…**, lalu pilih folder dan tentukan nama.

![Dialog Ekspor gambar dengan Web / Bagikan, Gambar JPEG, Kualitas 90, dan Sesuaikan dalam batas.](shot:photo/export-jpeg)

Mengekspor tidak mengubah gambar
([Mengekspor gambar](/id/docs/files/export/)).
