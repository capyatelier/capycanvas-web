---
title: "Các loại lớp"
description: "Lớp vẽ, Đối tượng, vector, Giấy, nhóm, tô, bộ lọc và vùng chọn cùng quy tắc của từng loại."
related: ["layers/panel", "layers/vector", "layers/paper", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Bảng Lớp với một lớp vùng chọn, một nhóm, một lớp vẽ, một bộ lọc, các lớp tô, một lớp vector và Giấy.](shot:layers/types-rows)

## Lớp vẽ

Lớp vẽ giữ pixel trong không gian màu của bản vẽ. Cọ, **Tô đầy**, **Chuyển màu** và **Hình** vẽ trên loại lớp này.

Chọn **Lớp > Mới > Lớp mới** hoặc chọn **Lớp mới** ở cuối bảng Lớp. Bản vẽ mới bắt đầu với **Mực hiện tại** trên Giấy.

## Lớp Đối tượng

Lớp Đối tượng giữ nguyên kích thước, độ sâu bit và hồ sơ màu của ảnh được nhập. Nhập ảnh dưới dạng lớp, thả ảnh lên khung vẽ hoặc dán ảnh từ ứng dụng khác sẽ tạo lớp Đối tượng.

Bạn có thể di chuyển, đổi kích thước và xoay lớp Đối tượng mà không liên tục lấy mẫu lại nguồn. Chọn **Lớp > Chuyển lớp thành ảnh điểm** khi cần vẽ lên pixel hoặc dùng lệnh yêu cầu lớp vẽ. Chuyển thành ảnh điểm sẽ chuyển sang không gian màu, độ sâu bit và lưới pixel của bản vẽ.

## Lớp vector

Lớp vector giữ các đường thay vì pixel. Chọn **Lớp > Mới > Lớp vector mới**, hoặc chọn **Lớp vector mới** ở cuối bảng Lớp. Một biểu tượng đường đánh dấu hình thu nhỏ của lớp. Xem [Lớp vector](/vi/docs/layers/vector/).

## Giấy

Giấy cung cấp màu nền và kết cấu mà các cọ có **Độ mạnh kết cấu** phản ứng với. Giấy nằm dưới cùng chồng lớp và có hình thu nhỏ màu và kết cấu.

Một bản vẽ có thể chứa một Giấy. Giấy không thể có mặt nạ, trở thành lớp cắt, chuyển lên trên lớp thông thường hoặc gộp vào lớp thông thường. Xem [Giấy](/vi/docs/layers/paper/) về kết cấu, ánh sáng và thiết lập khác.

## Nhóm

Nhóm giữ các lớp trong thư mục có thể thu gọn. Chọn **Lớp > Mới > Nhóm mới**, chọn **Nhóm mới** dưới danh sách lớp hoặc chọn **Lớp > Sắp xếp > Nhóm các lớp đã chọn**.

Nhóm kết hợp nội dung trước khi hòa trộn với lớp bên dưới, trừ khi bật [Xuyên qua](/vi/docs/layers/settings/).

## Lớp tô màu

**Màu đồng nhất** và **Tô chuyển màu** phủ khung vẽ bằng nội dung được tạo. Thêm từ **Lớp > Mới**, trình đơn **Bộ lọc > Tô đầy** hoặc bảng **Bộ lọc**.

Chọn hình thu nhỏ Màu đặc để mở **Sửa màu**. Thêm mặt nạ để vẽ vùng hiện của lớp tô. Bạn có thể cắt lớp tô nhưng không thể cắt lớp khác theo nó.

## Lớp bộ lọc

Lớp bộ lọc thay đổi các lớp bên dưới thay vì giữ pixel. Hàng của nó hiện biểu tượng và tên bộ lọc. Xem [Cách áp dụng bộ lọc](/vi/docs/filters/how-filters-apply/).

## Lớp vùng chọn

Lớp vùng chọn lưu một vùng chọn. Chọn **Lớp vùng chọn mới** dưới danh sách lớp để thêm. Lớp này không có độ đục, chế độ hòa trộn, mặt nạ, cắt hoặc thiết lập tham chiếu và không thể gộp.
