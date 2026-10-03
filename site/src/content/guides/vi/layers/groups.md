---
title: "Nhóm và pha trộn"
description: "Giữ các lớp liên quan với nhau và thay đổi cách kết hợp màu sắc của chúng."
purpose: "Khi bản vẽ phát triển, các nhóm sẽ giữ các lớp liên quan lại với nhau để danh sách luôn dễ đọc. Chế độ hòa trộn thay đổi cách trộn màu của lớp với các lớp bên dưới, rất hữu ích cho việc tạo bóng, vùng sáng và rửa màu."
techniques: ["Đặt các lớp liên quan vào một nhóm.", "Hãy thử chế độ hòa trộn trên một lớp bóng.", "Giữ một danh sách lớp dài gọn gàng."]
figure: "1: Ngăn xếp lớp. 2: Chế độ hòa trộn. 3: Nút nhóm mới."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1: Ngăn xếp lớp. 2: Chế độ hòa trộn. 3: Nút nhóm mới."}
---

## Các lớp liên quan đến nhóm

Chọn **New group** ở cuối bảng Layers, sau đó kéo các lớp vào đó. Ví dụ: bạn có thể giữ màu sắc, bóng và đường nét của nhân vật trong một nhóm và nền trong một nhóm khác. Chọn mũi tên bên cạnh một nhóm để gấp nó đi khi bạn không cần xem nội dung của nó.

Ẩn một nhóm sẽ ẩn mọi thứ bên trong nó. Nếu một lớp dường như đã biến mất ngay cả khi mắt của nó vẫn bật, hãy kiểm tra xem nhóm chứa nó có bị ẩn hay không. Giữ các lớp đã cắt ngay phía trên lớp cơ sở của chúng khi bạn di chuyển chúng vào một nhóm để chúng vẫn được gắn vào đó.

## Hãy thử chế độ hòa trộn

Chọn một lớp bóng và mở menu chế độ hòa trộn phía trên danh sách. **Multiply** làm tối các màu bên dưới, giúp tạo bóng tốt. **Screen** làm sáng chúng, phù hợp với ánh sáng rực rỡ và nổi bật. **Normal** chỉ đơn giản vẽ lên những gì bên dưới và các chế độ khác sẽ trộn màu theo cách riêng của chúng.

Ẩn và hiển thị lớp để so sánh kết quả. Nếu hiệu ứng quá mạnh, hãy giảm độ mờ của lớp thay vì sơn lại.

## Giữ danh sách gọn gàng

Các nhóm giữ một danh sách dài một cách gọn gàng trong khi mọi lớp vẫn có thể chỉnh sửa được và bạn có thể gấp các nhóm mà bạn không làm việc lại. Nếu bạn cần một hình ảnh phẳng cho một ứng dụng khác, [xuất](/vi/docs/output/export/) một bản sao và giữ lại tệp `.capy` cùng với tất cả các lớp của nó.

Đối với những thay đổi màu sắc mà bạn muốn tiếp tục điều chỉnh, chẳng hạn như độ sáng hoặc độ bão hòa, hãy sử dụng lớp bộ lọc từ [Bộ lọc và điều chỉnh](/vi/docs/filters/overview/) thay vì vẽ thay đổi thành một lớp.
