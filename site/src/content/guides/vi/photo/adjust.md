---
title: "Chỉnh ảnh và xuất ảnh"
description: "Giai đoạn 3 của hướng dẫn chỉnh sửa ảnh: chỉnh sắc độ và màu trên các lớp bộ lọc, và xuất JPEG."
related: ["filters/how-filters-apply", "filters/tone", "selections/working", "files/export"]
---

Giai đoạn này tạo các lớp bộ lọc chỉnh sắc độ và màu phía trên ảnh, và một tệp
JPEG cho web.

## 1. Thêm Đường cong

Chọn *Retouch*. Khi đó, bộ lọc bạn thêm từ trình đơn **Bộ lọc** sẽ nằm ngay trên
*Retouch* và thay đổi cả *Retouch* lẫn ảnh
([Phạm vi tác động của bộ lọc](/vi/docs/filters/how-filters-apply/)).

Chọn **Bộ lọc > Sắc độ > Đường cong**. Lớp **Đường cong** xuất hiện phía trên
*Retouch*, và thiết lập của lớp mở trong bảng **Thuộc tính**. Trên đường cong
**RGB**, thêm một điểm ở vùng tối và kéo xuống, rồi thêm một điểm ở vùng sáng và
kéo lên ([Bộ lọc sắc độ](/vi/docs/filters/tone/)).

![Bảng Thuộc tính với đường cong RGB hình chữ S trong Đường cong.](shot:photo/adjust-curves)

## 2. Thêm Độ rực màu

Chọn **Bộ lọc > Màu > Độ rực màu**, rồi đặt **Độ rực màu** là 25 trong bảng
**Thuộc tính** ([Bộ lọc màu](/vi/docs/filters/color/)). Lớp **Độ rực màu** xuất
hiện phía trên **Đường cong**.

## 3. Chọn hòn đá

1. Nhấn **M**, hoặc chọn **Chọn tự do** trên Thanh công cụ vẽ, rồi vẽ quanh hòn đá.
2. Chọn **Chọn > Làm mềm biên vùng chọn…**, hoặc chọn **Tinh chỉnh** trên thanh vùng chọn rồi chọn **Làm mềm biên…** ([Làm việc với vùng chọn](/vi/docs/selections/working/)).
3. Đặt **Feather radius** là 20 px rồi chọn **Áp dụng**.

## 4. Nâng sáng vùng tối trên hòn đá

Nâng sáng vùng tối của toàn bộ ảnh sẽ làm nền đen chuyển sang xám. Trong ví dụ, chỉ
vùng tối trên hòn đá được nâng sáng.

Chọn **Điều chỉnh** trên thanh vùng chọn rồi chọn
**Sắc độ > Vùng tối/Vùng sáng**. Đặt **Vùng tối** là 35% trong bảng
**Thuộc tính**.

![Thanh vùng chọn với trình đơn Điều chỉnh đang mở ở danh mục Sắc độ, bên cạnh vùng chọn quanh hòn đá.](shot:photo/adjust-bar)

Vùng chọn trở thành mặt nạ của lớp **Vùng tối/Vùng sáng** mới. Chỉ hòn đá thay
đổi.

## 5. Lưu bản vẽ

Chọn **Tệp > Lưu**, hoặc nhấn **Ctrl+S**. Lần lưu đầu tiên của một ảnh đã mở sẽ hỏi
thư mục và tên, giống như **Lưu thành…**. Tệp `.capy` giữ ảnh gốc, các lớp, mặt nạ
và các lớp bộ lọc ([Mở và lưu](/vi/docs/files/open-save/)).

## 6. Xuất JPEG

1. Chọn **Tệp > Xuất…**, hoặc nhấn **Ctrl+Shift+E**.
2. Giữ **Đích** ở **Web / Chia sẻ**, và đặt **Định dạng** là **Ảnh JPEG**.
3. Đặt **Kích thước pixel** là **Vừa trong giới hạn**, và giữ **Chiều rộng tối đa (px)** và **Chiều cao tối đa (px)** ở 2048.
4. Chọn **Chọn tệp…**, rồi chọn thư mục và tên.

![Hộp thoại Xuất ảnh với Web / Chia sẻ, Ảnh JPEG, Chất lượng 90 và Vừa trong giới hạn.](shot:photo/export-jpeg)

Việc xuất không thay đổi bản vẽ ([Xuất ảnh](/vi/docs/files/export/)).
