---
title: "Bearbeiten Sie ein Foto"
description: "Öffnen Sie ein Foto, passen Sie seine Farben mit bearbeitbaren Ebenen an und exportieren Sie das Ergebnis."
purpose: "Photo ist der Arbeitsbereich zum Anpassen von Bildern. Sie können ein Foto direkt von Ihrer Kamera oder Ihrem Telefon aus öffnen, es mit Einstellungsebenen aufhellen oder seine Farben verschieben und eine fertige Kopie exportieren, ohne die Originaldatei zu ändern."
techniques: ["Öffnen Sie ein Foto oder fügen Sie eines zu einer vorhandenen Zeichnung hinzu.", "Passen Sie es mit einer bearbeitbaren Filterebene an.", "Speichern Sie Ihre Änderungen und exportieren Sie eine Kopie."]
figure: "1: Photo-Arbeitsbereich. 2: Das Foto und seine Einstellungsebene. 3: Eigenschaften für die Anpassung."
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1: Photo-Arbeitsbereich. 2: Das Foto und seine Einstellungsebene. 3: Eigenschaften für die Anpassung."}
---

## Öffnen Sie das Foto

Wählen Sie im Arbeitsbereich-Umschalter **Photo**, dann **File → Open…** und wählen Sie Ihr Bild aus. Capy Canvas öffnet die Dateien JPEG, PNG, TIFF, WebP, HEIC, AVIF und OpenEXR, sodass Fotos von den meisten Kameras und Telefonen direkt geöffnet werden. Das Foto wird in einer eigenen Registerkarte in voller Größe und mit seinen Originalfarben geöffnet.

Um ein Foto zu einer bereits geöffneten Zeichnung hinzuzufügen, wählen Sie **File → Import Image as Layer…** oder ziehen Sie die Datei auf die Leinwand. Das Foto wird mit Griffen angezeigt, sodass Sie es verschieben und in der Größe ändern können. Wählen Sie **Apply**, wenn es vorhanden ist, oder **Original Size (100%)**, um es in seiner tatsächlichen Größe zu verwenden.

## Nehmen Sie eine Anpassung vor

Öffnen Sie **Filters** und wählen Sie eine Anpassung wie **Curves**, **Vibrance** oder **Hue / Saturation**. Es wird als neue Ebene über dem Foto hinzugefügt und seine Einstellungen werden in **Properties** angezeigt. Ändern Sie sie nach und nach und schauen Sie sich dabei das Foto an. Blenden Sie die Einstellungsebene ein und aus, um das Ergebnis mit dem Original zu vergleichen.

Da sich die Anpassung auf einer eigenen Ebene befindet, können Sie sie jederzeit ändern oder spurlos löschen. Um nur einen Teil des Fotos anzupassen, wählen Sie zuerst diesen Bereich aus, zum Beispiel den Himmel mit [Nach Helligkeit auswählen](/de/docs/selections/tonal-range/). [Filter und Anpassungen](/de/docs/filters/overview/) erläutert weitere Möglichkeiten, eine Anpassung einzuschränken.

## Speichern und exportieren

Wenn Sie ein bearbeitetes Foto speichern, speichert Capy Canvas eine `.capy`-Datei mit allen Ihren Einstellungsebenen, und Ihr Originalfoto wird nie überschrieben. Um das Ergebnis zu teilen, wählen Sie **File → Export…** und speichern Sie einen JPEG oder PNG. [Ein Bild exportieren](/de/docs/output/export/) erklärt die Exporteinstellungen.
