---
title: "Maskierung"
description: "Geben Sie dem Farbband, der Scheibe und dem Block eigene Farbebenen mit bearbeitbaren Kanten."
purpose: "In dieser Phase erhält jede Form ihre eigene Farbschicht. Die Farbe füllt die gesamte Ebene aus und eine Maske entscheidet, welchen Teil davon Sie sehen. Da nichts gelöscht wird, können Sie den Rand jeder Form später anpassen, indem Sie einfach auf die Maske malen."
techniques: ["Wählen Sie eine Form mit einem Lasso oder einer automatischen Auswahl aus.", "Verwandeln Sie die Auswahl in eine Maske und füllen Sie die Ebene mit Farbe.", "Paint auf der Maske, um die Kante anzupassen."]
figure: "1: Miniaturansicht der ausgewählten Maske im Menüband. 2: Band, Scheibe und Block unter der Strichzeichnung. 3: Radiergummi, der Teile der Maske verdeckt."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Miniaturansicht der ausgewählten Maske im Menüband. 2: Band, Scheibe und Block unter der Strichzeichnung. 3: Radiergummi, der Teile der Maske verdeckt."}
---

## 1. Wählen Sie eine Form aus

Verstecken Sie **Sketch** und **Color rough**. Wählen Sie **Lasso selection** und zeichnen Sie das Farbband sorgfältig nach, wie im Beispiel.

Wenn Ihre Strichzeichnungen um eine Form geschlossen sind, kann **Auto select** dies mit einem Klick erledigen. Markieren Sie **Line art** als Referenzebene, indem Sie im Menü **Layer Settings → Use as reference** auswählen. Wählen Sie dann **Auto select**, wählen Sie im Werkzeugbedienfeld **Sample reference layers** und klicken Sie in die Form. [Auswahltools](/de/docs/tools/selections/) erläutert die Einstellungen, die steuern, wie weit die Auswahl reicht.

## 2. Erstellen Sie die maskierte Farbebene

Fügen Sie unter der Strichzeichnung eine neue Ebene mit dem Namen **Ribbon** hinzu. Öffnen Sie bei noch aktiver Auswahl das Menü der Multifunktionsleiste und wählen Sie **Mask → Mask: reveal selection**. Die Ebene verfügt jetzt über eine Maske, die nur die Form des Bandes anzeigt.

Klicken Sie auf die Miniaturansicht der Multifunktionsleiste und wählen Sie die Farbe der Multifunktionsleiste aus. Wählen Sie **Select → Select all pixels** und dann **Edit → Fill selection**, um die gesamte Ebene mit Farbe zu füllen, und schließen Sie mit **Select → Deselect pixels** ab. Es ist nur das Band zu sehen, aber die Farbe setzt sich unter der Maske fort, bereit für den Fall, dass Sie die Form erweitern möchten.

## 3. Passen Sie die Kante an

Klicken Sie auf die Miniaturansicht der Maske im Menüband, um die Maske zu bearbeiten. Jetzt zeigt jeder Pinsel mehr von der Farbe an der Stelle, an der Sie malen, und der **Eraser** verbirgt sie wieder. Klicken Sie erneut auf die Miniaturansicht der Farbe, wenn Sie die Farbe selbst ändern möchten.

Erstellen Sie **Disc** und **Block** auf die gleiche Weise. Halten Sie die Scheibe unter dem Band und den Block unter der Scheibe, mit Strichzeichnungen über allen dreien. Speichern Sie Ihre Zeichnung und fahren Sie dann mit [Rendering](/de/docs/illustration/render/).
