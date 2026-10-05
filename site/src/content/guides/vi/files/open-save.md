---
title: "Mở và lưu"
description: "Mở bản vẽ và ảnh, lưu tệp .capy, và làm việc với nhiều bản vẽ đang mở."
related: ["files/new", "files/export", "transform/move-transform", "start/undo"]
---

Các lệnh trên trang này nằm trong trình đơn **Tệp**. Trong Phác thảo, mở trình đơn
này từ **Trình đơn chính** trên thanh tiêu đề.

![Trình đơn Tệp.](shot:files/file-menu)

## Mở bản vẽ hoặc ảnh

Bạn có thể mở bản vẽ `.capy` và ảnh ở định dạng OpenEXR, TIFF, PNG, WebP, BMP,
JPEG, GIF, HEIF và AVIF. Mỗi tệp mở trong thẻ riêng.

Thực hiện một trong các cách sau:

- Chọn **Tệp > Mở…**. Bạn có thể chọn nhiều tệp, trừ trên Linux.
- Nhấn **Ctrl+O**.
- Trong Vẽ và Ảnh, chọn **Mở…** trên Thanh lệnh.
- Trong trình chỉnh sửa web hoặc trên Linux, kéo tệp vào tên bản vẽ hoặc vào các thẻ trên thanh tiêu đề.
- Nếu bạn đã cài trình chỉnh sửa web thành ứng dụng, mở tệp `.capy`, `.png`, `.jpg`, `.tif`, `.avif` hoặc `.exr` bằng Capy Canvas từ hệ thống.

## Ảnh

Ảnh mở thành một bản vẽ mới có một lớp ảnh mang tên tệp, nằm trên một lớp
**Giấy**. Ảnh giữ hồ sơ màu và, theo mặc định, giữ độ sâu bit của nó. Lưu bản vẽ sẽ
tạo một tệp `.capy` và không bao giờ ghi đè lên ảnh.

- Ảnh GIF hoặc WebP động chỉ mở khung hình đầu tiên.
- Mỗi cạnh của ảnh có thể dài tối đa 32768 pixel.
- Ảnh CMYK chỉ mở được khi có nhúng hồ sơ màu.
- Không mở được ảnh HEIF và AVIF HDR.

Khi **RGB và thang xám không có hồ sơ màu** được đặt là **Hỏi** trong
[Tùy chọn](/vi/docs/preferences/), ảnh không có hồ sơ màu sẽ mở hộp thoại
**Chọn cách diễn giải ảnh**.

## Nhập ảnh thành lớp

Bạn có thể thêm ảnh vào bản vẽ hiện tại thành các lớp mới.

Thực hiện một trong các cách sau:

- Chọn **Tệp > Nhập ảnh thành lớp…**.
- Nhấn **Ctrl+Shift+O**.
- Kéo ảnh vào khung vẽ, hoặc vào một hàng của bảng **Lớp**.

Mỗi ảnh trở thành một lớp mang tên tệp, nằm trên lớp đang chọn, kèm
[các tay nắm biến đổi](/vi/docs/transform/move-transform/) để đặt vị trí. Ảnh lớn
hơn khung vẽ được thu nhỏ cho vừa.

Không thể nhập tệp `.capy`. Trong trình chỉnh sửa web, mỗi ảnh có dung lượng tối đa
512 MiB.

## Lưu

Bạn có thể lưu bản vẽ cùng toàn bộ các lớp thành tệp `.capy`.

Thực hiện một trong các cách sau:

- Chọn **Tệp > Lưu**.
- Nhấn **Ctrl+S**.
- Trong Vẽ và Ảnh, chọn **Lưu** trên Thanh lệnh.

Lần lưu đầu tiên hỏi vị trí lưu, các lần lưu sau ghi vào cùng tệp đó. Sau khi lưu,
thẻ hiện tên tệp không có dấu ●.

Trong Firefox và Safari, bản vẽ chỉ được tính là đã lưu sau khi bạn chọn
**Tải xuống** rồi chọn **Đã lưu tệp** trong hộp thoại **Tải tệp xuống**.

![Hộp thoại Tải tệp xuống với Hủy, Tải xuống và Đã lưu tệp.](shot:files/download-file)

**Tệp > Lưu thành…** (**Ctrl+Shift+S**) luôn hỏi vị trí lưu, và các lần lưu sau ghi
vào tệp mới. **Lưu** cũng hỏi vị trí nếu tệp trên ổ đĩa đã thay đổi kể từ khi bạn mở
hoặc lưu.

Không dùng được **Lưu** khi đang mở thao tác cắt xén hoặc biến đổi.

