---
title: "Bentuk"
description: "Menggambar garis, persegi panjang, elips, poligon, bintang, dan jalur dengan alat Bentuk."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

Anda dapat menggambar garis, persegi panjang, elips, poligon, bintang, dan jalur pada
lapisan yang dipilih dengan alat **Bentuk**. Pada [lapisan vektor](/id/docs/layers/vector/),
setiap bentuk menjadi jalur yang dapat Anda edit. Pada lapisan cat, bentuk melukis piksel.

## Alat Bentuk

Lakukan salah satu langkah berikut:

- Tekan **U**.
- Di Lukis, pilih **Bentuk** di bilah alat Alat. Klik kanan atau tahan tombol itu untuk memilih **Garis**, **Persegi panjang**, **Elips**, **Poligon**, **Bintang**, atau **Jalur**.
- Cari **Bentuk** di pencarian perintah, atau cari jenis bentuk seperti **Bentuk › Persegi panjang**.

Sketsa dan Foto tidak memiliki tombol Bentuk. Anda dapat menambahkannya dengan
**Sisipkan Alat…** ([Bilah alat dan bilah judul](/id/docs/customize/toolbars/)).

![Menu tombol Bentuk di bilah alat Alat pada Lukis, dengan Garis, Persegi panjang, Elips, Poligon, Bintang, dan Jalur.](shot:drawing/figure-menu)

Seret di kanvas untuk menggambar bentuk apa pun kecuali **Jalur**. Garis putus-putus
menampilkan bentuk selama Anda menyeret, dan bentuk muncul saat Anda melepasnya. Tahan
**Shift** selama menyeret untuk menggambar garis dengan kelipatan 45°, persegi,
lingkaran, atau poligon atau bintang beraturan.

- Bentuk hanya menggambar karya pada lapisan, pada lapisan vektor dan pada lapisan yang dapat dilukis kuas ([Alat kuas](/id/docs/drawing/brush-tools/)).
- **Kunci alpha** tetap berlaku.
- Pada lapisan cat, seleksi yang aktif membatasi **Garis**, **Persegi panjang**, dan **Elips**. Seleksi tidak membatasi **Poligon**, **Bintang**, **Jalur**, atau persegi panjang dengan sudut membulat.
- Jika **Cat transparan** dipilih di panel Warna, **Garis**, **Persegi panjang**, dan **Elips** menghapus pada lapisan cat. Bentuk lainnya menampilkan pemberitahuan yang meminta warna.
- Tekanan pena tidak mengubah lebar bentuk.
- Bentuk tidak mengikuti garis bantu.
- Bentuk tidak tersedia di Mask Cepat atau pada lapisan seleksi.
- Setiap bentuk adalah satu langkah urungkan.

## Jenis bentuk

- **Garis** berjalan dari titik Anda menekan hingga titik Anda melepas, dengan ujung bulat.
- **Persegi panjang** memiliki sudut di titik tekan dan titik lepas, dengan sisi sejajar tepi kanvas.
- **Elips** mengisi kotak di antara titik tekan dan titik lepas.
- **Poligon** dan **Bintang** mengisi kotak, dengan sudut atau ujung pertama di bagian atas.
- **Jalur** digambar titik demi titik.

Pilih jenis bentuk di bagian atas panel **Set Alat**, dari menu tombol Bentuk, atau dari
**Alat** di bilah Opsi Alat.

## Garis luar dan isi

- **Garis luar** menggambar tepi bentuk dengan warna saat ini, berpusat pada tepi itu.
- **Isi** menutupi bentuk dengan warna saat ini.
- **Garis luar + isi** menggambar garis luar dengan warna latar depan dan mengisi bagian dalam dengan warna latar belakang.

Pilih mode di bawah jenis bentuk di panel **Set Alat**, atau dari **Varian** di bilah
Opsi Alat. Garis hanya dapat digambar dengan **Garis luar**.

![Panel Set Alat dengan Garis, Persegi panjang, Elips, Poligon, Bintang, dan Jalur di atas Garis luar, Isi, dan Garis luar + isi.](shot:drawing/figure-tool-set)

## Pengaturan bentuk

![Panel Alat untuk Bintang, dengan Lebar garis, Opasitas, Ujung, dan Jari-jari dalam.](shot:vector/figure-settings)

**Jari-jari sudut**, **Sudut**, **Ujung**, dan **Jari-jari dalam** ada di panel **Alat**
dan bilah Opsi Alat, untuk bentuk yang memilikinya.

### Jari-jari sudut

Membulatkan sudut **Persegi panjang**, dari 0 hingga 4096 px.

### Sudut

Mengatur jumlah sudut **Poligon**, dari 3 hingga 100. Bawaannya 5.

### Ujung

Mengatur jumlah ujung **Bintang**, dari 3 hingga 100. Bawaannya 5.

### Jari-jari dalam

Mengatur seberapa jauh sudut dalam **Bintang** dari pusatnya, sebagai persentase
jari-jari luar, dari 5% hingga 100%. Bawaannya 50%.

## Jalur

Anda dapat menggambar jalur titik demi titik.

- Klik untuk menambahkan titik sudut. Tekan dan seret untuk menarik pegangan bagi titik mulus, atau tahan **Alt** untuk menyeret hanya pegangan keluar.
- Tahan **Shift** untuk menempatkan titik berikutnya dengan kelipatan 45° dari titik terakhir.
- Klik titik pertama untuk menutup jalur.
- Pilih **Selesai** di bilah tindakan kanvas atau tekan **Enter** untuk menambahkan jalur. **Batal** atau **Escape** membuangnya.
- **Hapus Titik** atau **Backspace** menghapus titik terakhir, begitu pula **Urungkan**.

![Bilah tindakan kanvas saat jalur digambar, dengan Hapus Titik, Batal, dan Selesai.](shot:vector/path-bar)

Jalur memakai mode saat ini, **Lebar garis**, dan warna saat ini, dengan sudut tajam dan ujung datar. Pada lapisan vektor, jalur terpilih saat Anda selesai, dan jalur yang dimulai dari ujung terbuka jalur terpilih akan melanjutkannya.

## Lebar garis dan Opasitas

**Lebar garis** dan **Opasitas** ada di panel **Alat** dan bilah Opsi Alat. Keduanya
berbagi nilai dengan **Ukuran kuas** dan **Opasitas** kuas saat ini
([Ukuran, kekuatan, dan opasitas cat](/id/docs/brushes/basics/)), dan **[** serta **]**
mengubah Lebar garis.

### Lebar garis

Mengatur lebar garis luar, dari 0.5 hingga 2048 px. Pengaturan ini tidak muncul dalam
mode **Isi**. Pada lapisan vektor, **Lebar garis tepi** di [Properti](/id/docs/layers/paths/)
mengubahnya kemudian.

### Opasitas

Mengatur kekuatan garis luar dan isian secara sama.
