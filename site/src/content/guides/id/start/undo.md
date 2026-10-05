---
title: "Urungkan dan ulangi"
description: "Mengurungkan dan mengulangi perubahan pada gambar, serta riwayat terpisah untuk perubahan tata letak."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

Anda dapat mengurungkan perubahan pada gambar langkah demi langkah, dan mengulangi
langkah yang sudah diurungkan. Setiap gambar yang terbuka memiliki
riwayatnya sendiri.

![Tombol Urungkan dan Ulangi di bilah alat Perintah.](shot:start/undo-commands)

## Urungkan

Lakukan salah satu langkah berikut:

- Pilih **Edit > Urungkan**.
- Tekan **Ctrl+Z**.
- Pilih **Urungkan** di bilah alat Perintah. Di Sketsa, **Urungkan** ada di bilah pada tepi kiri layar.
- Ketuk kanvas dengan dua jari.

## Ulangi

Lakukan salah satu langkah berikut:

- Pilih **Edit > Ulangi**.
- Tekan **Ctrl+Shift+Z** atau **Ctrl+Y**.
- Pilih **Ulangi** di bilah alat Perintah, atau di bilah pada tepi kiri di Sketsa.
- Ketuk kanvas dengan tiga jari.

Perubahan baru setelah Urungkan menghapus langkah yang masih dapat diulangi.

## Yang dihitung sebagai langkah

Setiap goresan, pengisian, perubahan filter, transformasi, pemangkasan, perubahan ukuran
kanvas, dan perubahan seleksi adalah satu langkah, begitu pula setiap perubahan pada
lapisan. Perubahan pada tampilan, alat, kuas, warna, dan tata letak bukan langkah.

Saat Anda menempatkan gambar, mentransformasi lapisan, atau memakai alat Pangkas,
Urungkan membatalkan operasi itu alih-alih mundur satu langkah.

## Panjang riwayat

Setiap gambar menyimpan hingga 256 langkah. Langkah terlama dibuang lebih dulu.

## Menyimpan dan membuka kembali

Menyimpan tidak menghapus riwayat. Gambar yang Anda buka dari berkas `.capy` dimulai
dengan riwayat kosong, tetapi gambar yang terbuka kembali saat Anda memulai ulang
Capy Canvas tetap memiliki langkah urungkannya.

## Perubahan tata letak

Perubahan pada panel, bilah alat, bilah judul, dan ruang kerja memiliki riwayatnya
sendiri. **Edit > Urungkan** tidak pernah mengurungkan perubahan tata letak.

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Urungkan Perubahan Tata Letak** atau **Jendela > Ulangi Perubahan Tata Letak**.
- Tekan **Ctrl+Alt+Z** atau **Ctrl+Alt+Shift+Z**.

Setiap ruang kerja menyimpan riwayat tata letaknya sendiri, dan riwayat itu tetap ada
setelah aplikasi dimulai ulang. **Jendela > Ruang kerja > Riwayat Tata Letak…**
menampilkan tata letak sebelumnya dari ruang kerja saat ini.
