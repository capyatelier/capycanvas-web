---
title: "Không gian màu, độ sâu bit và hòa trộn"
description: "Chọn không gian màu, độ sâu bit và Hòa trộn của bản vẽ, và thay đổi chúng sau đó từ trình đơn Ảnh."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Bạn có thể chọn không gian màu, độ sâu bit và Hòa trộn của bản vẽ khi tạo bản vẽ, và
thay đổi chúng sau đó từ trình đơn **Ảnh**.

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
**Hòa trộn** trong **Màu**. Một thiết lập từ **Thiết lập đặt sẵn** đặt chúng cùng với
tờ giấy và Giấy. Hộp thoại giữ các lựa chọn của bản vẽ gần nhất bạn đã tạo.

Ở độ sâu số thực, **Hòa trộn** cố định ở Ánh sáng tuyến tính.

![Hộp thoại Bản vẽ mới với Không gian màu đặt là Display P3, Độ sâu bit và Hòa trộn trong Màu.](shot:color-management/new-dialog-color)

## Mặc định trong Tùy chọn

Chọn **Chỉnh sửa > Tùy chọn** rồi mở trang **Màu**:

- Trong **Mở ảnh**, đặt **Độ chính xác khi chỉnh sửa** (**Độ sâu nguồn** hoặc **16 bit**) và **RGB và thang xám không có hồ sơ màu** (**Coi là sRGB** hoặc **Hỏi**). Với **Hỏi**, mở ảnh không có hồ sơ màu sẽ hiện **Chọn cách diễn giải ảnh**. Ảnh có hồ sơ màu giữ hồ sơ màu nhúng của chúng.
- Chọn **Quản lý hồ sơ màu…** để mở [Thư viện hồ sơ màu](/vi/docs/color-management/proof/).

## Gán hồ sơ màu

Chọn **Ảnh > Quản lý màu > Gán hồ sơ màu…** để giữ nguyên các số RGB của bản vẽ và đọc chúng
trong một không gian làm việc khác. Chọn không gian trong **Không gian màu**, nơi
Adobe RGB (1998) được ghi là **Adobe RGB**. Lớp Đối tượng giữ hồ sơ màu nguồn của
[ảnh gốc](/vi/docs/layers/types/).

## Chuyển không gian màu

Chọn **Ảnh > Quản lý màu > Chuyển không gian màu…** để thay đổi các số RGB sao cho màu giữ
nguyên vẻ ngoài trong một không gian làm việc khác, trong phạm vi dải màu của không
gian đó.

Với **Lưu bản sao gộp phẳng**, **Áp dụng** trở thành **Tạo bản sao**. Bản sao mở ra dưới dạng bản vẽ mới với một lớp, có cùng kích thước và độ sâu bit. Chọn **Tệp > Lưu** để lưu dưới dạng tệp `.capy`.

![Hộp thoại Chuyển không gian màu với phần so sánh Trước và Sau và thông báo về dải màu.](shot:color-management/convert-dialog)

### Không gian màu

Không gian làm việc cần chuyển sang. Ban đầu, không gian hiện tại được chọn.

### Kết quả

**Lớp có thể chỉnh sửa** (mặc định) chuyển đổi mọi lớp tại chỗ. **Lưu bản sao gộp phẳng** mở một bản sao được làm phẳng, đã được chuyển đổi dưới dạng bản vẽ mới và giữ nguyên bản gốc.

### Mục đích kết xuất màu

**Đo màu tương đối** (mặc định), **Theo cảm nhận**, **Độ bão hòa** hoặc
**Đo màu tuyệt đối**. Bù điểm đen luôn tắt.

## Đổi độ sâu bit

Chọn **Ảnh > Quản lý màu > Đổi độ sâu bit…** để thay đổi độ chính xác lưu trữ. Không gian màu
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

1. Đặt các trường trong hộp thoại.
2. So sánh **Trước** và **Sau** khi bản xem trước xuất hiện.
3. Chọn **Áp dụng** (hoặc **Tạo bản sao**).

**Áp dụng** không khả dụng cho đến khi bản xem trước sẵn sàng. Thay đổi một trường sẽ cập nhật phần so sánh. Dòng trạng thái thông báo các màu bị cắt.

Áp dụng là một bước hoàn tác. Hoàn tác và Làm lại mở **Hoàn tác đổi màu** và
**Làm lại đổi màu**. Các hộp thoại này áp dụng thay đổi mà không cần nhập thêm và chỉ
có **Hủy**.

## Hòa trộn

Bạn có thể kết hợp các lớp trên giá trị mã hóa của bản vẽ hoặc trong ánh sáng tuyến
tính. Thực hiện một trong các cách sau:

- Chọn **Ảnh > Hòa trộn > Hòa trộn theo cảm nhận** hoặc **Ảnh > Hòa trộn > Hòa trộn ánh sáng tuyến tính**.
- Đặt **Hòa trộn** thành **Theo cảm nhận** hoặc **Ánh sáng tuyến tính** trong hộp thoại Bản vẽ mới.

![Trình đơn con Hòa trộn với Hòa trộn theo cảm nhận được đánh dấu.](shot:color-management/edit-blending-menu)

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
