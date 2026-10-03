---
title: "Bộ lọc và điều chỉnh"
description: "Thêm bộ lọc có thể chỉnh sửa và thay đổi cài đặt của nó bất cứ khi nào bạn muốn."
purpose: "Các bộ lọc thay đổi giao diện của các lớp bên dưới chúng, từ điều chỉnh độ sáng và màu sắc đơn giản đến hiệu ứng làm mờ và nghệ thuật. Mỗi bộ lọc là một lớp riêng nên bạn có thể điều chỉnh, ẩn hoặc xóa nó sau mà không cần chạm vào lớp sơn bên dưới."
techniques: ["Tìm và thêm bộ lọc.", "Thay đổi cài đặt của nó trong Thuộc tính.", "Giới hạn bộ lọc ở một phần của bản vẽ."]
figure: "1: Bảng bộ lọc. 2: Lớp điều chỉnh trong Layers. 3: Tab thuộc tính để chỉnh sửa nó."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1: Bảng bộ lọc. 2: Lớp điều chỉnh trong Layers. 3: Tab thuộc tính để chỉnh sửa nó."}
---

## Thêm bộ lọc

Chọn lớp mà bộ lọc sẽ nằm ở trên, sau đó mở bảng **Filters**. Các bộ lọc được sắp xếp thành các nhóm như Tông màu, Màu sắc, Độ mờ và Nghệ thuật và bạn có thể nhập vào hộp tìm kiếm để tìm theo tên, chẳng hạn như **Curves** hoặc **Gaussian Blur**. Chọn một bộ lọc để thêm nó dưới dạng một lớp mới. Menu **Filter** ở đầu cửa sổ liệt kê các bộ lọc tương tự.

Trong Sketch, nút **Filters** trên thanh tiêu đề sẽ mở một ngăn kéo. Chọn một nhóm ở bên trái, sau đó chọn bộ lọc và cài đặt của nhóm đó sẽ xuất hiện ở bên phải.

## Thay đổi cài đặt

Chọn lớp của bộ lọc và mở **Properties** để xem cài đặt của nó. Một số bộ lọc sử dụng thanh trượt, trong khi những bộ lọc khác sử dụng đường cong hoặc màu sắc. Thay đổi từng cài đặt một và xem bản vẽ khi bạn thực hiện. Nếu bạn muốn xem tông màu của hình ảnh được trải ra như thế nào khi bạn làm việc, hãy mở **View → Histogram…**.

Ẩn và hiển thị lớp bộ lọc để so sánh kết quả với bản gốc hoặc giảm độ mờ của nó để làm cho toàn bộ hiệu ứng nhẹ nhàng hơn. Bạn có thể quay lại Thuộc tính bất kỳ lúc nào để thay đổi lại cài đặt.

## Giới hạn nơi áp dụng

Bộ lọc ảnh hưởng đến mọi thứ bên dưới nó trong danh sách lớp. Để giữ nó cách xa một phần của bản vẽ, hãy thêm [mask](/vi/docs/layers/masks/) vào lớp bộ lọc hoặc đặt bộ lọc vào trong một nhóm để nó chỉ ảnh hưởng đến các lớp trong nhóm đó. Giữ lại hình vẽ đường nét và các chi tiết khác mà bạn không muốn thay đổi phía trên bộ lọc.

Khi bạn sử dụng nhiều bộ lọc, thứ tự của chúng rất quan trọng, vì vậy hãy thử di chuyển chúng lên hoặc xuống nếu kết quả không như bạn mong đợi. Để biết ví dụ hoàn chỉnh về ảnh, hãy xem [Chỉnh sửa ảnh](/vi/docs/filters/image-editing/).
