---
title: "Filter Warna"
description: "Pengaturan filter-filter di kategori Warna."
related: ["filters/adding", "filters/tone", "filters/how-filters-apply"]
---

Filter Warna ada di **Filter > Warna** dan di kategori **Warna** pada panel
**Filter**. Pengaturannya diubah di panel **Properti**.

![Panel Filter yang menampilkan kategori Warna dengan pratinjau setiap filter.](shot:filters/color-list)

## Rona / Saturasi

Menggeser rona, saturasi, dan kecerahan seluruh gambar di halaman **Keseluruhan**,
atau satu rentang warna di halaman **Merah** hingga **Magenta**. **Warnai** memberi
setiap piksel satu rona dan saturasi dengan tetap mempertahankan kecerahannya.

![Panel Properti untuk Rona / Saturasi di halaman Merah.](shot:filters/hue-saturation-properties)

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Rona** | −180° hingga 180°, atau 0–360° dengan **Warnai** | 0° |
| **Saturasi** | −100% hingga 100%, atau 0–100% dengan **Warnai** | 0%, atau 25% dengan **Warnai** |
| **Kecerahan** | −100% hingga 100% | 0% |
| **Pusat** | Rona Oklab 0–360°. Hanya di halaman warna. | Merah 30°, Kuning 110°, Hijau 145°, Sian 195°, Biru 265°, Magenta 330° |
| **Lebar** | 0–180°. Hanya di halaman warna. | 30° |
| **Perhalus tepi** | 0–90°. Hanya di halaman warna. | 30° |
| **Warnai** | Aktif atau nonaktif. Selama aktif, hanya halaman **Keseluruhan** yang tersisa. | Nonaktif |

## Balikkan

Membalik setiap kanal warna. Filter ini tidak memiliki pengaturan.

## Hilangkan saturasi

Mengganti setiap warna dengan abu-abu yang kecerahan HSL-nya sama, dan tidak memiliki
pengaturan.

## Filter foto

Memberi semburat pada gambar ke arah **Warna** sebesar **Kepadatan**.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Warna** | Warna apa pun | #FFB873 |
| **Kepadatan** | 0–100% | 25% |
| **Pertahankan luminositas** | Aktif atau nonaktif | Aktif |

## Warna selektif

Mengubah sian, magenta, kuning, dan hitam dalam satu rentang warna per halaman.
**Merah** hingga **Magenta** bekerja pada warna yang jenuh, sedangkan **Putih**,
**Netral**, dan **Hitam** bekerja pada nada yang mendekati abu-abu.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Sian** | −100% hingga 100% | 0% |
| **Magenta** | −100% hingga 100% | 0% |
| **Kuning** | −100% hingga 100% | 0% |
| **Hitam** | −100% hingga 100% | 0% |
| **Metode** | **Relatif** menskalakan setiap perubahan sesuai tinta yang sudah ada di warna itu. **Absolut** menambahkannya apa adanya. Berlaku untuk setiap halaman. | **Relatif** |

## Pencampur kanal

Membentuk setiap kanal keluaran di halaman **Merah**, **Hijau**, dan **Biru** dari
campuran kanal masukan merah, hijau, dan biru, ditambah **Konstanta**. Jika
**Monokrom** aktif, hanya halaman **Abu-abu** yang tersisa, dan campurannya
menghasilkan gambar abu-abu.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Merah** | −200% hingga 200% | 100% di halaman **Merah**, 21.26% di **Abu-abu**, selain itu 0% |
| **Hijau** | −200% hingga 200% | 100% di halaman **Hijau**, 71.52% di **Abu-abu**, selain itu 0% |
| **Biru** | −200% hingga 200% | 100% di halaman **Biru**, 7.22% di **Abu-abu**, selain itu 0% |
| **Konstanta** | −100% hingga 100% | 0% |
| **Monokrom** | Aktif atau nonaktif | Nonaktif |

## Pemetaan warna (LUT)

Menerapkan tabel pemetaan dari menu tampilan (menu ini menunjukkan tampilan saat ini,
misalnya **Hangat**) ke warna, dicampur dengan aslinya sebesar **Intensitas**. Untuk
memakai LUT Anda sendiri, pilih **Impor LUT…** di samping menu tampilan, lalu buka
berkas `.cube` 3D berukuran hingga 16 MB.

