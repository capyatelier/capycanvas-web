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
- Dans Croquis, choisissez **Mélange** dans le tiroir **Sculpture**.
- Cherchez **Mélange** dans la recherche de commandes.

Mélange a deux préréglages, **Mélangeur naturel** et **Doigt**. Tous deux
commencent avec **Charge de peinture** à 0 % et n’ont pas de couleur propre.
**Prélèvement de couleur** règle la distance sur laquelle ils entraînent la
couleur le long du trait ([Mélange, diffusion et soies](/fr/docs/brushes/wet-media/)).

## Fluidité

Effectuez l’une des opérations suivantes :

- Appuyez sur **J** quand Mélange est actif.
- Dans Peinture ou Photo, sélectionnez **Fluidité** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton, ou appuyez longuement dessus, pour choisir un mode.
- Dans Croquis, choisissez **Fluidité** dans le tiroir **Sculpture**.
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

## Réglages de Fluidité

![Le panneau Outil pour Fluidité cristalline, avec le groupe Fluidité qui affiche Intensité et Distorsion.](shot:drawing/liquify-settings)

**Intensité**, **Distorsion** et **Inertie** se trouvent dans le groupe
**Fluidité** du panneau **Outil**. Fluidité n’a pas de **Débit**.

### Intensité

Règle la distance de déplacement des pixels à chaque empreinte. L’effet est plus
faible avec une pression légère du stylet et vers le bord d’une pointe douce.

### Distorsion

Règle la distance de dispersion des pixels avec **Fluidité cristalline**. Aucun
autre mode n’a ce réglage.

### Inertie

Avec **Fluidité : poussée**, entraîne les pixels plus loin que le stylet ne se
déplace. Ce réglage n’apparaît que pour ce mode.

## Tiroir Sculpture dans Croquis

Dans Croquis, **Sculpture** dans la barre de titre regroupe Mélange, Fluidité et
les outils de retouche.

- Sélectionnez **Sculpture** pour utiliser le dernier préréglage de sculpture. La première fois, il s’agit de **Mélangeur naturel**.
- Sélectionnez de nouveau **Sculpture** pour ouvrir son tiroir, et une fois de plus pour fermer le tiroir.

Le tiroir a trois colonnes. **Sculpture** liste **Mélange**, **Fluidité**,
**Duplication**, **Correction** et **Correction localisée**. **Outils** liste les
préréglages du groupe choisi, et **Outil** contient leurs réglages.

**Sculpture** et **Pinceau** conservent chacun leur dernier préréglage et leur
taille de pinceau.

![Le tiroir Sculpture dans Croquis, avec Fluidité choisi dans Sculpture et les six préréglages Fluidité dans Outils.](shot:drawing/sketch-sculpt-drawer)

## Peindre sur un masque

Sur un masque, Mélange et Fluidité peignent une couverture simple, sans étaler ni
déplacer les pixels. Le premier trait de ce type sur chaque masque affiche un
avis.
