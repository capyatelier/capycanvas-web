---
title: "Thước và đường hướng dẫn"
description: "Đường hướng dẫn giữ nét cọ theo đường thẳng, và làm thẳng ảnh theo đường hướng dẫn."
related: ["drawing/figure", "transform/crop", "transform/move-transform", "drawing/brush-tools"]
---

Bạn có thể đặt đường hướng dẫn trên khung vẽ để giữ nét cọ theo đường thẳng. Đường
hướng dẫn được lưu trong tệp `.capy` và không xuất hiện trong ảnh xuất ra.

## Công cụ Thước

Thực hiện một trong các cách sau:

- Nhấn **Shift+U**.
- Trong Vẽ, chọn **Thước** trên Thanh công cụ vẽ. Nhấp chuột phải hoặc giữ nút để chọn **Thẳng**, **Song song** hoặc **Tỏa tròn**.
- Tìm lệnh **Thước**.

Phác thảo và Ảnh không có nút Thước. Bạn có thể thêm nút này bằng **Chèn công cụ…**
([Thanh công cụ và thanh tiêu đề](/vi/docs/customize/toolbars/)).

Kéo qua một chỗ trống trên khung vẽ để thêm đường hướng dẫn, hoặc nhấp để thêm đường
hướng dẫn Tỏa tròn. Giữ **Shift** trong lúc kéo để xoay đường hướng dẫn Thẳng hoặc
Song song theo từng nấc 45°.

Kéo tay nắm của đường hướng dẫn để đổi góc và độ dài, hoặc kéo đường thẳng của nó để
di chuyển cả đường hướng dẫn.

- Nhấn **Escape** để hủy thao tác kéo.
- Thêm, di chuyển và xóa đường hướng dẫn là các bước hoàn tác.
- Khi đường hướng dẫn đang ẩn, thao tác kéo sẽ thêm đường hướng dẫn mới và hiện lại mọi đường hướng dẫn.
- Cắt xén, Kích thước ảnh, Kích thước khung vẽ, Xoay và Lật di chuyển đường hướng dẫn cùng với ảnh.

## Các loại đường hướng dẫn

![Đường hướng dẫn Thẳng, Song song và Tỏa tròn trên khung vẽ, với đường nét đứt, tay nắm hình vuông và dấu chữ thập tỏa tròn.](shot:drawing/ruler-guides)

Đường hướng dẫn Thẳng và Song song là đường nét đứt có một hình vuông ở mỗi tay nắm.
Đường hướng dẫn Tỏa tròn là một hình vuông có dấu chữ thập nét đứt. Đường hướng dẫn
đang chọn có tay nắm lớn hơn.

Chỉ nét vẽ của các công cụ cọ mới bám theo đường hướng dẫn.

### Thẳng

Nét vẽ bắt đầu trong phạm vi 12 pixel màn hình tính từ đường thẳng của đường hướng
dẫn sẽ đi theo đường thẳng đó. Đường thẳng kéo dài qua toàn bộ khung vẽ.

### Song song

Mọi nét vẽ chạy song song với đường hướng dẫn, từ điểm bạn nhấn.

### Tỏa tròn

Nét vẽ hướng về tâm của đường hướng dẫn. Mỗi nét đi theo đường thẳng từ tâm qua điểm
bạn nhấn.

## Nét vẽ bám theo đường hướng dẫn nào

Đường hướng dẫn Thẳng ở gần được ưu tiên hơn đường hướng dẫn Song song và Tỏa tròn.
Giữa nhiều đường hướng dẫn Song song và Tỏa tròn, đường có tay nắm đầu tiên hoặc tâm
gần điểm bắt đầu nét vẽ nhất được ưu tiên.

## Hiện đường hướng dẫn và bắt dính

Bạn có thể ẩn đường hướng dẫn, hoặc tắt bắt dính.

Thực hiện một trong các cách sau:

- Chọn **Hiển thị > Hiện thước** hoặc **Hiển thị > Bắt dính vào thước**.
- Khi công cụ Thước đang hoạt động, hoặc khi một đường hướng dẫn được chọn bằng Thao tác, chọn **Hiện thước** hoặc **Bắt dính vào thước** trong bảng **Công cụ**.
- Chọn **Đường hướng dẫn** hoặc **Bắt dính** trên thanh đường hướng dẫn.

Mặc định cả hai đều bật. Không dùng được **Bắt dính vào thước** khi đường hướng dẫn
đang ẩn.

## Xóa đường hướng dẫn

Chọn đường hướng dẫn, rồi thực hiện một trong các cách sau:

- Nhấn **Xóa** hoặc **Backspace**.
- Chọn **Xóa thước** trong bảng **Công cụ**.
- Chọn **Xóa** trên thanh đường hướng dẫn.

**Xóa** và **Backspace** chỉ xóa đường hướng dẫn khi công cụ đang hoạt động là
Thước, Hình, Thao tác, Biến đổi hoặc Cắt xén. Với các công cụ khác, các phím này chạy
**Xóa pixel đã chọn**.

## Thanh đường hướng dẫn

Khi bạn chọn một đường hướng dẫn bằng công cụ Thước hoặc Thao tác, một thanh xuất
hiện bên dưới các tay nắm của nó.

| Nút | Tác dụng |
| --- | --- |
| **Xóa** | Xóa đường hướng dẫn. |
| **Bắt dính** | Bật hoặc tắt **Bắt dính vào thước**. |
| **Đường hướng dẫn** | Hiện hoặc ẩn mọi đường hướng dẫn. Ẩn đường hướng dẫn cũng ẩn thanh này. |
| **Làm thẳng** | Bắt đầu **Làm thẳng ảnh theo đường hướng dẫn**. Chỉ có với đường hướng dẫn Thẳng. |

Tắt **Hiển thị > Hiện thanh thao tác khung vẽ** sẽ bỏ thanh đường hướng dẫn.

![Thanh đường hướng dẫn bên dưới một đường hướng dẫn Thẳng đang chọn, với Xóa, Bắt dính, Đường hướng dẫn và Làm thẳng.](shot:drawing/ruler-guide-bar)

## Di chuyển đường hướng dẫn bằng Thao tác

Với công cụ [Thao tác](/vi/docs/transform/move-transform/), kéo tay nắm hoặc đường
thẳng của đường hướng dẫn để di chuyển đường hướng dẫn thay vì lớp. Thao tác không
bao giờ thêm đường hướng dẫn.

## Làm thẳng ảnh theo đường hướng dẫn

Bạn có thể làm thẳng ảnh theo một đường hướng dẫn Thẳng.

Chọn một đường hướng dẫn Thẳng, rồi thực hiện một trong các cách sau:

- Chọn **Làm thẳng** trên thanh đường hướng dẫn.
- Tìm lệnh **Làm thẳng ảnh theo đường hướng dẫn**.

Công cụ Cắt xén mở ra với khung được xoay sao cho đường hướng dẫn nằm ngang hoặc
thẳng đứng, tùy hướng nào gần hơn. Áp dụng cắt xén để xoay ảnh
([Cắt xén](/vi/docs/transform/crop/)).
