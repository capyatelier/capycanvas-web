---
title: "Travailler avec les sélections"
description: "La barre d’actions de la toile, et les commandes qui modifient une sélection ou les pixels qu’elle contient."
related: ["selections/tools", "selections/quick-mask", "selections/selection-layers", "layers/masks"]
---

Vous pouvez modifier une sélection, et les pixels qu’elle contient, depuis le menu
**Sélection** et depuis la barre de sélection affichée sur la toile.

## La barre d’actions de la toile

La barre d’actions de la toile est une rangée de boutons posée sur la toile, avec
les étapes suivantes pour l’élément en cours de modification.

| La barre d’actions de la toile apparaît | Page |
| --- | --- |
| À côté d’une nouvelle sélection | La barre de sélection, ci-dessous |
| Pendant que vous placez les sommets d’une sélection **Lasso polygonal** | [Outils de sélection](/fr/docs/selections/tools/) |
| En Masque rapide | [Masque rapide](/fr/docs/selections/quick-mask/) |
| Pendant la modification d’un calque de sélection | [Calques de sélection](/fr/docs/selections/selection-layers/) |
| Pendant la modification du masque d’un calque | [Masques](/fr/docs/layers/masks/) |
| Pendant la transformation de calques ou de pixels, ou le placement d’une image | [Déplacer et transformer](/fr/docs/transform/move-transform/) |
| Pendant un recadrage | [Recadrer](/fr/docs/transform/crop/) |
| Quand vous sélectionnez un repère | [Règles et repères](/fr/docs/drawing/ruler/) |
| Quand vous cliquez sur le disque de la source de duplication | [Duplication et correction](/fr/docs/retouch/clone-heal/) |
| Pendant que vous choisissez un point d’échantillonnage pour Niveaux, Courbes ou Balance des blancs | [Ajouter et modifier des filtres](/fr/docs/filters/adding/) |

La barre se place à côté de l’objet, ou en bas de la toile. De gauche à droite,
elle contient :

- Un intitulé, par exemple « Masque rapide » ou « Transformer le contour ».
- Les boutons. Un bouton estompé est indisponible ; sélectionnez-le pour en voir la raison.
- **Plus**, avec les boutons qui ne tiennent pas dans la barre, puis le menu **Sélection** pour une sélection ou le menu **Calque** pour un masque.
- Le bouton qui termine l’opération, par exemple **Appliquer** ou **Quitter**.

Une barre placée à côté d’un objet se masque pendant que vous touchez la toile ou
déplacez la vue.

Pour masquer la barre d’actions de la toile, effectuez l’une des opérations
suivantes :

- Choisissez **Affichage > Afficher la barre d’actions de la toile**.
- Choisissez **Afficher la barre d’actions de la toile** en bas de **Plus**.

Chaque espace de travail garde son propre réglage. Quand la barre est masquée, les
recadrages, les transformations, les images placées et les polygones affichent
toujours leurs boutons de fin en bas de la toile.

## La barre de sélection

La barre de sélection apparaît à côté d’une sélection quand un outil de sélection
ou **Opération** est actif. Avec les autres outils, elle apparaît à côté d’une
nouvelle sélection, mais pas à côté d’une sélection rétablie par Annuler ou
Rétablir. Les pinceaux, les outils de remplissage, **Dégradé** et **Figure**
n’affichent jamais la barre.

![La barre de sélection sous une sélection rectangulaire.](shot:selections/working-selection-bar)

