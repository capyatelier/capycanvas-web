---
title: "Alat seleksi"
description: "Alat-alat seleksi dan pengaturannya di panel Alat."
related: ["selections/working", "selections/tonal-range", "selections/quick-mask", "customize/toolbars"]
---

Anda dapat menyeleksi bagian gambar dengan alat seleksi. Pengaturan alat ada di
panel Alat, dan di Foto juga ada di bilah Opsi Alat di bagian atas jendela.

| Alat | Yang diseleksi | Tombol |
| --- | --- | --- |
| **Seleksi persegi panjang** | Persegi panjang yang Anda seret | |
| **Seleksi elips** | Elips yang Anda seret | |
| **Seleksi laso** | Bentuk yang Anda gambar bebas | **M** |
| **Laso poligon** | Bentuk yang Anda klik sudut demi sudut | |
| **Seleksi otomatis** | Area tersambung dengan warna serupa | **W** |
| **Seleksi berdasarkan warna** | Setiap piksel dengan warna serupa, tersambung atau tidak | |
| **Lukis seleksi** | Area yang Anda lukis | |
| **Rentang nada** | Piksel dalam satu pita kecerahan (lihat [Seleksi berdasarkan kecerahan](/id/docs/selections/tonal-range/)) | |

## Memilih alat seleksi

Lakukan salah satu langkah berikut:

- Ketik nama alat di [pencarian perintah](/id/docs/start/command-search/).
- Tekan **M** untuk **Seleksi laso** atau **W** untuk **Seleksi otomatis**.
- Di Lukis, pilih **Seleksi** atau **Seleksi otomatis / Seleksi berdasarkan warna** di bilah alat Alat.
- Di Foto, pilih **Seleksi persegi panjang / Seleksi elips**, **Seleksi laso / Laso poligon**, **Seleksi otomatis / Seleksi berdasarkan warna**, atau **Lukis seleksi** di bilah alat Alat.
- Di Sketsa, pilih **Seleksi** di bilah judul. Pilih sekali lagi untuk membuka laci berisi semua alat seleksi di samping panel Alat.

Tombol bilah alat yang memuat beberapa alat menampilkan alat yang terakhir Anda
pakai. Untuk memilih alat lain, klik kanan atau tahan tombol itu, atau pilih alat di
panel **Set Alat**. **Seleksi** di bilah judul Sketsa kembali ke alat seleksi yang
terakhir Anda pakai.

**Rentang nada** tidak memiliki tombol di bilah alat Lukis atau Foto.

Memilih alat seleksi di Mask Cepat, atau selama Anda mengedit lapisan seleksi, tetap
mempertahankan mode tersebut.

![Laci Seleksi di Sketsa, dengan alat-alat seleksi di samping panel Alat untuk Seleksi persegi panjang.](shot:selections/tools-sketch-select-drawer)

## Mode

Anda dapat menggabungkan area berikutnya yang Anda seleksi dengan seleksi saat ini.

Pilih **Seleksi baru**, **Tambah ke seleksi**, **Kurangi dari seleksi**, atau
**Irisan dengan seleksi** di baris **Mode** pada panel Alat. **Seleksi baru** adalah
bawaannya.

Untuk mengubah mode bagi satu seleksi, tahan tombol saat Anda memulainya:

- **Shift**: **Tambah ke seleksi**
- **Alt**: **Kurangi dari seleksi**
- **Shift+Alt**: **Irisan dengan seleksi**
- **Ctrl**: **Seleksi baru**

Selama Anda menahan tombol, baris **Mode** menampilkan mode yang dipilihnya. **Lukis
seleksi** hanya memiliki **Tambah ke seleksi** dan **Kurangi dari seleksi**.

## Penghalusan tepi dan Radius perhalusan tepi

**Penghalusan tepi** aktif secara bawaan. **Radius perhalusan tepi** melembutkan tepi
setiap seleksi baru hingga 100 px, dan dimulai dari 0.

**Lukis seleksi** tidak memiliki kedua pengaturan itu. **Rentang nada** memiliki
**Perhalus tepi** tanpa **Penghalusan tepi**.

## Seleksi persegi panjang dan Seleksi elips

Seret dari satu sudut ke sudut seberangnya. Setelah mulai menyeret, tahan **Shift**
untuk persegi atau lingkaran, atau **Alt** untuk menggambar dari titik tengah.

