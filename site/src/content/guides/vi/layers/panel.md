---
title: "Bảng lớp"
description: "Chức năng của từng phần trong bảng Lớp, kể cả trình đơn lớp."
related: ["layers/working", "layers/settings", "layers/types", "layers/vector", "layers/masks"]
---

Bảng **Lớp** liệt kê các lớp của bản vẽ, lớp nằm trước nhất ở trên cùng. Phần đầu
bảng hiện thiết lập của lớp hiện tại.

![Bảng Lớp với các lớp của tranh minh họa hoàn chỉnh.](shot:layers/panel "1 Phần đầu bảng · 2 Hàng lớp · 3 Nút cuối bảng")

## Mở bảng Lớp

Thực hiện một trong các cách sau:

- Chọn **Cửa sổ > Lớp**.
- Trong Vẽ, chọn **Lớp** ở cột phải.
- Trong Phác thảo, chọn **Lớp** trên thanh tiêu đề. Ngăn dùng chung mở ở chế độ xem Lớp; chọn nút Thuộc tính của một lớp để chuyển sang Thuộc tính.
- Gõ "Bảng lớp" vào [tìm lệnh](/vi/docs/start/command-search/).

Trong Ảnh, bảng này đã mở sẵn ở cột phải. Trong Phác thảo, bạn có thể kéo **Lớp** từ thanh tiêu đề lên khung vẽ để giữ nó ở đó dưới dạng bong bóng ([Bong bóng công cụ](/vi/docs/customize/bubbles/)).

## Phần đầu bảng

![Phần đầu bảng Lớp của Ribbon shading, với Cắt theo lớp bên dưới đang bật.](shot:layers/panel-header "1 Chế độ hòa trộn lớp · 2 Độ đục lớp · 3 Khóa alpha · 4 Khóa chỉnh sửa · 5 Cắt theo lớp bên dưới · 6 Dùng các lớp đã chọn làm tham chiếu")

1. **Chế độ hòa trộn lớp** hiện chế độ đang dùng và mở [trình đơn chế độ hòa trộn](/vi/docs/layers/blend-modes/).
2. **Độ đục lớp**, từ 0 đến 100. Kéo thanh trượt hoặc gõ giá trị.
3. **Khóa alpha**.
4. **Khóa chỉnh sửa**.
5. **Cắt theo lớp bên dưới**. Với bộ lọc, nút này ghi **Áp dụng cho *lớp*** hoặc **Áp dụng cho các lớp bên dưới** (xem [Phạm vi tác động của bộ lọc](/vi/docs/filters/how-filters-apply/)).
6. **Dùng các lớp đã chọn làm tham chiếu**. Nút này ghi **Ngừng dùng lớp này làm tham chiếu** khi lớp hiện tại là hàng duy nhất được chọn và đã là lớp tham chiếu.

Công tắc được tô sáng là công tắc đang bật (xem [Thiết lập lớp](/vi/docs/layers/settings/)).
**Chế độ hòa trộn lớp** và **Độ đục lớp** không dùng được với lớp vùng chọn và lớp
đã khóa.

## Hàng lớp

![Hàng của Ribbon, có mặt nạ, Khóa alpha đang bật và độ đục 80%.](shot:layers/panel-row "1 Mắt · 2 Nút hàng · 3 Hình thu nhỏ · 4 Liên kết mặt nạ · 5 Hình thu nhỏ mặt nạ · 6 Tên và phụ đề · 7 Khóa · 8 Tay cầm")

Các lớp trong nhóm được thụt vào bên dưới nhóm.

1. Biểu tượng mắt ẩn hoặc hiện lớp.
2. Nút hàng chọn thêm hàng hoặc bỏ chọn hàng mà không đổi lớp hiện tại. Nút hiện hình cọ trên lớp nhận màu vẽ, hình ngọn hải đăng trên lớp tham chiếu và dấu kiểm trên các hàng khác đang được chọn.
3. Chọn hình thu nhỏ để vẽ lên pixel của lớp. Với nhóm, hình thu nhỏ mở rộng hoặc thu gọn nhóm.
4. Trên lớp có mặt nạ, nút liên kết quyết định mặt nạ có di chuyển cùng lớp hay không (**Bỏ liên kết mặt nạ với lớp**, **Liên kết mặt nạ với lớp**).
5. Chọn hình thu nhỏ mặt nạ để vẽ lên [mặt nạ](/vi/docs/layers/masks/).
6. Phụ đề dưới tên hiện chế độ màu, chế độ hòa trộn và độ đục khi chúng khác Đầy đủ màu, Bình thường và 100%, ví dụ “Nhân · 60%”.
7. Biểu tượng ổ khóa đánh dấu lớp đã khóa, còn biểu tượng khóa alpha đánh dấu lớp đang bật **Khóa alpha**.
8. Kéo tay cầm để [di chuyển lớp](/vi/docs/layers/working/).

