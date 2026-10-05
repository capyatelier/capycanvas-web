---
title: "Éclaircissement et assombrissement, séparation de fréquences"
description: "Ajouter un calque d’éclaircissement et d’assombrissement, et séparer un calque en Basses fréquences et Hautes fréquences avec Séparation de fréquences."
related: ["retouch/clone-heal", "layers/blend-modes", "filters/detail-blur", "photo/retouch"]
---

## Nouveau calque d’éclaircissement et d’assombrissement

Vous pouvez ajouter un calque gris neutre en **Lumière tamisée** pour éclaircir et assombrir.

Effectuez l’une des opérations suivantes :

- Choisissez **Calque > Nouveau > Nouveau calque d’éclaircissement et d’assombrissement**.
- Ouvrez le menu d’un calque dans le panneau Calques et choisissez **Nouveau > Nouveau calque d’éclaircissement et d’assombrissement**.

Un calque de la taille de la toile, nommé *Éclaircissement et assombrissement*,
apparaît au-dessus du calque actif et des calques écrêtés sur celui-ci, et devient
le calque actif.

Vous ne pouvez pas ajouter ce calque dans un groupe verrouillé, ni pendant un
recadrage ou une transformation en cours.

![Le panneau Calques avec un calque Éclaircissement et assombrissement au-dessus de la photo du terrarium.](shot:retouch/dodge-burn-layer)

## Séparation de fréquences…

Vous pouvez séparer le calque actif en fréquences en une seule étape.

Choisissez **Filtre > Séparation de fréquences…**. Un panneau s’ouvre en bas de la
toile avec **Rayon**, à 4 px par défaut, et la toile prévisualise le flou du calque
*Basses fréquences* pendant que vous modifiez **Rayon**.

![Le panneau Séparation de fréquences avec la valeur Rayon.](shot:retouch/frequency-separation-panel)

**Appliquer** place un groupe nommé *Séparation de fréquences* à l’emplacement du calque :

- *Hautes fréquences* contient la texture fine, en **Lumière linéaire**. C’est le calque du haut, et il devient le calque actif.
- *Basses fréquences* contient les couleurs et les tons, floutés avec **Flou gaussien** selon le rayon, en **Normal**.

Le groupe reprend l’opacité et l’écrêtage du calque d’origine. Le calque d’origine
reste juste en dessous du groupe, masqué.

Le calque doit être visible et en mode **Normal**, et le dessin doit utiliser
**Édition > Fusion > Fusion perceptuelle** (voir
[Espace colorimétrique, profondeur de couleur et fusion](/fr/docs/color-management/color-spaces/)).
Si le dessin change pendant que le panneau est ouvert, le panneau se ferme.

![Le panneau Calques avec le groupe Séparation de fréquences, Hautes fréquences au-dessus de Basses fréquences, et le calque d’origine masqué.](shot:retouch/frequency-separation-layers)
