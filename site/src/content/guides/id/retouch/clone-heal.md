---
title: "Klon dan pulihkan"
description: "Stempel Klon dan kuas pemulih, serta sumber tempat alat-alat itu menyalin."
related: ["retouch/dodge-burn", "layers/settings", "brushes/basics", "photo/retouch"]
---

Anda dapat menutupi cacat dengan piksel yang disalin dari bagian lain gambar.

| Alat | Fungsi |
| --- | --- |
| **Stempel Klon** | Melukis dengan piksel yang disalin dari cakram sumber. |
| **Kuas Pemulih** | Melukis seperti **Stempel Klon**. Saat Anda mengangkat pena, salinan menyesuaikan warna dan kecerahan di sekitar goresan dengan tetap mempertahankan teksturnya. |
| **Kuas Pemulih Noda** | Saat Anda mengangkat pena, mengganti noda yang Anda lukis dengan tekstur dari area terdekat yang paling mirip, dibaurkan dengan sekelilingnya. |

## Memilih alat retus

Lakukan salah satu langkah berikut:

- Tekan **S**. Tekan sekali lagi untuk beralih ke **Kuas Pemulih**, lalu **Kuas Pemulih Noda**.
- Di Foto, pilih **Stempel Klon** atau **Kuas Pemulih Noda / Kuas Pemulih** di bilah alat Alat.
- Di Lukis, pilih **Baurkan / Stempel Klon** di bilah alat Alat. Klik kanan atau tahan tombol itu untuk memilih **Stempel Klon**.
- Di Sketsa, pilih **Pahat** di bilah judul, pilih sekali lagi untuk membuka laci, lalu pilih **Klon**, **Pulihkan**, atau **Pulihkan noda**.
- Ketik nama alat di [pencarian perintah](/id/docs/start/command-search/).

**Kuas Pemulih** dan **Kuas Pemulih Noda** tidak memiliki tombol di Lukis.

Setiap alat adalah kuas, dengan **Ukuran kuas**, **Opasitas**, **Aliran cat**, dan
pengaturan **Ujung** di panel Alat (lihat [Ukuran, opasitas, dan aliran cat](/id/docs/brushes/basics/)).

![Panel Alat untuk Stempel Klon, dengan pengaturan kuas dan pengaturan sumber.](shot:retouch/clone-tool-panel)

## Sumber

**Sumber** di panel Alat menentukan apa yang disalin alat:

- **Lapisan acuan** (bawaan) menyalin lapisan yang Anda lukis beserta lapisan di bawahnya yang ditandai sebagai acuan.
- **Lapisan yang diedit** hanya menyalin lapisan yang Anda lukis.

Dengan **Lapisan acuan**, Anda dapat meretus di lapisan kosong di atas foto. Tandai
foto dengan [Gunakan sebagai acuan](/id/docs/layers/settings/), atau pilih
**Lapisan > Pengaturan Lapisan > Gunakan lapisan di bawah sebagai acuan**. Jika Anda
melukis di lapisan kosong dan belum ada acuan di bawahnya yang ditandai, pesan yang
muncul menawarkan **Gunakan *nama* sebagai acuan**.

Lapisan yang diskalakan atau diputar tidak dapat diretus secara langsung. Retus di
lapisan baru di atas lapisan yang diskalakan atau diputar itu.

## Menyetel sumber

**Stempel Klon** dan **Kuas Pemulih** menyalin dari cakram sumber, yaitu cincin kecil
dengan tanda silang.

Lakukan salah satu langkah berikut:

- Tahan **Alt** lalu klik tempat yang ingin Anda salin.
- Pilih **Atur Sumber**, lalu klik.

Sampai Anda menyetelnya, sumber berada di tengah tampilan. Seret cakram untuk
memindahkan sumber. Jari dapat menyeret cakram, tetapi tidak pernah menyetel sumber.
Selama Anda melukis, cakram mengikuti titik yang sedang disalin.

**Kuas Pemulih Noda** mencari sumbernya sendiri dan tidak memiliki cakram.

## Pengaturan sumber

Pengaturan ini berlaku untuk **Stempel Klon** dan **Kuas Pemulih**.

### Sumber Selaras

Menjaga offset yang sama antara sumber dan kuas di semua goresan. Jika
nonaktif, setiap goresan mulai menyalin dari cakram sumber. Aktif secara bawaan.

### Balik Sumber secara Horizontal dan Balik Sumber secara Vertikal

Mencerminkan piksel yang disalin terhadap cakram sumber.

### Atur Ulang Offset Sumber

Membuat goresan berikutnya kembali mulai menyalin dari cakram sumber. Tersedia setelah
goresan yang selaras.

### Atur Sumber

Klik berikutnya menyetel sumber.

## Bilah kanvas untuk cakram sumber

Klik cakram sumber tanpa menyeret untuk menampilkan
[bilah kanvas](/id/docs/selections/working/) di sampingnya, dengan **Selaras**,
**Sumber**, kedua tombol balik, **Atur Ulang Offset**, dan **Atur Sumber**. Klik cakram
sekali lagi, atau pilih alat lain, untuk menyembunyikan bilah itu.

![Cakram sumber dengan bilah kanvasnya.](shot:retouch/clone-source-bar)
