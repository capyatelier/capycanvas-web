---
title: "Công cụ tô màu"
description: "Tô màu hiện tại vào vùng, hình vẽ tự do và vùng khép kín trên một lớp."
related: ["drawing/gradient", "layers/settings", "selections/working", "drawing/brush-tools"]
---

Bạn có thể tô màu hiện tại vào các phần của lớp đang chọn bằng **Tô đầy**, **Tô vùng
chọn tự do** và **Khoanh và tô**. Mỗi lần tô là một bước hoàn tác, và thao tác tô tuân theo
**Khóa alpha**.

Thao tác tô chỉ vẽ lên nội dung của lớp, không bao giờ vẽ lên mặt nạ lớp hay mặt nạ
của bộ lọc. Trên lớp mà cọ không vẽ được, thao tác tô không vẽ gì và một thông báo
nêu lý do ([Công cụ cọ](/vi/docs/drawing/brush-tools/)).

## Chọn công cụ tô màu

Thực hiện một trong các cách sau:

- Nhấn **F** để chọn Tô đầy. Hai công cụ còn lại không có phím mặc định.
- Trong Vẽ, chọn **Tô đầy** trên Thanh công cụ vẽ. Nhấp chuột phải hoặc giữ nút để chọn công cụ tô màu khác.
- Trong Ảnh, nhấp chuột phải hoặc giữ nút chuyển màu và tô màu nằm sau **Biến dạng** trên Thanh công cụ vẽ, rồi chọn công cụ.
- Khi một công cụ tô màu đang hoạt động, chọn **Tô đầy** hoặc **Tô vùng chọn tự do** trong bảng **Bộ công cụ**. **Khoanh và tô** nằm dưới **Tô vùng chọn tự do**.
- Tìm lệnh theo tên công cụ.

Phác thảo không có nút tô màu.

## Tô đầy

Bạn có thể tô một vùng liền mạch có màu tương tự bằng cách nhấp vào vùng đó.
**Nguồn** đặt những pixel mà Tô đầy dựa vào để tìm vùng.

- Vùng chọn đang hoạt động giới hạn phần tô trong vùng chọn.
- Trong Mặt nạ nhanh hoặc trên lớp vùng chọn, Tô đầy tô vào mặt nạ vùng chọn ([Mặt nạ nhanh](/vi/docs/selections/quick-mask/)).

## Tô vùng chọn tự do

Bạn có thể vẽ tự do một hình và tô hình đó bằng màu hiện tại. Kéo đường viền trên
khung vẽ, hình được tô khi bạn thả ra.

Tô vùng chọn tự do chỉ có thiết lập **Độ đục**. Công cụ này không dùng được trong
Mặt nạ nhanh hoặc trên lớp vùng chọn.

## Khoanh và tô

Bạn có thể tô mọi vùng trong suốt khép kín nằm bên trong một vòng bạn vẽ. Khoanh và
tô tìm các vùng trong pixel của **Nguồn**.

- Nhấn **Escape** trong lúc vẽ để hủy vòng.
- Một lần hoàn tác xóa mọi thứ mà một vòng đã tô.
- Vùng chọn đang hoạt động giới hạn phần tô trong vùng chọn.
- Không dùng được Khoanh và tô khi bạn đang sửa mặt nạ vùng chọn hoặc mặt nạ lớp.

## Nguồn

Bạn có thể chọn những pixel mà Tô đầy và Khoanh và tô dựa vào để tìm vùng. Màu tô
luôn đi vào lớp đang chọn.

- **Bản vẽ hiển thị**: mọi thứ đang hiển thị trong bản vẽ.
- **Lớp đang sửa**: chỉ lớp đang chọn.
- **Lớp tham chiếu**: các lớp được đánh dấu bằng **Dùng làm tham chiếu** ([Thiết lập lớp](/vi/docs/layers/settings/)).

Chọn nguồn trong danh sách bên dưới các công cụ trong **Bộ công cụ** với Tô đầy,
hoặc trong bảng **Công cụ** với Khoanh và tô. Thanh Tùy chọn công cụ có trình đơn
**Nguồn** cho cả hai.

![Bảng Bộ công cụ với Tô đầy được chọn và các lựa chọn Bản vẽ hiển thị, Lớp đang sửa và Lớp tham chiếu bên dưới.](shot:drawing/fill-tool-set)

Mỗi công cụ giữ nguồn riêng. Tô đầy bắt đầu với **Bản vẽ hiển thị**, còn Khoanh và
tô trở về **Lớp tham chiếu** mỗi lần bạn mở Capy Canvas.

Nếu Tô đầy dùng **Lớp tham chiếu** mà chưa có lớp nào được đánh dấu, Tô đầy không vẽ
gì và một thông báo đề nghị đánh dấu lớp bên dưới.

## Thiết lập tô màu

![Bảng Công cụ cho Tô đầy với Dung sai, nhóm Cạnh và Độ đục.](shot:drawing/fill-settings)

Tô đầy và Khoanh và tô dùng chung các thiết lập bên dưới. **Tự động chọn** và
**Chọn theo màu** dùng cùng giá trị cho mọi thiết lập trừ **Độ đục**. Để đặt lại
một thiết lập, nhấp đúp vào nhãn của thiết lập đó trên thanh Tùy chọn công cụ
([Kích thước, độ đục và lượng màu ra](/vi/docs/brushes/basics/)).

### Dung sai

Đặt mức chênh lệch màu tối đa mà vẫn được tính là cùng một vùng. Mặc định là 10%.

### Khép khe hở

Khép các chỗ hở trên nét có độ rộng đến giá trị này, từ 0 đến 32 px, trước khi tìm
vùng. Độ rộng tính theo pixel của bản vẽ, không phải của màn hình.

### Độ mở rộng

Nới rộng vùng tô thêm số pixel này, hoặc thu hẹp vùng tô với giá trị âm, từ −32
đến 32 px.

### Làm mịn biên

Làm mịn các cạnh răng cưa của vùng tô. Ở 0%, vùng tô giữ cạnh pixel sắc nét.

### Độ đục

Đặt cường độ của màu tô. Đổi giá trị này sẽ đổi **Độ đục** của cọ hiện tại, và
ngược lại. Trong Phác thảo, dùng thanh trượt độ đục trên thanh ở cạnh trái.

## Tô đầy vùng chọn

Để tô màu hiện tại vào vùng chọn, chọn **Chỉnh sửa > Tô đầy vùng chọn** hoặc nhấn
**Shift+Backspace** ([Làm việc với vùng chọn](/vi/docs/selections/working/)).
