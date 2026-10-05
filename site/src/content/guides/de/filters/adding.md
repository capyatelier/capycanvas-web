---
title: "Filter hinzufügen und bearbeiten"
description: "Filter hinzufügen und ihre Einstellungen im Bedienfeld Eigenschaften ändern."
related: ["filters/how-filters-apply", "filters/tone", "filters/color", "start/command-search"]
---

Sie können einen Filter [auf einer eigenen Ebene oder angehängt an eine Ebene](/de/docs/filters/how-filters-apply/)
hinzufügen und seine Einstellungen im Bedienfeld **Eigenschaften** ändern.

## Bedienfeld Filter

Sie können einen Filter auf einer eigenen Ebene hinzufügen, indem Sie ihn im
Bedienfeld **Filter** auswählen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Filter**.
- Wählen Sie in den Arbeitsbereichen Malen und Foto in der rechten Spalte die Registerkarte **Filter** neben **Eigenschaften** aus.
- Wählen Sie im Arbeitsbereich Skizze in der Titelleiste **Filter** aus.

![Das Bedienfeld Filter mit dem Kategoriemenü, der Suchschaltfläche und Filterzeilen mit Vorschauen.](shot:filters/filters-panel)

Ist eine Ebene ausgewählt, zeigt jede Zeile eine Vorschau des Filters auf dieser
Ebene und den Ebenen darunter. Animierte Filter haben vor ihrem Symbol eine
Markierung.

Das Menü oben zeigt eine Kategorie oder **Alle Filter**. **Filter suchen**
findet einen Filter nach Namen innerhalb der gewählten Kategorie.

Nachdem Sie einen Filter hinzugefügt haben, kommt das Bedienfeld
**Eigenschaften** neben **Filter** in den Vordergrund.

## Menü Filter

Sie können einen Filter auf einer eigenen Ebene über das Menü **Filter**
hinzufügen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie im Menü **Filter** eine Kategorie und einen Filter.
- Wählen Sie im Arbeitsbereich Skizze **Hauptmenü > Filter** und dann eine Kategorie und einen Filter.
- Geben Sie den Namen des Filters in die [Befehlssuche](/de/docs/start/command-search/) ein.

Das Menü enthält außerdem [**Frequenztrennung…**](/de/docs/retouch/dodge-burn/),
und sein Untermenü **Füllung** fügt [Füllebenen](/de/docs/layers/types/) hinzu.
In der Schnellmaske und während Sie eine Auswahlebene bearbeiten, lassen sich
keine Filter hinzufügen.

## Anpassen

Sie können einen Filter hinzufügen, der auf die aktuelle Auswahl maskiert ist.
Wählen Sie in der Auswahlleiste auf der Leinwand **Anpassen** aus und wählen Sie
dann eine Kategorie und einen Filter.

![Die Auswahlleiste mit dem Menü Anpassen, geöffnet bei der Kategorie Tonwert.](shot:filters/selection-adjust)

## Filter hinzufügen

Sie können einen Filter an die ausgewählte Ebene anhängen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie unten im Bedienfeld Ebenen oder im Bedienfeld **Eigenschaften** **Filter hinzufügen** aus.
- Öffnen Sie das Menü der Ebene und wählen Sie **Filter hinzufügen**.

![Das Menü Filter hinzufügen, geöffnet vom unteren Rand des Bedienfelds Ebenen.](shot:filters/add-filter-menu)

**Filter hinzufügen** funktioniert bei nicht gesperrten Malebenen, Fotoebenen
und Gruppen, die nicht auf Durchreichen gestellt sind. Sein Menü enthält alle
Kategorien außer **Füllung**.

## Schublade Filter im Arbeitsbereich Skizze

Im Arbeitsbereich Skizze können Sie Filter in der Schublade **Filter** wählen
und ihre Einstellungen ändern. Wählen Sie in der Titelleiste **Filter** aus und
wählen Sie dann unter **Filterart** eine Kategorie und unter **Filter** einen
Filter aus.

![Die Schublade Filter im Arbeitsbereich Skizze mit den Spalten Filterart, Filter und Eigenschaften.](shot:filters/sketch-drawer)

| Ausgewählte Ebene | Auswahl eines Filters in der Schublade |
| --- | --- |
| Ein Filter | Ersetzt ihn und behält Namen, Maske, Deckkraft, Verrechnungsmodus und Position bei |
| Eine beschnittene Ebene | Hängt den Filter an diese Ebene an |
| Jede andere Ebene | Fügt den Filter auf einer eigenen Ebene darüber hinzu |

**Abbrechen** unten unter **Filterart** löscht den ausgewählten Filter und
schließt die Schublade. Um den Filter zu behalten, wählen Sie erneut **Filter**
in der Titelleiste aus.

## Bedienfeld Eigenschaften

Sie können die Einstellungen des ausgewählten Filters im Bedienfeld
**Eigenschaften** ändern.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Eigenschaften**.
- Wählen Sie in den Arbeitsbereichen Malen und Foto in der rechten Spalte die Registerkarte **Eigenschaften** aus.
- Verwenden Sie im Arbeitsbereich Skizze die rechte Spalte der Schublade **Filter**.

