---
title: "Bekerja dengan lapisan"
description: "Menambahkan, menata, dan menghapus lapisan di panel Lapisan."
related: ["layers/panel", "layers/types", "layers/merging", "files/open-save"]
---

## Membuat lapisan

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Baru**, lalu **Lapisan baru**, **Lapisan kliping baru**, atau **Grup baru**.
- Pilih **Lapisan baru** atau **Grup baru** di bagian bawah panel Lapisan.

Lapisan baru ditempatkan tepat di atas lapisan aktif beserta lapisan yang diklip
atau dilampirkan ke lapisan aktif. Jika grup yang aktif, lapisan baru ditempatkan
di posisi teratas grup. Lapisan tidak dapat ditambahkan ke grup yang terkunci.

**Lapisan kliping baru** memerlukan lapisan lukis aktif, atau grup aktif yang tidak
disetel ke Lewat Langsung.

## Memilih lapisan

Anda dapat memilih beberapa baris untuk dikelompokkan, diduplikat, dihapus, atau
dipindahkan bersama.

- Pilih sebuah baris untuk memilih lapisan itu saja dan menjadikannya lapisan aktif.
- **Shift**+klik sebuah baris untuk memilih baris-baris di antara baris itu dan baris yang Anda pilih sebelumnya.
- **Ctrl**+klik sebuah baris untuk menambahkannya ke seleksi atau mengeluarkannya.
- Pilih tombol baris, di kiri gambar mini, untuk menambahkan atau mengeluarkan baris tanpa mengubah lapisan aktif.
- Pilih **Lapisan > Seleksi Baris Lapisan > Pilih Semua Baris Lapisan** atau **Bersihkan Seleksi Baris Lapisan**.

Memilih baris yang sudah terpilih tidak membatalkan pilihan baris lainnya.
Perubahan pada seleksi baris tidak dicatat sebagai langkah urungkan.

## Menyembunyikan lapisan

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Visibilitas > Tampilkan lapisan**.
- Pilih ikon mata pada baris.

**Lapisan > Visibilitas** juga memuat **Tampilkan lapisan dan grup induk**,
**Isolasi lapisan terpilih**, dan **Tampilkan semua lapisan**.

## Mengganti nama lapisan

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Atur > Ubah nama lapisan…** (**Ubah nama grup…** untuk grup).
- Klik ganda nama lapisan.

![Baris lapisan dengan namanya di kolom teks.](shot:layers/working-rename)

Tekan **Enter** untuk menyimpan nama, atau **Escape** untuk membatalkan. Lapisan yang
terkunci tidak dapat diganti namanya.

## Mengubah urutan lapisan

Seret baris ke atas atau ke bawah daftar. Dengan pena atau jari, tahan baris
terlebih dahulu, atau seret pegangan di ujung kanan baris.

![Baris yang sedang diseret, dengan garis di antara dua baris tempat baris itu akan diletakkan.](shot:layers/working-drag)

Garis di atas atau di bawah sebuah baris menandai tempat lapisan akan diletakkan.
Untuk memindahkan lapisan ke dalam grup, jatuhkan lapisan di tengah baris grup
(bingkai muncul di sekeliling baris). Tekan **Escape** untuk membatalkan seretan.

Semua baris terpilih berpindah bersama, dan lapisan yang diklip serta filter
terlampir ikut berpindah bersama lapisannya. **Naikkan lapisan** dan **Turunkan
lapisan** di [pencarian perintah](/id/docs/start/command-search/) memindahkan baris
terpilih satu langkah.

## Mengelompokkan dan memisahkan grup

Untuk mengelompokkan lapisan, pilih barisnya lalu pilih
**Lapisan > Atur > Kelompokkan lapisan terpilih**, atau pilih **Grup baru** di bagian
bawah panel Lapisan.
Baris-baris itu harus berada di grup yang sama, dan dasar kliping harus dikelompokkan
bersama lapisan yang diklip ke dasar itu.

Untuk memisahkan grup, pilih **Lapisan > Atur > Pisahkan grup**. Grup yang
tersembunyi membiarkan lapisannya tetap tersembunyi. **Pisahkan grup** tidak tersedia
selama grup memiliki mask, opasitas di bawah 100%, mode baur selain Normal atau
Lewat Langsung, kliping, atau filter terlampir, atau jika lapisannya akan tampak
berbeda tanpa grup.

## Menduplikat lapisan

Pilih **Lapisan > Atur > Duplikat**, atau **Duplikat lapisan terpilih** jika beberapa
baris terpilih.

Salinannya ditempatkan tepat di atas lapisan asli, beserta lapisan yang diklip dan
filter terlampir, dengan nama "Salinan *nama*". Lapisan di dalam grup yang terkunci
tidak dapat diduplikat.

## Menghapus lapisan

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Hapus lapisan**, atau **Hapus lapisan terpilih** jika beberapa baris terpilih.
- Pilih **Hapus lapisan terpilih** di bagian bawah panel Lapisan.
- Dengan pena atau jari, usap baris ke kiri lalu pilih **Hapus**.

Pada grup yang tertutup, item menu bertuliskan **Hapus grup dan isinya**. Menghapus
grup yang terbuka mempertahankan lapisannya, sama seperti **Pisahkan grup**.

Lapisan yang diklip dan filter terlampir tetap ada saat Anda menghapus lapisannya.
Lapisan yang terkunci tidak dapat dihapus. Tombol **Delete** membersihkan piksel
yang terseleksi, bukan lapisan.

## Salin Seleksi ke Lapisan Baru

Anda dapat menyalin atau memindahkan piksel terseleksi dari lapisan lukis ke lapisan
baru, di posisi yang sama.

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Baru > Salin Seleksi ke Lapisan Baru** (**Ctrl+J**) atau **Potong Seleksi ke Lapisan Baru** (**Ctrl+Shift+J**).
- Pilih perintah yang sama dari menu **Seleksi**.
- Pilih perintah itu dari **Salin ke Lapisan** di [bilah seleksi](/id/docs/selections/working/) pada kanvas.

Lapisan baru ditempatkan di atas lapisan sumber, dengan nama "Salinan *nama*", serta
opasitas dan mode baur yang sama. Seleksi dibatalkan, dan **Seleksi > Seleksi Ulang**
mengembalikannya.

Tanpa seleksi, **Salin Seleksi ke Lapisan Baru** menduplikat lapisan terpilih.
**Potong Seleksi ke Lapisan Baru** memerlukan seleksi dan tidak tersedia selama
**Kunci alpha** aktif.

## Mengimpor gambar

Lakukan salah satu langkah berikut:

- Pilih **Berkas > Impor Gambar sebagai Lapisan…** atau tekan **Ctrl+Shift+O**.
- Pilih **Impor Gambar sebagai Lapisan…** di bagian bawah panel Lapisan.
- Seret berkas gambar ke kanvas atau ke sebuah baris di panel Lapisan.

Setiap berkas menjadi [lapisan foto](/id/docs/layers/types/) di atas lapisan aktif,
atau di atas, di bawah, atau di dalam baris tempat Anda menjatuhkannya. Gambar
diletakkan di tengah dan diperkecil agar muat di kanvas, dengan
[pegangan penempatan](/id/docs/transform/move-transform/).
