---
title: "Prise en main"
description: "Ouvrir {appName}, dessiner sur le premier dessin vierge, l’enregistrer en fichier .capy et exporter un PNG."
related: ["start/workspaces", "files/open-save", "files/export", "input/keyboard"]
---

## Ouvrir {appName}

Effectuez l’une des opérations suivantes :

- Ouvrez l’éditeur web à l’adresse [editor.capycanvas.art](https://editor.capycanvas.art/).
- Sur la page [Télécharger](/fr/download/), obtenez l’application de bureau, la bêta pour iPad ou Android, ou la marche à suivre pour installer l’éditeur web comme application.

L’éditeur web fonctionne dans ces navigateurs :

| Système | Navigateurs |
| --- | --- |
| Windows | Chrome, Edge, Firefox 141 ou version ultérieure |
| macOS | Chrome, Edge, Safari 26 ou version ultérieure, Firefox 147 ou version ultérieure (Apple silicon) |
| Linux (Wayland) | Chrome, Edge |
| iPadOS 26 ou version ultérieure | Safari |
| Android 12 ou version ultérieure | Chrome |

Après votre première visite, l’éditeur web s’ouvre aussi sans connexion à Internet.

## Le premier dessin

![Le panneau Calques d’un nouveau dessin, avec Encre actuelle au-dessus de Papier.](shot:files/new-layers)

La première fois que vous ouvrez {appName}, l’espace de travail
[Peinture](/fr/docs/start/workspaces/) s’affiche avec un dessin vierge, et la barre
de titre indique « Sans titre · 2048 × 1536 ». **Encre actuelle**, un calque de
peinture vide, est sélectionné au-dessus de **Papier**, un calque de remplissage
blanc. L’outil **Plume** est actif, avec le pinceau **Plume G** et une couleur
presque noire.

Les fois suivantes, {appName} s’ouvre sur le dernier espace de travail utilisé,
avec les dessins qui étaient ouverts.

## Dessiner

Faites glisser le stylet ou la souris sur la toile. Pour utiliser un autre outil,
sélectionnez-le dans la barre d’outils Outils, sur le bord gauche de la fenêtre.
Dans Croquis, sélectionnez **Pinceau** dans la barre de titre.

> **Remarque :** les doigts ne dessinent jamais. Deux doigts posés sur la toile font défiler, zoomer et pivoter la vue.

Pour annuler un trait, choisissez **Édition > Annuler**, appuyez sur **Ctrl+Z** ou
touchez la toile avec deux doigts (voir [Annuler et rétablir](/fr/docs/start/undo/)).

## Touches sur macOS et iPad

Ce manuel écrit les touches comme sous Windows et Linux. Sur macOS et iPad,
appuyez sur **Commande** (⌘) là où le manuel indique **Ctrl**. **Ctrl** fonctionne
aussi dans l’éditeur web et dans l’application macOS.

L’éditeur web affiche **Ctrl** dans tous les raccourcis. Le navigateur se réserve
**F5**, **F11**, **F12**, ainsi que **Ctrl** ou **Ctrl+Maj** avec **W**, **T**,
**N**, **R**, **L**, **Q** ou **P**. Une commande qui utilise l’une de ces touches
n’a pas de raccourci dans l’éditeur web. Choisissez-la dans le menu ou dans la
[recherche de commandes](/fr/docs/start/command-search/).

## Commencer un autre dessin

Choisissez **Fichier > Nouveau…** et sélectionnez **Créer** dans la boîte de
dialogue [Nouveau dessin](/fr/docs/files/new/). Le nouveau dessin s’ouvre dans son
propre onglet, à côté du premier.

## Enregistrer le dessin

![Le menu Fichier avec Nouveau…, Ouvrir…, Enregistrer, Enregistrer sous… et Exporter….](shot:files/file-menu)

Pour enregistrer le dessin avec tous ses calques :

1. Choisissez **Fichier > Enregistrer**, ou appuyez sur **Ctrl+S**.
2. Choisissez un dossier et un nom. Le nom proposé est « Sans titre.capy ».

La barre de titre affiche ensuite le nom du fichier. Dans Firefox et Safari, le
dessin n’est considéré comme enregistré qu’une fois que vous avez sélectionné
**Télécharger**, puis **Fichier enregistré** dans la boîte de dialogue
**Télécharger le fichier**.

## Exporter un PNG

![La boîte de dialogue Exporter l’image avec Destination réglée sur Web / Partage.](shot:files/export-dialog)

Pour exporter une copie aplatie du dessin au format PNG :

1. Choisissez **Fichier > Exporter…**, ou appuyez sur **Ctrl+Maj+E**.
2. Laissez **Destination** sur **Web / Partage**, puis sélectionnez **Choisir un fichier…**.
3. Choisissez un dossier et un nom. Le nom proposé est « Sans titre.png ».

**Web / Partage** écrit un PNG sRGB 8 bits à la taille réelle du dessin.
L’exportation ne modifie pas le dessin et ne l’enregistre pas.
