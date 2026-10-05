---
title: "Softproof"
description: "Softproof eines Drucks im Bedienfeld Softproof, die Farbumfangswarnung und das Bildschirmkennzeichen in der Fußleiste."
related: ["color-management/hdr", "color-management/color-spaces", "files/export", "start/canvas"]
---

Im Bedienfeld **Softproof** können Sie sehen, wie eine Zeichnung gedruckt aussehen
wird, ohne den Bildinhalt zu ändern.

## Bedienfeld Softproof

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Fenster > Softproof**.
- Wählen Sie **Bedienfeld Softproof** in der Befehlssuche.
- Wählen Sie in den Arbeitsbereichen Malen und Foto die Registerkarte **Softproof** neben **Navigator** aus.

Wählen Sie oben im Bedienfeld einen Modus aus:

- **Aus** zeigt die Zeichnung normal.
- **SDR** zeigt die SDR-Fassung einer [HDR-Zeichnung](/de/docs/color-management/hdr/). Nur HDR-Zeichnungen haben diesen Modus.
- **Druck** simuliert einen Druck mit einem ICC-Profil.

Der Softproof erscheint auf der Leinwand und im Navigator, nie in Exporten oder im
Histogramm. Die Wahl eines Modus markiert die Zeichnung nicht als geändert. Eine
erneut geöffnete Zeichnung beginnt mit ausgeschaltetem Softproof, behält aber ihr
Druckprofil.

## Softproof ein- und ausschalten

Führen Sie eine der folgenden Aktionen aus:

- Wählen Sie **Ansicht > Softproof**.
- Drücken Sie **Strg+Alt+P**. Die Tastenkürzelbelegungen Photoshop-Stil und Krita-Stil verwenden außerdem **Strg+Y**.

Der Softproof schaltet sich in dem zuletzt verwendeten Modus ein (anfangs SDR für
HDR-Zeichnungen und Druck für SDR-Zeichnungen). Das Bedienfeld Softproof öffnet sich,
und **Ansicht > Softproof** zeigt ein Häkchen.

Auf der Seite [Tastenkürzel](/de/docs/input/keyboard/) heißt der Befehl
**Softproof-Farben**. Sie können ihm eine Taste zuweisen, die den Softproof nur zeigt,
solange Sie sie gedrückt halten.

## Druck-Softproof

Sie können einen Druck mit einem RGB-, CMYK- oder Graustufen-ICC-Profil simulieren.
Wählen Sie **Druck** aus und wählen Sie ein **Profil**. Die Leinwand zeigt erst einen
Softproof, wenn Sie ein Profil gewählt haben.

Solange der Druck-Softproof aktiv ist, steht in der Fußleiste „Softproof: *Profil*“.
Schlägt der Softproof fehl, steht dort „Softproof nicht verfügbar“, mit dem Grund im
Tooltip.

Profil und Optionen werden in der Zeichnung gespeichert. Die Wahl eines Profils
markiert die Zeichnung als geändert und ist ein Rückgängig-Schritt. Rückgängig
entfernt das Profil und schaltet den Softproof aus. Nur das aktive Druckprofil wird in
der `.capy`-Datei gespeichert. Wenn Sie das in der Zeichnung gespeicherte Profil
ersetzen, wird das alte zuerst zu **Gespeicherte Profile** hinzugefügt.
HDR-Zeichnungen werden aus ihrer SDR-Fassung geprüft.

![Das Bedienfeld Softproof auf seiner Seite Druck mit Adobe RGB (1998) als Profil.](shot:color-management/proof-panel-print)

### Profil

Die Liste enthält das in der Zeichnung gespeicherte **Dokumentprofil**, **Gespeicherte
Profile** aus der Bibliothek und **Standardfarbräume**. **Profil hinzufügen…** fügt
der Bibliothek eine `.icc`- oder `.icm`-Datei hinzu und wählt sie aus, und **Profile
verwalten…** öffnet die Farbprofilbibliothek.

