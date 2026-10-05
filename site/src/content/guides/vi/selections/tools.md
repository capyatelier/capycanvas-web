---
title: "Công cụ vùng chọn"
description: "Các công cụ vùng chọn và thiết lập của chúng trong bảng Công cụ."
related: ["selections/working", "selections/tonal-range", "selections/quick-mask", "customize/toolbars"]
---

Bạn có thể chọn một phần bản vẽ bằng các công cụ vùng chọn. Thiết lập của công cụ
nằm trong bảng Công cụ, và trong Ảnh còn nằm trên thanh Tùy chọn công cụ ở đầu cửa
sổ.

| Công cụ | Vùng được chọn | Phím |
| --- | --- | --- |
| **Chọn hình chữ nhật** | Hình chữ nhật bạn kéo | |
| **Chọn elip** | Hình elip bạn kéo | |
| **Chọn tự do** | Hình bạn vẽ tay | **M** |
| **Chọn đa giác** | Hình bạn nhấp từng góc một | |
| **Tự động chọn** | Vùng liền nhau có màu tương tự | **W** |
| **Chọn theo màu** | Mọi pixel có màu tương tự, liền nhau hay không | |
| **Vẽ vùng chọn** | Vùng bạn tô | |
| **Khoảng sắc độ** | Các pixel trong một dải độ sáng (xem [Chọn theo độ sáng](/vi/docs/selections/tonal-range/)) | |

## Chọn công cụ vùng chọn

Thực hiện một trong các cách sau:

- Gõ tên công cụ vào [tìm lệnh](/vi/docs/start/command-search/).
- Nhấn **M** để dùng **Chọn tự do** hoặc **W** để dùng **Tự động chọn**.
- Trong Vẽ, chọn **Chọn** hoặc **Tự động chọn / Chọn theo màu** trên Thanh công cụ vẽ.
- Trong Ảnh, chọn **Chọn hình chữ nhật / Chọn elip**, **Chọn tự do / Chọn đa giác**, **Tự động chọn / Chọn theo màu** hoặc **Vẽ vùng chọn** trên Thanh công cụ vẽ.
- Trong Phác thảo, chọn **Chọn** trên thanh tiêu đề. Chọn lần nữa để mở ngăn chứa mọi công cụ vùng chọn bên cạnh bảng Công cụ.

Nút trên thanh công cụ chứa nhiều công cụ sẽ hiện công cụ bạn dùng gần nhất. Để
chọn công cụ khác, nhấp chuột phải hoặc giữ nút, hoặc chọn công cụ trong bảng
**Bộ công cụ**. **Chọn** trên thanh tiêu đề của Phác thảo quay về công cụ vùng chọn
bạn dùng gần nhất.

**Khoảng sắc độ** không có nút trên thanh công cụ của Vẽ hay Ảnh.

Chọn một công cụ vùng chọn khi đang ở Mặt nạ nhanh, hoặc khi đang sửa lớp vùng chọn,
không thoát khỏi chế độ đó.

![Ngăn Chọn trong Phác thảo, với các công cụ vùng chọn bên cạnh bảng Công cụ của Chọn hình chữ nhật.](shot:selections/tools-sketch-select-drawer)

## Chế độ

Bạn có thể kết hợp vùng chọn tiếp theo với vùng chọn hiện tại.

Chọn **Vùng chọn mới**, **Thêm vào vùng chọn**, **Bớt khỏi vùng chọn** hoặc
**Giao với vùng chọn** ở hàng **Chế độ** của bảng Công cụ. Mặc định là
**Vùng chọn mới**.

Để đổi chế độ cho một lần chọn, giữ một phím khi bắt đầu chọn:

- **Shift**: **Thêm vào vùng chọn**
- **Alt**: **Bớt khỏi vùng chọn**
- **Shift+Alt**: **Giao với vùng chọn**
- **Ctrl**: **Vùng chọn mới**

Trong lúc bạn giữ phím, hàng **Chế độ** hiện chế độ tương ứng. **Vẽ vùng chọn**
chỉ có **Thêm vào vùng chọn** và **Bớt khỏi vùng chọn**.

## Khử răng cưa và Bán kính làm mềm biên

**Khử răng cưa** bật theo mặc định. **Bán kính làm mềm biên** làm mềm biên của mỗi
vùng chọn mới, tối đa 100 px, giá trị ban đầu là 0.

**Vẽ vùng chọn** không có thiết lập nào trong hai thiết lập này. **Khoảng sắc độ**
có **Làm mềm biên** nhưng không có **Khử răng cưa**.

## Chọn hình chữ nhật và Chọn elip

Kéo từ một góc đến góc đối diện. Sau khi bắt đầu kéo, giữ **Shift** để có hình
vuông hoặc hình tròn, hoặc **Alt** để vẽ từ tâm.

