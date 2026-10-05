---
title: "Filter Distorsi"
description: "Pengaturan filter-filter di kategori Distorsi."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Filter Distorsi ada di **Filter > Distorsi** dan di kategori **Distorsi** pada panel
**Filter**. Pengaturannya diubah di panel **Properti**. Setiap filter ini dapat
memindahkan cat ke area transparan pada lapisan.

![Panel Filter yang menampilkan kategori Distorsi dengan pratinjau setiap filter.](shot:filters/distort-list)

## Aberasi Kromatik

Menambahkan pinggiran warna di tepi dengan menggeser kanal merah ke satu arah dan
kanal biru ke arah sebaliknya, sejauh **Pemisahan** di sepanjang **Sudut**.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Pemisahan** | 0–32 px | 3 px |
| **Sudut** | −180° hingga 180° | 0° |

## Kaleidoskop

Mencerminkan satu irisan gambar menjadi sejumlah **Segmen** irisan di sekeliling
titik pusat.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Segmen** | 2–24 | 6 |
| **Sudut** | −180° hingga 180° | 0° |
| **Pusat X**, **Pusat Y** (di bawah **Posisi**) | 0–100% dari lebar dan tinggi kanvas | 50% |

## Pusaran

Memuntir gambar di sekeliling titik pusat sebesar **Puntiran**, yang memudar hingga
tanpa puntiran di **Radius**.

![Panel Properti untuk Pusaran dengan Puntiran, Radius, dan pengaturan Posisi.](shot:filters/swirl-properties)

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Puntiran** | −720° hingga 720° | 120° |
| **Radius** | 1–150% dari setengah sisi kanvas yang lebih pendek | 70% |
| **Pusat X**, **Pusat Y** (di bawah **Posisi**) | 0–100% dari lebar dan tinggi kanvas | 50% |

## Riak

Memindahkan gambar dalam lingkaran-lingkaran di sekeliling titik pusat, hingga
sejauh **Amplitudo**, dengan jarak antarlingkaran sebesar **Panjang gelombang**.
Lingkaran bergerak ke luar seiring waktu.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Amplitudo** | 0–48 px | 12 px |
| **Panjang gelombang** | 8–256 px | 64 px |
| **Kecepatan** | 0–4 | 0.5 |
| **Pusat X**, **Pusat Y** (di bawah **Posisi**) | 0–100% dari lebar dan tinggi kanvas | 50% |
| **Animasikan** | Aktif atau nonaktif | Aktif |
| **Waktu beku** | 0–3600 s | 0 s |

## Kaca

Mendistorsi gambar dengan pola kaca buram seukuran **Ukuran tekstur**, hingga
sejauh **Distorsi**. **Kekasaran** menambahkan pola yang lebih halus.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Distorsi** | 0–48 px | 12 px |
| **Ukuran tekstur** | 4–160 px | 24 px |
| **Kekasaran** | 0–100% | 35% |

## Kaca Berhujan

Menambahkan tetesan hujan yang meluncur turun dengan jejak seiring waktu dan
membelokkan gambar hingga sejauh **Pembiasan**. **Hujan** menentukan jumlah tetesan.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Pembiasan** | 0–32 px | 8 px |
| **Ukuran tetesan** | 12–120 px | 48 px |
| **Hujan** | 0–100% | 65% |
| **Kecepatan** | 0–4 | 0.5 |
| **Animasikan** | Aktif atau nonaktif | Aktif |
| **Waktu beku** | 0–3600 s | 0 s |

## Kabut Panas

Membuat gambar bergetar seiring waktu, hingga sejauh **Distorsi** di bagian
bawah kanvas dan sama sekali tidak di bagian atas. **Detail** menambahkan riak yang
lebih halus.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Distorsi** | 0–48 px | 8 px |
| **Ukuran gelombang** | 10–240 px | 90 px |
| **Kecepatan** | 0–4 | 0.6 |
| **Detail** | 0–100% | 50% |
| **Animasikan** | Aktif atau nonaktif | Aktif |
| **Waktu beku** | 0–3600 s | 0 s |

## Lengkung Domain

Melengkungkan gambar dengan pola marmer seukuran **Ukuran pola**, hingga sejauh
**Distorsi**. Pola bergeser perlahan seiring waktu.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Distorsi** | 0–64 px | 24 px |
| **Ukuran pola** | 8–256 px | 96 px |
| **Kecepatan** | 0–4 | 0.25 |
| **Animasikan** | Aktif atau nonaktif | Aktif |
| **Waktu beku** | 0–3600 s | 0 s |

## Animasi

**Riak**, **Kaca Berhujan**, **Kabut Panas**, dan **Lengkung Domain** beranimasi, dan
barisnya di panel **Filter** memiliki tanda animasi. Jika **Animasikan** aktif,
animasi filter berjalan terus-menerus sesuai **Kecepatan**. Nonaktifkan
**Animasikan** untuk menahan filter diam pada saat yang disetel oleh **Waktu beku**.

Gambar yang diekspor menampilkan animasi pada saat ekspor.
