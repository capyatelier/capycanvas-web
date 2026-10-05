---
title: "Bản vẽ mới"
description: "Hộp thoại Bản vẽ mới và các lớp có sẵn khi bắt đầu một bản vẽ mới."
related: ["color-management/color-spaces", "layers/types", "files/open-save"]
---

Bạn có thể bắt đầu một bản vẽ trong hộp thoại **Bản vẽ mới**. Bản vẽ mới mở trong
thẻ riêng, và bản vẽ hiện tại vẫn mở.

## Mở hộp thoại Bản vẽ mới

Thực hiện một trong các cách sau:

- Chọn **Tệp > Mới…**.
- Nhấn **Ctrl+N** (không có trong trình chỉnh sửa web).
- Trong Vẽ và Ảnh, chọn **Mới…** trên Thanh lệnh.

Chọn các thiết lập bên dưới, rồi chọn **Tạo**.

Không dùng được **Mới…** khi đang mở thao tác cắt xén hoặc biến đổi. Nếu dữ liệu
bản vẽ đang mở đã quá nhiều, bản vẽ mới chỉ mở sau khi bạn đóng bớt một số bản vẽ.

## Thiết lập

![Hộp thoại Bản vẽ mới với thiết lập đặt sẵn Bản vẽ tiêu chuẩn.](shot:files/new-dialog)

### Thiết lập đặt sẵn

Điền mọi ô theo một thiết lập đặt sẵn có trong ứng dụng hoặc do bạn đã lưu. Nếu sau
đó bạn đổi một ô, **Thiết lập đặt sẵn** chuyển thành **Tùy chỉnh**.

Mọi thiết lập đặt sẵn có trong ứng dụng đều có kích thước 2048 × 1536 pixel trên
nền trắng.

| Thiết lập đặt sẵn | Không gian màu | Độ sâu bit | Hòa trộn |
| --- | --- | --- | --- |
| **Bản vẽ tiêu chuẩn** | sRGB | SDR 8 bit | Theo cảm nhận |
| **Dải màu rộng** | Display P3 | SDR 8 bit | Theo cảm nhận |
| **Chỉnh sửa ảnh** | ProPhoto RGB | SDR 16 bit | Theo cảm nhận |
| **Bản vẽ HDR** | sRGB | HDR số thực 16 bit | Ánh sáng tuyến tính |

### Xóa thiết lập đặt sẵn đã lưu

Xóa thiết lập đặt sẵn đã lưu đang được chọn. Không thể xóa các thiết lập đặt sẵn có
trong ứng dụng.

### Chiều rộng (px) và Chiều cao (px)

Từ 1 đến 8192 pixel. Các ô này nhận phép tính, ví dụ “160*2”.

### Không gian màu

**sRGB**, **Display P3**, **Adobe RGB (1998)** hoặc **ProPhoto RGB** (xem
[Không gian màu, độ sâu bit và hòa trộn](/vi/docs/color-management/color-spaces/)).
Với **ProPhoto RGB** và **SDR 8 bit**, hộp thoại khuyên dùng SDR 16 bit.

### Độ sâu bit

**SDR 8 bit**, **SDR 16 bit**, **HDR số thực 16 bit** hoặc **HDR số thực 32 bit**.
Độ sâu bit số thực tạo ra bản vẽ HDR.

### Hòa trộn

**Theo cảm nhận** hoặc **Ánh sáng tuyến tính**. Với độ sâu bit số thực, **Hòa trộn**
cố định ở **Ánh sáng tuyến tính**.

### Nền

**Trắng** hoặc **Trong suốt**. **Trong suốt** ẩn lớp **Giấy**.

### Tên thiết lập đặt sẵn

Lưu các thiết lập thành một thiết lập đặt sẵn với tên này khi bạn chọn **Tạo**. Tên
dài tối đa 64 ký tự, và bạn có thể giữ tối đa 64 thiết lập đặt sẵn.

### Dùng các thiết lập này cho bản vẽ mới

Khi bật, hộp thoại mở với các thiết lập này ở lần sau. Không gian màu, độ sâu bit
và nền cũng trở thành thiết lập **Bản vẽ mới** trong [Tùy chọn](/vi/docs/preferences/).

## Các lớp ban đầu

![Bảng Lớp của một bản vẽ mới, với Mực hiện tại nằm trên Giấy.](shot:files/new-layers)

Bản vẽ mới có hai lớp. **Mực hiện tại**, một lớp vẽ trống, đang được chọn và nằm
trên **Giấy**, một lớp tô màu trắng (xem [Các loại lớp](/vi/docs/layers/types/)).
Các lớp bạn thêm sau được đặt tên là “Lớp” kèm một số.

## Nền tảng khác

Trên iPad, macOS và Android, ô **Lưu thiết lập đặt sẵn…** và tùy chọn **Dùng mặc
định** thay cho **Tên thiết lập đặt sẵn** và **Dùng các thiết lập này cho bản vẽ
mới**. iPad và macOS không có nút **Xóa thiết lập đặt sẵn đã lưu**.

Trên Linux, **Lưu thiết lập đặt sẵn…** mở một hộp thoại riêng để nhập tên, và
**Không gian màu**, **Độ sâu bit** và **Hòa trộn** được nhóm dưới **Màu**.
