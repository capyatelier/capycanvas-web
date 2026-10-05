---
title: "Penggaris dan garis bantu"
description: "Garis bantu yang menahan goresan kuas pada garis lurus, dan meluruskan gambar mengikuti garis bantu."
related: ["drawing/figure", "transform/crop", "transform/move-transform", "drawing/brush-tools"]
---

Anda dapat menempatkan garis bantu di kanvas yang menahan goresan kuas pada garis lurus.
Garis bantu disimpan di berkas `.capy` dan tidak muncul di gambar hasil ekspor.

## Alat Penggaris

Lakukan salah satu langkah berikut:

- Tekan **Shift+U**.
- Di Lukis, pilih **Penggaris** di bilah alat Alat. Klik kanan atau tahan tombol itu untuk memilih **Lurus**, **Sejajar**, atau **Radial**.
- Cari **Penggaris** di pencarian perintah.

Sketsa dan Foto tidak memiliki tombol Penggaris. Anda dapat menambahkannya dengan
**Sisipkan Alat…** ([Bilah alat dan bilah judul](/id/docs/customize/toolbars/)).

Seret melintasi bagian kanvas yang kosong untuk menambahkan garis bantu, atau klik untuk
menambahkan garis bantu Radial. Tahan **Shift** selama menyeret untuk memutar garis bantu
Lurus atau Sejajar dengan kelipatan 45°.

Seret gagang garis bantu untuk mengubah sudut dan panjangnya, atau seret garisnya untuk
memindahkan seluruh garis bantu.

- Tekan **Escape** untuk membatalkan seretan.
- Menambahkan, memindahkan, dan menghapus garis bantu adalah langkah urungkan.
- Saat garis bantu disembunyikan, seretan menambahkan garis bantu baru dan menampilkan kembali semua garis bantu.
- Pangkas, Ukuran Gambar, Ukuran Kanvas, serta perintah putar dan balik memindahkan garis bantu bersama gambar.

## Jenis garis bantu

![Garis bantu Lurus, Sejajar, dan Radial di kanvas, dengan garis putus-putus, gagang persegi, dan garis silang radial.](shot:drawing/ruler-guides)

Garis bantu Lurus dan Sejajar berupa garis putus-putus dengan persegi di setiap gagang.
Garis bantu Radial berupa persegi dengan garis silang putus-putus. Garis bantu yang
dipilih memiliki gagang yang lebih besar.

Hanya goresan alat kuas yang mengikuti garis bantu.

### Lurus

Goresan yang dimulai dalam jarak 12 piksel layar dari garis bantu akan mengikuti garis
itu. Garis ini membentang melintasi seluruh kanvas.

### Sejajar

Setiap goresan berjalan sejajar dengan garis bantu dari titik tempat Anda menekan.

### Radial

Goresan mengarah ke pusat garis bantu. Setiap goresan mengikuti garis dari pusat melalui
titik tempat Anda menekan.

## Garis bantu yang diikuti goresan

Garis bantu Lurus yang berada di dekat goresan lebih diutamakan daripada garis bantu
Sejajar dan Radial. Di antara beberapa garis bantu Sejajar dan Radial, yang diutamakan
adalah garis bantu yang gagang pertamanya atau pusatnya paling dekat dengan awal goresan.

## Menampilkan garis bantu dan pelekatan

Anda dapat menyembunyikan garis bantu, atau menonaktifkan pelekatan.

Lakukan salah satu langkah berikut:

- Pilih **Tampilan > Tampilkan penggaris** atau **Tampilan > Lekatkan ke penggaris**.
- Saat alat Penggaris aktif, atau saat garis bantu dipilih dengan Operasi, pilih **Tampilkan penggaris** atau **Lekatkan ke penggaris** di panel **Alat**.
- Pilih **Garis Bantu** atau **Lekatkan** di bilah garis bantu.

Keduanya aktif secara bawaan. **Lekatkan ke penggaris** tidak tersedia saat garis bantu
disembunyikan.

## Menghapus garis bantu

Pilih garis bantu, lalu lakukan salah satu langkah berikut:

- Tekan **Delete** atau **Backspace**.
- Pilih **Hapus penggaris** di panel **Alat**.
- Pilih **Hapus** di bilah garis bantu.

**Delete** dan **Backspace** hanya menghapus garis bantu saat Penggaris, Bentuk, Operasi,
Transformasi, atau Pangkas menjadi alat yang aktif. Dengan alat lain, tombol ini
menjalankan **Bersihkan Piksel Terpilih**.

## Bilah garis bantu

Saat Anda memilih garis bantu dengan alat Penggaris atau Operasi, sebuah bilah muncul
di bawah gagangnya.

| Tombol | Tindakan |
| --- | --- |
| **Hapus** | Menghapus garis bantu. |
| **Lekatkan** | Mengaktifkan atau menonaktifkan **Lekatkan ke penggaris**. |
| **Garis Bantu** | Menampilkan atau menyembunyikan semua garis bantu. Menyembunyikannya juga menyembunyikan bilah ini. |
| **Luruskan** | Memulai **Luruskan Gambar ke Garis Bantu**. Hanya untuk garis bantu Lurus. |

Menonaktifkan **Tampilan > Tampilkan bilah tindakan kanvas** menghilangkan bilah garis
bantu.

![Bilah garis bantu di bawah garis bantu Lurus yang dipilih, dengan Hapus, Lekatkan, Garis Bantu, dan Luruskan.](shot:drawing/ruler-guide-bar)

## Memindahkan garis bantu dengan Operasi

Dengan alat [Operasi](/id/docs/transform/move-transform/), seret gagang atau garis dari
garis bantu untuk memindahkan garis bantu, bukan lapisan. Operasi tidak pernah
menambahkan garis bantu.

## Luruskan Gambar ke Garis Bantu

Anda dapat meratakan gambar mengikuti garis bantu Lurus.

Pilih garis bantu Lurus, lalu lakukan salah satu langkah berikut:

- Pilih **Luruskan** di bilah garis bantu.
- Cari **Luruskan Gambar ke Garis Bantu** di pencarian perintah.

Alat Pangkas terbuka dengan bingkai yang diputar sehingga garis bantu menjadi datar atau
tegak, mana pun yang lebih dekat. Terapkan pemangkasan untuk memutar gambar
([Pangkas](/id/docs/transform/crop/)).
