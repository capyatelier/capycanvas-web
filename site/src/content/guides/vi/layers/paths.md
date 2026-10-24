---
title: "Chỉnh sửa đường"
description: "Chọn, di chuyển, chỉnh lại hình dạng và đổi kiểu cho các đường của lớp vector."
related: ["layers/vector", "drawing/figure", "transform/move-transform", "layers/types"]
---

Bạn có thể chỉnh sửa các đường của một [lớp vector](/vi/docs/layers/vector/) sau khi vẽ.

## Chọn và di chuyển đường

Chọn một đường bằng công cụ **Thao tác** ([Di chuyển và biến đổi](/vi/docs/transform/move-transform/)). Giữ **Shift** để thêm hoặc bớt đường. Kéo qua vùng khung vẽ trống để chọn các đường nằm trọn trong khung chọn, hoặc nhấn **Ctrl+A** để chọn mọi đường.

![Bảng Công cụ của Thao tác khi đã chọn một đường, liệt kê các nút Sắp xếp, các nút lật và xoay, và Co giãn độ dày viền.](shot:vector/operation-settings)

Một khung nét đứt có tay nắm bao quanh vùng chọn.

- Kéo một đường đã chọn để di chuyển nó. Giữ **Alt** để di chuyển một bản sao.
- Kéo một tay nắm để đổi tỷ lệ, hoặc tay nắm phía trên khung để xoay. **Shift** giữ nguyên tỷ lệ hoặc xoay theo nấc 15°.
- Phím mũi tên dịch 1 px, và 10 px khi giữ **Shift**.
- Các nút lật và xoay trong bảng **Công cụ** lật hoặc xoay vùng chọn quanh tâm của nó.
- **Xóa** xóa các đường đã chọn.

**Co giãn độ dày viền** trong bảng **Công cụ** được bật theo mặc định. Tắt nó để đổi tỷ lệ các đường mà giữ nguyên độ dày viền.

## Sửa điểm

Bạn có thể di chuyển, thêm và xóa các điểm neo của các đường đã chọn.

Thực hiện một trong các cách sau:

- Nhấn **A**.
- Với **Thao tác**, nhấn **Enter** hoặc nhấp đúp vào một đường.
- Trong Vẽ và Ảnh, nhấp chuột phải hoặc giữ **Thao tác / Biến đổi / Sửa điểm** trên Thanh công cụ vẽ rồi chọn **Sửa điểm**.

Các ô vuông đánh dấu điểm neo, và các điểm neo đã chọn hiện tay nắm của chúng. Nhấn **Escape** để quay lại **Thao tác**.

![Sửa điểm trên một đường, với các điểm neo được chọn và tay nắm của chúng.](shot:vector/edit-points)

- Nhấp một điểm neo để chọn, **Shift**-nhấp để thêm hoặc bớt, hoặc kéo qua vùng khung vẽ trống để chọn các điểm neo bên trong.
- Kéo các điểm neo để di chuyển. Kéo một tay nắm để uốn đường cong, hoặc giữ **Alt** để di chuyển nó tách khỏi tay nắm đối diện.
- Kéo một đoạn để uốn cong nó. Nhấp vào một đoạn để thêm điểm neo.
- Nhấp đúp một điểm neo để chuyển nó giữa góc và trơn.
- **Xóa** xóa các điểm neo đã chọn.

Sửa một điểm neo biến hình chữ nhật hoặc elip thành một đường thường.

## Lệnh đường

Bạn có thể nối, khép, tách, đảo chiều và gộp các đường đã chọn bằng **Chỉnh sửa > Đường**. Bảng **Công cụ** của **Sửa điểm** liệt kê bốn lệnh đầu.

- **Nối đường** nối các đầu gần nhất của hai đường mở, hoặc khép một đường mở.
- **Khép đường** nối hai đầu của từng đường mở đã chọn.
- **Tách tại điểm** cắt các đường đã chọn tại các điểm neo đã chọn.
- **Đảo chiều** cho mỗi đường chạy theo chiều ngược lại.
- **Tạo đường phức hợp** gộp các đường đã chọn thành một đường có lỗ ở chỗ chúng chồng nhau. **Bỏ đường phức hợp** tách chúng ra lại.

Một lệnh không thực hiện được sẽ cho biết cần chọn gì, ví dụ “Chọn một hoặc hai đường mở để nối”.

## Sắp xếp

Bạn có thể đổi thứ tự xếp chồng của các đường đã chọn trong lớp của chúng bằng **Chỉnh sửa > Sắp xếp**: **Đưa lên trên cùng**, **Đưa lên trên**, **Đưa xuống dưới** và **Đưa xuống dưới cùng**. Bảng **Công cụ** của **Thao tác** có các nút tương tự.

## Thiết lập đường

Khi đã chọn các đường, **Thuộc tính** hiện đường được chọn nằm phía trước nhất. Một nhãn kết thúc bằng “(hỗn hợp)” khi các đường đã chọn khác nhau, và một thay đổi áp dụng cho mọi đường đã chọn.

![Bảng Thuộc tính của một đường có phần tô và viền.](shot:vector/path-properties)

### Tô

Bật hoặc tắt phần tô. Phần tô mới dùng màu nền.

### Màu tô

Đặt màu của phần tô.

### Phần chồng

Đặt cách các phần chồng nhau được tô. **Tô đầy** tô chúng, và **Lỗ thủng** để chúng trống. Hiện khi **Tô** đang bật.

### Viền

Bật hoặc tắt viền. Viền mới dùng màu trước.

### Màu viền

Đặt màu của viền.

### Độ dày viền

Đặt độ dày của viền, từ 0.1 đến 4096 px.

### Đầu nét

Đặt hình dạng của các đầu hở: **Phẳng**, **Tròn** hoặc **Vuông**.

### Góc

Đặt hình dạng của viền ở các góc: **Nhọn**, **Tròn** hoặc **Vát**.

### Giới hạn góc nhọn

Đặt độ dài tối đa mà một góc nhọn có thể kéo dài, từ 1 đến 20. Quá giới hạn, góc sẽ bị vát. Hiện khi **Góc** là **Nhọn**.
