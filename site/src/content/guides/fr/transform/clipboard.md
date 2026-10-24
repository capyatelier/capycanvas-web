---
title: "Copier et coller"
description: "Copier des pixels et les coller comme calque ou nouveau dessin."
related: ["selections/working", "transform/move-transform", "layers/types", "files/open-save"]
---

Les commandes du presse-papiers sont dans le menu **Édition** et la recherche de commandes.

![Collage spécial dans le menu Édition.](shot:transform/clipboard-edit-menu)

## Copier et couper

**Copier** (**Ctrl+C**) copie les pixels du calque sélectionné dans la sélection, sans son opacité, son masque ni ses filtres attachés. Sans sélection, la commande copie le calque dans les limites de la toile.

**Couper** (**Ctrl+X**) copie les mêmes pixels et les efface. La commande est indisponible sur un calque verrouillé ou doté de **Verrouillage alpha**.

**Copier avec fusion** (**Ctrl+Maj+C**) copie le résultat visible dans la sélection, y compris l’éclairage du Papier. Les groupes, les calques de filtre et les calques de sélection n’ont pas de pixels propres.

**Copier les pixels** fonctionne comme **Copier** et, sur un calque Objet, copie ses images sous forme de pixels.

## Coller

**Coller** (**Ctrl+V**) ajoute le contenu du presse-papiers comme nouveau calque et ouvre les poignées de transformation si un placement est nécessaire. Une image d’une autre application devient un [calque Objet](/fr/docs/layers/types/), qui conserve sa source jusqu’à sa pixellisation.

Une copie faite dans {appName} retrouve sa position d’origine si celle-ci est visible. Sinon, elle se place au centre de la vue.

## Collage spécial

Ouvrez **Édition > Collage spécial** pour choisir une destination.

- **Coller sur place** ajoute un calque à la position copiée sans ouvrir les poignées de transformation.
- **Coller à la position affichée** ajoute un calque au centre de la toile visible, à sa taille d’origine.
- **Coller au curseur** ajoute un calque centré sur le pointeur, à sa taille d’origine.
- **Coller dedans** ajoute un calque avec la sélection active comme masque, puis efface la sélection.
- **Coller comme nouvelle image** crée un nouveau dessin à partir du presse-papiers.

Les commandes qui exigent une sélection, un calque modifiable ou une image compatible dans le presse-papiers sont grisées.

![Le menu Collage spécial avec Coller sur place, Coller à la position affichée, Coller au curseur, Coller dedans et Coller comme nouvelle image.](shot:transform/paste-special)

## Entre applications

Les autres applications reçoivent une copie de {appName} sous forme de PNG sRGB 8 bits. Tant que la copie interne reste dans le presse-papiers, un autre dessin {appName} reçoit sa précision d’origine.

Dans l’éditeur web, une image collée peut atteindre 512 Mio. Si le navigateur ne peut pas coller d’images, utilisez **Fichier > Importer une image comme calque…**.
