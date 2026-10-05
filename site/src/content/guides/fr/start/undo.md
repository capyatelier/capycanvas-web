---
title: "Annuler et rétablir"
description: "Annuler et rétablir les modifications d’un dessin, et l’historique distinct des changements de disposition."
related: ["start/command-search", "customize/workspaces", "input/touch"]
---

Vous pouvez annuler les modifications d’un dessin une étape à la fois, et rétablir
les étapes annulées. Chaque dessin ouvert a son propre historique.

![Les boutons Annuler et Rétablir dans la barre d’outils Commandes.](shot:start/undo-commands)

## Annuler

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Annuler**.
- Appuyez sur **Ctrl+Z**.
- Sélectionnez **Annuler** dans la barre d’outils Commandes. Dans Croquis, **Annuler** se trouve dans la barre du bord gauche de l’écran.
- Touchez la toile avec deux doigts.

## Rétablir

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Rétablir**.
- Appuyez sur **Ctrl+Maj+Z** ou **Ctrl+Y**.
- Sélectionnez **Rétablir** dans la barre d’outils Commandes, ou dans la barre du bord gauche dans Croquis.
- Touchez la toile avec trois doigts.

Une nouvelle modification après une annulation supprime les étapes que vous
pouviez rétablir.

## Ce qui compte comme une étape

Chaque trait, remplissage, changement de filtre, transformation, recadrage,
changement de taille de la toile et changement de sélection est une étape, de même
que chaque modification d’un calque. Les changements de vue, d’outil, de pinceau,
de couleur et de disposition ne sont pas des étapes.

Pendant que vous placez une image, transformez un calque ou utilisez l’outil
Recadrer, Annuler abandonne cette opération au lieu de revenir d’une étape.

## Longueur de l’historique

Chaque dessin conserve jusqu’à 256 étapes. Les plus anciennes sont supprimées en
premier.

## Enregistrer et rouvrir

L’enregistrement ne vide pas l’historique. Un dessin ouvert depuis un fichier
`.capy` commence avec un historique vide, mais les dessins qui se rouvrent au
redémarrage de Capy Canvas conservent leurs étapes d’annulation.

## Changements de disposition

Les changements apportés aux panneaux, aux barres d’outils, à la barre de titre et
aux espaces de travail ont leur propre historique. **Édition > Annuler** n’annule
jamais un changement de disposition.

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Annuler le changement de disposition** ou **Fenêtre > Rétablir le changement de disposition**.
- Appuyez sur **Ctrl+Alt+Z** ou **Ctrl+Alt+Maj+Z**.

Chaque espace de travail a son propre historique de disposition, qui est
conservé après un redémarrage.
**Fenêtre > Espaces de travail > Historique des dispositions…** liste les dispositions précédentes de l’espace de travail actif.
