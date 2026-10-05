---
title: "HDR"
description: "Bản vẽ HDR, cách bản vẽ HDR hiển thị trên màn hình, và phiên bản SDR của chúng."
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

Bạn có thể vẽ màu sáng hơn màu trắng SDR trong bản vẽ HDR. Bản vẽ ở
**HDR số thực 16 bit** hoặc **HDR số thực 32 bit** là bản vẽ HDR.

## Bản vẽ HDR

Để có bản vẽ HDR, thực hiện một trong các cách sau:

- Trong **Tệp > Mới…**, chọn thiết lập đặt sẵn **Bản vẽ HDR** hoặc một **Độ sâu bit** số thực.
- Chọn **Chỉnh sửa > Đổi độ sâu bit…** rồi chọn một độ sâu số thực.
- Mở tệp HDR PNG (BT.2020 PQ) hoặc HDR AVIF (HDR số thực 16 bit), hoặc tệp OpenEXR (HDR số thực 32 bit).
- Đặt **Độ sâu bit** thành một độ sâu số thực trên trang **Màu** của [Tùy chọn](/vi/docs/preferences/) để bản vẽ mới là bản vẽ HDR.

Trong bản vẽ HDR:

- [Bảng màu hiện tại](/vi/docs/color/color-panel/) và [Sửa màu](/vi/docs/color/edit-color/) đặt cường độ của màu vẽ theo EV.
- [Hòa trộn](/vi/docs/color-management/color-spaces/) luôn là Ánh sáng tuyến tính.
- Lớp phủ, Ánh sáng mềm, Ánh sáng mạnh, Đốt màu, Làm sáng màu, Ánh sáng rực, Trộn mạnh và Loại trừ không có trong danh sách [chế độ hòa trộn](/vi/docs/layers/blend-modes/).
- Đường cong có miền **HDR logarit** và **Khoảng HDR**.
- Công cụ [Khoảng sắc độ](/vi/docs/selections/tonal-range/) có **Vùng sáng HDR · trên +1 stop**.
- Biểu đồ phân bố đánh dấu màu trắng SDR.
- [Xuất ảnh](/vi/docs/files/export/) có các định dạng HDR.

Trong trình chỉnh sửa web, không mở được bản vẽ HDR lớn hơn 12 megapixel.

## HDR trên màn hình

Trên màn hình hiển thị được HDR, khung vẽ và Điều hướng hiện bản vẽ HDR ở dạng HDR khi
**Tắt** đang được chọn trong bảng [Mô phỏng màu](/vi/docs/color-management/proof/) và
cảnh báo ngoài dải màu đang tắt. Nếu không, chúng hiện phiên bản SDR của bản vẽ, các
điều khiển màu cũng vậy. Trong trình chỉnh sửa web, HDR cần trình duyệt báo được màn
hình HDR.

Một nhãn ở bên trái chân trang cho biết bạn đang xem phiên bản nào. Chọn nhãn để xem
chi tiết.

| Nhãn | Hiện khi |
| --- | --- |
| “HDR” | Bản vẽ được hiển thị ở dạng HDR. |
| “Xem trước SDR” | Bản vẽ ở chế độ SDR trên màn hình hiển thị HDR. |
| “Đang hiện SDR” | Màn hình không hiển thị HDR. |

## Phiên bản SDR

Mỗi bản vẽ HDR có một phiên bản SDR được lưu. Phiên bản này được dùng:

- trên màn hình không có HDR, và ở chế độ SDR;
- cho hình thu nhỏ của lớp;
- để mô phỏng bản in;
- cho ảnh xuất SDR và lớp nền SDR của ảnh xuất HDR JPEG và HDR AVIF.

Bạn có thể chỉnh phiên bản SDR mà không thay đổi pixel HDR. Thực hiện một trong các
cách sau:

- Chọn **Hiển thị > Mô phỏng SDR** (không có trên Windows).
- Chọn **Mô phỏng SDR** trong tìm lệnh.
- Chọn **SDR** ở đầu bảng Mô phỏng màu.

![Trang SDR của bảng Mô phỏng màu với núm xoay cho cân bằng, tương phản, độ sáng và cường độ màu.](shot:color-management/proof-panel-sdr)

Núm xoay trong bảng đặt bốn giá trị. Phần giữa núm hiện một hình minh họa cố định,
không phải bản vẽ. Nhấp đúp hoặc chạm đúp vào một phần của núm để đặt lại giá trị của
phần đó, hoặc chọn **Đặt lại diện mạo SDR** ở góc trên bên phải để đặt lại cả bốn. Khi
núm đang được chọn, các phím mũi tên thay đổi giá trị theo từng bước, và **Shift** tăng
độ lớn bước. **Escape** hủy thao tác kéo. Mỗi lần kéo là một bước hoàn tác và được lưu
cùng bản vẽ.

### Cân bằng

Kéo phần giữa của núm sang trái hoặc sang phải, từ −100% đến +100%. Bên trái ưu tiên
các mảng lớn, bên phải ưu tiên kết cấu chi tiết.

### Tương phản

Kéo phần giữa của núm xuống hoặc lên, từ 50% đến 200%.

### Độ sáng

Kéo cung trên, từ −50% đến +50%.

### Cường độ màu

Kéo cung dưới, từ trắng ở 0% đến đầy đủ màu ở 100%. Mặc định là 30%.

## Xem trước SDR

Bạn có thể chuyển qua lại giữa HDR và phiên bản SDR mà không mở bảng Mô phỏng màu.
Chọn **Xem trước SDR** trong tìm lệnh, hoặc gán phím cho lệnh này trên trang
[Phím tắt](/vi/docs/input/keyboard/).

**Xem trước SDR** chỉ hoạt động với bản vẽ HDR trên màn hình hiển thị HDR, khi mô
phỏng bản in và cảnh báo ngoài dải màu đang tắt.
