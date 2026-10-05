---
title: "Application des filtres"
description: "Comment un filtre sur son propre calque et un filtre rattaché à un calque modifient l’image."
related: ["filters/adding", "layers/masks", "layers/merging", "layers/settings"]
---

Un filtre est un calque sans peinture propre. Ses réglages restent modifiables
dans le panneau **Propriétés**.

![Le panneau Calques avec Courbes et Clarté rattachés à la photo du terrarium, et un filtre Vignettage sur son propre calque au-dessus.](shot:filters/layers-chain)

| | Filtre sur son propre calque | Filtre rattaché |
| --- | --- | --- |
| Ajouté avec | Le panneau **Filtres**, le menu **Filtre**, **Ajuster** dans la barre de sélection | **Ajouter un filtre** |
| Modifie | Tous les calques situés en dessous dans son groupe | Uniquement le calque auquel il est rattaché |
| Dans le panneau Calques | Une ligne à part | Une ligne reliée à la ligne du dessous par un maillon de chaîne |

## Filtre sur son propre calque

Un nouveau filtre se place au-dessus du calque sélectionné et des calques
écrêtés sur ce calque ou rattachés à lui. Dans un groupe, le filtre ne modifie
que les calques situés en dessous dans ce groupe, sauf si le groupe est réglé
sur [Transfert](/fr/docs/layers/settings/).

## Filtre rattaché

Vous pouvez rattacher des filtres à un calque de peinture, à un calque photo ou
à un groupe qui n’est pas réglé sur Transfert. Sélectionnez le calque, puis
sélectionnez **Ajouter un filtre** en bas du panneau Calques, dans le panneau
**Propriétés** ou dans le menu du calque.

Les filtres rattachés s’appliquent du bas de la chaîne vers le haut, après le
masque du calque et avant son opacité et son mode de fusion. Sur un calque de
base d’écrêtage, ils modifient aussi les zones où les calques écrêtés
apparaissent. Les flous et les distorsions comme **Flou gaussien** et
**Tourbillon** peuvent étendre la peinture du calque au-delà de ses bords.

Déplacer, dupliquer ou masquer le calque a le même effet sur ses filtres
rattachés. Si vous supprimez le calque, ses filtres rattachés restent en place,
chacun sur son propre calque.

## Appliquer à *calque* et Appliquer aux calques inférieurs

Vous pouvez faire passer un filtre sélectionné d’un type à l’autre.

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Réglages du calque > Appliquer à *calque*** ou **Appliquer aux calques inférieurs**.
- Sélectionnez le bouton en forme de maillon dans l’en-tête du panneau Calques, à la place d’**Écrêter sur le calque inférieur**.
- Faites glisser le filtre sur la miniature d’un calque pour le rattacher à ce calque.

![L’en-tête du panneau Calques avec le bouton en forme de maillon pour un filtre sélectionné.](shot:filters/attachment-button)

**Appliquer à *calque*** rattache le filtre au calque le plus proche en dessous.
**Appliquer aux calques inférieurs** place le filtre sur son propre calque,
au-dessus du calque auquel il était rattaché et des calques écrêtés sur ce
calque.

Le bouton est indisponible tant que le filtre ou le calque inférieur est
verrouillé. Si le calque inférieur n’est ni un calque de peinture, ni un calque
photo, ni un groupe, son info-bulle indique « Aucun calque inférieur auquel
rattacher ».

## Sélections comme masques de filtre

Si une sélection est active lorsque vous ajoutez un filtre, elle devient le
[masque](/fr/docs/layers/masks/) du filtre. Un seul **Annuler** retire le
filtre et rétablit la sélection.

## Appliquer l’effet au calque inférieur

Vous pouvez fusionner un filtre dans le calque situé en dessous, sous forme de
peinture.

Sélectionnez le filtre, puis effectuez l’une des opérations suivantes :

- Choisissez **Calque > Appliquer l’effet au calque inférieur**, ou choisissez cette commande dans le menu du calque du filtre.
- Appuyez sur **Ctrl+E**.

![Le menu du calque d’un filtre avec Appliquer l’effet au calque inférieur.](shot:filters/apply-effect-menu)

Un filtre sur son propre calque s’applique uniquement au calque situé
directement en dessous. Pour un filtre rattaché, le calque et toute sa chaîne de
filtres deviennent de la peinture. Si ce calque est écrêté ou si des calques
sont écrêtés sur lui, la commande s’intitule **Fusionner les calques écrêtés**
(voir [Fusionner des calques](/fr/docs/layers/merging/)).

Le filtre et le calque inférieur doivent être visibles, déverrouillés et réglés
sur Normal. La commande est indisponible lorsque le calque situé directement en
dessous est un filtre rattaché à un autre calque.
