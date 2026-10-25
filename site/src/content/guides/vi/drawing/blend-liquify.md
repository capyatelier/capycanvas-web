---
title: "Hòa màu và Biến dạng"
description: "Các công cụ Hòa màu và Biến dạng để miết màu vẽ và di chuyển pixel trên một lớp."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

Bạn có thể miết và trộn màu vẽ trên một lớp bằng **Hòa màu**, và di chuyển pixel của
lớp bằng **Biến dạng**.

## Hòa màu

Thực hiện một trong các cách sau:

- Nhấn **J**.
- Trong Vẽ, chọn **Hòa màu** trên Thanh công cụ vẽ. Cùng nút này chứa **Dấu sao chép**.
- Trong Ảnh, chọn **Hòa màu** trên Thanh công cụ vẽ.
- Trong Phác thảo, chọn một cọ hòa màu trong ngăn **Tạo hình**.
- Tìm lệnh **Hòa màu**.

Chọn một nhóm và một cọ hòa màu trong **Bộ công cụ**. **Miết màu** là cọ hòa màu mặc định.

| Nhóm | Cọ hòa màu |
| --- | --- |
| **Hòa màu** | **Miết màu**, **Hòa màu mềm**, **Làm mờ**, **Bút di chì**, **Khăn giấy**, **Hòa màu sần**, **Hòa màu giữ chất liệu**, **Hòa màu sắc độ** |
| **Sơn ướt** | **Cọ hòa màu tự nhiên**, **Hòa màu ướt**, **Trộn màu**, **Dao hòa màu**, **Hòa màu sợi cọ** |
| **Hiệu ứng** | **Hòa màu kiểu tranh**, **Hòa màu chải**, **Hòa màu rải**, **Làm sắc nét**, **Vân cẩm thạch**, **Hòa màu tinh thể**, **Hòa màu điểm ảnh** |

Thiết lập của từng cọ hòa màu nằm trong
[Trộn màu, loang và lông cọ](/vi/docs/brushes/wet-media/).

### Hòa màu sợi cọ

**Hòa màu sợi cọ** kéo sơn thành vệt. Đầu bên trái của mẫu này không được trộn lẫn.

![Hòa màu sợi cọ vệt sơn bóng mờ ở bên phải.](shot:examples/bristle-blender)

### Hòa màu điểm ảnh

**Hòa màu điểm ảnh** trộn các dải thành một mẫu hòa sắc.

![Hòa màu điểm ảnh trộn các dải bóng mờ ở bên phải.](shot:examples/dither-blender)

### Vân cẩm thạch

**Vân cẩm thạch** cuộn sơn thành những vòng xoáy.

![Vân cẩm thạch uốn các dải bóng mờ ở bên phải.](shot:examples/marbling)

## Biến dạng

Thực hiện một trong các cách sau:

- Nhấn **J** khi Hòa màu đang hoạt động.
- Trong Vẽ hoặc Ảnh, chọn **Biến dạng** trên Thanh công cụ vẽ. Nhấp chuột phải hoặc giữ nút để chọn một chế độ.
- Trong Phác thảo, chọn một chế độ trong nhóm **Biến dạng** của ngăn **Tạo hình**.
- Tìm lệnh **Biến dạng**.

Mỗi chế độ là một cọ đặt sẵn trong **Bộ công cụ**:

| Cọ đặt sẵn | Tác dụng |
| --- | --- |
| **Biến dạng đẩy** | Kéo pixel theo nét vẽ. |
| **Biến dạng xoáy ngược chiều kim đồng hồ** | Xoay pixel ngược chiều kim đồng hồ quanh tâm cọ. |
| **Biến dạng xoáy thuận chiều kim đồng hồ** | Xoay pixel thuận chiều kim đồng hồ quanh tâm cọ. |
| **Biến dạng bóp** | Kéo pixel vào phía tâm cọ. |
| **Biến dạng phồng** | Đẩy pixel ra xa tâm cọ. |
| **Biến dạng tinh thể** | Làm vỡ ảnh dưới cọ thành các ô nhỏ rải rác. |
| **Cạnh** | Kéo pixel về phía đường nét vẽ từ cả hai phía. |
| **Khôi phục** | Lấy lại độ biến dạng do Biến dạng tạo ra dưới cọ. |

