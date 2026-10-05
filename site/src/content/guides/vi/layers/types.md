---
title: "Các loại lớp"
description: "Các loại lớp trong bản vẽ và quy tắc của từng loại."
related: ["layers/panel", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Bảng Lớp với một lớp vùng chọn, một nhóm Xuyên qua, một bộ lọc Đường cong, một lớp Tô chuyển màu, một lớp Màu đồng nhất, lớp vẽ Mực hiện tại và Giấy.](shot:layers/types-rows)

## Lớp vẽ

Lớp vẽ chứa pixel được vẽ. Cọ, **Tô đầy**, **Chuyển màu** và **Hình** chỉ thêm
pixel vào lớp vẽ.

Để thêm lớp vẽ, chọn **Lớp > Mới > Lớp mới**, hoặc chọn **Lớp mới** ở cuối bảng
Lớp.

Bản vẽ mới bắt đầu với một lớp vẽ trống, **Mực hiện tại**, nằm trên **Giấy**. Chỉ
lớp vẽ mới có **Khóa alpha**, **Chế độ màu**, **Xóa toàn bộ lớp** và **Áp dụng mặt
nạ vào lớp**.

## Nhóm

Nhóm chứa các lớp trong một thư mục có thể thu gọn thành một hàng.

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mới > Nhóm mới**.
- Chọn **Nhóm mới** ở cuối bảng Lớp.
- Chọn nhiều hàng rồi chọn **Lớp > Sắp xếp > Nhóm các lớp đã chọn**.

Chọn hình thu nhỏ thư mục để mở rộng hoặc thu gọn nhóm. Một biểu tượng nhỏ trên thư
mục đánh dấu nhóm đang bật [Xuyên qua](/vi/docs/layers/settings/).

Nhóm kết hợp các lớp bên trong trước rồi mới hòa trộn kết quả với các lớp bên dưới,
trừ khi nhóm đang bật Xuyên qua. Nhóm không có pixel riêng.

## Lớp tô màu

Lớp tô màu phủ khung vẽ bằng một màu (**Màu đồng nhất**) hoặc một dải chuyển màu
(**Tô chuyển màu**).

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mới > Tô màu đồng nhất** hoặc **Tô chuyển màu**.
- Chọn **Bộ lọc > Tô đầy > Màu đồng nhất** hoặc **Tô chuyển màu**.
- Chọn **Màu đồng nhất** hoặc **Tô chuyển màu** trong danh mục **Tô đầy** của bảng **Bộ lọc**.

Lớp tô màu nằm trên lớp hiện tại và các lớp cắt vào lớp đó. Lớp Màu đồng nhất mới dùng
màu vẽ hiện tại, còn lớp Tô chuyển màu mới chuyển từ đen sang trắng. Nếu đang có
vùng chọn, vùng chọn trở thành mặt nạ của lớp tô màu.

Để đổi màu của lớp Màu đồng nhất, chọn hình thu nhỏ của lớp để mở
[Sửa màu](/vi/docs/color/edit-color/), hoặc đổi **Màu** trong bảng **Thuộc tính**.
[Chuyển màu](/vi/docs/drawing/gradient/) mô tả các thiết lập của lớp Tô chuyển màu.

Để vẽ lên lớp tô màu, hãy thêm mặt nạ. Cọ vẽ lên mặt nạ, không vẽ lên phần màu tô. Bạn
có thể cắt lớp tô màu theo lớp bên dưới, nhưng không thể cắt lớp khác vào lớp tô màu hay
gắn bộ lọc vào lớp tô màu.

## Lớp bộ lọc

Lớp bộ lọc chứa một bộ lọc thay vì pixel. Hàng của lớp hiện biểu tượng và tên của
bộ lọc. Xem [Thêm và chỉnh sửa bộ lọc](/vi/docs/filters/adding/) và
[Phạm vi tác động của bộ lọc](/vi/docs/filters/how-filters-apply/).

Khi đang chọn lớp bộ lọc, cọ vẽ lên lớp bên dưới nó, hoặc lên lớp mà bộ lọc gắn
vào. Nếu bộ lọc có mặt nạ, cọ vẽ lên mặt nạ.

## Lớp vùng chọn

Lớp vùng chọn lưu một vùng chọn. Để thêm lớp vùng chọn, chọn **Lớp vùng chọn mới**
ở cuối bảng Lớp.

Nút bên phải hình thu nhỏ nạp vùng chọn đã lưu. Biểu tượng mắt ẩn hoặc hiện lớp phủ
vùng chọn trên khung vẽ. Lớp vùng chọn không có độ đục, chế độ hòa trộn, mặt nạ,
thiết lập cắt hay tham chiếu, và không thể gộp.
[Lớp vùng chọn](/vi/docs/selections/selection-layers/) trình bày cách chỉnh sửa
vùng chọn đã lưu.

## Giấy

**Giấy** là lớp tô màu trắng kiểu **Màu đồng nhất** ở dưới cùng của bản vẽ mới. Bạn có
thể đổi màu, ẩn hoặc xóa **Giấy** như mọi lớp tô màu khác.

**Giấy** bị ẩn ngay từ đầu khi **Nền** được đặt là **Trong suốt** trong hộp thoại
[Bản vẽ mới](/vi/docs/files/new/), và trong ảnh bạn mở.

## Lớp ảnh

Lớp ảnh là lớp vẽ giữ ảnh gốc với kích thước, độ sâu bit và hồ sơ màu riêng của ảnh.
Nét vẽ và nét tẩy được lưu bên trên ảnh.

Để thêm lớp ảnh, thực hiện một trong các cách sau:

- Chọn **Tệp > Mở…** rồi chọn một ảnh.
- Chọn **Tệp > Nhập ảnh thành lớp…**.
- Thả tệp ảnh lên khung vẽ.

Khi ảnh gốc còn được giữ, **Lớp > Thiết lập lớp** có các lệnh sau:

- **Trở về ảnh gốc** bỏ nét vẽ, nét tẩy và các mặt nạ đã áp dụng. Vị trí, mặt nạ, độ đục và chế độ hòa trộn được giữ nguyên, còn **Chế độ màu** trở về **Đầy đủ màu**.
- **Chuyển nguồn thành ảnh điểm…** chuyển ảnh gốc sang không gian màu và độ sâu bit của bản vẽ, ở kích thước đầy đủ. Sau đó, **Trở về ảnh gốc** không dùng được nữa.
- **Sửa hồ sơ màu nguồn…** đổi hồ sơ màu dùng để đọc ảnh gốc: **sRGB**, **Display P3**, **Adobe RGB (1998)** hoặc **ProPhoto RGB**. Nếu lớp đã có nét vẽ, thay vào đó **Thêm nguồn đã sửa** thêm ảnh đã sửa thành một lớp mới.

**Trở về ảnh gốc** và **Chuyển nguồn thành ảnh điểm…** cũng có trong trình đơn
**Chỉnh sửa**. **Xóa toàn bộ lớp** cũng bỏ luôn ảnh gốc.
