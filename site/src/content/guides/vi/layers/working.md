---
title: "Làm việc với lớp"
description: "Thêm, sắp xếp và xóa lớp trong bảng Lớp."
related: ["layers/panel", "layers/types", "layers/merging", "files/open-save"]
---

## Tạo lớp

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mới** rồi chọn **Lớp mới**, **Lớp cắt mới** hoặc **Nhóm mới**.
- Chọn **Lớp mới** hoặc **Nhóm mới** ở cuối bảng Lớp.

Lớp mới nằm ngay trên lớp hiện tại và các lớp được cắt hoặc gắn vào lớp đó. Nếu lớp
hiện tại là một nhóm, lớp mới nằm trên cùng trong nhóm. Bạn không thể thêm lớp vào
nhóm đã khóa.

**Lớp cắt mới** cần lớp hiện tại là lớp vẽ, hoặc là nhóm không bật Xuyên qua.

## Chọn lớp

Bạn có thể chọn nhiều hàng để nhóm, nhân bản, xóa hoặc di chuyển cùng lúc.

- Chọn một hàng để chỉ chọn lớp đó và biến lớp đó thành lớp hiện tại.
- **Shift**+nhấp vào một hàng để chọn các hàng từ hàng đó đến hàng bạn đã chọn trước đó.
- **Ctrl**+nhấp vào một hàng để chọn thêm hoặc bỏ chọn hàng đó.
- Chọn nút hàng, bên trái hình thu nhỏ, để chọn thêm hoặc bỏ chọn hàng mà không đổi lớp hiện tại.
- Chọn **Lớp > Chọn hàng lớp > Chọn mọi hàng lớp** hoặc **Bỏ chọn hàng lớp**.

Chọn một hàng đã được chọn sẽ giữ nguyên các hàng khác đang chọn. Thay đổi các hàng
được chọn không được tính là bước hoàn tác.

## Ẩn lớp

Thực hiện một trong các cách sau:

- Chọn **Lớp > Hiển thị > Hiện lớp**.
- Chọn biểu tượng mắt trên hàng.

**Lớp > Hiển thị** còn có **Hiện lớp và các nhóm cha**,
**Chỉ hiện các lớp đã chọn** và **Hiện mọi lớp**.

## Đổi tên lớp

Thực hiện một trong các cách sau:

- Chọn **Lớp > Sắp xếp > Đổi tên lớp…** (**Đổi tên nhóm…** với nhóm).
- Nhấp đúp vào tên.

![Một hàng lớp với tên nằm trong ô văn bản.](shot:layers/working-rename)

Nhấn **Enter** để giữ tên mới, hoặc **Escape** để hủy. Bạn không thể đổi tên lớp đã
khóa.

## Sắp xếp lại lớp

Kéo một hàng lên hoặc xuống trong danh sách. Với bút hoặc ngón tay, hãy giữ hàng
trước, hoặc kéo tay cầm ở đầu bên phải của hàng.

![Một hàng đang được kéo, với một đường kẻ giữa hai hàng ở chỗ hàng sẽ được thả.](shot:layers/working-drag)

Đường kẻ phía trên hoặc phía dưới một hàng đánh dấu chỗ lớp sẽ được thả. Để đưa lớp
vào nhóm, thả lớp vào giữa hàng của nhóm (một khung xuất hiện quanh hàng). Nhấn
**Escape** để hủy thao tác kéo.

Mọi hàng đang chọn di chuyển cùng nhau, và các lớp cắt cùng bộ lọc gắn kèm di chuyển
theo lớp của chúng. **Nâng lớp** và **Hạ lớp** trong
[tìm lệnh](/vi/docs/start/command-search/) di chuyển các hàng đang chọn một bậc.

## Nhóm và bỏ nhóm

