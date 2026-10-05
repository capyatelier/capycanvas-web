---
title: "Mặt nạ"
description: "Ẩn một phần lớp bằng mặt nạ, và mọi lệnh thay đổi mặt nạ."
related: ["layers/panel", "selections/working", "filters/how-filters-apply", "layers/merging"]
---

Bạn có thể ẩn một phần lớp bằng mặt nạ. Vùng được vẽ trên mặt nạ hiện lớp, còn vùng
trống ẩn lớp. Lớp vẽ, lớp ảnh, nhóm, lớp tô màu và bộ lọc đều có thể có mặt nạ.

## Thêm mặt nạ

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mặt nạ > Thêm mặt nạ**.
- Chọn **Thêm mặt nạ** ở cuối bảng Lớp.

![Hàng của Ribbon, với đường viền quanh hình thu nhỏ mặt nạ.](shot:layers/masks-row)

Hình thu nhỏ mặt nạ xuất hiện bên phải hình thu nhỏ của lớp, với đường viền cho biết
cọ đang vẽ lên mặt nạ. Mặt nạ mới hiện toàn bộ lớp. Nếu đang có vùng chọn, mặt nạ
chỉ hiện vùng đã chọn, và vùng chọn bị bỏ.

Nếu lớp đã có mặt nạ, **Thêm mặt nạ** chọn mặt nạ đó để vẽ. Bạn không thể thêm mặt
nạ cho lớp vùng chọn hoặc lớp đã khóa.

## Vẽ lên mặt nạ

Chọn hình thu nhỏ mặt nạ để vẽ lên mặt nạ. Để vẽ lại lên lớp, chọn hình thu nhỏ của
lớp hoặc nhấn **Escape**.

> **Lưu ý:** Trên mặt nạ, cọ bỏ qua màu vẽ. Cọ làm lộ lớp, còn **Tẩy** ẩn lớp.

Trên mặt nạ đã đảo ngược, cọ và **Tẩy** đổi vai trò cho nhau. Nét vẽ trên mặt nạ là
nét khô, không trộn màu, không loang và không có kết cấu.

## Thanh sửa mặt nạ

Khi bạn vẽ lên mặt nạ, một thanh ghi “Đang sửa mặt nạ *lớp*” xuất hiện ở cuối khung
vẽ.

![Thanh sửa mặt nạ với Đảo ngược, Tắt, Áp dụng mặt nạ, Thêm và Sửa nội dung.](shot:layers/masks-bar)

- **Đảo ngược**
- **Tắt** tắt mặt nạ, và nút đổi thành **Bật**.
- **Áp dụng mặt nạ** xóa các pixel bị mặt nạ ẩn, rồi bỏ mặt nạ.
- **Thêm** chứa trình đơn **Lớp** và **Hiện thanh thao tác khung vẽ**. Tắt **Hiện thanh thao tác khung vẽ** để ẩn thanh này.
- **Sửa nội dung** quay lại vẽ lên lớp.

## Mặt nạ từ vùng chọn

Bạn có thể tạo mặt nạ từ vùng chọn hiện tại.

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mặt nạ > Mặt nạ: hiện vùng chọn** hoặc **Mặt nạ: ẩn vùng chọn**. Trên lớp đã có mặt nạ, các mục này ghi **Thay mặt nạ: hiện vùng chọn** và **Thay mặt nạ: ẩn vùng chọn**.
- Chọn **Mặt nạ** trên [thanh vùng chọn](/vi/docs/selections/working/) trên khung vẽ. Mặt nạ mới hiện vùng đã chọn và thay mọi mặt nạ lớp đang có.

Bộ lọc hoặc lớp tô màu được thêm khi đang có vùng chọn sẽ nhận mặt nạ từ vùng chọn.
**Dán vào** tạo một lớp mới có mặt nạ theo vùng chọn (xem
[Sao chép và dán](/vi/docs/transform/clipboard/)).

## Vùng chọn từ mặt nạ

Bạn có thể nạp mặt nạ thành vùng chọn.

Thực hiện một trong các cách sau:

