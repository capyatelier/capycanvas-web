---
title: "Ruang warna, HDR dan pemeriksaan"
description: "Pilih cara gambar menyimpan warna, kerjakan di HDR, dan pratinjau cara gambar akan dicetak."
purpose: "Kebanyakan gambar tampak bagus dengan pengaturan default. Saat Anda mengedit foto, mempersiapkan pekerjaan untuk dicetak, atau menginginkan warna cerah dari layar modern, Anda dapat memilih seberapa banyak warna yang dapat ditampung gambar dan melihat pratinjau tampilannya di tempat lain."
techniques: ["Pilih ruang warna dan kedalaman bit untuk gambar baru.", "Paint dan edit di HDR.", "Pratinjau warna cetakan dengan Bukti."]
figure: "1: Menggambar preset. 2: Ruang warna dan kedalaman bit. 3: Buat, yang membuka gambar baru."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: Menggambar preset. 2: Ruang warna dan kedalaman bit. 3: Buat, yang membuka gambar baru."}
---

## Pilih warna untuk gambar baru

Saat Anda memilih **File → New…**, menu **Preset** menawarkan beberapa titik awal. **Standard drawing** cocok untuk sebagian besar karya seni dan apa pun yang akan Anda bagikan secara online. **Wide color** dapat mempertahankan warna yang lebih jelas seperti yang ditampilkan pada banyak layar modern, dan **Photo editing** menjaga presisi ekstra sehingga penyesuaian yang kuat tidak menyebabkan garis melintang dalam gradien yang halus.

**Color space** mengatur rentang warna yang dapat ditampung gambar, dan **Bit depth** mengatur seberapa halus setiap warna disimpan. Jika nanti Anda berubah pikiran, gunakan **Edit → Convert Color Space…** atau **Edit → Change Bit Depth…**. Foto mempertahankan warna pengambilannya, jadi tidak ada yang perlu diatur saat Anda membukanya.

## Bekerja di HDR

Pilih **16-bit float HDR** atau **32-bit float HDR** sebagai kedalaman bit untuk membuat gambar HDR. Gambar HDR dapat menampilkan warna yang lebih cerah daripada putih, seperti sinar matahari dan cahaya yang bersinar. Saat Anda mengedit gambar HDR, busur intensitas muncul di bawah roda warna, sehingga Anda juga bisa melukis dengan warna yang lebih cerah daripada putih.

HDR tampil dengan kecerahan penuh saat browser dan layar Anda mendukungnya. Di layar lain, Anda akan melihat versi standar gambar tersebut. Saat Anda mengekspor gambar HDR, Anda dapat menyimpan HDR JPEG atau AVIF yang juga terlihat bagus di layar biasa, seperti dijelaskan dalam [Ekspor gambar](/id/docs/output/export/).

## Pratinjau dengan Bukti

Sebelum Anda mengirim pekerjaan ke printer, **View → Proof** menunjukkan bagaimana warna akan terlihat di kertas. Pada panel **Proof**, pilih **Print**, lalu pilih atau tambahkan profil warna printer atau layanan pencetakan. **Gamut warning** menandai warna yang tidak dapat direproduksi oleh printer, sehingga Anda dapat menyesuaikannya sebelum mencetak.

Untuk gambar HDR, opsi **SDR** di panel yang sama menunjukkan tampilan gambar di layar biasa, dan memungkinkan Anda menyempurnakan kecerahan dan kontras versi tersebut.
