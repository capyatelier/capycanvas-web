---
title: "Filter Nada"
description: "Pengaturan filter-filter di kategori Nada."
related: ["filters/adding", "filters/color", "filters/how-filters-apply"]
---

Filter Nada ada di **Filter > Nada** dan di kategori **Nada** pada panel **Filter**.
Pengaturannya diubah di panel **Properti**.

![Panel Filter yang menampilkan kategori Nada dengan pratinjau setiap filter.](shot:filters/tone-list)

## Bayangan/Sorotan

Mengangkat area gelap dengan **Bayangan** dan menurunkan area terang dengan
**Sorotan**, berdasarkan kecerahan area di sekitarnya. Pada 100%, masing-masing
mengubah eksposur hingga 2 stop.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Bayangan** | 0–100% | 0% |
| **Sorotan** | 0–100% | 0% |

## Kurva

Mengubah nada dengan satu kurva untuk semua kanal di halaman **RGB** dan satu kurva
untuk setiap kanal di halaman **Merah**, **Hijau**, dan **Biru**. Kurva kanal
diterapkan sebelum kurva **RGB**.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| Halaman **RGB**, **Merah**, **Hijau**, **Biru** | Masing-masing satu kurva | Garis lurus |
| **Ambil sampel titik**, **Penyesuaian terarah** | Menyetel kurva dari gambar (lihat [Menambahkan dan mengedit filter](/id/docs/filters/adding/)) | |
| **Ruang kurva** | **RGB terenkode**, **HDR log**. Hanya tampil di [gambar HDR](/id/docs/color-management/hdr/) atau selama disetel ke **HDR log**. | **RGB terenkode**, atau **HDR log** di gambar HDR |
| **Rentang HDR** | 0–15 EV, atau hingga 127 EV jika diketik. Hanya tampil dengan **HDR log**: jumlah stop di atas putih SDR yang dicapai kurva. | 4 EV |

| Di grafik | Caranya |
| --- | --- |
| Menambah titik | Tekan tempat yang kosong. Satu kurva dapat memuat hingga 32 titik. |
| Memindahkan titik | Seret titik, atau pilih titik lalu tekan tombol panah. **Shift** memindahkannya lebih jauh. Titik ujung hanya bergerak ke atas dan ke bawah. |
| Menyetel nilai persis | Pilih titik lalu ketik di **Masukan** dan **Keluaran** di bawah grafik. |
| Membuang titik | Klik ganda titik, seret titik keluar dari grafik, atau pilih titik lalu tekan **Delete** atau **Backspace**. |
| Mulai dari awal | Pilih **Atur ulang kurva**. |

## Level

Menyetel titik hitam, titik putih, dan nada tengah masukan, lalu memetakannya ke
rentang **Keluaran**. Halaman **Merah**, **Hijau**, dan **Biru** diterapkan sebelum
halaman **RGB**.

![Panel Properti untuk Level dengan histogram, Otomatis, Ambil sampel titik, serta pengaturan Masukan, Keluaran, dan Kliping.](shot:filters/levels-properties)

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Otomatis**, **Ambil sampel titik** | Menyetel masukan dari gambar (lihat [Menambahkan dan mengedit filter](/id/docs/filters/adding/)) | |
| **Bayangan**, **Sorotan** (di bawah histogram) | Menandai area yang terpotong di kanvas | |
| **Hitam** (**Masukan**) | 0–1, nilai apa pun jika diketik. Tetap di bawah **Putih** masukan. | 0 |
| **Putih** (**Masukan**) | 0–1, nilai apa pun jika diketik | 1 |
| **Nada tengah** | 0.1–10. Di atas 1 mencerahkan. | 1 |
| **Hitam** (**Keluaran**) | 0–1, nilai apa pun jika diketik | 0 |
| **Putih** (**Keluaran**) | 0–1, nilai apa pun jika diketik | 1 |
| **Batasi masukan** | Memotong nada di luar **Hitam** dan **Putih** masukan, di setiap halaman | Nonaktif |
| **Batasi keluaran** | Memotong hasil ke rentang keluaran, di setiap halaman | Nonaktif |

## Kecerahan / Kontras

**Kontras** merenggangkan atau merapatkan nada di sekitar abu-abu tengah, lalu
**Kecerahan** menerangkan atau menggelapkan semua nada dengan besaran yang sama.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Kecerahan** | −100 hingga 100 | 0 |
| **Kontras** | −100 hingga 100. 50 menggandakan kontras dan −50 membaginya dua. | 0 |

## Ambang

Mengubah piksel yang lebih gelap dari **Ambang** menjadi hitam dan sisanya menjadi
putih.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Ambang** | 0–1, nilai apa pun jika diketik | 0.5 |

## Eksposur

Mengubah eksposur dalam stop. **Offset** menaikkan atau menurunkan hitam.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Eksposur** | −10 hingga 10 EV, atau hingga ±126 EV jika diketik | 0 EV |
| **Offset** | −0.5 hingga 0.5 | 0 |
| **Gamma** | 0.1–10. Di atas 1 mencerahkan nada tengah. | 1 |

## Vinyet

Menggelapkan gambar di luar elips yang berproporsi sama dengan kanvas, atau
mencerahkannya jika **Kekuatan** bernilai negatif. Pada ±100%, tepi gambar berubah
hingga 2 stop.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Kekuatan** | −100% hingga 100% | 40% |
| **Radius** | 10–150% dari setengah ukuran kanvas | 95% |
| **Kelembutan** | 0–100% dari radius yang dipakai untuk memudar | 55% |
| **Pusat X**, **Pusat Y** (di bawah **Posisi**) | 0–100% dari lebar dan tinggi kanvas | 50% |
