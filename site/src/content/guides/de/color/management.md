---
title: "Farbräume, HDR und Proofing"
description: "Wählen Sie aus, wie eine Zeichnung Farbe speichert, arbeiten Sie in HDR und zeigen Sie eine Vorschau an, wie ein Bild gedruckt wird."
purpose: "Die meisten Zeichnungen sehen mit den Standardeinstellungen großartig aus. Wenn Sie Fotos bearbeiten, Arbeiten für den Druck vorbereiten oder die lebendigen Farben eines modernen Bildschirms wünschen, können Sie auswählen, wie viel Farbe die Zeichnung aufnehmen kann, und eine Vorschau davon anzeigen, wie sie an anderer Stelle aussehen wird."
techniques: ["Wählen Sie einen Farbraum und eine Bittiefe für eine neue Zeichnung.", "Paint und bearbeiten Sie es in HDR.", "Vorschau der gedruckten Farben mit Proof."]
figure: "1: Zeichnungsvoreinstellungen. 2: Farbraum und Bittiefe. 3: Erstellen, wodurch die neue Zeichnung geöffnet wird."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: Zeichnungsvoreinstellungen. 2: Farbraum und Bittiefe. 3: Erstellen, wodurch die neue Zeichnung geöffnet wird."}
---

## Wählen Sie die Farbe für eine neue Zeichnung

Wenn Sie **File → New…** auswählen, bietet das Menü **Preset** einige Ausgangspunkte. **Standard drawing** eignet sich für die meisten Kunstwerke und alles, was Sie online teilen. **Wide color** kann die lebendigeren Farben speichern, die auf vielen modernen Bildschirmen angezeigt werden, und **Photo editing** sorgt für zusätzliche Präzision, sodass starke Anpassungen keine Streifenbildung in glatten Verläufen verursachen.

**Color space** legt den Farbbereich fest, den die Zeichnung aufnehmen kann, und **Bit depth** legt fest, wie fein jede Farbe gespeichert wird. Wenn Sie Ihre Meinung später ändern, verwenden Sie **Edit → Convert Color Space…** oder **Edit → Change Bit Depth…**. Fotos behalten die Farben bei, mit denen sie aufgenommen wurden, sodass beim Öffnen nichts eingerichtet werden muss.

## Arbeiten Sie in HDR

Wählen Sie **16-bit float HDR** oder **32-bit float HDR** als Bittiefe, um eine HDR-Zeichnung zu erstellen. HDR-Zeichnungen können Farben enthalten, die heller als Weiß sind, wie etwa Sonnenlicht und leuchtende Lichter. Wenn Sie eine HDR-Zeichnung bearbeiten, erscheint unterhalb des Farbkreises ein Intensitätsbogen, sodass Sie auch mit Farben malen können, die heller als Weiß sind.

HDR wird mit voller Helligkeit angezeigt, wenn Ihr Browser und Ihr Display dies unterstützen. Auf anderen Bildschirmen sehen Sie stattdessen eine Standardversion des Bildes. Wenn Sie eine HDR-Zeichnung exportieren, können Sie eine HDR JPEG oder AVIF speichern, die auch auf normalen Bildschirmen gut aussieht, wie unter [Ein Bild exportieren](/de/docs/output/export/)] beschrieben.

## Vorschau mit Proof

Bevor Sie Ihre Arbeit an einen Drucker senden, zeigt **View → Proof** an, wie die Farben auf dem Papier voraussichtlich aussehen werden. Wählen Sie im Bereich **Proof** die Option **Print** aus und wählen Sie dann das Farbprofil des Druckers oder Druckdienstes aus oder fügen Sie es hinzu. **Gamut warning** markiert die Farben, die der Drucker nicht reproduzieren kann, sodass Sie sie vor dem Drucken anpassen können.

Bei HDR-Zeichnungen zeigt die Option **SDR** im selben Bedienfeld an, wie das Bild auf einem normalen Bildschirm aussehen wird, und ermöglicht Ihnen die Feinabstimmung der Helligkeit und des Kontrasts dieser Version.
