---
title: "Xuất ảnh"
description: "Xuất một bản sao ảnh gộp phẳng của bản vẽ bằng hộp thoại Xuất ảnh và Xuất lại."
related: ["files/open-save", "color-management/hdr", "color-management/color-spaces"]
---

Bạn có thể xuất một bản sao ảnh gộp phẳng của bản vẽ. Việc xuất không thay đổi bản
vẽ `.capy` và không được tính là lưu.

## Xuất ảnh

Thực hiện một trong các cách sau:

- Chọn **Tệp > Xuất…**.
- Nhấn **Ctrl+Shift+E**.

Hộp thoại **Xuất ảnh** mở với đích **Web / Chia sẻ**. Chọn **Chọn tệp…** rồi chọn
vị trí lưu. Tên đề xuất là tên bản vẽ kèm phần mở rộng của định dạng, ví dụ
“Chưa đặt tên.png”. Trong Firefox và Safari, hộp thoại **Tải tệp xuống** mở ra thay
vào đó (xem [Mở và lưu](/vi/docs/files/open-save/)).

Tên tệp phải kết thúc bằng phần mở rộng của định dạng. Không dùng được **Xuất…** khi
đang mở thao tác cắt xén hoặc biến đổi.

## Thiết lập

![Hộp thoại Xuất ảnh với Đích đặt là Web / Chia sẻ.](shot:files/export-dialog)

Một số thiết lập chỉ xuất hiện với một số định dạng.

### Đích

Đặt mọi thiết lập còn lại cùng lúc. Các thiết lập xuất đặt sẵn đã lưu nằm sau các
đích có sẵn này:

- **Web / Chia sẻ**: ảnh PNG sRGB 8 bit ở kích thước gốc.
- **Ảnh dải màu rộng**: như trên nhưng ở Display P3.
- **Chỉnh sửa tiếp**: ảnh TIFF 16 bit trong không gian màu của bản vẽ.
- **Tùy chỉnh**: bắt đầu giống **Web / Chia sẻ**.

### Dải động

**SDR** với bản vẽ SDR, hoặc một trong các định dạng HDR với bản vẽ HDR (xem phần
Xuất HDR bên dưới).

### Cắt ngưỡng màu HDR ngoài phạm vi

Cắt các màu vượt quá phạm vi của HDR PNG, HDR JPEG và HDR AVIF. Thiết lập này chỉ
xuất hiện với các định dạng đó.

### Định dạng

**Ảnh PNG**, **Ảnh TIFF**, **Ảnh JPEG** hoặc **WebP · không mất dữ liệu** (xem phần
Giới hạn định dạng bên dưới).

### Hồ sơ màu đầu ra

**sRGB**, **Display P3**, **Adobe RGB (1998)** hoặc **ProPhoto RGB**, cùng
“Gốc: *tên*” cho mỗi lớp ảnh có hồ sơ màu nhúng riêng.

### Độ sâu bit

**8 bit** hoặc **16 bit**.

### Độ trong suốt

**Giữ nguyên**, **Nền trắng** hoặc **Nền đen**.

### Mục đích kết xuất màu

**Đo màu tương đối** (mặc định), **Theo cảm nhận**, **Độ bão hòa** hoặc
**Đo màu tuyệt đối**.

### Phân tán điểm màu

**Không** hoặc **Ngẫu nhiên (đầu ra 8 bit)**.

### Chất lượng

Chất lượng nén từ 1 đến 100, mặc định là 90. Thiết lập này xuất hiện với JPEG, HDR
JPEG và HDR AVIF.

### Kích thước pixel

**Kích thước gốc** hoặc **Vừa trong giới hạn**. **Vừa trong giới hạn** thêm
**Chiều rộng tối đa (px)** và **Chiều cao tối đa (px)**, rồi thu nhỏ ảnh cho vừa bên
trong mà không đổi tỷ lệ.

### Siêu dữ liệu độ phân giải

**Giữ nguyên gốc**, **Pixel mỗi inch** hoặc **Bỏ qua**. **Pixel mỗi inch** thêm một
ô nhập từ 1 đến 65535, mặc định là 300.

### Siêu dữ liệu

**Tất cả**, **Bản quyền và liên hệ** hoặc **Không**. Với **Tất cả**, **Xóa vị trí**
bật theo mặc định. Các hàng này chỉ xuất hiện với bản vẽ mở từ ảnh có thông tin máy
ảnh hoặc bản quyền.

### Nhập hồ sơ màu ICC… và Hồ sơ màu đã lưu…

**Nhập hồ sơ màu ICC…** thêm một tệp `.icc` hoặc `.icm` có dung lượng tối đa 16 MiB
vào **Hồ sơ màu đầu ra**. **Hồ sơ màu đã lưu…** mở **Thư viện hồ sơ màu**.