### Simulieren

**Farben**, **Schwarze Druckfarbe** (Standard) oder **Papier & Druckfarbe**. **Papier
& Druckfarbe** simuliert auch die schwarze Druckfarbe.

### Wiedergabeabsicht

**Relativ** (Standard), **Wahrnehmungsbasiert**, **Sättigung** oder **Absolut**.

### Schwarzpunktkompensation

Standardmäßig aktiviert. Bei **Absolut** nicht verfügbar.

### Farbumfangswarnung

Derselbe Schalter wie der weiter unten beschriebene Befehl **Farbumfangswarnung**.

## Farbprofilbibliothek

Wählen Sie **Profile verwalten…** in der Liste **Profil** oder auf der Seite
**Farbe** der [Einstellungen](/de/docs/preferences/) aus, um die
**Farbprofilbibliothek** zu öffnen.

- **ICC-Profil importieren…** fügt eine `.icc`- oder `.icm`-Datei mit bis zu 16 MiB hinzu.
- **In Profilmenüs anzeigen** und **In Profilmenüs ausblenden** legen fest, welche Profile die Liste **Profil** anbietet.
- **Entfernen** nimmt ein Profil aus der Bibliothek.

Die Bibliothek fasst bis zu 128 Profile und insgesamt 64 MiB.

## Farbumfangswarnung

Sie können die Farben, die das Druckprofil nicht wiedergeben kann, auf der Leinwand
als mittleres Grau anzeigen. Führen Sie eine der folgenden Aktionen aus:

- Aktivieren Sie **Farbumfangswarnung** auf der Seite Druck des Bedienfelds Softproof.
- Drücken Sie **Strg+Umschalt+Y**.
- Wählen Sie **Farbumfangswarnung** in der Befehlssuche.

In der Fußleiste steht „Softproof: *Profil* · Farbumfangswarnung“. Bei
ausgeschalteter Drucksimulation steht dort „Farbumfang: *Profil*“.

Die Farbumfangswarnung ist erst verfügbar, wenn Sie ein Druckprofil gewählt haben.
Die Wahl von **Aus** oder **SDR** oder das Deaktivieren von **Ansicht > Softproof**
schaltet sie aus. Solange sie aktiv ist, zeigen HDR-Zeichnungen ihre SDR-Fassung.

## Bildschirmkennzeichen

Ein Kennzeichen links in der Fußleiste warnt, wenn der Bildschirm die Zeichnung oder
den Softproof nicht genau darstellen kann. Wählen Sie das Kennzeichen aus, um seine
Details zu öffnen, und wählen Sie es erneut aus oder drücken Sie **Escape**, um die
Details zu schließen.

| Kennzeichen | Erscheint, wenn |
| --- | --- |
| „Farben beschnitten“ | Der Bildschirm einige sichtbare Farben der Zeichnung oder des Softproofs nicht darstellen kann. |
| „Kann vom Druck abweichen“ | Der Druck-Softproof oder die Farbumfangswarnung aktiv ist und Capy Canvas nicht ermitteln kann, wie der Bildschirm Farben darstellt. |

Bei einer HDR-Zeichnung meldet das Kennzeichen auch, ob der Bildschirm HDR darstellt
(siehe [HDR](/de/docs/color-management/hdr/)).

![Das Kennzeichen Farben beschnitten in der Fußleiste mit seinen Details und Diese Farben hervorheben.](shot:color-management/screen-chip)

Aktivieren Sie **Diese Farben hervorheben** in den Details, um die beschnittenen
Farben auf der Leinwand blau zu markieren. Die Hervorhebung wird nie gespeichert.

Der Arbeitsbereich Skizze blendet die Fußleiste standardmäßig aus. Um sie einzublenden, wählen Sie
**Fenster > Titelleiste anpassen…** und aktivieren **Fußleiste anzeigen**.
