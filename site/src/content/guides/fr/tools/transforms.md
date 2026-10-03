---
title: "Bouger et se transformer"
description: "Déplacez, redimensionnez ou faites pivoter un calque ou une partie de votre dessin."
purpose: "Parfois, une partie du dessin est presque correcte mais un peu trop grande, trop basse ou sous un mauvais angle. L'outil Opération vous permet de le déplacer, de le redimensionner et de le faire pivoter sans le redessiner, et vous pouvez vérifier le résultat avant de vous y engager."
techniques: ["Choisissez quoi déplacer.", "Déplacez, redimensionnez et faites pivoter avec les poignées.", "Appliquez ou annulez la modification."]
figure: "1 : Transformer les champs dans Tool. 2 : L'aperçu de la transformation sur le canevas. 3 : Le calque en cours d’édition."
related: ["tools/selections", "workspace", "illustration/draft"]
image: {"light": "/assets/guides/tools-transforms-light.webp", "dark": "/assets/guides/tools-transforms-dark.webp", "alt": "1 : Transformer les champs dans Tool. 2 : L'aperçu de la transformation sur le canevas. 3 : Le calque en cours d’édition."}
---

## Choisissez quoi déplacer

Sélectionnez le calque que vous souhaitez modifier dans le panneau Calques. Si seule une partie du calque doit être déplacée, [sélectionnez d'abord cette partie ](/fr/docs/tools/selections/). Sans sélection, tout le calque se déplace.

Choisissez l'outil **Operation** dans la barre d'outils. Son mode **Move** déplace le contenu lorsque vous le faites glisser, et **Scale / rotate** ajoute des poignées pour modifier sa taille et son angle. Dans Sketch, le bouton **Scale / rotate** dans la barre de titre démarre la même chose.

## Déplacer, redimensionner et faire pivoter

Faites glisser à l'intérieur de la boîte pour déplacer le contenu. Faites glisser les poignées sur ses coins et ses côtés pour l'agrandir ou le réduire, et faites glisser la poignée en dehors de la boîte pour la faire pivoter. Maintenez **Shift** pendant que vous redimensionnez pour conserver les proportions du dessin, ou pendant que vous le faites pivoter pour le faire pivoter par incréments nets de 15°. Si vous avez besoin de valeurs exactes, saisissez-les dans les champs de position, de taille et d'angle du panneau Outils.

Rien n'est définitif tant que les poignées sont visibles, alors prenez votre temps. Il est préférable d'effectuer toutes les modifications nécessaires en une seule fois, car redimensionner la même peinture encore et encore peut progressivement adoucir ses bords. Si vous n'êtes pas sûr, dupliquez d'abord le calque afin de pouvoir comparer.

## Postuler ou annuler

Sélectionnez **Apply transform** pour conserver la modification, ou **Cancel transform** pour tout remettre tel qu'il était. Si vous avez sélectionné une partie du calque, choisissez ensuite **Select → Deselect pixels** afin que vos prochains traits ne soient pas limités à cette zone.

Les mêmes poignées apparaissent lorsque vous [importez une image](/fr/docs/filters/image-editing/) dans un dessin, afin que vous puissiez la placer et la dimensionner avant de sélectionner **Apply**. Pour faire pivoter la vue plutôt que l'illustration, utilisez les boutons de rotation du Navigateur décrits dans [Espaces de travail et canvas](/fr/docs/workspace/).
