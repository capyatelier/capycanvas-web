---
title: "Cara filter diterapkan"
description: "Cara filter di lapisannya sendiri dan filter yang dilampirkan ke satu lapisan mengubah gambar."
related: ["filters/adding", "layers/masks", "layers/merging", "layers/settings"]
---

Filter adalah lapisan tanpa cat sendiri. Pengaturannya tetap dapat diedit di panel
**Properti**.

![Panel Lapisan dengan Kurva dan Kejernihan yang dilampirkan ke foto terarium, dan filter Vinyet di lapisannya sendiri di atasnya.](shot:filters/layers-chain)

| | Filter di lapisannya sendiri | Filter terlampir |
| --- | --- | --- |
| Ditambahkan dengan | Panel **Filter**, menu **Filter**, **Sesuaikan** di bilah seleksi | **Tambahkan filter** |
| Mengubah | Setiap lapisan di bawahnya dalam grupnya | Hanya lapisan tempat filter dilampirkan |
| Di panel Lapisan | Baris tersendiri | Baris yang dihubungkan ke baris di bawahnya dengan mata rantai |

## Filter di lapisannya sendiri

Filter baru ditempatkan di atas lapisan terpilih beserta lapisan yang diklip atau
dilampirkan ke lapisan itu. Di dalam grup, filter hanya mengubah lapisan di bawahnya
dalam grup itu, kecuali jika grup disetel ke [Lewat Langsung](/id/docs/layers/settings/).

## Filter terlampir

Anda dapat melampirkan filter ke lapisan lukis, lapisan foto, atau grup yang tidak
disetel ke Lewat Langsung. Pilih lapisannya, lalu pilih **Tambahkan filter** di
bagian bawah panel Lapisan atau panel **Properti**, atau di menu lapisan.

Filter terlampir diterapkan dari bawah rantai ke atas, setelah mask lapisan dan
sebelum opasitas serta mode baurnya. Pada dasar kliping, filter ini juga mengubah
area tempat lapisan yang diklip tampil. Efek kabur dan distorsi seperti **Kabur
Gaussian** dan **Pusaran** dapat menyebarkan cat lapisan melewati tepinya.

Memindahkan, menduplikat, atau menyembunyikan lapisan juga berlaku untuk filter yang
terlampir padanya. Jika Anda menghapus lapisan, filter terlampirnya tetap ada
sebagai filter di lapisannya sendiri.

## Terapkan ke *lapisan* dan Terapkan ke lapisan di bawah

Anda dapat mengalihkan filter terpilih di antara kedua jenis tersebut.

Lakukan salah satu langkah berikut:

- Pilih **Lapisan > Pengaturan Lapisan > Terapkan ke *lapisan*** atau **Terapkan ke lapisan di bawah**.
- Pilih tombol mata rantai di kepala panel Lapisan, di tempat **Klip ke lapisan di bawah**.
- Seret filter ke gambar mini sebuah lapisan untuk melampirkannya ke lapisan itu.

![Kepala panel Lapisan dengan tombol mata rantai untuk filter terpilih.](shot:filters/attachment-button)

**Terapkan ke *lapisan*** melampirkan filter ke lapisan terdekat di bawahnya.
**Terapkan ke lapisan di bawah** menempatkan filter di lapisannya sendiri, di atas
lapisan tempat filter itu tadinya dilampirkan beserta lapisan yang diklip ke lapisan
itu.

Tombol ini tidak tersedia selama filter atau lapisan di bawahnya terkunci. Jika
lapisan di bawahnya bukan lapisan lukis, lapisan foto, atau grup, keterangan
alatnya bertuliskan "Tidak ada lapisan di bawah untuk ditautkan".

## Seleksi sebagai mask filter

Jika ada seleksi aktif saat Anda menambahkan filter, seleksi itu menjadi
[mask](/id/docs/layers/masks/) filter. Satu kali **Urungkan** membuang filter dan
memulihkan seleksi.

## Terapkan Efek ke Lapisan di Bawah

Anda dapat menggabungkan filter ke lapisan di bawahnya sebagai cat.

Pilih filternya, lalu lakukan salah satu langkah berikut:

- Pilih **Lapisan > Terapkan Efek ke Lapisan di Bawah**, atau pilih perintah itu dari menu lapisan filter.
- Tekan **Ctrl+E**.

![Menu lapisan sebuah filter dengan Terapkan Efek ke Lapisan di Bawah.](shot:filters/apply-effect-menu)

Filter di lapisannya sendiri hanya diterapkan ke lapisan tepat di bawahnya. Untuk
filter terlampir, lapisan beserta seluruh rantai filternya menjadi cat. Jika lapisan
itu diklip atau memiliki lapisan yang diklip padanya, perintah ini bertuliskan
**Gabungkan Lapisan Terkliping** (lihat [Menggabungkan lapisan](/id/docs/layers/merging/)).

Filter dan lapisan di bawahnya harus terlihat, tidak terkunci, dan disetel ke Normal.
Perintah ini tidak tersedia jika lapisan tepat di bawahnya adalah filter yang
dilampirkan ke lapisan lain.
