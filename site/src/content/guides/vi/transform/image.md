---
title: "Kích thước và góc xoay ảnh"
description: "Các lệnh trong Chỉnh sửa > Ảnh để thay đổi kích thước và hướng của toàn bộ ảnh."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Bạn có thể đổi kích thước, xoay và lật toàn bộ ảnh từ **Chỉnh sửa > Ảnh**. Ảnh giữ
nguyên vị trí trên màn hình.

Các lệnh này không dùng được khi đang mở thao tác cắt xén hoặc biến đổi, và khi bạn
đang sửa mặt nạ, Mặt nạ nhanh hoặc lớp vùng chọn. Về **Cắt xén** và
**Cắt khung vẽ theo vùng chọn**, xem [Cắt xén](/vi/docs/transform/crop/).

![Trình đơn con Ảnh của trình đơn Chỉnh sửa.](shot:transform/image-menu)

## Kích thước ảnh…

Bạn có thể đổi tỷ lệ toàn bộ ảnh, hoặc chỉ thay đổi độ phân giải.

Chọn **Chỉnh sửa > Ảnh > Kích thước ảnh…**. Lớp vẽ và mặt nạ được lấy mẫu lại, còn
ảnh đã đặt giữ pixel gốc. Vùng chọn, đường hướng dẫn và các thiết lập bộ lọc tính
bằng pixel đổi tỷ lệ theo ảnh.

![Hộp thoại Kích thước ảnh.](shot:transform/image-size-dialog)

### Chiều rộng và Chiều cao

Đặt kích thước mới theo **Pixel** hoặc **Phần trăm**. Khi đổi đơn vị, các giá trị
được quy đổi theo.

### Giữ tỷ lệ

Liên kết **Chiều rộng** và **Chiều cao**. Mặc định bật.

### Độ phân giải

Đặt độ phân giải theo pixel trên inch. Nếu bạn chỉ thay đổi độ phân giải, pixel giữ
nguyên. Ô này ban đầu là độ phân giải của bản vẽ, hoặc 72 ppi nếu bản vẽ không có độ
phân giải.

### Lấy mẫu lại

**Tự động** (mặc định) dùng Lanczos khi ảnh nhỏ đi và Song bậc ba khi ảnh lớn lên.
Bạn cũng có thể chọn **Song bậc ba**, **Lanczos**, **Song tuyến tính** hoặc
**Lân cận gần nhất**.

## Kích thước khung vẽ…

Bạn có thể thêm hoặc bớt khung vẽ quanh ảnh mà không lấy mẫu lại.

Chọn **Chỉnh sửa > Ảnh > Kích thước khung vẽ…**. Pixel nằm ngoài khung vẽ nhỏ hơn
vẫn ở trên lớp của chúng ở trạng thái ẩn, và khung vẽ lớn hơn sẽ hiện lại các pixel
đó.

![Hộp thoại Kích thước khung vẽ.](shot:transform/canvas-size-dialog)

### Chiều rộng và Chiều cao

Đặt kích thước mới theo **Pixel** hoặc **Phần trăm**. Khi đổi đơn vị, các giá trị
được quy đổi theo.

### Tương đối

Cộng các giá trị bạn nhập vào kích thước hiện tại. Mặc định tắt.

### Điểm neo

Chọn cạnh hoặc góc của ảnh được giữ nguyên vị trí, từ một lưới 3 × 3. Mặc định là
**Giữa**.

## Xoay và lật ảnh

Chọn một trong các lệnh sau từ **Chỉnh sửa > Ảnh**:

- **Xoay ảnh 90° sang trái**
- **Xoay ảnh 90° sang phải**
- **Xoay ảnh 180°**
- **Lật ảnh ngang**
- **Lật ảnh dọc**

Toàn bộ ảnh xoay hoặc lật cùng vùng chọn và đường hướng dẫn. Pixel không bị lấy mẫu
lại. Để chỉ xoay hoặc lật khung nhìn, xem [Xem khung vẽ](/vi/docs/start/canvas/).

## Xén biên

Chọn **Chỉnh sửa > Ảnh > Xén biên** để thu khung vẽ theo các pixel hiển thị. Pixel
nằm ngoài khung vẽ mới vẫn ở trên lớp của chúng ở trạng thái ẩn.

## Hiện tất cả

Chọn **Chỉnh sửa > Ảnh > Hiện tất cả** để mở rộng khung vẽ cho đến khi hiện pixel
của mọi lớp, kể cả lớp ẩn và pixel nằm ngoài khung vẽ.
