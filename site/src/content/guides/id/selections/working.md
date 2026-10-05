---
title: "Bekerja dengan seleksi"
description: "Bilah kanvas, serta perintah yang mengubah seleksi atau piksel di dalamnya."
related: ["selections/tools", "selections/quick-mask", "selections/selection-layers", "layers/masks"]
---

Anda dapat mengubah seleksi, beserta piksel di dalamnya, dari menu **Seleksi** dan
dari bilah seleksi di kanvas.

## Bilah kanvas

Bilah kanvas adalah sebaris tombol di kanvas yang berisi langkah berikutnya untuk
hal yang sedang Anda edit.

| Bilah kanvas muncul | Dibahas di |
| --- | --- |
| Di samping seleksi baru | Bilah seleksi, di bawah |
| Selama Anda menempatkan sudut seleksi **Laso poligon** | [Alat seleksi](/id/docs/selections/tools/) |
| Di Mask Cepat | [Mask Cepat](/id/docs/selections/quick-mask/) |
| Selama Anda mengedit lapisan seleksi | [Lapisan seleksi](/id/docs/selections/selection-layers/) |
| Selama Anda mengedit mask lapisan | [Mask](/id/docs/layers/masks/) |
| Selama Anda mentransformasi lapisan atau piksel, atau menempatkan gambar | [Pemindahan dan transformasi](/id/docs/transform/move-transform/) |
| Selama Anda memangkas | [Pangkas](/id/docs/transform/crop/) |
| Saat Anda memilih garis bantu | [Penggaris dan garis bantu](/id/docs/drawing/ruler/) |
| Saat Anda mengeklik cakram sumber klon | [Klon dan pulihkan](/id/docs/retouch/clone-heal/) |
| Selama Anda memilih titik sampel untuk Level, Kurva, atau Keseimbangan Putih | [Menambahkan dan mengedit filter](/id/docs/filters/adding/) |

Bilah ini berada di samping objek, atau di tepi bawah kanvas. Dari kiri ke kanan,
bilah ini memuat:

- Keterangan, misalnya "Mask Cepat" atau "Transformasi Garis Seleksi".
- Tombol-tombol. Tombol yang redup tidak tersedia; pilih tombol itu untuk melihat alasannya.
- **Lainnya**, berisi tombol yang tidak muat, lalu menu **Seleksi** untuk seleksi atau menu **Lapisan** untuk mask.
- Tombol penyelesai, misalnya **Terapkan** atau **Keluar**.

Bilah di samping objek disembunyikan selama Anda menyentuh kanvas atau menggeser
tampilan.

Untuk menyembunyikan bilah kanvas, lakukan salah satu langkah berikut:

- Pilih **Tampilan > Tampilkan bilah tindakan kanvas**.
- Pilih **Tampilkan bilah tindakan kanvas** di bagian bawah **Lainnya**.

Setiap ruang kerja menyimpan pengaturannya sendiri. Saat bilah disembunyikan,
pemangkasan, transformasi, gambar yang ditempatkan, dan poligon tetap menampilkan
tombol penyelesainya di tepi bawah.

## Bilah seleksi

Bilah seleksi muncul di samping seleksi selama alat seleksi atau **Operasi** aktif.
Dengan alat lain, bilah ini muncul di samping seleksi baru, tetapi tidak di samping
seleksi yang dikembalikan oleh Urungkan atau Ulangi. Kuas, alat isi, **Gradasi**, dan
**Bentuk** tidak pernah menampilkan bilah ini.

![Bilah seleksi di bawah seleksi persegi panjang.](shot:selections/working-selection-bar)

