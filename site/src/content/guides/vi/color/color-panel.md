---
title: "Bảng màu hiện tại"
description: "Chọn màu vẽ bằng vòng màu và các ô màu của bảng Màu."
related: ["color/edit-color", "color/palettes", "color/eyedropper", "color-management/hdr"]
---

Bạn có thể chọn màu vẽ trong bảng **Màu**. Mọi không gian làm việc dùng chung một màu
vẽ.

![Bảng Màu với vòng màu tròn, chỉ số màu ở góc trên bên trái và các ô màu bên dưới vòng màu.](shot:color/panel "1 Chỉ số màu · 2 Nút hình dạng · 3 Sửa màu · 4 Màu trước và màu nền · 5 Đổi chỗ · 6 Màu vẽ trong suốt · 7 Đen và trắng")

## Mở bảng Màu

Thực hiện một trong các cách sau:

- Chọn **Cửa sổ > Màu**.
- Chọn **Bảng màu hiện tại** trong tìm lệnh.
- Trong Vẽ, chọn thẻ **Màu** ở cột trái.
- Chọn **Màu cọ** ở cuối Thanh công cụ vẽ, hoặc ở đầu bên phải thanh tiêu đề trong Phác thảo. Một ngăn mở ra với các bảng Màu và Bảng màu.

## Vòng màu

Kéo vòng ngoài để đặt sắc màu, và kéo vùng màu bên trong để đặt độ bão hòa
và độ sáng.

Ở dạng hình tròn, kéo vượt ra ngoài mép vùng màu gần góc trên bên trái, góc trên bên
phải hoặc phía dưới để bắt dính vào màu trắng, màu thuần hoặc màu đen. Màu xám giữ
sắc màu bạn đặt gần nhất trên vòng.

## Hình dạng vùng màu

Chọn một trong hai nút nhỏ bên ngoài vòng, ở góc trên bên phải, để đổi hình dạng vùng
màu. Chú giải của các nút ghi **Dùng hình tròn Okhsv**, **Dùng hình vuông HSV** và
**Dùng tam giác HLS**.

| Hình dạng | Vùng màu | Chỉ số màu |
| --- | --- | --- |
| Hình tròn (mặc định) | Okhsv. Màu trắng ở góc trên bên trái, màu thuần ở góc trên bên phải, màu đen ở phía dưới. | OKLCH |
| Hình vuông | HSV. Độ bão hòa tăng sang phải và độ sáng tăng lên trên. | HSB |
| Tam giác | HLS. Các góc là màu trắng, màu đen và sắc màu thuần. | HLS |

## Chỉ số màu

Các con số ở góc trên bên trái của bảng hiện màu theo mô hình màu của hình dạng vùng
màu. Chọn chỉ số màu để chuyển qua lại giữa mô hình đó và RGB từ 0 đến 255.

## Màu trước và màu nền

Chọn **Màu trước** (ô màu lớn ở góc dưới bên trái) hoặc **Màu nền** (ô màu phía sau
nó) để vẽ bằng màu đó. Tìm lệnh có cùng các tên này. Ô màu đang chọn có viền dày hơn.

Cọ lông kéo màu bạn không dùng để vẽ thành vệt trong mỗi nét vẽ.

> **Lưu ý:** Trong [Mặt nạ nhanh](/vi/docs/selections/quick-mask/) và trên [lớp vùng chọn](/vi/docs/selections/selection-layers/), các ô màu giữ một cặp màu riêng, ban đầu là đen và trắng, và màu vẽ dùng giá trị xám của màu. Màu của bản vẽ trở lại khi bạn thoát ra. Trên mặt nạ lớp, màu không quan trọng: cọ làm hiện ra, còn Tẩy làm ẩn đi.

## Màu vẽ trong suốt

Bạn có thể tẩy bằng bất kỳ cọ hoặc hình nào của công cụ Hình bằng cách vẽ với màu vẽ
trong suốt. Thực hiện một trong các cách sau:

- Chọn **Màu vẽ trong suốt** (ô màu ca rô ở góc dưới bên phải).
- Chọn **Màu vẽ trong suốt** trong tìm lệnh.
- Gán phím cho **Vẽ trong suốt** trên trang [Phím tắt](/vi/docs/input/keyboard/), rồi nhấn phím đó để bật hoặc tắt màu vẽ trong suốt. **Vẽ trong suốt khi giữ** chỉ dùng màu vẽ trong suốt khi bạn giữ phím.

Kéo trên vòng màu sẽ chuyển lại về vẽ bằng màu.

## Đổi chỗ màu

Bạn có thể hoán đổi màu trước và màu nền. Thực hiện một trong các cách sau:

- Chọn **Đổi chỗ màu trước và màu nền** (hai mũi tên bên phải ô màu nền).
- Chọn **Đổi chỗ màu trước và màu nền** trong tìm lệnh.
- Nhấn **X** trong các sơ đồ phím Kiểu Photoshop, Kiểu Krita, Kiểu Clip Studio Paint và Kiểu GIMP, hoặc **Shift+X** trong Kiểu Affinity.

Ô màu đang chọn không thay đổi. Sơ đồ phím {appName} không có phím cho **Đổi chỗ màu**.

## Đen và trắng

Chọn **Vẽ bằng màu đen** hoặc **Vẽ bằng màu trắng** (hai hình tròn nhỏ cạnh ô màu
trong suốt), hoặc chọn **Đen** hoặc **Trắng** trong tìm lệnh.

Màu đen hoặc trắng thay thế màu của ô màu trước hoặc ô màu nền đang chọn. Nếu
**Màu vẽ trong suốt** đang được chọn, màu đen hoặc trắng trở thành màu vẽ tạm thời.
Khi đó vòng màu sửa màu tạm thời, còn màu trước và màu nền không thay đổi.

## Sửa màu

Chọn **Sửa màu…** (hình bút chì ở góc trên bên phải của bảng), hoặc nhấp đúp vào ô màu
trước hoặc ô màu nền, để đặt màu theo các con số trong [Sửa màu](/vi/docs/color/edit-color/).
Không dùng được **Sửa màu…** khi **Màu vẽ trong suốt** đang được chọn.

## Trình đơn ô màu

Trên Windows, Linux và Android, nhấp chuột phải hoặc giữ ô màu trước hoặc ô màu nền để
có **Sửa màu…**, **Bảng màu…** và **Đổi chỗ màu trước và màu nền**.

## Cường độ HDR

Trong [bản vẽ HDR](/vi/docs/color-management/hdr/), một cung tròn dưới vòng màu đặt
cường độ của màu vẽ theo stop (EV) so với màu trắng SDR, từ −2 đến +6 EV. Giá trị hiện
bên dưới các ô màu, ví dụ “+2.00 EV”.

![Bảng Màu trong bản vẽ HDR với cung cường độ dưới vòng màu.](shot:color/panel-hdr)

- Kéo dọc cung tròn để đặt cường độ.
- Nhấp đúp vào cung tròn để trở về 0 EV.
- Khi cung tròn đang được chọn, nhấn các phím mũi tên để thay đổi theo bước 0.1 EV, hoặc **Home** để về 0 EV.

Vòng màu đặt màu gốc, còn cường độ nhân màu đó trong ánh sáng tuyến tính. Các ô màu
và cung tròn xem trước màu qua phiên bản SDR của bản vẽ. Không dùng được cung tròn khi
**Màu vẽ trong suốt** đang được chọn.
