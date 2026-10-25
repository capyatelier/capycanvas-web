---
title: "Gestur sentuh"
description: "Fungsi jari di kanvas, dan ketukan jari yang dapat Anda tetapkan."
related: ["input/pen", "start/canvas", "start/undo", "color/eyedropper", "customize/bubbles"]
---

Anda dapat menggerakkan kanvas, mengambil warna, dan menjalankan perintah dengan jari di
layar sentuh.

> **Catatan:** Jari tidak pernah menggambar. Gunakan pena atau tetikus untuk menggambar di kanvas.

## Menggerakkan kanvas

Seret kanvas dengan dua jari untuk menggulir. Cubit dengan dua jari untuk
memperbesar/memperkecil, dan putar dua jari untuk memutar kanvas. Dengan alat **Tangan**,
satu jari juga menggulir.

**Kunci rotasi** dan **Kunci zoom** di menu zum di bagian bawah kanvas mencegah cubitan
memutar atau mengubah zum tampilan. Lihat [Melihat kanvas](/id/docs/start/canvas/).

Selama pena berada di kanvas, jari tidak menggerakkan kanvas. Jari pada gagang
transformasi atau pemangkasan, atau pada sumber **Stempel Klon**, akan menyeret gagang
atau sumber itu.

**Lekatkan rotasi** aktif secara default dan mempertahankan tampilan hampir seperempat putaran. Matikan di **Tampilan > Lekatkan rotasi** untuk rotasi bebas.

## Mengambil warna

Tahan satu jari diam di kanvas untuk mengambil warna di bawahnya. Cincin pembesar muncul
di atas jari. Seret untuk membidik, lalu angkat jari untuk mengambil warna. Tekan
**Escape** untuk membatalkan.

Jari kedua di kanvas membatalkan pengambilan warna.

## Membersihkan lapisan

Gosok kanvas dengan tiga jari untuk menjalankan **Bersihkan Seluruh Lapisan** pada
lapisan aktif. Gerakkan ketiga jari bersama-sama, balik arah, lalu balik arah lagi
tanpa mengangkat jari. Satu kali **Urungkan** memulihkan lapisan. Lapisan yang terkunci
tidak dibersihkan.

## Memindahkan gelembung

Seret [gelembung](/id/docs/customize/bubbles/) dengan dua jari untuk memindahkannya dari
bagian mana pun pada gelembung itu.

## Bilah alat dalam Mode Zen

Di aplikasi Linux, dalam [Mode Zen](/id/docs/customize/zen/), geser ke dalam dari tepi
jendela dengan satu jari untuk menampilkan bilah alat dan panel yang tertambat di tepi
itu.

## Ketukan jari

Anda dapat menjalankan tindakan dengan mengetuk kanvas memakai dua, tiga, atau empat jari.

| Ketukan | Tindakan bawaan |
| --- | --- |
| **Ketuk dua jari** | **Urungkan** |
| **Ketuk tiga jari** | **Ulangi** |
| **Ketuk empat jari** | **Tidak ada**, atau **Mode Zen** dengan pemetaan tombol **Gaya Procreate** |

Semua jari dalam satu ketukan harus menyentuh layar sebelum ada jari yang terangkat. Jari
yang bergerak, atau yang tetap menempel selama durasi tekan lama, tidak dihitung sebagai ketukan.
Jika ketukan menggeser tampilan, tampilan kembali ke posisi semula.

## Menetapkan ketukan jari

Untuk mengubah ketukan:

1. Pilih **Edit > Preferensi** lalu pilih **Pena & Masukan**.
2. Pilih ketukan di bawah **Gestur sentuh**.
3. Pilih tindakan, atau **Tidak ada** untuk menonaktifkan ketukan.

**Atur Ulang** di daftar tindakan memulihkan nilai bawaan. Tindakan yang hanya aktif
selama ditahan, seperti **Geser**, tidak tercantum.

Pemetaan tombol yang Anda ekspor dari halaman [Pintasan papan ketik](/id/docs/input/keyboard/)
menyertakan ketukan jari. **Atur Ulang Semua Pintasan** di halaman itu juga mengatur
ulang ketukan.

![Pengaturan Gestur sentuh dengan tindakan bawaannya.](shot:touch/touch-gestures)

## Platform

Gestur sentuh berfungsi di Linux, Windows, Android, iPad, dan web. Grup
**Gestur sentuh** tidak ditampilkan di macOS, tempat gosokan tiga jari pada trackpad
tetap membersihkan lapisan.
