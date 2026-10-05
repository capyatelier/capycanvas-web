---
title: "Phạm vi tác động của bộ lọc"
description: "Cách bộ lọc trên lớp riêng và bộ lọc gắn vào một lớp thay đổi hình ảnh."
related: ["filters/adding", "layers/masks", "layers/merging", "layers/settings"]
---

Bộ lọc là một lớp không có màu vẽ riêng. Thiết lập của bộ lọc luôn sửa được trong
bảng **Thuộc tính**.

![Bảng Lớp với Đường cong và Độ rõ nét gắn vào ảnh bể kính trồng cây, và một bộ lọc Tối góc trên lớp riêng phía trên.](shot:filters/layers-chain)

| | Bộ lọc trên lớp riêng | Bộ lọc gắn kèm |
| --- | --- | --- |
| Thêm bằng | Bảng **Bộ lọc**, trình đơn **Bộ lọc**, **Điều chỉnh** trên thanh vùng chọn | **Thêm bộ lọc** |
| Thay đổi | Mọi lớp bên dưới bộ lọc trong cùng nhóm | Chỉ lớp được gắn bộ lọc |
| Trong bảng Lớp | Một hàng riêng | Một hàng nối với hàng bên dưới bằng biểu tượng mắt xích |

## Bộ lọc trên lớp riêng

Bộ lọc mới được đặt phía trên lớp đang chọn và các lớp cắt hoặc bộ lọc gắn vào lớp
đó. Trong một nhóm, bộ lọc chỉ thay đổi các lớp bên dưới nó trong nhóm đó, trừ khi
nhóm được đặt [Xuyên qua](/vi/docs/layers/settings/).

## Bộ lọc gắn kèm

Bạn có thể gắn bộ lọc vào lớp vẽ, lớp ảnh hoặc nhóm không đặt Xuyên qua. Chọn lớp,
rồi chọn **Thêm bộ lọc** ở cuối bảng Lớp hoặc bảng **Thuộc tính**, hoặc trong trình
đơn của lớp.

Các bộ lọc gắn kèm được áp dụng theo chuỗi từ dưới lên, sau mặt nạ của lớp và trước
độ đục và chế độ hòa trộn của lớp. Trên lớp nền cắt, chúng còn thay đổi vùng hiện ra
của các lớp cắt. Bộ lọc làm mờ và làm méo như **Làm mờ Gaussian** và **Xoáy** có thể
làm màu vẽ của lớp lan ra ngoài biên của lớp.

Các bộ lọc gắn kèm được di chuyển, nhân bản hoặc ẩn cùng với lớp. Nếu bạn xóa lớp,
các bộ lọc gắn kèm vẫn còn, mỗi bộ lọc nằm trên một lớp riêng.

## Áp dụng cho *lớp* và Áp dụng cho các lớp bên dưới

Bạn có thể chuyển bộ lọc đang chọn giữa hai kiểu này.

Thực hiện một trong các cách sau:

- Chọn **Lớp > Thiết lập lớp > Áp dụng cho *lớp*** hoặc **Áp dụng cho các lớp bên dưới**.
- Chọn nút mắt xích ở phần đầu bảng Lớp, tại vị trí của **Cắt theo lớp bên dưới**.
- Kéo bộ lọc thả vào hình thu nhỏ của một lớp để gắn bộ lọc vào lớp đó.

![Phần đầu bảng Lớp với nút mắt xích cho bộ lọc đang chọn.](shot:filters/attachment-button)

**Áp dụng cho *lớp*** gắn bộ lọc vào lớp gần nhất bên dưới.
**Áp dụng cho các lớp bên dưới** đưa bộ lọc ra lớp riêng, phía trên lớp mà bộ lọc
từng gắn vào và các lớp cắt của lớp đó.

Nút không dùng được khi bộ lọc hoặc lớp bên dưới đang bị khóa. Khi lớp bên dưới
không phải lớp vẽ, lớp ảnh hoặc nhóm, chú thích của nút ghi “Không có lớp bên dưới
để gắn”.

## Vùng chọn làm mặt nạ bộ lọc

Nếu đang có vùng chọn khi bạn thêm bộ lọc, vùng chọn trở thành
[mặt nạ](/vi/docs/layers/masks/) của bộ lọc. Một lần **Hoàn tác** sẽ xóa bộ lọc và
khôi phục vùng chọn.

## Áp dụng hiệu ứng vào lớp bên dưới

Bạn có thể gộp bộ lọc vào lớp bên dưới thành màu vẽ.

Chọn bộ lọc, rồi thực hiện một trong các cách sau:

- Chọn **Lớp > Áp dụng hiệu ứng vào lớp bên dưới**, hoặc chọn lệnh này từ trình đơn lớp của bộ lọc.
- Nhấn **Ctrl+E**.

![Trình đơn lớp của một bộ lọc với Áp dụng hiệu ứng vào lớp bên dưới.](shot:filters/apply-effect-menu)

Bộ lọc trên lớp riêng chỉ được áp dụng vào lớp ngay bên dưới. Với bộ lọc gắn kèm,
lớp và toàn bộ chuỗi bộ lọc của lớp trở thành màu vẽ. Nếu lớp đó là lớp cắt hoặc có
lớp khác cắt vào nó, lệnh này ghi **Gộp lớp bị cắt** (xem
[Gộp lớp](/vi/docs/layers/merging/)).

Bộ lọc và lớp bên dưới phải đang hiện, chưa khóa và ở chế độ Bình thường. Lệnh không
dùng được khi lớp ngay bên dưới là bộ lọc gắn vào một lớp khác.
