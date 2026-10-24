---
title: "Sao chép và dán"
description: "Sao chép pixel và dán thành lớp hoặc bản vẽ mới."
related: ["selections/working", "transform/move-transform", "layers/types", "files/open-save"]
---

Các lệnh bảng nhớ tạm nằm trong trình đơn **Chỉnh sửa** và tìm lệnh.

![Dán đặc biệt trong trình đơn Sửa.](shot:transform/clipboard-edit-menu)

## Sao chép và Cắt

**Sao chép** (**Ctrl+C**) sao chép pixel của lớp đang chọn trong vùng chọn, không gồm độ đục, mặt nạ hoặc bộ lọc đính kèm. Khi không có vùng chọn, lệnh sao chép lớp trong khung vẽ.

**Cắt** (**Ctrl+X**) sao chép các pixel đó rồi xóa chúng. Lệnh không có trên lớp bị khóa hoặc có **Khóa alpha**.

**Sao chép ảnh gộp** (**Ctrl+Shift+C**) sao chép kết quả đang hiện trong vùng chọn, gồm ánh sáng Giấy. Nhóm, lớp bộ lọc và lớp vùng chọn không có pixel riêng.

**Sao chép điểm ảnh** hoạt động như **Sao chép**, và trên lớp Đối tượng, lệnh sao chép các ảnh của lớp dưới dạng pixel.

## Dán

**Dán** (**Ctrl+V**) thêm tác phẩm trong bảng nhớ tạm thành lớp mới và mở tay nắm biến đổi khi cần đặt vị trí. Ảnh từ ứng dụng khác trở thành [lớp Đối tượng](/vi/docs/layers/types/), giữ nguồn cho đến khi bạn chuyển thành ảnh điểm.

Bản sao tạo trong {appName} trở về vị trí đã sao chép khi vị trí đó đang hiện. Nếu không, bản sao nằm giữa chế độ xem.

## Dán đặc biệt

Mở **Chỉnh sửa > Dán đặc biệt** để chọn đích.

- **Dán đúng vị trí** thêm lớp tại vị trí sao chép mà không mở tay nắm biến đổi.
- **Dán vào vị trí đang hiển thị** thêm lớp ở giữa phần khung vẽ đang hiện, với kích thước gốc.
- **Dán tại con trỏ** thêm lớp có tâm ở con trỏ, với kích thước gốc.
- **Dán vào** thêm lớp có vùng chọn đang hoạt động làm mặt nạ, rồi xóa vùng chọn.
- **Dán thành ảnh mới** tạo bản vẽ mới từ bảng nhớ tạm.

Các lệnh cần vùng chọn, lớp có thể sửa hoặc ảnh bảng nhớ tạm tương thích bị làm mờ.

![Trình đơn Dán đặc biệt với Dán đúng vị trí, Dán vào vị trí đang hiển thị, Dán tại con trỏ, Dán vào và Dán thành ảnh mới.](shot:transform/paste-special)

## Giữa các ứng dụng

Ứng dụng khác nhận bản sao từ {appName} dưới dạng PNG sRGB 8 bit. Khi bản sao nội bộ còn trên bảng nhớ tạm, bản vẽ {appName} khác nhận độ chính xác gốc.

Trong trình biên tập web, ảnh dán có thể đến 512 MiB. Nếu trình duyệt không thể dán ảnh, dùng **Tệp > Nhập ảnh thành lớp…**.
