---
title: "Retouche"
description: "Étape 2 du tutoriel de retouche photo : la poussière et une tache supprimées avec les pinceaux correcteurs sur un calque placé au-dessus de la photo."
related: ["retouch/clone-heal", "layers/settings", "layers/working"]
---

Cette étape produit un calque *Retouch* qui couvre la poussière et une tache de la
photo. Le calque de la photo ne change pas.

## 1. Ajouter un calque de retouche

1. Sélectionnez **Nouveau calque** en bas du panneau Calques et renommez le nouveau calque *Retouch*.
2. Choisissez **Calque > Réglages du calque > Utiliser le calque inférieur comme référence** ([Réglages du calque](/fr/docs/layers/settings/)).

Le calque de la photo devient un calque de référence, et une icône de phare apparaît
à côté de l’œil sur sa ligne. Par défaut, les outils de correction copient depuis les
calques de référence et peignent sur *Retouch*.

![Le panneau Calques avec Retouch au-dessus du calque terrarium, qui affiche l’icône de référence.](shot:photo/retouch-layers)

## 2. Supprimer la poussière

Quand vous levez le stylet, le **Correcteur localisé** remplace la zone peinte par
la texture de la zone voisine la plus semblable
([Duplication et correction](/fr/docs/retouch/clone-heal/)). L’exemple supprime la
poussière sur le verre, à la base du terrarium.

1. Choisissez **Affichage > Pixels réels**, ou appuyez sur **Ctrl+1**, pour voir la photo à 100 %.
2. Sélectionnez **Correcteur localisé** dans la barre d’outils Outils, ou appuyez sur **S** jusqu’à ce qu’il soit sélectionné.
3. Appuyez sur **]** jusqu’à ce que le pinceau soit plus grand que les poussières.
4. Peignez sur chaque poussière.

## 3. Supprimer la tache

Le **Pinceau correcteur** peint avec des pixels copiés depuis une source, puis les
accorde à la couleur et à la luminosité des alentours du trait.

1. Cliquez avec le bouton droit sur **Correcteur localisé** dans la barre d’outils Outils, ou appuyez longuement dessus, et choisissez **Pinceau correcteur**.
2. Maintenez la touche **Alt** enfoncée et cliquez sur une zone propre à côté de la tache, ou sélectionnez **Définir la source** dans **Options de l’outil** et cliquez sur la zone propre.
3. Peignez sur la tache.

![Le disque source du Pinceau correcteur sur le verre, avec sa barre d’options de source.](shot:photo/retouch-disc-bar)

Un disque sur la toile marque la source. Faites glisser le disque pour déplacer la
source, ou sélectionnez-le pour afficher sa barre.

Pour comparer avec la photo d’origine, masquez *Retouch*.

Étape suivante : [Réglages et exportation](/fr/docs/photo/adjust/).
