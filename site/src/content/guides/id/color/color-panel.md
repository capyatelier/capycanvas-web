---
title: "Panel Warna"
description: "Memilih warna cat dengan roda dan contoh warna di panel Warna."
related: ["color/edit-color", "color/palettes", "color/eyedropper", "color-management/hdr"]
---

Anda dapat memilih warna cat di panel **Warna**. Semua ruang kerja memakai warna cat
yang sama.

![Panel Warna dengan roda melingkar, angka warna di kiri atas, dan contoh warna di bawah roda.](shot:color/panel "1 Angka warna · 2 Tombol bentuk · 3 Edit Warna · 4 Latar depan dan latar belakang · 5 Tukar · 6 Cat transparan · 7 Hitam dan putih")

## Membuka panel Warna

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Warna**.
- Pilih **Panel Warna** di pencarian perintah.
- Di Lukis, pilih tab **Warna** di kolom kiri.
- Pilih **Warna kuas** di ujung bilah alat Alat, atau di ujung kanan bilah judul di Sketsa. Sebuah laci terbuka dengan panel Warna dan Palet.

## Roda warna

Seret cincin luar untuk mengatur rona, dan bidang di dalamnya untuk mengatur saturasi
dan kecerahan.

Pada lingkaran, seret melewati tepi bidang di dekat kiri atas, kanan atas, atau bawah
untuk langsung mendapatkan putih, warna penuh, atau hitam. Warna abu-abu
mempertahankan rona yang terakhir Anda atur pada cincin.

## Bentuk bidang

Pilih salah satu dari dua tombol kecil di luar cincin di kanan atas untuk mengganti
bentuk bidang. Keterangan alatnya berbunyi **Gunakan lingkaran Okhsv**,
**Gunakan persegi HSV**, dan **Gunakan segitiga HLS**.

| Bentuk | Bidang | Angka warna |
| --- | --- | --- |
| Lingkaran (bawaan) | Okhsv. Putih di kiri atas, warna penuh di kanan atas, hitam di bawah. | OKLCH |
| Persegi | HSV. Saturasi bertambah ke kanan dan kecerahan bertambah ke atas. | HSB |
| Segitiga | HLS. Sudut-sudutnya adalah putih, hitam, dan rona murni. | HLS |

## Angka warna

Angka di kiri atas panel menampilkan warna dalam model sesuai bentuk bidang. Pilih
angka warna untuk beralih antara model itu dan RGB dari 0 hingga 255.

## Warna latar depan dan latar belakang

Pilih **Warna latar depan** (contoh warna besar di kiri bawah) atau
**Warna latar belakang** (contoh warna di belakangnya) untuk melukis dengan warna itu.
Pencarian perintah memakai nama yang sama. Contoh warna yang dipilih memiliki bingkai
yang lebih tebal.

Kuas berbulu menggoreskan warna yang tidak sedang Anda pakai ke dalam setiap goresan.

> **Catatan:** Di [Mask Cepat](/id/docs/selections/quick-mask/) dan pada [lapisan seleksi](/id/docs/selections/selection-layers/), contoh warna memuat pasangan terpisah, awalnya hitam dan putih, dan cat memakai nilai abu-abu dari warna. Warna karya kembali saat Anda keluar. Pada mask lapisan, warna tidak berpengaruh: kuas memperlihatkan dan Penghapus menyembunyikan.

## Cat transparan

Anda dapat menghapus dengan kuas apa pun atau alat Bentuk jika melukis memakai cat
transparan. Lakukan salah satu langkah berikut:

- Pilih **Cat transparan** (contoh warna kotak-kotak di kanan bawah).
- Pilih **Cat transparan** di pencarian perintah.
- Tetapkan tombol untuk **Lukis dengan transparansi** di halaman [Pintasan Papan Ketik](/id/docs/input/keyboard/), lalu tekan tombol itu untuk mengaktifkan atau menonaktifkan cat transparan. **Lukis dengan transparansi selama ditahan** memakai cat transparan hanya selama Anda menahan tombolnya.

Menyeret pada roda membuat Anda kembali melukis dengan warna.

## Menukar warna

Anda dapat menukar warna latar depan dan latar belakang. Lakukan salah satu langkah
berikut:

- Pilih **Tukar latar depan dan latar belakang** (dua panah di sebelah kanan contoh warna latar belakang).
- Pilih **Tukar latar depan dan latar belakang** di pencarian perintah.
- Tekan **X** pada pemetaan tombol Gaya Photoshop, Gaya Krita, Gaya Clip Studio Paint, dan Gaya GIMP, atau **Shift+X** pada Gaya Affinity.

Contoh warna yang sama tetap terpilih. Pemetaan tombol {appName} tidak memiliki tombol
untuk **Tukar warna**.

## Hitam dan putih

Pilih **Lukis dengan hitam** atau **Lukis dengan putih** (dua lingkaran kecil di samping
contoh warna transparan), atau pilih **Hitam** atau **Putih** di pencarian perintah.

Hitam atau putih menggantikan warna pada contoh warna latar depan atau latar belakang
yang dipilih. Jika **Cat transparan** dipilih, hitam atau putih menjadi warna cat
sementara. Roda kemudian mengedit warna sementara itu, dan warna latar depan dan latar
belakang tidak berubah.

## Edit Warna

Pilih **Edit Warna…** (ikon pensil di kanan atas panel), atau klik ganda contoh warna
latar depan atau latar belakang, untuk mengatur warna berdasarkan angkanya di
[Edit Warna](/id/docs/color/edit-color/). **Edit Warna…** tidak tersedia saat
**Cat transparan** dipilih.

## Menu contoh warna

Di Windows, Linux, dan Android, klik kanan atau tahan contoh warna latar depan atau
latar belakang untuk membuka **Edit Warna…**, **Palet…**, dan
**Tukar latar depan dan latar belakang**.

## Intensitas HDR

Pada [gambar HDR](/id/docs/color-management/hdr/), sebuah busur di bawah roda mengatur
intensitas cat dalam stop (EV) relatif terhadap putih SDR, dari −2 hingga +6 EV. Nilainya
muncul di bawah contoh warna, misalnya "+2.00 EV".

![Panel Warna pada gambar HDR dengan busur intensitas di bawah roda.](shot:color/panel-hdr)

- Seret sepanjang busur untuk mengatur intensitas.
- Klik ganda busur untuk kembali ke 0 EV.
- Saat busur memiliki fokus, tekan tombol panah untuk mengubah nilai per 0.1 EV, atau **Home** untuk 0 EV.

Roda mengatur warna dasar, dan intensitas mengalikannya dalam cahaya linear. Contoh
warna dan busur menampilkan pratinjau warna melalui versi SDR gambar. Busur tidak
tersedia saat **Cat transparan** dipilih.
