---
title: "Esquisse"
description: "Dessinez un croquis au crayon et essayez les couleurs sur un calque séparé."
purpose: "Un croquis est l'endroit où vous travaillez les formes, et un brouillon de couleur est l'endroit où vous essayez les couleurs. En les gardant sur des calques séparés, vous pouvez changer les couleurs aussi souvent que vous le souhaitez sans toucher aux traits de votre crayon."
techniques: ["Dessinez avec un crayon et une pression de stylo.", "Sélectionnez et corrigez une partie de l'esquisse.", "Mettez des couleurs brutes sur un calque sous l'esquisse."]
figure: "1 : Pinceaux à crayons. 2 : Sketch ci-dessus Couleur brute en couches. 3 : Taille du crayon et opacité."
related: ["tools/selections", "tools/transforms", "painting/color"]
image: {"light": "/assets/guides/illustration-draft-light.webp", "dark": "/assets/guides/illustration-draft-dark.webp", "alt": "1 : Pinceaux à crayons. 2 : Sketch ci-dessus Couleur brute en couches. 3 : Taille du crayon et opacité."}
---

## 1. Dessinez le croquis

Ajoutez un nouveau calque et nommez-le **Sketch**. Choisissez l'outil **Pencil** et l'un des crayons du jeu d'outils. Commencez par des traits légers pour retrouver le disque, le ruban courbé et le bloc incliné, puis appuyez plus fort pour raffermir les contours que vous souhaitez conserver. Définissez la taille du crayon dans le panneau Outils.

Laissez un peu d'espace autour des formes. Cela facilite les étapes ultérieures, car vous pourrez voir clairement où se termine chaque forme. De temps en temps, sélectionnez **Flip view horizontally** dans la barre d'outils supérieure pour voir l'esquisse en miroir ; les erreurs proportionnelles sont beaucoup plus faciles à repérer de cette façon.

## 2. Réparez une pièce qui ne va pas tout à fait

Si une pièce est au mauvais endroit ou à la mauvaise taille, vous n'avez pas besoin de la redessiner. Choisissez **Lasso selection** et tracez une boucle autour de cette pièce. Choisissez ensuite **Scale / rotate**, faites glisser la pièce ou redimensionnez-la, puis sélectionnez **Apply transform**. Choisissez **Select → Deselect pixels** avant de continuer à dessiner.

Les guides [selection](/fr/docs/tools/selections/) et [transform](/fr/docs/tools/transforms/) expliquent ces outils plus en détail. Si une modification échoue, annulez-la simplement.

## 3. Essayez les couleurs

Ajoutez un autre calque nommé **Color rough** et faites-le glisser sous Sketch. Pour chaque forme, choisissez une couleur, dessinez autour de la forme avec **Lasso selection** et choisissez **Edit → Fill selection**. L'exemple utilise du bleu sarcelle pour le ruban, de l'ocre pour le disque et de la terre cuite pour le bloc. Ce sont des couleurs grossières, les bords n'ont donc pas besoin d'être nets. Réduisez un peu l'opacité du calque pour que les lignes de crayon restent faciles à voir.

Masquez la couleur approximative pendant un moment chaque fois que vous souhaitez voir l'esquisse seule. Enregistrez votre dessin, puis passez à [Dessin au trait](/fr/docs/illustration/ink/).
