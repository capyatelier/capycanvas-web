---
title: "Mặt nạ và cắt"
description: "Ẩn các phần của lớp mà không xóa chúng và tiếp tục tô bóng bên trong hình dạng."
purpose: "Mặt nạ ẩn một phần của lớp mà không xóa bất kỳ lớp sơn nào, vì vậy bạn luôn có thể thay đổi ý định về vị trí của cạnh. Việc cắt giữ một lớp bên trong hình dạng của lớp bên dưới nó, đây là cách dễ nhất để thêm bóng mà không bao giờ tràn ra ngoài các đường kẻ."
techniques: ["Tạo một mặt nạ từ vùng lựa chọn.", "Paint trên mặt nạ để hiển thị hoặc ẩn sơn.", "Cắt bóng cho lớp bên dưới."]
figure: "1: Hình thu nhỏ mặt nạ của Ribbon. 2: Bóng được cắt bớt phía trên Ribbon. 3: Clip vào lớp bên dưới và điều khiển khóa Alpha."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: Hình thu nhỏ mặt nạ của Ribbon. 2: Bóng được cắt bớt phía trên Ribbon. 3: Clip vào lớp bên dưới và điều khiển khóa Alpha."}
---

## Tạo mặt nạ từ vùng chọn

Đầu tiên [chọn](/vi/docs/tools/selections/) khu vực bạn muốn hiển thị. Sau đó mở menu của lớp và chọn **Mask → Mask: reveal selection**. Mọi thứ bên ngoài vùng chọn đều bị ẩn, nhưng không có cái nào bị xóa. Thay vào đó, bạn cũng có thể chọn **Mask: hide selection** để ẩn vùng đã chọn. Hãy nhớ bỏ chọn sau đó để các nét tiếp theo của bạn không bị giới hạn trong vùng chọn.

Mặt nạ chỉ có thể hiển thị lớp sơn thực sự có trên lớp. Nếu bạn nghĩ rằng bạn có thể muốn mở rộng hình dạng sau này, hãy tô màu toàn bộ lớp trước khi che nó, như [masking stage](/vi/docs/illustration/mask/) của hướng dẫn đã làm.

## Paint trên mặt nạ

Nhấp vào hình thu nhỏ của mặt nạ bên cạnh lớp để chỉnh sửa mặt nạ thay vì sơn. Giờ đây, bất kỳ cọ vẽ nào cũng hiển thị nhiều lớp hơn ở bất cứ nơi nào bạn vẽ và **Eraser** sẽ ẩn nó lại. Màu bạn vẽ không quan trọng trên mặt nạ. Khi hoàn tất, hãy nhấp vào hình thu nhỏ của bức vẽ để quay lại vẽ bình thường.

Menu của mặt nạ có thể tắt mặt nạ trong giây lát, đảo ngược hoặc xóa nó. Tắt nó đi là một cách thuận tiện để so sánh kết quả với lớp sơn bên dưới.

## Cắt bóng thành hình dạng

Thêm một lớp mới ngay phía trên lớp cơ sở, mở menu của nó và chọn **Layer Settings → Clip to layer below**. Bất cứ thứ gì bạn vẽ trên lớp đã cắt bây giờ chỉ hiển thị nơi lớp nền có sơn, vì vậy bạn có thể tô bóng tự do mà không cần tô quá các cạnh. Bạn có thể xếp chồng nhiều lớp đã cắt lên trên cùng một lớp nền, một lớp dành cho bóng và lớp khác dành cho vùng sáng.

**Alpha lock** là một giải pháp thay thế đơn giản hơn khi bạn muốn tô màu lại các nét đã tồn tại, chẳng hạn như nghệ thuật đường nét. Nó giữ lớp sơn mới bên trong các nét hiện có trên cùng một lớp. [kết xuất stage](/vi/docs/illustration/render/) của hướng dẫn sử dụng cả hai.