- **Rasio aspek tetap** menjaga seleksi pada rasio yang disetel di **Lebar rasio** dan **Tinggi rasio**, 1 : 1 secara bawaan.
- **Ukuran tetap** menggambar seleksi dengan **Lebar** dan **Tinggi** yang Anda setel, dalam piksel. Bawaannya 256 × 256.
- **Gambar dari tengah** menempatkan titik tengah seleksi di tempat Anda mulai menyeret.

Mengaktifkan **Rasio aspek tetap** menonaktifkan **Ukuran tetap**, begitu pula
sebaliknya. Klik tanpa menyeret membiarkan seleksi seperti semula.

## Seleksi laso

Gambar di sekeliling area. Saat Anda mengangkat pena atau melepas tombol tetikus,
bentuk tertutup itu menjadi seleksi.

## Laso poligon

Klik setiap sudut bentuk. Untuk menyelesaikan, lakukan salah satu langkah berikut:

- Klik sudut pertama sekali lagi.
- Tekan **Enter**.
- Pilih **Selesai** di bilah kanvas, atau **Selesaikan seleksi** di panel Alat.

Poligon memerlukan sedikitnya tiga sudut.

- Untuk menghapus sudut terakhir, tekan **Backspace** atau **Delete**, atau pilih **Hapus Titik** di bilah kanvas atau **Hapus titik terakhir** di panel Alat.
- Untuk membatalkan poligon, tekan **Escape**, atau pilih **Batal** di bilah kanvas atau **Batalkan seleksi** di panel Alat.
- Untuk mengepaskan tepi berikutnya ke kelipatan 45°, tahan **Shift**. Untuk mengepaskan setiap tepi, aktifkan **Batasi tepi ke 45°** di panel Alat.

Selama Anda menempatkan sudut, [bilah kanvas](/id/docs/selections/working/) di
bagian bawah kanvas menampilkan **Hapus Titik**, **Batal**, dan **Selesai**.

![Bilah kanvas untuk poligon, dengan Hapus Titik, Batal, dan Selesai.](shot:selections/tools-polygon-bar)

## Seleksi otomatis dan Seleksi berdasarkan warna

Klik sebuah warna di kanvas. **Seleksi otomatis** mengambil area tersambung di
sekitar titik itu, dan **Seleksi berdasarkan warna** mengambil piksel yang cocok di
mana pun dalam gambar.

![Panel Alat untuk Seleksi otomatis, dengan Mode, Penghalusan tepi, Sumber, Toleransi, pengaturan Tepi, dan Radius perhalusan tepi.](shot:selections/tools-auto-select-settings)

### Sumber

Menentukan tempat alat mencari warna: **Karya terlihat** (bawaan),
**Lapisan yang diedit**, atau **Lapisan acuan**, yaitu lapisan yang ditandai dengan
[Gunakan sebagai acuan](/id/docs/layers/settings/).

### Toleransi

Menentukan seberapa jauh sebuah warna boleh berbeda dari warna yang Anda klik dan
tetap terseleksi. Bawaannya 10%.

### Tutup celah

Menutup celah hingga selebar nilai ini pada tepi di sekeliling area, dari 0 hingga
32 px. Hanya untuk **Seleksi otomatis**.

### Perluasan

Memperbesar seleksi hingga 32 px, atau memperkecilnya dengan nilai negatif.

### Penghalusan tepi

Melembutkan tepi seleksi yang bergerigi. Pada 0%, tepi mengikuti piksel utuh.
Disembunyikan selama **Penghalusan tepi** (anti-aliasing) dinonaktifkan.

**Seleksi otomatis** dan **Seleksi berdasarkan warna** memakai satu pengaturan
**Sumber** yang sama, serta memakai **Toleransi** dan pengaturan **Tepi** yang sama
dengan [alat isi](/id/docs/drawing/fill/).

## Lukis seleksi

Lukis di atas area dengan kuas bulat. Lingkaran tertutup yang Anda lukis akan terisi.

- **Tambah ke seleksi** atau **Kurangi dari seleksi** menentukan fungsi kuas.
- **Tekanan mengatur ukuran** nonaktif secara bawaan.
- **Ukuran**, **Kekerasan**, dan **Opasitas** menyetel kuas bulat.

Tahan **Shift** saat melukis untuk menambah, atau **Alt** untuk melakukan kebalikan
dari pengaturan saat ini. Ujung penghapus pena mengurangi seleksi. Goresan yang
mengurangi tidak berpengaruh selama tidak ada seleksi.

## Tombol Seleksi

**Seleksi** di bawah pengaturan alat seleksi di panel Alat membuka
[menu Seleksi](/id/docs/selections/working/). Pengaturan **Rentang nada** tidak
memiliki tombol **Seleksi**.