Chọn một hàng để lớp đó trở thành lớp hiện tại và là hàng duy nhất được chọn.
[Các loại lớp](/vi/docs/layers/types/) có hình thu nhỏ của từng loại lớp.

Giấy có hình thu nhỏ màu và kết cấu riêng. Nếu thiếu Giấy, **Thêm giấy** xuất hiện sau hàng cuối.

![Ngăn Phác thảo hiện Thuộc tính của Giấy, với Tất cả lớp ở dưới cùng.](shot:layers/sketch-properties-drawer)

**Ctrl**+nhấp vào hình thu nhỏ của lớp vẽ để nạp độ đục của lớp thành vùng chọn,
hoặc vào hình thu nhỏ mặt nạ để nạp mặt nạ. Giữ thêm **Shift** để cộng vào vùng
chọn, **Alt** để trừ khỏi vùng chọn, hoặc **Shift+Alt** để lấy phần giao với vùng
chọn.

## Dấu hiệu trên hàng

- Đường viền quanh hình thu nhỏ hoặc hình thu nhỏ mặt nạ cho biết cọ đang vẽ lên phần nào.
- Một thanh dọc bên trái các hình thu nhỏ nối [lớp cắt](/vi/docs/layers/settings/) với lớp nền cắt của chúng.
- Biểu tượng mắt xích giữa hai hình thu nhỏ nối [bộ lọc gắn kèm](/vi/docs/filters/how-filters-apply/) với hàng bên dưới.
- Biểu tượng mắt mờ có gạch chéo đánh dấu lớp đang bật nhưng bị nhóm chứa nó ẩn đi, hoặc bộ lọc gắn kèm có lớp bị ẩn.
- Hình thu nhỏ mặt nạ bị mờ đánh dấu mặt nạ đang tắt.
- Khi [Mặt nạ nhanh](/vi/docs/selections/quick-mask/) đang bật, hàng **Mặt nạ nhanh** xuất hiện trên cùng.

## Nút cuối bảng

![Các nút ở cuối bảng Lớp.](shot:layers/panel-footer "1 Lớp mới · 2 Lớp vector mới · 3 Nhóm mới · 4 Lớp vùng chọn mới · 5 Thêm mặt nạ · 6 Thêm bộ lọc · 7 Nhập ảnh thành lớp… · 8 Xóa các lớp đã chọn · 9 Thao tác lớp")

1. **Lớp mới** thêm một lớp vẽ.
2. **Lớp vector mới** thêm một [lớp vector](/vi/docs/layers/vector/).
3. **Nhóm mới**. Khi đang chọn nhiều hàng, nút này gộp các hàng đó thành nhóm.
4. **Lớp vùng chọn mới** (xem [Lớp vùng chọn](/vi/docs/selections/selection-layers/)).
5. **Thêm mặt nạ**.
6. **Thêm bộ lọc** gắn một bộ lọc vào lớp hiện tại.
7. **Nhập ảnh thành lớp…**
8. **Xóa các lớp đã chọn**.
9. **Thao tác lớp** mở trình đơn lớp của lớp hiện tại.

Nút không dùng được khi thao tác của nút không áp dụng cho lớp hiện tại, ví dụ
**Thêm mặt nạ** trên lớp đã khóa (xem
[Làm việc với lớp](/vi/docs/layers/working/)). Trong bảng hẹp, các nút không vừa sẽ
chuyển lên đầu trình đơn **Thao tác lớp**, bắt đầu từ **Lớp vùng chọn mới**.

## Vuốt và giữ

Bằng bút hoặc ngón tay:

