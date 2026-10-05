---
title: "Sửa màu"
description: "Đặt màu theo các con số, mã hex hoặc văn bản màu trong hộp thoại Sửa màu."
related: ["color/color-panel", "color/palettes", "color/eyedropper"]
---

Bạn có thể đặt màu theo các con số trong hộp thoại **Sửa màu**. Không có gì thay đổi
cho đến khi bạn chọn **Dùng màu**.

![Hộp thoại Sửa màu với vòng màu ở bên trái, Hiện tại và Mới cùng mã hex ở góc trên bên phải, ba hàng giá trị, và các màu gần đây ở chân hộp thoại.](shot:color/edit-color "1 Vòng màu và hình dạng · 2 Hiện tại và Mới · 3 Lấy từ khung vẽ · 4 Hex · 5 Hàng giá trị · 6 Màu gần đây")

## Mở Sửa màu

Thực hiện một trong các cách sau:

- Chọn **Sửa màu…** (hình bút chì) ở góc trên bên phải của [Bảng màu hiện tại](/vi/docs/color/color-panel/).
- Nhấp đúp vào ô màu trước hoặc ô màu nền trong bảng Màu.
- Chọn một nút màu trong Thuộc tính, ví dụ **Màu** của lớp tô Màu đồng nhất hoặc **Màu phủ** của Đen trắng.
- Chọn hình thu nhỏ của lớp tô Màu đồng nhất trong bảng Lớp.
- Chọn **Màu** của một điểm màu trong trình chỉnh chuyển màu.
- Chọn **Màu cọ** trong bảng có hiện nút này. Bạn có thể thêm nút này vào bảng Cọ và bảng Kích thước cọ ([Bảng và cột](/vi/docs/customize/panels/)).
- Trên Windows, Linux và Android, nhấp chuột phải hoặc giữ ô màu trước hoặc ô màu nền rồi chọn **Sửa màu…**.

## Vòng màu và hình dạng

Vòng màu hoạt động như trong bảng Màu. Chọn **OKLCH**, **HSB** hoặc **HLS** bên dưới
vòng màu để chuyển vùng màu sang hình tròn, hình vuông hoặc tam giác.

## Hiện tại và Mới

**Mới** hiện màu bạn đang tạo. Chọn **Hiện tại** để đưa **Mới** về màu ban đầu.

## Hex

