---
title: "Masker dan kliping"
description: "Sembunyikan bagian lapisan tanpa menghapusnya, dan pertahankan bayangan di dalam bentuk."
purpose: "Masker menyembunyikan sebagian lapisan tanpa menghapus cat apa pun, sehingga Anda selalu dapat berubah pikiran tentang di mana seharusnya tepinya berada. Kliping menjaga satu lapisan tetap berada di dalam bentuk lapisan di bawahnya, yang merupakan cara termudah untuk menambahkan bayangan yang tidak pernah keluar dari garis."
techniques: ["Buatlah topeng dari pilihan.", "Paint pada topeng untuk menampilkan atau menyembunyikan cat.", "Klip bayangan ke lapisan di bawahnya."]
figure: "1: Thumbnail topeng pita. 2: Bayangan terpotong di atas Pita. 3: Klip ke lapisan di bawah dan kontrol kunci Alpha."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: Thumbnail topeng pita. 2: Bayangan terpotong di atas Pita. 3: Klip ke lapisan di bawah dan kontrol kunci Alpha."}
---

## Buatlah topeng dari pilihan

Pertama [pilih](/id/docs/tools/selections/) area yang ingin Anda tetap terlihat. Kemudian buka menu layer dan pilih **Mask → Mask: reveal selection**. Segala sesuatu di luar pilihan disembunyikan, tetapi tidak ada satupun yang terhapus. Anda juga dapat memilih **Mask: hide selection** untuk menyembunyikan area yang dipilih. Ingatlah untuk membatalkan pilihan setelahnya, sehingga pukulan Anda berikutnya tidak terbatas pada pilihan.

Masker hanya dapat menampilkan cat yang sebenarnya ada pada lapisan tersebut. Jika Anda ingin melebarkan bentuknya nanti, isi seluruh lapisan dengan warna sebelum menutupinya, seperti yang dilakukan pada [tahap masking](/id/docs/illustration/mask/) dalam tutorial.

## Paint pada topeng

Klik thumbnail topeng di sebelah layer untuk mengedit topengnya, bukan catnya. Sekarang kuas apa pun memperlihatkan lebih banyak lapisan di mana pun Anda melukis, dan **Eraser** menyembunyikannya lagi. Warna yang Anda gunakan untuk melukis tidak menjadi masalah pada topeng. Setelah selesai, klik thumbnail cat untuk kembali melukis secara normal.

Menu topeng dapat mematikan topeng sejenak, membalikkannya, atau menghapusnya. Mematikannya adalah cara praktis untuk membandingkan hasilnya dengan cat di bawahnya.

## Klip bayangan ke suatu bentuk

Tambahkan layer baru tepat di atas lapisan dasar, buka menunya, dan pilih **Layer Settings → Clip to layer below**. Apa pun yang Anda lukis pada lapisan yang terpotong sekarang hanya menunjukkan di mana lapisan dasar memiliki cat, sehingga Anda dapat membuat bayangan dengan bebas tanpa melewati tepinya. Anda dapat menumpuk beberapa layer yang terpotong di atas dasar yang sama, satu untuk bayangan dan satu lagi untuk sorotan.

**Alpha lock** merupakan alternatif yang lebih sederhana ketika Anda ingin mewarnai ulang guratan yang sudah ada, seperti seni garis. Itu membuat cat baru tetap berada di dalam goresan yang ada pada lapisan yang sama. [Tahap rendering](/id/docs/illustration/render/) dari tutorial menggunakan keduanya.
