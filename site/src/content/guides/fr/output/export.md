---
title: "Exporter une image"
description: "Enregistrez une copie PNG, JPEG ou TIFF de votre dessin pour la partager ou l'imprimer."
purpose: "L'exportation crée une image ordinaire à partir de votre dessin, prête à être publiée en ligne, envoyée à quelqu'un ou imprimée. Votre fichier .capy reste tel qu'il était, avec tous ses calques, vous pouvez donc toujours modifier le dessin et l'exporter à nouveau."
techniques: ["Choisissez un préréglage de destination.", "Choisissez le format et la taille du fichier.", "Enregistrez l'image exportée."]
figure: "1 : Préréglages de destination. 2 : Format, profil de couleur et profondeur de bits. 3 : Transparence, qui décide de la manière dont les zones vides sont enregistrées."
related: ["tools/files", "color/management", "filters/image-editing"]
image: {"light": "/assets/guides/output-export-light.webp", "dark": "/assets/guides/output-export-dark.webp", "alt": "1 : Préréglages de destination. 2 : Format, profil de couleur et profondeur de bits. 3 : Transparence, qui décide de la manière dont les zones vides sont enregistrées."}
---

## Choisissez où va l'image

Choisissez **File → Export…** pour ouvrir la boîte de dialogue **Export image**. Le point de départ le plus simple est **Destination**, qui remplit les paramètres sensibles pour vous. **Web / Share** crée une image standard qui s'affiche parfaitement dans n'importe quel navigateur ou application. **Wide-color image** conserve les couleurs les plus vives que les écrans modernes peuvent afficher, et **Further editing** conserve autant de détails que possible pour les ouvrir dans un autre éditeur.

Seuls les calques visibles sont exportés, masquez donc d'abord les calques d'esquisse ou de référence dont vous ne souhaitez pas dans l'image finale.

## Ajuster les détails

Si vous souhaitez plus de contrôle, modifiez les paramètres sous la destination. **Format** choisit entre PNG, JPEG et TIFF. Le PNG est un bon choix pour les illustrations présentant des bords nets ou des zones transparentes, tandis que le JPEG crée des fichiers plus petits pour les photos. Vous pouvez généralement laisser **Output profile** et **Bit depth** tels que définis par la destination.

**Transparency** décide du sort réservé aux zones vides du dessin. Vous pouvez les garder transparents dans les formats qui le prennent en charge, ou les remplir de blanc ou de noir. **Pixel size** vous permet de réaliser une copie plus petite, par exemple pour un site Web. Lorsque vous aimez une combinaison de paramètres, vous pouvez l’enregistrer en tant que préréglage de votre choix.

## Enregistrez le fichier

Sélectionnez **Preview Output** si vous souhaitez voir le résultat avant de sauvegarder, puis sélectionnez **Choose File…** pour choisir un nom et un emplacement pour l'image. Ouvrez le fichier exporté une fois pour vérifier qu'il ressemble à ce que vous attendez.

Les dessins HDR ont plus de choix sous **Dynamic range**, y compris les fichiers HDR JPEG et AVIF qui semblent brillants sur les écrans HDR et qui semblent toujours parfaits sur les écrans ordinaires. [Espaces colorimétriques, HDR et vérification](/fr/docs/color/management/) expliquent quand les utiliser.
