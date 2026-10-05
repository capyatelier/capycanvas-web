---
title: "Terangkan dan gelapkan, pemisahan frekuensi"
description: "Menambahkan lapisan Terangkan & Gelapkan, dan memisahkan lapisan menjadi lapisan Rendah dan Tinggi dengan Pemisahan Frekuensi."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## Lapisan Terangkan & Gelapkan Baru

Anda dapat menambahkan lapisan abu-abu netral dalam mode **Cahaya Lembut** untuk
dodge dan burn.

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Baru > Lapisan Terangkan & Gelapkan Baru**.
- Buka menu lapisan di panel Lapisan, lalu pilih **Baru > Lapisan Terangkan & Gelapkan Baru**.

Lapisan seukuran kanvas bernama *Terangkan & Gelapkan* muncul di atas lapisan aktif
beserta lapisan yang diklip ke lapisan aktif, lalu menjadi lapisan aktif.

Lapisan ini tidak dapat ditambahkan ke dalam grup yang terkunci, atau selama
pemangkasan atau transformasi masih terbuka.

![Panel Lapisan dengan lapisan Terangkan & Gelapkan di atas foto terarium.](shot:retouch/dodge-burn-layer)

## Pemisahan Frekuensi…

Anda dapat memisahkan lapisan aktif untuk pemisahan frekuensi dalam satu langkah.

Pilih **Filter > Pemisahan Frekuensi…**. Sebuah panel terbuka di bagian bawah kanvas
dengan **Radius**, 4 px secara bawaan, dan kanvas menampilkan pratinjau kaburnya
lapisan *Rendah* selama Anda mengubah **Radius**.

![Panel Pemisahan Frekuensi dengan nilai Radius.](shot:retouch/frequency-separation-panel)

**Terapkan** menempatkan grup bernama *Pemisahan Frekuensi* di posisi lapisan itu:

- *Tinggi* menyimpan tekstur halus, disetel ke **Cahaya Linear**. Lapisan ini berada paling atas dan menjadi lapisan aktif.
- *Rendah* menyimpan warna dan nada, dikaburkan dengan **Kabur Gaussian** sesuai radius, disetel ke **Normal**.

Grup mengambil opasitas dan kliping dari lapisan asli. Lapisan asli tetap berada tepat
di bawah grup, dalam keadaan tersembunyi.

Lapisan harus terlihat dan disetel ke **Normal**, dan gambar harus memakai
**Edit > Pembauran > Pembauran Perseptual** (lihat
[Ruang warna, kedalaman bit, dan pembauran](/id/docs/color-management/color-spaces/)).
Jika gambar berubah selama panel terbuka, panel akan tertutup.

![Panel Lapisan dengan grup Pemisahan Frekuensi, Tinggi di atas Rendah, dan lapisan asli yang tersembunyi.](shot:retouch/frequency-separation-layers)