Ô hex hiện màu Mới dưới dạng `#RRGGBB` trong sRGB. Chọn ô này để gõ mã hex hoặc
[văn bản màu](#dán-màu) khác.

Một nhãn nhỏ bên trái mã hex đánh dấu các trường hợp sau:

- “≈”: màu nằm ngoài sRGB, và mã hex hiện màu sRGB gần nhất.
- “Gốc”: trong bản vẽ HDR, mã hex hiện màu trước khi áp dụng cường độ.
- “sRGB”: không gian màu của bản vẽ không phải sRGB.

## Hàng giá trị

Mỗi hàng hiện màu Mới theo một định dạng. Chọn tên định dạng ở đầu hàng để chọn định
dạng khác. Hộp thoại ghi nhớ các định dạng bạn chọn.

| Hàng | Định dạng |
| --- | --- |
| 1 | **RGB** (0–255, mặc định), **RGB 0–1**, **RGB tuyến tính** (0–1). Các giá trị nằm trong không gian màu của bản vẽ, được ghi trên nhãn nhỏ ở hàng. |
| 2 | **HSB** (mặc định), **HSL** |
| 3 | **OKLCH** (mặc định), **OKLab** |

![Các hàng giá trị với trình đơn định dạng của hàng đầu tiên đang mở.](shot:color/edit-color-formats)

## Sửa giá trị

- Chọn một giá trị để gõ số. Nhấn **Enter** để xác nhận hoặc **Escape** để hủy.
- Kéo một giá trị lên hoặc xuống để thay đổi. Giữ **Shift** để thay đổi theo bước lớn hơn, hoặc **Alt** hay **Ctrl** để thay đổi theo bước nhỏ hơn.
- Nhấn **Up Arrow** hoặc **Down Arrow** trên một giá trị để thay đổi một bước.

Giá trị vượt quá phạm vi của ô được đặt thành giới hạn gần nhất. Sắc màu quay vòng ở
360°. Nếu bạn gõ văn bản không phải số cũng không phải màu, ô vẫn mở kèm thông báo
lỗi. Không dùng được **Dùng màu** cho đến khi bạn sửa giá trị hoặc nhấn **Escape**.

## Sao chép màu

Chọn nút sao chép ở cuối ô hex hoặc cuối một hàng để sao chép giá trị đó dưới dạng văn
bản. Dấu kiểm trên nút xác nhận đã sao chép. Nhấn **Ctrl+C** trong hộp thoại, bên ngoài
ô văn bản, để sao chép mã hex.

| Định dạng | Văn bản sao chép trong bản vẽ sRGB | Trong không gian màu khác |
| --- | --- | --- |
| Hex | `#RRGGBB` | `#RRGGBB` |
| RGB | `rgb(R G B)` | `color(display-p3 r g b)`, `color(a98-rgb r g b)` hoặc `color(prophoto-rgb r g b)`, từ 0 đến 1 |
| RGB 0–1 | `color(srgb r g b)` | như RGB |
| RGB tuyến tính | `color(srgb-linear r g b)` | `r g b` |
| HSB, HSL | `hsb(h s% b%)`, `hsl(h s% l%)` | `h° s% b%`, `h° s% l%` |
| OKLCH, OKLab | `oklch(L% C h)`, `oklab(L% a b)` | như nhau |

## Dán màu

Nhấn **Ctrl+V** trong hộp thoại, bên ngoài ô văn bản, để đặt màu Mới từ văn bản màu.
Ô hex và các ô giá trị nhận cùng loại văn bản:

- mã hex có 3, 4, 6 hoặc 8 chữ số, có `#`, `0x` hoặc không có (các chữ số alpha bị bỏ qua);
- tên màu CSS, ví dụ `teal`;
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsb()`, `hsv()`, `oklch()` và `oklab()`;
- `color()` với `srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb` hoặc `srgb-linear`;
- ba con số. Hàng giá trị đọc chúng theo định dạng của hàng đó. Ở chỗ khác, chúng là RGB từ 0 đến 255, hoặc RGB từ 0 đến 1 khi cả ba số đều nhỏ hơn hoặc bằng 1 và có một số có dấu thập phân.

Văn bản màu không bao giờ thay đổi alpha của màu.

## Lấy từ khung vẽ

Chọn **Lấy từ khung vẽ** (ống hút màu cạnh Hiện tại và Mới) để lấy mẫu màu Mới từ bản
vẽ. Hộp thoại ẩn đi, và một dải ở góc khung vẽ hiện màu Hiện tại, màu lấy mẫu và các
giá trị của màu đó.

Nhấp, hoặc nhấc bút hay ngón tay, để lấy màu. Hộp thoại trở lại với màu vừa lấy làm màu
Mới. Nhấn **Escape** hoặc chọn dải đó để quay lại mà không thay đổi.

Với ngón tay, điểm lấy mẫu nằm phía trên đầu ngón tay. **Lấy từ khung vẽ** bị ẩn khi
Sửa màu được mở từ một hộp thoại khác.

## Màu gần đây và bảng màu

Chân hộp thoại hiện các màu gần đây của bạn. Chọn một màu để đặt làm màu Mới.

Chọn **Màu gần đây và mọi bảng màu** (mũi tên sau các màu gần đây) để mở một trang gồm
các màu gần đây và mọi [bảng màu](/vi/docs/color/palettes/). Gõ vào ô tìm kiếm để tìm
tên bảng màu, tên màu hoặc mã hex. Dấu **+** ở cuối một bảng màu lưu màu Mới vào bảng
màu đó. Để đóng trang này, chọn **Đóng bảng màu** hoặc nhấn **Escape**.

![Trang ô màu với ô tìm kiếm, Màu gần đây và các bảng màu.](shot:color/edit-color-swatches)

## Cường độ HDR

Trong [bản vẽ HDR](/vi/docs/color-management/hdr/), hàng **Cường độ (EV)** và cung
tròn dưới vòng màu đặt độ sáng theo stop so với màu trắng SDR. Trên cung tròn, và khi
bạn kéo giá trị, phạm vi là −2 đến +6 EV. Giá trị gõ vào có thể vượt xa hơn, trong
phạm vi độ sâu bit của bản vẽ.

## Dùng màu và Hủy

Chọn **Dùng màu** để áp dụng màu Mới. Chọn **Hủy** hoặc nhấn **Escape** để đóng mà
không thay đổi. Nếu trình đơn định dạng hoặc trang ô màu đang mở, **Escape** đóng
chúng trước.
