---
title: "Mô phỏng màu"
description: "Mô phỏng bản in trên màn hình trong bảng Mô phỏng màu, cảnh báo ngoài dải màu, và nhãn màn hình ở chân trang."
related: ["color-management/hdr", "color-management/color-spaces", "files/export", "start/canvas"]
---

Bạn có thể xem bản vẽ sẽ được in ra như thế nào trong bảng **Mô phỏng màu** mà không
thay đổi bản vẽ.

## Bảng Mô phỏng màu

Thực hiện một trong các cách sau:

- Chọn **Cửa sổ > Mô phỏng màu**.
- Chọn **Bảng mô phỏng màu** trong tìm lệnh.
- Trong Vẽ và Ảnh, chọn thẻ **Mô phỏng màu** cạnh **Điều hướng**.

Chọn một chế độ ở đầu bảng:

- **Tắt** hiện bản vẽ bình thường.
- **SDR** hiện phiên bản SDR của [bản vẽ HDR](/vi/docs/color-management/hdr/). Chỉ bản vẽ HDR có chế độ này.
- **In** mô phỏng bản in bằng một hồ sơ màu ICC.

Mô phỏng màu xuất hiện trên khung vẽ và trong Điều hướng, không bao giờ xuất hiện
trong ảnh xuất ra hay trong Biểu đồ phân bố. Chọn một chế độ không đánh dấu bản vẽ là
đã thay đổi. Bản vẽ được mở lại bắt đầu với mô phỏng màu tắt nhưng vẫn giữ hồ sơ màu
in.

## Bật và tắt mô phỏng màu

Thực hiện một trong các cách sau:

- Chọn **Hiển thị > Mô phỏng màu**.
- Nhấn **Ctrl+Alt+P**. Sơ đồ phím Kiểu Photoshop và Kiểu Krita còn dùng **Ctrl+Y**.

Mô phỏng màu bật ở chế độ bạn dùng gần nhất (ban đầu là SDR với bản vẽ HDR và In với
bản vẽ SDR). Bảng Mô phỏng màu mở ra, và **Hiển thị > Mô phỏng màu** có dấu kiểm.

Trên trang [Phím tắt](/vi/docs/input/keyboard/), lệnh này là **Mô phỏng màu**. Bạn có
thể gán cho lệnh một phím chỉ mô phỏng màu khi bạn giữ phím đó.

## Mô phỏng bản in

Bạn có thể mô phỏng bản in bằng một hồ sơ màu ICC dạng RGB, CMYK hoặc thang xám.
Chọn **In** rồi chọn một **Hồ sơ màu**. Khung vẽ chưa được mô phỏng cho đến khi bạn
chọn hồ sơ màu.

Khi mô phỏng bản in đang bật, chân trang ghi “Mô phỏng màu: *hồ sơ*”. Nếu mô phỏng thất
bại, chân trang ghi “Mô phỏng màu không khả dụng”, kèm lý do trong chú giải.

Hồ sơ màu và các tùy chọn được lưu trong bản vẽ. Chọn hồ sơ màu sẽ đánh dấu bản vẽ là
đã thay đổi và là một bước hoàn tác. Hoàn tác sẽ bỏ hồ sơ màu và tắt mô phỏng màu. Chỉ
hồ sơ màu in đang dùng được lưu trong tệp `.capy`. Khi bạn thay hồ sơ màu đã lưu trong
bản vẽ, hồ sơ cũ được thêm vào **Hồ sơ màu đã lưu** trước. Bản vẽ HDR được mô phỏng từ
phiên bản SDR của chúng.

![Bảng Mô phỏng màu ở trang In với Adobe RGB (1998) được chọn làm hồ sơ màu.](shot:color-management/proof-panel-print)

### Hồ sơ màu

Danh sách gồm **Hồ sơ màu tài liệu** được lưu trong bản vẽ, **Hồ sơ màu đã lưu** từ
thư viện và **Không gian màu tiêu chuẩn**. **Thêm hồ sơ màu…** thêm một tệp `.icc`
hoặc `.icm` vào thư viện và chọn tệp đó, còn **Quản lý hồ sơ màu…** mở Thư viện hồ sơ
màu.