## Những gì tệp .capy lưu giữ

Tệp `.capy` lưu mọi lớp cùng mặt nạ và thiết lập của lớp, các bộ lọc, vùng chọn đã
lưu và đường hướng dẫn, không gian màu, độ sâu bit và hòa trộn, cùng dữ liệu
EXIF, XMP và IPTC của ảnh. Tệp không lưu lịch sử hoàn tác, khung nhìn và vùng chọn
đang hoạt động.

## Bản vẽ chỉ xem

Tệp `.capy` mà Capy Canvas không chỉnh sửa được, ví dụ tệp bị hỏng, sẽ mở trong một
hộp thoại thay vì một thẻ. **Copy Original File…** lưu một bản sao của tệp, còn
**Export Preview Image…** lưu ảnh xem trước của bản vẽ thành PNG.

## Thẻ bản vẽ

![Ba thẻ bản vẽ trên thanh tiêu đề, một thẻ được đánh dấu là chưa lưu.](shot:files/drawing-tabs)

Thanh tiêu đề hiện một thẻ cho mỗi bản vẽ đang mở. Khi chỉ mở một bản vẽ, thanh tiêu
đề hiện tên và kích thước bản vẽ đó.

Chọn một thẻ để chuyển sang bản vẽ của thẻ đó, hoặc dùng các phím sau:

| Để | Trình chỉnh sửa web | Linux |
| --- | --- | --- |
| Hiện bản vẽ trước | **Alt+Page Up** | **Ctrl+Page Up** hoặc **Ctrl+Shift+Tab** |
| Hiện bản vẽ tiếp theo | **Alt+Page Down** | **Ctrl+Page Down** hoặc **Ctrl+Tab** |
| Mở danh sách Bản vẽ | **Ctrl+Alt+D** | **Ctrl+Shift+A** |

Trong trình chỉnh sửa web, kéo một thẻ sang ngang để sắp xếp lại các thẻ.

Dấu ● trước tên cho biết có thay đổi chưa lưu. Khi thanh tiêu đề hẹp, các thẻ gộp
thành một nút mở danh sách Bản vẽ.

Mỗi thẻ giữ riêng lịch sử hoàn tác, khung nhìn và vùng chọn. Thẻ không thuộc về
không gian làm việc.

## Bản vẽ…

![Danh sách Bản vẽ với ba bản vẽ.](shot:files/drawings-list)

Bạn có thể xem mọi bản vẽ đang mở trong một danh sách.

Thực hiện một trong các cách sau:

- Chọn **Tệp > Bản vẽ…** hoặc **Cửa sổ > Bản vẽ…**.
- Trong trình chỉnh sửa web, nhấp chuột phải vào một thẻ.

Chọn một hàng để chuyển sang bản vẽ đó, kéo tay cầm ở bên trái hàng để sắp xếp lại,
hoặc chọn **×** để đóng bản vẽ. Thứ tự thẻ có riêng **Hoàn tác thứ tự thẻ** và
**Làm lại thứ tự thẻ** ở cuối danh sách.

## Đóng bản vẽ

Thực hiện một trong các cách sau:

- Chọn **Tệp > Đóng**.
- Nhấn **Ctrl+W**. Trong trình chỉnh sửa web, nhấn **Ctrl+Alt+W**.
- Chọn **×** trên thẻ của bản vẽ.

Nếu bản vẽ có thay đổi chưa lưu, một hộp thoại hỏi “Lưu thay đổi của “*tên*”?” với
**Hủy**, **Bỏ thay đổi** và **Lưu**.

Khi bạn đóng bản vẽ cuối cùng, trình chỉnh sửa web mở một bản vẽ trống mới. Trên
Linux, cửa sổ đóng lại.

## Mở lại sau khi khởi động lại

Mọi bản vẽ đang mở, dù đã lưu hay chưa, đều mở lại vào lần tới bạn khởi động Capy
Canvas, kèm lịch sử hoàn tác, khung nhìn, vùng chọn và lần xuất gần nhất của từng
bản vẽ. Thoát Capy Canvas không hỏi bạn có muốn lưu không.

Trong trình chỉnh sửa web, xóa dữ liệu trang web sẽ xóa các bản vẽ chưa lưu.

Sau khi Capy Canvas đóng bất ngờ, các bản vẽ được mở lại hiện “(đã khôi phục)” sau
tên cho đến khi bạn lưu.

## Cửa sổ mới

Trên Windows, macOS, Linux và iPad, **Tệp > Cửa sổ mới** (**Ctrl+Shift+N**) mở một
cửa sổ khác với các bản vẽ riêng.
