---
title: "Ritocco"
description: "Fase 2 del tutorial di fotoritocco: polvere e una macchia rimosse con i pennelli correttivi su un livello sopra la foto."
related: ["retouch/clone-heal", "layers/settings", "layers/working"]
---

Questa fase produce un livello *Retouch* che copre la polvere e una macchia
nella foto. Il livello fotografico non cambia.

## 1. Aggiungi un livello di ritocco

1. Seleziona **Nuovo livello** in fondo al pannello Livelli e rinomina il nuovo livello *Retouch*.
2. Scegli **Livello > Impostazioni livello > Usa livello sottostante come riferimento** ([Impostazioni livello](/it/docs/layers/settings/)).

Il livello fotografico diventa un livello di riferimento, e sulla sua riga, accanto
all'occhio, appare l'icona di un faro. Gli strumenti correttivi copiano dai
livelli di riferimento per impostazione predefinita e dipingono su *Retouch*.

![Il pannello Livelli con Retouch sopra il livello terrarium, che mostra l'icona di riferimento.](shot:photo/retouch-layers)

## 2. Rimuovi la polvere

Il **Pennello correttivo al volo** sostituisce ciò su cui dipingi con la trama
dell'area vicina più simile quando sollevi la penna
([Clonare e correggere](/it/docs/retouch/clone-heal/)). L'esempio rimuove la
polvere dal vetro alla base del terrario.

1. Scegli **Visualizza > Pixel reali**, o premi **Ctrl+1**, per vedere la foto al 100%.
2. Seleziona **Pennello correttivo al volo** nella barra strumenti Strumenti, o premi **S** finché non è selezionato.
3. Premi **]** finché il pennello non è più grande dei granelli.
4. Dipingi sopra ogni granello.

## 3. Rimuovi la macchia

Il **Pennello correttivo** dipinge con pixel copiati da una sorgente, poi li
adegua al colore e alla luminosità attorno al tratto.

1. Fai clic con il pulsante destro su **Pennello correttivo al volo** nella barra strumenti Strumenti, o tienilo premuto, e scegli **Pennello correttivo**.
2. Tieni premuto **Alt** e fai clic su un'area pulita accanto alla macchia, oppure seleziona **Imposta sorgente** in **Opzioni strumento** e fai clic sull'area pulita.
3. Dipingi sopra la macchia.

![Il disco della sorgente del Pennello correttivo sul vetro, con la sua barra di opzioni della sorgente.](shot:photo/retouch-disc-bar)

Un disco sulla tela indica la sorgente. Trascina il disco per spostare la
sorgente, o seleziona il disco per mostrarne la barra.

Per confrontare con la foto originale, nascondi *Retouch*.

Fase successiva: [Regolare ed esportare](/it/docs/photo/adjust/).
