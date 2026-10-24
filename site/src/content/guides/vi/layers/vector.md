---
title: "Lớp vector"
description: "Các lớp chứa đường thay vì pixel, cùng bút, hình và tẩy dùng trên chúng."
related: ["layers/paths", "layers/types", "drawing/figure", "layers/merging"]
---

Lớp vector giữ các đường thay vì pixel. Bạn có thể chỉnh lại hình dạng các đường sau khi vẽ ([Chỉnh sửa đường](/vi/docs/layers/paths/)).

## Tạo lớp vector

Thực hiện một trong các cách sau:

- Chọn **Lớp vector mới** ở cuối bảng Lớp.
- Chọn **Lớp > Mới > Lớp vector mới**.
- Nhấn **Ctrl+Alt+Shift+N**.
- Gõ “line art” vào [tìm lệnh](/vi/docs/start/command-search/).

Một biểu tượng đường đánh dấu hình thu nhỏ của lớp vector.

![Bảng Lớp với lớp vector Line art phía trên Mực hiện tại và Giấy, có biểu tượng đường trên hình thu nhỏ.](shot:vector/layers-panel)

## Vẽ đường

Bạn có thể vẽ đường bằng **Bút G**, có độ rộng thay đổi theo lực nhấn bút, và bằng **Nét đều**, giữ một độ rộng. Mỗi nét vẽ trở thành một đường. Một nét vẽ bắt đầu từ đầu hở của một đường đang chọn sẽ nối tiếp đường đó.

Chọn một lớp vector sẽ chuyển sang bút gần nhất đã vẽ đường, ban đầu là Bút G. Chọn lại một lớp vẽ sẽ đưa cọ bạn đã dùng trở lại.

Trên lớp vector, **Bộ công cụ** làm mờ các cọ không vẽ được đường. Một bút ngừng vẽ đường khi bạn hạ **Độ cứng** hoặc **Độ mạnh** của nó.

![Thông báo trên khung vẽ cho một cọ không vẽ được đường, với Dùng Bút G, Lớp vẽ mới và Chuyển lớp thành ảnh điểm.](shot:vector/refusal-notice)

Một nét vẽ bằng cọ khác không vẽ gì, và một thông báo nêu tên lớp. Các thao tác của thông báo là **Dùng Bút G**, **Lớp vẽ mới** (thêm một lớp vẽ phía trên) và **Chuyển lớp thành ảnh điểm**. Khi một thiết lập chặn bút, **Đặt lại** kèm tên thiết lập, ví dụ **Đặt lại Độ cứng**, thay cho **Dùng Bút G**.

## Hình

Với **Hình**, mỗi **Đường thẳng**, **Hình chữ nhật**, **Elip**, **Đa giác**, **Ngôi sao** và **Đường** trở thành một đường, được chọn và nằm phía trước các đường khác. Xem [Hình](/vi/docs/drawing/figure/).

## Tẩy đường

Bạn có thể tẩy đường bằng **Tẩy**, bằng **Màu vẽ trong suốt**, hoặc bằng đầu tẩy của bút. Khi Tẩy đang hoạt động trên lớp vector, ba chế độ hiện phía trên các cọ tẩy trong **Bộ công cụ**. Trong Phác thảo, chúng nằm đầu cột **Công cụ** của ngăn **Tẩy**.

![Bảng Bộ công cụ cho Tẩy trên lớp vector, với Xóa phần chạm vào, Xóa toàn bộ đường và Xóa đến giao điểm phía trên cọ Tẩy.](shot:vector/eraser-modes)

- **Xóa phần chạm vào** cắt một đường tại chỗ tẩy chạm vào và giữ nguyên phần còn lại của đường. Đây là mặc định.
- **Xóa toàn bộ đường** xóa mọi đường mà tẩy chạm vào.
- **Xóa đến giao điểm** xóa phần bị chạm của một đường cho đến các điểm cắt gần nhất với đường khác hoặc với chính nó. Một đường không cắt gì sẽ bị xóa hoàn toàn.

Việc tẩy không xóa vùng đã tô.

## Tô

**Tô đầy** tô màu đường khép kín mà bạn nhấp vào, và **Tô vùng chọn tự do** thêm một đường được tô. Xem [Công cụ tô màu](/vi/docs/drawing/fill/).

## Chuyển lớp thành ảnh điểm

Chọn **Lớp > Chuyển lớp thành ảnh điểm** để biến lớp vector thành lớp vẽ giữ những gì các đường của nó hiện ra.

## Gộp

**Gộp xuống** giữ nguyên các đường khi một lớp vector gộp vào lớp vector khác. Mọi lần gộp khác biến các đường thành pixel sau một thông báo. Xem [Gộp lớp](/vi/docs/layers/merging/).
