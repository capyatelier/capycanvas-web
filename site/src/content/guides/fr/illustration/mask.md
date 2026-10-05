---
title: "Couleurs de base"
description: "Étape 3 du tutoriel d’illustration : un calque de peinture pour chaque forme, masqué à la forme et rempli de sa couleur de base."
related: ["layers/masks", "selections/working", "layers/types", "layers/settings"]
---

Cette étape produit un calque de peinture pour chaque forme, rempli de sa couleur
de base et masqué à la forme. Les couleurs de base vont sur des calques de peinture,
car un calque de remplissage ne peut pas servir de base d’écrêtage à l’ombrage de
l’étape 4.

## 1. Ajouter le calque Block

Masquez *Sketch*, sélectionnez sa ligne et ajoutez un calque nommé *Block* avec
**Nouveau calque**. Le nouveau calque apparaît juste au-dessus de *Sketch*, sous
*Line art*.

## 2. Masquer le calque à la forme du bloc

Appuyez sur **M**, ou sélectionnez **Sélection au lasso** dans le groupe **Sélection**
de la barre d’outils Outils, et suivez le contour du bloc sur *Line art*. Sélectionnez
ensuite **Masque** dans la barre de sélection
([Travailler avec les sélections](/fr/docs/selections/working/)).

![La barre de sélection avec Masque, à côté d’une sélection autour du bloc.](shot:illustration/mask-selection-bar)

La sélection devient le masque de *Block* ([Masques](/fr/docs/layers/masks/)). Une
miniature de masque apparaît sur la ligne, et une barre en bas de la toile indique
« Modification du masque de Block ».

## 3. Remplir le calque

**Remplir la sélection** n’est pas disponible pendant la modification d’un masque.
Pour remplir le calque :

1. Sélectionnez la miniature du calque sur la ligne *Block*, ou sélectionnez **Modifier le contenu** dans la barre en bas de la toile.
2. Choisissez la terre cuite dans le panneau **Couleur**.
3. Choisissez **Sélection > Sélectionner tous les pixels**, ou appuyez sur **Ctrl+A**.
4. Choisissez **Édition > Remplir la sélection**, ou appuyez sur **Maj+Retour arrière**.
5. Choisissez **Sélection > Désélectionner les pixels**, ou appuyez sur **Ctrl+D**.

La couleur couvre tout le calque, et le masque ne la laisse voir qu’à l’intérieur
du bloc.

## 4. Ajouter Disc et Ribbon

Créez de la même façon *Disc* en ocre, puis *Ribbon* en bleu canard.

![Le panneau Calques avec Ribbon, Disc et Block, chacun avec une miniature de masque, sous Line art.](shot:illustration/mask-layers)

La liste des calques affiche *Line art*, *Ribbon*, *Disc*, *Block*, *Sketch*,
*Color rough* et **Papier**.

## 5. Ajuster un bord

Sélectionnez la miniature du masque sur la ligne *Ribbon*. La barre en bas de la
toile indique « Modification du masque de Ribbon ».

![La barre en bas de la toile indiquant Modification du masque de Ribbon, avec Inverser, Désactiver, Appliquer le masque et Modifier le contenu.](shot:illustration/mask-bar)

Peignez le long d’un bord avec le pinceau **Plume G** pour montrer davantage de
bleu canard, ou rognez le bord avec la **Gomme**. Sur un masque, les pinceaux
ignorent la couleur de peinture.

Étape suivante : [Rendu](/fr/docs/illustration/render/).
