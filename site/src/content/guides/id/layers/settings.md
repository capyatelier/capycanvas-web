---
title: "Pengaturan lapisan"
description: "Pengaturan lapisan di kepala panel Lapisan, menu Pengaturan Lapisan, dan panel Properti."
related: ["layers/panel", "layers/blend-modes", "layers/types", "filters/how-filters-apply"]
---

Anda dapat mengubah pengaturan ini di kepala panel Lapisan atau di bawah
**Pengaturan Lapisan** pada menu lapisan. Menu **Lapisan** memuat item yang sama.

![Submenu Pengaturan Lapisan untuk Ribbon shading, dengan Klip ke lapisan di bawah dicentang dan "Diklip ke Ribbon" di sebelah kanan.](shot:layers/settings-menu)

## Kunci alpha

Anda dapat mengunci transparansi lapisan lukis. Kuas lalu hanya mengubah
piksel yang sudah dilukis.

Lakukan salah satu langkah berikut:

- Pilih lapisan, lalu pilih **Kunci alpha** di kepala panel Lapisan.
- Buka menu lapisan, lalu pilih **Pengaturan Lapisan > Kunci alpha**.
- Usap baris ke kanan dengan pena atau jari.

Selama Kunci alpha aktif, ikon kunci alpha muncul di sebelah kanan baris.

**Isi** dan **Gradasi** juga mempertahankan transparansi, dan **Penghapus** tidak
berpengaruh.

## Kunci pengeditan

Anda dapat mengunci lapisan agar tidak dapat dilukis atau diubah.

Lakukan salah satu langkah berikut:

- Pilih lapisan, lalu pilih **Kunci pengeditan** di kepala panel Lapisan.
- Buka menu lapisan, lalu pilih **Pengaturan Lapisan > Kunci pengeditan**.
- Untuk lapisan seleksi, pilih **Kunci Pengeditan** dari menunya.

Saat lapisan terkunci, ikon gembok muncul di barisnya.

Lapisan yang terkunci tidak dapat dilukis, diganti namanya, dihapus, atau diberi
mask. Opasitas dan mode baurnya juga tidak dapat diubah, dan filter tidak dapat
ditambahkan ke lapisan itu. Mengunci grup akan mengunci setiap lapisan di dalamnya.
**Kunci pengeditan** tidak dapat dinonaktifkan pada lapisan di dalam grup yang
terkunci.

## Klip ke lapisan di bawah

Anda dapat mengeklip lapisan untuk membatasinya pada area yang dilukis di lapisan
bawahnya.

Lakukan salah satu langkah berikut:

- Pilih lapisan, lalu pilih **Klip ke lapisan di bawah** di kepala panel Lapisan.
- Buka menu lapisan, lalu pilih **Pengaturan Lapisan > Klip ke lapisan di bawah**.
- Untuk menambahkan lapisan baru yang diklip, pilih **Baru > Lapisan kliping baru** dari menu lapisan.

Rel di sebelah kiri gambar mini menghubungkan lapisan yang diklip ke lapisan
dasarnya. Di menu lapisan, item ini menyebut nama dasarnya, misalnya "Diklip ke
Ribbon". Memindahkan lapisan dasar akan ikut memindahkan lapisan yang diklip
padanya.

Lapisan tidak dapat diklip ke grup yang disetel ke Lewat Langsung. Nonaktifkan
Lewat Langsung pada grup itu terlebih dahulu.

Dasarnya adalah lapisan tak terklip terdekat di bawahnya dalam grup yang sama,
dengan melewati lapisan seleksi. Jika lapisan itu adalah lapisan isian atau
filter, item ini bertuliskan **Tidak ada lapisan di bawah untuk ditautkan**. Pada
filter, item ini justru melampirkan filter (lihat
[Cara filter diterapkan](/id/docs/filters/how-filters-apply/)).

## Gunakan sebagai acuan

Anda dapat menandai lapisan lukis dan grup sebagai acuan untuk alat yang mengambil
sampel dari **Lapisan acuan**, seperti **Seleksi otomatis**, **Isi**, dan
[alat retus](/id/docs/retouch/clone-heal/).

Lakukan salah satu langkah berikut:

