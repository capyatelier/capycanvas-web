---
title: "Papier"
description: "La couleur et la texture du Papier, les papiers importés, l’échelle, l’éclairage et les restrictions du calque."
related: ["layers/types", "layers/panel", "brushes/dry-media", "files/new"]
---

Le Papier fournit la couleur de fond du dessin et la texture utilisée par les pinceaux secs.

## Ligne du Papier

![Une ligne de Papier avec ses vignettes de couleur et de texture.](shot:layers/paper-row)

Le Papier reste sous les calques ordinaires. Sa première vignette ouvre **Modifier la couleur** et sa vignette de texture ouvre **Choisir la texture**. Sélectionnez la ligne pour modifier ses réglages dans **Propriétés**.

Vous pouvez masquer ou supprimer le Papier. Si le dessin n’a pas de Papier, sélectionnez **Ajouter du papier** au bas du panneau Calques pour en rétablir un.

![Ajouter du papier sous la liste des calques.](shot:layers/add-paper)

Un dessin ne peut contenir qu’un Papier. Le Papier ne peut pas avoir de masque, devenir un calque d’écrêtage, être placé au-dessus d’un autre calque ni servir de calque de sélection.

## Choisir une texture

Sélectionnez la vignette de texture sur la ligne du Papier, ou **Choisir la texture** dans **Propriétés**. Choisissez un papier et sélectionnez **Utiliser la texture**.

![Les papiers intégrés dans Choisir une texture.](shot:layers/paper-choose-texture)

La bibliothèque comprend des surfaces Bristol, papier à dessin, pressé à chaud, pressé à froid, rugueux, poncé, vergé, washi, toile et lin. **Importer…** ajoute une image comme texture de papier réutilisable. Les papiers importés sont intégrés au dessin.

Ouvrez le menu d’un papier importé pour choisir **Renommer…** ou **Supprimer**. Un papier intégré à un dessin mais absent de votre bibliothèque propose à la place **Ajouter à la bibliothèque**.

![Le menu d’un papier importé.](shot:layers/paper-imported-menu)

## Propriétés

![Les commandes du Papier dans Propriétés.](shot:layers/paper-properties)

### Couleur

Définit la couleur du Papier.

### Texture

Ouvre **Choisir la texture**.

### Échelle

Définit l’échelle physique de la texture, de 25 % à 400 %. La toile montre brièvement le relief de la texture quand vous modifiez l’échelle.

### Visibilité de la texture

Définit l’intensité de l’éclairage de la texture dans l’image terminée. À 0 %, l’éclairage de la texture est désactivé.

### Lumière

Définit la direction de la lumière sur la texture du papier.

### Visible à travers la peinture

Définit la quantité d’éclairage du papier qui reste visible sur la peinture au-dessus. À 0 %, la peinture opaque en mode Normal masque l’éclairage ; à 100 %, l’éclairage affecte toute l’image.

![Les mêmes marques avec différents réglages d’éclairage du papier.](shot:layers/paper-lighting)

Les exportations de l’application native incluent l’éclairage visible du papier. L’éditeur web exporte actuellement sans éclairage du papier. Le bref aperçu de texture affiché après une modification de **Texture** ou **Échelle** n’est pas exporté.

## Traits et géométrie

Les nouveaux traits secs utilisent le Papier le plus proche, au niveau de leur calque ou en dessous. Masquer le Papier n’empêche pas sa texture d’influencer les nouveaux traits. Modifier la texture ou son échelle ne change pas les marques déjà dessinées.

Le Papier utilise la résolution d’impression du dessin pour conserver son échelle physique. **Image > Taille de l’image…** peut modifier cette résolution. Redimensionner ou faire pivoter l’image rééchantillonne le Papier avec le dessin ; le recadrage ne change pas son échelle.
