---
title: "Mengedit jalur"
description: "Memilih, memindahkan, membentuk ulang, dan mengubah gaya jalur pada lapisan vektor."
related: ["layers/vector", "drawing/figure", "transform/move-transform", "layers/types"]
---

Anda dapat mengedit jalur pada [lapisan vektor](/id/docs/layers/vector/) setelah menggambarnya.

## Memilih dan memindahkan jalur

Pilih jalur dengan alat **Operasi** ([Pemindahan dan transformasi](/id/docs/transform/move-transform/)). Tahan **Shift** untuk menambah atau menghapus jalur. Seret di kanvas kosong untuk memilih jalur yang sepenuhnya tercakup bingkai seleksi, atau tekan **Ctrl+A** untuk memilih setiap jalur.

![Panel Alat untuk Operasi dengan sebuah jalur terpilih, memuat tombol Atur, tombol balik dan putar, serta Skalakan lebar garis tepi.](shot:vector/operation-settings)

Bingkai putus-putus dengan pegangan mengelilingi seleksi.

- Seret jalur terpilih untuk memindahkannya. Tahan **Alt** untuk memindahkan salinan.
- Seret pegangan untuk menskalakan, atau pegangan di atas bingkai untuk memutar. **Shift** mempertahankan proporsi atau memutar dengan kelipatan 15°.
- Tombol panah menggeser sejauh 1 px, dan 10 px dengan **Shift**.
- Tombol balik dan putar di panel **Alat** membalik atau memutar seleksi terhadap pusatnya.
- **Delete** menghapus jalur terpilih.

**Skalakan lebar garis tepi** di panel **Alat** aktif secara bawaan. Nonaktifkan untuk menskalakan jalur dan mempertahankan lebar garis tepinya.

## Edit titik

Anda dapat memindahkan, menambah, dan menghapus titik pada jalur terpilih.

Lakukan salah satu langkah berikut:

- Tekan **A**.
- Dengan **Operasi**, tekan **Enter** atau klik ganda sebuah jalur.
- Di Lukis dan Foto, klik kanan atau tahan **Operasi / Transformasi / Edit titik** di bilah alat Alat dan pilih **Edit titik**.

Kotak kecil menandai titik, dan titik terpilih menampilkan pegangannya. Tekan **Escape** untuk kembali ke **Operasi**.

![Edit titik pada sebuah jalur, dengan titik dan pegangannya terpilih.](shot:vector/edit-points)

- Klik sebuah titik untuk memilihnya, klik dengan **Shift** untuk menambah atau menghapus titik, atau seret di kanvas kosong untuk memilih titik di dalamnya.
- Seret titik untuk memindahkannya. Seret pegangan untuk memutar kurva, atau tahan **Alt** untuk menggerakkannya terpisah dari pasangannya.
- Seret segmen untuk membengkokkannya. Klik segmen untuk menambahkan titik.
- Klik ganda sebuah titik untuk mengalihkannya antara sudut dan mulus.
- **Delete** menghapus titik terpilih.

Mengedit sebuah titik mengubah persegi panjang atau elips menjadi jalur biasa.

## Perintah jalur

Anda dapat menggabungkan, menutup, memisahkan, membalik, dan menyatukan jalur terpilih dengan **Edit > Jalur**. Panel **Alat** untuk **Edit titik** memuat empat yang pertama.

- **Gabungkan jalur** menghubungkan ujung terdekat dua jalur terbuka, atau menutup satu jalur terbuka.
- **Tutup jalur** menghubungkan ujung setiap jalur terbuka yang dipilih.
- **Pisah di titik** memotong jalur terpilih pada titik terpilih.
- **Balik arah** menjalankan setiap jalur ke arah sebaliknya.
- **Buat jalur gabungan** menyatukan jalur terpilih menjadi satu dengan lubang di tempat jalur-jalur itu tumpang tindih. **Lepas jalur gabungan** memisahkannya lagi.

Perintah yang tidak dapat dijalankan memberi tahu apa yang harus dipilih, misalnya "Pilih satu atau dua jalur terbuka untuk digabungkan".

## Atur

Anda dapat mengubah urutan tumpukan jalur terpilih di dalam lapisannya dengan **Edit > Atur**: **Bawa ke depan**, **Majukan**, **Mundurkan**, dan **Kirim ke belakang**. Panel **Alat** untuk **Operasi** memiliki tombol yang sama.

## Pengaturan jalur

Saat jalur dipilih, **Properti** menampilkan jalur terpilih yang paling depan. Label berakhir dengan "(campuran)" jika jalur terpilih berbeda, dan perubahan berlaku untuk setiap jalur terpilih.

![Panel Properti untuk jalur dengan isian dan garis tepi.](shot:vector/path-properties)

### Isian

Mengaktifkan atau menonaktifkan isian. Isian baru memakai warna latar belakang.

### Warna isian

Mengatur warna isian.

### Tumpang tindih

Mengatur cara bagian yang tumpang tindih terisi. **Terisi** mengisinya, dan **Lubang** membiarkannya kosong. Ditampilkan saat **Isian** aktif.

### Garis tepi

Mengaktifkan atau menonaktifkan garis tepi. Garis tepi baru memakai warna latar depan.

### Warna garis tepi

Mengatur warna garis tepi.

### Lebar garis tepi

Mengatur lebar garis tepi, dari 0.1 hingga 4096 px.

### Ujung garis

Mengatur bentuk ujung terbuka: **Datar**, **Bulat**, atau **Persegi**.

### Sudut

Mengatur bentuk garis tepi pada sudut: **Tajam**, **Bulat**, atau **Terpotong**.

### Batas sudut tajam

Mengatur seberapa panjang sudut tajam dapat tumbuh, dari 1 hingga 20. Melewati batas, sudut dipotong. Ditampilkan saat **Sudut** adalah **Tajam**.