- Pilih lapisannya, lalu pilih **Gunakan lapisan terpilih sebagai acuan** di kepala panel Lapisan.
- Buka menu lapisan, lalu pilih **Pengaturan Lapisan > Gunakan sebagai acuan**, atau **Gunakan lapisan terpilih sebagai acuan** jika beberapa baris terpilih.

Untuk berhenti menggunakan lapisan sebagai acuan, pilih lapisan itu saja, lalu pilih
**Berhenti menggunakan lapisan ini sebagai acuan** di kepala panel, atau nonaktifkan
**Gunakan sebagai acuan** di menu lapisan.

Ikon mercusuar muncul di tombol baris lapisan acuan. Setelah Anda menandai lapisan
dengan tombol di kepala panel, hanya lapisan aktif yang tetap terpilih.

## Gunakan lapisan di bawah sebagai acuan

Anda dapat menandai lapisan lukis terlihat terdekat di bawah lapisan aktif sebagai
acuan.

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Pengaturan Lapisan > Gunakan lapisan di bawah sebagai acuan**.
- Jika alat mengambil sampel dari lapisan acuan dan belum ada yang ditandai, pilih **Gunakan *lapisan* sebagai acuan** di pemberitahuan di atas kanvas.

## Lewat Langsung

Anda dapat menyetel grup ke Lewat Langsung. Lapisan-lapisannya lalu berbaur
langsung dengan lapisan di bawah grup, sedangkan opasitas dan mask grup memudarkan
antara hasil tersebut dan lapisan di bawahnya.

Lakukan salah satu langkah berikut:

- Buka menu grup, lalu pilih **Pengaturan Lapisan > Lewat Langsung**.
- Pilih **Lewat Langsung** dari **Mode baur lapisan** di kepala panel Lapisan, atau dari **Mode baur** di panel **Properti**.
- Usap baris grup ke kanan dengan pena atau jari.

Lencana muncul pada folder grup, dan subjudulnya bertuliskan "Lewat Langsung".

Menonaktifkan Lewat Langsung menyetel grup ke Normal. Grup Lewat Langsung tidak
dapat diklip, menjadi dasar kliping, atau dilampiri filter. Lewat Langsung tidak
dapat diubah pada grup yang terkunci.

Grup baru memakai Normal, kecuali jika **Gunakan Lewat Langsung untuk grup baru**
aktif di halaman **Kanvas** pada [Preferensi](/id/docs/preferences/).
Mengelompokkan lapisan yang memakai mode baur selain Normal, atau filter yang berada
di lapisannya sendiri, menjadikan grup baru itu Lewat Langsung.

## Mode warna

Anda dapat menyimpan lapisan lukis dalam **Warna penuh**, **Skala abu-abu**, atau
**Dua nada (hitam dan putih)**. Lukisan di lapisan itu mengikuti modenya.

![Panel Properti lapisan lukis dengan Opasitas, Mode baur, dan Mode warna.](shot:layers/settings-color-mode)

Lakukan salah satu langkah berikut:

- Pilih lapisan, lalu pilih mode dari **Mode warna** di panel **Properti**.
- Ketik "Mode warna" di [pencarian perintah](/id/docs/start/command-search/), lalu pilih mode.

**Mode warna** tidak ada di menu lapisan. Subjudul baris menampilkan mode jika
bukan Warna penuh.

Mengubah mode akan mengonversi piksel yang ada, dan kembali ke Warna penuh tidak
memulihkan warna aslinya. Dua nada menjadikan setiap piksel hitam atau putih, serta
sepenuhnya buram atau sepenuhnya transparan. **Mode warna** disembunyikan selama
Anda melukis di mask lapisan.

## Item Pengaturan Lapisan lainnya

**Pengaturan Lapisan** juga memuat **Terapkan Transformasi ke Piksel** (lihat
[Pemindahan dan transformasi](/id/docs/transform/move-transform/)). Pada lapisan foto,
menu ini memuat **Perbaiki Profil Sumber…**, **Rasterisasi Sumber…**, dan
**Kembalikan ke Foto Asli** (lihat [Jenis lapisan](/id/docs/layers/types/)).