Biến dạng không có nút Áp dụng. Mỗi nét vẽ thay đổi lớp và là một bước hoàn tác riêng.
Các nét tiếp tục làm biến dạng các pixel mà lớp có trước nét đầu tiên, cho đến khi bạn
vẽ lên, tô, áp dụng bộ lọc, biến đổi hoặc dán vào lớp.

### Cạnh

**Cạnh** kéo sơn về phía nét vẽ. Các dải bên trái thể hiện màu sơn nguyên bản.

![Cạnh kéo các dải màu về phía nét ngang ở bên phải.](shot:examples/liquify-edge)

### Khôi phục

**Khôi phục** khôi phục lớp sơn gốc dưới cọ. Ở đây nó khôi phục nửa bên phải của các dải bị biến dạng.

![Các dải bị biến dạng ở bên trái và lớp sơn được khôi phục bằng Khôi phục ở bên phải.](shot:examples/liquify-reconstruct)

## Điều chỉnh hóa lỏng và Đặt lại hóa lỏng

Bạn có thể giảm bớt toàn bộ những gì Biến dạng đã làm với một lớp bằng **Điều chỉnh hóa lỏng**,
hoặc đưa lớp về các pixel trước nét đầu tiên bằng **Đặt lại hóa lỏng**.

Thực hiện một trong các cách sau:

- Trong bảng **Công cụ**, bật **Điều chỉnh hóa lỏng** hoặc chọn **Đặt lại hóa lỏng**.
- Tìm lệnh **Điều chỉnh hóa lỏng** hoặc **Đặt lại hóa lỏng**.

Khi **Điều chỉnh hóa lỏng** bật, thanh trượt **Mức độ** xuất hiện trong bảng **Công cụ**.
Ở 100%, độ biến dạng giữ nguyên, còn ở 0% độ biến dạng mất hết. Thả thanh trượt là một
bước hoàn tác, và **Đặt lại hóa lỏng** cũng vậy.

Cả hai lệnh đều không dùng được, kèm thông báo “Áp dụng hóa lỏng cho lớp này trước”,
cho đến khi lớp có thay đổi từ Biến dạng.

## Thiết lập Biến dạng

![Bảng Công cụ cho Biến dạng tinh thể với Độ mạnh, nhóm Biến dạng hiện Độ méo và Quán tính, cùng Điều chỉnh hóa lỏng và Đặt lại hóa lỏng.](shot:drawing/liquify-settings)

**Độ méo** và **Quán tính** nằm trong nhóm **Biến dạng** của bảng **Công cụ**.

### Độ mạnh

Đặt khoảng cách mỗi dấu cọ di chuyển pixel. Hiệu ứng yếu hơn khi lực nhấn bút nhẹ và
ở phần gần mép của đầu cọ mềm.

### Độ méo

Làm chuyển động không đều. Ở **Biến dạng tinh thể**, nó đặt mức các ô rải ra. **Khôi phục** không có **Độ méo**.

### Quán tính

Tiếp tục hiệu ứng theo hướng cuối cùng của nét vẽ sau khi bạn nhấc bút. **Khôi phục**
không có **Quán tính**.

## Ngăn Tạo hình trong Phác thảo

Trong Phác thảo, chọn **Tạo hình** trên thanh tiêu đề để dùng công cụ Hòa màu, Biến
dạng hoặc Sửa ảnh gần nhất, chọn lại để mở ngăn của nó, và chọn thêm lần nữa để đóng
ngăn. Ngăn liệt kê các nhóm, các công cụ của nhóm đã chọn và thiết lập của chúng.
**Tạo hình** và **Cọ** giữ riêng cọ đặt sẵn và kích thước cọ gần nhất của mỗi nút.

![Ngăn Tạo hình trong Phác thảo với các nhóm Hòa màu, Sơn ướt, Hiệu ứng, Biến dạng và Sửa ảnh ở bên trái, các cọ hòa màu của nhóm Hòa màu ở giữa và thiết lập của Miết màu ở bên phải.](shot:drawing/sketch-sculpt-drawer)

## Vẽ trên mặt nạ

Trên mặt nạ, Hòa màu và Biến dạng chỉ vẽ độ phủ đơn thuần, không miết màu và không
di chuyển pixel. Nét đầu tiên như vậy trên mỗi mặt nạ sẽ hiện một thông báo.
