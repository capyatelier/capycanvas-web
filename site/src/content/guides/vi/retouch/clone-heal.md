---
title: "Sao chép và phục hồi"
description: "Công cụ Dấu sao chép, các cọ phục hồi và nguồn mà chúng sao chép."
related: ["retouch/dodge-burn", "layers/settings", "brushes/basics", "photo/retouch"]
---

Bạn có thể vẽ đè lên khuyết điểm bằng pixel sao chép từ chỗ khác trong ảnh.

| Công cụ | Chức năng |
| --- | --- |
| **Dấu sao chép** | Vẽ bằng pixel sao chép từ vùng tròn nguồn. |
| **Cọ phục hồi** | Vẽ như **Dấu sao chép**. Khi bạn nhấc bút, phần sao chép nhận màu và độ sáng quanh nét vẽ nhưng giữ nguyên kết cấu. |
| **Cọ phục hồi điểm** | Khi bạn nhấc bút, thay chỗ vừa vẽ đè bằng kết cấu từ vùng lân cận giống nhất, hòa vào xung quanh. |

## Chọn công cụ chỉnh sửa ảnh

Thực hiện một trong các cách sau:

- Nhấn **S**. Nhấn lại để chuyển sang **Cọ phục hồi**, rồi **Cọ phục hồi điểm**.
- Trong Ảnh, chọn **Dấu sao chép** hoặc **Cọ phục hồi điểm / Cọ phục hồi** trên Thanh công cụ vẽ.
- Trong Vẽ, chọn **Hòa màu / Dấu sao chép** trên Thanh công cụ vẽ. Nhấp chuột phải hoặc giữ nút để chọn **Dấu sao chép**.
- Trong Phác thảo, chọn **Tạo hình** trên thanh tiêu đề, chọn lại lần nữa để mở ngăn, rồi chọn **Sao chép**, **Phục hồi** hoặc **Phục hồi điểm**.
- Gõ tên công cụ vào [tìm lệnh](/vi/docs/start/command-search/).

**Cọ phục hồi** và **Cọ phục hồi điểm** không có nút trong Vẽ.

Mỗi công cụ là một cọ, có **Kích thước cọ**, **Độ đục**, **Lượng màu ra** và các
thiết lập **Đầu cọ** trong bảng Công cụ (xem
[Kích thước, độ đục và lượng màu ra](/vi/docs/brushes/basics/)).

![Bảng Công cụ của Dấu sao chép, với các thiết lập cọ và thiết lập nguồn.](shot:retouch/clone-tool-panel)

## Nguồn

**Nguồn** trong bảng Công cụ quyết định những gì các công cụ sao chép:

- **Lớp tham chiếu** (mặc định) sao chép lớp bạn đang vẽ cùng các lớp bên dưới được đánh dấu làm tham chiếu.
- **Lớp đang sửa** chỉ sao chép lớp bạn đang vẽ.

Với **Lớp tham chiếu**, bạn có thể chỉnh sửa ảnh trên một lớp trống đặt phía trên bức
ảnh. Đánh dấu ảnh bằng [Dùng làm tham chiếu](/vi/docs/layers/settings/), hoặc chọn
**Lớp > Thiết lập lớp > Dùng lớp bên dưới làm tham chiếu**. Nếu bạn vẽ trên lớp
trống mà bên dưới chưa có lớp tham chiếu nào được đánh dấu, thông báo sẽ đề xuất
**Dùng *tên* làm tham chiếu**.

Bạn không thể chỉnh sửa ảnh trực tiếp trên lớp đã đổi tỷ lệ hoặc đã xoay. Hãy chỉnh
sửa trên một lớp mới phía trên lớp đó.

## Đặt nguồn

**Dấu sao chép** và **Cọ phục hồi** sao chép từ vùng tròn nguồn, một vòng tròn nhỏ
có dấu chữ thập.

Thực hiện một trong các cách sau:

- Giữ **Alt** và nhấp vào chỗ bạn muốn sao chép.
- Chọn **Đặt nguồn**, rồi nhấp.

Khi chưa được đặt, nguồn nằm ở giữa khung nhìn. Kéo vùng tròn để di chuyển nguồn.
Ngón tay kéo được vùng tròn nhưng không bao giờ đặt được nguồn. Trong lúc bạn vẽ,
vùng tròn đi theo điểm đang được sao chép.

**Cọ phục hồi điểm** tự tìm nguồn và không có vùng tròn nguồn.

## Thiết lập nguồn

Các thiết lập này dành cho **Dấu sao chép** và **Cọ phục hồi**.

### Nguồn căn chỉnh

Giữ một độ lệch cố định giữa nguồn và cọ qua các nét vẽ. Khi tắt, mỗi nét vẽ bắt
đầu sao chép tại vùng tròn nguồn. Mặc định bật.

### Lật nguồn ngang và Lật nguồn dọc

Lật đối xứng các pixel sao chép quanh vùng tròn nguồn.

### Đặt lại độ lệch nguồn

Cho nét vẽ tiếp theo bắt đầu sao chép lại từ vùng tròn nguồn. Dùng được sau một
nét vẽ có căn chỉnh.

### Đặt nguồn

Lần nhấp tiếp theo sẽ đặt nguồn.

## Thanh khung vẽ của vùng tròn nguồn

Nhấp vào vùng tròn nguồn mà không kéo để hiện
[thanh khung vẽ](/vi/docs/selections/working/) bên cạnh, với **Căn chỉnh**,
**Nguồn**, hai nút lật, **Đặt lại độ lệch** và **Đặt nguồn**. Nhấp lại vào vùng
tròn, hoặc chọn công cụ khác, để ẩn thanh.

![Vùng tròn nguồn và thanh khung vẽ của nó.](shot:retouch/clone-source-bar)
