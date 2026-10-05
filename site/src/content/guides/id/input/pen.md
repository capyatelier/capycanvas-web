---
title: "Pena"
description: "Pengaturan pena di Preferensi serta ketuk ganda dan remas pada Apple Pencil."
related: ["input/touch", "input/keyboard", "preferences", "brushes/basics"]
---

Pengaturan pena ada di halaman **Pena & Masukan** pada **Edit > Preferensi**.

![Halaman Pena & Masukan di Preferensi.](shot:pen/pen-and-input)

## Respons tekanan

Anda dapat mengubah cara pena merespons tekanan ringan dengan **Respons tekanan** di
bawah **Respons pena**. Nilai yang lebih rendah memperkuat tekanan ringan, dan nilai yang
lebih tinggi memerlukan tekanan yang lebih kuat. Rentangnya 0.25 × hingga 4.00 ×. Pada
nilai bawaan, 1.00 ×, tekanan pena dipakai tanpa perubahan.

Pengaturan ini berlaku untuk setiap kuas dan alat, termasuk **Lukis seleksi** dan
**Mask Cepat**. Goresan yang sudah Anda gambar tidak berubah.

## Prediksi goresan

Prediksi goresan menggambar sepotong pendek goresan di depan ujung pena, dan goresan
sebenarnya menggantikannya saat Anda menggambar. Pengaturannya ada di bawah
**Respons pena**:

- **Aktifkan prediksi goresan** mengaktifkan atau menonaktifkan kedua jenis prediksi.
- **Gunakan prediksi goresan *sistem***, misalnya **Gunakan prediksi goresan Windows**, memakai prediksi dari sistem atau peramban.
- **Jumlah prediksi** mengatur seberapa jauh Capy Canvas memprediksi dengan caranya sendiri, dari 0 hingga 64 ms.

Kedua sakelar aktif secara bawaan, dan **Jumlah prediksi** bernilai 16 ms. Selama
**Aktifkan prediksi goresan** nonaktif, dua pengaturan lainnya tidak tersedia.

| Sistem | Prediksi dari sistem |
| --- | --- |
| iPad | Tersedia |
| Windows | Tersedia jika Windows menyediakannya |
| Android | Android 14 dan yang lebih baru, dengan stylus yang didukung sistem |
| Web | Di peramban yang menyediakannya |
| macOS, Linux | Tidak pernah tersedia |

Jika prediksi dari sistem tidak tersedia, sakelarnya tidak tersedia dan
**Jumlah prediksi** yang mengatur prediksi. Selama prediksi dari sistem dipakai,
**Jumlah prediksi** tidak tersedia (disembunyikan di iPad).

Kursor mengikuti pena, bukan goresan yang diprediksi.

![Pengaturan Respons pena.](shot:pen/prediction)

## Bentuk kursor

Anda dapat memilih penunjuk yang tampil di atas kanvas dengan **Bentuk kursor** di bawah
**Penunjuk**.

| Pilihan | Menampilkan |
| --- | --- |
| **Ukuran kuas** | Garis tepi ujung kuas sesuai ukuran, bentuk, dan rotasinya (bawaan) |
| **Silang**, **Segitiga** | Tanda silang atau segitiga kecil |
| **Titik** | Tanda silang yang sangat kecil |
| **Titik satu piksel** | Satu piksel layar |
| **Bidikan** | Tanda silang dengan titik di tengahnya |
| **Alat** | Ikon alat, dengan titik kerjanya di posisi penunjuk |
| **Alat dan ukuran kuas**, **Ukuran kuas dan silang**, **Ukuran kuas dan titik**, **Ukuran kuas dan titik satu piksel** | Garis tepi kuas bersama tanda lainnya |
| **Tidak ada** | Tidak ada apa pun untuk pena pada layar. Tetikus, trackpad, atau tablet tanpa layar menampilkan **Bidikan**. |

Bentuk ini berlaku untuk alat lukis dan **Lukis seleksi**. Alat lain menampilkan ikonnya
jika bentuk tersebut mencakup **Alat**, dan tanda silang jika tidak.

![Daftar Bentuk kursor.](shot:pen/cursor-shapes)

## Sembunyikan kursor saat melukis

Jika **Sembunyikan kursor saat melukis** aktif (bawaan), kursor menghilang selama pena
menyentuh kanvas atau tombol tetikus ditekan dengan alat lukis. Garis tepi kuas tetap
terlihat saat Anda menghapus.

## Ujung penghapus

Anda dapat memilih fungsi ujung penghapus pada pena Anda. Grup **Ujung penghapus** tidak
ditampilkan di iPad.

- **Alat**: **Alat saat ini** (bawaan) mempertahankan alat yang sedang Anda pakai. **Penghapus**, **Pena**, **Pensil**, **Kuas Cat**, **Kuas Semprot Halus**, dan **Baurkan** beralih ke alat itu selama Anda memakai ujung penghapus, dan alat sebelumnya kembali setelahnya.
- **Lukis dengan transparansi**: jika aktif (bawaan), ujung penghapus menghapus dengan kuas alat itu. Jika nonaktif, ujung penghapus melukis. Sakelar ini disembunyikan selama **Alat** disetel ke **Penghapus**.

## Tombol pena

Anda dapat memberi tindakan pada setiap tombol samping pena, dan tindakan yang berbeda
untuk setiap jenis alat.

Untuk mengatur tombol pena:

1. Pilih tombol di bawah **Tombol pena**.
2. Pilih **Tindakan**, atau nonaktifkan **Sama untuk semua alat** lalu pilih jenis alat, seperti **Alat melukis**.
3. Pilih tindakan. **Tidak ada** mengosongkan tombol.

Alat, kuas, dan mode, seperti **Geser** atau **Ambil sampel warna**, aktif selama Anda
menahan tombol. Tindakan lain dijalankan sekali. Penekanan selama goresan berlaku setelah
goresan selesai.

Setiap tombol dimulai dengan **Tidak ada**. Tombol yang disetel ke **Tidak ada**
mempertahankan tindakan yang diberikan driver tablet atau sistem Anda.

| Sistem | Tombol yang tercantum |
| --- | --- |
| Linux | **Tombol samping bawah**, **Tombol samping atas**, **Tombol samping ketiga** |
| Windows | **Tombol samping bawah** |
| macOS, Android, web | **Tombol samping bawah**, **Tombol samping atas** |
| iPad | Tidak ada |

Di Linux dan Android, tombol pada pad tablet diatur sebagai tombol papan ketik di halaman
[Pintasan papan ketik](/id/docs/input/keyboard/).

![Halaman Tombol samping bawah, dengan tindakan untuk setiap jenis alat.](shot:pen/pen-button-page)

## Ketuk ganda dan remas Apple Pencil

Di iPad, ketuk ganda pada Apple Pencil dan remas pada Apple Pencil Pro mengikuti
pengaturan iPad sendiri di **Pengaturan > Apple Pencil**.

- "Switch between current tool and eraser" beralih ke **Penghapus** dan kembali.
- "Switch between current tool and last used" beralih ke alat yang Anda pilih sebelumnya.

Pilihan lainnya tidak melakukan apa pun di Capy Canvas. Remas bekerja saat Anda
melepaskannya. Saat Apple Pencil melayang di atas layar, kursor muncul.
