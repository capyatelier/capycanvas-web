---
title: "Membuka dan menyimpan"
description: "Membuka gambar dan foto, menyimpan berkas .capy, dan bekerja dengan beberapa gambar yang terbuka."
related: ["files/new", "files/export", "transform/move-transform", "start/undo"]
---

Perintah di halaman ini ada di menu **Berkas**. Di Sketsa, buka menu ini dari
**Menu Utama** di bilah judul.

![Menu Berkas.](shot:files/file-menu)

## Membuka gambar atau foto

Anda dapat membuka gambar `.capy` serta foto berformat OpenEXR, TIFF, PNG, WebP, BMP,
JPEG, GIF, HEIF, dan AVIF. Setiap berkas terbuka di tabnya sendiri.

Lakukan salah satu langkah berikut:

- Pilih **Berkas > Buka…**. Anda dapat memilih beberapa berkas sekaligus, kecuali di Linux.
- Tekan **Ctrl+O**.
- Di Lukis dan Foto, pilih **Buka…** di bilah alat Perintah.
- Di editor web atau di Linux, seret berkas ke nama gambar atau ke tab di bilah judul.
- Jika Anda memasang editor web sebagai aplikasi, buka berkas `.capy`, `.png`, `.jpg`, `.tif`, `.avif`, atau `.exr` dengan {appName} dari sistem Anda.

## Foto

Foto terbuka sebagai gambar baru dengan lapisan foto, yang diberi nama sesuai berkasnya,
di atas lapisan **Kertas**. Foto mempertahankan profil warnanya dan, secara bawaan,
kedalaman bitnya. Menyimpan gambar membuat berkas `.capy` dan tidak pernah menimpa foto.

- GIF atau WebP animasi hanya membuka bingkai pertamanya.
- Foto dapat berukuran hingga 32768 piksel di setiap sisi.
- Foto CMYK hanya dapat dibuka jika memiliki profil warna tertanam.
- Foto HEIF dan AVIF HDR tidak dapat dibuka.

Jika **RGB dan skala abu-abu tanpa profil** disetel ke **Tanyakan** di
[Preferensi](/id/docs/preferences/), foto tanpa profil warna membuka dialog
**Pilih interpretasi gambar**.

## Mengimpor gambar sebagai lapisan

Anda dapat menambahkan gambar ke gambar saat ini sebagai lapisan baru.

Lakukan salah satu langkah berikut:

- Pilih **Berkas > Impor Gambar sebagai Lapisan…**.
- Tekan **Ctrl+Shift+O**.
- Seret gambar ke kanvas, atau ke salah satu baris panel **Lapisan**.

Setiap gambar menjadi lapisan yang diberi nama sesuai berkasnya, di atas lapisan yang
dipilih, dengan [gagang transformasi](/id/docs/transform/move-transform/) untuk
menempatkannya. Gambar yang lebih besar dari kanvas diperkecil agar muat.

Anda tidak dapat mengimpor berkas `.capy`. Di editor web, ukuran gambar maksimal 512 MiB.

## Menyimpan

Anda dapat menyimpan gambar beserta semua lapisannya sebagai berkas `.capy`.

Lakukan salah satu langkah berikut:

- Pilih **Berkas > Simpan**.
- Tekan **Ctrl+S**.
- Di Lukis dan Foto, pilih **Simpan** di bilah alat Perintah.

Penyimpanan pertama menanyakan lokasi, dan penyimpanan berikutnya menulis ke berkas yang
sama. Setelah disimpan, tab menampilkan nama berkas tanpa tanda ●.

Di Firefox dan Safari, gambar dianggap tersimpan hanya setelah Anda memilih **Unduh**
lalu **Berkas disimpan** di dialog **Unduh berkas**.

![Dialog Unduh berkas dengan Batal, Unduh, dan Berkas disimpan.](shot:files/download-file)

**Berkas > Simpan Sebagai…** (**Ctrl+Shift+S**) selalu menanyakan lokasi, dan
penyimpanan berikutnya masuk ke berkas baru itu. **Simpan** juga menanyakan lokasi jika
berkas di disk berubah sejak Anda membuka atau menyimpannya.

