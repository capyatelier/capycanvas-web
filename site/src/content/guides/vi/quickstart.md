---
title: "Bắt đầu nhanh"
description: "Mở {appName}, vẽ trên bản vẽ trống đầu tiên, lưu bản vẽ thành tệp .capy và xuất ảnh PNG."
related: ["start/workspaces", "files/open-save", "files/export", "input/keyboard"]
---

## Mở {appName}

Thực hiện một trong các cách sau:

- Mở trình chỉnh sửa web tại [editor.capycanvas.art](https://editor.capycanvas.art/).
- Tải ứng dụng máy tính, bản beta cho iPad hoặc Android, hoặc xem các bước cài trình chỉnh sửa web thành ứng dụng trên trang [Tải xuống](/vi/download/).

Trình chỉnh sửa web chạy trên các trình duyệt sau:

| Hệ điều hành | Trình duyệt |
| --- | --- |
| Windows | Chrome, Edge, Firefox 141 trở lên |
| macOS | Chrome, Edge, Safari 26 trở lên, Firefox 147 trở lên (Apple silicon) |
| Linux (Wayland) | Chrome, Edge |
| iPadOS 26 trở lên | Safari |
| Android 12 trở lên | Chrome |

Sau lần truy cập đầu tiên, trình chỉnh sửa web mở được cả khi không có kết nối internet.

## Bản vẽ đầu tiên

![Bảng Lớp của một bản vẽ mới, với Mực hiện tại nằm trên Giấy.](shot:files/new-layers)

Lần đầu bạn mở {appName}, ứng dụng hiện không gian làm việc [Vẽ](/vi/docs/start/workspaces/)
với một bản vẽ trống, và thanh tiêu đề ghi “Chưa đặt tên · 2048 × 1536”.
**Mực hiện tại**, một lớp vẽ trống, đang được chọn và nằm trên **Giấy**, một lớp
tô màu trắng. Công cụ **Bút** đang dùng cọ **Bút G** với màu gần như đen.

Những lần sau, {appName} mở không gian làm việc bạn dùng gần nhất cùng các bản
vẽ đang mở lúc đó.

## Vẽ

Kéo trên khung vẽ bằng bút hoặc chuột. Để dùng công cụ khác, chọn công cụ đó trên
Thanh công cụ vẽ ở cạnh trái cửa sổ. Trong Phác thảo, chọn **Cọ** trên thanh tiêu đề.

> **Lưu ý:** Ngón tay không vẽ được. Hai ngón tay trên khung vẽ dùng để di chuyển, thu phóng và xoay khung nhìn.

Để hoàn tác một nét vẽ, chọn **Chỉnh sửa > Hoàn tác**, nhấn **Ctrl+Z** hoặc chạm
hai ngón tay lên khung vẽ (xem [Hoàn tác và làm lại](/vi/docs/start/undo/)).

## Phím trên macOS và iPad

Hướng dẫn này ghi phím theo Windows và Linux. Trên macOS và iPad, nhấn
**Command** (⌘) ở chỗ hướng dẫn ghi **Ctrl**. **Ctrl** cũng dùng được trong trình
chỉnh sửa web và ứng dụng macOS.

Trình chỉnh sửa web ghi mọi phím tắt bằng **Ctrl**. Trình duyệt giữ riêng **F5**,
**F11**, **F12**, và **Ctrl** hoặc **Ctrl+Shift** đi kèm **W**, **T**, **N**,
**R**, **L**, **Q** hoặc **P**. Lệnh dùng một trong các phím này không có phím tắt
trong trình chỉnh sửa web. Hãy chọn lệnh đó từ trình đơn hoặc từ
[tìm lệnh](/vi/docs/start/command-search/).

## Tạo bản vẽ khác

Chọn **Tệp > Mới…** rồi chọn **Tạo** trong hộp thoại [Bản vẽ mới](/vi/docs/files/new/).
Bản vẽ mới mở trong thẻ riêng, cạnh bản vẽ đầu tiên.

## Lưu bản vẽ

![Trình đơn Tệp với Mới…, Mở…, Lưu, Lưu thành… và Xuất….](shot:files/file-menu)

Để lưu bản vẽ cùng toàn bộ các lớp:

1. Chọn **Tệp > Lưu**, hoặc nhấn **Ctrl+S**.
2. Chọn thư mục và tên. Tên đề xuất là “Chưa đặt tên.capy”.

Sau đó thanh tiêu đề hiện tên tệp. Trong Firefox và Safari, bản vẽ chỉ được tính
là đã lưu sau khi bạn chọn **Tải xuống** rồi chọn **Đã lưu tệp** trong hộp thoại
**Tải tệp xuống**.

## Xuất ảnh PNG

![Hộp thoại Xuất ảnh với Đích đặt là Web / Chia sẻ.](shot:files/export-dialog)

Để xuất một bản sao PNG gộp phẳng của bản vẽ:

1. Chọn **Tệp > Xuất…**, hoặc nhấn **Ctrl+Shift+E**.
2. Giữ **Đích** ở **Web / Chia sẻ**, rồi chọn **Chọn tệp…**.
3. Chọn thư mục và tên. Tên đề xuất là “Chưa đặt tên.png”.

**Web / Chia sẻ** ghi tệp PNG sRGB 8 bit ở kích thước đầy đủ của bản vẽ. Việc
xuất không thay đổi bản vẽ và không lưu bản vẽ.
