---
title: "Filter Artistik dan Tekstur"
description: "Pengaturan filter-filter di kategori Artistik dan Tekstur."
related: ["filters/adding", "filters/distort", "filters/how-filters-apply"]
---

Filter ini ada di **Filter > Artistik** dan **Filter > Tekstur**, serta di kategori
**Artistik** dan **Tekstur** pada panel **Filter**. Pengaturannya diubah di panel
**Properti**.

![Panel Filter yang menampilkan kategori Artistik dengan pratinjau setiap filter.](shot:filters/artistic-list)

## Posterisasi

Mengurangi setiap kanal warna menjadi sejumlah **Level** nilai yang berjarak rata.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Level** | 2–256 | 6 |

## Raster Titik

Menggambar ulang gambar sebagai titik **Tinta** bulat di atas **Kertas**, dengan
ukuran setiap titik sesuai kegelapan di bawahnya. **Kontras** memperbesar perbedaan
antara titik kecil dan titik besar.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Jarak titik** | 3–48 px | 9 px |
| **Sudut** | −180° hingga 180° | 15° |
| **Kontras** | 0–100% | 30% |
| **Tinta** | Warna apa pun | #0D1217 |
| **Kertas** | Warna apa pun | #F5F0DE |

## Arsir Silang

Mengubah gambar menjadi arsiran dengan **Tinta** di atas **Kertas**. Area yang lebih
gelap mendapat lebih banyak arah garis, hingga empat.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Jarak** | 3–32 px | 8 px |
| **Lebar garis** | 0.25–4 px | 1 px |
| **Sudut** | −180° hingga 180° | 0° |
| **Tinta** | Warna apa pun | #121417 |
| **Kertas** | Warna apa pun | #F7F2E8 |

## Mosaik Piksel

Membagi gambar menjadi persegi seukuran **Ukuran sel**, masing-masing diisi dengan
warna di titik tengahnya.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Ukuran sel** | 1–96 px | 12 px |

## Efek Lukisan

Memberi gambar tampilan cat minyak dengan meratakan detail dalam **Radius** menjadi
petak-petak berwarna rata, dengan tetap mempertahankan tepinya. **Kekuatan**
mencampur hasilnya dengan aslinya.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Radius** | 1–16 px | 5 px |
| **Kekuatan** | 0–100% | 100% |

## Pensil

Menggambar tepi gambar sebagai garis **Tinta** di atas **Kertas**. **Kontras**
menggelapkan garis.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Radius** | 0–21 px, atau hingga 85 px jika diketik | 2 px |
| **Kontras** | 0–100% | 40% |
| **Tinta** | Warna apa pun | #120F0D |
| **Kertas** | Warna apa pun | #F7F2E6 |

## Butiran Film

Menambahkan butiran yang berubah seiring waktu dan paling kuat di nada tengah.
**Butiran warna** memberi setiap kanal warna butirannya sendiri.

![Panel Filter yang menampilkan kategori Tekstur dengan pratinjau setiap filter.](shot:filters/texture-list)

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Jumlah** | 0–100% | 18% |
| **Ukuran** | 0.5–8 px | 1 px |
| **Butiran warna** | Aktif atau nonaktif | Nonaktif |
| **Kecepatan** | 0–4 | 1 |
| **Animasikan** | Aktif atau nonaktif | Aktif |
| **Waktu beku** | 0–3600 s | 0 s |

## VHS

Memberi gambar tampilan pita video dengan baris-baris yang bergetar ke samping hingga
sejauh **Pelacakan**, pinggiran merah dan biru, garis pindai, dan derau. Getaran dan
derau berubah seiring waktu.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Pelacakan** | 0–32 px | 5 px |
| **Derau** | 0–100% | 12% |
| **Garis pindai** | 0–100% | 20% |
| **Kecepatan** | 0–4 | 1 |
| **Animasikan** | Aktif atau nonaktif | Aktif |
| **Waktu beku** | 0–3600 s | 0 s |

## CRT

Membuat gambar tampak seperti layar TV lama: melengkung, dengan pinggiran merah dan
biru, mask piksel RGB bergaris, garis pindai, dan pita kecerahan yang bergulir
seiring waktu. Bagian gambar yang terdorong keluar dari layar lengkung menjadi
transparan.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Kelengkungan** | 0–30% | 8% |
| **Garis pindai** | 0–100% | 35% |
| **Mask piksel** | 0–100% | 25% |
| **Pemisahan** | 0–5 px | 1 px |
| **Animasikan** | Aktif atau nonaktif | Aktif |
| **Waktu beku** | 0–3600 s | 0 s |

## Animasi

**Butiran Film**, **VHS**, dan **CRT** beranimasi, dan barisnya di panel **Filter**
memiliki tanda animasi. Jika **Animasikan** aktif, animasi filter berjalan terus-menerus
sesuai **Kecepatan** (CRT tidak memiliki pengaturan **Kecepatan**). Nonaktifkan
**Animasikan** untuk menahan filter diam pada saat yang disetel oleh **Waktu beku**.

Gambar yang diekspor menampilkan animasi pada saat ekspor.