**Simpan** tidak tersedia selama pemangkasan atau transformasi sedang terbuka.

## Isi berkas .capy

Berkas `.capy` menyimpan setiap lapisan beserta mask dan pengaturannya, filter, seleksi
dan garis bantu yang disimpan, ruang warna, kedalaman bit, dan pembauran, serta data
EXIF, XMP, dan IPTC foto. Berkas ini tidak menyimpan riwayat urungkan, tampilan, atau
seleksi yang sedang aktif.

## Gambar hanya-lihat

Berkas `.capy` yang tidak dapat diedit oleh {appName}, misalnya berkas yang rusak,
terbuka di dialog, bukan di tab. **Copy Original File…** menyimpan salinan berkas, dan
**Export Preview Image…** menyimpan pratinjau gambar sebagai PNG.

## Tab gambar

![Tiga tab gambar di bilah judul, salah satunya ditandai belum disimpan.](shot:files/drawing-tabs)

Bilah judul menampilkan tab untuk setiap gambar yang terbuka. Jika hanya satu gambar
yang terbuka, bilah judul menampilkan nama dan ukuran gambar itu.

Pilih tab untuk beralih ke gambarnya, atau gunakan tombol berikut:

| Untuk | Editor web | Linux |
| --- | --- | --- |
| Menampilkan gambar sebelumnya | **Alt+Page Up** | **Ctrl+Page Up** atau **Ctrl+Shift+Tab** |
| Menampilkan gambar berikutnya | **Alt+Page Down** | **Ctrl+Page Down** atau **Ctrl+Tab** |
| Membuka daftar Gambar | **Ctrl+Alt+D** | **Ctrl+Shift+A** |

Di editor web, seret tab ke samping untuk mengubah urutan tab.

Tanda ● sebelum nama menandai perubahan yang belum disimpan. Pada bilah judul yang
sempit, tab berubah menjadi satu tombol yang membuka daftar Gambar.

Setiap tab menyimpan riwayat urungkan, tampilan, dan seleksinya sendiri. Tab bukan
bagian dari ruang kerja.

## Gambar…

![Daftar Gambar dengan tiga gambar.](shot:files/drawings-list)

Anda dapat melihat semua gambar yang terbuka dalam satu daftar.

Lakukan salah satu langkah berikut:

- Pilih **Berkas > Gambar…** atau **Jendela > Gambar…**.
- Di editor web, klik kanan sebuah tab.

Pilih baris untuk beralih ke gambarnya, seret pegangan di sebelah kirinya untuk mengubah
urutan, atau pilih **×** untuk menutup gambar. Urutan tab memiliki **Urungkan urutan tab**
dan **Ulangi urutan tab** sendiri di bagian bawah daftar.

## Menutup gambar

Lakukan salah satu langkah berikut:

- Pilih **Berkas > Tutup**.
- Tekan **Ctrl+W**. Di editor web, tekan **Ctrl+Alt+W**.
- Pilih **×** di tab gambar.

Jika gambar memiliki perubahan yang belum disimpan, dialog bertanya "Simpan perubahan
pada “*nama*”?" dengan **Batal**, **Buang Perubahan**, dan **Simpan**.

Saat Anda menutup gambar terakhir, editor web membuka gambar kosong yang baru. Di Linux,
jendela tertutup.

## Membuka kembali setelah dimulai ulang

Semua gambar yang terbuka, baik sudah disimpan maupun belum, terbuka kembali saat Anda
memulai {appName} berikutnya, masing-masing dengan riwayat urungkan, tampilan, seleksi,
dan ekspor terakhirnya. Keluar dari {appName} tidak meminta Anda menyimpan.

Di editor web, menghapus data situs akan menghapus gambar yang belum disimpan.

Setelah {appName} tertutup secara tak terduga, gambar yang terbuka kembali menampilkan
"(dipulihkan)" setelah namanya sampai Anda menyimpannya.

## Jendela Baru

Di Windows, macOS, Linux, dan iPad, **Berkas > Jendela Baru** (**Ctrl+Shift+N**)
membuka jendela lain dengan gambarnya sendiri.
