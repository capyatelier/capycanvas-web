---
title: "Chọn theo độ sáng"
description: "Công cụ Khoảng sắc độ để chọn pixel theo độ sáng."
related: ["selections/tools", "selections/quick-mask", "color-management/hdr", "customize/toolbars"]
---

Bạn có thể chọn pixel theo độ sáng bằng công cụ **Khoảng sắc độ**. Độ sáng được đo
bằng stop so với màu trắng tham chiếu (0). Công cụ đọc ảnh hiển thị, tức mọi lớp gộp
lại, và tạo vùng chọn có biên mềm.

## Chọn Khoảng sắc độ

Thực hiện một trong các cách sau:

- Gõ “Khoảng sắc độ” vào [tìm lệnh](/vi/docs/start/command-search/).
- Trong Phác thảo, chọn **Chọn** trên thanh tiêu đề, chọn lần nữa để mở ngăn, rồi chọn **Khoảng sắc độ**.
- Nhấn phím bạn đã gán cho **Khoảng sắc độ** trong [Phím tắt](/vi/docs/input/keyboard/).
- Chọn **Khoảng sắc độ** trên thanh công cụ mà bạn đã thêm công cụ này bằng **Chèn công cụ…** (xem [Thanh công cụ và thanh tiêu đề](/vi/docs/customize/toolbars/)).

**Khoảng sắc độ** không có phím mặc định và không có nút trên thanh công cụ của Vẽ
hay Ảnh. Khi công cụ này đang được dùng, bảng Bộ công cụ liệt kê mọi công cụ vùng
chọn.

![Thiết lập Khoảng sắc độ trong ngăn Chọn của Phác thảo, với Chế độ, Sắc độ, Độ mềm và Làm mềm biên.](shot:selections/tonal-range-settings)

## Sắc độ

Chọn một nút ở hàng **Sắc độ · stop so với màu trắng tham chiếu** để chọn dải độ
sáng đó. Dải này kết hợp với vùng chọn hiện tại theo **Chế độ** (xem
[Công cụ vùng chọn](/vi/docs/selections/tools/)).

Chú thích của mỗi nút ghi tên dải tương ứng:

- **Vùng tối · dưới −5 stop**
- **Vùng tối trung gian · từ −5 đến −3.5 stop**
- **Sắc độ trung gian · từ −3.5 đến −1.5 stop**
- **Vùng sáng trung gian · từ −1.5 đến −0.5 stop**
- **Vùng sáng · trên −0.5 stop**
- **Vùng sáng HDR · trên +1 stop**, chỉ có trong [bản vẽ HDR](/vi/docs/color-management/hdr/)
- **Tùy chỉnh · đặt hoặc lấy mẫu khoảng theo stop**

Khi một nút sắc độ đang được chọn, vùng chọn cập nhật theo thay đổi của **Độ mềm**,
**Làm mềm biên**, **Từ** và **Đến**. Chọn công cụ khác hoặc **Chế độ** khác sẽ bỏ
chọn nút sắc độ.

## Khoảng tùy chỉnh

Bạn có thể tự đặt dải độ sáng, hoặc lấy mẫu dải từ khung vẽ.

Thực hiện một trong các cách sau:

- Chọn **Tùy chỉnh · đặt hoặc lấy mẫu khoảng theo stop** rồi đặt **Từ** và **Đến**, tính bằng stop. Mặc định là −3.5 và −1.5.
- Kéo ngang qua một vùng trên khung vẽ để dùng khoảng độ sáng của vùng đó.
- Nhấp vào khung vẽ để đặt tâm dải tại độ sáng ở điểm đó. Dải giữ độ rộng Tùy chỉnh hiện tại, hoặc rộng 1 stop khi trước đó đang chọn một sắc độ khác.

Lấy mẫu trên khung vẽ sẽ chuyển sắc độ sang Tùy chỉnh. Trong trình chỉnh sửa web,
**Từ** và **Đến** dùng chung một điều khiển khoảng.

![Thiết lập Khoảng sắc độ khi chọn Tùy chỉnh, với khoảng tính bằng stop.](shot:selections/tonal-range-custom)

## Độ mềm

Nới rộng phần chuyển mềm ở hai đầu dải, từ 0 đến 200%. Mặc định là 100%.

## Làm mềm biên

Làm mềm biên vùng chọn, tối đa 100 px.

## Chế độ và phím giữ

**Khoảng sắc độ** có cùng các nút **Chế độ** như các công cụ vùng chọn khác, và
không có **Khử răng cưa**. Giữ **Shift**, **Alt** hoặc **Shift+Alt** khi nhấp hoặc
kéo để cộng, trừ hoặc lấy phần giao.

## Mặt nạ nhanh và lớp vùng chọn

**Khoảng sắc độ** dùng được trong [Mặt nạ nhanh](/vi/docs/selections/quick-mask/)
và khi bạn sửa [lớp vùng chọn](/vi/docs/selections/selection-layers/), và khi đó
công cụ thay đổi mặt nạ tương ứng. Thanh khung vẽ của công cụ là
[thanh vùng chọn](/vi/docs/selections/working/), ở cạnh dưới khung vẽ.
