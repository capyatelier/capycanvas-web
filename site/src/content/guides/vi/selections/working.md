---
title: "Làm việc với vùng chọn"
description: "Thanh khung vẽ và các lệnh thay đổi vùng chọn hoặc pixel bên trong vùng chọn."
related: ["selections/tools", "selections/quick-mask", "selections/selection-layers", "layers/masks"]
---

Bạn có thể thay đổi vùng chọn, và pixel bên trong vùng chọn, từ trình đơn **Chọn**
và từ thanh vùng chọn trên khung vẽ.

## Thanh khung vẽ

Thanh khung vẽ là một hàng nút trên khung vẽ, chứa các bước tiếp theo cho thứ bạn
đang chỉnh sửa.

| Thanh khung vẽ xuất hiện | Trang mô tả |
| --- | --- |
| Bên cạnh vùng chọn mới | Thanh vùng chọn, bên dưới |
| Khi bạn đặt các góc của vùng chọn **Chọn đa giác** | [Công cụ vùng chọn](/vi/docs/selections/tools/) |
| Trong Mặt nạ nhanh | [Mặt nạ nhanh](/vi/docs/selections/quick-mask/) |
| Khi bạn sửa lớp vùng chọn | [Lớp vùng chọn](/vi/docs/selections/selection-layers/) |
| Khi bạn sửa mặt nạ của lớp | [Mặt nạ](/vi/docs/layers/masks/) |
| Khi bạn biến đổi lớp hoặc pixel, hoặc đặt ảnh | [Di chuyển và biến đổi](/vi/docs/transform/move-transform/) |
| Khi bạn cắt xén | [Cắt xén](/vi/docs/transform/crop/) |
| Khi bạn chọn một đường hướng dẫn | [Thước và đường hướng dẫn](/vi/docs/drawing/ruler/) |
| Khi bạn nhấp vào vùng tròn nguồn sao chép | [Sao chép và phục hồi](/vi/docs/retouch/clone-heal/) |
| Khi bạn chọn điểm lấy mẫu cho Mức, Đường cong hoặc Cân bằng trắng | [Thêm và chỉnh sửa bộ lọc](/vi/docs/filters/adding/) |

Thanh nằm bên cạnh đối tượng, hoặc ở cạnh dưới khung vẽ. Từ trái sang phải, thanh
có:

- Một nhãn, ví dụ “Mặt nạ nhanh” hoặc “Biến đổi viền”.
- Các nút. Nút bị mờ là nút không dùng được; chọn nút đó để xem lý do.
- **Thêm**, chứa các nút không vừa trên thanh, tiếp theo là trình đơn **Chọn** với vùng chọn hoặc trình đơn **Lớp** với mặt nạ.
- Nút hoàn tất, ví dụ **Áp dụng** hoặc **Thoát**.

Thanh nằm cạnh đối tượng sẽ ẩn đi khi bạn chạm vào khung vẽ hoặc di chuyển khung
nhìn.

Để ẩn thanh khung vẽ, thực hiện một trong các cách sau:

- Chọn **Hiển thị > Hiện thanh thao tác khung vẽ**.
- Chọn **Hiện thanh thao tác khung vẽ** ở cuối **Thêm**.

Mỗi không gian làm việc giữ thiết lập riêng. Khi thanh bị ẩn, thao tác cắt xén,
biến đổi, đặt ảnh và vẽ đa giác vẫn hiện nút hoàn tất ở cạnh dưới khung vẽ.

## Thanh vùng chọn

Thanh vùng chọn xuất hiện bên cạnh vùng chọn khi công cụ vùng chọn hoặc
**Thao tác** đang được dùng. Với các công cụ khác, thanh xuất hiện bên cạnh vùng chọn mới,
nhưng không xuất hiện bên cạnh vùng chọn được khôi phục bằng Hoàn tác hoặc Làm lại.
Cọ, các công cụ tô đầy, **Chuyển màu** và **Hình** không bao giờ hiện thanh này.

![Thanh vùng chọn bên dưới một vùng chọn hình chữ nhật.](shot:selections/working-selection-bar)

