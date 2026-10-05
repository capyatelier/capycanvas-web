---
title: "Pipet Warna"
description: "Mengambil warna cat dari kanvas dengan Pipet Warna, serta opsi Gaya, Sumber, dan Ukuran sampel."
related: ["color/color-panel", "color/edit-color", "input/touch", "input/keyboard"]
---

Anda dapat mengambil warna dari kanvas untuk melukis dengannya. Setelah warna diambil,
alat yang sebelumnya Anda pakai kembali aktif.

## Memulai Pipet Warna

Lakukan salah satu langkah berikut:

- Tekan **I** (**O** pada pemetaan tombol Gaya GIMP).
- Pilih **Pipet Warna** di pencarian perintah.
- Di Lukis dan Foto, pilih **Pipet Warna** di bilah alat Alat.
- Di Sketsa, pilih **Pemilih Warna** pada bilah di tepi kiri, di antara penggeser ukuran dan penggeser opasitas.

Untuk berhenti tanpa mengambil warna, tekan **I** atau pilih tombol yang sama lagi, tekan
**Escape**, atau pilih alat atau kuas lain. Ketukan jari tanpa menahan juga menghentikan
Pipet Warna.

## Mengambil warna

Gerakkan penunjuk di atas kanvas untuk melihat pratinjau warna di panel Warna. Warna cat
hanya berubah saat Anda mengambil warna.

| Masukan | Pratinjau | Mengambil |
| --- | --- | --- |
| Tetikus | Arahkan penunjuk | Klik |
| Pena | Arahkan pena, atau tekan pena ke layar | Angkat pena |
| Jari | Sentuh | Angkat jari |

Dengan jari, titik sampel berada di atas ujung jari.

Piksel transparan tidak menghasilkan warna, dan warna yang diambil selalu pekat. Warna
diambil dalam ruang warna gambar. Pada gambar HDR, warna yang diambil dapat lebih terang
daripada putih SDR. Saat Anda mengedit mask, warna yang diambil menjadi warna mask.

## Mengambil warna sambil melukis

Tahan **Alt** saat kuas, Baurkan, Cairkan, Isi, atau Gradasi dipilih. Setiap klik
mengambil sebuah warna. Lepaskan **Alt** untuk kembali ke alat.

Pemetaan tombol Gaya Krita dan Gaya GIMP memakai **Ctrl**. Di halaman
[Pintasan Papan Ketik](/id/docs/input/keyboard/), pintasan ini bernama
**Ambil sampel warna selama ditahan**. Anda juga dapat menetapkan tombol pena untuk Pipet
Warna di halaman **Pena & Masukan** ([Pena](/id/docs/input/pen/)).

## Menahan jari

Tahan satu jari diam di kanvas untuk mulai mengambil warna dengan alat apa pun. Angkat
jari untuk mengambil warna dan kembali ke alat.

- Menahan jari membutuhkan setengah detik di web dan di iPad. Android, Windows, dan Linux memakai durasi tekan lama dari sistem.
- Menggerakkan jari sebelum pemilih warna muncul membatalkan penahanan.
- Penahanan hanya berfungsi jika satu jari berada di kanvas dan tidak ada operasi lain yang sedang berlangsung.
- Selama menahan, ketuk dengan jari kedua untuk mengalihkan **Sumber** antara **Warna terlihat** dan **Lapisan terpilih**.

## Gaya

Pilih **Gaya** di bilah Opsi Alat saat mengambil warna (di bagian atas jendela di Foto):

- **Pemilih Warna** menampilkan kaca pembesar bulat. Separuh atas cincinnya menampilkan warna sampel, dan separuh bawah menampilkan warna saat ini.
- **Pipet Warna** menampilkan kursor pipet dengan ujungnya di titik sampel.

![Kaca pembesar Pemilih Warna di atas goresan merah, dengan warna sampel dan warna saat ini di cincinnya.](shot:color/eyedropper-loupe)

Sentuhan selalu memakai kaca pembesar. Memilih **Pemilih Warna** di Sketsa mengatur
**Gaya** ke **Pemilih Warna**. Tanda lapisan kecil muncul jika **Sumber** disetel ke
**Lapisan terpilih**.

## Sumber dan Ukuran sampel

Atur keduanya di panel Alat atau bilah Opsi Alat saat mengambil warna. Di Sketsa, klik
ganda atau ketuk ganda **Pemilih Warna** untuk membukanya.

![Panel Alat saat mengambil warna, dengan Sumber dan Ukuran sampel.](shot:color/eyedropper-settings)

### Sumber

**Warna terlihat** (bawaan) mengambil sampel gambar seperti yang Anda lihat, sedangkan
**Lapisan terpilih** mengambil sampel cat milik lapisan yang dipilih, sebelum opasitas,
mask, dan klipingnya diterapkan. **Lapisan terpilih** hanya tersedia untuk lapisan lukis
yang tidak terkunci.

### Ukuran sampel

**Satu piksel** (bawaan), **Lingkaran 5 px**, **Lingkaran 15 px**, **Lingkaran 51 px**,
atau **Lingkaran 101 px**. Lingkaran mengambil rata-rata piksel di dalamnya.
