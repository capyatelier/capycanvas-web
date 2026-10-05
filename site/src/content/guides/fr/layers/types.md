---
title: "Types de calques"
description: "Les types de calques d’un dessin et les règles propres à chacun."
related: ["layers/panel", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Le panneau Calques avec un calque de sélection, un groupe en Transfert, un filtre Courbes, un calque Remplissage dégradé, un calque Couleur unie, le calque de peinture Encre actuelle et Papier.](shot:layers/types-rows)

## Calque de peinture

Un calque de peinture contient des pixels peints. Les pinceaux, **Remplissage**,
**Dégradé** et **Figure** n’ajoutent des pixels qu’aux calques de peinture.

Pour ajouter un calque de peinture, choisissez **Calque > Nouveau > Nouveau calque**,
ou sélectionnez **Nouveau calque** en bas du panneau Calques.

Un nouveau dessin commence avec un calque de peinture vide, **Encre actuelle**,
au-dessus de **Papier**. Seuls les calques de peinture ont **Verrouillage alpha**,
**Mode de couleur**, **Effacer tout le calque** et **Appliquer le masque au calque**.

## Groupe

Un groupe range des calques dans un dossier que vous pouvez réduire à une seule
ligne.

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Nouveau > Nouveau groupe**.
- Sélectionnez **Nouveau groupe** en bas du panneau Calques.
- Sélectionnez plusieurs lignes et choisissez **Calque > Organiser > Regrouper les calques sélectionnés**.

Sélectionnez la miniature du dossier pour développer ou réduire le groupe. Un
badge sur le dossier signale un groupe réglé sur [Transfert](/fr/docs/layers/settings/).

Un groupe combine d’abord ses calques, puis fusionne le résultat avec les calques
du dessous, sauf s’il est réglé sur Transfert. Un groupe n’a pas de pixels propres.

## Calques de remplissage

Un calque de remplissage couvre la toile d’une couleur (**Couleur unie**) ou d’un
dégradé (**Remplissage dégradé**).

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Nouveau > Remplissage uni** ou **Remplissage dégradé**.
- Choisissez **Filtre > Remplissage > Couleur unie** ou **Remplissage dégradé**.
- Sélectionnez **Couleur unie** ou **Remplissage dégradé** dans la catégorie **Remplissage** du panneau **Filtres**.

Le calque de remplissage se place au-dessus du calque actif et des calques
écrêtés sur celui-ci. Une nouvelle Couleur unie reprend la couleur de peinture
actuelle, et un nouveau Remplissage dégradé va du noir au blanc. Si une sélection
est active, elle devient le masque du calque de remplissage.

Pour changer la couleur d’une Couleur unie, sélectionnez sa miniature pour ouvrir
[Modifier la couleur](/fr/docs/color/edit-color/), ou changez **Couleur** dans le
panneau **Propriétés**. [Dégradé](/fr/docs/drawing/gradient/) décrit les réglages
d’un Remplissage dégradé.

Pour peindre sur un calque de remplissage, ajoutez-lui un masque. Les pinceaux
peignent alors sur le masque, pas sur le remplissage. Vous pouvez écrêter un
calque de remplissage, mais vous ne pouvez pas écrêter d’autres calques sur lui
ni lui rattacher de filtres.

## Calques de filtre

Un calque de filtre contient un filtre au lieu de pixels. Sa ligne affiche l’icône
et le nom du filtre. Voir [Ajouter et modifier des filtres](/fr/docs/filters/adding/)
et [Application des filtres](/fr/docs/filters/how-filters-apply/).

Quand un calque de filtre est sélectionné, les pinceaux peignent sur le calque
situé en dessous, ou sur le calque auquel il est rattaché. Si le filtre a un
masque, les pinceaux peignent sur le masque.

## Calques de sélection

Un calque de sélection enregistre une sélection. Pour en ajouter un, sélectionnez
**Nouveau calque de sélection** en bas du panneau Calques.

Le bouton à droite de la miniature charge la sélection enregistrée. L’œil masque
ou affiche la superposition de la sélection sur la toile. Un calque de sélection
n’a ni opacité, ni mode de fusion, ni masque, ni écrêtage, ni réglage de
référence, et il ne peut pas être fusionné.
[Calques de sélection](/fr/docs/selections/selection-layers/) explique comment
modifier la sélection enregistrée.

## Papier

**Papier** est un calque de remplissage **Couleur unie** blanc, en bas d’un
nouveau dessin. Vous pouvez changer la couleur de **Papier**, le masquer ou le
supprimer comme tout autre calque de remplissage.

**Papier** est masqué au départ quand **Arrière-plan** est réglé sur
**Transparent** dans la boîte de dialogue [Nouveau dessin](/fr/docs/files/new/),
ainsi que dans une photo que vous ouvrez.

## Calques photo

Un calque photo est un calque de peinture qui conserve la photo d’origine à sa
propre taille, sa propre profondeur de couleur et son propre profil colorimétrique.
Ce que vous peignez et effacez est enregistré par-dessus la photo.

Pour ajouter un calque photo, effectuez l’une des opérations suivantes :

- Choisissez **Fichier > Ouvrir…** et sélectionnez une photo.
- Choisissez **Fichier > Importer une image comme calque…**.
- Déposez un fichier image sur la toile.

Tant que l’original est conservé, **Calque > Réglages du calque** propose ces
commandes :

- **Revenir à la photo d’origine** supprime la peinture, les effacements et les masques appliqués. La position, le masque, l’opacité et le mode de fusion restent, et **Mode de couleur** revient à **Couleur**.
- **Pixelliser la source…** convertit l’original dans l’espace colorimétrique et la profondeur de couleur du dessin, en taille réelle. Ensuite, **Revenir à la photo d’origine** n’est plus disponible.
- **Réparer le profil source…** change le profil avec lequel l’original est lu : **sRGB**, **Display P3**, **Adobe RGB (1998)** ou **ProPhoto RGB**. Si le calque contient de la peinture, **Ajouter la source corrigée** ajoute plutôt la photo corrigée comme nouveau calque.

**Revenir à la photo d’origine** et **Pixelliser la source…** se trouvent aussi
dans le menu **Édition**. **Effacer tout le calque** supprime aussi la photo
d’origine.