- **Bỏ chọn** và **Đảo ngược**: xem trình đơn Chọn bên dưới.
- **Giữ bản sao**: chỉ có với **Thao tác**, xem [Di chuyển và biến đổi](/vi/docs/transform/move-transform/).
- **Sao chép sang lớp**: **Sao chép vùng chọn sang lớp mới** hoặc **Cắt vùng chọn sang lớp mới**.
- **Sao chép**: **Sao chép**, **Sao chép ảnh gộp** hoặc **Cắt**, xem [Sao chép và dán](/vi/docs/transform/clipboard/).
- **Biến đổi**: biến đổi các pixel đã chọn.
- **Tinh chỉnh**: các lệnh tinh chỉnh và **Biến đổi viền**.
- **Mặt nạ**: tạo mặt nạ cho lớp hiện tại theo vùng chọn.
- **Điều chỉnh**: thêm một bộ lọc dùng vùng chọn làm mặt nạ, xem [Phạm vi tác động của bộ lọc](/vi/docs/filters/how-filters-apply/).
- **Tô đầy**: **Tô đầy vùng chọn**.
- **Xóa**: **Xóa pixel đã chọn** hoặc **Xóa ngoài vùng chọn**.
- **Cắt xén**: **Cắt khung vẽ theo vùng chọn**, xem [Cắt xén](/vi/docs/transform/crop/).
- **Mặt nạ nhanh**: xem [Mặt nạ nhanh](/vi/docs/selections/quick-mask/).
- **Lưu**: **Lưu thành lớp vùng chọn**, xem [Lớp vùng chọn](/vi/docs/selections/selection-layers/).

## Trình đơn Chọn

Bạn cũng có thể mở trình đơn **Chọn** từ **Thêm** trên thanh vùng chọn, và từ nút
**Chọn** bên dưới thiết lập của công cụ vùng chọn trong bảng Công cụ.

| Lệnh | Tác dụng | Phím |
| --- | --- | --- |
| **Chọn mọi pixel** | Chọn toàn bộ khung vẽ | **Ctrl+A** |
| **Bỏ chọn pixel** | Bỏ vùng chọn, đồng thời thoát Mặt nạ nhanh hoặc thoát sửa lớp vùng chọn | **Ctrl+D** |
| **Chọn lại** | Khôi phục vùng chọn mà thay đổi gần nhất đã bỏ | **Ctrl+Shift+D** |
| **Đảo vùng chọn** | Chọn mọi thứ bên ngoài vùng chọn | **Ctrl+Shift+I** |
| **Hiện viền vùng chọn** | Hiện hoặc ẩn viền vùng chọn | |

**Chọn lại** chỉ dùng được khi không có gì được chọn.

Ẩn viền vùng chọn không bỏ vùng chọn. **Hiện viền vùng chọn** cũng có trong trình
đơn Hiển thị.

![Trình đơn Chọn.](shot:selections/working-select-menu)

## Tinh chỉnh vùng chọn

Bạn có thể mở rộng, thu hẹp, làm mềm biên, tạo viền hoặc làm mịn vùng chọn và xem
trước trực tiếp.

Thực hiện một trong các cách sau:

- Chọn **Chọn > Mở rộng vùng chọn…**, **Thu hẹp vùng chọn…**, **Làm mềm biên vùng chọn…**, **Tạo viền vùng chọn…** hoặc **Làm mịn vùng chọn…**.
- Chọn **Tinh chỉnh** trên thanh vùng chọn rồi chọn **Mở rộng…**, **Thu hẹp…**, **Làm mềm biên…**, **Viền…** hoặc **Làm mịn…**.

Một bảng có một giá trị mở ra ở cuối khung vẽ. Để giữ kết quả, chọn **Áp dụng**
hoặc nhấn **Enter**. **Hủy** và **Escape** khôi phục vùng chọn ban đầu.

| Lệnh | Giá trị | Khoảng | Mặc định |
| --- | --- | --- | --- |
| **Mở rộng vùng chọn…** | **Grow by** | 1–128 px | 5 px |
| **Thu hẹp vùng chọn…** | **Shrink by** | 1–128 px | 5 px |
| **Làm mềm biên vùng chọn…** | **Feather radius** | 0.1–100 px | 5 px |
| **Tạo viền vùng chọn…** | **Border width** | 1–128 px | 5 px |
| **Làm mịn vùng chọn…** | **Smooth radius** | 1–64 px | 5 px |

**Tạo viền vùng chọn…** thay vùng chọn bằng một dải chạy dọc theo biên của vùng
chọn. Làm mịn sẽ lấp các chỗ lõm và bỏ các chỗ nhô hẹp hơn hai lần bán kính, nhưng
không dịch chuyển các biên nằm trên mép khung vẽ. Mở rộng và thu hẹp giữ nguyên độ
mềm của biên mềm.

Trong Mặt nạ nhanh, các lệnh này thay đổi mặt nạ.

![Trình đơn Tinh chỉnh trên thanh vùng chọn.](shot:selections/working-refine-menu)

## Biến đổi viền vùng chọn

Bạn có thể di chuyển, đổi tỷ lệ, xoay, nghiêng hoặc lật viền vùng chọn mà không di
chuyển pixel nào.

Thực hiện một trong các cách sau:

- Chọn **Chọn > Biến đổi viền vùng chọn**.
- Chọn **Tinh chỉnh > Biến đổi viền** trên thanh vùng chọn.

