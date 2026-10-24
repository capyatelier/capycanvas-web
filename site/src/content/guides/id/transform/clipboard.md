---
title: "Salin dan tempel"
description: "Menyalin piksel dan menempelkannya sebagai lapisan atau gambar baru."
related: ["selections/working", "transform/move-transform", "layers/types", "files/open-save"]
---

Perintah papan klip ada di menu **Edit** dan pencarian perintah.

![Tempel khusus di menu Sunting.](shot:transform/clipboard-edit-menu)

## Salin dan Potong

**Salin** (**Ctrl+C**) menyalin piksel lapisan terpilih di dalam seleksi, tanpa opasitas, mask, atau filter terlampir. Tanpa seleksi, perintah ini menyalin lapisan di dalam kanvas.

**Potong** (**Ctrl+X**) menyalin piksel yang sama dan menghapusnya. Perintah ini tidak tersedia pada lapisan terkunci atau lapisan dengan **Kunci alpha**.

**Salin Gabungan** (**Ctrl+Shift+C**) menyalin hasil yang terlihat di dalam seleksi, termasuk pencahayaan Kertas. Grup, lapisan filter, dan lapisan seleksi tidak memiliki piksel sendiri.

**Salin Piksel** bekerja seperti **Salin**, dan pada lapisan Objek menyalin gambarnya sebagai piksel.

## Tempel

**Tempel** (**Ctrl+V**) menambahkan gambar papan klip sebagai lapisan baru dan membuka handel transformasi jika perlu ditempatkan. Gambar dari aplikasi lain menjadi [lapisan Objek](/id/docs/layers/types/), mempertahankan sumbernya hingga dirasterisasi.

Salinan yang dibuat di {appName} kembali ke posisi asalnya jika posisi tersebut terlihat. Jika tidak, salinan ditempatkan di tengah tampilan.

## Tempel khusus

Buka **Edit > Tempel khusus** untuk memilih tujuan.

- **Tempel di Tempat** menambahkan lapisan pada posisi asal salinan tanpa membuka handel transformasi.
- **Tempel di posisi terlihat** menambahkan lapisan di tengah kanvas yang terlihat, pada ukuran aslinya.
- **Tempel di kursor** menambahkan lapisan yang berpusat pada penunjuk, pada ukuran aslinya.
- **Tempel ke Dalam** menambahkan lapisan dengan seleksi aktif sebagai mask, lalu menghapus seleksi.
- **Tempel sebagai Gambar Baru** membuat gambar baru dari papan klip.

Perintah yang memerlukan seleksi, lapisan yang dapat disunting, atau gambar papan klip yang kompatibel diredupkan.

![Menu Tempel khusus dengan Tempel di Tempat, Tempel di posisi terlihat, Tempel di kursor, Tempel ke Dalam, dan Tempel sebagai Gambar Baru.](shot:transform/paste-special)

## Antar aplikasi

Aplikasi lain menerima salinan dari {appName} sebagai PNG sRGB 8-bit. Selama salinan internal tetap ada di papan klip, gambar {appName} lain menerima presisi aslinya.

Di editor web, gambar yang ditempel dapat berukuran hingga 512 MiB. Jika browser tidak dapat menempel gambar, gunakan **Berkas > Impor Gambar sebagai Lapisan…**.