### Tên thiết lập đặt sẵn và các nút thiết lập đặt sẵn

**Lưu thiết lập đặt sẵn** lưu các thiết lập thành một đích mới với tên trong
**Tên thiết lập đặt sẵn**. **Cập nhật thiết lập đặt sẵn** và **Xóa thiết lập đặt
sẵn** thay đổi hoặc xóa thiết lập đặt sẵn đã lưu đang được chọn. **Đặt lại đích**
khôi phục thiết lập của một đích có sẵn.

### Xem trước đầu ra

Hiện ảnh xuất ra bên cạnh bản vẽ, với chú thích **Bản vẽ** và **Đầu ra**, kèm cảnh
báo nếu có màu nằm ngoài dải màu đầu ra. Đổi bất kỳ thiết lập nào sẽ xóa bản xem
trước.

### Chọn tệp…

Hỏi nơi lưu ảnh.

## Giới hạn định dạng

- JPEG và WebP chỉ có 8 bit.
- JPEG không giữ được độ trong suốt.
- WebP cho phép tối đa 16384 pixel mỗi cạnh.
- Với hồ sơ màu đầu ra thang xám, không dùng được WebP.
- Với hồ sơ màu đầu ra CMYK, chỉ dùng được TIFF và JPEG, không có độ trong suốt.

Các lựa chọn không phù hợp với những thiết lập khác bị làm mờ.

## Thiết lập xuất đặt sẵn

Sau mỗi lần xuất, đích có sẵn giữ lại các thiết lập bạn đã dùng. Khi bạn xuất bằng
một thiết lập đặt sẵn đã lưu, các thiết lập được giữ trong **Tùy chỉnh**, còn bản
thân thiết lập đặt sẵn chỉ thay đổi bằng **Cập nhật thiết lập đặt sẵn**.

Tên thiết lập đặt sẵn dài tối đa 80 ký tự, và bạn có thể giữ tối đa 64 thiết lập đặt
sẵn. Thiết lập đặt sẵn áp dụng cho mọi bản vẽ.

## Xuất HDR

![Hộp thoại Xuất ảnh cho bản vẽ HDR với HDR JPEG · bản đồ độ tăng, sau khi chọn Xem trước đầu ra.](shot:files/export-hdr-preview)

Với bản vẽ số thực 16 bit hoặc 32 bit, **Dải động** có các lựa chọn sau:

| Lựa chọn | Ghi ra |
| --- | --- |
| **Bản chuyển sắc SDR** | Phiên bản SDR của bản vẽ, với các thiết lập SDR |
| **HDR JPEG · bản đồ độ tăng** | Tệp `.jpg` có bản đồ độ tăng |
| **HDR AVIF · bản đồ độ tăng có trong suốt** | Tệp `.avif` có bản đồ độ tăng và độ trong suốt |
| **HDR PNG · BT.2020 PQ** | Tệp `.png` mã hóa BT.2020 PQ, có độ trong suốt |
| **OpenEXR · số thực 32 bit** | Tệp `.exr` trong không gian màu của bản vẽ, có độ trong suốt |

**Bản chuyển sắc SDR** dùng phiên bản SDR đã đặt bằng
[Mô phỏng SDR](/vi/docs/color-management/hdr/). OpenEXR không giữ thông tin máy ảnh
và bản quyền. Với bản vẽ HDR, **Chỉnh sửa tiếp** có tên **Chỉnh sửa tiếp (SDR)** và
dùng OpenEXR.

Với HDR JPEG và HDR AVIF, **Xem trước đầu ra** thêm **Xem trước bản chuyển sắc**,
gồm **Tái tạo HDR · xem trước SDR** và **Ảnh nền SDR mã hóa**.

Nếu bản xem trước phát hiện màu vượt quá phạm vi của HDR PNG, JPEG hoặc AVIF,
**Chọn tệp…** không dùng được cho đến khi bạn bật **Cắt ngưỡng màu HDR ngoài phạm
vi** hoặc chọn OpenEXR.

## Xuất lại

**Tệp > Xuất lại** lặp lại lần xuất gần nhất của bản vẽ với cùng thiết lập và cùng
tệp, không mở hộp thoại. Lệnh này không dùng được cho đến khi bạn xuất bản vẽ một
lần.

Mỗi bản vẽ giữ riêng lần xuất gần nhất, kể cả sau khi khởi động lại. Trong Firefox
và Safari, **Xuất lại** hiện hộp thoại **Tải tệp xuống**.

## Nền tảng khác

Trên Linux, các thiết lập được chia thành các trang **Kích thước**, **Màu và độ
trong suốt** và **Thiết lập đặt sẵn**, và một số nhãn khác đi. Hộp thoại trên iPad
và macOS cũng dùng nhãn riêng.