- Chọn **Chọn > Từ mặt nạ lớp** rồi chọn **Nạp mặt nạ thành vùng chọn**, **Thêm mặt nạ vào vùng chọn**, **Trừ mặt nạ khỏi vùng chọn** hoặc **Giao với mặt nạ**.
- Chọn các mục này từ **Vùng chọn pixel** trong trình đơn mặt nạ.
- **Ctrl**+nhấp vào hình thu nhỏ mặt nạ. Giữ thêm **Shift** để cộng vào vùng chọn, **Alt** để trừ khỏi vùng chọn, hoặc **Shift+Alt** để lấy phần giao với vùng chọn.

## Trình đơn mặt nạ

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mặt nạ** (mục đầu tiên ghi **Sửa mặt nạ**).
- Nhấp chuột phải hoặc giữ hình thu nhỏ mặt nạ.
- Khi bạn đang vẽ lên mặt nạ, mở trình đơn **Lớp** hoặc chọn **Thao tác lớp** ở cuối bảng Lớp.

Trên lớp không có mặt nạ, **Lớp > Mặt nạ** chỉ có **Thêm mặt nạ**,
**Mặt nạ: hiện vùng chọn**, **Mặt nạ: ẩn vùng chọn** và **Dán mặt nạ**.

![Trình đơn mặt nạ của Ribbon.](shot:layers/masks-menu)

| Mục | Chức năng |
| --- | --- |
| **Sửa nội dung lớp** | Quay lại vẽ lên lớp. |
| **Hiện vùng mặt nạ** | Hiện mặt nạ trên khung vẽ và chọn mặt nạ để vẽ. |
| **Bật mặt nạ** | Bật hoặc tắt mặt nạ mà không thay đổi mặt nạ. Mặt nạ đang tắt có hình thu nhỏ bị mờ. |
| **Liên kết mặt nạ với lớp** | Khi bật, mặt nạ di chuyển cùng lớp. Khi tắt, **Di chuyển lớp / mặt nạ** di chuyển lớp hoặc mặt nạ, tùy bạn đang vẽ lên phần nào. Nút liên kết giữa hai hình thu nhỏ có cùng chức năng. |
| **Thay mặt nạ: hiện vùng chọn**, **Thay mặt nạ: ẩn vùng chọn** | Thay mặt nạ bằng vùng chọn. |
| **Sao chép mặt nạ** | Sao chép mặt nạ để dùng với **Thay bằng mặt nạ đã sao chép** trên lớp khác, hoặc **Dán mặt nạ** trên lớp chưa có mặt nạ. |
| **Đảo mặt nạ** | Đổi chỗ vùng hiện và vùng ẩn. |
| **Hiện tất cả**, **Ẩn tất cả** | Cho mặt nạ hiện hoặc ẩn toàn bộ lớp, và tắt chế độ đảo ngược. |
| **Áp dụng mặt nạ vào lớp** | Xóa các pixel bị mặt nạ ẩn, rồi bỏ mặt nạ. |
| **Xóa mặt nạ** | Bỏ mặt nạ. Pixel của lớp không thay đổi. |
| **Vùng chọn pixel** | Nạp mặt nạ thành vùng chọn. |

Mọi mục, trừ **Sửa nội dung lớp**, **Hiện vùng mặt nạ** và **Sao chép mặt nạ**, đều
cần lớp chưa khóa.

## Áp dụng mặt nạ

Thực hiện một trong các cách sau:

- Chọn **Lớp > Mặt nạ > Áp dụng mặt nạ vào lớp**.
- Chọn **Áp dụng mặt nạ** trên thanh sửa mặt nạ.

**Áp dụng mặt nạ vào lớp** chỉ dùng được với lớp vẽ, và mặt nạ phải đang bật. Trên
lớp đã bị làm méo hoặc uốn cong, hãy chọn **Áp dụng biến đổi vào pixel** trước. Để
áp dụng mặt nạ của nhóm, dùng **Gộp nhóm** (xem [Gộp lớp](/vi/docs/layers/merging/)).

Trên lớp ảnh, **Trở về ảnh gốc** khôi phục phần mà mặt nạ đã áp dụng xóa đi.

## Mặt nạ trên lớp bộ lọc và lớp tô màu

Mặt nạ của bộ lọc quyết định bộ lọc tác động ở đâu. Khi đang chọn bộ lọc hoặc lớp
tô màu, cọ luôn vẽ lên mặt nạ của lớp đó. **Tô đầy**, **Chuyển màu** và các công cụ tạo
nét vẽ khác không dùng được trên mặt nạ của bộ lọc. Muốn vẽ lên lớp tô màu thì cần có mặt
nạ.
