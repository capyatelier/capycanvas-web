---
title: "Scherma e brucia, separazione delle frequenze"
description: "Aggiungere un livello Scherma e brucia e dividere un livello in un livello Bassa e un livello Alta con Separazione di frequenze."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## Nuovo livello Scherma e brucia

Puoi aggiungere un livello grigio neutro in **Luce soffusa** per schermare e
bruciare.

Esegui una delle seguenti operazioni:

- Scegli **Livello > Nuovo > Nuovo livello Scherma e brucia**.
- Apri il menu di un livello nel pannello Livelli e scegli **Nuovo > Nuovo livello Scherma e brucia**.

Un livello grande quanto la tela, chiamato *Scherma e brucia*, appare sopra il
livello attivo e gli eventuali livelli ritagliati su di esso, e diventa il
livello attivo.

Non puoi aggiungere il livello a un gruppo bloccato, né mentre è aperto un
ritaglio o una trasformazione.

![Il pannello Livelli con un livello Scherma e brucia sopra la foto del terrario.](shot:retouch/dodge-burn-layer)

## Separazione di frequenze…

Puoi dividere il livello attivo per la separazione delle frequenze in un solo
passaggio.

Scegli **Filtro > Separazione di frequenze…**. In fondo alla tela si apre un
pannello con **Raggio**, 4 px per impostazione predefinita, e la tela mostra
l'anteprima della sfocatura del livello *Bassa* mentre cambi **Raggio**.

![Il pannello Separazione di frequenze con il valore Raggio.](shot:retouch/frequency-separation-panel)

**Applica** mette un gruppo chiamato *Separazione di frequenze* al posto del
livello:

- *Alta* contiene la trama fine, impostato su **Luce lineare**. È il livello più in alto e diventa il livello attivo.
- *Bassa* contiene i colori e i toni, sfocato con **Sfocatura gaussiana** al raggio scelto, impostato su **Normale**.

Il gruppo prende l'opacità e il ritaglio del livello originale. Il livello
originale resta subito sotto il gruppo, nascosto.

Il livello deve essere visibile e impostato su **Normale**, e il disegno deve
usare **Modifica > Fusione > Fusione percettiva** (vedi
[Spazio colore, profondità in bit e fusione](/it/docs/color-management/color-spaces/)).
Se il disegno cambia mentre il pannello è aperto, il pannello si chiude.

![Il pannello Livelli con il gruppo Separazione di frequenze, Alta sopra Bassa, e il livello originale nascosto.](shot:retouch/frequency-separation-layers)
