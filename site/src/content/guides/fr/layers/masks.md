---
title: "Masques"
description: "Masquer des parties d’un calque avec un masque, et toutes les commandes qui modifient un masque."
related: ["layers/panel", "selections/working", "filters/how-filters-apply", "layers/merging"]
---

Vous pouvez masquer des parties d’un calque avec un masque. Les zones peintes sur
le masque montrent le calque, et les zones vides le cachent. Les calques de
peinture, les calques photo, les groupes, les calques de remplissage et les
filtres peuvent avoir un masque.

## Ajouter un masque

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Masque > Ajouter un masque**.
- Sélectionnez **Ajouter un masque** en bas du panneau Calques.

![La ligne de Ribbon, avec un contour autour de la miniature de son masque.](shot:layers/masks-row)

La miniature du masque apparaît à droite de la miniature du calque, entourée d’un
contour qui la désigne comme cible des pinceaux. Un nouveau masque montre tout le
calque. Si une sélection est active, le masque ne montre que la zone
sélectionnée, et la sélection est effacée.

Si le calque a déjà un masque, **Ajouter un masque** le sélectionne pour la
peinture. Vous ne pouvez pas ajouter de masque à un calque de sélection ni à un
calque verrouillé.

## Peindre sur un masque

Sélectionnez la miniature du masque pour peindre sur le masque. Pour peindre de
nouveau sur le calque, sélectionnez la miniature du calque ou appuyez sur
**Échap**.

> **Remarque :** sur un masque, les pinceaux ignorent la couleur de peinture. Ils révèlent le calque, et la **Gomme** le cache.

Sur un masque inversé, les pinceaux et la **Gomme** échangent leurs rôles. Les
traits sur un masque sont secs, sans mélange, ni diffusion, ni texture.

## Barre de modification du masque

Pendant que vous peignez sur un masque, une barre intitulée « Modification du
masque de *calque* » apparaît en bas de la toile.

![La barre de modification du masque avec Inverser, Désactiver, Appliquer le masque, Plus et Modifier le contenu.](shot:layers/masks-bar)

- **Inverser**
- **Désactiver** désactive le masque, et le bouton indique alors **Activer**.
- **Appliquer le masque** efface les pixels que le masque cache, puis supprime le masque.
- **Plus** contient le menu **Calque** et **Afficher la barre d’actions de la toile**. Désactivez **Afficher la barre d’actions de la toile** pour masquer la barre.
- **Modifier le contenu** revient à la peinture sur le calque.

## Masques à partir de sélections

Vous pouvez créer un masque à partir de la sélection actuelle.

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Masque > Masque : révéler la sélection** ou **Masque : masquer la sélection**. Sur un calque qui a un masque, ces éléments deviennent **Remplacer le masque : révéler la sélection** et **Remplacer le masque : masquer la sélection**.
- Sélectionnez **Masque** dans la [barre de sélection](/fr/docs/selections/working/) sur la toile. Le nouveau masque montre la zone sélectionnée et remplace le masque éventuel du calque.

Un filtre ou un calque de remplissage ajouté pendant qu’une sélection est active
reçoit un masque tiré de la sélection. **Coller dedans** crée un nouveau calque
masqué selon la sélection (voir [Copier et coller](/fr/docs/transform/clipboard/)).

## Sélections à partir de masques

Vous pouvez charger un masque comme sélection.

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > À partir du masque du calque**, puis **Charger le masque comme sélection**, **Ajouter le masque à la sélection**, **Soustraire le masque de la sélection** ou **Intersection avec le masque**.
- Choisissez les mêmes éléments dans **Sélection de pixels**, dans le menu du masque.
- Faites **Ctrl**+clic sur la miniature du masque. Maintenez aussi **Maj** pour ajouter à la sélection, **Alt** pour en soustraire, ou **Maj+Alt** pour n’en garder que l’intersection.

## Menu du masque

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Masque** (le premier élément indique **Modifier le masque**).
- Cliquez avec le bouton droit sur la miniature du masque, ou appuyez longuement dessus.
- Pendant que vous peignez sur le masque, ouvrez le menu **Calque** ou sélectionnez **Actions du calque** en bas du panneau Calques.

Sur un calque sans masque, **Calque > Masque** ne contient qu’**Ajouter un
masque**, **Masque : révéler la sélection**, **Masque : masquer la sélection** et
**Coller le masque**.

![Le menu du masque de Ribbon.](shot:layers/masks-menu)

| Élément | Effet |
| --- | --- |
| **Modifier le contenu du calque** | Revient à la peinture sur le calque. |
| **Afficher la zone du masque** | Affiche le masque sur la toile et le sélectionne pour la peinture. |
| **Activer le masque** | Active ou désactive le masque sans le modifier. Un masque désactivé a une miniature estompée. |
| **Lier le masque au calque** | Activé, le masque se déplace avec le calque. Désactivé, **Déplacer le calque / masque** déplace le calque ou le masque, selon celui sur lequel vous peignez. Le bouton de lien entre les miniatures a le même effet. |
| **Remplacer le masque : révéler la sélection**, **Remplacer le masque : masquer la sélection** | Remplace le masque par la sélection. |
| **Copier le masque** | Copie le masque, pour **Remplacer par le masque copié** sur un autre calque, ou **Coller le masque** sur un calque sans masque. |
| **Inverser le masque** | Intervertit les zones visibles et cachées. |
| **Tout révéler**, **Tout masquer** | Règle le masque pour montrer ou cacher tout le calque, et désactive l’inversion. |
| **Appliquer le masque au calque** | Efface les pixels que le masque cache, puis supprime le masque. |
| **Supprimer le masque** | Supprime le masque. Les pixels du calque ne changent pas. |
| **Sélection de pixels** | Charge le masque comme sélection. |

Tous les éléments sauf **Modifier le contenu du calque**, **Afficher la zone du
masque** et **Copier le masque** demandent un calque non verrouillé.

## Appliquer un masque

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Masque > Appliquer le masque au calque**.
- Sélectionnez **Appliquer le masque** dans la barre de modification du masque.

**Appliquer le masque au calque** ne fonctionne que sur les calques de peinture,
et le masque doit être activé. Sur un calque distordu ou déformé, choisissez
d’abord **Appliquer la transformation aux pixels**. Pour appliquer le masque d’un
groupe, utilisez **Fusionner le groupe** (voir
[Fusionner des calques](/fr/docs/layers/merging/)).

Sur un calque photo, **Revenir à la photo d’origine** rétablit ce qu’un masque
appliqué a effacé.

## Masques des calques de filtre et de remplissage

Le masque d’un filtre définit où le filtre s’applique. Quand un calque de filtre
ou de remplissage est sélectionné, les pinceaux peignent toujours sur son masque.
**Remplissage**, **Dégradé** et les autres outils qui dessinent ne fonctionnent
pas sur le masque d’un filtre. Pour peindre sur un calque de remplissage, il faut
un masque.
