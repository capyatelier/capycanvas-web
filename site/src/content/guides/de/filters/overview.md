---
title: "Filter und Anpassungen"
description: "Fügen Sie einen bearbeitbaren Filter hinzu und ändern Sie seine Einstellungen, wann immer Sie möchten."
purpose: "Filter verändern das Aussehen der darunter liegenden Ebenen, von einfachen Helligkeits- und Farbanpassungen bis hin zu Unschärfen und künstlerischen Effekten. Jeder Filter ist eine eigene Ebene, sodass Sie ihn später anpassen, ausblenden oder entfernen können, ohne die Farbe darunter zu berühren."
techniques: ["Suchen Sie einen Filter und fügen Sie ihn hinzu.", "Ändern Sie die Einstellungen in den Eigenschaften.", "Beschränken Sie einen Filter auf einen Teil der Zeichnung."]
figure: "1: Filterbereich. 2: Die Einstellungsebene in Ebenen. 3: Registerkarte „Eigenschaften“ zum Bearbeiten."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1: Filterbereich. 2: Die Einstellungsebene in Ebenen. 3: Registerkarte „Eigenschaften“ zum Bearbeiten."}
---

## Fügen Sie einen Filter hinzu

Wählen Sie die Ebene aus, über der sich der Filter befinden soll, und öffnen Sie dann das Bedienfeld **Filters**. Filter sind in Gruppen wie „Ton“, „Farbe“, „Unschärfe“ und „Künstlerisch“ sortiert. Sie können Filter in das Suchfeld eingeben, um einen Filter nach Namen zu finden, z. B. „**Curves**“ oder „**Gaussian Blur**“. Wählen Sie einen Filter aus, um ihn als neue Ebene hinzuzufügen. Das Menü **Filter** oben im Fenster listet dieselben Filter auf.

In Sketch öffnet stattdessen die Schaltfläche **Filters** in der Titelleiste eine Schublade. Wählen Sie links eine Gruppe und dann einen Filter aus. Die entsprechenden Einstellungen werden rechts angezeigt.

## Ändern Sie die Einstellungen

Wählen Sie die Ebene des Filters aus und öffnen Sie **Properties**, um seine Einstellungen anzuzeigen. Einige Filter verwenden Schieberegler, während andere eine Kurve oder eine Farbe verwenden. Ändern Sie jeweils eine Einstellung und beobachten Sie dabei die Zeichnung. Wenn Sie sehen möchten, wie sich die Farbtöne des Bildes während der Arbeit verteilen, öffnen Sie **View → Histogram…**.

Blenden Sie die Filterebene ein und aus, um das Ergebnis mit dem Original zu vergleichen, oder verringern Sie die Deckkraft, um den gesamten Effekt sanfter zu gestalten. Sie können jederzeit zu den Eigenschaften zurückkehren, um die Einstellungen erneut zu ändern.

## Begrenzen Sie, wo es gilt

Ein Filter wirkt sich auf alles aus, was sich in der Ebenenliste darunter befindet. Um ihn von einem Teil der Zeichnung fernzuhalten, fügen Sie der Filterebene eine [mask](/de/docs/layers/masks/)] hinzu oder platzieren Sie den Filter innerhalb einer Gruppe, sodass er nur die Ebenen in dieser Gruppe beeinflusst. Behalten Sie Strichzeichnungen und andere Details, die nicht geändert werden sollen, über dem Filter.

Wenn Sie mehrere Filter verwenden, ist deren Reihenfolge wichtig. Versuchen Sie daher, sie nach oben oder unten zu verschieben, wenn das Ergebnis nicht Ihren Erwartungen entspricht. Ein vollständiges Beispiel mit einem Foto finden Sie unter [Ein Foto bearbeiten](/de/docs/filters/image-editing/).
