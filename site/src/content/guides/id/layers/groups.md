---
title: "Kelompok dan pencampuran"
description: "Satukan lapisan terkait dan ubah cara warnanya digabungkan."
purpose: "Seiring berkembangnya gambar, kelompok menyatukan lapisan-lapisan terkait sehingga daftarnya tetap mudah dibaca. Mode campuran mengubah cara warna suatu lapisan bercampur dengan lapisan di bawahnya, yang berguna untuk bayangan, sorotan, dan sapuan warna."
techniques: ["Masukkan lapisan terkait ke dalam grup.", "Coba blend mode pada layer peneduh.", "Jaga agar daftar lapisan panjang tetap rapi."]
figure: "1: Tumpukan lapisan. 2: Mode campuran. 3: Tombol grup baru."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: Tumpukan lapisan. 2: Mode campuran. 3: Tombol grup baru."}
---

## Kelompokkan lapisan terkait

Pilih **New group** di bagian bawah panel Layers, lalu seret layer ke dalamnya. Misalnya, Anda dapat menyimpan warna, bayangan, dan seni garis karakter di satu grup dan latar belakang di grup lain. Pilih panah di samping grup untuk melipatnya saat Anda tidak perlu melihat isinya.

Menyembunyikan grup menyembunyikan semua yang ada di dalamnya. Jika suatu lapisan tampak menghilang meskipun matanya menyala, periksa apakah grup tempat lapisan tersebut tersembunyi. Simpan lapisan yang terpotong tepat di atas lapisan dasarnya saat Anda memindahkannya ke dalam grup, sehingga lapisan tersebut tetap melekat padanya.

## Coba mode campuran

Pilih lapisan bayangan dan buka menu mode campuran di atas daftar. **Multiply** menggelapkan warna di bawahnya, sehingga cocok untuk bayangan. **Screen** mencerahkannya, yang sesuai dengan cahaya dan sorotan. **Normal** hanya mengecat apa yang ada di bawah, dan mode lainnya masing-masing mencampur warna dengan caranya sendiri.

Sembunyikan dan tampilkan layer untuk membandingkan hasilnya. Jika efeknya terlalu kuat, turunkan opacity layer daripada mengecat ulang.

## Jaga agar daftarnya tetap rapi

Grup menjaga daftar panjang tetap rapi sementara setiap lapisan tetap dapat diedit, dan Anda dapat membuang grup yang tidak sedang Anda kerjakan. Jika Anda memerlukan satu gambar datar untuk aplikasi lain, [ekspor](/id/docs/output/export/) salin dan simpan file `.capy` dengan semua lapisannya.

Untuk perubahan warna yang ingin Anda terus sesuaikan, seperti kecerahan atau saturasi, gunakan lapisan filter dari [Filter dan penyesuaian](/id/docs/filters/overview/) alih-alih mengecat perubahan tersebut menjadi sebuah lapisan.