- **Batalkan Seleksi** dan **Balikkan**: lihat menu Seleksi di bawah.
- **Tinggalkan Salinan**: hanya dengan **Operasi**, lihat [Pemindahan dan transformasi](/id/docs/transform/move-transform/).
- **Salin ke Lapisan**: **Salin Seleksi ke Lapisan Baru** atau **Potong Seleksi ke Lapisan Baru**.
- **Salin**: **Salin**, **Salin Gabungan**, atau **Potong**, lihat [Salin dan tempel](/id/docs/transform/clipboard/).
- **Transformasi**: mentransformasi piksel yang terseleksi.
- **Perbaiki**: perintah perbaikan dan **Transformasi Garis Seleksi**.
- **Mask**: memberi mask pada lapisan aktif sesuai seleksi.
- **Sesuaikan**: menambahkan filter yang memakai seleksi sebagai mask-nya, lihat [Cara filter diterapkan](/id/docs/filters/how-filters-apply/).
- **Isi**: **Isi seleksi**.
- **Bersihkan**: **Bersihkan Piksel Terpilih** atau **Bersihkan di Luar Seleksi**.
- **Pangkas**: **Pangkas Kanvas ke Seleksi**, lihat [Pangkas](/id/docs/transform/crop/).
- **Mask Cepat**: lihat [Mask Cepat](/id/docs/selections/quick-mask/).
- **Simpan**: **Simpan sebagai Lapisan Seleksi**, lihat [Lapisan seleksi](/id/docs/selections/selection-layers/).

## Menu Seleksi

Anda juga dapat membuka menu **Seleksi** dari **Lainnya** di bilah seleksi, dan dari
**Seleksi** di bawah pengaturan alat seleksi di panel Alat.

| Perintah | Fungsi | Tombol |
| --- | --- | --- |
| **Pilih semua piksel** | Menyeleksi seluruh kanvas | **Ctrl+A** |
| **Batalkan seleksi piksel** | Membuang seleksi, serta mengakhiri Mask Cepat atau pengeditan lapisan seleksi | **Ctrl+D** |
| **Seleksi Ulang** | Memulihkan seleksi yang dibuang oleh perubahan terakhir | **Ctrl+Shift+D** |
| **Balikkan seleksi** | Menyeleksi semua yang berada di luar seleksi | **Ctrl+Shift+I** |
| **Tampilkan Garis Seleksi** | Menampilkan atau menyembunyikan garis seleksi | |

**Seleksi Ulang** hanya tersedia selama tidak ada yang terseleksi.

Menyembunyikan garis seleksi tidak membuang seleksi. **Tampilkan Garis Seleksi**
juga ada di menu Tampilan.

![Menu Seleksi.](shot:selections/working-select-menu)

## Memperbaiki seleksi

Anda dapat memperluas, memperkecil, memperhalus tepi, membingkai, atau menghaluskan
seleksi dengan pratinjau langsung.

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Perluas Seleksi…**, **Perkecil Seleksi…**, **Perhalus Tepi Seleksi…**, **Bingkai Seleksi…**, atau **Haluskan Seleksi…**.
- Pilih **Perbaiki** di bilah seleksi, lalu pilih **Perluas…**, **Perkecil…**, **Perhalus Tepi…**, **Bingkai…**, atau **Haluskan…**.

Panel dengan satu nilai terbuka di bagian bawah kanvas. Untuk mempertahankan hasilnya,
pilih **Terapkan** atau tekan **Enter**. **Batal** dan **Escape** memulihkan seleksi
sebelumnya.

| Perintah | Nilai | Rentang | Bawaan |
| --- | --- | --- | --- |
| **Perluas Seleksi…** | **Grow by** | 1–128 px | 5 px |
| **Perkecil Seleksi…** | **Shrink by** | 1–128 px | 5 px |
| **Perhalus Tepi Seleksi…** | **Feather radius** | 0.1–100 px | 5 px |
| **Bingkai Seleksi…** | **Border width** | 1–128 px | 5 px |
| **Haluskan Seleksi…** | **Smooth radius** | 1–64 px | 5 px |

**Bingkai Seleksi…** mengganti seleksi dengan pita di sepanjang tepinya. Penghalusan
mengisi lekukan dan membuang tonjolan yang lebih sempit dari dua kali radius, tetapi
tidak memindahkan tepi yang terletak di batas kanvas. Perluasan dan pengecilan
mempertahankan tepi lembut tetap lembut.

Di Mask Cepat, perintah ini mengubah mask.

![Menu Perbaiki di bilah seleksi.](shot:selections/working-refine-menu)

## Transformasi Garis Seleksi

Anda dapat memindahkan, menskalakan, memutar, memiringkan, atau membalik garis
seleksi tanpa memindahkan piksel apa pun.

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Transformasi Garis Seleksi**.
- Pilih **Perbaiki > Transformasi Garis Seleksi** di bilah seleksi.

