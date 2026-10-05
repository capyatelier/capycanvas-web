---
title: "Ống hút màu"
description: "Lấy màu vẽ từ khung vẽ bằng Ống hút màu, cùng các tùy chọn Kiểu, Nguồn và Kích thước mẫu."
related: ["color/color-panel", "color/edit-color", "input/touch", "input/keyboard"]
---

Bạn có thể lấy một màu từ khung vẽ để vẽ bằng màu đó. Sau khi lấy màu, công cụ bạn
đang dùng trở lại.

## Bật Ống hút màu

Thực hiện một trong các cách sau:

- Nhấn **I** (**O** trong sơ đồ phím Kiểu GIMP).
- Chọn **Ống hút màu** trong tìm lệnh.
- Trong Vẽ và Ảnh, chọn **Ống hút màu** trên Thanh công cụ vẽ.
- Trong Phác thảo, chọn **Bộ chọn màu** trên thanh ở cạnh trái, giữa thanh trượt kích thước và thanh trượt độ đục.

Để dừng mà không lấy màu, nhấn **I** hoặc chọn lại cùng nút đó, nhấn **Escape**, hoặc
chọn công cụ hay cọ khác. Chạm ngón tay mà không giữ cũng dừng Ống hút màu.

## Lấy màu

Di chuyển trên khung vẽ để xem trước màu trong bảng Màu. Màu vẽ chỉ thay đổi khi bạn
lấy màu.

| Thiết bị | Xem trước | Lấy màu |
| --- | --- | --- |
| Chuột | Rê chuột | Nhấp |
| Bút | Rê bút, hoặc nhấn bút xuống | Nhấc bút |
| Ngón tay | Chạm | Nhấc ngón tay |

Với ngón tay, điểm lấy mẫu nằm phía trên đầu ngón tay.

Pixel trong suốt không lấy được màu nào, và màu lấy được luôn đục. Màu được lấy trong
không gian màu của bản vẽ. Trong bản vẽ HDR, màu lấy được có thể sáng hơn màu trắng
SDR. Khi bạn đang sửa mặt nạ, màu lấy được trở thành màu mặt nạ.

## Lấy màu trong lúc vẽ

Giữ **Alt** khi đang chọn cọ, Hòa màu, Biến dạng, Tô đầy hoặc Chuyển màu. Mỗi cú nhấp
lấy một màu. Thả **Alt** để trở lại công cụ.

Sơ đồ phím Kiểu Krita và Kiểu GIMP dùng **Ctrl** thay vào đó. Trên trang
[Phím tắt](/vi/docs/input/keyboard/), phím tắt này là **Lấy mẫu màu khi giữ**. Bạn
cũng có thể gán một nút bút cho Ống hút màu trên trang **Bút và nhập liệu**
([Bút](/vi/docs/input/pen/)).

## Giữ ngón tay

Giữ yên một ngón tay trên khung vẽ để bắt đầu lấy màu với bất kỳ công cụ nào. Nhấc
ngón tay để lấy màu và trở lại công cụ.

- Thao tác giữ mất nửa giây trên web và trên iPad. Android, Windows và Linux dùng thời gian nhấn giữ của hệ thống.
- Di chuyển ngón tay trước khi bộ lấy màu bắt đầu sẽ hủy thao tác giữ.
- Thao tác giữ chỉ hoạt động khi có đúng một ngón tay trên khung vẽ và không có thao tác nào khác đang diễn ra.
- Trong lúc giữ, chạm bằng ngón tay thứ hai để chuyển **Nguồn** giữa **Màu hiển thị** và **Lớp đã chọn**.

## Kiểu

Chọn **Kiểu** trên thanh Tùy chọn công cụ trong lúc lấy màu (ở đầu cửa sổ trong Ảnh):

- **Bộ chọn màu** hiện một kính lúp tròn. Nửa trên của vòng hiện màu lấy mẫu, nửa dưới hiện màu hiện tại.
- **Ống hút màu** hiện con trỏ hình ống hút với đầu ống đặt tại điểm lấy mẫu.

![Kính lúp Bộ chọn màu trên một nét vẽ màu đỏ, với màu lấy mẫu và màu hiện tại trên vòng.](shot:color/eyedropper-loupe)

Thao tác chạm luôn dùng kính lúp. Chọn **Bộ chọn màu** trong Phác thảo sẽ đặt
**Kiểu** thành **Bộ chọn màu**. Một dấu nhỏ hình các lớp xuất hiện khi **Nguồn** là
**Lớp đã chọn**.

## Nguồn và Kích thước mẫu

Đặt các thiết lập này trong bảng Công cụ hoặc trên thanh Tùy chọn công cụ trong lúc
lấy màu. Trong Phác thảo, nhấp đúp hoặc chạm đúp vào **Bộ chọn màu** để mở các thiết
lập này.

![Bảng Công cụ trong lúc lấy màu, với Nguồn và Kích thước mẫu.](shot:color/eyedropper-settings)

### Nguồn

**Màu hiển thị** (mặc định) lấy mẫu bản vẽ đúng như bạn thấy, còn **Lớp đã chọn** lấy
màu vẽ riêng của lớp đang chọn, trước khi áp dụng độ đục, mặt nạ và cắt lớp.
**Lớp đã chọn** chỉ có với lớp vẽ chưa khóa.

### Kích thước mẫu

**Một pixel** (mặc định), **Hình tròn 5 px**, **Hình tròn 15 px**,
**Hình tròn 51 px** hoặc **Hình tròn 101 px**. Hình tròn lấy trung bình các pixel nằm
bên trong.
