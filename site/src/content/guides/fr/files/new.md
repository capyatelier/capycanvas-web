---
title: "Nouveaux dessins"
description: "Le format de feuille, la résolution, le papier, les réglages de couleur et les préréglages de la boîte de dialogue Nouveau dessin."
related: ["layers/paper", "color-management/color-spaces", "layers/types", "files/open-save"]
---

Choisissez **Fichier > Nouveau…**, appuyez sur **Ctrl+N** si disponible, ou sélectionnez **Nouveau…** dans la barre Commandes. Le nouveau dessin s’ouvre dans son propre onglet.

![La boîte de dialogue Nouveau dessin avec les dimensions A4, une résolution de 300 ppi, les réglages de couleur et de Papier, et Créer.](shot:files/new-dialog)

## Préréglages

Choisissez un préréglage par catégorie, recherchez-le par nom ou sélectionnez un préréglage récent. Un préréglage renseigne les dimensions, la résolution et les réglages de couleur et de Papier.

![Le navigateur de préréglages de Nouveau dessin avec les catégories Croquis, Aquarelle, Pastel, Toile, Techniques mixtes, BD, Tirages et Numérique.](shot:files/new-presets)

Enregistrez les réglages actuels comme préréglage nommé pour les réutiliser. Ouvrez le menu d’un préréglage enregistré pour le renommer ou le supprimer. Les préréglages intégrés ne peuvent pas être renommés ni supprimés.

## Feuille

L’aperçu montre les proportions et l’orientation de la feuille. Saisissez un nom de dessin, puis définissez **L** et **H**, et choisissez px, in, cm ou mm comme unité. Utilisez la commande de liaison pour conserver les proportions actuelles, et la commande d’orientation pour échanger largeur et hauteur.

**Résolution** définit les pixels par pouce utilisés pour les dimensions physiques et l’échelle de la [texture du Papier](/fr/docs/layers/paper/). Modifier uniquement la résolution change les métadonnées de taille d’impression sans rééchantillonner le dessin.

La boîte de dialogue affiche les dimensions obtenues en pixels et la capacité estimée. Les réglages dépassant la limite actuelle de dessin de l’appareil ne peuvent pas être créés ; cette limite dépend des dimensions, de la profondeur de couleur et des ressources graphiques disponibles.

## Papier

![Le tiroir Papier de Nouveau dessin avec Sans papier, les tuiles de papier et Visibilité de la texture.](shot:files/new-paper)

Sélectionnez la tuile de texture sous **Papier** pour choisir une texture de Papier intégrée ou importée pour le nouveau dessin. **Visibilité de la texture**, en bas du tiroir, définit la même valeur que dans les [Propriétés](/fr/docs/layers/paper/) du calque Papier, et la tuile l’affiche sous le nom de la texture. **Importer…** est la dernière tuile. Elle ajoute une image à la bibliothèque de papiers et la sélectionne.

Choisissez **Sans papier** pour créer le dessin sans calque Papier. **Visibilité de la texture** est alors indisponible.

![Les choix Couleur et Transparent du Papier dans Nouveau dessin.](shot:files/new-paper-color)

**Couleur** définit la couleur du Papier. **Transparent** conserve le calque Papier mais le masque au départ. Ce choix diffère de **Sans papier**, qui ne crée aucun calque Papier.

## Réglages de couleur

Choisissez **Espace colorimétrique**, **Profondeur de couleur** et **Fusion** du dessin. Les profondeurs flottantes utilisent la fusion **Lumière linéaire**. Voir [Espace colorimétrique, profondeur de couleur et fusion](/fr/docs/color-management/color-spaces/).

## Créer le dessin

Sélectionnez **Créer**. Le dessin commence avec un calque de peinture vide, **Encre actuelle**, au-dessus du Papier choisi si vous en avez inclus un.

La boîte de dialogue conserve les derniers choix utilisés pour créer un dessin. Sélectionner un préréglage les remplace par les valeurs de ce préréglage.
