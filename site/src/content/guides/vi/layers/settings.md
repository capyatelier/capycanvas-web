---
title: "Thiết lập lớp"
description: "Các thiết lập lớp ở phần đầu bảng Lớp, trong trình đơn Thiết lập lớp và trong bảng Thuộc tính."
related: ["layers/panel", "layers/blend-modes", "layers/types", "filters/how-filters-apply"]
---

Bạn có thể đổi các thiết lập này ở phần đầu bảng Lớp hoặc trong **Thiết lập lớp**
của trình đơn lớp. Trình đơn **Lớp** có các mục giống vậy.

![Trình đơn con Thiết lập lớp của Ribbon shading, với Cắt theo lớp bên dưới được đánh dấu và “Đã cắt theo Ribbon” ở bên phải.](shot:layers/settings-menu)

## Khóa alpha

Bạn có thể khóa độ trong suốt của lớp vẽ. Khi đó cọ chỉ thay đổi những pixel đã
được vẽ.

Thực hiện một trong các cách sau:

- Chọn lớp, rồi chọn **Khóa alpha** ở phần đầu bảng Lớp.
- Mở trình đơn của lớp rồi chọn **Thiết lập lớp > Khóa alpha**.
- Vuốt hàng sang phải bằng bút hoặc ngón tay.

Khi Khóa alpha đang bật, biểu tượng khóa alpha xuất hiện ở bên phải hàng.

**Tô đầy** và **Chuyển màu** cũng giữ nguyên độ trong suốt, còn **Tẩy** không có tác
dụng.

## Khóa chỉnh sửa

Bạn có thể khóa một lớp để không thể vẽ lên hay thay đổi lớp đó.

Thực hiện một trong các cách sau:

- Chọn lớp, rồi chọn **Khóa chỉnh sửa** ở phần đầu bảng Lớp.
- Mở trình đơn của lớp rồi chọn **Thiết lập lớp > Khóa chỉnh sửa**.
- Với lớp vùng chọn, chọn **Khóa chỉnh sửa** từ trình đơn của lớp đó.

Khi lớp bị khóa, biểu tượng ổ khóa xuất hiện trên hàng của lớp.

Bạn không thể vẽ lên, đổi tên, xóa hay thêm mặt nạ cho lớp đã khóa, cũng không thể
đổi độ đục, chế độ hòa trộn hay thêm bộ lọc vào lớp đó. Khóa một nhóm sẽ khóa mọi
lớp trong nhóm. Bạn không thể tắt **Khóa chỉnh sửa** trên lớp nằm trong nhóm đã khóa.

## Cắt theo lớp bên dưới

Bạn có thể cắt một lớp để giới hạn lớp đó trong vùng đã vẽ của lớp bên dưới.

Thực hiện một trong các cách sau:

- Chọn lớp, rồi chọn **Cắt theo lớp bên dưới** ở phần đầu bảng Lớp.
- Mở trình đơn của lớp rồi chọn **Thiết lập lớp > Cắt theo lớp bên dưới**.
- Để thêm một lớp cắt mới, chọn **Mới > Lớp cắt mới** từ trình đơn của lớp.

Một thanh dọc bên trái các hình thu nhỏ nối các lớp cắt với lớp nền cắt. Trong trình đơn
của lớp, mục này ghi tên lớp nền cắt, ví dụ “Đã cắt theo Ribbon”. Di chuyển lớp nền cắt sẽ
di chuyển các lớp cắt theo.

Bạn không thể cắt theo nhóm đang bật Xuyên qua. Hãy tắt Xuyên qua trên nhóm trước.

Lớp nền cắt là lớp không bị cắt gần nhất bên dưới trong cùng nhóm, bỏ qua các lớp vùng
chọn. Nếu lớp đó là lớp tô màu hoặc bộ lọc, mục này ghi **Không có lớp bên dưới để gắn**.
Trên bộ lọc, thay vào đó mục này gắn bộ lọc (xem
[Phạm vi tác động của bộ lọc](/vi/docs/filters/how-filters-apply/)).

## Dùng làm tham chiếu

Bạn có thể đánh dấu lớp vẽ và nhóm làm tham chiếu cho các công cụ lấy mẫu
**Lớp tham chiếu**, như **Tự động chọn**, **Tô đầy** và
[các công cụ chỉnh sửa ảnh](/vi/docs/retouch/clone-heal/).

Thực hiện một trong các cách sau:

