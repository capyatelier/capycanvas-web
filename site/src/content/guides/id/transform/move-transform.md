---
title: "Pemindahan dan transformasi"
description: "Memindahkan dan mentransformasi lapisan serta piksel terseleksi dengan alat Operasi dan Transformasi."
related: ["selections/working", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Anda dapat memindahkan lapisan dan piksel terseleksi dengan alat **Operasi**, serta
menskalakan, memutar, memiringkan, mendistorsi, atau melengkungkannya dengan
**Transformasi**.

## Alat Operasi

Lakukan salah satu langkah berikut:

- Buka menu lapisan di panel Lapisan, lalu pilih **Pindahkan lapisan / mask**.
- Tekan **O**.
- Di Lukis dan Foto, pilih **Operasi / Transformasi** di bilah alat Alat. Klik kanan atau tahan tombol itu untuk memilih **Operasi**.
- Ketik "Operasi" di [pencarian perintah](/id/docs/start/command-search/).

Sketsa tidak memiliki tombol **Operasi**.

## Memindahkan lapisan

Jika tidak ada seleksi, seret di kanvas untuk memindahkan lapisan terpilih. Tombol
panah menggesernya sejauh 1 px, dan 10 px dengan **Shift**.

Lapisan yang terkunci tidak dapat dipindahkan.

## Memindahkan piksel terseleksi

Jika ada seleksi, seret untuk memindahkan piksel terseleksi pada lapisan lukis aktif,
dalam langkah piksel utuh. Selama Anda mengedit mask, **Operasi** memindahkan mask.

Saat garis bantu ditampilkan, **Operasi** juga memilih dan menyeret garis bantu
(lihat [Penggaris dan garis bantu](/id/docs/drawing/ruler/)).

## Tinggalkan Salinan

Anda dapat memindahkan salinan piksel terseleksi dan membiarkan aslinya tetap di
tempat.

Aktifkan **Tinggalkan Salinan** di panel Alat, atau di
[bilah seleksi](/id/docs/selections/working/). Tahan **Alt** saat mulai menyeret
untuk melakukan kebalikannya pada satu seretan.

## Transformasi

Lakukan salah satu langkah berikut:

- Pilih **Edit > Transformasi**.
- Tekan **Ctrl+T**.
- Pilih **Transformasi** di bilah alat Perintah di Lukis dan Foto, atau di bilah judul di Sketsa.
- Pilih **Transformasi** di bilah seleksi.
- Di Lukis dan Foto, klik kanan atau tahan **Operasi / Transformasi** di bilah alat Alat, lalu pilih **Transformasi**.

Jika ada seleksi, **Transformasi** mengubah piksel terseleksi pada lapisan aktif atau
mask. Jika tidak ada, perintah ini mengubah lapisan terpilih. Kotak dengan pegangan
dan bilah kanvas muncul.

Untuk menyelesaikan, pilih **Terapkan** atau tekan **Enter**. **Batal** atau
**Escape** membuang transformasi, begitu pula **Urungkan** selama Anda mentransformasi
lapisan.

Untuk mentransformasi beberapa lapisan, batalkan seleksi terlebih dahulu.

## Pegangan

Dalam **Bebas** dan **Seragam**:

- Seret di dalam kotak untuk memindahkannya. Tahan **Shift** untuk memindahkan hanya secara horizontal atau vertikal.
- Seret pegangan sudut atau tepi untuk menskalakan dari sisi seberangnya. Tahan **Shift** untuk mempertahankan proporsi, atau **Alt** untuk menskalakan terhadap titik poros.
- Tahan **Ctrl** lalu seret pegangan tepi untuk memiringkan, hingga 85°.
- Seret pegangan di atas tepi atas untuk memutar terhadap titik poros. Tahan **Shift** untuk kelipatan 15°.
- Seret titik poros untuk memindahkannya.

Dalam **Distorsi**:

- Seret sudut untuk memindahkannya sendiri, atau pegangan tepi untuk memindahkan tepi itu.
- Tahan **Shift** pada sudut untuk mencerminkan gerakan ke sudut di sebelahnya, untuk perspektif simetris.

Dalam **Lengkungkan**:

- Seret titik-titik jaring, serta pegangan tangen titik yang terpilih.
- **Shift**+klik titik-titik untuk memindahkan beberapa titik bersama.

Dalam setiap mode:

- Tombol panah menggeser kotak sejauh 1 px, dan 10 px dengan **Shift**.
- Di layar sentuh, jari pada pegangan atau di dalam kotak akan menyeretnya. Jari di tempat lain menggeser tampilan.

## Bilah transformasi

![Bilah kanvas untuk transformasi, dengan Mode, Lekatkan, tombol balik dan putar, Atur Ulang, Interpolasi, Batal, dan Terapkan.](shot:transform/transform-bar)

### Mode

**Bebas**, **Seragam**, **Distorsi**, atau **Lengkungkan**. **Seragam** mempertahankan
proporsi. Transformasi lapisan terbuka dalam **Seragam**.

### Ukuran Asli

Mengembalikan foto yang ditempatkan ke 100%. Hanya untuk foto tanpa **Distorsi** atau
**Lengkungkan**.

### Lekatkan

Melekatkan tepi dan titik tengah kotak ke kanvas, ke lapisan terlihat lainnya, dan ke
garis bantu. Rotasi tidak melekat. Nonaktif secara bawaan.

### Perspektif

Dengan **Distorsi**, mencerminkan setiap seretan sudut ke sudut di sebelahnya.

### Kisi lengkung

Dengan **Lengkungkan**:

- **Pisahkan Kisi**: pilih **Pisahkan secara Vertikal**, **Pisahkan secara Horizontal**, atau **Pisahkan Menyilang**, lalu ketuk lengkungan untuk menambahkan garis kisi di sana tanpa mengubah bentuknya. **Escape** membatalkan pemisahan. Satu kisi dapat memuat hingga 32 sel ke setiap arah.
- **Pilih Titik**: ketuk titik-titik untuk memilihnya dan memindahkannya bersama.
- **Atur Ulang Kisi**: mengganti lengkungan dengan kisi lurus.
- **Kisi**: **3 × 3** (bawaan), **4 × 4**, atau **5 × 5**. Tersedia sampai Anda mengubah bentuknya.

![Bilah kanvas dalam mode Lengkungkan, dengan Pisahkan Kisi, Pilih Titik, Atur Ulang Kisi, dan Kisi.](shot:transform/warp-bar)

### Tombol balik dan putar

Tombol ikon **Balik secara horizontal**, **Balik secara vertikal**, **Putar 90° ke
kiri**, dan **Putar 90° ke kanan** mencerminkan atau memutar isi terhadap titik poros.

### Atur Ulang

Membatalkan setiap perubahan dalam transformasi ini dan membiarkannya tetap terbuka.
**Mode** kembali ke **Bebas**.

### Interpolasi

Menentukan cara piksel disampel ulang: **Terdekat**, **Bilinear**, **Bikubik**, atau
**Lanczos**. **Bilinear** adalah bawaan dalam **Bebas** dan **Seragam**, dan
**Bikubik** dalam **Distorsi** dan **Lengkungkan**.

## Nilai transformasi di panel Alat

Panel Alat, dan bilah Opsi Alat di Foto, menampilkan nilai transformasi yang sedang
terbuka, kecuali dalam **Lengkungkan**.

- **Jangkar posisi**: **X** dan **Y**, dalam piksel, dengan kisi jangkar di atasnya untuk memilih titik kotak yang ditunjukkan nilai tersebut.
- **Skala**: **Lebar** dan **Tinggi**, dalam persen. **Seragam** menjaga keduanya tetap terkait.
- **Rotasi**: **Sudut**, dari −180° hingga 180°.
- **Kemiringan**: **Kemiringan**, dari −85° hingga 85°.

![Panel Alat selama transformasi, dengan Jangkar posisi, Skala, Rotasi, dan Kemiringan.](shot:transform/transform-numbers)

## Transformasi lapisan

Transformasi pada seluruh lapisan lukis atau lapisan foto disimpan bersama setiap
lapisan, dan pikselnya tidak disampel ulang. **Transformasi** terbuka kembali dari
transformasi yang tersimpan.

Sampai Anda menerapkan transformasi ke piksel, lapisan yang diskalakan atau diputar
tidak dapat diretus, dan lapisan yang didistorsi atau dilengkungkan tidak dapat
dilukis.

## Terapkan Transformasi ke Piksel

Anda dapat menjadikan transformasi yang tersimpan pada lapisan sebagai bagian dari pikselnya.

Lakukan salah satu langkah berikut:

- Pilih **Edit > Terapkan Transformasi ke Piksel**.
- Pilih **Lapisan > Pengaturan Lapisan > Terapkan Transformasi ke Piksel**.

Selama prosesnya berjalan, bilah di bagian bawah kanvas bertuliskan "Menerapkan
transformasi…" dengan **Batal**.

## Transformasikan lagi

Jika tidak ada seleksi, pilih **Edit > Transformasikan lagi** untuk menerapkan
transformasi lapisan terakhir ke lapisan terpilih. Penempelan, impor, dan
transformasi piksel terseleksi tidak diulang.

## Gambar yang ditempatkan

Saat Anda menempelkan gambar dari aplikasi lain atau memilih **Berkas > Impor Gambar
sebagai Lapisan…**, gambar terbuka di kotak transformasi. **Terapkan** menempatkan
gambar dan **Batal** membuang gambar. Sampai Anda memilih salah satunya, perintah lain
tidak tersedia.
