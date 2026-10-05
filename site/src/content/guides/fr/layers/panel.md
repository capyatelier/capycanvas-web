---
title: "Panneau Calques"
description: "Ce que montre et fait chaque partie du panneau Calques, menu du calque compris."
related: ["layers/working", "layers/settings", "layers/types", "layers/masks"]
---

Le panneau **Calques** liste les calques du dessin, le calque le plus en avant
en haut. L’en-tête affiche les réglages du calque actif.

![Le panneau Calques avec les calques de l’illustration terminée.](shot:layers/panel "1 En-tête · 2 Lignes de calque · 3 Boutons du bas")

## Ouvrir le panneau Calques

Effectuez l’une des opérations suivantes :

- Choisissez **Fenêtre > Calques**.
- Dans Peinture, sélectionnez **Calques** dans la colonne de droite.
- Dans Croquis, sélectionnez **Panneau Calques** dans la barre de titre.
- Tapez « Panneau Calques » dans la [recherche de commandes](/fr/docs/start/command-search/).

Dans Photo, le panneau est ouvert dans la colonne de droite.

## En-tête

![L’en-tête du panneau Calques pour Ribbon shading, avec Écrêter sur le calque inférieur activé.](shot:layers/panel-header "1 Mode de fusion du calque · 2 Opacité du calque · 3 Verrouillage alpha · 4 Verrouiller la modification · 5 Écrêter sur le calque inférieur · 6 Utiliser les calques sélectionnés comme références")

1. **Mode de fusion du calque** affiche le mode actuel et ouvre le [menu des modes de fusion](/fr/docs/layers/blend-modes/).
2. **Opacité du calque**, de 0 à 100. Faites glisser le curseur ou saisissez une valeur.
3. **Verrouillage alpha**.
4. **Verrouiller la modification**.
5. **Écrêter sur le calque inférieur**. Pour un filtre, le bouton indique **Appliquer à *calque*** ou **Appliquer aux calques inférieurs** (voir [Application des filtres](/fr/docs/filters/how-filters-apply/)).
6. **Utiliser les calques sélectionnés comme références**. Le bouton indique **Ne plus utiliser ce calque comme référence** quand le calque actif est la seule ligne sélectionnée et sert déjà de référence.

Un interrupteur en surbrillance est activé (voir [Réglages du calque](/fr/docs/layers/settings/)).
**Mode de fusion du calque** et **Opacité du calque** sont indisponibles pour les
calques de sélection et les calques verrouillés.

## Lignes de calque

![La ligne de Ribbon, avec son masque, Verrouillage alpha activé et l’opacité à 80 %.](shot:layers/panel-row "1 Œil · 2 Bouton de ligne · 3 Miniature · 4 Lien du masque · 5 Miniature du masque · 6 Nom et sous-titre · 7 Verrou · 8 Poignée")

Les calques d’un groupe sont en retrait sous le groupe.

1. L’œil masque ou affiche le calque.
2. Le bouton de ligne ajoute la ligne à la sélection ou l’en retire, sans changer de calque actif. Il affiche un pinceau sur le calque qui reçoit la peinture, un phare sur un calque de référence et une coche sur les autres lignes sélectionnées.
3. Sélectionnez la miniature pour peindre sur les pixels du calque. Sur un groupe, la miniature développe ou réduit le groupe.
4. Sur un calque avec masque, le bouton de lien détermine si le masque se déplace avec le calque (**Délier le masque du calque**, **Lier le masque au calque**).
5. Sélectionnez la miniature du masque pour peindre sur le [masque](/fr/docs/layers/masks/).
6. Le sous-titre sous le nom indique le mode de couleur, le mode de fusion et l’opacité quand ils diffèrent de Couleur, Normal et 100 %, par exemple « Produit · 60% ».
7. Une icône de cadenas signale un calque verrouillé, et une icône de verrouillage alpha un calque dont **Verrouillage alpha** est activé.
8. Faites glisser la poignée pour [déplacer le calque](/fr/docs/layers/working/).

Sélectionnez une ligne pour en faire le calque actif et la seule ligne sélectionnée.
[Types de calques](/fr/docs/layers/types/) montre la miniature de chaque type.

Faites **Ctrl**+clic sur la miniature d’un calque de peinture pour charger son
opacité comme sélection, ou sur la miniature du masque pour charger le masque.
Maintenez aussi **Maj** pour ajouter à la sélection, **Alt** pour en soustraire,
ou **Maj+Alt** pour n’en garder que l’intersection.

## Indicateurs des lignes

- Un contour autour de la miniature ou de la miniature du masque signale l’élément sur lequel peignent les pinceaux.
- Un rail à gauche des miniatures relie les [calques écrêtés](/fr/docs/layers/settings/) à leur calque de base.
- Un maillon de chaîne entre deux miniatures relie un [filtre rattaché](/fr/docs/filters/how-filters-apply/) à la ligne du dessous.
- Un œil estompé et barré signale un calque activé mais masqué par son groupe, ou un filtre rattaché dont le calque est masqué.
- Une miniature de masque estompée signale un masque désactivé.
- Quand le [Masque rapide](/fr/docs/selections/quick-mask/) est activé, une ligne **Masque rapide** apparaît en haut.