- Chọn các lớp, rồi chọn **Dùng các lớp đã chọn làm tham chiếu** ở phần đầu bảng Lớp.
- Mở trình đơn của lớp rồi chọn **Thiết lập lớp > Dùng làm tham chiếu**, hoặc **Dùng các lớp đã chọn làm tham chiếu** khi đang chọn nhiều hàng.

Để ngừng dùng một lớp làm tham chiếu, chỉ chọn lớp đó, rồi chọn
**Ngừng dùng lớp này làm tham chiếu** ở phần đầu bảng, hoặc tắt
**Dùng làm tham chiếu** trong trình đơn của lớp.

Biểu tượng ngọn hải đăng xuất hiện trên nút hàng của lớp tham chiếu. Sau khi bạn đánh
dấu các lớp bằng nút ở phần đầu bảng, chỉ lớp hiện tại còn được chọn.

## Dùng lớp bên dưới làm tham chiếu

Bạn có thể đánh dấu lớp vẽ hiển thị gần nhất bên dưới lớp hiện tại làm tham chiếu.

Thực hiện một trong các cách sau:

- Chọn **Lớp > Thiết lập lớp > Dùng lớp bên dưới làm tham chiếu**.
- Khi một công cụ lấy mẫu lớp tham chiếu mà chưa có lớp nào được đánh dấu, chọn **Dùng *lớp* làm tham chiếu** trong thông báo trên khung vẽ.

## Xuyên qua

Bạn có thể đặt nhóm ở chế độ Xuyên qua. Khi đó các lớp trong nhóm hòa trộn trực tiếp
với các lớp bên dưới nhóm, còn độ đục và mặt nạ của nhóm pha giữa kết quả đó với các
lớp bên dưới.

Thực hiện một trong các cách sau:

- Mở trình đơn của nhóm rồi chọn **Thiết lập lớp > Xuyên qua**.
- Chọn **Xuyên qua** từ **Chế độ hòa trộn lớp** ở phần đầu bảng Lớp, hoặc từ **Chế độ hòa trộn** trong bảng **Thuộc tính**.
- Vuốt hàng của nhóm sang phải bằng bút hoặc ngón tay.

Một biểu tượng nhỏ xuất hiện trên thư mục của nhóm, và phụ đề ghi “Xuyên qua”.

Tắt Xuyên qua sẽ đặt nhóm về Bình thường. Nhóm Xuyên qua không thể bị cắt, không thể
làm lớp nền cắt và không thể gắn bộ lọc. Bạn không thể đổi Xuyên qua trên
nhóm đã khóa.

Nhóm mới dùng Bình thường, trừ khi **Dùng Xuyên qua cho nhóm mới** được bật trong
trang **Khung vẽ** của [Tùy chọn](/vi/docs/preferences/). Khi bạn nhóm các lớp dùng
chế độ hòa trộn khác Bình thường, hoặc một bộ lọc nằm trên lớp riêng, nhóm mới sẽ ở
chế độ Xuyên qua.

## Chế độ màu

Bạn có thể lưu lớp vẽ ở **Đầy đủ màu**, **Thang xám** hoặc
**Hai tông (đen và trắng)**. Nét vẽ trên lớp tuân theo chế độ này.

![Bảng Thuộc tính của một lớp vẽ với Độ đục, Chế độ hòa trộn và Chế độ màu.](shot:layers/settings-color-mode)

Thực hiện một trong các cách sau:

- Chọn lớp, rồi chọn một chế độ từ **Chế độ màu** trong bảng **Thuộc tính**.
- Gõ “Chế độ màu” vào [tìm lệnh](/vi/docs/start/command-search/) rồi chọn một chế độ.

**Chế độ màu** không có trong trình đơn của lớp. Phụ đề của hàng hiện chế độ màu khi
chế độ đó khác Đầy đủ màu.

Đổi chế độ sẽ chuyển đổi các pixel hiện có, và trở lại Đầy đủ màu không khôi phục
màu ban đầu. Hai tông biến mọi pixel thành đen hoặc trắng, và đục hoàn toàn hoặc
trong suốt hoàn toàn. **Chế độ màu** bị ẩn khi bạn vẽ lên mặt nạ của lớp.

## Các mục khác trong Thiết lập lớp

**Thiết lập lớp** còn có **Áp dụng biến đổi vào pixel** (xem
[Di chuyển và biến đổi](/vi/docs/transform/move-transform/)). Trên lớp ảnh, trình
đơn này có **Sửa hồ sơ màu nguồn…**, **Chuyển nguồn thành ảnh điểm…** và
**Trở về ảnh gốc** (xem [Các loại lớp](/vi/docs/layers/types/)).
