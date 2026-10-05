---
title: "HDR"
description: "Les dessins HDR, leur affichage à l’écran et leur version SDR."
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

Vous pouvez peindre des couleurs plus lumineuses que le blanc SDR dans un dessin
HDR. Un dessin en **HDR flottant 16 bits** ou en **HDR flottant 32 bits** est un
dessin HDR.

## Dessins HDR

Pour obtenir un dessin HDR, effectuez l’une des opérations suivantes :

- Dans **Fichier > Nouveau…**, choisissez le préréglage **Dessin HDR** ou une **Profondeur de couleur** en virgule flottante.
- Choisissez **Édition > Changer la profondeur de couleur…** et une profondeur en virgule flottante.
- Ouvrez un fichier PNG HDR (BT.2020 PQ) ou AVIF HDR (HDR flottant 16 bits), ou un fichier OpenEXR (HDR flottant 32 bits).
- Réglez **Profondeur de couleur** sur une profondeur en virgule flottante dans la page **Couleur** des [Préférences](/fr/docs/preferences/) pour que les nouveaux dessins soient HDR.

Dans un dessin HDR :

- Le [panneau Couleur](/fr/docs/color/color-panel/) et [Modifier la couleur](/fr/docs/color/edit-color/) définissent l’intensité de la peinture en EV.
- La [Fusion](/fr/docs/color-management/color-spaces/) est toujours en Lumière linéaire.
- Superposition, Lumière tamisée, Lumière crue, Densité couleur +, Densité couleur −, Lumière vive, Mélange maximal et Exclusion ne sont pas proposés comme [modes de fusion](/fr/docs/layers/blend-modes/).
- Courbes a un domaine **HDR logarithmique** et une **Plage HDR**.
- L’outil [Plage tonale](/fr/docs/selections/tonal-range/) propose **HDR lumineux · au-dessus de +1 diaphragme**.
- L’Histogramme marque le blanc SDR.
- L’[exportation](/fr/docs/files/export/) propose des formats HDR.

Dans l’éditeur web, un dessin HDR de plus de 12 mégapixels ne peut pas être
ouvert.

## HDR à l’écran

Sur un écran capable d’afficher le HDR, la toile et le Navigateur affichent un
dessin HDR en HDR quand **Désactivé** est sélectionné dans le panneau
[Épreuvage](/fr/docs/color-management/proof/) et que l’avertissement de gamut est
désactivé. Sinon, ils affichent la version SDR du dessin, tout comme les
commandes de couleur. Dans l’éditeur web, le HDR nécessite un navigateur qui
signale un écran HDR.

Une puce à gauche du pied de page indique la version affichée. Sélectionnez-la
pour voir les détails.

| Puce | Affichée quand |
| --- | --- |
| « HDR » | Le dessin est affiché en HDR. |
| « Aperçu SDR » | Le dessin est en mode SDR sur un écran qui affiche le HDR. |
| « Affichage SDR » | L’écran n’affiche pas le HDR. |

## Version SDR

Chaque dessin HDR a une version SDR enregistrée. Elle est utilisée :

- sur les écrans sans HDR, et en mode SDR ;
- pour les miniatures des calques ;
- pour l’épreuvage d’impression ;
- pour les exportations SDR et la base SDR des exportations JPEG HDR et AVIF HDR.

Vous pouvez ajuster la version SDR sans modifier les pixels HDR. Effectuez l’une
des opérations suivantes :

- Choisissez **Affichage > Épreuvage SDR** (sauf sous Windows).
- Choisissez **Épreuvage SDR** dans la recherche de commandes.
- Sélectionnez **SDR** en haut du panneau Épreuvage.

![La page SDR du panneau Épreuvage, avec le cadran d’équilibre, de contraste, de luminosité et d’intensité de couleur.](shot:color-management/proof-panel-sdr)

Le cadran du panneau règle quatre valeurs. Son centre affiche une illustration
fixe, pas le dessin. Double-cliquez ou touchez deux fois une partie du cadran
pour réinitialiser ses valeurs, ou sélectionnez **Réinitialiser l’apparence SDR**
en haut à droite pour réinitialiser les quatre. Quand le cadran a le focus, les
touches fléchées modifient une valeur pas à pas, et **Maj** donne des pas plus
grands. **Échap** annule un glissement. Chaque glissement est une étape
d’annulation et est enregistré avec le dessin.

### Équilibre

Faites glisser le centre du cadran vers la gauche ou vers la droite, de −100 % à
+100 %. La gauche privilégie les grandes formes, la droite les textures fines.

### Contraste

Faites glisser le centre du cadran vers le bas ou vers le haut, de 50 % à 200 %.

### Luminosité

Faites glisser l’arc du haut, de −50 % à +50 %.

### Intensité de couleur

Faites glisser l’arc du bas, du blanc à 0 % jusqu’à la couleur pleine à 100 %. La
valeur par défaut est 30 %.

## Aperçu SDR

Vous pouvez basculer entre le HDR et la version SDR sans ouvrir le panneau
Épreuvage. Choisissez **Aperçu SDR** dans la recherche de commandes, ou
attribuez-lui une touche sur la page [Raccourcis clavier](/fr/docs/input/keyboard/).

**Aperçu SDR** ne fonctionne que pour un dessin HDR sur un écran qui affiche le
HDR, avec l’épreuvage d’impression et l’avertissement de gamut désactivés.
