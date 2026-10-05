---
title: "HDR"
description: "Gambar HDR, cara gambar itu tampil di layar, dan versi SDR-nya."
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

Anda dapat melukis warna yang lebih terang daripada putih SDR pada gambar HDR. Gambar
dengan **HDR pecahan mengambang 16-bit** atau **HDR pecahan mengambang 32-bit** adalah
gambar HDR.

## Gambar HDR

Untuk mendapatkan gambar HDR, lakukan salah satu langkah berikut:

- Di **Berkas > Baru…**, pilih prasetel **Gambar HDR** atau **Kedalaman bit** pecahan mengambang.
- Pilih **Edit > Ubah Kedalaman Bit…** lalu kedalaman pecahan mengambang.
- Buka berkas HDR PNG (BT.2020 PQ) atau HDR AVIF (HDR pecahan mengambang 16-bit), atau berkas OpenEXR (HDR pecahan mengambang 32-bit).
- Atur **Kedalaman bit** ke kedalaman pecahan mengambang di halaman **Warna** pada [Preferensi](/id/docs/preferences/) agar gambar baru menjadi HDR.

Pada gambar HDR:

- [Panel Warna](/id/docs/color/color-panel/) dan [Edit Warna](/id/docs/color/edit-color/) mengatur intensitas cat dalam EV.
- [Pembauran](/id/docs/color-management/color-spaces/) selalu Cahaya linear.
- Hamparan, Cahaya Lembut, Cahaya Keras, Bakar Warna, Terangkan Warna, Cahaya Tajam, Campuran Keras, dan Pengecualian tidak tersedia sebagai [mode baur](/id/docs/layers/blend-modes/).
- Kurva memiliki domain **HDR log** dan **Rentang HDR**.
- Alat [Rentang nada](/id/docs/selections/tonal-range/) menyediakan **HDR terang · di atas +1 stop**.
- Histogram menandai putih SDR.
- [Ekspor](/id/docs/files/export/) menyediakan format HDR.

Di editor web, gambar HDR yang lebih besar dari 12 megapiksel tidak dapat dibuka.

## HDR di layar

Pada layar yang dapat menampilkan HDR, kanvas dan Navigator menampilkan gambar HDR dalam
HDR selama **Nonaktif** dipilih di panel [Simulasi Cetak](/id/docs/color-management/proof/)
dan peringatan gamut nonaktif. Jika tidak, keduanya menampilkan versi SDR gambar, begitu
pula kontrol warna. Di editor web, HDR memerlukan peramban yang melaporkan layar HDR.

Sebuah chip di sebelah kiri bagian bawah jendela menunjukkan versi yang Anda lihat.
Pilih chip itu untuk melihat detailnya.

| Chip | Ditampilkan jika |
| --- | --- |
| "HDR" | Gambar ditampilkan dalam HDR. |
| "Pratinjau SDR" | Gambar dalam mode SDR pada layar yang menampilkan HDR. |
| "Menampilkan SDR" | Layar tidak menampilkan HDR. |

## Versi SDR

Setiap gambar HDR memiliki versi SDR yang tersimpan. Versi ini dipakai:

- pada layar tanpa HDR, dan dalam mode SDR;
- untuk gambar mini lapisan;
- untuk simulasi cetak;
- untuk ekspor SDR dan dasar SDR pada ekspor HDR JPEG dan HDR AVIF.

Anda dapat menyesuaikan versi SDR tanpa mengubah piksel HDR. Lakukan salah satu langkah
berikut:

- Pilih **Tampilan > Simulasi SDR** (tidak di Windows).
- Pilih **Simulasi SDR** di pencarian perintah.
- Pilih **SDR** di bagian atas panel Simulasi Cetak.

![Halaman SDR pada panel Simulasi Cetak dengan dial untuk keseimbangan, kontras, kecerahan, dan intensitas warna.](shot:color-management/proof-panel-sdr)

Dial di panel mengatur empat nilai. Bagian tengahnya menampilkan ilustrasi tetap, bukan
gambar Anda. Klik ganda atau ketuk ganda salah satu bagian dial untuk mengatur ulang
nilainya, atau pilih **Atur ulang tampilan SDR** di kanan atas untuk mengatur ulang
keempatnya. Saat dial memiliki fokus, tombol panah mengubah nilai selangkah demi
selangkah, dan **Shift** memperbesar langkahnya. **Escape** membatalkan seretan. Setiap
seretan adalah satu langkah urungkan dan disimpan bersama gambar.

### Keseimbangan

Seret bagian tengah dial ke kiri atau ke kanan, dari −100% hingga +100%. Ke kiri
mengutamakan bentuk besar, dan ke kanan mengutamakan tekstur halus.

### Kontras

Seret bagian tengah dial ke bawah atau ke atas, dari 50% hingga 200%.

### Kecerahan

Seret busur atas, dari −50% hingga +50%.

### Intensitas warna

Seret busur bawah, dari putih pada 0% hingga warna penuh pada 100%. Bawaannya 30%.

## Pratinjau SDR

Anda dapat beralih antara HDR dan versi SDR tanpa membuka panel Simulasi Cetak. Pilih
**Pratinjau SDR** di pencarian perintah, atau tetapkan tombol untuknya di halaman
[Pintasan Papan Ketik](/id/docs/input/keyboard/).

**Pratinjau SDR** hanya berfungsi untuk gambar HDR pada layar yang menampilkan HDR,
dengan simulasi cetak dan peringatan gamut nonaktif.
