---
title: "Bộ lọc nghệ thuật và kết cấu"
description: "Thiết lập của các bộ lọc trong danh mục Nghệ thuật và Kết cấu."
related: ["filters/adding", "filters/distort", "filters/how-filters-apply"]
---

Các bộ lọc này nằm trong **Bộ lọc > Nghệ thuật** và **Bộ lọc > Kết cấu**, và trong
danh mục **Nghệ thuật** và **Kết cấu** của bảng **Bộ lọc**. Bạn thay đổi thiết lập
của chúng trong bảng **Thuộc tính**.

![Bảng Bộ lọc hiện danh mục Nghệ thuật với bản xem trước của từng bộ lọc.](shot:filters/artistic-list)

## Giảm mức màu

Giảm mỗi kênh màu xuống còn số giá trị cách đều nhau bằng **Mức**.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Mức** | 2–256 | 6 |

## Tram

Vẽ lại ảnh thành các chấm tròn màu **Mực** trên nền **Giấy**, mỗi chấm to nhỏ theo
độ tối bên dưới chấm. **Tương phản** nới rộng chênh lệch giữa chấm nhỏ và chấm lớn.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Khoảng cách chấm** | 3–48 px | 9 px |
| **Góc** | −180° đến 180° | 15° |
| **Tương phản** | 0–100% | 30% |
| **Mực** | Màu bất kỳ | #0D1217 |
| **Giấy** | Màu bất kỳ | #F5F0DE |

## Gạch chéo

Biến ảnh thành nét gạch đan màu **Mực** trên nền **Giấy**. Vùng càng tối càng có
nhiều hướng nét, tối đa bốn hướng.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Khoảng cách** | 3–32 px | 8 px |
| **Độ rộng nét** | 0.25–4 px | 1 px |
| **Góc** | −180° đến 180° | 0° |
| **Mực** | Màu bất kỳ | #121417 |
| **Giấy** | Màu bất kỳ | #F7F2E8 |

## Ghép mảnh pixel

Chia ảnh thành các ô vuông theo **Kích thước ô**, mỗi ô được tô bằng màu ở tâm ô.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Kích thước ô** | 1–96 px | 12 px |

## Nét hội họa

Tạo cho ảnh vẻ tranh sơn dầu bằng cách dàn phẳng chi tiết trong phạm vi **Bán kính**
thành các mảng màu đều, giữ lại các cạnh. **Độ mạnh** trộn kết quả với ảnh gốc.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Bán kính** | 1–16 px | 5 px |
| **Độ mạnh** | 0–100% | 100% |

## Bút chì

Vẽ các cạnh của ảnh thành nét **Mực** trên nền **Giấy**. **Tương phản** làm nét đậm
hơn.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Bán kính** | 0–21 px, hoặc tối đa 85 px khi gõ giá trị | 2 px |
| **Tương phản** | 0–100% | 40% |
| **Mực** | Màu bất kỳ | #120F0D |
| **Giấy** | Màu bất kỳ | #F7F2E6 |

## Hạt phim

Thêm hạt thay đổi theo thời gian, rõ nhất ở sắc độ trung gian. **Hạt màu** tạo hạt
riêng cho từng kênh màu.

![Bảng Bộ lọc hiện danh mục Kết cấu với bản xem trước của từng bộ lọc.](shot:filters/texture-list)

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Mức độ** | 0–100% | 18% |
| **Kích thước** | 0.5–8 px | 1 px |
| **Hạt màu** | Bật hoặc tắt | Tắt |
| **Tốc độ** | 0–4 | 1 |
| **Tạo chuyển động** | Bật hoặc tắt | Bật |
| **Thời điểm cố định** | 0–3600 s | 0 s |

## VHS

Tạo cho ảnh vẻ băng video: các hàng pixel rung ngang tối đa bằng **Độ lệch băng**,
có viền đỏ và xanh lam, dòng quét và nhiễu. Độ rung và nhiễu thay đổi theo thời gian.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Độ lệch băng** | 0–32 px | 5 px |
| **Nhiễu** | 0–100% | 12% |
| **Dòng quét** | 0–100% | 20% |
| **Tốc độ** | 0–4 | 1 |
| **Tạo chuyển động** | Bật hoặc tắt | Bật |
| **Thời điểm cố định** | 0–3600 s | 0 s |

## CRT

Làm ảnh trông như màn hình tivi cũ: màn hình cong, có viền đỏ và xanh lam, mặt nạ
pixel RGB dạng sọc, dòng quét và một dải sáng trôi theo thời gian. Phần ảnh bị đẩy
ra ngoài màn hình cong trở nên trong suốt.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Độ cong** | 0–30% | 8% |
| **Dòng quét** | 0–100% | 35% |
| **Mặt nạ pixel** | 0–100% | 25% |
| **Độ tách** | 0–5 px | 1 px |
| **Tạo chuyển động** | Bật hoặc tắt | Bật |
| **Thời điểm cố định** | 0–3600 s | 0 s |

## Chuyển động

**Hạt phim**, **VHS** và **CRT** là bộ lọc có chuyển động, và hàng của chúng trong
bảng **Bộ lọc** có dấu chuyển động. Khi bật **Tạo chuyển động**, bộ lọc chạy liên
tục theo **Tốc độ** (CRT không có thiết lập **Tốc độ**). Tắt **Tạo chuyển động** để
dừng bộ lọc tại thời điểm đặt trong **Thời điểm cố định**.

Ảnh xuất ra hiện hiệu ứng chuyển động tại thời điểm xuất.
