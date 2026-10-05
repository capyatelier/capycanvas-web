---
title: "Mặt nạ nhanh"
description: "Sửa vùng chọn dưới dạng mặt nạ vẽ được trong Mặt nạ nhanh."
related: ["selections/working", "selections/selection-layers", "selections/tonal-range", "layers/masks"]
---

Bạn có thể sửa vùng chọn dưới dạng mặt nạ vẽ được trong Mặt nạ nhanh.

## Vào Mặt nạ nhanh

Thực hiện một trong các cách sau:

- Chọn **Chọn > Mặt nạ nhanh**.
- Nhấn **Q**.
- Chọn **Mặt nạ nhanh** trên [thanh vùng chọn](/vi/docs/selections/working/).

Vùng chọn hiện tại trở thành mặt nạ. Khi không có vùng chọn, mặt nạ ban đầu trống.
Công cụ chuyển sang cọ hiện tại, trừ khi **Khoảng sắc độ** đang được dùng.

Bạn không thể vào Mặt nạ nhanh khi đang mở một phép biến đổi.

## Hiển thị trong Mặt nạ nhanh

Một lớp phủ, mặc định màu đỏ ở độ đục 50%, đánh dấu mặt nạ trên khung vẽ. Ở chế độ
**Vẽ vùng chọn**, lớp phủ che vùng đã chọn, còn ở chế độ **Mặt nạ thang xám**, lớp
phủ che vùng bên ngoài vùng chọn.

Một hàng tên **Mặt nạ nhanh** xuất hiện trên cùng bảng Lớp, ở trạng thái được chọn.
Nút mắt của hàng này hiện hoặc ẩn lớp phủ, giống lệnh **Hiện lớp phủ mặt nạ** trong
tìm lệnh. Bảng Màu hiện màu của mặt nạ thay cho màu vẽ.

![Ảnh bể kính trồng cây trong Mặt nạ nhanh, với lớp phủ trên vùng sáng.](shot:selections/quick-mask-overlay)

## Vẽ mặt nạ

Vẽ bằng bút, bút chì, bút phun hoặc tẩy để thay đổi mặt nạ. Các cọ khác không vẽ
được trong Mặt nạ nhanh. **Tô đầy**, **Chuyển màu** và **Vẽ vùng chọn** cũng thay
đổi mặt nạ.

- Ở chế độ **Vẽ vùng chọn**, màu nào cũng chọn. Tẩy và màu trong suốt bỏ chọn.
- Ở chế độ **Mặt nạ thang xám**, giá trị xám của màu quyết định mặt nạ: trắng chọn, đen bỏ chọn, còn các sắc xám chọn một phần.

Mặt nạ có màu trước và màu nền riêng, được sao chép từ màu vẽ khi Mặt nạ nhanh bắt
đầu. Nhấn **D** (**Đặt lại về đen / trắng**) để có màu trước đen và màu nền trắng.
Để đổi chỗ hai màu của mặt nạ, chạy **Đổi chỗ màu mặt nạ** từ tìm lệnh.

Các lệnh thay đổi bản vẽ, như **Xóa pixel đã chọn** và **Biến đổi**, không dùng
được trong Mặt nạ nhanh.

## Thanh Mặt nạ nhanh

[Thanh khung vẽ](/vi/docs/selections/working/) ở cuối khung vẽ có nhãn “Mặt nạ
nhanh”:

- **Đảo ngược**: **Đảo vùng chọn**.
- **Tô đầy** và **Xóa**: **Tô đầy mặt nạ** tô đầy toàn bộ mặt nạ, còn **Xóa độ phủ vùng chọn** làm trống mặt nạ.
- **Tinh chỉnh**: **Mở rộng…**, **Thu hẹp…**, **Làm mềm biên…**, **Viền…** và **Làm mịn…**. **Biến đổi viền** không dùng được ở đây.
- **Lưu**: **Lưu thành lớp vùng chọn** (xem [Lớp vùng chọn](/vi/docs/selections/selection-layers/)).
- **Thoát**: **Trở về bản vẽ**.

Khi thanh khung vẽ bị ẩn, thanh Mặt nạ nhanh không xuất hiện.

![Thanh Mặt nạ nhanh ở cuối khung vẽ.](shot:selections/quick-mask-bar)

## Trình đơn Mặt nạ nhanh

Khi Mặt nạ nhanh đang bật, trình đơn **Lớp** trở thành trình đơn **Mặt nạ nhanh**.
Nhấp chuột phải hoặc giữ hàng **Mặt nạ nhanh** để mở cùng trình đơn này.

- **Trở về bản vẽ**
- **Lưu thành lớp vùng chọn**
- **Sửa đổi**: **Đảo vùng chọn**, **Chọn mọi pixel**, **Xóa độ phủ vùng chọn**, **Tô đầy mặt nạ**, **Mở rộng…**, **Thu hẹp…**, **Làm mềm biên…**, **Viền…** và **Làm mịn…**

## Thiết lập lớp phủ

Bảng Thuộc tính hiện thiết lập của mặt nạ khi Mặt nạ nhanh đang bật.

![Bảng Thuộc tính của Mặt nạ nhanh, với Chế độ, Màu lớp phủ và Độ đục lớp phủ.](shot:selections/quick-mask-properties)

### Chế độ

**Vẽ vùng chọn** (mặc định) hoặc **Mặt nạ thang xám**. Chế độ là một thiết lập
chung cho Mặt nạ nhanh và mọi lớp vùng chọn, trong mọi bản vẽ. Lệnh
**Mặt nạ thang xám** trong tìm lệnh cũng chuyển chế độ này.

### Màu lớp phủ

Đặt màu của lớp phủ. Mặc định là màu đỏ.

### Độ đục lớp phủ

Từ 0 đến 100%. Mặc định là 50%.

## Thoát Mặt nạ nhanh

Thực hiện một trong các cách sau:

- Chọn **Chọn > Mặt nạ nhanh** hoặc nhấn **Q**.
- Chọn **Lớp > Trở về bản vẽ**.
- Chọn **Thoát** trên thanh Mặt nạ nhanh.
- Nhấn **Escape**.
- Chọn nút nạp bên cạnh hình thu nhỏ trên hàng **Mặt nạ nhanh**.

Mặt nạ trở thành vùng chọn hiện tại. **Bỏ chọn pixel** (**Ctrl+D**) cũng thoát Mặt
nạ nhanh, đồng thời bỏ vùng chọn.
