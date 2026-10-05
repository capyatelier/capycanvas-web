---
title: "Làm sáng, làm tối và tách tần số"
description: "Thêm lớp Làm sáng và làm tối, và tách một lớp thành lớp Thấp và lớp Cao bằng Tách tần số."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## Lớp làm sáng và làm tối mới

Bạn có thể thêm một lớp xám trung tính ở chế độ **Ánh sáng mềm** để làm sáng và
làm tối.

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mới > Lớp làm sáng và làm tối mới**.
- Mở trình đơn của một lớp trong bảng Lớp rồi chọn **Mới > Lớp làm sáng và làm tối mới**.

Một lớp có kích thước bằng khung vẽ, tên là *Làm sáng và làm tối*, xuất hiện phía
trên lớp hiện tại và các lớp cắt vào lớp đó, rồi trở thành lớp hiện tại.

Bạn không thể thêm lớp này vào nhóm đã khóa, hoặc trong lúc đang mở thao tác cắt
xén hay biến đổi.

![Bảng Lớp với lớp Làm sáng và làm tối phía trên ảnh bể kính trồng cây.](shot:retouch/dodge-burn-layer)

## Tách tần số…

Bạn có thể tách tần số cho lớp hiện tại trong một bước.

Chọn **Bộ lọc > Tách tần số…**. Một bảng mở ra ở cuối khung vẽ với **Bán kính**,
mặc định là 4 px. Trong lúc bạn đổi **Bán kính**, khung vẽ xem trước độ mờ của lớp
*Thấp*.

![Bảng Tách tần số với giá trị Bán kính.](shot:retouch/frequency-separation-panel)

**Áp dụng** đặt một nhóm tên *Tách tần số* vào vị trí của lớp:

- *Cao* chứa kết cấu chi tiết, đặt ở **Ánh sáng tuyến tính**. Đây là lớp trên cùng và trở thành lớp hiện tại.
- *Thấp* chứa màu và sắc độ, được làm mờ bằng **Làm mờ Gaussian** theo bán kính đã chọn, đặt ở **Bình thường**.

Nhóm nhận độ đục và thiết lập cắt của lớp ban đầu. Lớp ban đầu nằm ngay dưới nhóm,
ở trạng thái ẩn.

Lớp phải đang hiện và đặt ở **Bình thường**, và bản vẽ phải dùng
**Chỉnh sửa > Hòa trộn > Hòa trộn theo cảm nhận** (xem
[Không gian màu, độ sâu bit và hòa trộn](/vi/docs/color-management/color-spaces/)).
Nếu bản vẽ thay đổi trong lúc bảng đang mở, bảng sẽ đóng.

![Bảng Lớp với nhóm Tách tần số, Cao phía trên Thấp, và lớp ban đầu bị ẩn.](shot:retouch/frequency-separation-layers)
