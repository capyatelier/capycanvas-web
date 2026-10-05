---
title: "Seleksi berdasarkan kecerahan"
description: "Alat Rentang nada untuk menyeleksi piksel berdasarkan kecerahan."
related: ["selections/tools", "selections/quick-mask", "color-management/hdr", "customize/toolbars"]
---

Anda dapat menyeleksi piksel berdasarkan kecerahan dengan alat **Rentang nada**.
Kecerahan diukur dalam stop relatif terhadap putih acuan (0). Alat ini membaca gambar
yang terlihat, semua lapisan sekaligus, dan membuat seleksi bertepi lembut.

## Memilih Rentang nada

Lakukan salah satu langkah berikut:

- Ketik "Rentang nada" di [pencarian perintah](/id/docs/start/command-search/).
- Di Sketsa, pilih **Seleksi** di bilah judul, pilih sekali lagi untuk membuka laci, lalu pilih **Rentang nada**.
- Tekan tombol yang Anda tetapkan untuk **Rentang nada** di [Pintasan papan ketik](/id/docs/input/keyboard/).
- Pilih **Rentang nada** di bilah alat tempat Anda menambahkannya dengan **Sisipkan Alat…** (lihat [Bilah alat dan bilah judul](/id/docs/customize/toolbars/)).

**Rentang nada** tidak memiliki tombol pintasan bawaan dan tidak memiliki tombol di
bilah alat Lukis atau Foto. Selama alat ini aktif, panel Set Alat mencantumkan
setiap alat seleksi.

![Pengaturan Rentang nada di laci Seleksi pada Sketsa, dengan Mode, Nada, Kelembutan, dan Perhalus tepi.](shot:selections/tonal-range-settings)

## Nada

Pilih sebuah tombol di baris **Nada · stop relatif terhadap putih acuan** untuk
menyeleksi pita kecerahan itu. Pita tersebut digabungkan dengan seleksi saat ini
sesuai **Mode** (lihat [Alat seleksi](/id/docs/selections/tools/)).

Keterangan alat setiap tombol menyebutkan pitanya:

- **Bayangan · di bawah −5 stop**
- **Bayangan sedang · −5 hingga −3.5 stop**
- **Nada tengah · −3.5 hingga −1.5 stop**
- **Sorotan sedang · −1.5 hingga −0.5 stop**
- **Sorotan · di atas −0.5 stop**
- **HDR terang · di atas +1 stop**, hanya di [gambar HDR](/id/docs/color-management/hdr/)
- **Khusus · atur atau ambil sampel rentang dalam stop**

Selama sebuah tombol nada terpilih, seleksi mengikuti perubahan pada **Kelembutan**,
**Perhalus tepi**, **Dari**, dan **Hingga**. Memilih alat lain atau **Mode** lain
membatalkan pilihan tombol nada.

## Rentang khusus

Anda dapat menyetel pita sendiri, atau mengambil sampelnya dari kanvas.

Lakukan salah satu langkah berikut:

- Pilih **Khusus · atur atau ambil sampel rentang dalam stop**, lalu setel **Dari** dan **Hingga** dalam stop. Bawaannya −3.5 dan −1.5.
- Seret melintasi sebuah area di kanvas untuk memakai rentang kecerahan di area itu.
- Klik kanvas untuk memusatkan pita pada kecerahan di titik itu. Pita mempertahankan lebar Khusus saat ini, atau selebar 1 stop jika sebelumnya nada lain yang terpilih.

Mengambil sampel di kanvas mengalihkan nada ke Khusus. Di editor web, **Dari** dan
**Hingga** berbagi satu kontrol rentang.

![Pengaturan Rentang nada dengan Khusus terpilih dan rentang dalam stop.](shot:selections/tonal-range-custom)

## Kelembutan

Melebarkan peluruhan lembut di kedua ujung pita, dari 0 hingga 200%. Bawaannya 100%.

## Perhalus tepi

Melembutkan tepi seleksi hingga 100 px.

## Mode dan tombol yang ditahan

**Rentang nada** memiliki tombol **Mode** yang sama seperti alat seleksi lainnya,
tanpa **Penghalusan tepi**. Tahan **Shift**, **Alt**, atau **Shift+Alt** saat Anda
mengeklik atau menyeret untuk menambah, mengurangi, atau mengambil irisan.

## Mask Cepat dan lapisan seleksi

**Rentang nada** berfungsi di [Mask Cepat](/id/docs/selections/quick-mask/) dan
selama Anda mengedit [lapisan seleksi](/id/docs/selections/selection-layers/), dan
mengubah mask tersebut. Bilah kanvasnya adalah [bilah seleksi](/id/docs/selections/working/),
di tepi bawah kanvas.
