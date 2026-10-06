---
title: "Fusionner des calques"
description: "Combiner des calques en un seul calque de peinture avec les commandes de fusion."
related: ["layers/working", "filters/how-filters-apply", "layers/masks", "layers/types"]
---

Vous pouvez fusionner des calques en un seul calque de peinture. Les commandes de
fusion se trouvent vers la fin du menu **Calque** et du menu de chaque calque.

![Le menu Calque avec Ribbon actif, montrant Fusionner les calques écrêtés, Fusionner les calques visibles, Créer un calque du visible et Aplatir l’image.](shot:layers/merging-menu)

Chaque fusion est une étape d’annulation. Un [calque photo](/fr/docs/layers/types/)
perd sa photo d’origine quand vous le fusionnez. Vous ne pouvez pas fusionner
pendant la modification d’un calque de sélection ou du Masque rapide, ni pendant
une transformation.

## Fusionner avec le calque inférieur

Vous pouvez fusionner le calque actif avec le calque situé en dessous.

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Fusionner avec le calque inférieur**.
- Appuyez sur **Ctrl+E** (sauf avec les raccourcis Style GIMP).

Le calque fusionné reprend le nom, la place, l’écrêtage et le **Verrouillage
alpha** du calque inférieur, avec une opacité de 100 %, le mode de fusion Normal
et aucun masque. Il sert de référence si l’un des deux calques en était une.

Les deux calques doivent être visibles, non verrouillés et réglés sur Normal. Le
calque inférieur ne peut pas être un filtre, et il ne peut pas être écrêté, sauf
si le calque actif l’est aussi.

## Fusionner les calques écrêtés

Quand un calque de base d’écrêtage est actif, **Fusionner avec le calque
inférieur** devient **Fusionner les calques écrêtés**. La commande fusionne le
calque de base et ses calques écrêtés visibles en un seul calque, qui porte le
nom du calque de base. Les calques écrêtés masqués restent écrêtés sur le calque
fusionné.

La commande devient aussi **Fusionner les calques écrêtés** pour un filtre
écrêté, ou pour un filtre rattaché à un calque écrêté ou à un calque de base
d’écrêtage. Le calque de base doit être visible et réglé sur Normal, et au moins
un calque écrêté doit être visible.

## Appliquer l’effet au calque inférieur

Quand un filtre est actif, **Fusionner avec le calque inférieur** devient
**Appliquer l’effet au calque inférieur**, sauf si le filtre fait partie d’une
pile d’écrêtage. La commande applique le filtre au calque situé en dessous, ou
au calque auquel il est rattaché (voir
[Application des filtres](/fr/docs/filters/how-filters-apply/)).

## Fusionner le groupe

Quand un groupe est actif, **Calque > Fusionner le groupe** remplace **Fusionner
avec le calque inférieur**.

Le groupe devient un seul calque, avec le mode de fusion et l’opacité du groupe.
Transfert devient Normal. Le masque du groupe est appliqué, et les calques
masqués du groupe sont supprimés.

Le groupe doit être visible et non verrouillé, et il ne peut pas contenir de
calques de sélection.

## Fusionner les calques visibles

Choisissez **Calque > Fusionner les calques visibles** pour fusionner tous les
calques visibles, **Papier** compris, en un seul calque. Les calques masqués
restent tels quels.

Le calque fusionné reprend le nom et la place du calque visible le plus bas
(**Papier**, s’il est visible). Les calques masqués qui étaient écrêtés sur un
calque fusionné sont libérés. Les calques visibles doivent être non verrouillés,
et les groupes parmi eux ne peuvent pas contenir de calques de sélection.

## Créer un calque du visible

Choisissez **Calque > Créer un calque du visible** pour ajouter, en haut de la
liste, un nouveau calque qui réunit tout ce qui est visible. Tous les autres
calques restent en place.

Le nouveau calque s’appelle « Visible », couvre la toile et devient le calque
actif. Les calques verrouillés n’empêchent pas **Créer un calque du visible**.

## Aplatir l’image

Choisissez **Calque > Aplatir l’image** pour fusionner tous les calques visibles
en un seul calque. Les calques masqués et les pixels hors de la toile sont
supprimés, mais les calques de sélection situés hors des groupes restent. Les
calques visibles doivent être non verrouillés.

![L’avis affiché sur la toile, qui indique « L’aplatissement supprime 2 calques masqués », avec un bouton Aplatir l’image.](shot:layers/merging-flatten-notice)

Si le dessin contient des calques masqués, un avis sur la toile indique leur
nombre, par exemple « L’aplatissement supprime 2 calques masqués ». Rien ne change tant
que vous ne sélectionnez pas **Aplatir l’image** dans l’avis.
