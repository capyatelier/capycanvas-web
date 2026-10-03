---
title: "Mặt nạ"
description: "Cung cấp dải băng, đĩa và khối màu của riêng chúng với các cạnh có thể chỉnh sửa."
purpose: "Ở giai đoạn này, mỗi hình dạng có lớp màu riêng. Màu sắc lấp đầy toàn bộ lớp và mặt nạ quyết định phần nào bạn nhìn thấy. Vì không có gì bị xóa nên bạn có thể điều chỉnh cạnh của bất kỳ hình dạng nào sau này chỉ bằng cách vẽ lên mặt nạ của nó."
techniques: ["Chọn một hình dạng bằng Lasso hoặc Tự động chọn.", "Biến vùng chọn thành một mặt nạ và tô màu cho lớp đó.", "Paint trên mặt nạ để điều chỉnh cạnh."]
figure: "1: Hình thu nhỏ mặt nạ được chọn của Ribbon. 2: Ribbon, Disc và Block bên dưới Line art. 3: Cục tẩy, dùng để che đi các phần của mặt nạ."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Hình thu nhỏ mặt nạ được chọn của Ribbon. 2: Ribbon, Disc và Block bên dưới Line art. 3: Cục tẩy, dùng để che đi các phần của mặt nạ."}
---

## 1. Chọn hình dạng

Ẩn **Sketch** và **Color rough**. Chọn **Lasso selection** và cẩn thận vẽ đồ xung quanh dải băng, như trong ví dụ.

Nếu đường nét của bạn được đóng xung quanh một hình, **Auto select** có thể thực hiện việc này chỉ bằng một cú nhấp chuột. Đánh dấu **Line art** làm lớp tham chiếu bằng cách chọn **Layer Settings → Use as reference** trong menu của nó. Sau đó chọn **Auto select**, chọn **Sample reference layers** trong bảng Công cụ và nhấp vào bên trong hình. [Công cụ lựa chọn](/vi/docs/tools/selections/) giải thích các cài đặt kiểm soát khoảng cách trải rộng của lựa chọn.

## 2. Tạo lớp mặt nạ màu

Thêm một lớp mới có tên **Ribbon** bên dưới Line art. Với lựa chọn vẫn hoạt động, hãy mở menu của Ribbon và chọn **Mask → Mask: reveal selection**. Lớp này bây giờ có một mặt nạ chỉ hiển thị hình dạng của dải băng.

Nhấp vào hình thu nhỏ sơn của Ribbon và chọn màu của ribbon. Chọn **Select → Select all pixels** và sau đó là **Edit → Fill selection** để tô màu toàn bộ lớp và hoàn thiện với **Select → Deselect pixels**. Chỉ có dải băng hiển thị nhưng màu vẫn tiếp tục bên dưới mặt nạ, sẵn sàng khi bạn muốn mở rộng hình dạng.

## 3. Điều chỉnh cạnh

Nhấp vào hình thu nhỏ mặt nạ của Ribbon để chỉnh sửa mặt nạ. Giờ đây, bất kỳ cọ vẽ nào cũng hiển thị nhiều màu hơn ở nơi bạn vẽ và **Eraser** sẽ ẩn nó lại. Nhấp vào hình thu nhỏ sơn một lần nữa khi bạn muốn thay đổi màu sắc.

Tạo **Disc** và **Block** theo cách tương tự. Giữ Đĩa bên dưới Dải băng và Khối bên dưới Đĩa, với nghệ thuật Đường kẻ ở trên cả ba. Lưu bản vẽ của bạn, sau đó tiếp tục [Rendering](/vi/docs/illustration/render/).
