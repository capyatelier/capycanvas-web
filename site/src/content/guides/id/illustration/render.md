---
title: "Render"
description: "Tambahkan bayangan dan tekstur pada lapisan yang terpotong pada setiap bentuk, lalu ekspor hasilnya."
purpose: "Rendering adalah tempat bentuk mendapatkan cahaya dan bayangannya. Melukis arsiran pada lapisan yang terpotong akan menyimpannya di dalam setiap bentuk secara otomatis, dan karena arsiran terpisah dari warna dasar, Anda dapat menyesuaikan atau mengulanginya tanpa kehilangan apa pun."
techniques: ["Klip lapisan bayangan ke Ribbon.", "Kontrol kekuatan bayangan.", "Buat bayangan pada bentuk lainnya, periksa lapisannya, dan ekspor."]
figure: "1: Tekstur pita dan bayangan pita di atas pita. 2: Klip ke lapisan di bawah. 3: Opasitas lapisan untuk seluruh lintasan bayangan."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Tekstur pita dan bayangan pita di atas pita. 2: Klip ke lapisan di bawah. 3: Opasitas lapisan untuk seluruh lintasan bayangan."}
---

## 1. Tambahkan bayangan yang terpotong

Pilih **Ribbon**, tambahkan layer baru tepat di atasnya, dan beri nama **Ribbon shading**. Buka menunya dan pilih **Layer Settings → Clip to layer below**. Sekarang cat bayangan di lekukan pita dengan **Watercolor Wash**, dan tambahkan beberapa aksen bijak dengan **Paintbrush**. Sapuan Anda bisa melewati tepi pita, karena hanya bagian dalam pita yang terlihat.

Biarkan blend mode layer bayangan di **Normal** untuk saat ini. Warna dasar tetap aman pada lapisan Pita, jadi menghapus bayangan tidak akan pernah menghapus warna di bawahnya.

## 2. Kendalikan kekuatan

Opasitas kuas mengubah guratan yang akan Anda lukis. **opacity of the Ribbon shading layer** mengubah semua bayangan yang telah Anda lukis. Jika setiap bayangan terlihat terlalu kuat, turunkan opacity layer daripada mengecat ulang.

Untuk highlight, tambahkan **Ribbon texture** tepat di atas Ribbon shading dan klip juga. Gunakan pensil kecil atau kuas bertekstur untuk membuat beberapa tanda tipis. Urutan layer sekarang adalah tekstur Ribbon, Ribbon shading, lalu Ribbon. [Pengaturan kuas](/id/docs/advanced/brush-engine/) menjelaskan opacity dan aliran lebih detail.

## 3. Selesaikan dan ekspor

Warnai **Disc** dan **Block** dengan cara yang sama, masing-masing dengan lapisan terpotongnya sendiri. Contohnya menggunakan Airbrush untuk arsir lembut pada disk, dan Pensil untuk tanda arsiran kecil berwarna krem. Pertahankan **Line art** di atas segalanya. Jika tepi luar suatu bentuk perlu diperbaiki, catlah topeng bentuk itu; jika hanya arsirannya yang salah, ubahlah lapisan arsirannya. [Masker dan kliping](/id/docs/layers/masks/) juga menunjukkan cara mewarnai ulang tinta dengan kunci alfa.

Jika Anda menyukainya, sembunyikan lapisan kasarnya, simpan file `.capy` Anda, dan [ekspor gambar](/id/docs/output/export/) untuk dibagikan. Buka file yang diekspor sekali untuk memeriksa apakah tampilannya sesuai dengan yang Anda harapkan.
