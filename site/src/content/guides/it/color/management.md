---
title: "Spazi colore, HDR e prove colore"
description: "Scegli il modo in cui un disegno memorizza il colore, lavora in HDR e visualizza in anteprima come verrà stampata un'immagine."
purpose: "La maggior parte dei disegni ha un bell'aspetto con le impostazioni predefinite. Quando modifichi le foto, prepari il lavoro per la stampa o desideri i colori vivaci di uno schermo moderno, puoi scegliere la quantità di colore che può contenere il disegno e visualizzare in anteprima come apparirà altrove."
techniques: ["Scegli uno spazio colore e una profondità di bit per un nuovo disegno.", "Paint e modificare in HDR.", "Anteprima dei colori stampati con Proof."]
figure: "1: Preimpostazioni di disegno. 2: Spazio colore e profondità di bit. 3: Crea, che apre il nuovo disegno."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: Preimpostazioni di disegno. 2: Spazio colore e profondità di bit. 3: Crea, che apre il nuovo disegno."}
---

## Scegli il colore per un nuovo disegno

Quando si sceglie **File → New…**, il menu **Preset** offre alcuni punti di partenza. **Standard drawing** si adatta alla maggior parte delle opere d'arte e a tutto ciò che condividerai online. **Wide color** può contenere i colori più vividi mostrati da molti schermi moderni e **Photo editing** mantiene una precisione extra in modo che regolazioni forti non causino bande in gradienti uniformi.

**Color space** imposta la gamma di colori che il disegno può contenere e **Bit depth** imposta la precisione con cui viene memorizzato ciascun colore. Se in seguito cambi idea, utilizza **Edit → Convert Color Space…** o **Edit → Change Bit Depth…**. Le foto mantengono i colori con cui sono state scattate, quindi non c'è nulla da impostare quando ne apri una.

## Lavora a HDR

Scegli **16-bit float HDR** o **32-bit float HDR** come profondità di bit per creare un disegno HDR. I disegni HDR possono contenere colori più luminosi del bianco, come la luce del sole e le luci accese. Quando modifichi un disegno HDR, sotto la ruota dei colori viene visualizzato un arco di intensità, quindi puoi dipingere anche con colori più luminosi del bianco.

HDR viene visualizzato alla massima luminosità quando il browser e il display lo supportano. Nelle altre schermate vedrai invece una versione standard dell'immagine. Quando esporti un disegno HDR, puoi salvare un HDR JPEG o AVIF che appare correttamente anche sugli schermi normali, come descritto in [Esportare un'immagine](/it/docs/output/export/).

## Anteprima con prova

Prima di inviare il lavoro a una stampante, **View → Proof** mostra come potrebbero apparire i colori sulla carta. Nel pannello **Proof**, scegli **Print**, quindi scegli o aggiungi il profilo colore della stampante o del servizio di stampa. **Gamut warning** contrassegna i colori che la stampante non è in grado di riprodurre, quindi puoi regolarli prima della stampa.

Per i disegni HDR, l'opzione **SDR** nello stesso pannello mostra come apparirà l'immagine su uno schermo normale e consente di ottimizzare la luminosità e il contrasto di quella versione.
