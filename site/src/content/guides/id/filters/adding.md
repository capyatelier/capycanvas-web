---
title: "Menambahkan dan mengedit filter"
description: "Menambahkan filter dan mengubah pengaturannya di panel Properti."
related: ["filters/how-filters-apply", "filters/tone", "filters/color", "start/command-search"]
---

Anda dapat menambahkan filter [di lapisannya sendiri atau terlampir ke satu lapisan](/id/docs/filters/how-filters-apply/),
dan mengubah pengaturannya di panel **Properti**.

## Panel Filter

Anda dapat menambahkan filter di lapisannya sendiri dengan memilihnya di panel
**Filter**.

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Filter**.
- Di Lukis dan Foto, pilih tab **Filter** di samping **Properti** di kolom kanan.
- Di Sketsa, pilih **Filter** di bilah judul.

![Panel Filter dengan menu kategori, tombol pencarian, dan baris filter beserta pratinjaunya.](shot:filters/filters-panel)

Saat sebuah lapisan terpilih, setiap baris menampilkan pratinjau filter pada lapisan
itu dan lapisan di bawahnya. Filter beranimasi memiliki tanda di depan ikonnya.

Menu di bagian atas menampilkan satu kategori atau **Semua filter**. **Cari filter**
mencari filter berdasarkan nama di dalam kategori yang dipilih.

Setelah Anda menambahkan filter, panel **Properti** tampil di depan, di samping
**Filter**.

## Menu Filter

Anda dapat menambahkan filter di lapisannya sendiri dari menu **Filter**.

Lakukan salah satu langkah berikut:

- Pilih kategori dan filter dari menu **Filter**.
- Di Sketsa, pilih **Menu Utama > Filter**, lalu kategori dan filter.
- Ketik nama filter di [pencarian perintah](/id/docs/start/command-search/).

Menu ini juga memuat [**Pemisahan Frekuensi…**](/id/docs/retouch/dodge-burn/), dan
submenu **Isi** di dalamnya menambahkan [lapisan isian](/id/docs/layers/types/).
Filter tidak dapat ditambahkan di Mask Cepat atau selama Anda mengedit lapisan
seleksi.

## Sesuaikan

Anda dapat menambahkan filter yang di-mask sesuai seleksi saat ini. Pilih
**Sesuaikan** di bilah seleksi pada kanvas, lalu pilih kategori dan filter.

![Bilah seleksi dengan menu Sesuaikan terbuka pada kategori Nada.](shot:filters/selection-adjust)

## Tambahkan filter

Anda dapat melampirkan filter ke lapisan terpilih.

Lakukan salah satu langkah berikut:

- Pilih **Tambahkan filter** di bagian bawah panel Lapisan atau panel **Properti**.
- Buka menu lapisan, lalu pilih **Tambahkan filter**.

![Menu Tambahkan filter yang dibuka dari bagian bawah panel Lapisan.](shot:filters/add-filter-menu)

**Tambahkan filter** berfungsi pada lapisan lukis, lapisan foto, dan grup yang tidak
terkunci. Grup juga tidak boleh disetel ke Lewat Langsung. Menunya memuat semua
kategori kecuali **Isi**.

## Laci Filter di Sketsa

Di Sketsa, Anda dapat memilih filter dan mengubah pengaturannya di laci **Filter**.
Pilih **Filter** di bilah judul, lalu pilih kategori di **Jenis Filter** dan filter di
**Filter**.

![Laci Filter di Sketsa dengan kolom Jenis Filter, Filter, dan Properti.](shot:filters/sketch-drawer)

| Lapisan terpilih | Memilih filter di laci |
| --- | --- |
| Filter | Menggantinya, dengan tetap mempertahankan nama, mask, opasitas, mode baur, dan posisinya |
| Lapisan yang diklip | Melampirkan filter ke lapisan itu |
| Lapisan lainnya | Menambahkan filter di lapisannya sendiri di atas lapisan itu |

**Batal** di bagian bawah **Jenis Filter** menghapus filter terpilih dan menutup
laci. Untuk mempertahankan filter, pilih **Filter** di bilah judul sekali lagi.

## Panel Properti

Anda dapat mengubah pengaturan filter terpilih di panel **Properti**.

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Properti**.
- Di Lukis dan Foto, pilih tab **Properti** di kolom kanan.
- Di Sketsa, gunakan kolom kanan laci **Filter**.

![Panel Properti untuk Kurva dengan menu halaman, Ambil sampel titik, Penyesuaian terarah, dan grafik kurva.](shot:filters/properties-curves)

