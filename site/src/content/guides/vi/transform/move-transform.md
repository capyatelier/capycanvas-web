---
title: "Di chuyển và biến đổi"
description: "Di chuyển và biến đổi lớp, pixel đã chọn và đường bằng công cụ Thao tác và lệnh Biến đổi."
related: ["selections/working", "layers/paths", "transform/crop", "transform/clipboard", "drawing/ruler"]
---

Bạn có thể di chuyển lớp và pixel đã chọn bằng công cụ **Thao tác**, và đổi tỷ lệ,
xoay, nghiêng, làm méo hoặc uốn cong chúng bằng **Biến đổi**.

## Công cụ Thao tác

Thực hiện một trong các cách sau:

- Mở trình đơn của một lớp trong bảng Lớp rồi chọn **Di chuyển lớp / mặt nạ**.
- Nhấn **O**.
- Trong Vẽ và Ảnh, chọn **Thao tác / Biến đổi / Sửa điểm** trên Thanh công cụ vẽ. Nhấp chuột phải hoặc giữ nút để chọn **Thao tác**.
- Gõ “Thao tác” vào [tìm lệnh](/vi/docs/start/command-search/).

Phác thảo không có nút **Thao tác**.

## Di chuyển lớp

Khi không có vùng chọn, kéo trên khung vẽ để di chuyển các lớp đã chọn. Phím mũi tên
dịch các lớp 1 px, và 10 px khi giữ **Shift**.

Bạn không thể di chuyển lớp đã khóa.

## Di chuyển pixel đã chọn

Khi có vùng chọn, kéo để di chuyển các pixel đã chọn của lớp vẽ hiện tại, theo từng
bước nguyên pixel. Khi bạn đang sửa mặt nạ, **Thao tác** di chuyển mặt nạ.

Khi đường hướng dẫn đang hiện, **Thao tác** còn chọn và kéo được đường hướng dẫn
(xem [Thước và đường hướng dẫn](/vi/docs/drawing/ruler/)).

## Di chuyển đường

Trên lớp vector, **Thao tác** chọn, di chuyển, đổi tỷ lệ và xoay các đường thay vì di chuyển lớp. Nhấn **Ctrl+A** để chọn mọi đường. **Chỉnh sửa > Biến đổi** khi đã chọn đường sẽ chuyển sang **Thao tác** và khung của nó. Xem [Chỉnh sửa đường](/vi/docs/layers/paths/).

## Giữ bản sao

Bạn có thể di chuyển một bản sao của các pixel đã chọn và giữ nguyên bản gốc tại
chỗ.

Bật **Giữ bản sao** trong bảng **Công cụ** hoặc chọn **Thêm > Giữ bản sao** trên [thanh vùng chọn](/vi/docs/selections/working/). Giữ **Alt** khi bắt đầu kéo để đảo lựa chọn chỉ trong lần kéo đó.

## Biến đổi

Thực hiện một trong các cách sau:

- Chọn **Chỉnh sửa > Biến đổi**.
- Nhấn **Ctrl+T**.
- Chọn **Biến đổi** trên Thanh lệnh trong Vẽ và Ảnh, hoặc trên thanh tiêu đề trong Phác thảo.
- Chọn **Biến đổi** trên thanh vùng chọn.
- Trong Vẽ và Ảnh, nhấp chuột phải hoặc giữ **Thao tác / Biến đổi / Sửa điểm** trên Thanh công cụ vẽ rồi chọn **Biến đổi**.

Khi có vùng chọn, **Biến đổi** thay đổi các pixel đã chọn của lớp hoặc mặt nạ hiện
tại. Khi không có vùng chọn, lệnh thay đổi các lớp đã chọn. Một hộp có tay nắm và
thanh khung vẽ xuất hiện.

Để hoàn tất, chọn **Áp dụng biến đổi** hoặc nhấn **Enter**. **Hủy biến đổi** hoặc **Escape** bỏ phép
biến đổi, và **Hoàn tác** cũng vậy khi bạn đang biến đổi lớp.

Để biến đổi nhiều lớp, bỏ vùng chọn trước.

## Tay nắm

Trong khi mở rộng quy mô:

- Kéo bên trong hộp để di chuyển hộp. Giữ **Shift** để chỉ di chuyển theo chiều ngang hoặc chiều dọc.
- Kéo tay nắm ở góc hoặc ở cạnh để đổi tỷ lệ từ phía đối diện. Giữ **Shift** để giữ tỷ lệ khung hình, hoặc **Alt** để đổi tỷ lệ quanh tâm xoay.
- Giữ **Ctrl** và kéo tay nắm ở cạnh để nghiêng, tối đa 85°.
- Kéo tay nắm phía trên cạnh trên để xoay quanh tâm xoay. Giữ **Shift** để xoay theo từng bước 15°.
- Kéo tâm xoay để di chuyển tâm xoay.

Ở **Làm méo**:

- Kéo một góc để di chuyển riêng góc đó, hoặc kéo tay nắm ở cạnh để di chuyển cạnh đó.
- Giữ **Shift** trên một góc để góc kề bên di chuyển đối xứng, tạo phối cảnh cân đối.

Ở **Uốn cong**:

- Kéo các điểm lưới, và các tay nắm tiếp tuyến của điểm đang chọn.
- **Shift**+nhấp vào các điểm để di chuyển nhiều điểm cùng lúc.

Ở mọi chế độ:

- Phím mũi tên dịch hộp 1 px, và 10 px khi giữ **Shift**.
- Trên màn hình cảm ứng, ngón tay đặt trên tay nắm hoặc bên trong hộp sẽ kéo tay nắm hoặc hộp. Ngón tay đặt ở chỗ khác sẽ di chuyển khung nhìn.

