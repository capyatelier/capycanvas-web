---
title: "Sélectionner par luminosité"
description: "L’outil Plage tonale, qui sélectionne les pixels selon leur luminosité."
related: ["selections/tools", "selections/quick-mask", "color-management/hdr", "customize/toolbars"]
---

Vous pouvez sélectionner des pixels selon leur luminosité avec l’outil
**Plage tonale**. La luminosité se mesure en diaphragmes par rapport au blanc de
référence (0). L’outil lit l’image visible, tous calques confondus, et crée une
sélection aux bords progressifs.

## Choisir Plage tonale

Effectuez l’une des opérations suivantes :

- Tapez « Plage tonale » dans la [recherche de commandes](/fr/docs/start/command-search/).
- Dans Croquis, sélectionnez **Sélection** dans la barre de titre, sélectionnez-le une seconde fois pour ouvrir le tiroir, puis sélectionnez **Plage tonale**.
- Appuyez sur une touche que vous avez attribuée à **Plage tonale** dans les [raccourcis clavier](/fr/docs/input/keyboard/).
- Sélectionnez **Plage tonale** dans une barre d’outils où vous l’avez ajouté avec **Insérer des outils…** (voir [Barres d’outils et barre de titre](/fr/docs/customize/toolbars/)).

**Plage tonale** n’a pas de touche par défaut ni de bouton dans les barres d’outils
de Peinture et de Photo. Quand c’est l’outil actif, le panneau Ensemble d’outils
affiche tous les outils de sélection.

![Les réglages de Plage tonale dans le tiroir Sélection de Croquis, avec Mode, Tons, Douceur et Contour progressif.](shot:selections/tonal-range-settings)

## Tons

Sélectionnez un bouton de la ligne **Tons · diaphragmes par rapport au blanc de
référence** pour sélectionner la bande de luminosité correspondante. La bande se
combine avec la sélection actuelle selon le **Mode** (voir
[Outils de sélection](/fr/docs/selections/tools/)).

L’info-bulle de chaque bouton indique sa bande :

- **Ombres · sous −5 diaphragmes**
- **Ombres intermédiaires · de −5 à −3,5 diaphragmes**
- **Tons moyens · de −3,5 à −1,5 diaphragme**
- **Lumières intermédiaires · de −1,5 à −0,5 diaphragme**
- **Hautes lumières · au-dessus de −0,5 diaphragme**
- **HDR lumineux · au-dessus de +1 diaphragme**, dans les [dessins HDR](/fr/docs/color-management/hdr/) uniquement
- **Personnalisé · définir ou prélever une plage en diaphragmes**

Tant qu’un bouton de ton est sélectionné, la sélection suit les changements de
**Douceur**, **Contour progressif**, **De** et **À**. Choisir un autre outil ou un
autre **Mode** désélectionne le bouton de ton.

## Plage personnalisée

Vous pouvez définir la bande vous-même, ou la prélever sur la toile.

Effectuez l’une des opérations suivantes :

- Sélectionnez **Personnalisé · définir ou prélever une plage en diaphragmes** et réglez **De** et **À**, en diaphragmes. Les valeurs par défaut sont −3,5 et −1,5.
- Faites glisser sur une zone de la toile pour utiliser la plage de luminosité de cette zone.
- Cliquez sur la toile pour centrer une bande sur la luminosité de ce point. La bande garde la largeur personnalisée actuelle, ou mesure 1 diaphragme si un autre ton était sélectionné.

Un prélèvement sur la toile fait passer le ton sur Personnalisé. Dans l’éditeur web,
**De** et **À** partagent une seule commande de plage.

![Les réglages de Plage tonale avec Personnalisé sélectionné et la plage en diaphragmes.](shot:selections/tonal-range-custom)

## Douceur

Élargit la transition progressive aux deux extrémités de la bande, de 0 à 200 %.
La valeur par défaut est 100 %.

## Contour progressif

Adoucit le bord de la sélection, jusqu’à 100 px.

## Mode et touches maintenues

**Plage tonale** a les mêmes boutons **Mode** que les autres outils de sélection,
mais pas d’**Anticrénelage**. Maintenez **Maj**, **Alt** ou **Maj+Alt** en
cliquant ou en faisant glisser pour ajouter, soustraire ou n’en garder que
l’intersection.

## Masque rapide et calques de sélection

**Plage tonale** fonctionne en [Masque rapide](/fr/docs/selections/quick-mask/) et
pendant la modification d’un [calque de sélection](/fr/docs/selections/selection-layers/),
et modifie alors ce masque. Sa barre d’actions de la toile est la
[barre de sélection](/fr/docs/selections/working/), en bas de la toile.
