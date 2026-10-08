---
title: "Pencarian perintah"
description: "Menemukan dan menjalankan perintah, alat, kuas, dan pengaturan dengan mengetik namanya."
related: ["input/keyboard", "start/undo", "customize/toolbars"]
---

Anda dapat menemukan dan menjalankan perintah, alat, kuas, properti lapisan, ruang
kerja, dan warna dengan mengetik namanya.

## Membuka pencarian perintah

Lakukan salah satu langkah berikut:

- Pilih **Edit > Cari Perintah…**.
- Tekan **Ctrl+K** atau **Ctrl+Shift+P**. Di editor web, hanya **Ctrl+K** yang berfungsi.
- Jika Anda menambahkan pencarian perintah ke bilah alat, pilih tombolnya (lihat [Bilah alat dan bilah judul](/id/docs/customize/toolbars/)).

Prasetel pemetaan tombol lain memakai tombol lain (lihat [Pintasan papan ketik](/id/docs/input/keyboard/)).
Tombol-tombol ini juga berfungsi saat Anda sedang mengetik di kolom teks.

Kotak pencarian terbuka di dekat bagian atas jendela dengan kolom yang kosong.

Pencarian perintah tidak tersedia selama goresan berlangsung, saat **Preferensi**
terbuka, atau saat Anda menyesuaikan bilah judul.

## Saran

![Pencarian perintah dengan kolom kosong, berisi Urungkan, Sesuaikan kanvas, Simpan, Preferensi, dan Pintasan Papan Ketik.](shot:start/command-search-suggestions)

Saat kolom kosong, daftar menampilkan hingga lima entri: entri yang terakhir Anda
jalankan dari pencarian, lalu **Urungkan**, **Sesuaikan kanvas**, **Simpan**,
**Preferensi**, dan **Pintasan Papan Ketik**. Entri yang tidak dapat dijalankan saat
itu tidak ditampilkan.

Hanya entri yang Anda jalankan dari pencarian yang terhitung sebagai entri terbaru.
Daftar entri terbaru dikosongkan saat Anda keluar dari {appName}.

## Mencari

Ketik sebagian nama. Daftar menampilkan hingga delapan hasil, dengan nama yang sama
persis di urutan teratas.

- Huruf besar dan huruf kecil dianggap sama. Tanda aksen harus sama.
- Huruf yang berurutan juga cocok: "ssuai knvs" menemukan **Sesuaikan kanvas**.
- Nama dalam bahasa Inggris cocok di setiap bahasa aplikasi.
- Beberapa entri cocok dengan kata lain: "pengaturan" menemukan **Preferensi**, "sampel" menemukan **Pipet Warna**, dan "ubah ukuran" menemukan **Transformasi**.
- Mengetik "brush" atau "brushes" tidak menampilkan kuas satu per satu.

Jika tidak ada yang cocok, daftar menampilkan "Tidak ada perintah yang cocok".

## Yang dapat ditemukan

- Setiap item di menu.
- Setiap alat, dan setiap varian alat, seperti **Penggaris › Radial**.
- Setiap kuas, dan setiap set kuas sebagai "Kuas *set*".
- Pengaturan alat saat ini, seperti **Ukuran kuas…**.
- Properti lapisan yang dipilih, seperti **Opasitas lapisan…**.
- Setiap ruang kerja.
- **Warna latar depan**, **Warna latar belakang**, **Cat transparan**, **Warna sementara**, **Tukar latar depan dan latar belakang**, **Hitam**, dan **Putih**.
- Setiap panel dan bilah alat di menu **Jendela**.

## Hasil

![Pencarian perintah dengan kueri "undo", baris Urungkan diredupkan, dan "Tidak ada yang dapat diurungkan" di bagian bawah.](shot:start/command-search-unavailable)

Setiap baris menampilkan nama dan, di sebelah kanan, tombol pintasannya. Tanda centang
menandai pengaturan yang sedang aktif dan ruang kerja saat ini.

Baris di bagian bawah kotak menjelaskan entri yang disorot dengan teks bantuannya,
lokasi menunya, atau rentang nilainya. Entri yang tidak dapat dijalankan saat itu
tampak redup, dan baris bawah menyebutkan alasannya, misalnya "Tidak ada yang dapat
diurungkan".

## Menjalankan hasil

Lakukan salah satu langkah berikut:

- Tekan **↑** atau **↓** untuk menyorot baris, lalu tekan **Enter**.
- Pilih sebuah baris.

Pencarian tertutup dan entri dijalankan. Jika entri tidak dapat dijalankan, pencarian
tetap terbuka dan menampilkan alasannya.

## Mengetik nilai

![Pencarian perintah yang meminta nilai untuk Ukuran kuas…, dengan satuan px serta nilai saat ini dan rentangnya di bagian bawah.](shot:start/command-search-typed-value)

Entri untuk pengaturan berupa angka, seperti **Ukuran kuas…** dan **Opasitas lapisan…**,
meminta sebuah nilai. Baris bawah menampilkan nilai saat ini dan rentangnya.

Untuk menetapkan nilai:

1. Pilih entri, atau sorot entri lalu tekan **Enter**.
2. Ketik nilai lalu tekan **Enter**.

Anda dapat mengetik hitungan, seperti "12 * 2" atau "sqrt(9)", dan persentase seperti
"50%". Nilai di luar rentang diubah ke batas terdekat. Tekan **Esc** untuk kembali ke
hasil.

## Urungkan dari kolom teks atau palet

Jika Anda membuka pencarian perintah dari kolom teks, **Urungkan** dan **Ulangi**
menjadi **Urungkan Edit Teks** dan **Ulangi Edit Teks**. Keduanya tidak dapat
dijalankan dari pencarian. Untuk mengurungkan ketikan di kolom, tutup pencarian
terlebih dahulu.

Jika dibuka dari panel **Palet**, pencarian menampilkan **Urungkan Perubahan Urutan Warna**
dan **Ulangi Perubahan Urutan Warna** sebagai gantinya. Keduanya mengurungkan perubahan
urutan warna di palet, bukan perubahan pada gambar.

## Menutup pencarian perintah

Lakukan salah satu langkah berikut:

- Tekan **Esc**.
- Pilih **×** di sebelah kanan kolom.
- Klik atau ketuk di luar kotak.

Klik di luar kotak tidak melukis di kanvas.
