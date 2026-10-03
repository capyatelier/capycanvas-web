---
title: "Pinseleinstellungen speichern und zurücksetzen"
description: "Behalten Sie Ihre Pinseleinstellungen bei, probieren Sie neue aus und kehren Sie zu den Standardeinstellungen zurück."
purpose: "Wenn Sie die Einstellungen eines Pinsels ändern, merkt sich Capy Canvas diese als Teil Ihres Arbeitsbereichs. Sie müssen nichts manuell speichern. Wenn Sie experimentieren möchten, ohne ein Setup zu verlieren, das Ihnen gefällt, erstellen Sie zunächst eine Kopie des Arbeitsbereichs."
techniques: ["Behalten Sie Ihre Änderungen im aktuellen Arbeitsbereich.", "Probieren Sie ein anderes Setup in einer Kopie des Arbeitsbereichs aus.", "Setzen Sie Pinsel zurück, ohne Ihr Layout zu ändern."]
figure: "1: Aktiver Arbeitsbereich. 2: Pinseleinstellungen werden damit gespeichert. 3: Bestätigung „Alle Pinsel zurücksetzen“."
related: ["advanced/brush-engine", "workspace/management"]
image: {"light": "/assets/guides/advanced-custom-brushes-light.webp", "dark": "/assets/guides/advanced-custom-brushes-dark.webp", "alt": "1: Aktiver Arbeitsbereich. 2: Pinseleinstellungen werden damit gespeichert. 3: Bestätigung „Alle Pinsel zurücksetzen“."}
---

## Ihre Änderungen bleiben für Sie erhalten

Wählen Sie einen Pinsel aus und ändern Sie seine Einstellungen im Bedienfeld **Tool**. Wenn Sie zu einem anderen Pinsel wechseln und später wiederkommen, sind Ihre Änderungen noch vorhanden. Jeder Arbeitsbereich speichert die Einstellungen für jeden Pinsel einzeln, zusammen mit den zuletzt verwendeten Werkzeugen und der Art und Weise, wie die Bedienfelder angeordnet sind.

Pinseleinstellungen gehören zum Arbeitsbereich, nicht zu Ihren Zeichnungen. Durch das Öffnen einer Zeichnung werden Ihre Pinsel nicht verändert, und durch das Speichern einer Zeichnung werden diese nicht gespeichert.

## Versuchen Sie es mit einem anderen Setup

Um frei zu experimentieren, wählen Sie **Window → Workspaces → New Workspace…**. Dadurch wird eine Kopie des aktuellen Arbeitsbereichs mit seinen Pinseln und seinem Layout unter einem neuen Namen erstellt. Nehmen Sie Ihre Änderungen in der Kopie vor. Wenn Sie zum ursprünglichen Arbeitsbereich zurückkehren, werden dessen Einstellungen genau so wiederhergestellt, wie Sie sie verlassen haben.

[Arbeitsbereiche verwalten](/de/docs/workspace/management/) erklärt, wie man zwischen Arbeitsbereichen wechselt und auswählt, welche in der Titelleiste angezeigt werden.

## Fangen Sie neu an

**Window → Workspaces → Reset All Brushes…** setzt alle Pinsel im aktuellen Arbeitsbereich auf ihre ursprünglichen Einstellungen zurück, einschließlich der Pinsel, die Sie gerade nicht verwenden. Ihre Zeichnungen und Ihr Panel-Layout sind davon nicht betroffen.

Wenn Sie stattdessen möchten, dass die Panels wieder dort sind, wo sie begonnen haben, verwenden Sie **Restore Starting Layout…**. Dadurch werden die Bedienfelder zurückgesetzt, Ihre Pinseleinstellungen bleiben jedoch erhalten, sodass die beiden Zurücksetzungen niemals die Arbeit des anderen rückgängig machen.
