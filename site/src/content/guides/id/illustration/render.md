---
title: "Rendering"
description: "Tahap 4 tutorial ilustrasi: shading dan tekstur di lapisan yang diklip ke setiap warna dasar, serta ekspor PNG."
related: ["layers/settings", "drawing/brush-tools", "files/open-save", "files/export"]
---

Tahap ini menghasilkan shading setiap bentuk, di lapisan yang diklip ke warna
dasarnya, serta ekspor PNG studi tersebut.

## 1. Tambahkan lapisan kliping

Pilih *Ribbon*, lalu pilih **Lapisan > Baru > Lapisan kliping baru**, atau pilih
**Baru > Lapisan kliping baru** dari menu baris itu
([Pengaturan lapisan](/id/docs/layers/settings/)). Ganti nama lapisan baru menjadi
*Ribbon shading*.

![Menu lapisan dengan Baru terbuka dan Lapisan kliping baru di dalamnya.](shot:illustration/render-new-menu)

*Ribbon shading* muncul tepat di atas *Ribbon*, dan rel di sebelah kiri gambar mini
menandai kliping. Kliping mengikuti mask *Ribbon*, bukan warna hijau toska yang
mengisi seluruh lapisan.

## 2. Beri shading pada pita

Pilih **Kuas Cat** di bilah alat Alat dan **Sapuan Cat Air** di Set Alat
([Alat kuas](/id/docs/drawing/brush-tools/)). Setel **Opasitas** di panel **Alat**
ke 65%, lalu lukis bayangan di lekukan pita dengan warna biru tua. Kemudian tambahkan
aksen hijau sage dengan kuas **Kuas Cat**.

## 3. Tambahkan lapisan tekstur

Dengan *Ribbon shading* terpilih, pilih **Lapisan > Baru > Lapisan kliping baru**
sekali lagi, lalu ganti nama lapisan menjadi *Ribbon texture*. Lapisan ini ditempatkan
di atas *Ribbon shading*, dalam kliping yang sama. Pilih **Pensil** dan kuas
**Pensil**, lalu gambar arsiran dan sorotan berwarna krem.

## 4. Beri shading pada cakram dan balok

Pilih *Disc*, tambahkan lapisan kliping bernama *Disc shading*, lalu beri shading
pada separuh bawah cakram dengan **Kuas Semprot Halus** berwarna terakota. Tambahkan
sorotan krem di kiri atas.

*Block shading* ditempatkan pada *Block* dengan cara yang sama: biru tua di
sepanjang tepi kanan dan bawah dengan kuas **Kuas Cat**, lalu arsiran krem dengan
kuas **Pensil**.

![Panel Lapisan dengan Ribbon texture dan Ribbon shading yang diklip ke Ribbon, serta Disc shading dan Block shading yang diklip ke dasarnya masing-masing.](shot:illustration/render-layers)

Daftar lapisan sama dengan lapisan akhir di [pengantar](/id/docs/illustration/).

## 5. Simpan dan ekspor

Pilih **Berkas > Simpan**, atau tekan **Ctrl+S**, lalu simpan gambar sebagai berkas
`.capy` ([Membuka dan menyimpan](/id/docs/files/open-save/)). Untuk mengekspor PNG:

1. Pilih **Berkas > Ekspor…**, atau tekan **Ctrl+Shift+E**.
2. Biarkan **Tujuan** tetap **Web / Bagikan**, lalu setel **Format** ke **Gambar PNG**.
3. Pilih **Pilih Berkas…**, lalu pilih folder dan tentukan nama.

Setelah ekspor pertama, **Berkas > Ekspor Lagi** menulis berkas yang sama dengan
pengaturan yang sama, tanpa dialog ([Mengekspor gambar](/id/docs/files/export/)).
