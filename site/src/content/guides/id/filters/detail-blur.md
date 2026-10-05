---
title: "Filter Detail dan Kabur"
description: "Pengaturan filter-filter di kategori Detail dan Kabur."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Filter ini ada di **Filter > Detail** dan **Filter > Kabur**, serta di kategori
**Detail** dan **Kabur** pada panel **Filter**. Pengaturannya diubah di panel
**Properti**.

![Panel Filter yang menampilkan kategori Detail dan Kabur dengan pratinjau setiap filter.](shot:filters/detail-blur-list)

## Kejernihan

Menaikkan kontras lokal dengan **Intensitas** positif, atau menurunkannya dengan
nilai negatif, hingga 2 stop.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Intensitas** | −100% hingga 100% | 0% |

## Hilangkan kabut

**Intensitas** positif menghilangkan kabut dan nilai negatif menambahkannya. Area
yang mendekati putih dan mendekati abu-abu dilindungi saat kabut dihilangkan.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Intensitas** | −100% hingga 100% | 0% |

## Mask Penajaman

Menajamkan tepi sebesar **Jumlah**. Selisih yang lebih kecil dari **Ambang**
dibiarkan tidak berubah.

![Panel Properti untuk Mask Penajaman dengan Radius, Jumlah, dan Ambang.](shot:filters/unsharp-mask-properties)

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Radius** | 0–21 px, atau hingga 85 px jika diketik | 1.5 px |
| **Jumlah** | 0–300% | 100% |
| **Ambang** | 0–100% | 2% |

## Lolos Tinggi

Hanya mempertahankan detail yang lebih halus dari **Radius**, di atas dasar abu-abu
50%.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Radius** | 0–21 px, atau hingga 85 px jika diketik | 4 px |
| **Kekuatan** | 0–300% | 100% |

## Halus dengan Tepi Terjaga

Menghaluskan noise dan menjaga tepi tetap tajam. **Kekuatan** yang lebih tinggi
menghaluskan melintasi perbedaan warna yang lebih besar.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Kekuatan** | 0–100% | 25% |

## Deteksi Tepi

Menampilkan tepi gambar sebagai garis putih di atas hitam, atau garis gelap di atas
putih jika **Balikkan** aktif.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Lebar** | 0.5–8 px | 1 px |
| **Kekuatan** | 0–400% | 100% |
| **Balikkan** | Aktif atau nonaktif | Nonaktif |

## Relief

Mengubah gambar menjadi relief abu-abu. **Sudut** menentukan arah relief.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Lebar** | 0.5–8 px | 1.5 px |
| **Sudut** | −180° hingga 180° | 135° |
| **Kedalaman** | 0–400% | 100% |

## Kabur Gaussian

Mengaburkan gambar secara merata. Tepi yang bersebelahan dengan area transparan
kabur ke arah luar.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Radius** | 0–21 px, atau hingga 85 px jika diketik | 3 px |

## Kabur Gerak

Mengaburkan di sepanjang garis lurus sepanjang **Jarak**, ke arah **Sudut**.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Jarak** | 0–64 px | 12 px |
| **Sudut** | −180° hingga 180° | 0° |

## Pendar

Menambahkan cahaya pendar di sekitar nada yang lebih terang dari **Ambang**. Pendar
dapat menyebar ke area transparan.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Radius** | 0–21 px, atau hingga 85 px jika diketik | 6 px |
| **Kekuatan** | 0–200% | 60% |
| **Ambang** | 0–100% | 60% |

## Fokus Lembut

Melembutkan gambar dengan meletakkan versi kabur sebesar **Radius** di atasnya dalam
mode baur Terangkan, dengan opasitas sebesar **Kekuatan**.

| Pengaturan | Rentang atau pilihan | Bawaan |
| --- | --- | --- |
| **Radius** | 0–21 px, atau hingga 85 px jika diketik | 5 px |
| **Kekuatan** | 0–100% | 40% |
