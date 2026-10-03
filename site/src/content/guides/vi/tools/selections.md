---
title: "Công cụ lựa chọn"
description: "Chọn một phần bản vẽ của bạn để những thay đổi chỉ ảnh hưởng đến khu vực đó."
purpose: "Vùng chọn đánh dấu phần bản vẽ mà bạn muốn làm việc. Trong khi nó đang hoạt động, việc tô màu, tô màu và chuyển đổi chỉ ảnh hưởng đến vùng đã chọn, vì vậy phần còn lại của bản vẽ vẫn an toàn. Capy Canvas có các công cụ lựa chọn cho các hình dạng đơn giản, đường viền tự do và các vùng có màu tương tự."
techniques: ["Chọn công cụ lựa chọn phù hợp.", "Thêm vào hoặc bớt khỏi vùng chọn.", "Điền vào vùng chọn và xóa nó khi bạn hoàn tất."]
figure: "1: Công cụ lựa chọn trong Tool Set. 2: Chế độ lựa chọn, tùy chọn lông và hình dạng. 3: Lựa chọn hình elip xung quanh đĩa."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Công cụ lựa chọn trong Tool Set. 2: Chế độ lựa chọn, tùy chọn lông và hình dạng. 3: Lựa chọn hình elip xung quanh đĩa."}
---

## Chọn một công cụ lựa chọn

Trong Paint, chọn **Lasso selection** hoặc **Auto select** trên thanh công cụ và Tool Set sẽ liệt kê tất cả các công cụ lựa chọn. Trong Sketch, chúng nằm dưới nút **Select** và Photo giữ hầu hết chúng trên thanh công cụ của nó.

**Rectangle select** và **Ellipse select** vẽ các hình đơn giản; giữ **Shift** để vẽ hình vuông hoặc hình tròn và **Alt** để vẽ từ tâm. **Lasso selection** theo dõi bút của bạn một cách tự do và **Polygonal lasso** nối các đường thẳng giữa các điểm bạn nhấp vào; nhấp lại vào điểm đầu tiên hoặc nhấn **Enter** để đóng nó. **Auto select** chọn vùng có màu tương tự chỉ bằng một cú nhấp chuột và **Select by color** chọn mọi vùng có màu đó cùng một lúc. Hai công cụ khác, **Paint selection** và **Tonal range**, có trang riêng: [Quick Mask and Selection Layer](/vi/docs/selections/quick-mask/) và [Select by Brightness](/vi/docs/selections/tonal-range/).

## Kết hợp và làm mềm các lựa chọn

Bốn nút ở đầu bảng **Tool** chọn điều gì sẽ xảy ra khi bạn thực hiện một lựa chọn khác. Nó có thể thay thế cái hiện tại, thêm vào, bớt đi hoặc chỉ giữ lại khu vực mà hai cái chồng lên nhau. Bạn cũng có thể giữ **Shift** để cộng hoặc **Alt** để trừ mà không cần thay đổi các nút.

**Feather radius** làm mềm cạnh của vùng chọn, sao cho màu sơn và các điều chỉnh mờ dần thay vì dừng lại ở một đường cố định. Đối với Tự động chọn, **Tolerance** kiểm soát mức độ khác nhau của một màu mà vẫn được đưa vào, đồng thời **Close gaps** ngăn vùng chọn bị rò rỉ qua các điểm ngắt nhỏ trong nghệ thuật đường nét của bạn.

## Sử dụng lựa chọn

Để chọn mọi thứ được vẽ trên một lớp, hãy giữ **Ctrl** và nhấp vào hình thu nhỏ của lớp đó. Với vùng chọn đang được kích hoạt, hãy vẽ tự do: các nét vẽ chỉ nằm bên trong vùng chọn đó. Chọn **Edit → Fill selection** để tô màu hiện tại hoặc biến nó thành [lớp mặt nạ](/vi/docs/layers/masks/). Menu **Select** cũng có thể đảo ngược vùng chọn, tăng hoặc thu nhỏ vùng chọn vài pixel hoặc đưa vùng chọn cuối cùng trở lại với **Reselect**.

Khi bạn hoàn tất, hãy chọn **Select → Deselect pixels** để các nét tiếp theo của bạn có thể đi đến bất kỳ đâu nữa.