Hộp biến đổi xuất hiện cùng thanh khung vẽ có nhãn “Biến đổi viền”. Hộp hoạt động
như [Biến đổi](/vi/docs/transform/move-transform/), trừ việc không có **Làm méo**,
**Uốn cong** và **Nội suy**.

## Tô đầy và xóa

- **Tô đầy vùng chọn** tô các pixel đã chọn của lớp vẽ hiện tại bằng màu hiện tại, theo độ đục của cọ.
- **Xóa pixel đã chọn** xóa các pixel đã chọn của lớp hiện tại. Biên mềm bị xóa một phần.
- **Xóa ngoài vùng chọn** xóa các pixel bên ngoài vùng chọn.

Thực hiện một trong các cách sau:

- Chọn lệnh từ trình đơn **Chỉnh sửa**. Các lệnh xóa cũng có trong trình đơn **Chọn**.
- Nhấn **Shift+Backspace** để tô đầy, hoặc **Xóa** hay **Backspace** để xóa các pixel đã chọn.
- Chọn **Tô đầy**, hoặc **Xóa** rồi chọn một lệnh, trên thanh vùng chọn.
- Trong Vẽ, chọn **Tô đầy vùng chọn** trên Thanh lệnh.
- Mở trình đơn của lớp rồi chọn **Vùng chọn pixel > Tô đầy vùng chọn**.

Bạn không thể xóa pixel trong Mặt nạ nhanh, trên mặt nạ, hoặc trên lớp đang bật
**Khóa alpha**.

## Sao chép sang lớp mới

**Sao chép vùng chọn sang lớp mới** sao chép các pixel đã chọn của lớp vẽ hiện tại
sang một lớp mới ngay bên trên, giữ nguyên vị trí. **Cắt vùng chọn sang lớp mới**
còn xóa các pixel đó khỏi lớp ban đầu.

Thực hiện một trong các cách sau:

- Chọn **Chọn > Sao chép vùng chọn sang lớp mới** hoặc **Chọn > Cắt vùng chọn sang lớp mới**.
- Nhấn **Ctrl+J** để sao chép hoặc **Ctrl+Shift+J** để cắt.
- Chọn **Sao chép sang lớp** trên thanh vùng chọn rồi chọn một lệnh.

Lớp mới được đặt tên theo lớp ban đầu, ví dụ *Bản sao Ribbon*, và giữ độ đục, trạng thái
hiển thị và chế độ hòa trộn của lớp ban đầu. Vùng chọn bị bỏ cho đến khi bạn chọn
**Chọn lại**.

Khi không có vùng chọn, **Sao chép vùng chọn sang lớp mới** nhân bản các lớp đã
chọn.

## Tạo mặt nạ lớp theo vùng chọn

Bạn có thể thêm cho lớp hiện tại một mặt nạ chỉ hiện vùng chọn.

Thực hiện một trong các cách sau:

- Mở trình đơn của lớp rồi chọn **Mặt nạ > Mặt nạ: hiện vùng chọn**, hoặc **Mặt nạ > Mặt nạ: ẩn vùng chọn** để ẩn vùng đã chọn.
- Chọn **Mặt nạ** trên thanh vùng chọn.

Nếu lớp đã có mặt nạ, vùng chọn sẽ thay thế mặt nạ hiện có. Vùng chọn bị bỏ, và mặt
nạ mở ra để chỉnh sửa (xem [Mặt nạ](/vi/docs/layers/masks/)).

## Vùng chọn từ lớp

Bạn có thể nạp phần đã vẽ của lớp, mặt nạ của lớp, hoặc một lớp vùng chọn thành
vùng chọn.

Thực hiện một trong các cách sau:

- Với lớp vẽ, chọn một mục trong **Chọn > Từ độ đục lớp**: **Chọn độ đục lớp**, **Thêm độ đục vào vùng chọn**, **Trừ độ đục khỏi vùng chọn** hoặc **Giao với độ đục lớp**.
- Với lớp có mặt nạ, chọn một mục trong **Chọn > Từ mặt nạ lớp**: **Nạp mặt nạ thành vùng chọn**, **Thêm mặt nạ vào vùng chọn**, **Trừ mặt nạ khỏi vùng chọn** hoặc **Giao với mặt nạ**.
- Mở trình đơn của lớp rồi chọn các mục tương tự trong **Vùng chọn pixel**.
- Giữ **Ctrl** và nhấp vào hình thu nhỏ của lớp trong bảng Lớp. Giữ thêm **Shift** để cộng vào vùng chọn, **Alt** để trừ, hoặc **Shift+Alt** để lấy phần giao.

**Chọn > Nạp vùng chọn** nạp [lớp vùng chọn](/vi/docs/selections/selection-layers/).
