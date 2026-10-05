---
title: "Tìm lệnh"
description: "Tìm và chạy lệnh, công cụ, cọ và thiết lập bằng cách gõ tên."
related: ["input/keyboard", "start/undo", "customize/toolbars"]
---

Bạn có thể tìm và chạy lệnh, công cụ, cọ, thuộc tính lớp, không gian làm việc và
màu bằng cách gõ tên của chúng.

## Mở tìm lệnh

Thực hiện một trong các cách sau:

- Chọn **Chỉnh sửa > Tìm lệnh…**.
- Nhấn **Ctrl+K** hoặc **Ctrl+Shift+P**. Trong trình chỉnh sửa web, chỉ **Ctrl+K** dùng được.
- Nếu bạn đã thêm tìm lệnh vào một thanh công cụ, chọn nút của nó (xem [Thanh công cụ và thanh tiêu đề](/vi/docs/customize/toolbars/)).

Các bộ phím tắt đặt sẵn khác dùng phím khác (xem [Phím tắt](/vi/docs/input/keyboard/)).
Các phím này dùng được cả khi bạn đang gõ trong một ô văn bản.

Hộp tìm kiếm mở gần đầu cửa sổ với ô nhập trống.

Không thể dùng tìm lệnh trong lúc đang vẽ một nét, khi **Tùy chọn** đang mở, hoặc
khi bạn đang tùy chỉnh thanh tiêu đề.

## Gợi ý

![Tìm lệnh với ô nhập trống, liệt kê Hoàn tác, Vừa khung vẽ, Lưu, Tùy chọn và Phím tắt.](shot:start/command-search-suggestions)

Khi ô nhập trống, danh sách hiện tối đa năm mục: các mục bạn chạy gần nhất từ tìm
lệnh, sau đó là **Hoàn tác**, **Vừa khung vẽ**, **Lưu**, **Tùy chọn** và
**Phím tắt**. Các mục không chạy được lúc đó sẽ bị bỏ qua.

Chỉ những mục bạn chạy từ tìm lệnh mới được tính là gần đây. Danh sách gần đây bị
xóa khi bạn thoát Capy Canvas.

## Tìm kiếm

Gõ một phần tên. Danh sách hiện tối đa tám kết quả, tên khớp chính xác đứng đầu.

- Chữ hoa và chữ thường được coi là như nhau. Dấu phải khớp.
- Các chữ cái theo đúng thứ tự cũng khớp: “vừa khng vẽ” tìm ra **Vừa khung vẽ**.
- Tên tiếng Anh khớp ở mọi ngôn ngữ ứng dụng.
- Một số mục khớp với từ khác: “settings” tìm ra **Tùy chọn**, “color picker” tìm ra **Ống hút màu** và “resize” tìm ra **Biến đổi**.
- Gõ “brush” hoặc “brushes” sẽ không liệt kê từng cọ riêng lẻ.

Nếu không có gì khớp, danh sách hiện “Không có lệnh phù hợp”.

## Những gì bạn có thể tìm

- Mọi mục trong các trình đơn.
- Mọi công cụ và từng biến thể công cụ, ví dụ **Thước › Tỏa tròn**.
- Mọi cọ, và từng bộ cọ dưới dạng “Cọ *tên bộ*”.
- Các thiết lập của công cụ hiện tại, ví dụ **Kích thước cọ…**.
- Các thuộc tính của lớp đang chọn, ví dụ **Độ đục lớp…**.
- Mọi không gian làm việc.
- **Màu trước**, **Màu nền**, **Màu vẽ trong suốt**, **Màu tạm**, **Đổi chỗ màu trước và màu nền**, **Đen** và **Trắng**.
- Mọi bảng và thanh công cụ trong trình đơn **Cửa sổ**.

## Kết quả

![Tìm lệnh với từ khóa “undo”, hàng Hoàn tác bị làm mờ và “Không có gì để hoàn tác” ở dưới cùng.](shot:start/command-search-unavailable)

Mỗi hàng hiện tên và, ở bên phải, phím tắt. Dấu kiểm đánh dấu thiết lập đang bật và
không gian làm việc hiện tại.

Dòng ở cuối hộp mô tả mục đang được tô sáng bằng văn bản trợ giúp, vị trí trong
trình đơn hoặc khoảng giá trị của mục đó. Mục không chạy được lúc đó bị làm mờ, và
dòng cuối nêu lý do, ví dụ “Không có gì để hoàn tác”.

## Chạy một kết quả

Thực hiện một trong các cách sau:

- Nhấn **↑** hoặc **↓** để tô sáng một hàng, rồi nhấn **Enter**.
- Chọn một hàng.

Hộp tìm kiếm đóng lại và mục đó được chạy. Nếu mục không chạy được, hộp tìm kiếm
vẫn mở và hiện lý do.

## Gõ giá trị

![Tìm lệnh yêu cầu nhập giá trị cho Kích thước cọ…, với đơn vị px, giá trị hiện tại và khoảng giá trị ở dưới cùng.](shot:start/command-search-typed-value)

Các mục cho thiết lập dạng số, ví dụ **Kích thước cọ…** và **Độ đục lớp…**, yêu
cầu nhập giá trị. Dòng cuối hiện giá trị hiện tại và khoảng giá trị.

Để đặt giá trị:

1. Chọn mục đó, hoặc tô sáng mục rồi nhấn **Enter**.
2. Gõ giá trị và nhấn **Enter**.

Bạn có thể gõ phép tính, ví dụ “12 * 2” hoặc “sqrt(9)”, và phần trăm, ví dụ “50%”.
Giá trị nằm ngoài khoảng được đặt thành giới hạn gần nhất. Nhấn **Esc** để quay lại
danh sách kết quả.

## Hoàn tác từ ô văn bản hoặc bảng màu

Nếu bạn mở tìm lệnh từ một ô văn bản, **Hoàn tác** và **Làm lại** đổi thành
**Hoàn tác sửa văn bản** và **Làm lại sửa văn bản**. Hai mục này không chạy được từ
tìm lệnh. Để hoàn tác nội dung đã gõ trong ô, hãy đóng tìm lệnh trước.

Khi mở từ bảng **Bảng màu**, tìm lệnh liệt kê **Hoàn tác sắp xếp màu** và
**Làm lại sắp xếp màu** thay vào đó. Hai mục này hoàn tác thay đổi thứ tự màu trong
bảng màu, không phải thay đổi trên bản vẽ.

## Đóng tìm lệnh

Thực hiện một trong các cách sau:

- Nhấn **Esc**.
- Chọn **×** ở bên phải ô nhập.
- Nhấp hoặc chạm bên ngoài hộp.

Cú nhấp bên ngoài hộp không vẽ lên khung vẽ.
