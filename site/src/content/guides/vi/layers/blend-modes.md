---
title: "Chế độ hòa trộn"
description: "Đặt chế độ hòa trộn và độ đục của lớp, và các chế độ trong trình đơn chế độ hòa trộn."
related: ["layers/settings", "layers/panel", "color-management/color-spaces", "color-management/hdr"]
---

Bạn có thể đặt cách một lớp kết hợp với các lớp bên dưới.

![Trình đơn chế độ hòa trộn mở trên bảng Lớp, với Bình thường được đánh dấu.](shot:layers/blend-menu)

## Chọn chế độ hòa trộn

Thực hiện một trong các cách sau:

- Chọn **Lớp > Chế độ hòa trộn** rồi chọn một chế độ.
- Chọn **Chế độ hòa trộn lớp** ở góc trên bên trái phần đầu bảng Lớp, rồi chọn một chế độ.
- Chọn một chế độ từ **Chế độ hòa trộn** trong bảng **Thuộc tính**.
- Gõ tên chế độ vào [tìm lệnh](/vi/docs/start/command-search/).

Chế độ hiện tại có dấu kiểm trong trình đơn, và tên chế độ xuất hiện trên nút ở phần
đầu bảng. Phụ đề của hàng hiện chế độ khi chế độ khác Bình thường. Lớp mới dùng
Bình thường.

Bạn không thể đổi chế độ hòa trộn của lớp vùng chọn hoặc lớp đã khóa.
[Gộp xuống](/vi/docs/layers/merging/) cần cả hai lớp ở chế độ Bình thường. Chế độ
hòa trộn pha màu trong không gian hòa trộn của bản vẽ, được đặt bằng
**Chỉnh sửa > Hòa trộn** (xem [Không gian màu, độ sâu bit và hòa trộn](/vi/docs/color-management/color-spaces/)).

## Các chế độ trong trình đơn chế độ hòa trộn

Trình đơn chế độ hòa trộn chia các chế độ thành những phần sau:

- **Xuyên qua** (chỉ cho nhóm, xem [Xuyên qua](/vi/docs/layers/settings/)), **Bình thường**
- **Làm tối**, **Nhân**, **Đốt màu**, **Đốt tuyến tính**
- **Làm sáng**, **Màn hình**, **Làm sáng màu**, **Thêm**
- **Lớp phủ**, **Ánh sáng mềm**, **Ánh sáng mạnh**, **Ánh sáng rực**, **Ánh sáng tuyến tính**, **Ánh sáng ghim**, **Trộn mạnh**
- **Sai biệt**, **Loại trừ**, **Trừ**, **Chia**
- **Sắc màu**, **Độ bão hòa**, **Màu**, **Độ sáng**

## Chế độ trong bản vẽ HDR

Trong [bản vẽ HDR](/vi/docs/color-management/hdr/), trình đơn chế độ hòa trộn không
có **Lớp phủ**, **Ánh sáng mềm**, **Ánh sáng mạnh**, **Đốt màu**, **Làm sáng màu**,
**Ánh sáng rực**, **Trộn mạnh** và **Loại trừ**. Các chế độ này chỉ được định nghĩa
cho màu nằm giữa đen và trắng. Lớp đang dùng một trong các chế độ này vẫn giữ chế độ
đó, và trình đơn vẫn liệt kê chế độ đó cho lớp.

## Độ đục

Thực hiện một trong các cách sau:

- Kéo **Độ đục lớp** ở phần đầu bảng Lớp, hoặc gõ giá trị từ 0 đến 100.
- Đổi **Độ đục** trong bảng **Thuộc tính**.
- Gõ “Độ đục lớp” và một giá trị vào tìm lệnh.

Phụ đề của hàng hiện độ đục khi độ đục dưới 100%. Bạn không thể đổi độ đục của lớp
vùng chọn hoặc lớp đã khóa, hoặc khi Mặt nạ nhanh đang bật.
