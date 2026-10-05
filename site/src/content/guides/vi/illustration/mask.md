---
title: "Màu nền"
description: "Giai đoạn 3 của hướng dẫn vẽ minh họa: mỗi hình một lớp vẽ, có mặt nạ theo hình và được tô màu nền của hình."
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

Giai đoạn này tạo một lớp vẽ cho mỗi hình, tô màu nền của hình và có mặt nạ theo
hình. Màu nền được đặt trên lớp vẽ vì lớp tô màu không thể làm lớp nền cắt cho các
lớp đổ bóng ở giai đoạn 4.

## 1. Thêm lớp Block

Ẩn *Sketch*, chọn hàng của lớp đó, rồi thêm một lớp tên *Block* bằng
**Lớp mới**. Lớp mới nằm ngay trên *Sketch*, dưới *Line art*.

## 2. Tạo mặt nạ lớp theo khối

Nhấn **M**, hoặc chọn **Chọn tự do** trong nhóm **Chọn** trên Thanh công cụ vẽ,
rồi đồ theo đường viền của khối trên *Line art*. Sau đó chọn **Mặt nạ** trên thanh
vùng chọn ([Làm việc với vùng chọn](/vi/docs/selections/working/)).

![Thanh vùng chọn với Mặt nạ, bên cạnh vùng chọn quanh khối.](shot:illustration/mask-selection-bar)

Vùng chọn trở thành mặt nạ của *Block* ([Mặt nạ](/vi/docs/layers/masks/)). Hình
thu nhỏ mặt nạ xuất hiện trên hàng, và một thanh ở cuối khung vẽ ghi
“Đang sửa mặt nạ Block”.

## 3. Tô màu lớp

**Tô đầy vùng chọn** không dùng được trong lúc bạn sửa mặt nạ. Để tô màu lớp:

1. Chọn hình thu nhỏ của lớp trên hàng *Block*, hoặc chọn **Sửa nội dung** trên thanh ở cuối khung vẽ.
2. Chọn màu đất nung trong bảng **Màu**.
3. Chọn **Chọn > Chọn mọi pixel**, hoặc nhấn **Ctrl+A**.
4. Chọn **Chỉnh sửa > Tô đầy vùng chọn**, hoặc nhấn **Shift+Backspace**.
5. Chọn **Chọn > Bỏ chọn pixel**, hoặc nhấn **Ctrl+D**.

Màu phủ toàn bộ lớp, và mặt nạ chỉ cho màu hiện bên trong khối.

## 4. Thêm Disc và Ribbon

Làm tương tự để tạo *Disc* màu vàng đất, rồi *Ribbon* màu xanh mòng két.

![Bảng Lớp với Ribbon, Disc và Block, mỗi lớp có một hình thu nhỏ mặt nạ, bên dưới Line art.](shot:illustration/mask-layers)

Danh sách lớp lúc này là *Line art*, *Ribbon*, *Disc*, *Block*, *Sketch*,
*Color rough* và **Giấy**.

## 5. Chỉnh một cạnh

Chọn hình thu nhỏ mặt nạ trên hàng *Ribbon*. Thanh ở cuối khung vẽ ghi
“Đang sửa mặt nạ Ribbon”.

![Thanh ở cuối khung vẽ ghi Đang sửa mặt nạ Ribbon, với Đảo ngược, Tắt, Áp dụng mặt nạ và Sửa nội dung.](shot:illustration/mask-bar)

Vẽ dọc theo cạnh bằng cọ **Bút G** để hiện thêm màu xanh mòng két, hoặc dùng
**Tẩy** để gọt cạnh. Trên mặt nạ, cọ bỏ qua màu vẽ.

Giai đoạn tiếp theo: [Render](/vi/docs/illustration/render/).
