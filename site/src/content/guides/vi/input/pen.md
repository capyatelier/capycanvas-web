---
title: "Bút"
description: "Các thiết lập bút trong Tùy chọn, và thao tác chạm hai lần và bóp trên Apple Pencil."
related: ["input/touch", "input/keyboard", "preferences", "brushes/basics"]
---

Các thiết lập bút nằm trên trang **Bút và nhập liệu** của **Chỉnh sửa > Tùy chọn**.

![Trang Bút và nhập liệu của Tùy chọn.](shot:pen/pen-and-input)

## Đáp ứng lực nhấn

Bạn có thể thay đổi cách bút đáp ứng lực nhấn nhẹ bằng **Đáp ứng lực nhấn** trong
**Đáp ứng của bút**. Giá trị thấp hơn làm lực nhấn nhẹ mạnh hơn, còn giá trị cao hơn
đòi hỏi nhấn mạnh hơn. Phạm vi là 0.25 × đến 4.00 ×. Ở giá trị mặc định 1.00 ×, lực
nhấn của bút được dùng nguyên trạng.

Thiết lập này áp dụng cho mọi cọ và công cụ, kể cả **Vẽ vùng chọn** và
**Mặt nạ nhanh**. Các nét đã vẽ không thay đổi.

## Dự đoán nét vẽ

Dự đoán nét vẽ vẽ trước một đoạn ngắn của nét phía trước đầu bút, và nét thật thay
thế đoạn đó khi bạn vẽ. Các thiết lập nằm trong **Đáp ứng của bút**:

- **Bật dự đoán nét vẽ** bật hoặc tắt cả hai loại dự đoán.
- **Dùng dự đoán nét vẽ của *hệ thống***, ví dụ **Dùng dự đoán nét vẽ của Windows**, dùng dự đoán của hệ thống hoặc của trình duyệt.
- **Mức dự đoán** đặt khoảng thời gian {appName} tự dự đoán trước, từ 0 đến 64 ms.

Theo mặc định, cả hai công tắc đều bật, và **Mức dự đoán** là 16 ms. Khi
**Bật dự đoán nét vẽ** tắt, hai thiết lập còn lại không dùng được.

| Hệ thống | Dự đoán của hệ thống |
| --- | --- |
| iPad | Có |
| Windows | Có khi Windows hỗ trợ |
| Android | Android 14 trở lên, với bút cảm ứng được hệ thống hỗ trợ |
| Web | Trên trình duyệt hỗ trợ |
| macOS, Linux | Không bao giờ có |

Khi không có dự đoán của hệ thống, công tắc của nó không dùng được và
**Mức dự đoán** đặt mức dự đoán. Khi đang dùng dự đoán của hệ thống,
**Mức dự đoán** không dùng được (bị ẩn trên iPad).

Con trỏ đi theo bút, không đi theo nét dự đoán.

![Các thiết lập Đáp ứng của bút.](shot:pen/prediction)

## Hình dạng con trỏ

Bạn có thể chọn con trỏ hiện trên khung vẽ bằng **Hình dạng con trỏ** trong
**Con trỏ**.

| Lựa chọn | Hiện |
| --- | --- |
| **Kích thước cọ** | Đường viền đầu cọ theo kích thước, hình dạng và góc xoay của nó (mặc định) |
| **Chữ thập**, **Tam giác** | Một chữ thập hoặc một hình tam giác nhỏ |
| **Chấm** | Một chữ thập rất nhỏ |
| **Chấm một pixel** | Một pixel màn hình |
| **Tâm ngắm** | Một chữ thập có chấm ở giữa |
| **Công cụ** | Biểu tượng của công cụ, với điểm tác động tại vị trí con trỏ |
| **Công cụ và kích thước cọ**, **Kích thước cọ và chữ thập**, **Kích thước cọ và chấm**, **Kích thước cọ và chấm một pixel** | Đường viền cọ cùng với dấu còn lại |
| **Không** | Không hiện gì với bút trên màn hình. Chuột, bàn di chuột hoặc bảng vẽ không màn hình hiện **Tâm ngắm**. |