## Boutons du bas

![Les boutons en bas du panneau Calques.](shot:layers/panel-footer "1 Nouveau calque · 2 Nouveau groupe · 3 Nouveau calque de sélection · 4 Ajouter un masque · 5 Ajouter un filtre · 6 Importer une image comme calque… · 7 Supprimer les calques sélectionnés · 8 Actions du calque")

1. **Nouveau calque** ajoute un calque de peinture.
2. **Nouveau groupe**. Quand plusieurs lignes sont sélectionnées, il les regroupe.
3. **Nouveau calque de sélection** (voir [Calques de sélection](/fr/docs/selections/selection-layers/)).
4. **Ajouter un masque**.
5. **Ajouter un filtre** rattache un filtre au calque actif.
6. **Importer une image comme calque…**
7. **Supprimer les calques sélectionnés**.
8. **Actions du calque** ouvre le menu du calque actif.

Un bouton est indisponible quand son action ne s’applique pas au calque actif,
par exemple **Ajouter un masque** sur un calque verrouillé (voir
[Travailler avec les calques](/fr/docs/layers/working/)).

## Balayages et appuis longs

Avec un stylet ou un doigt :

- Balayez une ligne vers la gauche pour faire apparaître **Supprimer** à son extrémité droite. Sélectionnez **Supprimer** pour supprimer le calque, ou balayez vers la droite pour masquer le bouton.
- Balayez un calque de peinture vers la droite pour activer ou désactiver **Verrouillage alpha**.
- Balayez un groupe vers la droite pour activer ou désactiver **Transfert**.
- Appuyez longuement sur une ligne pour ouvrir son menu de calque. Pour faire glisser la ligne à la place, déplacez le stylet ou le doigt sans le lever.

![Une ligne balayée vers la gauche, avec Supprimer à son extrémité droite.](shot:layers/panel-swipe-delete)

Un balayage court ne change rien. Les balayages ne fonctionnent pas avec une
souris, sur la poignée ni sur les calques verrouillés.

## Menu du calque

Vous pouvez ouvrir un menu de commandes pour chaque calque.

Effectuez l’une des opérations suivantes :

- Ouvrez le menu **Calque**. Il contient le menu du calque actif, sans **Ajouter un filtre**.
- Cliquez avec le bouton droit sur une ligne, ou appuyez longuement dessus avec un stylet ou un doigt.
- Sélectionnez **Actions du calque** en bas du panneau.
- Quand une ligne a le focus, appuyez sur **Maj+F10** ou sur la touche Menu.

![Le menu du calque Ribbon.](shot:layers/panel-menu)

| Élément | Contenu |
| --- | --- |
| **Nouveau** | **Nouveau calque**, **Nouveau calque écrêté**, **Nouveau groupe**, **Remplissage uni**, **Remplissage dégradé**, **Nouveau calque d’éclaircissement et d’assombrissement**, **Copier la sélection vers un nouveau calque**, **Couper la sélection vers un nouveau calque** |
| **Ajouter un filtre** | Les filtres à rattacher au calque, par catégorie |
| **Organiser** | **Renommer le calque…**, **Dupliquer**, **Regrouper les calques sélectionnés** et, pour un groupe, **Dissocier le groupe** |
| **Mode de fusion** | Tous les [modes de fusion](/fr/docs/layers/blend-modes/) |
| **Réglages du calque** | Les [réglages du calque](/fr/docs/layers/settings/) |
| **Masque** | Les commandes de [masque](/fr/docs/layers/masks/) |
| **Sélection de pixels** | **Sélectionner l’opacité du calque**, **Ajouter l’opacité à la sélection**, **Soustraire l’opacité de la sélection**, **Intersection avec l’opacité du calque**, **Remplir la sélection**, **Inverser la sélection**, **Désélectionner les pixels** |
| **Sélection des lignes de calque** | **Sélectionner toutes les lignes de calque**, **Effacer la sélection des lignes de calque** |
| **Visibilité** | **Afficher le calque**, **Afficher le calque et ses groupes parents**, **Isoler les calques sélectionnés**, **Afficher tous les calques** |
| **Déplacer le calque / masque** | Sélectionne l’outil [Opération](/fr/docs/transform/move-transform/) |
| **Fusionner avec le calque inférieur**, **Fusionner les calques visibles**, **Créer un calque du visible**, **Aplatir l’image** | Voir [Fusionner des calques](/fr/docs/layers/merging/) |
| **Effacer tout le calque**, **Supprimer le calque** | **Effacer tout le calque** n’apparaît que sur les calques de peinture |

Ouvrir le menu d’une ligne rend ce calque actif. Le menu d’un groupe commence par
**Nouveau calque de sélection dans le groupe…** et **Enregistrer la sélection
actuelle dans le groupe…**. Les calques de sélection ont leur propre menu (voir
[Types de calques](/fr/docs/layers/types/)). Cliquez avec le bouton droit sur la
miniature du masque, ou appuyez longuement dessus, pour ouvrir le
[menu du masque](/fr/docs/layers/masks/).
