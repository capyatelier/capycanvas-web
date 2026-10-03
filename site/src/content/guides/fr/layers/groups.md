---
title: "Groupes et mélange"
description: "Conservez les calques associés ensemble et modifiez la façon dont leurs couleurs se combinent."
purpose: "À mesure qu'un dessin s'agrandit, les groupes conservent les calques associés ensemble afin que la liste reste facile à lire. Les modes de fusion modifient la manière dont les couleurs d'un calque se mélangent avec celles du dessous, ce qui est utile pour les ombres, les rehauts et les lavis de couleurs."
techniques: ["Placez les calques associés dans un groupe.", "Essayez un mode de fusion sur un calque d'ombrage.", "Gardez une longue liste de couches bien rangée."]
figure: "1 : Pile de calques. 2 : Mode de fusion. 3 : Bouton Nouveau groupe."
related: ["layers/basics", "layers/masks", "filters/overview"]
image: {"light": "/assets/guides/layers-groups-light.webp", "dark": "/assets/guides/layers-groups-dark.webp", "alt": "1 : Pile de calques. 2 : Mode de fusion. 3 : Bouton Nouveau groupe."}
---

## Regrouper les couches associées

Sélectionnez **New group** en bas du panneau Calques, puis faites-y glisser les calques. Par exemple, vous pouvez conserver les couleurs, les ombres et les dessins au trait d'un personnage dans un groupe et l'arrière-plan dans un autre. Sélectionnez la flèche à côté d'un groupe pour le replier lorsque vous n'avez pas besoin de voir son contenu.

Cacher un groupe cache tout ce qu'il contient. Si un calque semble avoir disparu alors que son œil est allumé, vérifiez si le groupe dans lequel il se trouve est masqué. Conservez les calques découpés directement au-dessus de leur calque de base lorsque vous les déplacez dans un groupe, afin qu'ils y restent attachés.

## Essayez un mode de fusion

Sélectionnez un calque d'ombrage et ouvrez le menu du mode de fusion au-dessus de la liste. **Multiply** assombrit les couleurs ci-dessous, ce qui le rend idéal pour les ombres. **Screen** les éclaircit, ce qui convient aux éclats et aux reflets. **Normal** peint simplement ce qui se trouve en dessous, et les autres modes mélangent chacun les couleurs à leur manière.

Masquez et affichez le calque pour comparer le résultat. Si l'effet est trop fort, réduisez l'opacité du calque plutôt que de le repeindre.

## Gardez la liste bien rangée

Les groupes gardent une longue liste bien rangée tandis que chaque couche reste modifiable, et vous pouvez replier les groupes sur lesquels vous ne travaillez pas. Si vous avez besoin d'une seule image plate pour une autre application, [exportez une copie ](/fr/docs/output/export/) et conservez le fichier `.capy` avec tous ses calques.

Pour les changements de couleur que vous souhaitez continuer à ajuster, comme la luminosité ou la saturation, utilisez un calque de filtre de [Filtres et ajustements](/fr/docs/filters/overview/) au lieu de peindre le changement dans un calque.
