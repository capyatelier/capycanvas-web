---
title: "Bộ lọc sắc độ"
description: "Thiết lập của các bộ lọc trong danh mục Sắc độ."
related: ["filters/adding", "filters/color", "filters/how-filters-apply"]
---

Các bộ lọc sắc độ nằm trong **Bộ lọc > Sắc độ** và trong danh mục **Sắc độ** của
bảng **Bộ lọc**. Bạn thay đổi thiết lập của chúng trong bảng **Thuộc tính**.

![Bảng Bộ lọc hiện danh mục Sắc độ với bản xem trước của từng bộ lọc.](shot:filters/tone-list)

## Vùng tối/Vùng sáng

Nâng vùng tối bằng **Vùng tối** và kéo vùng sáng xuống bằng **Vùng sáng**, dựa trên
độ sáng của vùng xung quanh. Ở 100%, mỗi thiết lập thay đổi phơi sáng tối đa 2 stop.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Vùng tối** | 0–100% | 0% |
| **Vùng sáng** | 0–100% | 0% |

## Đường cong

Thay đổi sắc độ bằng một đường cong cho mọi kênh ở trang **RGB** và một đường cong
cho từng kênh ở các trang **Đỏ**, **Xanh lục** và **Xanh lam**. Đường cong của từng
kênh được áp dụng trước đường cong **RGB**.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| Các trang **RGB**, **Đỏ**, **Xanh lục**, **Xanh lam** | Mỗi trang một đường cong | Đường thẳng |
| **Lấy mẫu điểm**, **Điều chỉnh theo điểm** | Đặt đường cong theo ảnh (xem [Thêm và chỉnh sửa bộ lọc](/vi/docs/filters/adding/)) | |
| **Không gian đường cong** | **RGB mã hóa**, **HDR logarit**. Chỉ hiện trong [bản vẽ HDR](/vi/docs/color-management/hdr/) hoặc khi đang đặt **HDR logarit**. | **RGB mã hóa**, hoặc **HDR logarit** trong bản vẽ HDR |
| **Khoảng HDR** | 0–15 EV, hoặc tối đa 127 EV khi gõ giá trị. Chỉ hiện với **HDR logarit**: số stop trên mức trắng SDR mà đường cong vươn tới. | 4 EV |

| Trên đồ thị | Cách làm |
| --- | --- |
| Thêm điểm | Nhấn vào một chỗ trống. Mỗi đường cong có tối đa 32 điểm. |
| Di chuyển điểm | Kéo điểm, hoặc chọn điểm rồi nhấn phím mũi tên. Giữ **Shift** để di chuyển xa hơn. Hai điểm đầu mút chỉ di chuyển lên xuống. |
| Đặt giá trị chính xác | Chọn một điểm và gõ vào **Đầu vào** và **Đầu ra** bên dưới đồ thị. |
| Xóa điểm | Nhấp đúp vào điểm, kéo điểm ra khỏi đồ thị, hoặc chọn điểm rồi nhấn **Xóa** hoặc **Backspace**. |
| Làm lại từ đầu | Chọn **Đặt lại đường cong**. |

## Mức

Đặt điểm đen, điểm trắng và sắc độ trung gian của đầu vào, rồi ánh xạ chúng vào
khoảng **Đầu ra**. Các trang **Đỏ**, **Xanh lục** và **Xanh lam** được áp dụng
trước trang **RGB**.

![Bảng Thuộc tính của Mức với biểu đồ phân bố, Tự động, Lấy mẫu điểm, và các thiết lập Đầu vào, Đầu ra và Cắt ngưỡng.](shot:filters/levels-properties)

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Tự động**, **Lấy mẫu điểm** | Đặt đầu vào theo ảnh (xem [Thêm và chỉnh sửa bộ lọc](/vi/docs/filters/adding/)) | |
| **Vùng tối**, **Vùng sáng** (dưới biểu đồ phân bố) | Đánh dấu vùng mất chi tiết trên khung vẽ | |
| **Đen** (**Đầu vào**) | 0–1, gõ được mọi giá trị. Luôn thấp hơn **Trắng** đầu vào. | 0 |
| **Trắng** (**Đầu vào**) | 0–1, gõ được mọi giá trị | 1 |
| **Sắc độ trung gian** | 0.1–10. Trên 1 làm ảnh sáng hơn. | 1 |
| **Đen** (**Đầu ra**) | 0–1, gõ được mọi giá trị | 0 |
| **Trắng** (**Đầu ra**) | 0–1, gõ được mọi giá trị | 1 |
| **Giới hạn đầu vào** | Cắt các sắc độ nằm ngoài **Đen** và **Trắng** đầu vào, trên mọi trang | Tắt |
| **Giới hạn đầu ra** | Cắt kết quả theo khoảng đầu ra, trên mọi trang | Tắt |

## Độ sáng / Tương phản

**Tương phản** giãn hoặc nén các sắc độ quanh mức xám giữa, sau đó **Độ sáng** làm
sáng hoặc làm tối mọi sắc độ cùng một lượng.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Độ sáng** | −100 đến 100 | 0 |
| **Tương phản** | −100 đến 100. 50 tăng gấp đôi độ tương phản, −50 giảm một nửa. | 0 |

## Ngưỡng

Chuyển các pixel tối hơn **Ngưỡng** thành đen, phần còn lại thành trắng.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Ngưỡng** | 0–1, gõ được mọi giá trị | 0.5 |

## Phơi sáng

Thay đổi phơi sáng theo stop. **Độ lệch** nâng hoặc hạ vùng đen.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Phơi sáng** | −10 đến 10 EV, hoặc tối đa ±126 EV khi gõ giá trị | 0 EV |
| **Độ lệch** | −0.5 đến 0.5 | 0 |
| **Gamma** | 0.1–10. Trên 1 làm sáng sắc độ trung gian. | 1 |

## Tối góc

Làm tối ảnh bên ngoài một hình elip có cùng tỷ lệ với khung vẽ, hoặc làm sáng khi
**Độ mạnh** âm. Ở ±100%, phần rìa thay đổi tối đa 2 stop.

| Thiết lập | Khoảng hoặc lựa chọn | Mặc định |
| --- | --- | --- |
| **Độ mạnh** | −100% đến 100% | 40% |
| **Bán kính** | 10–150% của nửa kích thước khung vẽ | 95% |
| **Độ mềm** | 0–100% của bán kính, dùng cho vùng chuyển mờ dần | 55% |
| **Tâm X**, **Tâm Y** (trong **Vị trí**) | 0–100% chiều rộng và chiều cao khung vẽ | 50% |