### Mô phỏng

**Màu**, **Mực đen** (mặc định) hoặc **Giấy và mực**. **Giấy và mực** cũng mô phỏng
mực đen.

### Mục đích

**Tương đối** (mặc định), **Theo cảm nhận**, **Độ bão hòa** hoặc **Tuyệt đối**.

### Bù điểm đen

Bật theo mặc định. Không dùng được với **Tuyệt đối**.

### Cảnh báo ngoài dải màu

Cùng công tắc với lệnh **Cảnh báo ngoài dải màu**, được mô tả bên dưới.

## Thư viện hồ sơ màu

Chọn **Quản lý hồ sơ màu…** trong danh sách **Hồ sơ màu**, hoặc trên trang **Màu**
của [Tùy chọn](/vi/docs/preferences/), để mở **Thư viện hồ sơ màu**.

- **Nhập hồ sơ màu ICC…** thêm một tệp `.icc` hoặc `.icm` có dung lượng tối đa 16 MiB.
- **Hiện trong trình đơn hồ sơ màu** và **Ẩn khỏi trình đơn hồ sơ màu** chọn những hồ sơ màu mà danh sách **Hồ sơ màu** hiện ra.
- **Xóa** bỏ một hồ sơ màu khỏi thư viện.

Thư viện chứa tối đa 128 hồ sơ màu và tổng cộng 64 MiB.

## Cảnh báo ngoài dải màu

Bạn có thể hiện các màu mà hồ sơ màu in không tái tạo được thành màu xám trung bình
trên khung vẽ. Thực hiện một trong các cách sau:

- Bật **Cảnh báo ngoài dải màu** ở trang In của bảng Mô phỏng màu.
- Nhấn **Ctrl+Shift+Y**.
- Chọn **Cảnh báo ngoài dải màu** trong tìm lệnh.

Chân trang ghi “Mô phỏng màu: *hồ sơ* · Cảnh báo ngoài dải màu”. Khi tắt mô phỏng bản
in, chân trang ghi “Dải màu: *hồ sơ*”.

Cảnh báo ngoài dải màu chỉ dùng được sau khi bạn chọn hồ sơ màu in. Chọn **Tắt** hoặc
**SDR**, hoặc tắt **Hiển thị > Mô phỏng màu**, sẽ tắt cảnh báo. Khi cảnh báo đang
bật, bản vẽ HDR hiện phiên bản SDR của chúng.

## Nhãn màn hình

Một nhãn ở bên trái chân trang cảnh báo khi màn hình không hiển thị chính xác được bản
vẽ hoặc bản mô phỏng. Chọn nhãn để mở phần chi tiết, rồi chọn lại hoặc nhấn **Escape**
để đóng phần chi tiết.

| Nhãn | Hiện khi |
| --- | --- |
| “Màu bị cắt ngưỡng” | Màn hình không hiển thị được một số màu nhìn thấy của bản vẽ hoặc bản mô phỏng. |
| “Có thể khác bản in” | Mô phỏng bản in hoặc cảnh báo ngoài dải màu đang bật, và Capy Canvas không xác định được cách màn hình hiển thị màu. |

Với bản vẽ HDR, nhãn còn cho biết màn hình có hiển thị HDR hay không (xem
[HDR](/vi/docs/color-management/hdr/)).

![Nhãn Màu bị cắt ngưỡng ở chân trang với phần chi tiết và Đánh dấu các màu này.](shot:color-management/screen-chip)

Bật **Đánh dấu các màu này** trong phần chi tiết để tô màu xanh lam lên các màu bị cắt
ngưỡng trên khung vẽ. Phần đánh dấu không bao giờ được lưu.

Theo mặc định, Phác thảo ẩn chân trang. Để hiện chân trang, chọn **Cửa sổ > Tùy chỉnh
thanh tiêu đề…** rồi bật **Hiện chân trang**.
