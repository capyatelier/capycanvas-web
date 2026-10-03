---
title: "Điền và chuyển màu"
description: "Điền vào một khu vực bằng một cú nhấp chuột hoặc bằng sự pha trộn mượt mà từ màu này sang màu khác."
purpose: "Công cụ Đổ màu đổ màu vào một vùng chỉ bằng một cú bấm chuột, đây là cách nhanh nhất để tô màu trong nghệ thuật đường nét. Thay vào đó, dải màu chuyển màu hòa trộn mượt mà từ màu này sang màu khác, rất hữu ích cho bầu trời, hình nền và ánh sáng dịu."
techniques: ["Điền vào một khu vực bên trong đường nét của bạn bằng một cú nhấp chuột.", "Vẽ một gradient tuyến tính hoặc xuyên tâm.", "Giữ màu tô hoặc chuyển màu bên trong vùng chọn."]
figure: "1: Các kiểu chuyển màu trong Bộ công cụ. 2: Màu nền trước và màu nền. 3: Lớp nhận gradient."
related: ["painting/color", "tools/selections", "layers/masks"]
image: {"light": "/assets/guides/tools-gradients-light.webp", "dark": "/assets/guides/tools-gradients-dark.webp", "alt": "1: Các kiểu chuyển màu trong Bộ công cụ. 2: Màu nền trước và màu nền. 3: Lớp nhận gradient."}
---

## Lấp đầy một khu vực bằng một cú nhấp chuột

Chọn công cụ **Fill** hoặc nhấn **F** và nhấp vào bên trong một vùng để tô màu nền trước cho vùng đó. Để tô màu cho tác phẩm nghệ thuật đường nét trên một lớp khác, trước tiên hãy đánh dấu lớp nghệ thuật đường nét làm tham chiếu bằng **Layer Settings → Use as reference** và chọn **Reference layers** trong Bộ công cụ. Sau đó chọn lớp trống mà bạn muốn vẽ lên và nhấp vào bên trong vùng đó. Việc tô màu dừng lại ở các dòng, mặc dù chúng nằm trên một lớp khác.

Nếu phần tô bị rò rỉ qua một khoảng trống nhỏ trên đường kẻ của bạn, hãy nâng **Close gaps** trong bảng Công cụ. **Expansion** đẩy nhẹ phần tô dưới các đường kẻ để không còn viền trắng mỏng giữa màu và mực.

## Chọn màu sắc và lớp

Màu chuyển sắc dễ dàng thay đổi nhất sau này nếu nó có một lớp riêng, vì vậy trước tiên hãy thêm một lớp mới. Sau đó chọn hai màu trong bảng **Color**: độ dốc bắt đầu bằng màu nền trước và kết thúc bằng màu nền.

Chọn công cụ **Gradient**, sau đó chọn một loại trong **Tool Set**. Độ dốc của **Linear** hòa quyện thành một đường thẳng và độ dốc của **Radial** trải ra theo hình tròn từ điểm trung tâm. Các phiên bản *color to clear* làm mờ màu nền trước thành trong suốt thay vì hòa vào màu nền.

## Kéo để vẽ nó

Đối với dải màu tuyến tính, hãy kéo từ vị trí có màu đầu tiên đến vị trí có màu thứ hai. Đối với gradient hướng tâm, hãy bắt đầu ở giữa và kéo ra ngoài. Kéo ngắn sẽ tạo ra sự thay đổi nhanh chóng giữa các màu và kéo dài sẽ trải đều sự hòa trộn trên nhiều bản vẽ hơn.

Nếu kết quả không hoàn toàn đúng, hãy hoàn tác và kéo lại. Thường phải mất một vài lần thử để tìm được góc và độ dài phù hợp.

## Giữ nó ở nơi bạn muốn

Nếu [selection](/vi/docs/tools/selections/) đang hoạt động, gradient chỉ lấp đầy vùng đã chọn. Bỏ chọn sau đó để các nét tiếp theo của bạn có thể đi đến bất cứ đâu. Đối với ranh giới mà bạn có thể muốn điều chỉnh sau này, hãy sử dụng [mask](/vi/docs/layers/masks/) thay vì vùng chọn. Vì gradient nằm trên lớp riêng của nó nên bạn cũng có thể làm mềm nó sau bằng cách giảm độ mờ của lớp.
