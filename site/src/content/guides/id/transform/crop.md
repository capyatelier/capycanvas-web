---
title: "Pangkas"
description: "Memangkas dan meluruskan kanvas dengan alat Pangkas."
related: ["transform/image", "selections/working", "drawing/ruler", "photo/crop"]
---

Anda dapat memangkas kanvas sesuai bingkai dengan alat **Pangkas**. Piksel yang
terpangkas tetap ada di lapisannya, dalam keadaan tersembunyi, kecuali jika Anda
mengaktifkan **Hapus Bagian Terpangkas**.

## Memangkas

Lakukan salah satu langkah berikut:

- Pilih **Edit > Gambar > Pangkas**.
- Tekan **C**.
- Di Foto, pilih **Pangkas** di bilah alat Alat.

Bingkai dengan pegangan muncul di sekeliling seluruh kanvas, atau sebagai bingkai
terbesar dengan rasio yang dipilih. Kanvas di luar bingkai diredupkan, dan
[bilah kanvas](/id/docs/selections/working/) untuk pemangkasan muncul di tepi bawah
kanvas.

- Seret di dalam bingkai untuk memindahkannya.
- Seret pegangan sudut atau tepi untuk mengubah ukuran bingkai. Tahan **Shift** untuk mempertahankan proporsinya, atau **Alt** untuk mengubah ukuran dari titik tengah.
- Seret bingkai melewati tepi kanvas untuk menambahkan kanvas transparan.

Di layar sentuh, hanya pegangan yang merespons jari. Jari di dalam bingkai
menggeser tampilan.

Untuk menyelesaikan, pilih **Terapkan** atau tekan **Enter**. **Batal**, **Escape**,
dan **Urungkan** membuang pemangkasan. Dengan cara mana pun, alat yang Anda pakai
sebelumnya kembali aktif.

**Terapkan** juga memangkas lapisan yang terkunci. Anda tidak dapat memulai
pemangkasan selama transformasi masih terbuka.

![Bingkai pangkas pada foto terarium, dengan bilah kanvas di tepi bawah.](shot:transform/crop-bar)

## Rasio

Pilih **Bebas**, **Asli**, **1:1**, **4:5**, **2:3**, **5:7**, atau **16:9** dari
**Rasio** di bilah kanvas. Bingkai menjadi bingkai terbesar dengan rasio itu.
**Bebas** adalah bawaannya.

**Tukar orientasi pangkas**, tombol ikon di samping **Rasio**, mengubah bingkai
antara lanskap dan potret.

Rasio, hamparan, dan **Hapus Bagian Terpangkas** terbawa ke pemangkasan berikutnya.

![Menu Rasio di bilah pangkas.](shot:transform/crop-ratio-menu)

## Sesuaikan dengan Isi

**Sesuaikan dengan Isi** menyetel bingkai, dalam posisi tegak, ke batas piksel yang
terlihat, termasuk piksel di luar kanvas. **Rasio** berubah menjadi **Bebas**.

## Hamparan

Pilih **Sepertiga**, **Kisi**, **Diagonal**, atau **Rasio Emas** dari **Hamparan**.
**Sepertiga** adalah bawaannya. Tekan **O** saat memangkas untuk menampilkan hamparan
berikutnya.

## Meluruskan

Pilih **Luruskan** di bilah kanvas, lalu gambar garis di sepanjang sesuatu yang
seharusnya datar atau tegak. Bingkai berputar mengikuti garis itu. Tahan **Shift**
untuk mengepaskan garis ke kelipatan 15°. Di layar sentuh, jari menggambar garis
selama **Luruskan** terpilih.

Anda juga dapat menyetel sudut di **Luruskan** pada panel Alat. Bingkai berputar
paling jauh 45° ke kedua arah.

Saat Anda menerapkan pemangkasan yang diputar, lapisan lukis dan mask disampel ulang.
Foto yang ditempatkan mempertahankan piksel aslinya.

Untuk meluruskan sesuai garis bantu, pilih garis bantu itu lalu pilih **Luruskan** di
bilah kanvasnya (lihat [Penggaris dan garis bantu](/id/docs/drawing/ruler/)).
Pemangkasan terbuka, diputar sejajar dengan garis bantu.

## Hapus Bagian Terpangkas

Aktifkan **Hapus Bagian Terpangkas** untuk membuang piksel di luar bingkai saat Anda
menerapkan pemangkasan. Foto yang ditempatkan mempertahankan piksel aslinya.
Nonaktif secara bawaan.

Pemangkasan yang akan terlalu besar jika piksel tersembunyi dipertahankan hanya
dapat dilakukan dengan **Hapus Bagian Terpangkas** aktif.

## Atur Ulang

**Atur Ulang** mengembalikan bingkai ke seluruh kanvas, dalam posisi tegak, dan
menonaktifkan **Luruskan**. Jika sebuah rasio dipilih, bingkai menjadi bingkai
terbesar dengan rasio itu.

## Pengaturan pangkas di panel Alat

Selama Anda memangkas, panel Alat (dan bilah Opsi Alat di Foto) menampilkan:

- **Ukuran**: **Lebar** dan **Tinggi** bingkai, dalam piksel. Jika sebuah rasio dipilih, sisi lainnya mengikuti.
- **Luruskan**: sudut bingkai, dari −45° hingga 45°.
- Tombol-tombol bilah kanvas.

![Panel Alat saat memangkas, dengan Lebar, Tinggi, dan Luruskan.](shot:transform/crop-tool-panel)

## Pangkas Kanvas ke Seleksi

Anda dapat memangkas kanvas sesuai batas seleksi.

Lakukan salah satu langkah berikut:

- Pilih **Edit > Gambar > Pangkas Kanvas ke Seleksi**.
- Pilih **Pangkas** di [bilah seleksi](/id/docs/selections/working/).

Piksel di luar batas seleksi tetap ada di lapisannya, dalam keadaan tersembunyi.
Kanvas tidak dapat dipangkas sesuai seleksi yang dibalik.

## Mengembalikan piksel yang terpangkas

Pilih **Edit > Gambar > Tampilkan Semua** untuk memperbesar kanvas sampai
menampilkan piksel setiap lapisan, atau perbesar kanvas dengan
**Edit > Gambar > Ukuran Kanvas…** (lihat [Ukuran dan rotasi gambar](/id/docs/transform/image/)).
