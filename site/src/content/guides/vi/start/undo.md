---
title: "Hoàn tác và làm lại"
description: "Hoàn tác và làm lại các thay đổi trên bản vẽ, và lịch sử riêng cho các thay đổi bố cục."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

Bạn có thể hoàn tác các thay đổi trên bản vẽ từng bước một, và làm lại các bước đã
hoàn tác. Mỗi bản vẽ đang mở có lịch sử riêng.

![Các nút Hoàn tác và Làm lại trên Thanh lệnh.](shot:start/undo-commands)

## Hoàn tác

Thực hiện một trong các cách sau:

- Chọn **Chỉnh sửa > Hoàn tác**.
- Nhấn **Ctrl+Z**.
- Chọn **Hoàn tác** trên Thanh lệnh. Trong Phác thảo, **Hoàn tác** nằm trên thanh ở cạnh trái màn hình.
- Chạm hai ngón tay lên khung vẽ.

## Làm lại

Thực hiện một trong các cách sau:

- Chọn **Chỉnh sửa > Làm lại**.
- Nhấn **Ctrl+Shift+Z** hoặc **Ctrl+Y**.
- Chọn **Làm lại** trên Thanh lệnh, hoặc trên thanh ở cạnh trái trong Phác thảo.
- Chạm ba ngón tay lên khung vẽ.

Một thay đổi mới sau khi Hoàn tác sẽ xóa các bước bạn có thể làm lại.

## Những gì được tính là một bước

Mỗi nét vẽ, lần tô, thay đổi bộ lọc, biến đổi, cắt xén, thay đổi kích thước khung vẽ
và thay đổi vùng chọn là một bước, mỗi thay đổi trên một lớp cũng vậy. Thay đổi khung
nhìn, công cụ, cọ, màu và bố cục không phải là bước.

Khi bạn đang đặt ảnh, biến đổi một lớp hoặc dùng công cụ Cắt xén, Hoàn tác sẽ hủy
thao tác đó thay vì lùi lại một bước.

## Độ dài lịch sử

Mỗi bản vẽ giữ tối đa 256 bước. Các bước cũ nhất bị bỏ trước.

## Lưu và mở lại

Lưu không xóa lịch sử. Bản vẽ bạn mở từ tệp `.capy` bắt đầu với lịch sử trống, còn
các bản vẽ được mở lại khi bạn khởi động lại Capy Canvas vẫn giữ các bước hoàn tác.

## Thay đổi bố cục

Thay đổi đối với bảng, thanh công cụ, thanh tiêu đề và không gian làm việc có lịch sử
riêng. **Chỉnh sửa > Hoàn tác** không bao giờ hoàn tác thay đổi bố cục.

Thực hiện một trong các cách sau:

- Chọn **Cửa sổ > Hoàn tác thay đổi bố cục** hoặc **Cửa sổ > Làm lại thay đổi bố cục**.
- Nhấn **Ctrl+Alt+Z** hoặc **Ctrl+Alt+Shift+Z**.

Mỗi không gian làm việc giữ lịch sử bố cục riêng, và lịch sử này vẫn còn sau khi khởi
động lại. **Cửa sổ > Không gian làm việc > Lịch sử bố cục…** liệt kê các bố cục trước
đó của không gian làm việc hiện tại.