- Vuốt một hàng sang trái để hiện **Khóa**, **Nhân bản** và **Xóa** ở đầu bên phải của hàng. **Khóa** đổi thành **Mở khóa** trên lớp đã khóa. Chọn một nút để áp dụng cho lớp, hoặc vuốt sang phải để ẩn các nút.
- Vuốt lớp vẽ sang phải để bật hoặc tắt **Khóa alpha**.
- Vuốt nhóm sang phải để bật hoặc tắt **Xuyên qua**.
- Giữ một hàng để mở trình đơn lớp của hàng đó. Di chuyển mà không nhấc lên để kéo hàng.

![Một hàng được vuốt sang trái, hiện Khóa, Nhân bản và Xóa.](shot:layers/panel-swipe-delete)

Vuốt ngắn không thay đổi gì. Thao tác vuốt không có tác dụng với chuột hoặc trên tay
cầm. Lớp đã khóa chỉ vuốt được sang trái.

## Trình đơn lớp

Bạn có thể mở trình đơn lệnh của từng lớp.

Thực hiện một trong các cách sau:

- Mở trình đơn **Lớp**. Trình đơn này chứa trình đơn của lớp hiện tại, trừ **Thêm bộ lọc**.
- Nhấp chuột phải vào một hàng, hoặc giữ hàng bằng bút hoặc ngón tay.
- Chọn **Thao tác lớp** ở cuối bảng.
- Khi tiêu điểm đang ở một hàng, nhấn **Shift+F10** hoặc phím Menu.

![Trình đơn lớp của Ribbon.](shot:layers/panel-menu)

| Mục | Nội dung |
| --- | --- |
| **Mới** | **Lớp mới**, **Lớp cắt mới**, **Nhóm mới**, **Lớp vector mới**, **Tô màu đồng nhất**, **Tô chuyển màu**, **Lớp làm sáng và làm tối mới**, **Sao chép vùng chọn sang lớp mới**, **Cắt vùng chọn sang lớp mới** |
| **Thêm bộ lọc** | Các bộ lọc để gắn vào lớp, xếp theo danh mục |
| **Sắp xếp** | **Đổi tên lớp…**, **Nhân bản**, **Nhóm các lớp đã chọn**, và **Bỏ nhóm** với nhóm |
| **Chế độ hòa trộn** | Mọi [chế độ hòa trộn](/vi/docs/layers/blend-modes/) |
| **Thiết lập lớp** | Các [thiết lập lớp](/vi/docs/layers/settings/) |
| **Mặt nạ** | Các lệnh [mặt nạ](/vi/docs/layers/masks/) |
| **Vùng chọn pixel** | **Chọn độ đục lớp**, **Thêm độ đục vào vùng chọn**, **Trừ độ đục khỏi vùng chọn**, **Giao với độ đục lớp**, **Tô đầy vùng chọn**, **Đảo vùng chọn**, **Bỏ chọn pixel** |
| **Chọn hàng lớp** | **Chọn mọi hàng lớp**, **Bỏ chọn hàng lớp** |
| **Hiển thị** | **Hiện lớp**, **Hiện lớp và các nhóm cha**, **Chỉ hiện các lớp đã chọn**, **Hiện mọi lớp** |
| **Di chuyển lớp / mặt nạ** | Chọn công cụ [Thao tác](/vi/docs/transform/move-transform/) |
| **Gộp xuống**, **Gộp lớp hiển thị**, **Tạo lớp gộp hiển thị**, **Gộp phẳng ảnh** | Xem [Gộp lớp](/vi/docs/layers/merging/) |
| **Chuyển thành lớp đối tượng**, **Chuyển lớp thành ảnh điểm** | **Chuyển thành lớp đối tượng** có trên lớp vẽ, còn **Chuyển lớp thành ảnh điểm** có trên lớp Đối tượng và [lớp vector](/vi/docs/layers/vector/) |
| **Xóa toàn bộ lớp**, **Xóa lớp** | **Xóa toàn bộ lớp** chỉ có trên lớp vẽ. Trên lớp vector, chạy lệnh này từ [tìm lệnh](/vi/docs/start/command-search/) để xóa mọi đường |

Mở trình đơn của một hàng sẽ biến lớp đó thành lớp hiện tại. Trình đơn của nhóm bắt
đầu bằng **Lớp vùng chọn mới trong nhóm…** và **Lưu vùng chọn hiện tại trong nhóm…**.
Lớp vùng chọn có trình đơn riêng (xem [Các loại lớp](/vi/docs/layers/types/)).
Nhấp chuột phải hoặc giữ hình thu nhỏ mặt nạ để mở
[trình đơn mặt nạ](/vi/docs/layers/masks/).
