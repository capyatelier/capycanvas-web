---
title: "Penyamaran"
description: "Berikan pita, cakram, dan blok lapisan warnanya sendiri dengan tepi yang dapat diedit."
purpose: "Pada tahap ini, setiap bentuk mendapat lapisan warnanya masing-masing. Warna memenuhi seluruh lapisan, dan topeng menentukan bagian mana yang Anda lihat. Karena tidak ada yang terhapus, Anda dapat menyesuaikan tepi bentuk apa pun nanti hanya dengan mengecat topengnya."
techniques: ["Pilih bentuk dengan laso atau Pilih otomatis.", "Ubah seleksi menjadi topeng dan isi layer dengan warna.", "Paint pada topeng untuk mengatur tepinya."]
figure: "1: Gambar kecil topeng yang dipilih pada pita. 2: Pita, Cakram, dan Blok di bawah Seni garis. 3: Penghapus, yang menyembunyikan bagian topeng."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Gambar kecil topeng yang dipilih pada pita. 2: Pita, Cakram, dan Blok di bawah Seni garis. 3: Penghapus, yang menyembunyikan bagian topeng."}
---

## 1. Pilih bentuk

Sembunyikan **Sketch** dan **Color rough**. Pilih **Lasso selection** dan telusuri pita dengan hati-hati, seperti pada contoh.

Jika seni garis Anda tertutup di sekitar suatu bentuk, **Auto select** dapat melakukannya dengan satu klik. Tandai **Line art** sebagai layer referensi dengan memilih **Layer Settings → Use as reference** di menunya. Kemudian pilih **Auto select**, pilih **Sample reference layers** di panel Tool, dan klik di dalam bentuk. [Alat seleksi](/id/docs/tools/selections/) menjelaskan pengaturan yang mengontrol seberapa jauh penyebaran seleksi.

## 2. Buat layer warna bertopeng

Tambahkan layer baru bernama **Ribbon** di bawah Line art. Dengan pilihan yang masih aktif, buka menu Ribbon dan pilih **Mask → Mask: reveal selection**. Layer sekarang memiliki mask yang hanya memperlihatkan bentuk pita.

Klik thumbnail cat Ribbon dan pilih warna pita. Pilih **Select → Select all pixels** dan kemudian **Edit → Fill selection** untuk mengisi seluruh lapisan dengan warna, dan akhiri dengan **Select → Deselect pixels**. Hanya pitanya yang terlihat, namun warnanya berlanjut di bawah topeng, siap digunakan saat Anda ingin melebarkan bentuknya.

## 3. Sesuaikan tepinya

Klik thumbnail topeng Ribbon untuk mengedit topeng. Sekarang kuas apa pun memperlihatkan lebih banyak warna tempat Anda melukis, dan **Eraser** menyembunyikannya lagi. Klik lagi thumbnail cat bila Anda ingin mengubah warnanya sendiri.

Buat **Disc** dan **Block** dengan cara yang sama. Simpan Disk di bawah Pita dan Blokir di bawah Disk, dengan seni Garis di atas ketiganya. Simpan gambar Anda, lalu lanjutkan ke [Rendering](/id/docs/illustration/render/).
