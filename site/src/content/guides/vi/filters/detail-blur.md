---
title: "Bộ lọc chi tiết và làm mờ"
description: "Thiết lập của các bộ lọc trong danh mục Chi tiết và Làm mờ."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Các bộ lọc này nằm trong **Bộ lọc > Chi tiết** và **Bộ lọc > Làm mờ**, và trong
danh mục **Chi tiết** và **Làm mờ** của bảng **Bộ lọc**. Bạn thay đổi thiết lập
của chúng trong bảng **Thuộc tính**.

![Bảng Bộ lọc hiện danh mục Chi tiết và Làm mờ với bản xem trước của từng bộ lọc.](shot:filters/detail-blur-list)

## Độ rõ nét

Tăng tương phản cục bộ khi **Mức độ** dương, hoặc giảm khi âm, tối đa 2 stop.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Mức độ** | −100% đến 100% | 0% |

## Khử sương

**Mức độ** dương khử sương mù, còn giá trị âm thêm sương mù. Khi khử sương, các vùng
gần trắng và gần xám được bảo vệ.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Mức độ** | −100% đến 100% | 0% |

## Tăng nét bằng mặt nạ

Làm sắc nét các cạnh theo **Mức độ**. Những chênh lệch nhỏ hơn **Ngưỡng** được giữ
nguyên.

![Bảng Thuộc tính của Tăng nét bằng mặt nạ với Bán kính, Mức độ và Ngưỡng.](shot:filters/unsharp-mask-properties)

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Bán kính** | 0–21 px, hoặc tối đa 85 px khi gõ giá trị | 1.5 px |
| **Mức độ** | 0–300% | 100% |
| **Ngưỡng** | 0–100% | 2% |

## Thông cao

Chỉ giữ lại chi tiết nhỏ hơn **Bán kính**, trên nền xám 50%.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Bán kính** | 0–21 px, hoặc tối đa 85 px khi gõ giá trị | 4 px |
| **Độ mạnh** | 0–300% | 100% |

## Làm mịn giữ biên

Làm mịn nhiễu và giữ các cạnh sắc nét. **Độ mạnh** càng cao thì bộ lọc càng làm mịn
qua những chênh lệch màu lớn hơn.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Độ mạnh** | 0–100% | 25% |

## Dò biên

Hiện các cạnh của ảnh thành nét trắng trên nền đen, hoặc nét tối trên nền trắng khi
bật **Đảo ngược**.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Chiều rộng** | 0.5–8 px | 1 px |
| **Độ mạnh** | 0–400% | 100% |
| **Đảo ngược** | Bật hoặc tắt | Tắt |

## Chạm nổi

Biến ảnh thành hình chạm nổi màu xám. **Góc** đặt hướng của phần nổi.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Chiều rộng** | 0.5–8 px | 1.5 px |
| **Góc** | −180° đến 180° | 135° |
| **Độ sâu** | 0–400% | 100% |

## Làm mờ Gaussian

Làm mờ ảnh đều khắp. Các cạnh giáp vùng trong suốt bị làm mờ lan ra ngoài.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Bán kính** | 0–21 px, hoặc tối đa 85 px khi gõ giá trị | 3 px |

## Làm mờ chuyển động

Làm mờ dọc theo một đường thẳng dài bằng **Khoảng cách**, theo hướng của **Góc**.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Khoảng cách** | 0–64 px | 12 px |
| **Góc** | −180° đến 180° | 0° |

## Quầng sáng

Thêm quầng sáng quanh các sắc độ sáng hơn **Ngưỡng**. Quầng sáng có thể lan vào vùng
trong suốt.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Bán kính** | 0–21 px, hoặc tối đa 85 px khi gõ giá trị | 6 px |
| **Độ mạnh** | 0–200% | 60% |
| **Ngưỡng** | 0–100% | 60% |

## Lấy nét mềm

Làm dịu ảnh bằng cách phủ lên ảnh một bản làm mờ theo **Bán kính**, ở chế độ hòa
trộn Làm sáng, với độ đục bằng **Độ mạnh**.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Bán kính** | 0–21 px, hoặc tối đa 85 px khi gõ giá trị | 5 px |
| **Độ mạnh** | 0–100% | 40% |
