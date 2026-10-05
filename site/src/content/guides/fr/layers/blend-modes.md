---
title: "Modes de fusion"
description: "Régler le mode de fusion et l’opacité d’un calque, et les modes du menu des modes de fusion."
related: ["layers/settings", "layers/panel", "color-management/color-spaces", "color-management/hdr"]
---

Vous pouvez définir la manière dont un calque se combine avec les calques du
dessous.

![Le menu des modes de fusion ouvert par-dessus le panneau Calques, avec Normal coché.](shot:layers/blend-menu)

## Choisir un mode de fusion

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Mode de fusion**, puis un mode.
- Sélectionnez **Mode de fusion du calque** en haut à gauche de l’en-tête du panneau Calques, puis choisissez un mode.
- Choisissez un mode dans **Mode de fusion**, dans le panneau **Propriétés**.
- Tapez le nom du mode dans la [recherche de commandes](/fr/docs/start/command-search/).

Le mode actuel est coché dans le menu, et son nom s’affiche sur le bouton de
l’en-tête. Le sous-titre de la ligne indique le mode quand il est différent de
Normal. Les nouveaux calques utilisent Normal.

Vous ne pouvez pas changer le mode de fusion d’un calque de sélection ni d’un
calque verrouillé. [Fusionner avec le calque inférieur](/fr/docs/layers/merging/)
demande que les deux calques soient réglés sur Normal. Les modes de fusion mélangent les
couleurs dans l’espace de fusion du dessin, défini avec **Édition > Fusion**
(voir [Espace colorimétrique, profondeur de couleur et fusion](/fr/docs/color-management/color-spaces/)).

## Modes du menu des modes de fusion

Le menu des modes de fusion présente les modes dans ces sections :

- **Transfert** (groupes uniquement, voir [Transfert](/fr/docs/layers/settings/)), **Normal**
- **Obscurcir**, **Produit**, **Densité couleur +**, **Densité linéaire +**
- **Éclaircir**, **Écran**, **Densité couleur −**, **Ajouter**
- **Superposition**, **Lumière tamisée**, **Lumière crue**, **Lumière vive**, **Lumière linéaire**, **Lumière ponctuelle**, **Mélange maximal**
- **Différence**, **Exclusion**, **Soustraction**, **Division**
- **Teinte**, **Saturation**, **Couleur**, **Luminosité**

## Modes dans les dessins HDR

Dans un [dessin HDR](/fr/docs/color-management/hdr/), le menu des modes de fusion
omet **Superposition**, **Lumière tamisée**, **Lumière crue**, **Densité
couleur +**, **Densité couleur −**, **Lumière vive**, **Mélange maximal** et
**Exclusion**. Ces modes ne sont définis que pour les couleurs comprises entre le
noir et le blanc. Un calque qui utilise déjà l’un de ces modes le conserve, et le
menu continue d’afficher ce mode pour ce calque.

## Opacité

Effectuez l’une des opérations suivantes :

- Faites glisser **Opacité du calque** dans l’en-tête du panneau Calques, ou saisissez une valeur de 0 à 100.
- Modifiez **Opacité** dans le panneau **Propriétés**.
- Tapez « Opacité du calque » et une valeur dans la recherche de commandes.

Le sous-titre de la ligne indique l’opacité quand elle est inférieure à 100 %.
Vous ne pouvez pas changer l’opacité d’un calque de sélection ni d’un calque
verrouillé, ni pendant que le Masque rapide est activé.