| Kontrol | Penggunaan |
| --- | --- |
| Menu halaman | Menampilkan satu halaman pengaturan filter, misalnya kurva **Merah** pada **Kurva**. |
| Penggeser | Seret, atau pilih **−** atau **+**. Pilih nilainya untuk mengetik angka, satuan, atau ekspresi seperti `85/2`. Kosongkan nilainya untuk memulihkan nilai bawaan. |
| Warna | Membuka [Edit Warna](/id/docs/color/edit-color/). **Gunakan warna terpilih** menyetelnya ke warna saat ini. |
| Gradasi | Mengedit titik gradasi seperti pada alat [Gradasi](/id/docs/drawing/gradient/). |

Setiap seretan adalah satu langkah urungkan, dan **Escape** selama menyeret
memulihkan nilainya. Beberapa pengaturan menerima nilai ketikan yang melewati
ujung penggeser.

Ukuran dalam px adalah piksel kanvas. Setelah [**Ukuran Gambar…**](/id/docs/transform/image/),
efeknya ikut berskala bersama gambar dan angkanya tetap sama.

Selama **Bayangan/Sorotan**, **Kejernihan**, atau **Hilangkan kabut** diperbarui,
judul panel diakhiri dengan "Memperbarui…". Pengaturan filter yang terkunci tidak
dapat diubah.

## Menyetel nada dari gambar

**Level**, **Kurva**, dan **Keseimbangan Putih** memiliki tombol di bagian atas
panel **Properti** yang membaca gambar sebagaimana gambar itu sampai ke filter.

| Tombol | Filter | Fungsi |
| --- | --- | --- |
| **Ambil sampel titik > Pilih titik hitam**, **Pilih titik netral**, atau **Pilih titik putih** | **Level**, **Kurva** | Klik kanvas untuk menyetel titik tersebut. |
| **Pilih titik netral** | **Keseimbangan Putih** | Klik kanvas untuk menyetel **Suhu** dan **Semburat** agar titik itu menjadi netral. |
| **Otomatis** | **Level** | Menyetel **Hitam**, **Putih**, dan **Nada tengah** masukan pada halaman saat ini dari gambar. Bertuliskan **Batal** selama berjalan. |
| **Penyesuaian terarah** | **Kurva** | Seret ke atas atau ke bawah di kanvas untuk menaikkan atau menurunkan kurva pada nada di bawah penunjuk. |

Di halaman **RGB**, tombol-tombol ini mengubah semua kanal, dan di halaman kanal
hanya kanal itu.

Selama pemilih titik atau **Penyesuaian terarah** aktif, bilah di bagian bawah
kanvas menampilkan petunjuk serta **Batal** atau **Selesai**. Jika sebuah titik tidak
dapat dipakai, pesan muncul dan pemilih titik tetap aktif.

## Panel Histogram

Anda dapat memeriksa nada gambar di panel **Histogram**.

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Histogram**.
- Di Foto, pilih tab **Histogram** di bagian atas kolom kanan.

![Panel Histogram dengan menu sumber dan kanal, grafik, serta tombol kliping.](shot:filters/histogram)

| Kontrol | Pilihan |
| --- | --- |
| Menu sumber (awalnya **Terlihat**) | **Terlihat**, **Lapisan terpilih**, **Acuan** (lapisan yang disetel ke **Gunakan sebagai acuan**), **Seleksi** (gambar yang terlihat di dalam seleksi) |
| Menu kanal (awalnya **RGB**) | **RGB**, **Merah**, **Hijau**, **Biru**, **Luminans** |
| **Log jumlah** | Menampilkan jumlah piksel dalam skala logaritmik. |
| **Bayangan**, **Sorotan** | Menandai area yang terpotong di kanvas. Di gambar HDR, tombol ini bertuliskan **Bayangan (SDR)** dan **Sorotan (SDR)**. |

Status di bawah grafik bertuliskan "Tepat" setelah penghitungan selesai.

## Panel Bentuk gelombang

Anda dapat melihat kecerahan dan warna dari kiri ke kanan di seluruh gambar di panel
**Bentuk gelombang**.

Lakukan salah satu langkah berikut:

- Pilih **Jendela > Bentuk gelombang**.
- Di Foto, pilih tab **Bentuk gelombang** di samping **Histogram**.

Panel ini memiliki menu kanal sendiri dan **Log jumlah**. Menu sumber dan tombol
kliping dipakai bersama dengan panel **Histogram**.