Kotak transformasi muncul bersama bilah kanvas berketerangan "Transformasi Garis
Seleksi". Cara kerjanya sama seperti [Transformasi](/id/docs/transform/move-transform/),
kecuali **Distorsi**, **Lengkungkan**, dan **Interpolasi** tidak tersedia.

## Mengisi dan membersihkan

- **Isi seleksi** mengisi piksel terseleksi pada lapisan lukis aktif dengan warna saat ini, pada opasitas kuas.
- **Bersihkan Piksel Terpilih** menghapus piksel terseleksi pada lapisan aktif. Tepi lembut terhapus sebagian.
- **Bersihkan di Luar Seleksi** menghapus piksel di luar seleksi.

Lakukan salah satu langkah berikut:

- Pilih perintah dari menu **Edit**. Perintah pembersihan juga ada di menu **Seleksi**.
- Tekan **Shift+Backspace** untuk mengisi, atau **Delete** atau **Backspace** untuk membersihkan piksel terseleksi.
- Pilih **Isi**, atau **Bersihkan** lalu sebuah perintah, di bilah seleksi.
- Di Lukis, pilih **Isi seleksi** di bilah alat Perintah.
- Buka menu lapisan, lalu pilih **Seleksi Piksel > Isi Seleksi**.

Piksel tidak dapat dibersihkan di Mask Cepat, di mask, atau di lapisan dengan
**Kunci alpha** aktif.

## Menyalin ke lapisan baru

**Salin Seleksi ke Lapisan Baru** menyalin piksel terseleksi pada lapisan lukis aktif
ke lapisan baru tepat di atasnya, di posisi yang sama. **Potong Seleksi ke Lapisan
Baru** juga menghapusnya dari lapisan asal.

Lakukan salah satu langkah berikut:

- Pilih **Seleksi > Salin Seleksi ke Lapisan Baru** atau **Seleksi > Potong Seleksi ke Lapisan Baru**.
- Tekan **Ctrl+J** untuk menyalin atau **Ctrl+Shift+J** untuk memotong.
- Pilih **Salin ke Lapisan** di bilah seleksi, lalu pilih perintah.

Lapisan baru dinamai sesuai lapisan asalnya, misalnya *Salinan Ribbon*, dan
mempertahankan opasitas, visibilitas, serta mode baurnya. Seleksi dibuang sampai
Anda memilih **Seleksi Ulang**.

Tanpa seleksi, **Salin Seleksi ke Lapisan Baru** menduplikat lapisan terpilih.

## Memberi mask pada lapisan sesuai seleksi

Anda dapat menambahkan mask ke lapisan aktif yang hanya menampilkan seleksi.

Lakukan salah satu langkah berikut:

- Buka menu lapisan, lalu pilih **Mask > Mask: tampilkan seleksi**, atau **Mask > Mask: sembunyikan seleksi** untuk menyembunyikan area yang terseleksi.
- Pilih **Mask** di bilah seleksi.

Jika lapisan sudah memiliki mask, seleksi menggantikan mask yang ada. Seleksi
dibuang, dan mask terbuka untuk diedit (lihat [Mask](/id/docs/layers/masks/)).

## Seleksi dari lapisan

Anda dapat memuat cat lapisan, mask-nya, atau lapisan seleksi sebagai seleksi.

Lakukan salah satu langkah berikut:

- Untuk lapisan lukis, pilih item dari **Seleksi > Dari Opasitas Lapisan**: **Seleksi Opasitas Lapisan**, **Tambah Opasitas ke Seleksi**, **Kurangi Opasitas dari Seleksi**, atau **Irisan dengan Opasitas Lapisan**.
- Untuk lapisan yang memiliki mask, pilih item dari **Seleksi > Dari Mask Lapisan**: **Muat Mask sebagai Seleksi**, **Tambah Mask ke Seleksi**, **Kurangi Mask dari Seleksi**, atau **Irisan dengan Mask**.
- Buka menu lapisan, lalu pilih item yang sama di bawah **Seleksi Piksel**.
- Tahan **Ctrl** lalu klik gambar mini lapisan di panel Lapisan. Tambahkan **Shift** untuk menambah ke seleksi, **Alt** untuk mengurangi, atau **Shift+Alt** untuk mengambil irisan.

**Seleksi > Muat Seleksi** memuat [lapisan seleksi](/id/docs/selections/selection-layers/).