- **Tỷ lệ cố định** giữ vùng chọn theo tỷ lệ đặt ở **Tỷ lệ chiều rộng** và **Tỷ lệ chiều cao**, mặc định là 1 : 1.
- **Kích thước cố định** tạo vùng chọn có **Chiều rộng** và **Chiều cao** bạn đặt, tính bằng pixel. Mặc định là 256 × 256.
- **Vẽ từ tâm** đặt tâm vùng chọn tại chỗ bạn bắt đầu kéo.

Bật **Tỷ lệ cố định** sẽ tắt **Kích thước cố định**, và ngược lại. Nhấp mà không
kéo thì vùng chọn giữ nguyên.

## Chọn tự do

Vẽ bao quanh vùng cần chọn. Khi bạn nhấc bút hoặc thả nút chuột, hình khép kín trở
thành vùng chọn.

## Chọn đa giác

Nhấp vào từng góc của hình. Để hoàn tất, thực hiện một trong các cách sau:

- Nhấp lại vào góc đầu tiên.
- Nhấn **Enter**.
- Chọn **Hoàn tất** trên thanh khung vẽ, hoặc **Hoàn tất vùng chọn** trong bảng Công cụ.

Đa giác cần ít nhất ba góc.

- Để bỏ góc cuối cùng, nhấn **Backspace** hoặc **Xóa**, hoặc chọn **Xóa điểm** trên thanh khung vẽ hay **Xóa điểm cuối** trong bảng Công cụ.
- Để hủy đa giác, nhấn **Escape**, hoặc chọn **Hủy** trên thanh khung vẽ hay **Hủy vùng chọn** trong bảng Công cụ.
- Để cạnh tiếp theo bắt theo từng bước 45°, giữ **Shift**. Để mọi cạnh đều bắt theo 45°, bật **Giới hạn cạnh theo góc 45°** trong bảng Công cụ.

Trong lúc bạn đặt các góc, [thanh khung vẽ](/vi/docs/selections/working/) ở cuối
khung vẽ hiện **Xóa điểm**, **Hủy** và **Hoàn tất**.

![Thanh khung vẽ khi vẽ đa giác, với Xóa điểm, Hủy và Hoàn tất.](shot:selections/tools-polygon-bar)

## Tự động chọn và Chọn theo màu

Nhấp vào một màu trên khung vẽ. **Tự động chọn** lấy vùng liền nhau quanh điểm đó,
còn **Chọn theo màu** lấy các pixel có màu khớp ở bất kỳ đâu trong ảnh.

![Bảng Công cụ của Tự động chọn, với Chế độ, Khử răng cưa, Nguồn, Dung sai, các thiết lập Cạnh và Bán kính làm mềm biên.](shot:selections/tools-auto-select-settings)

### Nguồn

Đặt nơi công cụ tìm màu: **Bản vẽ hiển thị** (mặc định), **Lớp đang sửa**, hoặc
**Lớp tham chiếu**, tức các lớp được đánh dấu bằng
[Dùng làm tham chiếu](/vi/docs/layers/settings/).

### Dung sai

Đặt mức chênh lệch tối đa giữa một màu và màu bạn nhấp để màu đó vẫn được chọn.
Mặc định là 10%.

### Khép khe hở

Khép các khe hở có độ rộng đến giá trị này trên các đường biên quanh vùng, từ 0 đến
32 px. Chỉ có ở **Tự động chọn**.

### Độ mở rộng

Mở rộng vùng chọn tối đa 32 px, hoặc thu hẹp vùng chọn khi đặt giá trị âm.

### Làm mịn biên

Làm mềm biên răng cưa của vùng chọn. Ở 0%, biên đi theo nguyên từng pixel. Bị ẩn khi
**Khử răng cưa** đang tắt.

**Tự động chọn** và **Chọn theo màu** dùng chung một thiết lập **Nguồn**, đồng thời
dùng chung **Dung sai** và các thiết lập **Cạnh** với các [công cụ tô màu](/vi/docs/drawing/fill/).

## Vẽ vùng chọn

Tô lên vùng cần chọn bằng một cọ tròn. Vòng khép kín bạn tô sẽ được lấp đầy.

- **Thêm vào vùng chọn** hoặc **Bớt khỏi vùng chọn** đặt tác dụng của cọ.
- **Lực nhấn điều khiển kích thước** tắt theo mặc định.
- **Kích thước**, **Độ cứng** và **Độ đục** thiết lập cọ tròn.

Giữ **Shift** khi tô để thêm, hoặc **Alt** để làm ngược với thiết lập hiện tại. Đầu
tẩy của bút sẽ bớt khỏi vùng chọn. Nét bớt không có tác dụng khi chưa có vùng chọn.

## Nút Chọn

**Chọn** bên dưới thiết lập của công cụ vùng chọn trong bảng Công cụ mở
[trình đơn Chọn](/vi/docs/selections/working/). Thiết lập của **Khoảng sắc độ**
không có nút **Chọn**.
