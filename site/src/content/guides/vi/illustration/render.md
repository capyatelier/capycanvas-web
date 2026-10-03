---
title: "Kết xuất"
description: "Thêm bóng và kết cấu trên các lớp được cắt theo từng hình, sau đó xuất kết quả."
purpose: "Kết xuất là nơi các hình dạng có được ánh sáng và bóng tối. Việc tô bóng trên các lớp đã cắt sẽ tự động giữ nó bên trong mỗi hình dạng và vì bóng đổ tách biệt với màu cơ bản nên bạn có thể điều chỉnh hoặc làm lại nó mà không mất bất kỳ thứ gì."
techniques: ["Cắt một lớp bóng vào Ribbon.", "Kiểm soát cường độ của bóng.", "Tô bóng các hình dạng khác, kiểm tra các lớp và xuất."]
figure: "1: Kết cấu Ribbon và bóng Ribbon phía trên Ribbon. 2: Clip vào lớp bên dưới. 3: Độ mờ của lớp cho toàn bộ đường bóng."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Kết cấu Ribbon và bóng Ribbon phía trên Ribbon. 2: Clip vào lớp bên dưới. 3: Độ mờ của lớp cho toàn bộ đường bóng."}
---

## 1. Thêm bóng đã được cắt bớt

Chọn **Ribbon**, thêm một lớp mới ngay phía trên nó và đặt tên là **Ribbon shading**. Mở menu của nó và chọn **Layer Settings → Clip to layer below**. Bây giờ, tô bóng ở những chỗ uốn cong của dải ruy băng bằng **Watercolor Wash** và thêm một vài điểm nhấn bằng **Paintbrush**. Các nét của bạn có thể đi qua mép của dải băng vì chỉ phần bên trong dải băng mới hiển thị.

Bây giờ, hãy để chế độ hòa trộn của lớp đổ bóng ở **Normal**. Màu cơ bản vẫn an toàn trên lớp Ribbon, vì vậy việc xóa bóng sẽ không bao giờ xóa màu bên dưới.

## 2. Kiểm soát sức mạnh

Độ mờ của cọ làm thay đổi các nét bạn sắp vẽ. **opacity of the Ribbon shading layer** thay đổi tất cả màu sắc mà bạn đã vẽ. Nếu mọi bóng trông quá mạnh, hãy giảm độ mờ của lớp thay vì sơn lại.

Để làm nổi bật, hãy thêm **Ribbon texture** ngay phía trên phần bóng Ribbon và cắt nó. Sử dụng bút chì nhỏ hoặc cọ có họa tiết để tạo một vài vết sáng. Thứ tự lớp bây giờ là kết cấu Ribbon, tô bóng Ribbon, sau đó là Ribbon. [Cài đặt cọ](/vi/docs/advanced/brush-engine/) giải thích độ mờ và dòng chảy chi tiết hơn.

## 3. Hoàn thiện và xuất khẩu

Tạo bóng cho **Disc** và **Block** theo cùng một cách, mỗi lớp có các lớp được cắt bớt riêng. Ví dụ này sử dụng Airbrush để tạo bóng mờ mềm mại trên đĩa và Pencil để tạo các dấu gạch nhỏ màu kem. Đặt **Line art** lên trên hết. Nếu cạnh ngoài của hình cần sửa, hãy vẽ lên mặt nạ của hình đó; nếu chỉ đổ bóng sai, hãy thay đổi lớp đổ bóng. [Mặt nạ và cắt](/vi/docs/layers/masks/) cũng hướng dẫn cách đổi màu mực bằng khóa alpha.

Khi bạn hài lòng với nó, hãy ẩn các lớp thô, lưu tệp `.capy` của bạn và [xuất image](/vi/docs/output/export/) để chia sẻ. Mở tệp đã xuất một lần để kiểm tra xem nó có giống như bạn mong đợi hay không.
