---
title: "Masque rapide"
description: "Modifier une sélection comme un masque peint en Masque rapide."
related: ["selections/working", "selections/selection-layers", "selections/tonal-range", "layers/masks"]
---

Vous pouvez modifier une sélection comme un masque peint en Masque rapide.

## Passer en Masque rapide

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > Masque rapide**.
- Appuyez sur **Q**.
- Sélectionnez **Masque rapide** dans la [barre de sélection](/fr/docs/selections/working/).

La sélection actuelle devient le masque. Sans sélection, le masque est vide au
départ. L’outil passe au pinceau actuel, sauf si **Plage tonale** est actif.

Vous ne pouvez pas passer en Masque rapide pendant une transformation.

## Affichage du Masque rapide

Une superposition, rouge à 50 % par défaut, signale le masque sur la toile. En mode
**Peindre la sélection**, elle couvre la zone sélectionnée ; en mode
**Masque en niveaux de gris**, la zone hors de la sélection.

Une ligne nommée **Masque rapide** apparaît en haut du panneau Calques,
sélectionnée. Son bouton en forme d’œil affiche ou masque la superposition, tout
comme **Afficher la superposition du masque** dans la recherche de commandes. Le
panneau Couleur affiche les couleurs du masque à la place des couleurs du dessin.

![La photo du terrarium en Masque rapide, avec la superposition sur les hautes lumières.](shot:selections/quick-mask-overlay)

## Peindre le masque

Peignez avec une plume, un crayon, un aérographe ou une gomme pour modifier le
masque. Les autres pinceaux ne peignent pas en Masque rapide. **Remplissage**,
**Dégradé** et **Peindre la sélection** modifient aussi le masque.

- En mode **Peindre la sélection**, toute couleur sélectionne. La gomme et la couleur transparente désélectionnent.
- En mode **Masque en niveaux de gris**, la valeur de gris de la couleur détermine le masque : le blanc sélectionne, le noir désélectionne et les gris sélectionnent en partie.

Le masque a ses propres couleurs de premier plan et d’arrière-plan, copiées des
couleurs du dessin au passage en Masque rapide. Appuyez sur **D**
(**Réinitialiser en noir / blanc**) pour un premier plan noir et un arrière-plan
blanc. Pour intervertir les couleurs du masque, lancez **Échanger les couleurs du
masque** depuis la recherche de commandes.

Les commandes qui modifient le dessin, comme **Effacer les pixels sélectionnés**
et **Transformer**, sont indisponibles en Masque rapide.

## Barre Masque rapide

La [barre d’actions de la toile](/fr/docs/selections/working/), en bas de la
toile, porte l’intitulé « Masque rapide » :

- **Inverser** : **Inverser la sélection**.
- **Remplissage** et **Effacer** : **Remplir le masque** remplit tout le masque, et **Effacer la couverture de sélection** le vide.
- **Affiner** : **Agrandir…**, **Réduire…**, **Contour progressif…**, **Bordure…** et **Lisser…**. **Transformer le contour** n’est pas disponible ici.
- **Enregistrer** : **Enregistrer comme calque de sélection** (voir [Calques de sélection](/fr/docs/selections/selection-layers/)).
- **Quitter** : **Revenir au dessin**.

Quand la barre d’actions de la toile est masquée, la barre Masque rapide
n’apparaît pas.

![La barre Masque rapide en bas de la toile.](shot:selections/quick-mask-bar)

## Menu Masque rapide

Tant que le Masque rapide est actif, le menu **Calque** devient le menu
**Masque rapide**. Cliquez avec le bouton droit sur la ligne **Masque rapide**, ou
appuyez longuement dessus, pour ouvrir le même menu.

- **Revenir au dessin**
- **Enregistrer comme calque de sélection**
- **Modifier** : **Inverser la sélection**, **Sélectionner tous les pixels**, **Effacer la couverture de sélection**, **Remplir le masque**, **Agrandir…**, **Réduire…**, **Contour progressif…**, **Bordure…** et **Lisser…**

## Réglages de la superposition

Le panneau Propriétés affiche les réglages du masque tant que le Masque rapide est
actif.

![Le panneau Propriétés pour Masque rapide, avec Mode, Couleur de superposition et Opacité de superposition.](shot:selections/quick-mask-properties)

### Mode

**Peindre la sélection** (par défaut) ou **Masque en niveaux de gris**. Le mode est
un réglage unique pour le Masque rapide et tous les calques de sélection, dans tous
les dessins. La commande **Masque en niveaux de gris** de la recherche de commandes
le change aussi.

### Couleur de superposition

Définit la couleur de la superposition. Rouge par défaut.

### Opacité de superposition

De 0 à 100 %. La valeur par défaut est 50 %.

## Quitter le Masque rapide

Effectuez l’une des opérations suivantes :

- Choisissez **Sélection > Masque rapide** ou appuyez sur **Q**.
- Choisissez **Calque > Revenir au dessin**.
- Sélectionnez **Quitter** dans la barre Masque rapide.
- Appuyez sur **Échap**.
- Sélectionnez le bouton de chargement à côté de la miniature, sur la ligne **Masque rapide**.

Le masque devient la sélection actuelle. **Désélectionner les pixels**
(**Ctrl+D**) quitte aussi le Masque rapide, et supprime la sélection.
