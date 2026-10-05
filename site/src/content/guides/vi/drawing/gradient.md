---
title: "Chuyển màu"
description: "Vẽ dải chuyển màu bằng công cụ Chuyển màu, sửa màu của dải, và thêm lớp Tô chuyển màu."
related: ["drawing/fill", "layers/types", "filters/color", "color/edit-color"]
---

Bạn có thể vẽ dải chuyển màu lên một lớp bằng công cụ **Chuyển màu**, hoặc thêm một
lớp **Tô chuyển màu** luôn chỉnh sửa được.

## Công cụ Chuyển màu

Thực hiện một trong các cách sau:

- Nhấn **G**.
- Trong Vẽ, chọn **Chuyển màu** trên Thanh công cụ vẽ.
- Trong Ảnh, chọn nút chuyển màu và tô màu nằm sau **Biến dạng** trên Thanh công cụ vẽ.
- Tìm lệnh **Chuyển màu**.

Kéo từ điểm đầu đến điểm cuối. Một đường thẳng đi theo con trỏ, và dải chuyển màu
được vẽ khi bạn thả ra.

- Dải chuyển màu phủ toàn bộ lớp, với màu đầu tiên ở trước điểm đầu và màu cuối cùng ở sau điểm cuối.
- Nhấn **Escape** trong lúc kéo để hủy.
- Kéo bằng ngón tay sẽ di chuyển khung vẽ.
- Vùng chọn đang hoạt động giới hạn dải chuyển màu, và dải chuyển màu tuân theo **Khóa alpha**.
- Trong Mặt nạ nhanh hoặc trên lớp vùng chọn, dải chuyển màu đi vào mặt nạ vùng chọn.
- Mỗi dải chuyển màu là một bước hoàn tác.

Công cụ chỉ vẽ lên nội dung của lớp, và chỉ trên những lớp mà cọ vẽ được
([Công cụ cọ](/vi/docs/drawing/brush-tools/)).

## Hình dạng

- **Tuyến tính**: màu thay đổi dọc theo hướng kéo.
- **Tỏa tròn**: điểm đầu là tâm, và đường kéo đặt bán kính.
- **Reflected**: giống Tuyến tính, đối xứng ở hai bên điểm đầu.

Thực hiện một trong các cách sau:

- Chọn hình dạng trong **Hình dạng** ở đầu bảng **Công cụ**, hoặc trong bảng **Bộ công cụ**.
- Nhấp chuột phải hoặc giữ nút Chuyển màu trên Thanh công cụ vẽ rồi chọn một hình dạng.
- Trên thanh Tùy chọn công cụ, chọn hình dạng từ **Biến thể**, hoặc từ **Công cụ** trong Ảnh.

## Trình chỉnh điểm màu

![Bảng Công cụ cho công cụ Chuyển màu với hàng Hình dạng, trình chỉnh điểm màu và Độ đục.](shot:drawing/gradient-tool-panel)

Bạn có thể sửa màu của dải chuyển màu trong trình chỉnh điểm màu bên dưới
**Hình dạng** trong bảng **Công cụ**. Nút chuyển màu trên thanh Tùy chọn công cụ mở
trình chỉnh này trong một cửa sổ bật lên. Lớp Tô chuyển màu và bộ lọc
**Ánh xạ chuyển màu** dùng cùng trình chỉnh này ([Bộ lọc màu](/vi/docs/filters/color/)).

Cho đến khi bạn sửa, dải chuyển màu của công cụ đi từ màu trước đến màu nền và thay
đổi theo cả hai màu đó. Sau khi sửa, dải giữ các điểm màu của nó cho đến khi bạn chọn
**Đặt lại chuyển màu**. Việc sửa dải chuyển màu của công cụ không phải là bước hoàn
tác.

### Interpolation

Đặt cách màu pha trộn giữa các điểm màu. **Oklab** (mặc định) pha đều theo cách mắt
cảm nhận màu, **Ánh sáng tuyến tính** pha như ánh sáng pha trộn, còn **Cổ điển** pha
các giá trị màu được lưu.

### Đảo chiều

Đảo thứ tự các điểm màu.

### Đặt lại chuyển màu

Đưa dải chuyển màu của công cụ về màu trước và màu nền, và đưa dải chuyển màu của lớp
Tô chuyển màu hoặc Ánh xạ chuyển màu về đen và trắng.

### Thêm điểm màu

Chọn một chỗ trên dải màu không có điểm đánh dấu để thêm một điểm màu với màu tại vị
trí đó. Mỗi dải chuyển màu chứa tối đa 32 điểm màu.

### Điểm đánh dấu

Chọn một điểm đánh dấu để chọn điểm màu của nó, hoặc kéo điểm đánh dấu để di chuyển
điểm màu.

### Vị trí

Đặt vị trí của điểm màu đang chọn theo phần trăm. Hai điểm màu ở đầu mút luôn ở 0%
và 100%, và một điểm màu không thể vượt qua các điểm bên cạnh.

### Xóa điểm màu

Xóa điểm màu đang chọn. Không thể xóa hai điểm màu ở đầu mút.

### Màu

Mở [Sửa màu](/vi/docs/color/edit-color/) cho điểm màu đang chọn.

### Dùng màu đã chọn

Đặt điểm màu đang chọn thành màu hiện tại.

## Độ đục

**Độ đục** đặt cường độ của dải chuyển màu, và là cùng giá trị với **Độ đục** của cọ
hiện tại. Trong Phác thảo, dùng thanh trượt độ đục ở cạnh trái.

## Lớp Tô chuyển màu

Bạn có thể thêm một lớp tô màu có dải chuyển màu luôn chỉnh sửa được.

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mới > Tô chuyển màu**.
- Chọn **Bộ lọc > Tô đầy > Tô chuyển màu**.
- Trong bảng Bộ lọc, chọn **Tô chuyển màu** dưới **Tô đầy**.

Thiết lập của lớp nằm trong bảng Thuộc tính, và mỗi thay đổi là một bước hoàn tác.

Vùng chọn đang hoạt động trở thành mặt nạ của lớp mới. Để vẽ lên lớp, hãy thêm mặt
nạ trước ([Các loại lớp](/vi/docs/layers/types/)).

![Bảng Thuộc tính của lớp Tô chuyển màu với Hình dạng, trình chỉnh điểm màu, Góc, Tỷ lệ và Vị trí.](shot:drawing/gradient-fill-properties)

### Hình dạng

**Tuyến tính**, **Tỏa tròn** hoặc **Reflected**, giống như với công cụ Chuyển màu.

### Chuyển màu

Trình chỉnh điểm màu. Lớp mới bắt đầu từ đen đến trắng.

### Góc

Đặt hướng của dải chuyển màu, từ −180° đến 180°.

### Tỷ lệ

Đặt độ dài của dải chuyển màu, từ 10% đến 400%.

### Tâm X và Tâm Y

Nằm dưới **Vị trí**, đặt tâm của dải chuyển màu theo phần trăm chiều rộng và chiều
cao của khung vẽ.
