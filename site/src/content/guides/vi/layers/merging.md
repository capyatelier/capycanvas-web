---
title: "Gộp lớp"
description: "Kết hợp các lớp thành một lớp vẽ bằng các lệnh gộp."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types"]
---

Bạn có thể gộp các lớp thành một lớp vẽ. Các lệnh gộp nằm gần cuối trình đơn
**Lớp** và gần cuối trình đơn của từng lớp.

![Trình đơn Lớp khi Ribbon là lớp hiện tại, với Gộp lớp bị cắt, Gộp lớp hiển thị, Tạo lớp gộp hiển thị và Gộp phẳng ảnh.](shot:layers/merging-menu)

Mỗi lần gộp là một bước hoàn tác. [Lớp ảnh](/vi/docs/layers/types/) mất ảnh gốc khi
bạn gộp lớp đó. Bạn không thể gộp khi đang sửa lớp vùng chọn hoặc Mặt nạ nhanh, hoặc
khi đang biến đổi.

## Gộp xuống

Bạn có thể gộp lớp hiện tại vào lớp bên dưới.

Thực hiện một trong các cách sau:

- Chọn **Lớp > Gộp xuống**.
- Nhấn **Ctrl+E** (không có trong sơ đồ phím Kiểu GIMP).

Lớp sau khi gộp lấy tên, vị trí, thiết lập cắt và **Khóa alpha** của lớp dưới, với độ
đục 100%, chế độ hòa trộn Bình thường và không có mặt nạ. Lớp này là lớp tham chiếu
nếu một trong hai lớp là lớp tham chiếu.

Cả hai lớp phải đang hiển thị, chưa khóa và ở chế độ Bình thường. Lớp bên dưới không
được là bộ lọc, và không được là lớp cắt trừ khi lớp hiện tại cũng là lớp cắt.

## Gộp lớp bị cắt

Khi lớp hiện tại là lớp nền cắt, **Gộp xuống** đổi thành
**Gộp lớp bị cắt**. Lệnh này gộp lớp nền cắt và các lớp cắt đang hiển thị thành một lớp
mang tên lớp nền cắt. Các lớp cắt đang ẩn vẫn được cắt theo lớp đã gộp.

Lệnh cũng ghi **Gộp lớp bị cắt** với bộ lọc được cắt, hoặc với bộ lọc gắn vào một
lớp cắt hay một lớp nền cắt. Lớp nền cắt phải đang hiển thị và ở chế độ Bình thường, và phải
có ít nhất một lớp cắt đang hiển thị.

## Áp dụng hiệu ứng vào lớp bên dưới

Khi lớp hiện tại là bộ lọc, **Gộp xuống** đổi thành
**Áp dụng hiệu ứng vào lớp bên dưới**, trừ khi bộ lọc nằm trong một chồng lớp cắt.
Lệnh này áp dụng bộ lọc vào lớp bên dưới, hoặc vào lớp mà bộ lọc gắn vào (xem
[Phạm vi tác động của bộ lọc](/vi/docs/filters/how-filters-apply/)).

## Gộp nhóm

Khi lớp hiện tại là nhóm, **Lớp > Gộp nhóm** thay cho **Gộp xuống**.

Nhóm trở thành một lớp với chế độ hòa trộn và độ đục của nhóm. Xuyên qua trở thành
Bình thường. Mặt nạ của nhóm được áp dụng, và các lớp đang ẩn trong nhóm bị bỏ.

Nhóm phải đang hiển thị và chưa khóa, và không được chứa lớp vùng chọn.

## Gộp lớp hiển thị

Chọn **Lớp > Gộp lớp hiển thị** để gộp mọi lớp đang hiển thị, kể cả **Giấy**, thành
một lớp. Các lớp đang ẩn giữ nguyên.

Lớp sau khi gộp lấy tên và vị trí của lớp hiển thị thấp nhất (**Giấy**, nếu Giấy đang
hiển thị). Các lớp đang ẩn từng được cắt theo một lớp bị gộp sẽ không còn bị cắt. Các
lớp đang hiển thị phải chưa khóa, và các nhóm trong số đó không được chứa lớp vùng
chọn.

## Tạo lớp gộp hiển thị

Chọn **Lớp > Tạo lớp gộp hiển thị** để thêm một lớp mới ở đầu danh sách, chứa mọi
thứ đang hiển thị đã được gộp lại. Mọi lớp khác vẫn giữ nguyên.

Lớp mới có tên “Visible”, phủ kín khung vẽ và trở thành lớp hiện tại. Lớp đã khóa
không cản **Tạo lớp gộp hiển thị**.

## Gộp phẳng ảnh

Chọn **Lớp > Gộp phẳng ảnh** để gộp mọi lớp đang hiển thị thành một lớp. Các lớp
đang ẩn và pixel nằm ngoài khung vẽ bị bỏ, nhưng các lớp vùng chọn nằm ngoài nhóm vẫn
được giữ. Các lớp đang hiển thị phải chưa khóa.

![Thông báo trên khung vẽ ghi “Gộp phẳng sẽ bỏ 2 lớp ẩn”, với nút Gộp phẳng ảnh.](shot:layers/merging-flatten-notice)

Nếu bản vẽ có lớp đang ẩn, một thông báo trên khung vẽ cho biết số lớp đó, ví dụ
“Gộp phẳng sẽ bỏ 2 lớp ẩn”. Bản vẽ không thay đổi cho đến khi bạn chọn
**Gộp phẳng ảnh** trong thông báo.