- **Désélectionner** et **Inverser** : voir le menu Sélection ci-dessous.
- **Laisser une copie** : avec **Opération** uniquement, voir [Déplacer et transformer](/fr/docs/transform/move-transform/).
- **Copier vers un calque** : **Copier la sélection vers un nouveau calque** ou **Couper la sélection vers un nouveau calque**.
- **Copier** : **Copier**, **Copier avec fusion** ou **Couper**, voir [Copier et coller](/fr/docs/transform/clipboard/).
- **Transformer** : transforme les pixels sélectionnés.
- **Affiner** : les commandes d’affinage et **Transformer le contour**.
- **Masque** : masque le calque actif selon la sélection.
- **Ajuster** : ajoute un filtre qui utilise la sélection comme masque, voir [Application des filtres](/fr/docs/filters/how-filters-apply/).
- **Remplissage** : **Remplir la sélection**.
- **Effacer** : **Effacer les pixels sélectionnés** ou **Effacer hors de la sélection**.
- **Recadrer** : **Recadrer la toile sur la sélection**, voir [Recadrer](/fr/docs/transform/crop/).
- **Masque rapide** : voir [Masque rapide](/fr/docs/selections/quick-mask/).
- **Enregistrer** : **Enregistrer comme calque de sélection**, voir [Calques de sélection](/fr/docs/selections/selection-layers/).

## Menu Sélection

Vous pouvez aussi ouvrir le menu **Sélection** depuis **Plus** dans la barre de
sélection, et depuis **Sélection** sous les réglages d’un outil de sélection dans le
panneau Outil.

| Commande | Effet | Touche |
| --- | --- | --- |
| **Sélectionner tous les pixels** | Sélectionne toute la toile | **Ctrl+A** |
| **Désélectionner les pixels** | Supprime la sélection et met fin au Masque rapide ou à la modification d’un calque de sélection | **Ctrl+D** |
| **Resélectionner** | Rétablit la sélection supprimée par la dernière modification | **Ctrl+Maj+D** |
| **Inverser la sélection** | Sélectionne tout ce qui est hors de la sélection | **Ctrl+Maj+I** |
| **Afficher le contour de sélection** | Affiche ou masque le contour de sélection | |

**Resélectionner** n’est disponible que lorsque rien n’est sélectionné.

Masquer le contour de sélection conserve la sélection. **Afficher le contour de
sélection** se trouve aussi dans le menu Affichage.

![Le menu Sélection.](shot:selections/working-select-menu)

## Affiner une sélection

Vous pouvez agrandir, réduire, adoucir, border ou lisser une sélection avec un
aperçu en direct.

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > Agrandir la sélection…**, **Réduire la sélection…**, **Contour progressif de sélection…**, **Bordure de sélection…** ou **Lisser la sélection…**.
- Sélectionnez **Affiner** dans la barre de sélection et choisissez **Agrandir…**, **Réduire…**, **Contour progressif…**, **Bordure…** ou **Lisser…**.

Un panneau avec une seule valeur s’ouvre en bas de la toile. Pour garder le
résultat, sélectionnez **Appliquer** ou appuyez sur **Entrée**. **Annuler** et
**Échap** rétablissent la sélection d’origine.

| Commande | Valeur | Plage | Par défaut |
| --- | --- | --- | --- |
| **Agrandir la sélection…** | **Grow by** | 1–128 px | 5 px |
| **Réduire la sélection…** | **Shrink by** | 1–128 px | 5 px |
| **Contour progressif de sélection…** | **Feather radius** | 0,1–100 px | 5 px |
| **Bordure de sélection…** | **Border width** | 1–128 px | 5 px |
| **Lisser la sélection…** | **Smooth radius** | 1–64 px | 5 px |

**Bordure de sélection…** remplace la sélection par une bande qui suit son bord.
Le lissage comble les creux et retire les pointes plus étroites que deux fois le
rayon, mais ne déplace pas les bords situés sur le bord de la toile. L’agrandissement
et la réduction conservent les bords progressifs.

En Masque rapide, ces commandes modifient le masque.

![Le menu Affiner dans la barre de sélection.](shot:selections/working-refine-menu)

## Transformer le contour de sélection

Vous pouvez déplacer, mettre à l’échelle, faire pivoter, incliner ou retourner le
contour de sélection sans déplacer de pixels.

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > Transformer le contour de sélection**.
- Sélectionnez **Affiner > Transformer le contour** dans la barre de sélection.

Le cadre de transformation apparaît, avec une barre d’actions de la toile
intitulée « Transformer le contour ». Il fonctionne comme
[Transformer](/fr/docs/transform/move-transform/), sauf que **Distordre**,
**Déformer** et **Interpolation** ne sont pas disponibles.

