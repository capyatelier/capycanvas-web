---
title: "Không gian màu, độ sâu bit và hòa trộn"
description: "Chọn không gian màu, độ sâu bit và Hòa trộn của bản vẽ, và thay đổi chúng sau đó từ trình đơn Chỉnh sửa."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Bạn có thể chọn không gian màu, độ sâu bit và Hòa trộn của bản vẽ khi tạo bản vẽ, và
thay đổi chúng sau đó từ trình đơn **Chỉnh sửa**.

## Các không gian màu

Không gian màu làm việc của bản vẽ là **sRGB**, **Display P3**,
**Adobe RGB (1998)** hoặc **ProPhoto RGB**. ProPhoto RGB dùng điểm trắng D50, ba không
gian còn lại dùng D65.

Hồ sơ màu ICC không thể làm không gian làm việc. Bạn có thể dùng chúng để
[mô phỏng bản in](/vi/docs/color-management/proof/) và [xuất ảnh](/vi/docs/files/export/).

## Các độ sâu bit

Độ sâu bit của bản vẽ là **SDR 8 bit**, **SDR 16 bit**, **HDR số thực 16 bit** hoặc
**HDR số thực 32 bit**. Độ sâu số thực biến bản vẽ thành
[bản vẽ HDR](/vi/docs/color-management/hdr/), được lưu dưới dạng RGB tuyến tính, trong
đó 1.0 là màu trắng SDR ở 203 cd/m².

## Chọn cho bản vẽ mới

Chọn **Tệp > Mới…** (**Ctrl+N**) rồi đặt **Không gian màu**, **Độ sâu bit** và
**Hòa trộn**, hoặc chọn một **Thiết lập đặt sẵn**:

| Thiết lập đặt sẵn | Không gian màu | Độ sâu bit | Hòa trộn |
| --- | --- | --- | --- |
| **Bản vẽ tiêu chuẩn** | sRGB | SDR 8 bit | Theo cảm nhận |
| **Dải màu rộng** | Display P3 | SDR 8 bit | Theo cảm nhận |
| **Chỉnh sửa ảnh** | ProPhoto RGB | SDR 16 bit | Theo cảm nhận |
| **Bản vẽ HDR** | sRGB | HDR số thực 16 bit | Ánh sáng tuyến tính |

Ở độ sâu số thực, **Hòa trộn** cố định ở Ánh sáng tuyến tính. Bật **Dùng các thiết
lập này cho bản vẽ mới** để biến các lựa chọn này, kể cả Hòa trộn, thành mặc định cho
bản vẽ mới.

![Hộp thoại Bản vẽ mới với Không gian màu đặt là Display P3, Độ sâu bit, Hòa trộn và dòng tóm tắt.](shot:color-management/new-dialog-color)

## Mặc định trong Tùy chọn

Chọn **Chỉnh sửa > Tùy chọn** rồi mở trang **Màu**:

- Trong **Bản vẽ mới**, đặt **Không gian màu**, **Độ sâu bit** và **Nền** cho các bản vẽ sau này. Các bản vẽ đang mở không thay đổi.
- Trong **Mở ảnh**, đặt **Độ chính xác khi chỉnh sửa** (**Độ sâu nguồn** hoặc **16 bit**) và **RGB và thang xám không có hồ sơ màu** (**Coi là sRGB** hoặc **Hỏi**). Với **Hỏi**, mở ảnh không có hồ sơ màu sẽ hiện **Chọn cách diễn giải ảnh**. Ảnh có hồ sơ màu giữ hồ sơ màu nhúng của chúng.
- Chọn **Quản lý hồ sơ màu…** để mở [Thư viện hồ sơ màu](/vi/docs/color-management/proof/).

Tùy chọn không có thiết lập Hòa trộn.

## Gán hồ sơ màu

Chọn **Chỉnh sửa > Gán hồ sơ màu…** để giữ nguyên các số RGB của bản vẽ và đọc chúng
trong một không gian làm việc khác. Chọn không gian trong **Không gian màu**, nơi
Adobe RGB (1998) được ghi là **Adobe RGB**. Lớp ảnh giữ hồ sơ màu nguồn của
[ảnh gốc](/vi/docs/layers/types/).

## Chuyển không gian màu

Chọn **Chỉnh sửa > Chuyển không gian màu…** để thay đổi các số RGB sao cho màu giữ
nguyên vẻ ngoài trong một không gian làm việc khác, trong phạm vi dải màu của không
gian đó.

Với **Lưu bản sao gộp phẳng**, **Áp dụng** trở thành **Lưu bản sao…**. Bản sao có một
lớp, cùng kích thước và độ sâu bit. Tên tệp phải kết thúc bằng `.capy` và không được
trùng với tệp của bản vẽ đang mở.

![Hộp thoại Chuyển không gian màu với phần so sánh Trước và Sau và thông báo về dải màu.](shot:color-management/convert-dialog)

### Không gian màu

