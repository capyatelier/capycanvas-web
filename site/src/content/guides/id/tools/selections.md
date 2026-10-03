---
title: "Alat seleksi"
description: "Pilih bagian gambar Anda sehingga perubahan hanya memengaruhi area tersebut."
purpose: "Pilihan menandai bagian gambar yang ingin Anda kerjakan. Saat aktif, pengecatan, pengisian, dan transformasi hanya memengaruhi area yang dipilih, sehingga sisa gambar tetap aman. Capy Canvas memiliki alat seleksi untuk bentuk sederhana, garis tangan bebas, dan area dengan warna serupa."
techniques: ["Pilih alat seleksi yang tepat.", "Menambah atau mengurangi dari pilihan.", "Isi pilihan dan hapus setelah selesai."]
figure: "1: Alat seleksi di Kumpulan Alat. 2: Mode pemilihan, opsi bulu dan bentuk. 3: Pilihan elips di sekitar disk."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Alat seleksi di Kumpulan Alat. 2: Mode pemilihan, opsi bulu dan bentuk. 3: Pilihan elips di sekitar disk."}
---

## Pilih alat seleksi

Di Paint, pilih **Lasso selection** atau **Auto select** di toolbar, dan Tool Set akan mencantumkan semua alat seleksi. Di Sketch, mereka berada di bawah tombol **Select**, dan Photo menyimpan sebagian besar di toolbar-nya.

**Rectangle select** dan **Ellipse select** menggambar bentuk sederhana; tahan **Shift** untuk persegi atau lingkaran, dan **Alt** untuk menggambar dari tengah. **Lasso selection** mengikuti pena Anda secara langsung, dan **Polygonal lasso** menggabungkan garis lurus di antara titik yang Anda klik; klik lagi titik pertama atau tekan **Enter** untuk menutupnya. **Auto select** mengambil area dengan warna serupa dengan satu klik, dan **Select by color** mengambil setiap area dengan warna tersebut sekaligus. Dua alat lagi, **Paint selection** dan **Tonal range**, memiliki halamannya sendiri: [Quick Mask dan lapisan seleksi](/id/docs/selections/quick-mask/) dan [Pilih berdasarkan kecerahan](/id/docs/selections/tonal-range/).

## Gabungkan dan haluskan pilihan

Empat tombol di bagian atas panel **Tool** memilih apa yang terjadi ketika Anda membuat pilihan lain. Itu dapat menggantikan yang sekarang, menambah, mengurangi, atau hanya mempertahankan area di mana keduanya tumpang tindih. Anda juga dapat menahan **Shift** untuk menambah, atau **Alt** untuk mengurangi, tanpa mengubah tombol.

**Feather radius** memperhalus bagian tepi seleksi, sehingga cat dan penyesuaian memudar secara bertahap alih-alih berhenti pada garis keras. Untuk Pilih otomatis, **Tolerance** mengontrol seberapa berbeda suatu warna dapat dan tetap disertakan, dan **Close gaps** menghentikan pemilihan agar tidak bocor melalui jeda kecil pada seni garis Anda.

## Gunakan pilihan

Untuk memilih semua yang dilukis pada sebuah layer, tahan **Ctrl** dan klik thumbnail layer. Dengan seleksi yang aktif, catlah dengan bebas: guratan hanya akan mendarat di dalamnya. Pilih **Edit → Fill selection** untuk mengisinya dengan warna saat ini, atau mengubahnya menjadi [layer mask](/id/docs/layers/masks/). Menu **Select** juga dapat membalikkan pilihan, memperbesar atau memperkecilnya beberapa piksel, atau mengembalikan pilihan terakhir dengan **Reselect**.

Setelah selesai, pilih **Select → Deselect pixels** agar pukulan Anda selanjutnya bisa kemana saja lagi.
