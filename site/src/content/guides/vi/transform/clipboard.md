---
title: "Sao chép và dán"
description: "Sao chép pixel và dán thành lớp mới, trong {appName} và giữa các ứng dụng."
related: ["selections/working", "transform/move-transform", "layers/working", "files/open-save"]
---

Bạn có thể sao chép pixel từ một lớp hoặc từ ảnh hiển thị, rồi dán thành lớp mới.
Các lệnh nằm trong trình đơn **Chỉnh sửa** và trong tìm lệnh.

![Các lệnh bảng nhớ tạm trong trình đơn Chỉnh sửa.](shot:transform/clipboard-edit-menu)

| Lệnh | Phím |
| --- | --- |
| **Cắt** | **Ctrl+X** |
| **Sao chép** | **Ctrl+C** |
| **Sao chép ảnh gộp** | **Ctrl+Shift+C** |
| **Dán** | **Ctrl+V** |
| **Dán đúng vị trí** | **Ctrl+Shift+V** |
| **Dán vào** | |

**Sao chép** trên [thanh vùng chọn](/vi/docs/selections/working/) chứa **Sao chép**,
**Sao chép ảnh gộp** và **Cắt**.

## Sao chép

Sao chép pixel riêng của lớp hiện tại bên trong vùng chọn, không kèm độ đục, mặt nạ
và bộ lọc gắn kèm của lớp. Khi không có vùng chọn, lệnh sao chép toàn bộ lớp trong
phạm vi khung vẽ.

## Cắt

Sao chép giống **Sao chép**, rồi xóa các pixel đã chọn khỏi lớp. Bạn không thể cắt
từ lớp đang bật **Khóa alpha**.

## Sao chép ảnh gộp

Sao chép ảnh hiển thị bên trong vùng chọn, đúng như ảnh xuất ra.

## Những gì không sao chép được

Nhóm, lớp bộ lọc và lớp vùng chọn không có pixel riêng. Để sao chép từ một nhóm, chọn
một lớp bên trong nhóm. Bạn không thể sao chép bản vẽ trong Mặt nạ nhanh, và
**Sao chép** cùng **Cắt** không dùng được khi bạn đang sửa mặt nạ.

Khi sao chép một vùng lớn, một thông báo tiến trình hiện ra kèm nút **Hủy**.

## Dán

Thêm nội dung bảng nhớ tạm thành một lớp mới và đặt lớp đó làm lớp hiện tại.

- Bản sao từ {appName} được đặt tại chỗ đã sao chép nếu chỗ đó nằm trong khung nhìn, nếu không thì đặt ở giữa khung nhìn.
- Ảnh từ ứng dụng khác mở ra trong hộp biến đổi. **Áp dụng** đặt ảnh, còn **Hủy** bỏ thao tác dán (xem [Di chuyển và biến đổi](/vi/docs/transform/move-transform/)).

## Dán đúng vị trí

Thêm nội dung bảng nhớ tạm thành lớp mới tại chỗ đã sao chép, không có hộp biến đổi.
Ảnh từ ứng dụng khác được đặt ở giữa khung nhìn với kích thước đầy đủ.

## Dán vào

Hoạt động giống **Dán đúng vị trí**, và tạo cho lớp mới một
[mặt nạ](/vi/docs/layers/masks/) chỉ hiện vùng chọn. Sau đó vùng chọn bị bỏ.
**Dán vào** cần có vùng chọn.

## Dán giữa các ứng dụng

Ứng dụng khác nhận bản sao từ {appName} dưới dạng ảnh PNG sRGB 8 bit. Dán lại vào
{appName} sẽ dùng bản sao với độ sâu bit đầy đủ khi bản sao vẫn còn trong bảng nhớ
tạm.

Bản sao được dán vào bản vẽ có thiết lập màu khác sẽ trở thành
[lớp ảnh](/vi/docs/layers/types/), được chuyển đổi từ hồ sơ màu riêng của bản sao.

Khi bạn đang gõ trong ô văn bản, các phím bảng nhớ tạm cắt, sao chép và dán văn bản.

Trong trình chỉnh sửa web, ảnh được dán có thể lớn tới 512 MiB. Trong trình duyệt
không dán được ảnh, hãy chọn **Tệp > Nhập ảnh thành lớp…**.
