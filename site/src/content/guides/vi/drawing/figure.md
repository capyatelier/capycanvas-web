---
title: "Hình"
description: "Vẽ đường thẳng, hình chữ nhật, elip, đa giác, ngôi sao và đường bằng công cụ Hình."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

Bạn có thể vẽ đường thẳng, hình chữ nhật, elip, đa giác, ngôi sao và đường lên lớp đang chọn bằng công cụ
**Hình**. Trên [lớp vector](/vi/docs/layers/vector/), mỗi hình trở thành một đường bạn có thể chỉnh sửa. Trên lớp vẽ, hình vẽ pixel.

## Công cụ Hình

Thực hiện một trong các cách sau:

- Nhấn **U**.
- Trong Vẽ, chọn **Hình** trên Thanh công cụ vẽ. Nhấp chuột phải hoặc giữ nút để chọn **Đường thẳng**, **Hình chữ nhật**, **Elip**, **Đa giác**, **Ngôi sao** hoặc **Đường**.
- Tìm lệnh **Hình**, hoặc một hình dạng như **Hình › Hình chữ nhật**.

Phác thảo và Ảnh không có nút Hình. Bạn có thể thêm nút này bằng **Chèn công cụ…**
([Thanh công cụ và thanh tiêu đề](/vi/docs/customize/toolbars/)).

![Trình đơn của nút Hình trên Thanh công cụ vẽ của Vẽ, với Đường thẳng, Hình chữ nhật, Elip, Đa giác, Ngôi sao và Đường.](shot:drawing/figure-menu)

Kéo trên khung vẽ để vẽ bất kỳ hình nào trừ **Đường**. Một đường viền nét đứt hiện hình dạng trong lúc bạn
kéo, và hình xuất hiện khi bạn thả ra. Giữ **Shift** trong lúc kéo để vẽ đường
thẳng theo từng nấc 45°, hình vuông, hình tròn, hoặc đa giác hay ngôi sao đều.

- Hình chỉ vẽ lên nội dung của lớp, trên lớp vector và trên những lớp mà cọ vẽ được ([Công cụ cọ](/vi/docs/drawing/brush-tools/)).
- Hình tuân theo **Khóa alpha**.
- Trên lớp vẽ, vùng chọn đang hoạt động cắt **Đường thẳng**, **Hình chữ nhật** và **Elip**. Nó không cắt **Đa giác**, **Ngôi sao**, **Đường** hay hình chữ nhật bo góc.
- Khi chọn **Màu vẽ trong suốt** trong bảng Màu, **Đường thẳng**, **Hình chữ nhật** và **Elip** sẽ tẩy trên lớp vẽ. Mọi hình khác hiện thông báo yêu cầu chọn màu.
- Lực nhấn bút không thay đổi độ rộng của hình.
- Hình không bám theo đường hướng dẫn.
- Không dùng được Hình trong Mặt nạ nhanh hoặc trên lớp vùng chọn.
- Mỗi hình là một bước hoàn tác.

## Hình dạng

- **Đường thẳng** đi từ chỗ bạn nhấn đến chỗ bạn thả, với hai đầu tròn.
- **Hình chữ nhật** có các góc tại điểm nhấn và điểm thả, với các cạnh song song với mép khung vẽ.
- **Elip** vừa khít khung giữa điểm nhấn và điểm thả.
- **Đa giác** và **Ngôi sao** vừa khít khung, với góc hoặc cánh đầu tiên ở trên cùng.
- **Đường** được vẽ từng điểm neo một.

Chọn hình dạng ở đầu bảng **Bộ công cụ**, từ trình đơn của nút Hình, hoặc từ
**Công cụ** trên thanh Tùy chọn công cụ.

## Viền và tô đầy

- **Viền** vẽ cạnh của hình bằng màu hiện tại, canh giữa trên cạnh.
- **Tô đầy** phủ hình bằng màu hiện tại.
- **Viền + tô đầy** vẽ viền bằng màu trước và tô bên trong bằng màu nền.

Chọn chế độ bên dưới các hình dạng trong bảng **Bộ công cụ**, hoặc từ **Biến thể**
trên thanh Tùy chọn công cụ. Đường thẳng chỉ vẽ được với **Viền**.

![Bảng Bộ công cụ với Đường thẳng, Hình chữ nhật, Elip, Đa giác, Ngôi sao và Đường phía trên Viền, Tô đầy và Viền + tô đầy.](shot:drawing/figure-tool-set)

## Thiết lập hình dạng

![Bảng Công cụ cho Ngôi sao, với Độ rộng nét, Độ đục, Số cánh và Bán kính trong.](shot:vector/figure-settings)

**Bán kính góc**, **Số góc**, **Số cánh** và **Bán kính trong** nằm trong bảng **Công
cụ** và trên thanh Tùy chọn công cụ, cho hình dạng mà chúng thuộc về.

### Bán kính góc

Bo tròn các góc của **Hình chữ nhật**, từ 0 đến 4096 px.

### Số góc

Đặt số góc của **Đa giác**, từ 3 đến 100. Mặc định là 5.

### Số cánh

Đặt số cánh của **Ngôi sao**, từ 3 đến 100. Mặc định là 5.

### Bán kính trong

Đặt khoảng cách từ các góc trong của **Ngôi sao** đến tâm, tính theo phần trăm bán kính ngoài, từ 5% đến 100%. Mặc định là 50%.

## Đường

Bạn có thể vẽ một đường từng điểm neo một.

- Nhấp để thêm điểm neo góc. Nhấn và kéo để kéo ra các tay nắm cho điểm neo trơn, hoặc giữ **Alt** để chỉ kéo tay nắm đi ra.
- Giữ **Shift** để đặt điểm neo tiếp theo theo từng nấc 45° từ điểm neo trước.
- Nhấp vào điểm neo đầu tiên để khép đường.
- Chọn **Hoàn tất đường** trên thanh khung vẽ hoặc nhấn **Enter** để thêm đường. **Hủy đường** hoặc **Escape** bỏ đường.
- **Xóa điểm cuối** hoặc **Backspace** xóa điểm neo cuối cùng, **Hoàn tác** cũng vậy.

![Thanh canvas trong khi vẽ đường dẫn, với Xóa điểm cuối, Hủy đường và Hoàn tất đường.](shot:vector/path-bar)

Đường dùng chế độ hiện tại, **Độ rộng nét** và màu, với góc nhọn và đầu phẳng. Trên lớp vector, đường được chọn khi bạn hoàn tất, và một đường bắt đầu từ đầu hở của đường đang chọn sẽ nối tiếp đường đó.

## Độ rộng nét và Độ đục

**Độ rộng nét** và **Độ đục** nằm trong bảng **Công cụ** và trên thanh Tùy chọn công
cụ. Hai thiết lập này dùng chung giá trị với **Kích thước cọ** và **Độ đục** của cọ
hiện tại ([Kích thước, độ mạnh và độ đục](/vi/docs/brushes/basics/)), và **[**
và **]** thay đổi Độ rộng nét.

### Độ rộng nét

Đặt độ rộng của viền, từ 0.5 đến 2048 px. Thiết lập này không xuất hiện ở chế độ
**Tô đầy**. Trên lớp vector, **Độ dày viền** trong [Thuộc tính](/vi/docs/layers/paths/) thay đổi nó sau này.

### Độ đục

Đặt cường độ cho cả viền và phần tô.
