---
title: "Types de calques"
description: "Les calques de peinture, Objet, vectoriel, Papier, groupe, remplissage, filtre et sélection, et leurs règles."
related: ["layers/panel", "layers/vector", "layers/paper", "layers/working", "filters/how-filters-apply", "selections/selection-layers"]
---

![Le panneau Calques avec un calque de sélection, un groupe, un calque de peinture, un filtre, des calques de remplissage, un calque vectoriel et le Papier.](shot:layers/types-rows)

## Calque de peinture

Un calque de peinture contient des pixels dans l’espace colorimétrique du dessin. Les pinceaux, **Remplissage**, **Dégradé** et **Figure** peignent sur ce type de calque.

Choisissez **Calque > Nouveau > Nouveau calque**, ou sélectionnez **Nouveau calque** au bas du panneau Calques. Un nouveau dessin commence avec **Encre actuelle** au-dessus du Papier.

## Calque Objet

Un calque Objet conserve la taille, la profondeur de couleur et le profil colorimétrique de l’image importée. Importer une image comme calque, la déposer sur la toile ou la coller depuis une autre application crée un calque Objet.

Vous pouvez déplacer, redimensionner et faire pivoter un calque Objet sans rééchantillonner sa source à répétition. Choisissez **Calque > Pixelliser le calque** pour peindre sur ses pixels ou utiliser une commande qui exige un calque de peinture. La pixellisation le convertit à l’espace colorimétrique, à la profondeur de couleur et à la grille de pixels du dessin.

## Calque vectoriel

Un calque vectoriel contient des tracés au lieu de pixels. Choisissez **Calque > Nouveau > Nouveau calque vectoriel**, ou sélectionnez **Nouveau calque vectoriel** au bas du panneau Calques. Un badge de tracé signale sa vignette. Voir [Calques vectoriels](/fr/docs/layers/vector/).

## Papier

Le Papier fournit la couleur de fond et la texture à laquelle réagissent les pinceaux qui ont le réglage **Intensité de la texture**. Il reste au bas de la pile de calques et possède des vignettes de couleur et de texture.

Un dessin peut contenir un Papier. Le Papier ne peut pas avoir de masque, devenir un calque d’écrêtage, passer au-dessus des calques ordinaires ni être fusionné dans un calque ordinaire. Voir [Papier](/fr/docs/layers/paper/) pour sa texture, son éclairage et ses autres réglages.

## Groupe

Un groupe contient des calques dans un dossier repliable. Choisissez **Calque > Nouveau > Nouveau groupe**, sélectionnez **Nouveau groupe** sous la liste des calques, ou choisissez **Calque > Organiser > Regrouper les calques sélectionnés**.

Un groupe combine son contenu avant la fusion avec les calques du dessous, sauf si [Transfert](/fr/docs/layers/settings/) est activé.

## Calques de remplissage

**Couleur unie** et **Remplissage dégradé** couvrent la toile de contenu généré. Ajoutez-en un depuis **Calque > Nouveau**, le menu **Filtre > Remplissage** ou le panneau **Filtres**.

Sélectionnez la vignette de Couleur unie pour ouvrir **Modifier la couleur**. Ajoutez un masque pour peindre la zone visible d’un remplissage. Vous pouvez écrêter un calque de remplissage, mais pas écrêter d’autres calques sur lui.

## Calques de filtre

Un calque de filtre modifie les calques du dessous au lieu de contenir des pixels. Sa ligne affiche l’icône et le nom du filtre. Voir [Application des filtres](/fr/docs/filters/how-filters-apply/).

## Calques de sélection

Un calque de sélection conserve une sélection. Sélectionnez **Nouveau calque de sélection** sous la liste des calques pour en ajouter un. Il n’a ni opacité, ni mode de fusion, ni masque, ni écrêtage, ni réglage de référence, et ne peut pas être fusionné.
