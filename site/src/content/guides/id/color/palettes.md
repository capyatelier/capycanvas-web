---
title: "Palet"
description: "Menyimpan warna di palet dan melukis dengan warna tersimpan dan warna terbaru di panel Palet."
related: ["color/color-panel", "color/edit-color", "color/eyedropper"]
---

Anda dapat menyimpan warna di palet dan melukis dengan warna itu dari panel **Palet**.
Palet dan warna terbaru sama di semua ruang kerja.

![Panel Palet dengan warna terbaru di bagian atas, contoh warna dari palet aktif, serta nama palet dan nama warna di bagian bawah.](shot:color/palettes-panel)

## Membuka panel Palet

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Palet**.
- Pilih **Panel Palet** di pencarian perintah.
- Di Lukis, pilih tab **Palet** di samping **Warna**.
- Pilih **Warna kuas** di ujung bilah alat Alat, atau di ujung kanan bilah judul di Sketsa. Palet berada di bawah panel Warna di dalam laci.
- Di Windows, Linux, dan Android, klik kanan atau tahan contoh warna latar depan atau latar belakang di panel Warna, lalu pilih **Palet…**.

## Warna terbaru

Baris atas menampilkan hingga 64 warna yang Anda gunakan pada karya, dari yang terbaru.
Pilih warna terbaru untuk melukis dengannya. Pilih **Bentangkan riwayat warna** (panah
di ujung baris) untuk menampilkan hingga empat baris.

Warna ditambahkan saat goresan, isian, gradasi, atau bentuk memakainya. Mengambil warna,
menghapus, melukis mask, dan memakai Baurkan atau Cairkan tidak menambahkan apa pun.
Urungkan tidak menghapus warna terbaru.

## Melukis dengan warna tersimpan

Pilih contoh warna untuk melukis dengan warnanya, atau untuk mengatur warna mask saat
Anda mengedit mask. Contoh warna yang cocok dengan warna saat ini diberi garis tepi.

## Menambahkan warna

Pilih **+** setelah contoh warna terakhir untuk menyimpan warna cat saat ini ke palet.
Contoh warna menyimpan warna yang persis sama, termasuk ruang warna, alpha, dan
intensitas HDR-nya. **+** tidak tersedia saat **Cat transparan** dipilih.

## Memberi nama warna

Nama warna saat ini ada di kanan bawah panel, dengan kode hex sebagai pratinjau sRGB.
Warna dengan intensitas HDR juga menampilkan intensitasnya, misalnya "+1.0 EV". Warna
yang belum disimpan menampilkan nama yang disarankan, seperti "Hijau kebiruan" atau
"Umber".

Pilih nama untuk mengetik nama lain, lalu tekan **Enter** untuk mengonfirmasi atau
**Escape** untuk membatalkan. Warna yang belum disimpan mendapat nama itu saat Anda
menyimpannya dengan **+**. Untuk contoh warna yang tersimpan, nama baru menggantikan
nama lama.

Nama terdiri dari 1 hingga 64 karakter dan harus unik dalam satu palet.

## Menata dan menghapus warna

Seret contoh warna untuk memindahkannya. Lepaskan di luar kisi atau tekan **Escape**
untuk membatalkan pemindahan.

Klik kanan atau tahan contoh warna (atau tekan **Shift+F10**) untuk perintah berikut:

- **Rename Color…**
- **Remove Color**
- **Urungkan Perubahan Urutan Warna** dan **Ulangi Perubahan Urutan Warna**

Saat panel memiliki fokus, **Ctrl+Z** dan **Ctrl+Shift+Z** (atau **Ctrl+Y**)
mengurungkan dan mengulangi perubahan urutan. Menambahkan atau menghapus contoh warna
mengosongkan riwayat urutan palet.

## Memilih palet

Pilih nama palet di kiri bawah panel untuk membuka daftar palet. Ketik di **Cari palet**
untuk menyaring daftar, lalu pilih palet untuk menjadikannya aktif.

![Daftar palet dengan kolom pencarian, tombol +, serta nama dan warna setiap palet.](shot:color/palettes-chooser)

## Palet baru

Pilih **+** di daftar palet, lalu pilih **New Palette…**. Palet yang dibiarkan tanpa
nama diberi nama "Palet baru".

Pustaka dapat memuat hingga 64 palet dan total 4096 warna.

## Mengganti nama dan menghapus palet

Klik kanan atau tahan palet di daftar palet, lalu pilih **Rename Palette…** atau
**Remove Palette…**. Anda tidak dapat menghapus palet terakhir.

## Mengimpor dan mengekspor palet

Untuk mengimpor berkas palet, pilih **+** di daftar palet, lalu pilih
**Import Palette…**. Capy Canvas membaca berkas `.capycolor`, `.aco`, `.cls`,
`.swatches`, `.ase`, `.afpalette`, `.gpl`, `.kpl`, dan `.json` hingga 1 MB. Berkas
menjadi palet baru dengan nama yang tersimpan di berkas, atau dengan nama berkasnya.

Untuk mengekspor palet, klik kanan atau tahan palet di daftar palet, pilih
**Export Palette**, lalu pilih format:

- **Capycolor (.capycolor)** menyimpan warna yang persis sama, termasuk ruang warna, alpha, dan intensitas HDR.
- **Clip Studio Paint, Photoshop (.aco)**, **Procreate (.swatches)**, **Affinity, Adobe (.ase)**, dan **Krita, GIMP (.gpl)** menyimpan warna sRGB tanpa transparansi. Warna di luar sRGB dipotong. Berkas Procreate menyimpan 30 warna pertama.

Panel melaporkan jumlah warna yang dipotong atau dihilangkan transparansinya.

![Menu palet dengan format Export Palette.](shot:color/palettes-menu)

## Palet bawaan

Capy Canvas menyertakan Studi laut, Arkade piksel, Fantasi gelap, Seni pop, Pastel
permen, Cetak Riso, Synthwave, Cetak tahun tujuh puluhan, Cetak cukil kayu, dan Tinta.
Anda dapat mengubah palet bawaan seperti palet lainnya. Palet bawaan yang dihapus tidak
akan kembali.
