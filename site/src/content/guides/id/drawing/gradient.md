---
title: "Gradasi"
description: "Melukis gradasi dengan alat Gradasi, mengedit warnanya, dan menambahkan lapisan Isian Gradasi."
related: ["drawing/fill", "layers/types", "filters/color", "color/edit-color"]
---

Anda dapat melukis gradasi pada lapisan dengan alat **Gradasi**, atau menambahkan
lapisan **Isian Gradasi** yang tetap dapat diedit.

## Alat Gradasi

Lakukan salah satu langkah berikut:

- Tekan **G**.
- Di Lukis, pilih **Gradasi** di bilah alat Alat.
- Di Foto, pilih tombol gradasi dan isi setelah **Cairkan** di bilah alat Alat.
- Cari **Gradasi** di pencarian perintah.

Seret dari titik awal ke titik akhir. Sebuah garis mengikuti penunjuk, dan gradasi
dilukis saat Anda melepasnya.

- Gradasi menutupi seluruh lapisan, dengan warna pertama sebelum titik awal dan warna terakhir setelah titik akhir.
- Tekan **Escape** selama menyeret untuk membatalkan.
- Seretan dengan jari menggeser kanvas.
- Seleksi yang aktif membatasi gradasi, dan **Kunci alpha** tetap berlaku.
- Di Mask Cepat atau pada lapisan seleksi, gradasi masuk ke mask seleksi.
- Setiap gradasi adalah satu langkah urungkan.

Alat ini hanya melukis karya pada lapisan, dan hanya pada lapisan yang dapat dilukis
kuas ([Alat kuas](/id/docs/drawing/brush-tools/)).

## Bentuk

- **Linear**: warna berubah sepanjang arah seretan.
- **Radial**: titik awal menjadi pusat, dan seretan menentukan jari-jari.
- **Reflected**: seperti Linear, dicerminkan di kedua sisi titik awal.

Lakukan salah satu langkah berikut:

- Pilih bentuk di **Bentuk** di bagian atas panel **Alat**, atau di panel **Set Alat**.
- Klik kanan atau tahan tombol Gradasi di bilah alat Alat, lalu pilih bentuk.
- Di bilah Opsi Alat, pilih bentuk dari **Varian**, atau dari **Alat** di Foto.

## Editor titik gradasi

![Panel Alat untuk alat Gradasi dengan baris Bentuk, editor titik gradasi, dan Opasitas.](shot:drawing/gradient-tool-panel)

Anda dapat mengedit warna gradasi di editor titik gradasi di bawah **Bentuk** pada
panel **Alat**. Tombol gradasi di bilah Opsi Alat membuka editor ini di jendela kecil.
Lapisan Isian Gradasi dan filter **Peta Gradasi** memakai editor yang sama
([Filter Warna](/id/docs/filters/color/)).

Sebelum Anda mengeditnya, gradasi alat berjalan dari warna latar depan ke warna latar
belakang dan mengikuti perubahan kedua warna itu. Setelah diedit, gradasi
mempertahankan titik-titiknya sampai Anda memilih **Atur ulang gradasi**. Pengeditan
pada gradasi alat bukan langkah urungkan.

### Interpolation

Mengatur cara warna bercampur di antara titik gradasi. **Oklab** (bawaan) mencampur
secara merata sesuai cara mata melihat warna, **Cahaya linear** mencampur seperti
cahaya, dan **Klasik** mencampur nilai warna yang tersimpan.

### Balik arah

Membalik urutan titik gradasi.

### Atur ulang gradasi

Mengembalikan gradasi alat ke warna latar depan dan latar belakang, dan gradasi lapisan
Isian Gradasi atau Peta Gradasi ke hitam dan putih.

### Tambah titik gradasi

Pilih bagian strip yang jauh dari penanda untuk menambahkan titik gradasi dengan warna
di titik tersebut. Gradasi dapat memuat hingga 32 titik.

### Penanda titik

Pilih penanda untuk memilih titiknya, atau seret penanda untuk memindahkan titik itu.

### Posisi

Mengatur posisi titik yang dipilih dalam persen. Titik ujung tetap di 0% dan 100%, dan
sebuah titik tidak dapat melewati titik di sebelahnya.

### Hapus titik gradasi

Menghapus titik yang dipilih. Titik ujung tidak dapat dihapus.

### Warna

Membuka [Edit Warna](/id/docs/color/edit-color/) untuk titik yang dipilih.

### Gunakan warna terpilih

Mengatur titik yang dipilih ke warna saat ini.

## Opasitas

**Opasitas** mengatur kekuatan gradasi dan memakai nilai yang sama dengan **Opasitas**
kuas saat ini. Di Sketsa, gunakan penggeser opasitas di tepi kiri.

## Lapisan Isian Gradasi

Anda dapat menambahkan lapisan isian yang gradasinya tetap dapat diedit.

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Baru > Isian Gradasi**.
- Pilih **Filter > Isi > Isian Gradasi**.
- Di panel Filter, pilih **Isian Gradasi** di bawah **Isi**.

Pengaturan lapisan ada di panel Properti, dan setiap perubahan adalah satu langkah
urungkan.

Seleksi yang aktif menjadi mask lapisan baru. Untuk melukis pada lapisan ini, tambahkan
mask terlebih dahulu ([Jenis lapisan](/id/docs/layers/types/)).

![Panel Properti untuk lapisan Isian Gradasi dengan Bentuk, editor titik gradasi, Sudut, Skala, dan Posisi.](shot:drawing/gradient-fill-properties)

### Bentuk

**Linear**, **Radial**, atau **Reflected**, sama seperti pada alat Gradasi.

### Gradasi

Editor titik gradasi. Lapisan baru dimulai dari hitam ke putih.

### Sudut

Mengatur arah gradasi, dari −180° hingga 180°.

### Skala

Mengatur panjang gradasi, dari 10% hingga 400%.

### Pusat X dan Pusat Y

Di bawah **Posisi**, mengatur pusat gradasi dalam persen dari lebar dan tinggi kanvas.