![Das Bedienfeld Eigenschaften für Kurven mit dem Seitenmenü, Punkt aufnehmen, Gezielte Anpassung und dem Kurvendiagramm.](shot:filters/properties-curves)

| Steuerelement | Verwendung |
| --- | --- |
| Seitenmenü | Zeigt eine Seite der Filtereinstellungen, etwa die Kurve **Rot** von **Kurven**. |
| Regler | Ziehen Sie, oder wählen Sie **−** oder **+** aus. Wählen Sie den Wert aus, um eine Zahl, eine Einheit oder einen Ausdruck wie `85/2` einzugeben. Leeren Sie den Wert, um den Standardwert wiederherzustellen. |
| Farbe | Öffnet [Farbe bearbeiten](/de/docs/color/edit-color/). **Ausgewählte Farbe verwenden** setzt die aktuelle Farbe ein. |
| Verlauf | Bearbeitet die Farbstopps wie beim Werkzeug [Farbverlauf](/de/docs/drawing/gradient/). |

Jedes Ziehen ist ein Rückgängig-Schritt, und **Escape**
während des Ziehens stellt den Wert wieder her. Manche Einstellungen nehmen eingegebene
Werte über die Enden des Reglers hinaus an.

Größen in px sind Leinwandpixel. Nach [**Bildgröße…**](/de/docs/transform/image/)
skaliert der Effekt mit dem Bild, und die Zahl bleibt gleich.

Während **Tiefen/Lichter**, **Klarheit** oder **Dunst entfernen** aktualisiert
wird, endet der Titel des Bedienfelds auf „Wird aktualisiert…“. Die Einstellungen
eines gesperrten Filters lassen sich nicht ändern.

## Tonwerte aus dem Bild setzen

**Tonwertkorrektur**, **Kurven** und **Weißabgleich** haben oben im Bedienfeld
**Eigenschaften** Schaltflächen, die das Bild so auslesen, wie es beim Filter
ankommt.

| Schaltfläche | Filter | Wirkung |
| --- | --- | --- |
| **Punkt aufnehmen > Schwarzpunkt wählen**, **Neutralen Punkt auswählen** oder **Weißpunkt wählen** | **Tonwertkorrektur**, **Kurven** | Klicken Sie auf die Leinwand, um diesen Punkt zu setzen. |
| **Neutralen Punkt auswählen** | **Weißabgleich** | Klicken Sie auf die Leinwand, um **Temperatur** und **Tönung** so zu setzen, dass der Punkt neutral wird. |
| **Auto** | **Tonwertkorrektur** | Setzt **Schwarz**, **Weiß** und **Mitteltöne** der Eingabe für die aktuelle Seite anhand des Bildes. Lautet **Abbrechen**, solange die Berechnung läuft. |
| **Gezielte Anpassung** | **Kurven** | Ziehen Sie auf der Leinwand nach oben oder unten, um die Kurve beim Tonwert unter dem Zeiger anzuheben oder abzusenken. |

Auf der Seite **RGB** ändern die Schaltflächen alle Kanäle, auf einer
Kanalseite nur diesen Kanal.

Solange eine Pipette oder **Gezielte Anpassung** aktiv ist, zeigt eine Leiste am
unteren Rand der Leinwand eine Aufforderung und **Abbrechen** oder **Fertig**.
Lässt sich ein Punkt nicht verwenden, erscheint eine Meldung, und die Pipette
bleibt aktiv.

## Bedienfeld Histogramm

Sie können die Tonwerte des Bildes im Bedienfeld **Histogramm** prüfen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Histogramm**.
- Wählen Sie im Arbeitsbereich Foto oben in der rechten Spalte die Registerkarte **Histogramm** aus.

![Das Bedienfeld Histogramm mit Quellen- und Kanalmenü, dem Diagramm und den Schaltflächen zur Beschneidungsanzeige.](shot:filters/histogram)

| Steuerelement | Auswahlmöglichkeiten |
| --- | --- |
| Quellenmenü (anfangs **Sichtbar**) | **Sichtbar**, **Ausgewählte Ebene**, **Referenz** (die Ebenen mit **Als Referenz verwenden**), **Auswahl** (das sichtbare Bild innerhalb der Auswahl) |
| Kanalmenü (anfangs **RGB**) | **RGB**, **Rot**, **Grün**, **Blau**, **Leuchtdichte** |
| **Logarithmische Häufigkeiten** | Zeigt die Pixelanzahl auf einer logarithmischen Skala. |
| **Schatten**, **Lichter** | Markieren beschnittene Bereiche auf der Leinwand. In einer HDR-Zeichnung lauten sie **Schatten (SDR)** und **Lichter (SDR)**. |

Der Status unter dem Diagramm lautet „Exakt“, sobald die Zählung abgeschlossen
ist.

## Bedienfeld Wellenform

Sie können Helligkeit und Farbe von links nach rechts über das Bild im
Bedienfeld **Wellenform** sehen.

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Wellenform**.
- Wählen Sie im Arbeitsbereich Foto die Registerkarte **Wellenform** neben **Histogramm** aus.

Das Bedienfeld hat ein eigenes Kanalmenü und **Logarithmische Häufigkeiten**.
Das Quellenmenü und die Schaltflächen zur Beschneidungsanzeige teilt es mit dem
Bedienfeld **Histogramm**.