Không gian làm việc cần chuyển sang. Ban đầu, không gian hiện tại được chọn.

### Kết quả

**Lớp có thể chỉnh sửa** (mặc định) chuyển đổi trực tiếp mọi lớp. **Lưu bản sao gộp
phẳng** lưu một bản sao đã chuyển đổi và gộp phẳng thành tệp `.capy` mới và giữ nguyên
bản vẽ đang mở.

### Mục đích kết xuất màu

**Đo màu tương đối** (mặc định), **Theo cảm nhận**, **Độ bão hòa** hoặc
**Đo màu tuyệt đối**. Bù điểm đen luôn tắt.

## Đổi độ sâu bit

Chọn **Chỉnh sửa > Đổi độ sâu bit…** để thay đổi độ chính xác lưu trữ. Không gian màu
không thay đổi.

Đổi sang độ sâu số thực sẽ biến bản vẽ thành HDR và đặt Hòa trộn thành Ánh sáng tuyến
tính trong cùng một bước. Đổi về độ sâu số nguyên vẫn giữ Ánh sáng tuyến tính cho đến
khi bạn đổi [Hòa trộn](#hòa-trộn). Giảm độ sâu có thể cắt ngưỡng màu.

### Độ sâu bit

Độ sâu bit mới. Ban đầu, độ sâu hiện tại được chọn.

### Phân tán điểm màu

**Không** (mặc định) hoặc **Ngẫu nhiên (8 bit)**. Phân tán điểm màu chỉ áp dụng khi
đích là SDR 8 bit.

## Xem trước và áp dụng

Để áp dụng Gán hồ sơ màu, Chuyển không gian màu hoặc Đổi độ sâu bit:

1. Đặt các ô trong hộp thoại.
2. Chọn **Xem trước toàn bộ kết quả**.
3. So sánh **Trước** và **Sau**.
4. Chọn **Áp dụng** (hoặc **Lưu bản sao…**).

**Áp dụng** không dùng được cho đến khi bản xem trước sẵn sàng, và đổi một ô sẽ hủy
bản xem trước. Nếu có màu bị cắt ngưỡng, dòng trạng thái ghi “Một số màu vượt dải màu
đích. So sánh kết quả trước khi áp dụng.”

Áp dụng là một bước hoàn tác. Hoàn tác và Làm lại mở **Hoàn tác đổi màu** và
**Làm lại đổi màu**. Các hộp thoại này áp dụng thay đổi mà không cần nhập thêm và chỉ
có **Hủy**.

## Hòa trộn

Bạn có thể kết hợp các lớp trên giá trị mã hóa của bản vẽ hoặc trong ánh sáng tuyến
tính. Thực hiện một trong các cách sau:

- Chọn **Chỉnh sửa > Hòa trộn > Hòa trộn theo cảm nhận** hoặc **Chỉnh sửa > Hòa trộn > Hòa trộn ánh sáng tuyến tính**.
- Đặt **Hòa trộn** thành **Theo cảm nhận** hoặc **Ánh sáng tuyến tính** trong hộp thoại Bản vẽ mới.

![Trình đơn Chỉnh sửa với trình đơn con Hòa trộn đang mở và Hòa trộn theo cảm nhận được đánh dấu.](shot:color-management/edit-blending-menu)

Pixel đã vẽ giữ nguyên giá trị. Hòa trộn thay đổi:

- cách các lớp kết hợp với nhau;
- cách cọ khô phủ màu lên màu vẽ có sẵn;
- Làm mờ Gaussian, Tăng nét bằng mặt nạ, Thông cao, Làm mịn giữ biên và Lấy nét mềm (Làm mờ chuyển động, Tối góc và Quầng sáng luôn hoạt động trong ánh sáng tuyến tính);
- màu xám trung tính của **Lớp làm sáng và làm tối mới**;
- [Tách tần số…](/vi/docs/retouch/dodge-burn/), lệnh này cần Theo cảm nhận.

Đổi Hòa trộn là một bước hoàn tác. Bản vẽ HDR luôn dùng Ánh sáng tuyến tính, và cả hai
mục trình đơn đều không dùng được. Bản vẽ mới và ảnh mở từ tệp ảnh bắt đầu với Theo
cảm nhận. Ảnh mở ở độ sâu số thực và tệp `.capy` lưu trước khi có Hòa trộn dùng Ánh
sáng tuyến tính.

## Thuộc tính tài liệu

Chọn **Tệp > Thuộc tính tài liệu…** để xem **Kích thước khung vẽ**,
**Không gian màu làm việc**, **Độ sâu bit**, **Hòa trộn** và **Siêu dữ liệu độ phân
giải** của bản vẽ. Bản vẽ HDR có thêm **Màu trắng tham chiếu HDR**. Mỗi ảnh gốc trong
bản vẽ thêm một hàng ghi hồ sơ màu nguồn của ảnh đó. Bạn không thể thay đổi gì trong
hộp thoại này.
