---
title: "Pannello Livelli"
description: "Cosa mostra e cosa fa ogni parte del pannello Livelli, compreso il menu del livello."
related: ["layers/working", "layers/settings", "layers/types", "layers/masks"]
---

Il pannello **Livelli** elenca i livelli del disegno, con il livello più in
primo piano in alto. L'intestazione mostra le impostazioni del livello attivo.

![Il pannello Livelli con i livelli dell'illustrazione finita.](shot:layers/panel "1 Intestazione · 2 Righe dei livelli · 3 Pulsanti in basso")

## Aprire il pannello Livelli

Esegui una delle seguenti operazioni:

- Scegli **Finestra > Livelli**.
- In Pittura, seleziona **Livelli** nella colonna destra.
- In Schizzo, seleziona **Pannello Livelli** nella barra del titolo.
- Digita «Pannello Livelli» nella [ricerca comandi](/it/docs/start/command-search/).

In Foto, il pannello è aperto nella colonna destra.

## Intestazione

![L'intestazione del pannello Livelli per Ribbon shading, con Ritaglia al livello sottostante attivo.](shot:layers/panel-header "1 Metodo di fusione del livello · 2 Opacità livello · 3 Blocca alfa · 4 Blocca modifica · 5 Ritaglia al livello sottostante · 6 Usa livelli selezionati come riferimenti")

1. **Metodo di fusione del livello** mostra il metodo attuale e apre il [menu dei metodi di fusione](/it/docs/layers/blend-modes/).
2. **Opacità livello**, da 0 a 100. Trascina il cursore o digita un valore.
3. **Blocca alfa**.
4. **Blocca modifica**.
5. **Ritaglia al livello sottostante**. Per un filtro, il pulsante diventa **Applica a *livello*** o **Applica ai livelli sottostanti** (vedi [Come si applicano i filtri](/it/docs/filters/how-filters-apply/)).
6. **Usa livelli selezionati come riferimenti**. Diventa **Smetti di usare questo livello come riferimento** quando il livello attivo è l'unica riga selezionata ed è già un riferimento.

Un interruttore evidenziato è attivo (vedi [Impostazioni livello](/it/docs/layers/settings/)).
**Metodo di fusione del livello** e **Opacità livello** non sono disponibili per
i livelli di selezione e per i livelli bloccati.

## Righe dei livelli

![La riga di Ribbon, con la maschera, Blocca alfa attivo e l'opacità all'80%.](shot:layers/panel-row "1 Occhio · 2 Pulsante della riga · 3 Miniatura · 4 Collegamento della maschera · 5 Miniatura della maschera · 6 Nome e sottotitolo · 7 Lucchetto · 8 Maniglia")

I livelli di un gruppo appaiono rientrati sotto il gruppo.

1. L'occhio nasconde o mostra il livello.
2. Il pulsante della riga aggiunge la riga alla selezione o la toglie, senza cambiare il livello attivo. Mostra un pennello sul livello che riceve la pittura, un faro su un livello di riferimento e un segno di spunta sulle altre righe selezionate.
3. Seleziona la miniatura per dipingere sui pixel del livello. Su un gruppo, la miniatura espande o comprime il gruppo.
4. Su un livello con maschera, il pulsante di collegamento stabilisce se la maschera si sposta insieme al livello (**Scollega maschera dal livello**, **Collega maschera al livello**).
5. Seleziona la miniatura della maschera per dipingere sulla [maschera](/it/docs/layers/masks/).
6. Il sottotitolo sotto il nome mostra la modalità colore, il metodo di fusione e l'opacità quando non sono Colore pieno, Normale e 100%, per esempio «Moltiplica · 60%».
7. Un'icona a lucchetto indica un livello bloccato, e un'icona di blocco alfa indica un livello con **Blocca alfa** attivo.
8. Trascina la maniglia per [spostare il livello](/it/docs/layers/working/).

Seleziona una riga per renderla il livello attivo e l'unica riga selezionata.
[Tipi di livello](/it/docs/layers/types/) mostra la miniatura di ogni tipo.

Fai **Ctrl**+clic sulla miniatura di un livello di pittura per caricarne
l'opacità come selezione, o sulla miniatura della maschera per caricare la
maschera. Aggiungi **Maiusc** per aggiungere alla selezione, **Alt** per
sottrarre o **Maiusc+Alt** per intersecare.

## Indicatori delle righe

- Un contorno attorno alla miniatura o alla miniatura della maschera indica dove dipingono i pennelli.
- Una barra a sinistra delle miniature unisce i [livelli ritagliati](/it/docs/layers/settings/) al livello base.
- Un anello di catena tra due miniature unisce un [filtro collegato](/it/docs/filters/how-filters-apply/) alla riga sottostante.
- Un occhio sbiadito e barrato indica un livello attivo ma nascosto dal suo gruppo, o un filtro collegato il cui livello è nascosto.
- Una miniatura della maschera sbiadita indica una maschera disattivata.
- Mentre la [Maschera veloce](/it/docs/selections/quick-mask/) è attiva, in cima appare una riga **Maschera veloce**.

## Pulsanti in basso

![I pulsanti in fondo al pannello Livelli.](shot:layers/panel-footer "1 Nuovo livello · 2 Nuovo gruppo · 3 Nuovo livello di selezione · 4 Aggiungi maschera · 5 Aggiungi filtro · 6 Importa immagine come livello… · 7 Elimina livelli selezionati · 8 Azioni livello")

1. **Nuovo livello** aggiunge un livello di pittura.
2. **Nuovo gruppo**. Con più righe selezionate, le raggruppa.
3. **Nuovo livello di selezione** (vedi [Livelli di selezione](/it/docs/selections/selection-layers/)).
4. **Aggiungi maschera**.
5. **Aggiungi filtro** collega un filtro al livello attivo.
6. **Importa immagine come livello…**
7. **Elimina livelli selezionati**.
8. **Azioni livello** apre il menu del livello attivo.

Un pulsante non è disponibile quando la sua azione non si applica al livello
attivo, per esempio **Aggiungi maschera** su un livello bloccato (vedi
[Lavorare con i livelli](/it/docs/layers/working/)).

## Scorrimenti e pressioni prolungate

Con una penna o un dito:

- Scorri una riga verso sinistra per mostrare **Elimina** alla sua estremità destra. Seleziona **Elimina** per eliminare il livello, o scorri verso destra per nascondere il pulsante.
- Scorri un livello di pittura verso destra per attivare o disattivare **Blocca alfa**.
- Scorri un gruppo verso destra per attivare o disattivare **Attraversa**.
- Tieni premuta una riga per aprire il menu del livello. Muoviti senza sollevare per trascinare invece la riga.

![Una riga scorsa verso sinistra, con Elimina alla sua estremità destra.](shot:layers/panel-swipe-delete)

Uno scorrimento breve non cambia nulla. Gli scorrimenti non funzionano con il
mouse, sulla maniglia o sui livelli bloccati.

## Menu del livello

Puoi aprire un menu di comandi per ogni livello.

Esegui una delle seguenti operazioni:

- Apri il menu **Livello**. Contiene il menu del livello attivo, senza **Aggiungi filtro**.
- Fai clic con il pulsante destro su una riga, o tienila premuta con una penna o un dito.
- Seleziona **Azioni livello** in fondo al pannello.
- Con lo stato attivo su una riga, premi **Maiusc+F10** o il tasto Menu.

![Il menu del livello Ribbon.](shot:layers/panel-menu)

| Voce | Contenuto |
| --- | --- |
| **Nuovo** | **Nuovo livello**, **Nuovo livello ritagliato**, **Nuovo gruppo**, **Riempimento tinta unita**, **Riempimento sfumato**, **Nuovo livello Scherma e brucia**, **Copia selezione su nuovo livello**, **Taglia selezione su nuovo livello** |
| **Aggiungi filtro** | I filtri da collegare al livello, per categoria |
| **Organizza** | **Rinomina livello…**, **Duplica**, **Raggruppa livelli selezionati** e, per un gruppo, **Separa gruppo** |
| **Metodo di fusione** | Tutti i [metodi di fusione](/it/docs/layers/blend-modes/) |
| **Impostazioni livello** | Le [impostazioni livello](/it/docs/layers/settings/) |
| **Maschera** | I comandi della [maschera](/it/docs/layers/masks/) |
| **Selezione pixel** | **Seleziona opacità del livello**, **Aggiungi opacità alla selezione**, **Sottrai opacità dalla selezione**, **Interseca con opacità del livello**, **Riempi selezione**, **Inverti selezione**, **Deseleziona pixel** |
| **Selezione righe dei livelli** | **Seleziona tutte le righe dei livelli**, **Deseleziona righe dei livelli** |
| **Visibilità** | **Mostra livello**, **Mostra livello e gruppi superiori**, **Isola livelli selezionati**, **Mostra tutti i livelli** |
| **Sposta livello / maschera** | Seleziona lo strumento [Operazione](/it/docs/transform/move-transform/) |
| **Unisci sotto**, **Unisci visibili**, **Crea livello dai visibili**, **Appiattisci immagine** | Vedi [Unire i livelli](/it/docs/layers/merging/) |
| **Svuota intero livello**, **Elimina livello** | **Svuota intero livello** appare solo sui livelli di pittura |

Aprire il menu di una riga rende attivo quel livello. Il menu di un gruppo
inizia con **Nuovo livello di selezione nel gruppo…** e
**Salva selezione corrente nel gruppo…**. I livelli di selezione hanno un menu proprio (vedi
[Tipi di livello](/it/docs/layers/types/)). Fai clic con il pulsante destro sulla
miniatura della maschera, o tienila premuta, per aprire il
[menu della maschera](/it/docs/layers/masks/).
