---
title: "Không gian màu, HDR và kiểm chứng"
description: "Chọn cách bản vẽ lưu trữ màu, hoạt động trong HDR và xem trước cách hình ảnh sẽ được in."
purpose: "Hầu hết các bản vẽ đều trông đẹp mắt với cài đặt mặc định. Khi bạn chỉnh sửa ảnh, chuẩn bị tác phẩm để in hoặc muốn màu sắc sống động của màn hình hiện đại, bạn có thể chọn mức độ màu mà bản vẽ có thể giữ và xem trước nó sẽ trông như thế nào ở một nơi khác."
techniques: ["Chọn không gian màu và độ sâu bit cho bản vẽ mới.", "Paint và chỉnh sửa trong HDR.", "Xem trước màu in bằng Proof."]
figure: "1: Vẽ cài đặt trước. 2: Không gian màu và độ sâu bit. 3: Tạo, mở bản vẽ mới."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: Vẽ cài đặt trước. 2: Không gian màu và độ sâu bit. 3: Tạo, mở bản vẽ mới."}
---

## Chọn màu cho bản vẽ mới

Khi bạn chọn **File → New…**, menu **Preset** sẽ cung cấp một số điểm bắt đầu. **Standard drawing** phù hợp với hầu hết các tác phẩm nghệ thuật và mọi thứ bạn chia sẻ trực tuyến. **Wide color** có thể giữ được màu sắc sống động hơn mà nhiều màn hình hiện đại hiển thị và **Photo editing** giữ được độ chính xác cao hơn để các điều chỉnh mạnh không gây ra hiện tượng tạo dải trong các dải chuyển màu mượt mà.

**Color space** đặt phạm vi màu mà bản vẽ có thể giữ và **Bit depth** đặt mức độ lưu trữ tinh tế của từng màu. Nếu sau này bạn đổi ý, hãy sử dụng **Edit → Convert Color Space…** hoặc **Edit → Change Bit Depth…**. Ảnh giữ nguyên màu sắc được chụp nên không có gì để thiết lập khi bạn mở ảnh.

## Làm việc trong HDR

Chọn **16-bit float HDR** hoặc **32-bit float HDR** làm độ sâu bit để tạo bản vẽ HDR. Bản vẽ HDR có thể giữ các màu sáng hơn màu trắng, chẳng hạn như ánh sáng mặt trời và ánh sáng rực rỡ. Khi bạn chỉnh sửa bản vẽ HDR, một cung cường độ sẽ xuất hiện bên dưới bánh xe màu, do đó bạn cũng có thể vẽ bằng màu sáng hơn màu trắng.

HDR hiển thị ở độ sáng tối đa khi trình duyệt và màn hình của bạn hỗ trợ nó. Trên các màn hình khác, bạn sẽ thấy phiên bản tiêu chuẩn của hình ảnh. Khi bạn xuất bản vẽ HDR, bạn có thể lưu HDR JPEG hoặc AVIF trông giống như trên màn hình thông thường, như được mô tả trong [Xuất hình ảnh](/vi/docs/output/export/).

## Xem trước bằng chứng

Trước khi bạn gửi tác phẩm tới máy in, **View → Proof** sẽ hiển thị màu sắc trông như thế nào trên giấy. Trong bảng **Proof**, chọn **Print**, sau đó chọn hoặc thêm cấu hình màu của máy in hoặc dịch vụ in. **Gamut warning** đánh dấu các màu mà máy in không thể tái tạo nên bạn có thể điều chỉnh trước khi in.

Đối với các bản vẽ HDR, tùy chọn **SDR** trong cùng bảng hiển thị hình ảnh sẽ trông như thế nào trên màn hình thông thường và cho phép bạn tinh chỉnh độ sáng và độ tương phản của phiên bản đó.