## Thanh biến đổi

![Thanh biến đổi có các nút chế độ, điều khiển lật và chụp nhanh, Hủy biến đổi và Áp dụng biến đổi.](shot:transform/transform-bar)

### Chế độ

Chọn **Đổi tỷ lệ**, **Làm méo** hoặc **Uốn cong** trên thanh. **Giữ tỷ lệ** giữ tỷ lệ khi đổi kích thước. Trong **Làm méo**, **Phối cảnh** phản chiếu chuyển động của một góc sang góc bên cạnh. Mặc định là **Đổi tỷ lệ**.

### Kích thước gốc

Đưa ảnh đã đặt về 100%. Chỉ dùng cho ảnh không dùng **Làm méo** hoặc **Uốn cong**.

### Bắt dính

Bắt các cạnh và tâm của hộp vào khung vẽ, vào các lớp hiển thị khác và vào đường
hướng dẫn. Phép xoay không bắt dính. Mặc định tắt.

### Phối cảnh

Với **Làm méo**, mỗi lần kéo một góc thì góc kề bên di chuyển đối xứng.

### Lưới uốn cong

Với **Uốn cong**:

- **Lưới** mở **3 × 3** (mặc định), **4 × 4**, **5 × 5** và các lệnh chia lưới. Kích thước lưới có sẵn cho đến khi bạn thay đổi hình dạng.
- Chọn **Chia dọc**, **Chia ngang** hoặc **Chia chữ thập**, sau đó chọn một điểm trên lưới để thêm đường lưới mà không thay đổi hình dạng. **Escape** hủy việc phân chia. Một lưới chứa tối đa 32 ô theo mỗi hướng.
- **Chọn điểm** chọn các điểm để di chuyển cùng nhau.
- **Đặt lại lưới** khôi phục lưới thẳng.

![Thanh biến đổi ở chế độ Uốn cong với Lưới và Chọn điểm.](shot:transform/warp-bar)

### Nút lật và xoay

**Lật ngang** có trên thanh. **Thêm** chứa **Lật dọc**, **Xoay 90° sang trái** và **Xoay 90° sang phải**. Họ phản chiếu hoặc xoay chuyển nội dung về trục xoay.

### Đặt lại biến đổi

Chọn **Đặt lại biến đổi** trong **Thêm** để hoàn tác mọi thay đổi trong biến đổi hiện tại. Biến đổi vẫn mở và trở về **Đổi tỷ lệ**.

### Nội suy

Chọn **Interpolation** trong **Thêm** để đặt cách lấy mẫu lại pixel: **Lân cận gần nhất**, **Song tuyến tính**, **Song bậc ba** hoặc **Lanczos**. **Song tuyến tính** là mặc định khi chia tỷ lệ và **Song bậc ba** trong **Làm méo** và **Uốn cong**.

## Giá trị biến đổi trong bảng Công cụ

Bảng Công cụ, và thanh Tùy chọn công cụ trong Ảnh, hiện các giá trị của phép biến
đổi đang mở, trừ ở **Uốn cong**.

- **Điểm neo vị trí**: **X** và **Y**, tính bằng pixel, với lưới điểm neo phía trên để chọn điểm nào của hộp được dùng cho hai giá trị này.
- **Đổi tỷ lệ**: **Chiều rộng** và **Chiều cao**, tính bằng phần trăm. **Giữ tỷ lệ** giữ hai giá trị liên kết với nhau.
- **Góc xoay**: **Góc**, từ −180° đến 180°.
- **Độ nghiêng**: **Độ nghiêng**, từ −85° đến 85°.

![Bảng Công cụ khi biến đổi, với Điểm neo vị trí, Tỷ lệ, Góc xoay và Độ nghiêng.](shot:transform/transform-numbers)

## Biến đổi lớp

Phép biến đổi áp lên toàn bộ lớp vẽ hoặc lớp Đối tượng được lưu cùng từng lớp, và pixel
không bị lấy mẫu lại. **Biến đổi** mở lại từ phép biến đổi đã lưu.

Cho đến khi bạn áp dụng phép biến đổi vào pixel, bạn không thể chỉnh sửa ảnh trên lớp
đã đổi tỷ lệ hoặc đã xoay, cũng không thể vẽ lên lớp đã làm méo hoặc uốn cong.

## Áp dụng biến đổi

Bạn có thể biến phép biến đổi đã lưu của lớp thành một phần pixel của lớp.

Thực hiện một trong các cách sau:

- Chọn **Chỉnh sửa > Áp dụng biến đổi**.
- Chọn **Lớp > Thiết lập lớp > Áp dụng biến đổi**.

Trong lúc xử lý, một thanh ở cuối khung vẽ ghi “Đang áp dụng biến đổi…” kèm nút
**Hủy biến đổi**.

## Biến đổi lần nữa

Khi không có vùng chọn, chọn **Chỉnh sửa > Biến đổi lần nữa** để áp dụng phép biến
đổi lớp gần nhất cho các lớp đã chọn. Thao tác dán, nhập ảnh và biến đổi pixel đã
chọn không được lặp lại.

## Ảnh đã đặt

Khi bạn dán ảnh từ ứng dụng khác hoặc chọn **Tệp > Import Image as
Layer…**, ảnh mở ra
trong hộp biến đổi. **Áp dụng biến đổi** đặt ảnh, còn **Hủy biến đổi** bỏ ảnh. Cho đến khi bạn chọn
một trong hai, các lệnh khác không dùng được.