## Remplir et effacer

- **Remplir la sélection** remplit les pixels sélectionnés du calque de peinture actif avec la couleur actuelle, à l’opacité du pinceau.
- **Effacer les pixels sélectionnés** efface les pixels sélectionnés du calque actif. Les bords progressifs sont effacés en partie.
- **Effacer hors de la sélection** efface les pixels situés hors de la sélection.

Effectuez l’une des opérations suivantes :

- Choisissez la commande dans le menu **Édition**. Les commandes d’effacement se trouvent aussi dans le menu **Sélection**.
- Appuyez sur **Maj+Retour arrière** pour remplir, ou sur **Supprimer** ou **Retour arrière** pour effacer les pixels sélectionnés.
- Sélectionnez **Remplissage**, ou **Effacer** puis une commande, dans la barre de sélection.
- Dans Peinture, sélectionnez **Remplir la sélection** dans la barre d’outils Commandes.
- Ouvrez le menu du calque et choisissez **Sélection de pixels > Remplir la sélection**.

Vous ne pouvez pas effacer de pixels en Masque rapide, sur un masque, ni sur un
calque dont **Verrouillage alpha** est activé.

## Copier vers un nouveau calque

**Copier la sélection vers un nouveau calque** copie les pixels sélectionnés du
calque de peinture actif sur un nouveau calque placé juste au-dessus, au même
endroit. **Couper la sélection vers un nouveau calque** les efface en plus du
calque d’origine.

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > Copier la sélection vers un nouveau calque** ou **Sélection > Couper la sélection vers un nouveau calque**.
- Appuyez sur **Ctrl+J** pour copier ou sur **Ctrl+Maj+J** pour couper.
- Sélectionnez **Copier vers un calque** dans la barre de sélection et choisissez une commande.

Le nouveau calque porte le nom de l’original, par exemple *Copie de Ribbon*, et
conserve son opacité, sa visibilité et son mode de fusion. La sélection est
supprimée jusqu’à ce que vous choisissiez **Resélectionner**.

Sans sélection, **Copier la sélection vers un nouveau calque** duplique les
calques sélectionnés.

## Masquer un calque selon la sélection

Vous pouvez ajouter au calque actif un masque qui ne montre que la zone
sélectionnée.

Effectuez l’une des opérations suivantes :

- Ouvrez le menu du calque et choisissez **Masque > Masque : révéler la sélection**, ou **Masque > Masque : masquer la sélection** pour masquer la zone sélectionnée.
- Sélectionnez **Masque** dans la barre de sélection.

Si le calque a déjà un masque, la sélection remplace ce masque. La sélection est
supprimée et le masque s’ouvre pour modification (voir
[Masques](/fr/docs/layers/masks/)).

## Sélections à partir des calques

Vous pouvez charger comme sélection la peinture d’un calque, son masque ou un
calque de sélection.

Effectuez l’une des opérations suivantes :

- Pour un calque de peinture, choisissez un élément dans **Sélection > À partir de l’opacité du calque** : **Sélectionner l’opacité du calque**, **Ajouter l’opacité à la sélection**, **Soustraire l’opacité de la sélection** ou **Intersection avec l’opacité du calque**.
- Pour un calque avec masque, choisissez un élément dans **Sélection > À partir du masque du calque** : **Charger le masque comme sélection**, **Ajouter le masque à la sélection**, **Soustraire le masque de la sélection** ou **Intersection avec le masque**.
- Ouvrez le menu du calque et choisissez les mêmes éléments sous **Sélection de pixels**.
- Maintenez la touche **Ctrl** enfoncée et cliquez sur la miniature du calque dans le panneau Calques. Ajoutez **Maj** pour ajouter à la sélection, **Alt** pour soustraire ou **Maj+Alt** pour n’en garder que l’intersection.

**Sélection > Charger la sélection** charge les [calques de sélection](/fr/docs/selections/selection-layers/).
