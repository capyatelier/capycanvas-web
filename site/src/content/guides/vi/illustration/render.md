---
title: "Render"
description: "Giai đoạn 4 của hướng dẫn vẽ minh họa: đổ bóng và kết cấu trên các lớp cắt theo từng màu nền, và xuất PNG."
related: ["layers/settings", "drawing/brush-tools", "files/open-save", "files/export"]
---

Giai đoạn này tạo phần đổ bóng của mỗi hình trên các lớp cắt theo màu nền của hình,
và xuất bức tranh ra PNG.

## 1. Thêm lớp cắt

Chọn *Ribbon*, rồi chọn **Lớp > Mới > Lớp cắt mới**, hoặc chọn
**Mới > Lớp cắt mới** trong trình đơn của hàng
([Thiết lập lớp](/vi/docs/layers/settings/)). Đổi tên lớp mới thành
*Ribbon shading*.

![Trình đơn lớp với Mới đang mở và Lớp cắt mới bên trong.](shot:illustration/render-new-menu)

*Ribbon shading* nằm ngay trên *Ribbon*, và một thanh dọc bên trái các hình thu nhỏ
đánh dấu lớp cắt. Lớp cắt đi theo mặt nạ của *Ribbon*, không theo màu xanh mòng két
phủ kín cả lớp.

## 2. Đổ bóng dải ruy băng

Chọn **Cọ vẽ** trên Thanh công cụ vẽ và **Màu nước phủ loãng** trong Bộ công cụ
([Công cụ cọ](/vi/docs/drawing/brush-tools/)). Đặt **Độ đục** trong bảng
**Công cụ** là 65%, rồi vẽ vùng tối ở các chỗ uốn của dải ruy băng bằng màu xanh
lam đậm. Sau đó thêm điểm nhấn xanh sage bằng cọ **Cọ vẽ**.

## 3. Thêm lớp kết cấu

Khi *Ribbon shading* đang được chọn, chọn lại **Lớp > Mới > Lớp cắt mới** và đổi
tên lớp thành *Ribbon texture*. Lớp này nằm trên *Ribbon shading*, trong cùng nhóm
cắt. Chọn **Bút chì** và cọ **Bút chì**, rồi vẽ các nét gạch và vùng sáng màu kem.

## 4. Đổ bóng hình tròn và khối

Chọn *Disc*, thêm một lớp cắt tên *Disc shading*, rồi đổ bóng nửa dưới hình tròn
bằng **Bút phun** màu đất nung. Thêm một điểm sáng màu kem ở góc trên bên trái.

Làm tương tự để thêm *Block shading* trên *Block*: màu xanh lam đậm dọc cạnh phải
và cạnh dưới bằng cọ **Cọ vẽ**, sau đó là nét gạch màu kem bằng cọ **Bút chì**.

![Bảng Lớp với Ribbon texture và Ribbon shading cắt theo Ribbon, còn Disc shading và Block shading cắt theo lớp nền của chúng.](shot:illustration/render-layers)

Danh sách lớp lúc này khớp với các lớp hoàn chỉnh trong trang
[Giới thiệu](/vi/docs/illustration/).

## 5. Lưu và xuất

Chọn **Tệp > Lưu**, hoặc nhấn **Ctrl+S**, rồi lưu bản vẽ thành tệp `.capy`
([Mở và lưu](/vi/docs/files/open-save/)). Để xuất PNG:

1. Chọn **Tệp > Xuất…**, hoặc nhấn **Ctrl+Shift+E**.
2. Giữ **Đích** ở **Web / Chia sẻ**, và đặt **Định dạng** là **Ảnh PNG**.
3. Chọn **Chọn tệp…**, rồi chọn thư mục và tên.

Sau lần xuất đầu tiên, **Tệp > Xuất lại** ghi cùng tệp đó với cùng thiết lập mà
không mở hộp thoại ([Xuất ảnh](/vi/docs/files/export/)).
