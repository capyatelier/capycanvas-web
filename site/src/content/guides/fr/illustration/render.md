---
title: "Rendu"
description: "Ajoutez de l'ombrage et de la texture sur les calques attachés à chaque forme, puis exportez le résultat."
purpose: "Le rendu est l'endroit où les formes obtiennent leur lumière et leur ombre. Peindre l'ombrage sur des calques découpés le maintient automatiquement à l'intérieur de chaque forme, et comme l'ombrage est séparé de la couleur de base, vous pouvez l'ajuster ou le refaire sans rien perdre."
techniques: ["Découpez un calque d’ombrage sur le ruban.", "Contrôlez la force de l’ombrage.", "Ombrez les autres formes, vérifiez les calques et exportez."]
figure: "1 : Texture du ruban et ombrage du ruban au-dessus du ruban. 2 : Clip sur le calque ci-dessous. 3 : Opacité du calque pour toute la passe d’ombrage."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1 : Texture du ruban et ombrage du ruban au-dessus du ruban. 2 : Clip sur le calque ci-dessous. 3 : Opacité du calque pour toute la passe d’ombrage."}
---

## 1. Ajouter un ombrage coupé

Sélectionnez **Ribbon**, ajoutez un nouveau calque directement au-dessus et nommez-le **Ribbon shading**. Ouvrez son menu et choisissez **Layer Settings → Clip to layer below**. Peignez maintenant les ombres dans les coudes du ruban avec **Watercolor Wash** et ajoutez quelques accents de sauge avec **Paintbrush**. Vos traits peuvent dépasser le bord du ruban, car seule la partie située à l'intérieur du ruban est visible.

Laissez le mode de fusion du calque d'ombrage sur **Normal** pour le moment. La couleur de base reste en sécurité sur le calque du ruban, donc l'effacement de l'ombrage n'efface jamais la couleur en dessous.

## 2. Contrôlez la force

L’opacité du pinceau modifie les traits que vous êtes sur le point de peindre. Le **opacity of the Ribbon shading layer** modifie toutes les nuances que vous avez déjà peintes. Si chaque ombre semble trop forte, réduisez l'opacité du calque au lieu de repeindre.

Pour les reflets, ajoutez **Ribbon texture** directement au-dessus de l'ombrage du ruban et coupez-le également. Utilisez un petit crayon ou un pinceau texturé pour quelques légères marques. L'ordre des calques est maintenant Texture du ruban, Ombrage du ruban, puis Ruban. [Paramètres du pinceau](/fr/docs/advanced/brush-engine/) explique l'opacité et le flux plus en détail.

## 3. Terminer et exporter

Ombrez **Disc** et **Block** de la même manière, chacun avec ses propres calques découpés. L'exemple utilise l'aérographe pour l'ombrage doux sur le disque et le crayon pour les petites hachures crème. Gardez **Line art** au-dessus de tout. Si le bord extérieur d'une forme doit être réparé, peignez sur le masque de cette forme ; si seul l'ombrage est faux, changez le calque d'ombrage. [Masques et découpages](/fr/docs/layers/masks/) montre également comment recolorer l'encre avec le verrouillage alpha.

Lorsque vous en êtes satisfait, masquez les calques approximatifs, enregistrez votre fichier `.capy` et [exportez une image](/fr/docs/output/export/) à partager. Ouvrez le fichier exporté une fois pour vérifier qu'il ressemble à ce que vous attendez.
