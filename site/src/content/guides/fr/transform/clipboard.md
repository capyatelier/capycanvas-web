---
title: "Copier et coller"
description: "Copier des pixels et les coller comme nouveaux calques, dans Capy Canvas et entre applications."
related: ["selections/working", "transform/move-transform", "layers/working", "files/open-save"]
---

Vous pouvez copier des pixels d’un calque ou de l’image visible, et les coller comme
nouveau calque. Les commandes se trouvent dans le menu **Édition** et dans la
recherche de commandes.

![Les commandes du presse-papiers dans le menu Édition.](shot:transform/clipboard-edit-menu)

| Commande | Touche |
| --- | --- |
| **Couper** | **Ctrl+X** |
| **Copier** | **Ctrl+C** |
| **Copier avec fusion** | **Ctrl+Maj+C** |
| **Coller** | **Ctrl+V** |
| **Coller sur place** | **Ctrl+Maj+V** |
| **Coller dedans** | |

**Copier**, dans la [barre de sélection](/fr/docs/selections/working/), regroupe
**Copier**, **Copier avec fusion** et **Couper**.

## Copier

Copie les pixels propres du calque actif à l’intérieur de la sélection, sans
l’opacité, le masque ni les filtres rattachés du calque. Sans sélection, copie tout
le calque dans les limites de la toile.

## Couper

Copie comme **Copier**, puis efface les pixels sélectionnés du calque. Vous ne
pouvez pas couper sur un calque dont **Verrouillage alpha** est activé.

## Copier avec fusion

Copie l’image visible à l’intérieur de la sélection, telle qu’elle apparaît à
l’exportation.

## Ce que vous ne pouvez pas copier

Les groupes, les calques de filtre et les calques de sélection n’ont pas de pixels
propres. Pour copier depuis un groupe, sélectionnez un calque à l’intérieur. Vous ne
pouvez pas copier le dessin en Masque rapide, et **Copier** et **Couper** sont
indisponibles pendant la modification d’un masque.

Une copie volumineuse affiche une indication de progression avec **Annuler**.

## Coller

Ajoute le contenu du presse-papiers comme nouveau calque actif.

- Une copie faite dans Capy Canvas se place à l’endroit d’où elle a été copiée si cet endroit est visible, et sinon au centre de la vue.
- Une image provenant d’une autre application s’ouvre dans le cadre de transformation. **Appliquer** place l’image et **Annuler** abandonne le collage (voir [Déplacer et transformer](/fr/docs/transform/move-transform/)).

## Coller sur place

Ajoute le contenu du presse-papiers comme nouveau calque, à l’endroit d’où il a été
copié, sans cadre de transformation. Une image provenant d’une autre application se
place au centre de la vue, en taille réelle.

## Coller dedans

Fonctionne comme **Coller sur place** et donne au nouveau calque un
[masque](/fr/docs/layers/masks/) qui ne montre que la sélection. La sélection est
ensuite supprimée. **Coller dedans** nécessite une sélection.

## Coller entre applications

Les autres applications reçoivent une copie faite dans Capy Canvas sous forme
d’image PNG sRGB 8 bits. Un collage dans Capy Canvas utilise la copie à sa pleine
profondeur de couleur tant qu’elle se trouve encore dans le presse-papiers.

Une copie collée dans un dessin aux réglages de couleur différents devient un
[calque photo](/fr/docs/layers/types/), converti depuis son propre profil
colorimétrique.

Pendant la saisie dans un champ de texte, les touches du presse-papiers coupent,
copient et collent du texte.

Dans l’éditeur web, une image collée peut atteindre 512 Mio. Dans un navigateur qui
ne peut pas coller d’images, choisissez plutôt **Fichier > Importer une image comme
calque…**.
