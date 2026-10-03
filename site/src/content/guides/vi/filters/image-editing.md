---
title: "Chỉnh sửa ảnh"
description: "Mở ảnh, điều chỉnh màu sắc của ảnh bằng các lớp có thể chỉnh sửa và xuất kết quả."
purpose: "Photo là không gian làm việc để điều chỉnh hình ảnh. Bạn có thể mở ảnh trực tiếp từ máy ảnh hoặc điện thoại của mình, làm sáng hoặc thay đổi màu sắc bằng các lớp điều chỉnh và xuất bản sao hoàn chỉnh mà không cần thay đổi tệp gốc."
techniques: ["Mở ảnh hoặc thêm ảnh vào bản vẽ hiện có.", "Điều chỉnh nó bằng một lớp bộ lọc có thể chỉnh sửa.", "Lưu các chỉnh sửa của bạn và xuất một bản sao."]
figure: "1: Không gian làm việc Photo. 2: Ảnh và lớp điều chỉnh của nó. 3: Thuộc tính điều chỉnh."
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1: Không gian làm việc Photo. 2: Ảnh và lớp điều chỉnh của nó. 3: Thuộc tính điều chỉnh."}
---

## Mở ảnh

Chọn **Photo** trong trình chuyển đổi không gian làm việc, sau đó chọn **File → Open…** và chọn ảnh của bạn. Capy Canvas mở các tệp JPEG, PNG, TIFF, WebP, HEIC, AVIF và OpenEXR, vì vậy ảnh từ hầu hết các máy ảnh và điện thoại sẽ mở trực tiếp. Ảnh sẽ mở trong tab riêng ở kích thước đầy đủ, với màu gốc.

Để thêm ảnh vào bản vẽ bạn đã mở, hãy chọn **File → Import Image as Layer…** hoặc kéo tệp vào khung vẽ. Ảnh xuất hiện có các điểm điều khiển để bạn có thể di chuyển và thay đổi kích thước ảnh; chọn **Apply** khi nó ở đúng vị trí hoặc **Original Size (100%)** để sử dụng nó ở kích thước thực tế.

## Thực hiện điều chỉnh

Mở **Filters** và chọn điều chỉnh như **Curves**, **Vibrance** hoặc **Hue / Saturation**. Nó được thêm dưới dạng một lớp mới phía trên ảnh và cài đặt của nó xuất hiện trong **Properties**. Thay đổi chúng dần dần và xem ảnh khi bạn thực hiện. Ẩn và hiển thị lớp điều chỉnh để so sánh kết quả với bản gốc.

Vì sự điều chỉnh nằm trên lớp riêng của nó nên bạn có thể quay lại và thay đổi nó bất kỳ lúc nào hoặc xóa nó mà không để lại dấu vết. Để chỉ điều chỉnh một phần của ảnh, trước tiên hãy chọn khu vực đó, ví dụ như bầu trời với [Chọn theo độ sáng](/vi/docs/selections/tonal-range/). [Bộ lọc và điều chỉnh](/vi/docs/filters/overview/) giải thích nhiều cách hơn để hạn chế điều chỉnh.

## Lưu và xuất

Khi bạn lưu ảnh bạn đã chỉnh sửa, Capy Canvas sẽ lưu tệp `.capy` với tất cả các lớp điều chỉnh của bạn và ảnh gốc của bạn không bao giờ bị ghi đè. Để chia sẻ kết quả, hãy chọn **File → Export…** và lưu JPEG hoặc PNG. [Xuất hình ảnh](/vi/docs/output/export/) giải thích cài đặt xuất.
