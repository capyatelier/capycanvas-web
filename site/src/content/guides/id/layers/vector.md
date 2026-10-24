---
title: "Lapisan vektor"
description: "Lapisan yang menyimpan jalur, bukan piksel, serta pena, bentuk, dan penghapus yang bekerja padanya."
related: ["layers/paths", "layers/types", "drawing/figure", "layers/merging"]
---

Lapisan vektor menyimpan jalur, bukan piksel. Anda dapat membentuk ulang jalurnya setelah menggambarnya ([Mengedit jalur](/id/docs/layers/paths/)).

## Membuat lapisan vektor

Lakukan salah satu langkah berikut:

- Pilih **Lapisan vektor baru** di bagian bawah panel Lapisan.
- Pilih **Lapisan > Baru > Lapisan vektor baru**.
- Tekan **Ctrl+Alt+Shift+N**.
- Ketik "line art" di [pencarian perintah](/id/docs/start/command-search/).

Lencana jalur menandai gambar mini lapisan vektor.

![Panel Lapisan dengan lapisan vektor Line art di atas Tinta saat ini dan Kertas, dengan lencana jalur pada gambar mininya.](shot:vector/layers-panel)

## Menggambar jalur

Anda dapat menggambar jalur dengan **Pena G**, yang lebarnya mengikuti tekanan pena, dan dengan **Monoline**, yang mempertahankan satu lebar. Setiap goresan menjadi satu jalur. Goresan yang dimulai di ujung terbuka jalur terpilih melanjutkan jalur itu.

Memilih lapisan vektor beralih ke pena terakhir yang menggambar jalur, pada awalnya Pena G. Memilih lapisan cat lagi mengembalikan kuas yang Anda pakai sebelumnya.

Pada lapisan vektor, **Set Alat** meredupkan kuas yang tidak dapat menggambar jalur. Pena berhenti menggambar jalur saat Anda menurunkan **Kekerasan** atau **Kekuatan**-nya.

![Pemberitahuan di atas kanvas untuk kuas yang tidak dapat menggambar jalur, dengan Gunakan Pena G, Lapisan Cat Baru, dan Rasterisasi Lapisan.](shot:vector/refusal-notice)

Goresan dengan kuas lain tidak melukis apa pun, dan sebuah pemberitahuan menyebutkan lapisannya. Tindakannya adalah **Gunakan Pena G**, **Lapisan Cat Baru** (menambahkan lapisan cat di atas), dan **Rasterisasi Lapisan**. Saat sebuah pengaturan menghentikan pena, **Atur Ulang** dengan nama pengaturan itu, misalnya **Atur Ulang Kekerasan**, menggantikan **Gunakan Pena G**.

## Bentuk

Dengan **Bentuk**, setiap **Garis**, **Persegi panjang**, **Elips**, **Poligon**, **Bintang**, dan **Jalur** menjadi jalur, terpilih dan di depan jalur lainnya. Lihat [Bentuk](/id/docs/drawing/figure/).

## Menghapus jalur

Anda dapat menghapus jalur dengan **Penghapus**, dengan **Cat transparan**, atau dengan ujung penghapus pada pena. Saat Penghapus aktif pada lapisan vektor, tiga mode muncul di atas kuas penghapus di **Set Alat**. Di Sketsa, ketiganya mengawali kolom **Alat** pada laci **Penghapus**.

![Panel Set Alat untuk Penghapus pada lapisan vektor, dengan Hapus bagian yang tersentuh, Hapus seluruh jalur, dan Hapus sampai perpotongan di atas kuas Penghapus.](shot:vector/eraser-modes)

- **Hapus bagian yang tersentuh** memotong jalur di tempat penghapus menyentuhnya dan membiarkan sisa jalur tidak berubah. Ini bawaannya.
- **Hapus seluruh jalur** menghapus setiap jalur yang disentuh penghapus.
- **Hapus sampai perpotongan** menghapus bagian jalur yang tersentuh hingga persilangan terdekat dengan jalur lain atau dengan dirinya sendiri. Jalur yang tidak bersilangan dengan apa pun dihapus seluruhnya.

Penghapusan tidak menghapus area terisi.

## Isi

**Isi** mewarnai jalur tertutup yang Anda klik, dan **Isi laso** menambahkan jalur terisi. Lihat [Alat isi](/id/docs/drawing/fill/).

## Rasterisasi Lapisan

Pilih **Lapisan > Rasterisasi Lapisan** untuk mengubah lapisan vektor menjadi lapisan cat yang memuat apa yang ditampilkan jalurnya.

## Penggabungan

**Gabungkan ke Bawah** mempertahankan jalur saat lapisan vektor digabung ke lapisan vektor lain. Setiap penggabungan lain mengubah jalur menjadi piksel setelah sebuah pemberitahuan. Lihat [Menggabungkan lapisan](/id/docs/layers/merging/).