Để nhóm các lớp, chọn các hàng của chúng rồi chọn
**Lớp > Sắp xếp > Nhóm các lớp đã chọn**, hoặc chọn **Nhóm mới** ở cuối bảng Lớp.
Các hàng phải nằm trong cùng một nhóm, và lớp nền cắt phải được nhóm cùng các lớp cắt
vào nó.

Để bỏ nhóm, chọn **Lớp > Sắp xếp > Bỏ nhóm**. Khi bỏ một nhóm đang ẩn, các lớp của
nhóm vẫn bị ẩn. **Bỏ nhóm** không dùng được khi nhóm có mặt nạ, độ đục dưới 100%,
chế độ hòa trộn khác Bình thường hoặc Xuyên qua, có thiết lập cắt hoặc bộ lọc gắn
kèm, hoặc khi các lớp sẽ trông khác đi nếu không còn nhóm.

## Nhân bản lớp

Chọn **Lớp > Sắp xếp > Nhân bản**, hoặc **Nhân bản các lớp đã chọn** khi đang chọn
nhiều hàng.

Bản sao nằm ngay trên bản gốc, kèm các lớp cắt và bộ lọc gắn kèm, và có tên “Bản sao
*tên*”. Bạn không thể nhân bản lớp trong nhóm đã khóa.

## Xóa lớp

Thực hiện một trong các cách sau:

- Chọn **Lớp > Xóa lớp**, hoặc **Xóa các lớp đã chọn** khi đang chọn nhiều hàng.
- Chọn **Xóa các lớp đã chọn** ở cuối bảng Lớp.
- Bằng bút hoặc ngón tay, vuốt hàng sang trái rồi chọn **Xóa**.

Với nhóm đang thu gọn, mục trình đơn ghi **Xóa nhóm và nội dung**. Xóa một nhóm đang
mở rộng sẽ giữ lại các lớp của nhóm, giống như **Bỏ nhóm**.

Các lớp cắt và bộ lọc gắn kèm vẫn còn khi bạn xóa lớp của chúng. Bạn không thể xóa
lớp đã khóa. Phím **Xóa** xóa pixel đã chọn chứ không xóa lớp.

## Sao chép vùng chọn sang lớp mới

Bạn có thể sao chép hoặc di chuyển các pixel đã chọn của lớp vẽ sang một lớp mới, giữ
nguyên vị trí.

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mới > Sao chép vùng chọn sang lớp mới** (**Ctrl+J**) hoặc **Cắt vùng chọn sang lớp mới** (**Ctrl+Shift+J**).
- Chọn các lệnh này từ trình đơn **Chọn**.
- Chọn các lệnh này từ **Sao chép sang lớp** trên [thanh vùng chọn](/vi/docs/selections/working/) trên khung vẽ.

Lớp mới nằm trên lớp nguồn, có tên “Bản sao *tên*”, cùng độ đục và chế độ hòa trộn.
Vùng chọn bị bỏ, và **Chọn > Chọn lại** khôi phục vùng chọn.

Khi không có vùng chọn, **Sao chép vùng chọn sang lớp mới** nhân bản các lớp đang
chọn. **Cắt vùng chọn sang lớp mới** cần có vùng chọn và không dùng được khi
**Khóa alpha** đang bật.

## Nhập ảnh

Thực hiện một trong các cách sau:

- Chọn **Tệp > Nhập ảnh thành lớp…** hoặc nhấn **Ctrl+Shift+O**.
- Chọn **Nhập ảnh thành lớp…** ở cuối bảng Lớp.
- Kéo tệp ảnh vào khung vẽ hoặc vào một hàng trong bảng Lớp.

Mỗi tệp trở thành một [lớp ảnh](/vi/docs/layers/types/) nằm trên lớp hiện tại, hoặc
nằm trên, dưới hay bên trong hàng mà bạn thả vào. Ảnh được đặt ở giữa và thu nhỏ cho
vừa khung vẽ, kèm [tay nắm đặt ảnh](/vi/docs/transform/move-transform/).