![Panel Properti untuk Pemetaan warna (LUT) dengan menu tampilan dan Impor LUT….](shot:filters/color-lookup)

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| Menu tampilan | **Asli** (tanpa perubahan), **Hangat**, **Sejuk**, **Monokrom**, atau LUT impor dengan judulnya. LUT impor disimpan di dalam gambar. | **Asli** |
| **Ruang warna LUT** | **sRGB**, **Display P3**, **Adobe RGB (1998)**, **ProPhoto RGB**: ruang warna yang diharapkan LUT impor. Disembunyikan untuk **Asli** dan tampilan bawaan. | **sRGB** |
| **Intensitas** | 0–100% | 100% |

## Keseimbangan Warna

Menggeser warna secara terpisah di halaman **Bayangan**, **Nada tengah**, dan
**Sorotan**. Nilai positif bergeser ke arah warna kedua pada label setiap penggeser.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Sian — Merah** | −100 hingga 100 | 0 |
| **Magenta — Hijau** | −100 hingga 100 | 0 |
| **Kuning — Biru** | −100 hingga 100 | 0 |
| **Pertahankan luminositas** | Aktif atau nonaktif, untuk setiap halaman | Aktif |

## Vibransi

**Vibransi** menaikkan saturasi warna yang kusam lebih banyak daripada warna yang
sudah jenuh. **Saturasi** mengubah semua warna secara merata.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Vibransi** | −100% hingga 100% | 0% |
| **Saturasi** | −100% hingga 100% | 0% |
| **Lindungi warna kulit** | Aktif atau nonaktif. Membatasi **Vibransi** positif pada rona oranye dan warna kulit. | Aktif |

## Hitam & Putih

Mengonversi gambar menjadi abu-abu, dengan penggeser untuk menentukan seberapa terang
setiap rona. **Semburat** mewarnai hasilnya dengan **Warna semburat**.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Merah** | −100% hingga 200% | 40% |
| **Kuning** | −100% hingga 200% | 60% |
| **Hijau** | −100% hingga 200% | 40% |
| **Sian** | −100% hingga 200% | 60% |
| **Biru** | −100% hingga 200% | 20% |
| **Magenta** | −100% hingga 200% | 80% |
| **Semburat** | Aktif atau nonaktif | Nonaktif |
| **Warna semburat** | Warna apa pun | #BF874C |

## Peta Gradasi

Memetakan nada gambar ke **Gradasi**, dari titik kiri untuk nada tergelap hingga
titik kanan untuk nada paling terang. **Jumlah** mencampur hasilnya dengan aslinya.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Gradasi** | Gradasi apa pun, diedit seperti pada alat [Gradasi](/id/docs/drawing/gradient/) | Hitam ke putih, interpolasi **Oklab** |
| **Jumlah** | 0–100% | 100% |

## Keseimbangan Putih

Menghangatkan atau menyejukkan gambar dengan **Suhu** dan menggesernya ke arah
magenta atau hijau dengan **Semburat**. **Pilih titik netral** di bagian atas panel
**Properti** menyetel keduanya agar titik yang Anda klik di kanvas menjadi netral.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Suhu** | −100 hingga 100, atau hingga ±1000 jika diketik. Nilai positif lebih hangat. | 0 |
| **Semburat** | −100 hingga 100, atau hingga ±800 jika diketik. Nilai positif lebih magenta. | 0 |
| **Pertahankan luminositas** | Aktif atau nonaktif | Aktif |

## Nada Terpisah

Memberi semburat pada bayangan ke arah warna **Bayangan** dan pada sorotan ke arah
warna **Sorotan**, dengan tetap mempertahankan kecerahannya.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Bayangan** | Warna apa pun | #295494 |
| **Sorotan** | Warna apa pun | #F5AD57 |
| **Keseimbangan** | −100 hingga 100. Menggeser titik pertemuan kedua semburat. Nilai positif memberi warna **Bayangan** pada bagian gambar yang lebih luas. | 0 |
| **Kekuatan** | 0–100% | 30% |

## Solarisasi

Membalik setiap kanal warna di bagian yang lebih terang dari **Ambang**. **Kekuatan**
mencampur hasilnya dengan aslinya.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Ambang** | 0–100% | 50% |
| **Kekuatan** | 0–100% | 100% |

## Kilau Pelangi

Menambahkan pelangi film tipis yang mengikuti kecerahan gambar dan
bergeser seiring waktu. Gambar yang diekspor menampilkan warna pada saat ekspor.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Kekuatan** | 0–100% | 55% |
| **Ukuran film** | 8–240 px | 64 px |
| **Kecepatan** | 0–4 | 0.3 |
| **Animasikan** | Aktif atau nonaktif. Selama aktif, warna terus bergeser sesuai **Kecepatan**. | Aktif |
| **Waktu beku** | 0–3600 s: saat yang ditampilkan selama **Animasikan** nonaktif | 0 s |