Hình dạng này áp dụng cho các công cụ vẽ và **Vẽ vùng chọn**. Các công cụ khác hiện
biểu tượng của chúng khi hình dạng có **Công cụ**, và hiện chữ thập trong các trường
hợp còn lại.

![Danh sách Hình dạng con trỏ.](shot:pen/cursor-shapes)

## Ẩn con trỏ khi vẽ

Khi **Ẩn con trỏ khi vẽ** đang bật (mặc định), con trỏ biến mất khi bút chạm khung vẽ
hoặc khi đang nhấn nút chuột với một công cụ vẽ. Đường viền cọ vẫn hiện khi bạn tẩy.

## Đầu tẩy

Bạn có thể chọn tác dụng của đầu tẩy trên bút. Nhóm **Đầu tẩy** không hiện trên iPad.

- **Công cụ**: **Công cụ hiện tại** (mặc định) giữ công cụ bạn đang dùng. **Tẩy**, **Bút**, **Bút chì**, **Cọ vẽ**, **Bút phun** và **Hòa màu** chuyển sang công cụ đó khi bạn dùng đầu tẩy, và công cụ trước đó trở lại sau khi dùng xong.
- **Vẽ trong suốt**: khi bật (mặc định), đầu tẩy tẩy bằng cọ của công cụ. Khi tắt, đầu tẩy vẽ. Công tắc này bị ẩn khi **Công cụ** là **Tẩy**.

## Nút bút

Bạn có thể gán cho mỗi nút bên của bút một thao tác, và một thao tác khác cho từng loại
công cụ.

Để đặt một nút bút:

1. Chọn nút trong **Nút bút**.
2. Chọn **Thao tác**, hoặc tắt **Giống nhau cho mọi công cụ** rồi chọn một loại công cụ, ví dụ **Các công cụ vẽ**.
3. Chọn một thao tác. **Không có** xóa thao tác của nút.

Công cụ, cọ và chế độ, ví dụ **Di chuyển khung nhìn** hoặc **Lấy mẫu màu**, có hiệu
lực khi bạn giữ nút. Các thao tác khác thực hiện một lần. Nhấn nút trong lúc đang vẽ
một nét sẽ có hiệu lực sau khi vẽ xong nét đó.

Mọi nút ban đầu đều là **Không có**. Nút đặt là **Không có** giữ thao tác mà trình
điều khiển bảng vẽ hoặc hệ thống gán cho nó.

| Hệ thống | Các nút được liệt kê |
| --- | --- |
| Linux | **Nút bên dưới**, **Nút bên trên**, **Nút bên thứ ba** |
| Windows | **Nút bên dưới** |
| macOS, Android, web | **Nút bên dưới**, **Nút bên trên** |
| iPad | Không có |

Trên Linux và Android, các nút trên bảng vẽ được đặt như phím trên trang
[Phím tắt](/vi/docs/input/keyboard/).

![Trang của Nút bên dưới, với một thao tác cho mỗi loại công cụ.](shot:pen/pen-button-page)

## Chạm hai lần và bóp trên Apple Pencil

Trên iPad, thao tác chạm hai lần vào Apple Pencil và bóp Apple Pencil Pro làm theo
thiết lập riêng của iPad trong **Cài đặt > Apple Pencil**.

- “Switch between current tool and eraser” chuyển sang **Tẩy** rồi chuyển lại.
- “Switch between current tool and last used” chuyển sang công cụ bạn đã chọn trước đó.

Các lựa chọn khác không có tác dụng trong {appName}. Thao tác bóp có hiệu lực khi
bạn thả tay. Khi Apple Pencil di chuyển lơ lửng trên màn hình, con trỏ xuất hiện.
