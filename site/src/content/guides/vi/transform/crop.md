---
title: "Cắt xén"
description: "Cắt xén và làm thẳng khung vẽ bằng công cụ Cắt xén."
related: ["transform/image", "selections/working", "drawing/ruler", "photo/crop"]
---

Bạn có thể cắt xén khung vẽ theo một khung bằng công cụ **Cắt xén**. Pixel bị cắt
vẫn nằm trên lớp của chúng ở trạng thái ẩn, trừ khi bạn bật **Xóa phần bị cắt**.

## Cắt xén

Thực hiện một trong các cách sau:

- Chọn **Chỉnh sửa > Ảnh > Cắt xén**.
- Nhấn **C**.
- Trong Ảnh, chọn **Cắt xén** trên Thanh công cụ vẽ.

Một khung có tay nắm xuất hiện quanh toàn bộ khung vẽ, hoặc là khung lớn nhất theo
tỷ lệ đã chọn. Phần khung vẽ bên ngoài khung bị làm tối, và
[thanh khung vẽ](/vi/docs/selections/working/) của thao tác cắt xén xuất hiện ở cạnh
dưới khung vẽ.

- Kéo bên trong khung để di chuyển khung.
- Kéo tay nắm ở góc hoặc ở cạnh để đổi kích thước khung. Giữ **Shift** để giữ tỷ lệ khung, hoặc **Alt** để đổi kích thước từ tâm.
- Kéo khung vượt ra ngoài mép khung vẽ để thêm phần khung vẽ trong suốt.

Trên màn hình cảm ứng, chỉ các tay nắm phản hồi ngón tay. Ngón tay đặt bên trong
khung sẽ di chuyển khung nhìn.

Để hoàn tất, chọn **Áp dụng** hoặc nhấn **Enter**. **Hủy**, **Escape** và
**Hoàn tác** bỏ thao tác cắt xén. Trong cả hai trường hợp, công cụ bạn dùng trước đó
sẽ được chọn lại.

**Áp dụng** cũng cắt xén các lớp đã khóa. Bạn không thể bắt đầu cắt xén khi đang mở
một phép biến đổi.

![Khung cắt trên ảnh bể kính trồng cây, với thanh khung vẽ ở cạnh dưới.](shot:transform/crop-bar)

## Tỷ lệ

Chọn **Tự do**, **Gốc**, **1:1**, **4:5**, **2:3**, **5:7** hoặc **16:9** từ
**Tỷ lệ** trên thanh khung vẽ. Khung trở thành khung lớn nhất theo tỷ lệ đó. Mặc
định là **Tự do**.

**Đổi hướng cắt**, nút biểu tượng bên cạnh **Tỷ lệ**, chuyển khung giữa hướng ngang
và hướng dọc.

Tỷ lệ, lớp phủ và **Xóa phần bị cắt** được giữ cho lần cắt xén tiếp theo.

![Trình đơn Tỷ lệ trên thanh cắt xén.](shot:transform/crop-ratio-menu)

## Vừa nội dung

**Vừa nội dung** đặt khung, ở hướng thẳng đứng, khớp với giới hạn của các pixel hiển
thị, kể cả pixel nằm ngoài khung vẽ. **Tỷ lệ** chuyển sang **Tự do**.

## Lớp phủ

Chọn **Một phần ba**, **Lưới**, **Đường chéo** hoặc **Tỷ lệ vàng** từ **Lớp phủ**.
Mặc định là **Một phần ba**. Nhấn **O** khi đang cắt xén để hiện lớp phủ tiếp theo.

## Làm thẳng

Chọn **Làm thẳng** trên thanh khung vẽ, rồi vẽ một đường dọc theo thứ cần nằm ngang
hoặc thẳng đứng. Khung xoay theo đường đó. Giữ **Shift** để đường bắt theo từng bước
15°. Trên màn hình cảm ứng, ngón tay vẽ đường khi **Làm thẳng** đang được chọn.

Bạn cũng có thể đặt góc ở **Làm thẳng** trong bảng Công cụ. Khung xoay tối đa 45°
về mỗi phía.

Khi bạn áp dụng một lần cắt xén có xoay, lớp vẽ và mặt nạ được lấy mẫu lại. Ảnh đã
đặt giữ pixel gốc.

Để làm thẳng theo một đường hướng dẫn, chọn đường hướng dẫn rồi chọn **Làm thẳng**
trên thanh khung vẽ của đường đó (xem
[Thước và đường hướng dẫn](/vi/docs/drawing/ruler/)). Thao tác cắt xén mở ra, với
khung đã xoay ngang bằng đường hướng dẫn.

## Xóa phần bị cắt

Bật **Xóa phần bị cắt** để bỏ các pixel bên ngoài khung khi áp dụng cắt xén. Ảnh đã
đặt giữ pixel gốc. Mặc định tắt.

Lần cắt xén nào quá lớn nếu giữ lại pixel ẩn thì chỉ thực hiện được khi bật
**Xóa phần bị cắt**.

## Đặt lại

**Đặt lại** đưa khung về toàn bộ khung vẽ, ở hướng thẳng đứng, và tắt
**Làm thẳng**. Khi đã chọn tỷ lệ, khung trở thành khung lớn nhất theo tỷ lệ đó.

## Thiết lập cắt xén trong bảng Công cụ

Khi bạn cắt xén, bảng Công cụ (và thanh Tùy chọn công cụ trong Ảnh) hiện:

- **Kích thước**: **Chiều rộng** và **Chiều cao** của khung, tính bằng pixel. Khi đã chọn tỷ lệ, cạnh còn lại thay đổi theo.
- **Làm thẳng**: góc của khung, từ −45° đến 45°.
- Các nút của thanh khung vẽ.

![Bảng Công cụ khi cắt xén, với Chiều rộng, Chiều cao và Làm thẳng.](shot:transform/crop-tool-panel)

## Cắt khung vẽ theo vùng chọn

Bạn có thể cắt xén khung vẽ theo giới hạn của vùng chọn.

Thực hiện một trong các cách sau:

- Chọn **Chỉnh sửa > Ảnh > Cắt khung vẽ theo vùng chọn**.
- Chọn **Cắt xén** trên [thanh vùng chọn](/vi/docs/selections/working/).

Pixel bên ngoài giới hạn vùng chọn vẫn nằm trên lớp của chúng ở trạng thái ẩn. Bạn
không thể cắt xén theo vùng chọn đã đảo.

## Lấy lại pixel bị cắt

Chọn **Chỉnh sửa > Ảnh > Hiện tất cả** để mở rộng khung vẽ cho đến khi hiện pixel
của mọi lớp, hoặc làm khung vẽ lớn hơn bằng
**Chỉnh sửa > Ảnh > Kích thước khung vẽ…** (xem
[Kích thước và góc xoay ảnh](/vi/docs/transform/image/)).
