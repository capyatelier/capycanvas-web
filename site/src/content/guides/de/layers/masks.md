---
title: "Masken und Ausschnitte"
description: "Blenden Sie Teile einer Ebene aus, ohne sie zu löschen, und schattieren Sie innerhalb einer Form weiter."
purpose: "Eine Maske verbirgt einen Teil einer Ebene, ohne Farbe zu löschen, sodass Sie jederzeit Ihre Meinung darüber ändern können, wo die Kante sein soll. Durch das Ausschneiden bleibt eine Ebene innerhalb der Form der darunter liegenden Ebene. Dies ist die einfachste Möglichkeit, Schattierungen hinzuzufügen, die nie über die Linien hinausragen."
techniques: ["Erstellen Sie eine Maske aus einer Auswahl.", "Paint auf einer Maske, um Farbe ein- oder auszublenden.", "Beschneiden Sie die Schattierung auf der darunter liegenden Ebene."]
figure: "1: Miniaturansicht der Ribbon-Maske. 2: Über dem Band abgeschnittene Schattierung. 3: Auf die darunter liegende Ebene zuschneiden und die Alpha-Sperrsteuerung aktivieren."
related: ["tools/selections", "illustration/mask", "illustration/render"]
image: {"light": "/assets/guides/layers-masks-light.webp", "dark": "/assets/guides/layers-masks-dark.webp", "alt": "1: Miniaturansicht der Ribbon-Maske. 2: Über dem Band abgeschnittene Schattierung. 3: Auf die darunter liegende Ebene zuschneiden und die Alpha-Sperrsteuerung aktivieren."}
---

## Erstellen Sie eine Maske aus einer Auswahl

Zuerst [auswählen](/de/docs/tools/selections/) den Bereich, den Sie sichtbar halten möchten. Öffnen Sie dann das Menü der Ebene und wählen Sie **Mask → Mask: reveal selection**. Alles außerhalb der Auswahl wird ausgeblendet, aber nichts davon wird gelöscht. Sie können auch wählen **Mask: hide selection** um stattdessen den ausgewählten Bereich auszublenden. Denken Sie daran, die Auswahl anschließend aufzuheben, damit Ihre nächsten Striche nicht auf die Auswahl beschränkt sind.

Eine Maske kann nur Farbe anzeigen, die sich tatsächlich auf der Ebene befindet. Wenn Sie die Form später möglicherweise erweitern möchten, füllen Sie die gesamte Ebene mit Farbe, bevor Sie sie maskieren. So geht auch der Abschnitt [Masken erstellen](/de/docs/illustration/mask/) des Tutorials vor.

## Paint auf der Maske

Klicken Sie auf die Miniaturansicht der Maske neben der Ebene, um die Maske anstelle der Farbe zu bearbeiten. Jetzt zeigt jeder Pinsel überall dort, wo Sie malen, mehr von der Ebene an, und der **Eraser** verbirgt sie wieder. Die Farbe, mit der Sie malen, spielt auf einer Maske keine Rolle. Wenn Sie fertig sind, klicken Sie auf die Miniaturansicht des Malvorgangs, um zum normalen Malvorgang zurückzukehren.

Über das Menü der Maske können Sie die Maske für einen Moment ausschalten, umkehren oder löschen. Das Ausschalten ist eine praktische Möglichkeit, das Ergebnis mit der darunter liegenden Farbe zu vergleichen.

## Schneiden Sie die Schattierung auf eine Form zu

Fügen Sie direkt über einer Basisebene eine neue Ebene hinzu, öffnen Sie deren Menü und wählen Sie **Layer Settings → Clip to layer below**. Was auch immer Sie auf die beschnittene Ebene malen, zeigt jetzt nur noch die Stellen an, an denen sich auf der Basisebene Farbe befindet, sodass Sie frei schattieren können, ohne über die Kanten hinauszugehen. Sie können mehrere zugeschnittene Ebenen über derselben Basis stapeln, eine für Schatten und eine andere für Lichter.

**Alpha lock** ist eine einfachere Alternative, wenn Sie bereits vorhandene Striche, beispielsweise Strichzeichnungen, neu einfärben möchten. Dadurch bleibt die neue Farbe innerhalb der vorhandenen Striche auf derselben Ebene. Die [Renderstufe](/de/docs/illustration/render/) des Tutorials verwendet beide.
