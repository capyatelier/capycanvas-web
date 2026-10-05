---
title: "Bộ lọc màu"
description: "Thiết lập của các bộ lọc trong danh mục Màu."
related: ["filters/adding", "filters/tone", "filters/how-filters-apply"]
---

Các bộ lọc màu nằm trong **Bộ lọc > Màu** và trong danh mục **Màu** của bảng
**Bộ lọc**. Bạn thay đổi thiết lập của chúng trong bảng **Thuộc tính**.

![Bảng Bộ lọc hiện danh mục Màu với bản xem trước của từng bộ lọc.](shot:filters/color-list)

## Sắc màu / Độ bão hòa

Dịch chuyển sắc màu, độ bão hòa và độ sáng của toàn bộ ảnh ở trang **Toàn bộ**,
hoặc của một dải màu ở các trang từ **Đỏ** đến **Đỏ tía**. **Tô màu** gán cho mọi
pixel cùng một sắc màu và độ bão hòa, giữ nguyên độ sáng của pixel.

![Bảng Thuộc tính của Sắc màu / Độ bão hòa ở trang Đỏ.](shot:filters/hue-saturation-properties)

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Sắc màu** | −180° đến 180°, hoặc 0–360° khi bật **Tô màu** | 0° |
| **Độ bão hòa** | −100% đến 100%, hoặc 0–100% khi bật **Tô màu** | 0%, hoặc 25% khi bật **Tô màu** |
| **Độ sáng cảm nhận** | −100% đến 100% | 0% |
| **Tâm** | 0–360° theo sắc màu Oklab. Chỉ có ở các trang màu. | Đỏ 30°, Vàng 110°, Xanh lục 145°, Xanh lơ 195°, Xanh lam 265°, Đỏ tía 330° |
| **Độ rộng** | 0–180°. Chỉ có ở các trang màu. | 30° |
| **Làm mềm biên** | 0–90°. Chỉ có ở các trang màu. | 30° |
| **Tô màu** | Bật hoặc tắt. Khi bật, chỉ còn trang **Toàn bộ**. | Tắt |

## Đảo màu

Đảo ngược mọi kênh màu. Bộ lọc này không có thiết lập.

## Khử bão hòa

Thay mỗi màu bằng màu xám có cùng độ sáng HSL. Bộ lọc này không có thiết lập.

## Bộ lọc ảnh

Phủ ảnh về phía **Màu** theo mức **Mật độ**.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Màu** | Màu bất kỳ | #FFB873 |
| **Mật độ** | 0–100% | 25% |
| **Giữ độ sáng** | Bật hoặc tắt | Bật |

## Màu chọn lọc

Thay đổi lượng xanh lơ, đỏ tía, vàng và đen trong một dải màu ở mỗi trang. Các trang
từ **Đỏ** đến **Đỏ tía** tác động lên màu bão hòa, còn **Màu trắng**,
**Màu trung tính** và **Màu đen** tác động lên các sắc độ gần xám.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Xanh lơ** | −100% đến 100% | 0% |
| **Đỏ tía** | −100% đến 100% | 0% |
| **Vàng** | −100% đến 100% | 0% |
| **Đen** | −100% đến 100% | 0% |
| **Phương pháp** | **Tương đối** nhân mỗi thay đổi theo lượng mực đã có trong màu. **Tuyệt đối** cộng thẳng thay đổi đó. Áp dụng cho mọi trang. | **Tương đối** |

## Bộ trộn kênh

Tạo từng kênh đầu ra ở các trang **Đỏ**, **Xanh lục** và **Xanh lam** từ hỗn hợp
các kênh đỏ, xanh lục và xanh lam đầu vào, cộng thêm **Hằng số**. Khi bật
**Đơn sắc**, chỉ còn trang **Xám**, và hỗn hợp ở trang này tạo ra ảnh xám.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Đỏ** | −200% đến 200% | 100% ở trang **Đỏ**, 21.26% ở **Xám**, còn lại 0% |
| **Xanh lục** | −200% đến 200% | 100% ở trang **Xanh lục**, 71.52% ở **Xám**, còn lại 0% |
| **Xanh lam** | −200% đến 200% | 100% ở trang **Xanh lam**, 7.22% ở **Xám**, còn lại 0% |
| **Hằng số** | −100% đến 100% | 0% |
| **Đơn sắc** | Bật hoặc tắt | Tắt |

## Tra cứu màu (LUT)

Áp dụng một bảng tra cứu từ trình đơn phong cách (trình đơn hiện phong cách đang
dùng, ví dụ **Ấm**) lên các màu, trộn với ảnh gốc theo **Cường độ**. Để dùng LUT
của riêng bạn, chọn **Nhập LUT…** cạnh trình đơn phong cách và mở một tệp 3D
`.cube` có dung lượng tối đa 16 MB.

