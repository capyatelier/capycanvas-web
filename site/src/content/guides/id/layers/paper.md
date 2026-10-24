---
title: "Kertas"
description: "Warna dan tekstur Kertas, kertas impor, skala, pencahayaan, dan batasan lapisan."
related: ["layers/types", "layers/panel", "brushes/dry-media", "files/new"]
---

Kertas menyediakan warna latar gambar dan tekstur yang direspons kuas dengan **Kekuatan tekstur**.

## Baris Kertas

![Baris Kertas dengan gambar mini warna dan teksturnya.](shot:layers/paper-row)

Kertas tetap di bawah lapisan biasa. Gambar mini pertama membuka **Edit Warna** dan gambar mini teksturnya membuka **Pilih Tekstur**. Pilih baris untuk menyunting pengaturannya di **Properti**.

Anda dapat menyembunyikan atau menghapus Kertas. Jika gambar tidak memiliki Kertas, pilih **Tambah kertas** di bagian bawah panel Lapisan untuk memulihkannya.

![Tambahkan kertas di bawah daftar lapisan.](shot:layers/add-paper)

Hanya satu Kertas yang dapat ada dalam gambar. Kertas tidak dapat memiliki mask, menjadi lapisan kliping, dipindahkan di atas lapisan lain, atau digunakan sebagai lapisan seleksi.

## Memilih tekstur

Pilih gambar mini tekstur di baris Kertas, atau pilih **Pilih Tekstur** di **Properti**. Pilih kertas lalu pilih **Gunakan Tekstur**.

![Kertas bawaan di Pilih Tekstur.](shot:layers/paper-choose-texture)

Pustaka berupa satu kisi yang dapat digulir, diurutkan dari kertas cat air dan kertas gambar hingga tekstur permukaan seperti beton, kayu, dan pasir. Kertas dengan arah serat hadir berpasangan **mendatar** dan **tegak**.

**Impor…** menambahkan gambar, RGB atau skala abu-abu, ke akhir kisi sebagai tekstur kertas yang dapat digunakan kembali. Kertas impor disematkan dalam gambar.

Buka menu kertas impor untuk **Ubah Nama…** atau **Hapus**. Kertas yang disematkan dalam gambar tetapi tidak ada di pustaka memiliki **Tambahkan ke Pustaka** sebagai gantinya.

![Menu untuk kertas impor.](shot:layers/paper-imported-menu)

## Properti

![Kontrol Kertas di Properti.](shot:layers/paper-properties)

### Warna

Mengatur warna Kertas.

### Tekstur

Membuka **Pilih Tekstur**.

### Skala

Mengatur skala fisik tekstur, dari 25% hingga 400%. Kanvas menampilkan relief tekstur sebentar saat Anda mengubah skala.

### Visibilitas tekstur

Mengatur seberapa kuat pencahayaan tekstur terlihat pada gambar akhir, dari 0% hingga 300%. Pada 0%, pencahayaan tekstur mati.

### Cahaya

Mengatur arah cahaya pada tekstur kertas.

### Terlihat menembus cat

Mengatur seberapa banyak pencahayaan kertas tetap terlihat di atas cat. Pada 0%, cat Normal yang opak menutupi pencahayaan; pada 100%, pencahayaan memengaruhi seluruh gambar.

![Goresan di kanvas di samping panel Properti untuk Kertas, disetel ke Linen dengan Visibilitas tekstur 55%, Cahaya 130°, dan Terlihat menembus cat 100%.](shot:layers/paper-lighting)

Ekspor aplikasi native menyertakan pencahayaan kertas yang terlihat. Editor web saat ini mengekspor tanpa pencahayaan kertas. Pratinjau tekstur singkat setelah mengubah **Tekstur** atau **Skala** tidak diekspor.

## Goresan dan geometri

Goresan baru dari kuas dengan **Kekuatan tekstur** menggunakan Kertas terdekat pada atau di bawah lapisannya. Menyembunyikan Kertas tidak menghentikan teksturnya memengaruhi goresan baru. Mengubah tekstur atau skalanya tidak mengubah goresan yang sudah dibuat.

Kertas menggunakan resolusi cetak gambar untuk mempertahankan skala fisiknya. **Gambar > Ukuran Gambar…** dapat mengubah resolusi tersebut. Mengubah ukuran atau memutar gambar mengambil sampel ulang Kertas bersama gambar; pemotongan tidak mengubah skalanya.
