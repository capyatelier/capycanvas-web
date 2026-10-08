---
title: "Recherche de commandes"
description: "Trouver et exécuter des commandes, des outils, des pinceaux et des réglages en tapant leur nom."
related: ["input/keyboard", "start/undo", "customize/toolbars"]
---

Vous pouvez trouver et exécuter des commandes, des outils, des pinceaux, des
propriétés de calque, des espaces de travail et des couleurs en tapant leur nom.

## Ouvrir la recherche de commandes

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Rechercher des commandes…**.
- Appuyez sur **Ctrl+K** ou **Ctrl+Maj+P**. Dans l’éditeur web, seul **Ctrl+K** fonctionne.
- Si vous avez ajouté la recherche de commandes à une barre d’outils, sélectionnez son bouton (voir [Barres d’outils et barre de titre](/fr/docs/customize/toolbars/)).

Les autres préréglages clavier utilisent d’autres touches (voir
[Raccourcis clavier](/fr/docs/input/keyboard/)). Ces touches fonctionnent aussi
pendant la saisie dans un champ de texte.

La zone de recherche s’ouvre près du haut de la fenêtre, avec un champ vide.

La recherche de commandes n’est pas disponible pendant un trait, quand la
fenêtre **Préférences** est ouverte ou pendant la personnalisation de la barre de titre.

## Suggestions

![La recherche de commandes avec un champ vide, qui liste Annuler, Ajuster à la toile, Enregistrer, Préférences et Raccourcis clavier.](shot:start/command-search-suggestions)

Quand le champ est vide, la liste affiche jusqu’à cinq entrées : celles que vous
avez exécutées en dernier depuis la recherche, puis **Annuler**,
**Ajuster à la toile**, **Enregistrer**, **Préférences** et **Raccourcis clavier**. Les entrées
qui ne peuvent pas s’exécuter pour l’instant sont omises.

Seules les entrées exécutées depuis la recherche comptent comme récentes. La liste
des entrées récentes est vidée quand vous quittez {appName}.

## Rechercher

Tapez une partie d’un nom. La liste affiche jusqu’à huit résultats, les noms
exacts en premier.

- Majuscules et minuscules sont équivalentes. Les accents doivent correspondre.
- Des lettres dans l’ordre suffisent : « ajst toile » trouve **Ajuster à la toile**.
- Les noms anglais fonctionnent dans toutes les langues de l’application.
- Certaines entrées répondent à d’autres mots : « settings » trouve **Préférences**, « color picker » trouve **Pipette** et « resize » trouve **Transformer**.
- Taper « brush » ou « brushes » exclut les pinceaux individuels.

Si rien ne correspond, la liste affiche « Aucune commande correspondante ».

## Ce que vous pouvez trouver

- Tous les éléments des menus.
- Tous les outils, et chaque variante d’outil, comme **Règle › Radial**.
- Tous les pinceaux, et chaque jeu de pinceaux sous la forme « Pinceaux *jeu* ».
- Les réglages de l’outil actif, comme **Taille du pinceau…**.
- Les propriétés du calque sélectionné, comme **Opacité du calque…**.
- Tous les espaces de travail.
- **Couleur de premier plan**, **Couleur d’arrière-plan**, **Peinture transparente**, **Couleur temporaire**, **Échanger premier plan et arrière-plan**, **Noir** et **Blanc**.
- Tous les panneaux et toutes les barres d’outils du menu **Fenêtre**.

## Résultats

![La recherche de commandes avec la requête « undo », la ligne Annuler grisée et « Rien à annuler » en bas.](shot:start/command-search-unavailable)

Chaque ligne affiche le nom et, à droite, son raccourci. Une coche signale un
réglage activé, ainsi que l’espace de travail actif.

La ligne en bas de la zone décrit l’entrée en surbrillance par son texte d’aide,
son emplacement dans les menus ou sa plage de valeurs. Une entrée qui ne peut pas
s’exécuter pour l’instant est grisée, et la ligne du bas en donne la raison, par
exemple « Rien à annuler ».

## Exécuter un résultat

Effectuez l’une des opérations suivantes :

- Appuyez sur **↑** ou **↓** pour mettre une ligne en surbrillance, puis appuyez sur **Entrée**.
- Sélectionnez une ligne.

La recherche se ferme et l’entrée s’exécute. Si l’entrée ne peut pas s’exécuter,
la recherche reste ouverte et en affiche la raison.

## Saisir une valeur

![La recherche de commandes qui demande une valeur pour Taille du pinceau…, avec l’unité px, et la valeur actuelle et la plage en bas.](shot:start/command-search-typed-value)

Les entrées des réglages numériques, comme **Taille du pinceau…** et
**Opacité du calque…**, demandent une valeur. La ligne du bas affiche la valeur actuelle et la
plage.

Pour définir une valeur :

1. Sélectionnez l’entrée, ou mettez-la en surbrillance et appuyez sur **Entrée**.
2. Tapez la valeur et appuyez sur **Entrée**.

Vous pouvez taper un calcul, comme « 12 * 2 » ou « sqrt(9) », et des pourcentages
comme « 50% ». Une valeur hors de la plage est ramenée à la limite la plus proche.
Appuyez sur **Échap** pour revenir aux résultats.

## Annuler depuis un champ de texte ou une palette

Si vous ouvrez la recherche de commandes depuis un champ de texte, **Annuler** et
**Rétablir** deviennent **Annuler la modification du texte** et
**Rétablir la modification du texte**. Ces entrées ne peuvent pas s’exécuter depuis la
recherche. Pour annuler la saisie dans le champ, fermez d’abord la recherche.

Ouverte depuis le panneau **Palettes**, la recherche liste à la place
**Annuler la réorganisation des couleurs** et **Rétablir la réorganisation des couleurs**.
Ces entrées annulent les changements d’ordre des couleurs de la palette, pas
ceux du dessin.

## Fermer la recherche de commandes

Effectuez l’une des opérations suivantes :

- Appuyez sur **Échap**.
- Sélectionnez **×** à droite du champ.
- Cliquez ou touchez en dehors de la zone.

Un clic en dehors de la zone ne peint pas sur la toile.