![Bảng Thuộc tính của Tra cứu màu (LUT) với trình đơn phong cách và Nhập LUT….](shot:filters/color-lookup)

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| Trình đơn phong cách | **Gốc** (không thay đổi), **Ấm**, **Lạnh**, **Đơn sắc**, hoặc một LUT đã nhập, mang tên của LUT đó. LUT đã nhập được lưu trong bản vẽ. | **Gốc** |
| **Không gian màu LUT** | **sRGB**, **Display P3**, **Adobe RGB (1998)**, **ProPhoto RGB**: không gian màu mà LUT đã nhập yêu cầu. Bị ẩn với **Gốc** và các phong cách có sẵn. | **sRGB** |
| **Cường độ** | 0–100% | 100% |

## Cân bằng màu

Dịch chuyển màu riêng ở các trang **Vùng tối**, **Sắc độ trung gian** và
**Vùng sáng**. Giá trị dương đẩy màu về phía màu thứ hai trong nhãn của thanh trượt.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Xanh lơ — Đỏ** | −100 đến 100 | 0 |
| **Đỏ tía — Xanh lục** | −100 đến 100 | 0 |
| **Vàng — Xanh lam** | −100 đến 100 | 0 |
| **Giữ độ sáng** | Bật hoặc tắt, cho mọi trang | Bật |

## Độ rực màu

**Độ rực màu** tăng độ bão hòa của màu trầm nhiều hơn màu đã bão hòa.
**Độ bão hòa** thay đổi mọi màu như nhau.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Độ rực màu** | −100% đến 100% | 0% |
| **Độ bão hòa** | −100% đến 100% | 0% |
| **Giữ màu da** | Bật hoặc tắt. Hạn chế **Độ rực màu** dương trên sắc cam và sắc màu da. | Bật |

## Đen trắng

Chuyển ảnh sang thang xám, mỗi sắc màu có một thanh trượt quy định độ sáng sau khi
chuyển. **Ám màu** phủ lên kết quả bằng **Màu phủ**.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Đỏ** | −100% đến 200% | 40% |
| **Vàng** | −100% đến 200% | 60% |
| **Xanh lục** | −100% đến 200% | 40% |
| **Xanh lơ** | −100% đến 200% | 60% |
| **Xanh lam** | −100% đến 200% | 20% |
| **Đỏ tía** | −100% đến 200% | 80% |
| **Ám màu** | Bật hoặc tắt | Tắt |
| **Màu phủ** | Màu bất kỳ | #BF874C |

## Ánh xạ chuyển màu

Ánh xạ các sắc độ của ảnh lên **Chuyển màu**, từ điểm màu bên trái cho sắc độ tối
nhất đến điểm màu bên phải cho sắc độ sáng nhất. **Mức độ** trộn kết quả với ảnh
gốc.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Chuyển màu** | Dải chuyển màu bất kỳ, sửa như trong công cụ [Chuyển màu](/vi/docs/drawing/gradient/) | Đen sang trắng, nội suy **Oklab** |
| **Mức độ** | 0–100% | 100% |

## Cân bằng trắng

Làm ấm hoặc làm lạnh ảnh bằng **Nhiệt độ**, và đẩy ảnh về phía đỏ tía hoặc xanh lục
bằng **Ám màu**. **Chọn điểm trung tính** ở đầu bảng **Thuộc tính** đặt cả hai
thiết lập để điểm bạn nhấp trên khung vẽ trở thành trung tính.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Nhiệt độ** | −100 đến 100, hoặc tối đa ±1000 khi gõ giá trị. Giá trị dương cho màu ấm hơn. | 0 |
| **Ám màu** | −100 đến 100, hoặc tối đa ±800 khi gõ giá trị. Giá trị dương ngả đỏ tía hơn. | 0 |
| **Giữ độ sáng** | Bật hoặc tắt | Bật |

## Tách sắc độ

Phủ màu **Vùng tối** lên vùng tối và màu **Vùng sáng** lên vùng sáng, giữ nguyên
độ sáng.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Vùng tối** | Màu bất kỳ | #295494 |
| **Vùng sáng** | Màu bất kỳ | #F5AD57 |
| **Cân bằng** | −100 đến 100. Dời điểm giao nhau của hai màu phủ. Giá trị dương mở rộng phần ảnh mang màu **Vùng tối**. | 0 |
| **Độ mạnh** | 0–100% | 30% |

## Đảo sáng

Đảo ngược từng kênh màu tại những chỗ kênh đó sáng hơn **Ngưỡng**. **Độ mạnh** trộn
kết quả với ảnh gốc.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Ngưỡng** | 0–100% | 50% |
| **Độ mạnh** | 0–100% | 100% |

## Óng ánh

Thêm hiệu ứng cầu vồng màng mỏng chạy theo độ sáng của ảnh và thay đổi theo thời
gian. Ảnh xuất ra mang màu tại thời điểm xuất.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Độ mạnh** | 0–100% | 55% |
| **Kích thước màng** | 8–240 px | 64 px |
| **Tốc độ** | 0–4 | 0.3 |
| **Tạo chuyển động** | Bật hoặc tắt. Khi bật, màu thay đổi liên tục theo **Tốc độ**. | Bật |
| **Thời điểm cố định** | 0–3600 s: thời điểm được hiển thị khi tắt **Tạo chuyển động** | 0 s |
