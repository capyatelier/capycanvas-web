---
title: "Edit Warna"
description: "Mengatur warna berdasarkan angkanya, kode hex, atau teks warna di dialog Edit Warna."
related: ["color/color-panel", "color/palettes", "color/eyedropper"]
---

Anda dapat mengatur warna berdasarkan angkanya di dialog **Edit Warna**. Tidak ada yang
berubah sampai Anda memilih **Gunakan Warna**.

![Dialog Edit Warna dengan roda di kiri, Saat ini dan Baru dengan kode hex di kanan atas, tiga baris nilai, dan warna terbaru di bagian bawah.](shot:color/edit-color "1 Roda dan bentuk · 2 Saat ini dan Baru · 3 Ambil dari kanvas · 4 Hex · 5 Baris nilai · 6 Warna terbaru")

## Membuka Edit Warna

Lakukan salah satu langkah berikut:

- Pilih **Edit Warna…** (ikon pensil) di kanan atas [panel Warna](/id/docs/color/color-panel/).
- Klik ganda contoh warna latar depan atau latar belakang di panel Warna.
- Pilih tombol warna di Properti, seperti **Warna** pada lapisan isian Warna Solid atau **Warna semburat** pada Hitam & Putih.
- Pilih gambar mini lapisan isian Warna Solid di panel Lapisan.
- Pilih **Warna** untuk titik gradasi di editor gradasi.
- Pilih **Warna kuas** di panel yang menampilkannya. Anda dapat menambahkannya ke panel Kuas dan Ukuran kuas ([Panel dan kolom](/id/docs/customize/panels/)).
- Di Windows, Linux, dan Android, klik kanan atau tahan contoh warna latar depan atau latar belakang, lalu pilih **Edit Warna…**.

## Roda dan bentuk

Roda berfungsi seperti di panel Warna. Pilih **OKLCH**, **HSB**, atau **HLS** di bawah
roda untuk mengubah bidang menjadi lingkaran, persegi, atau segitiga.

## Saat ini dan Baru

**Baru** menampilkan warna yang sedang Anda buat. Pilih **Saat ini** untuk mengembalikan
**Baru** ke warna awal.

## Hex

