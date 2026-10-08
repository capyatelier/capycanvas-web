---
title: "Enregistrer et réinitialiser les pinceaux"
description: "La conservation des modifications apportées aux pinceaux, et le retour des pinceaux à leurs réglages intégrés."
related: ["brushes/basics", "drawing/brush-tools", "customize/workspaces"]
---

Vous pouvez modifier n’importe quel réglage d’un pinceau intégré et lui rendre
plus tard sa valeur d’origine.

## Modifications des pinceaux

Chaque modification d’un réglage de pinceau est enregistrée immédiatement avec
son préréglage.

- Les modifications sont communes à tous les espaces de travail, y compris ceux que vous créez.
- Les modifications sont conservées après un redémarrage de {appName}.
- Les réglages des pinceaux ne sont pas enregistrés dans les fichiers `.capy`.
- Une modification d’un réglage de pinceau n’est pas une étape d’annulation, et Historique des dispositions ne liste pas les modifications des pinceaux.
- Un pinceau ne conserve pas de couleur. Il peint avec la couleur active du [panneau Couleur](/fr/docs/color/color-panel/).

## Réinitialiser un réglage

Vous pouvez rendre à un réglage la valeur intégrée du pinceau. Double-cliquez (ou
touchez deux fois) le libellé ou l’icône du réglage dans la barre Options de
l’outil ([Taille, opacité et débit](/fr/docs/brushes/basics/)).

Le panneau **Outil** n’a pas de réinitialisation. Pour réinitialiser
**Mélange de couleurs**, sélectionnez **Mélange Oklab**, le choix intégré de tous les pinceaux
de mélange.

## Réinitialiser tous les pinceaux…

Vous pouvez rendre à tous les pinceaux leurs réglages intégrés. Choisissez
**Fenêtre > Espaces de travail > Réinitialiser tous les pinceaux…**, puis
sélectionnez **Réinitialiser les pinceaux** dans la boîte de dialogue.

![La boîte de dialogue Réinitialiser tous les pinceaux ? avec le bouton Réinitialiser les pinceaux.](shot:brushes/reset-all-dialog)

Tous les préréglages sont réinitialisés, y compris ceux que vous n’avez pas
utilisés. Les couleurs, l’outil sélectionné, la disposition et le dessin ne
changent pas, et les favoris des curseurs de Croquis sont conservés. La
réinitialisation de tous les pinceaux ne peut pas être annulée.

## Créer et importer des pinceaux

Vous ne pouvez pas créer, dupliquer, renommer, supprimer, importer ni exporter de
pinceaux. Les préréglages intégrés sont les seuls pinceaux, et il n’existe pas de
format de fichier de pinceau.
