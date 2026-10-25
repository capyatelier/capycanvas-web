---
title: "Mélange et Fluidité"
description: "Les outils Mélange et Fluidité, pour étaler la peinture et déplacer les pixels d’un calque."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

Vous pouvez étaler et mélanger la peinture d’un calque avec **Mélange**, et
déplacer ses pixels avec **Fluidité**.

## Mélange

Effectuez l’une des opérations suivantes :

- Appuyez sur **J**.
- Dans Peinture, sélectionnez **Mélange** dans la barre d’outils Outils. Le même bouton contient **Tampon de duplication**.
- Dans Photo, sélectionnez **Mélange** dans la barre d’outils Outils.
- Dans Croquis, choisissez un mélangeur dans le tiroir **Sculpture**.
- Cherchez **Mélange** dans la recherche de commandes.

Choisissez un ensemble et un mélangeur dans **Ensemble d’outils**. **Doigt** est le
mélangeur par défaut.

| Ensemble | Mélangeurs |
| --- | --- |
| **Mélange** | **Doigt**, **Mélangeur doux**, **Flou**, **Estompe**, **Mouchoir en papier**, **Mélangeur granuleux**, **Mélangeur préservant la texture**, **Mélangeur de teinte** |
| **Peinture fraîche** | **Mélangeur naturel**, **Mélangeur humide**, **Mélangeur de couleurs**, **Couteau mélangeur**, **Mélangeur à soies** |
| **Effets** | **Mélangeur pictural**, **Mélangeur peigne**, **Mélangeur dispersé**, **Netteté**, **Marbrure**, **Mélangeur cristallin**, **Mélangeur tramé** |

Les réglages de chaque mélangeur figurent dans
[Mélange, diffusion et soies](/fr/docs/brushes/wet-media/).

### Mélangeur à soies

**Mélangeur à soies** tire la peinture en stries. L'extrémité gauche de cet échantillon n'est pas mélangée.

![Mélangeur à soies striant la peinture ombrée à droite.](shot:examples/bristle-blender)

### Mélangeur tramé

**Mélangeur tramé** mélange les bandes dans un motif de tramage.

![Mélangeur tramé mélangeant les bandes ombrées à droite.](shot:examples/dither-blender)

### Marbrure

**Marbrure** courbe la peinture en tourbillons.

![Marbrure enroulant les bandes ombrées à droite.](shot:examples/marbling)

## Fluidité

Effectuez l’une des opérations suivantes :

- Appuyez sur **J** quand Mélange est actif.
- Dans Peinture ou Photo, sélectionnez **Fluidité** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton, ou appuyez longuement dessus, pour choisir un mode.
- Dans Croquis, choisissez un mode dans l’ensemble **Fluidité** du tiroir **Sculpture**.
- Cherchez **Fluidité** dans la recherche de commandes.

Chaque mode est un préréglage du panneau **Ensemble d’outils** :

| Préréglage | Effet |
| --- | --- |
| **Fluidité : poussée** | Entraîne les pixels le long du trait. |
| **Fluidité : rotation antihoraire** | Fait tourner les pixels dans le sens antihoraire autour du centre du pinceau. |
| **Fluidité : rotation horaire** | Fait tourner les pixels dans le sens horaire autour du centre du pinceau. |
| **Fluidité : contraction** | Attire les pixels vers le centre du pinceau. |
| **Fluidité : dilatation** | Repousse les pixels depuis le centre du pinceau. |
| **Fluidité cristalline** | Fragmente l’image sous le pinceau en petites cellules dispersées. |
| **Contour** | Attire les pixels vers la ligne du trait des deux côtés. |
| **Reconstruire** | Annule la déformation de Fluidité sous le pinceau. |

Fluidité n’a pas de bouton Appliquer. Chaque trait modifie le calque et constitue
sa propre étape d’annulation. Les traits continuent de déformer les pixels que le
calque avait avant le premier trait, jusqu’à ce que vous peigniez, remplissiez,
filtriez, transformiez ou colliez dans le calque.

### Contour

**Contour** tire la peinture vers la ligne de trait. Les bandes à gauche montrent la peinture d'origine.

![Contour en tirant les bandes colorées vers un trait horizontal à droite.](shot:examples/liquify-edge)

### Reconstruire

**Reconstruire** restaure la peinture d'origine sous le pinceau. Ici, il restaure la moitié droite des bandes déformées.

![Bandes déformées à gauche et peinture restaurée avec Reconstruire à droite.](shot:examples/liquify-reconstruct)

## Ajuster la fluidité et Réinitialiser la fluidité

Vous pouvez atténuer tout ce que Fluidité a fait à un calque avec **Ajuster la
fluidité**, ou rendre au calque ses pixels d’avant le premier trait avec
**Réinitialiser la fluidité**.

Effectuez l’une des opérations suivantes :

- Dans le panneau **Outil**, activez **Ajuster la fluidité** ou sélectionnez **Réinitialiser la fluidité**.
- Cherchez **Ajuster la fluidité** ou **Réinitialiser la fluidité** dans la recherche de commandes.

Quand **Ajuster la fluidité** est activé, un curseur **Quantité** apparaît dans le
panneau **Outil**. À 100 %, la déformation reste telle quelle, et à 0 %, elle
disparaît. Relâcher le curseur compte pour une étape d’annulation, tout comme
**Réinitialiser la fluidité**.

Les deux commandes sont indisponibles, avec le message « Appliquez d’abord la
fluidité à ce calque », tant que le calque n’a subi aucune modification de Fluidité.

## Réglages de Fluidité

![Le panneau Outil pour Fluidité cristalline, avec Intensité, le groupe Fluidité qui affiche Distorsion et Inertie, et Ajuster la fluidité et Réinitialiser la fluidité.](shot:drawing/liquify-settings)

**Distorsion** et **Inertie** sont dans le groupe **Fluidité** du panneau **Outil**.

### Intensité

Règle la distance de déplacement des pixels à chaque empreinte. L’effet est plus
faible avec une pression légère du stylet et vers le bord d’une pointe douce.

### Distorsion

Rend le mouvement irrégulier. Avec **Fluidité cristalline**, elle règle la distance
de dispersion des cellules. **Reconstruire** n’a pas de **Distorsion**.

### Inertie

Prolonge l’effet dans la dernière direction du trait après que vous avez levé le
stylet. **Reconstruire** n’a pas d’**Inertie**.

## Tiroir Sculpture dans Croquis

Dans Croquis, sélectionnez **Sculpture** dans la barre de titre pour utiliser le
dernier outil de Mélange, Fluidité ou Retouche, sélectionnez-le de nouveau pour
ouvrir son tiroir, et une fois de plus pour fermer le tiroir. Le tiroir liste les
ensembles, les outils de l’ensemble choisi et leurs réglages. **Sculpture** et
**Pinceau** conservent chacun leur dernier préréglage et leur taille de pinceau.

![Le tiroir Sculpture dans Croquis, avec les ensembles Mélange, Peinture fraîche, Effets, Fluidité et Retouche à gauche, les mélangeurs de l’ensemble Mélange au milieu et les réglages de Doigt à droite.](shot:drawing/sketch-sculpt-drawer)

## Peindre sur un masque

Sur un masque, Mélange et Fluidité peignent une couverture simple, sans étaler ni
déplacer les pixels. Le premier trait de ce type sur chaque masque affiche un
avis.
