---
title: "Panneau Couleur"
description: "Choisir la couleur de peinture avec la roue et les pastilles du panneau Couleur."
related: ["color/edit-color", "color/palettes", "color/eyedropper", "color-management/hdr"]
---

Vous pouvez choisir la couleur de peinture dans le panneau **Couleur**. Tous les
espaces de travail utilisent la même couleur de peinture.

![Le panneau Couleur avec la roue circulaire, les valeurs en haut à gauche et les pastilles sous la roue.](shot:color/panel "1 Valeurs · 2 Boutons de forme · 3 Modifier la couleur · 4 Premier plan et arrière-plan · 5 Échanger · 6 Peinture transparente · 7 Noir et blanc")

## Ouvrir le panneau Couleur

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Couleur**.
- Choisissez **Panneau Couleur** dans la recherche de commandes.
- Dans Peinture, sélectionnez l’onglet **Couleur** dans la colonne de gauche.
- Sélectionnez **Couleur du pinceau** au bout de la barre d’outils Outils, ou à l’extrémité droite de la barre de titre dans Croquis. Un tiroir s’ouvre avec les panneaux Couleur et Palettes.

## Roue chromatique

Faites glisser l’anneau extérieur pour définir la teinte, et le champ intérieur
pour définir la saturation et la luminosité.

Dans le cercle, faites glisser au-delà du bord du champ près du coin supérieur
gauche, du coin supérieur droit ou du bas pour aller directement au blanc, à la
couleur pure ou au noir. Un gris conserve la dernière teinte définie sur
l’anneau.

## Formes du champ

Sélectionnez l’un des deux petits boutons situés hors de l’anneau, en haut à
droite, pour changer la forme du champ. Leurs info-bulles indiquent
**Utiliser le cercle Okhsv**, **Utiliser le carré HSV** et **Utiliser le triangle HLS**.

| Forme | Champ | Valeurs |
| --- | --- | --- |
| Cercle (par défaut) | Okhsv. Le blanc en haut à gauche, la couleur pure en haut à droite, le noir en bas. | OKLCH |
| Carré | HSV. La saturation augmente vers la droite et la luminosité vers le haut. | HSB |
| Triangle | HLS. Les sommets sont le blanc, le noir et la teinte pure. | HLS |

## Valeurs

Les nombres en haut à gauche du panneau indiquent la couleur dans le modèle de la
forme du champ. Sélectionnez ces valeurs pour passer de ce modèle au RVB de 0 à
255, et inversement.

## Couleurs de premier plan et d’arrière-plan

Sélectionnez **Couleur de premier plan** (la grande pastille en bas à gauche) ou
**Couleur d’arrière-plan** (la pastille située derrière) pour peindre avec cette
couleur. La recherche de commandes utilise les mêmes noms. La pastille
sélectionnée a un contour plus épais.

Les pinceaux à soies strient chaque trait avec la couleur que vous n’utilisez pas
pour peindre.

> **Remarque :** en [Masque rapide](/fr/docs/selections/quick-mask/) et sur un [calque de sélection](/fr/docs/selections/selection-layers/), les pastilles contiennent une paire distincte, d’abord noir et blanc, et la peinture utilise la valeur de gris de la couleur. Les couleurs du dessin reviennent quand vous en sortez. Sur un masque de calque, la couleur n’a pas d’importance : les pinceaux révèlent et la Gomme masque.

## Peinture transparente

Vous pouvez effacer avec n’importe quel pinceau ou forme de Figure en peignant
avec de la peinture transparente. Effectuez l’une des opérations suivantes :

- Sélectionnez **Peinture transparente** (la pastille en damier en bas à droite).
- Choisissez **Peinture transparente** dans la recherche de commandes.
- Attribuez une touche à **Peindre avec de la transparence** sur la page [Raccourcis clavier](/fr/docs/input/keyboard/), puis appuyez dessus pour activer ou désactiver la peinture transparente. **Peindre avec de la transparence pendant le maintien** n’utilise la peinture transparente que tant que vous maintenez la touche.

Faire glisser sur la roue rétablit la peinture avec la couleur.

## Échanger les couleurs

Vous pouvez intervertir les couleurs de premier plan et d’arrière-plan.
Effectuez l’une des opérations suivantes :

- Sélectionnez **Échanger premier plan et arrière-plan** (les deux flèches à droite de la pastille d’arrière-plan).
- Choisissez **Échanger premier plan et arrière-plan** dans la recherche de commandes.
- Appuyez sur **X** avec les raccourcis Style Photoshop, Style Krita, Style Clip Studio Paint et Style GIMP, ou sur **Maj+X** avec Style Affinity.

La même pastille reste sélectionnée. Les raccourcis {appName} n’ont pas de
touche pour **Échanger les couleurs**.

## Noir et blanc

Sélectionnez **Peindre en noir** ou **Peindre en blanc** (les deux petits cercles
à côté de la pastille transparente), ou choisissez **Noir** ou **Blanc** dans la
recherche de commandes.

Le noir ou le blanc remplace la couleur de la pastille de premier plan ou
d’arrière-plan sélectionnée. Si **Peinture transparente** est sélectionnée, le
noir ou le blanc devient à la place une couleur de peinture temporaire. La roue
modifie alors la couleur temporaire, et les couleurs de premier plan et
d’arrière-plan ne changent pas.

## Modifier la couleur

Sélectionnez **Modifier la couleur…** (le crayon en haut à droite du panneau), ou
double-cliquez sur la pastille de premier plan ou d’arrière-plan, pour définir la
couleur par ses valeurs dans [Modifier la couleur](/fr/docs/color/edit-color/).
**Modifier la couleur…** n’est pas disponible quand **Peinture transparente** est
sélectionnée.

## Menu des pastilles

Sous Windows, Linux et Android, cliquez avec le bouton droit sur la pastille de
premier plan ou d’arrière-plan, ou appuyez longuement dessus, pour accéder à
**Modifier la couleur…**, **Palettes…** et
**Échanger premier plan et arrière-plan**.

## Intensité HDR

Dans un [dessin HDR](/fr/docs/color-management/hdr/), un arc sous la roue définit
l’intensité de la peinture en diaphragmes (EV) par rapport au blanc SDR,
de −2 à +6 EV. La valeur s’affiche sous les pastilles, par exemple « +2.00 EV ».

![Le panneau Couleur dans un dessin HDR, avec l’arc d’intensité sous la roue.](shot:color/panel-hdr)

- Faites glisser le long de l’arc pour définir l’intensité.
- Double-cliquez sur l’arc pour revenir à 0 EV.
- Quand l’arc a le focus, appuyez sur les touches fléchées pour avancer par pas de 0,1 EV, ou sur **Début** pour revenir à 0 EV.

La roue définit la couleur de base, et l’intensité la multiplie en lumière
linéaire. Les pastilles et l’arc prévisualisent les couleurs à travers la version
SDR du dessin. L’arc n’est pas disponible quand **Peinture transparente** est
sélectionnée.
