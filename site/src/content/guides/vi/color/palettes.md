---
title: "Bảng màu"
description: "Lưu màu vào bảng màu và vẽ bằng màu đã lưu và màu gần đây trong bảng Bảng màu."
related: ["color/color-panel", "color/edit-color", "color/eyedropper"]
---

Bạn có thể lưu màu vào bảng màu và vẽ bằng các màu đó từ bảng **Bảng màu**. Bảng màu và màu
gần đây giống nhau ở mọi không gian làm việc.

![Bảng Bảng màu với các màu gần đây ở trên cùng, các ô màu của bảng màu đang dùng, cùng tên bảng màu và tên màu ở dưới cùng.](shot:color/palettes-panel)

## Mở bảng Bảng màu

Thực hiện một trong các cách sau:

- Chọn **Cửa sổ > Bảng màu**.
- Chọn **Bảng các bảng màu** trong tìm lệnh.
- Trong Vẽ, chọn thẻ **Bảng màu** cạnh **Màu**.
- Chọn **Màu cọ** ở cuối Thanh công cụ vẽ, hoặc ở đầu bên phải thanh tiêu đề trong Phác thảo. Bảng màu nằm dưới bảng Màu trong ngăn.
- Trên Windows, Linux và Android, nhấp chuột phải hoặc giữ ô màu trước hoặc ô màu nền trong bảng Màu rồi chọn **Bảng màu…**.

## Màu gần đây

Hàng trên cùng hiện tối đa 64 màu bạn đã dùng trong bản vẽ, màu mới nhất ở đầu. Chọn
một màu gần đây để vẽ bằng màu đó. Chọn **Mở rộng lịch sử màu** (mũi tên ở cuối hàng)
để hiện tối đa bốn hàng.

Một màu được thêm vào khi nét vẽ, lần tô, dải chuyển màu hoặc hình dùng màu đó. Lấy
màu, tẩy, vẽ mặt nạ và dùng Hòa màu hoặc Biến dạng không thêm màu nào. Hoàn tác không
xóa màu gần đây.

## Vẽ bằng màu đã lưu

Chọn một ô màu để vẽ bằng màu đó, hoặc để đặt màu mặt nạ khi bạn đang sửa mặt nạ. Ô
màu trùng với màu hiện tại có viền bao quanh.

## Thêm màu

Chọn **+** sau ô màu cuối cùng để lưu màu vẽ hiện tại vào bảng màu. Ô màu giữ đúng
màu đó, kể cả không gian màu, alpha và cường độ HDR. Không dùng được **+** khi
**Màu vẽ trong suốt** đang được chọn.

## Đặt tên màu

Tên của màu hiện tại nằm ở góc dưới bên phải của bảng, kèm mã hex làm bản xem trước
sRGB. Màu có cường độ HDR còn hiện cường độ, ví dụ “+1.0 EV”. Màu chưa lưu hiện một
tên gợi ý, ví dụ “Xanh cổ vịt” hoặc “Nâu đất”.

Chọn tên để gõ tên khác, rồi nhấn **Enter** để xác nhận hoặc **Escape** để hủy. Màu
chưa lưu nhận tên đó khi bạn lưu bằng **+**. Với ô màu đã lưu, tên mới thay cho tên
cũ.

Tên dài từ 1 đến 64 ký tự và không được trùng nhau trong một bảng màu.

## Sắp xếp và xóa màu

Kéo một ô màu để di chuyển. Thả ra bên ngoài lưới hoặc nhấn **Escape** để hủy di
chuyển.

Nhấp chuột phải hoặc giữ một ô màu (hoặc nhấn **Shift+F10**) để có các lệnh sau:

- **Rename Color…**
- **Remove Color**
- **Undo Color Reorder** và **Redo Color Reorder**

Khi bảng đang được chọn, **Ctrl+Z** và **Ctrl+Shift+Z** (hoặc **Ctrl+Y**) hoàn tác và
làm lại việc sắp xếp. Thêm hoặc xóa một ô màu sẽ xóa lịch sử sắp xếp của bảng màu.

## Chọn bảng màu

Chọn tên bảng màu ở góc dưới bên trái của bảng để mở danh sách bảng màu. Gõ vào
**Tìm bảng màu** để lọc danh sách, và chọn một bảng màu để dùng.

![Danh sách bảng màu với ô tìm kiếm, nút + cùng tên và các màu của từng bảng màu.](shot:color/palettes-chooser)

## Bảng màu mới

Chọn **+** trong danh sách bảng màu rồi chọn **New Palette…**. Bảng màu không được
đặt tên sẽ có tên “Bảng màu mới”.

Thư viện chứa tối đa 64 bảng màu và tổng cộng 4096 màu.

## Đổi tên và xóa bảng màu

Nhấp chuột phải hoặc giữ một bảng màu trong danh sách bảng màu rồi chọn
**Rename Palette…** hoặc **Remove Palette…**. Bạn không thể xóa bảng màu cuối cùng.

## Nhập và xuất bảng màu

Để nhập tệp bảng màu, chọn **+** trong danh sách bảng màu rồi chọn
**Import Palette…**. {appName} đọc các tệp `.capycolor`, `.aco`, `.cls`,
`.swatches`, `.ase`, `.afpalette`, `.gpl`, `.kpl` và `.json` có dung lượng tối đa
1 MB. Tệp trở thành một bảng màu mới mang tên được lưu trong tệp, hoặc tên tệp.

Để xuất một bảng màu, nhấp chuột phải hoặc giữ bảng màu đó trong danh sách bảng màu
rồi chọn **Export Palette**, sau đó chọn một định dạng:

- **Capycolor (.capycolor)** giữ đúng màu, kể cả không gian màu, alpha và cường độ HDR.
- **Clip Studio Paint, Photoshop (.aco)**, **Procreate (.swatches)**, **Affinity, Adobe (.ase)** và **Krita, GIMP (.gpl)** lưu màu sRGB đục. Màu nằm ngoài sRGB bị cắt ngưỡng. Tệp Procreate giữ 30 màu đầu tiên.

Bảng cho biết có bao nhiêu màu đã bị cắt ngưỡng hoặc bị chuyển thành màu đục.

![Trình đơn bảng màu với các định dạng của Export Palette.](shot:color/palettes-menu)

## Bảng màu khởi đầu

{appName} có sẵn Nghiên cứu đại dương, Trò chơi pixel, Kỳ ảo tối, Nghệ thuật đại
chúng, Màu phấn kẹo, In Riso, Synthwave, In thập niên 70, Khắc gỗ và Mực. Bạn có thể
thay đổi bảng màu khởi đầu như mọi bảng màu khác. Bảng màu khởi đầu đã xóa sẽ không
xuất hiện lại.
