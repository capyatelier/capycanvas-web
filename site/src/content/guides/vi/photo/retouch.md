---
title: "Retouch"
description: "Giai đoạn 2 của hướng dẫn chỉnh sửa ảnh: xóa bụi và một vết nhòe bằng các cọ phục hồi trên một lớp phía trên ảnh."
related: ["retouch/clone-heal", "layers/settings", "layers/working"]
---

Giai đoạn này tạo lớp *Retouch* che bụi và một vết nhòe trong ảnh. Lớp ảnh không
thay đổi.

## 1. Thêm lớp chỉnh sửa ảnh

1. Chọn **Lớp mới** ở cuối bảng Lớp và đổi tên lớp mới thành *Retouch*.
2. Chọn **Lớp > Thiết lập lớp > Dùng lớp bên dưới làm tham chiếu** ([Thiết lập lớp](/vi/docs/layers/settings/)).

Lớp ảnh trở thành lớp tham chiếu, và biểu tượng ngọn hải đăng xuất hiện cạnh biểu
tượng mắt trên hàng của lớp. Theo mặc định, các công cụ phục hồi sao chép từ các
lớp tham chiếu và vẽ lên *Retouch*.

![Bảng Lớp với Retouch phía trên lớp terrarium, lớp này có biểu tượng tham chiếu.](shot:photo/retouch-layers)

## 2. Xóa bụi

Khi bạn nhấc bút, **Cọ phục hồi điểm** thay chỗ vừa vẽ đè bằng kết cấu từ vùng lân
cận giống nhất ([Sao chép và phục hồi](/vi/docs/retouch/clone-heal/)). Trong ví dụ,
bụi được xóa khỏi mặt kính ở đáy bể.

1. Chọn **Hiển thị > Pixel thực**, hoặc nhấn **Ctrl+1**, để xem ảnh ở 100%.
2. Chọn **Cọ phục hồi điểm** trên Thanh công cụ vẽ, hoặc nhấn **S** cho đến khi công cụ này được chọn.
3. Nhấn **]** cho đến khi cọ lớn hơn các hạt bụi.
4. Vẽ đè lên từng hạt bụi.

## 3. Xóa vết nhòe

**Cọ phục hồi** vẽ bằng pixel sao chép từ nguồn, rồi khớp các pixel đó với màu và
độ sáng quanh nét vẽ.

1. Nhấp chuột phải vào **Cọ phục hồi điểm** trên Thanh công cụ vẽ, hoặc giữ nút đó, rồi chọn **Cọ phục hồi**.
2. Giữ **Alt** và nhấp vào một vùng sạch cạnh vết nhòe, hoặc chọn **Đặt nguồn** trong **Tùy chọn công cụ** rồi nhấp vào vùng sạch đó.
3. Vẽ đè lên vết nhòe.

![Vùng tròn nguồn của Cọ phục hồi trên mặt kính, với thanh tùy chọn nguồn.](shot:photo/retouch-disc-bar)

Một vùng tròn trên khung vẽ đánh dấu nguồn. Kéo vùng tròn để di chuyển nguồn, hoặc
chọn vùng tròn để hiện thanh của nó.

Để so sánh với ảnh gốc, ẩn *Retouch*.

Giai đoạn tiếp theo: [Chỉnh ảnh và xuất ảnh](/vi/docs/photo/adjust/).
