---
title: "Duplication et correction"
description: "Le Tampon de duplication, les pinceaux correcteurs et la source qu’ils copient."
related: ["retouch/dodge-burn", "layers/settings", "brushes/basics", "photo/retouch"]
---

Vous pouvez masquer des défauts en peignant avec des pixels copiés ailleurs dans l’image.

| Outil | Effet |
| --- | --- |
| **Tampon de duplication** | Peint avec les pixels copiés depuis le disque source. |
| **Pinceau correcteur** | Peint comme **Tampon de duplication**. Quand vous levez le stylet, la copie prend la couleur et la luminosité des alentours du trait et garde sa texture. |
| **Correcteur localisé** | Quand vous levez le stylet, remplace la zone peinte par la texture de la zone voisine la plus semblable, fondue dans son entourage. |

## Choisir un outil de retouche

Effectuez l’une des opérations suivantes :

- Appuyez sur **S**. Appuyez de nouveau pour passer à **Pinceau correcteur**, puis à **Correcteur localisé**.
- Dans Photo, sélectionnez **Tampon de duplication** ou **Correcteur localisé / Pinceau correcteur** dans la barre d’outils Outils.
- Dans Peinture, sélectionnez **Mélange / Tampon de duplication** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton ou appuyez longuement dessus pour choisir **Tampon de duplication**.
- Dans Croquis, sélectionnez **Sculpture** dans la barre de titre, sélectionnez-le de nouveau pour ouvrir le tiroir, puis sélectionnez **Duplication**, **Correction** ou **Correction localisée**.
- Tapez le nom de l’outil dans la [recherche de commandes](/fr/docs/start/command-search/).

**Pinceau correcteur** et **Correcteur localisé** n’ont pas de bouton dans Peinture.

Chaque outil est un pinceau, avec **Taille du pinceau**, **Opacité**, **Débit** et
les réglages **Pointe** dans le panneau Outil (voir [Taille, opacité et débit](/fr/docs/brushes/basics/)).

![Le panneau Outil du Tampon de duplication, avec les réglages du pinceau et ceux de la source.](shot:retouch/clone-tool-panel)

## Source

**Source**, dans le panneau Outil, définit ce que les outils copient :

- **Calques de référence** (par défaut) copie le calque sur lequel vous peignez avec les calques situés en dessous qui sont marqués comme références.
- **Calque en cours de modification** copie uniquement le calque sur lequel vous peignez.

Avec **Calques de référence**, vous pouvez retoucher sur un calque vide placé au-dessus
de la photo. Marquez la photo avec [Utiliser comme référence](/fr/docs/layers/settings/),
ou choisissez **Calque > Réglages du calque > Utiliser le calque inférieur comme référence**.
Si vous peignez sur un calque vide sans référence marquée en dessous, le message
propose **Utiliser *nom* comme référence**.

Vous ne pouvez pas retoucher directement un calque mis à l’échelle ou pivoté.
Retouchez sur un nouveau calque placé au-dessus.

## Définir la source

**Tampon de duplication** et **Pinceau correcteur** copient depuis le disque source,
un petit anneau marqué d’une croix.

Effectuez l’une des opérations suivantes :

- Maintenez la touche **Alt** enfoncée et cliquez à l’endroit à copier.
- Sélectionnez **Définir la source**, puis cliquez.

Tant que vous ne l’avez pas définie, la source se trouve au centre de la vue.
Faites glisser le disque pour déplacer la source. Un doigt peut faire glisser le
disque, mais ne définit jamais la source. Pendant que vous peignez, le disque
suit le point copié.

**Correcteur localisé** trouve sa source lui-même et n’a pas de disque.

## Réglages de la source

Ces réglages concernent **Tampon de duplication** et **Pinceau correcteur**.

### Source alignée

Conserve le même décalage entre la source et le pinceau d’un trait à l’autre.
Lorsqu’il est désactivé, chaque trait commence à copier au disque source. Activé par défaut.

### Retourner la source horizontalement et Retourner la source verticalement

Inversent les pixels copiés en miroir autour du disque source.

### Réinitialiser le décalage de la source

Le trait suivant recommence à copier au disque source. Disponible après un trait aligné.

### Définir la source

Le clic suivant définit la source.

## Barre d’actions de la toile du disque source

Cliquez sur le disque source sans le faire glisser pour afficher la
[barre d’actions de la toile](/fr/docs/selections/working/) à côté, avec **Aligné**,
**Source**, les deux boutons de retournement, **Réinitialiser le décalage** et
**Définir la source**. Cliquez de nouveau sur le disque, ou choisissez un autre
outil, pour masquer la barre.

![Le disque source et sa barre d’actions de la toile.](shot:retouch/clone-source-bar)