Kolom hex menampilkan Baru sebagai `#RRGGBB` dalam sRGB. Pilih kolom ini untuk mengetik
kode hex atau [teks warna](#menempelkan-warna) lainnya.

Lencana di sebelah kiri kode hex menandai kasus berikut:

- "≈": warna berada di luar sRGB, dan hex menampilkan warna sRGB terdekat.
- "Dasar": pada gambar HDR, hex menampilkan warna sebelum intensitas.
- "sRGB": ruang warna gambar bukan sRGB.

## Baris nilai

Setiap baris menampilkan Baru dalam satu format. Pilih nama format di awal baris untuk
memilih format lain. Dialog mengingat format yang Anda pilih.

| Baris | Format |
| --- | --- |
| 1 | **RGB** (0–255, bawaan), **RGB 0–1**, **RGB linear** (0–1). Nilainya dalam ruang warna gambar, yang ditampilkan di lencana pada baris. |
| 2 | **HSB** (bawaan), **HSL** |
| 3 | **OKLCH** (bawaan), **OKLab** |

![Baris nilai dengan menu format baris pertama terbuka.](shot:color/edit-color-formats)

## Mengedit nilai

- Pilih nilai untuk mengetik angka. Tekan **Enter** untuk mengonfirmasi atau **Escape** untuk membatalkan.
- Seret nilai ke atas atau ke bawah untuk mengubahnya. Tahan **Shift** untuk langkah lebih besar, atau **Alt** atau **Ctrl** untuk langkah lebih kecil.
- Tekan **Up Arrow** atau **Down Arrow** pada nilai untuk mengubahnya satu langkah.

Nilai di luar rentang kolom diubah ke batas terdekat. Rona berputar kembali di 360°.
Jika Anda mengetik teks yang bukan angka maupun warna, kolom tetap terbuka dengan pesan
kesalahan. **Gunakan Warna** tetap tidak tersedia sampai Anda memperbaiki nilai atau
menekan **Escape**.

## Menyalin warna

Pilih tombol salin di ujung kolom hex atau di ujung baris untuk menyalin nilai itu
sebagai teks. Tanda centang pada tombol mengonfirmasi penyalinan. Tekan **Ctrl+C** di
dialog, di luar kolom teks, untuk menyalin kode hex.

| Format | Teks yang disalin pada gambar sRGB | Pada ruang warna lain |
| --- | --- | --- |
| Hex | `#RRGGBB` | `#RRGGBB` |
| RGB | `rgb(R G B)` | `color(display-p3 r g b)`, `color(a98-rgb r g b)`, atau `color(prophoto-rgb r g b)`, dari 0 hingga 1 |
| RGB 0–1 | `color(srgb r g b)` | sama seperti RGB |
| RGB linear | `color(srgb-linear r g b)` | `r g b` |
| HSB, HSL | `hsb(h s% b%)`, `hsl(h s% l%)` | `h° s% b%`, `h° s% l%` |
| OKLCH, OKLab | `oklch(L% C h)`, `oklab(L% a b)` | sama |

## Menempelkan warna

Tekan **Ctrl+V** di dialog, di luar kolom teks, untuk mengatur Baru dari teks warna.
Kolom hex dan kolom nilai menerima teks yang sama:

- kode hex dengan 3, 4, 6, atau 8 digit, dengan `#`, `0x`, atau tanpa keduanya (digit alpha diabaikan);
- nama warna CSS, seperti `teal`;
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsb()`, `hsv()`, `oklch()`, dan `oklab()`;
- `color()` dengan `srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb`, atau `srgb-linear`;
- tiga angka. Baris nilai membacanya dalam formatnya sendiri. Di tempat lain, angka itu dibaca sebagai RGB dari 0 hingga 255, atau RGB dari 0 hingga 1 jika ketiganya bernilai 1 atau kurang dan salah satunya memiliki titik desimal.

Teks warna tidak pernah mengubah alpha warna.

## Ambil dari kanvas

Pilih **Ambil dari kanvas** (ikon pipet di samping Saat ini dan Baru) untuk mengambil
sampel Baru dari gambar. Dialog disembunyikan, dan sebuah strip di salah satu sudut
kanvas menampilkan Saat ini, warna sampel, dan nilainya.

Klik, atau angkat pena atau jari, untuk mengambil warna. Dialog kembali dengan warna
yang diambil sebagai Baru. Tekan **Escape** atau pilih strip itu untuk kembali tanpa
perubahan.

Dengan jari, titik sampel berada di atas ujung jari. **Ambil dari kanvas** disembunyikan
jika Edit Warna dibuka dari dialog lain.

## Warna terbaru dan palet

Bagian bawah dialog menampilkan warna terbaru Anda. Pilih salah satunya untuk
menjadikannya Baru.

Pilih **Warna terbaru dan semua palet** (panah setelah warna terbaru) untuk membuka
lembar berisi warna terbaru Anda dan setiap [palet](/id/docs/color/palettes/). Ketik di
kolom pencarian untuk menemukan nama palet, nama warna, atau kode hex. Tanda **+** di
ujung palet menyimpan Baru ke palet itu. Untuk menutup lembar, pilih **Tutup palet**
atau tekan **Escape**.

![Lembar contoh warna dengan kolom pencarian, Warna terbaru, dan palet.](shot:color/edit-color-swatches)

## Intensitas HDR

Pada [gambar HDR](/id/docs/color-management/hdr/), baris **Intensitas (EV)** dan busur di
bawah roda mengatur kecerahan dalam stop relatif terhadap putih SDR. Pada busur, dan saat
Anda menyeret nilai, rentangnya −2 hingga +6 EV. Nilai yang diketik dapat melampauinya,
dalam batas rentang kedalaman bit gambar.

## Gunakan Warna dan Batal

Pilih **Gunakan Warna** untuk menerapkan Baru. Pilih **Batal** atau tekan **Escape**
untuk menutup tanpa perubahan. Jika menu format atau lembar contoh warna sedang
terbuka, **Escape** menutupnya terlebih dahulu.
