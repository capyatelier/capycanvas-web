---
title: "Règles et repères"
description: "Les repères qui maintiennent les traits de pinceau sur des lignes droites, et le redressement de l’image le long d’un repère."
related: ["drawing/figure", "transform/crop", "transform/move-transform", "drawing/brush-tools"]
---

Vous pouvez placer sur la toile des repères qui maintiennent les traits de
pinceau sur des lignes droites. Les repères sont enregistrés dans le fichier
`.capy` et n’apparaissent pas dans les images exportées.

## Outil Règle

Effectuez l’une des opérations suivantes :

- Appuyez sur **Maj+U**.
- Dans Peinture, sélectionnez **Règle** dans la barre d’outils Outils. Cliquez avec le bouton droit sur le bouton, ou appuyez longuement dessus, pour choisir **Droit**, **Parallèle** ou **Radial**.
- Cherchez **Règle** dans la recherche de commandes.

Croquis et Photo n’ont pas de bouton Règle. Vous pouvez en ajouter un avec
**Insérer des outils…** ([Barres d’outils et barre de titre](/fr/docs/customize/toolbars/)).

Faites glisser sur une partie vide de la toile pour ajouter un repère, ou
cliquez pour ajouter un repère Radial. Maintenez **Maj** enfoncée pendant le
glissement pour faire pivoter un repère Droit ou Parallèle par pas de 45°.

Faites glisser une poignée d’un repère pour changer son angle et sa longueur, ou
faites glisser sa ligne pour déplacer tout le repère.

- Appuyez sur **Échap** pour annuler un glissement.
- Ajouter, déplacer et supprimer un repère sont des étapes d’annulation.
- Quand les repères sont masqués, un glissement ajoute un nouveau repère et réaffiche tous les repères.
- Recadrer, Taille de l’image, Taille de la toile, la rotation et le retournement déplacent les repères avec l’image.

## Types de repères

![Des repères Droit, Parallèle et Radial sur la toile, avec des lignes en pointillés, des poignées carrées et la croix du repère radial.](shot:drawing/ruler-guides)

Les repères Droit et Parallèle sont des lignes en pointillés avec un carré à
chaque poignée. Un repère Radial est un carré avec une croix en pointillés. Un
repère sélectionné a des poignées plus grandes.

Seuls les traits des outils de pinceau suivent les repères.

### Droit

Un trait qui commence à moins de 12 pixels d’écran de la ligne du repère suit
cette ligne. La ligne s’étend sur toute la toile.

### Parallèle

Chaque trait est parallèle au repère, à partir du point où vous appuyez.

### Radial

Les traits sont dirigés vers le centre du repère. Chacun suit la ligne qui part
du centre et passe par le point où vous appuyez.

## Repère suivi par un trait

Un repère Droit proche l’emporte sur les repères Parallèle et Radial. Parmi
plusieurs repères Parallèle et Radial, celui dont la première poignée ou le
centre est le plus proche du début du trait l’emporte.

## Afficher les repères et le magnétisme

Vous pouvez masquer les repères ou désactiver le magnétisme.

Effectuez l’une des opérations suivantes :

- Choisissez **Affichage > Afficher les règles** ou **Affichage > Aligner sur les règles**.
- Quand l’outil Règle est actif, ou qu’un repère est sélectionné avec Opération, sélectionnez **Afficher les règles** ou **Aligner sur les règles** dans le panneau **Outil**.
- Choisissez **Plus > Show rulers** ou sélectionnez **Aligner sur les repères** dans la barre de guidage.

Les deux sont activés par défaut. **Aligner sur les règles** n’est pas disponible
quand les repères sont masqués.

## Supprimer un repère

Sélectionnez le repère, puis effectuez l’une des opérations suivantes :

- Appuyez sur **Supprimer** ou **Retour arrière**.
- Sélectionnez **Supprimer la règle** dans le panneau **Outil**.
- Sélectionnez **Supprimer le repère** dans la barre du repère.

**Supprimer** et **Retour arrière** ne suppriment un repère que si l’outil actif est
Règle, Figure, Opération, Transformer ou Recadrer. Avec les autres outils, ces
touches exécutent **Effacer les pixels sélectionnés**.

## Barre du repère

Quand vous sélectionnez un repère avec l’outil Règle ou Opération, une barre
apparaît sous ses poignées.

| Bouton | Action |
| --- | --- |
| **Supprimer le repère** | Supprime le repère. |
| **Aligner sur les repères** | Active ou désactive **Snap to rulers**. |
| **Plus > Show rulers** | Affiche ou masque tous les repères. Les masquer masque aussi la barre. |
| **Redresser** | Lance **Redresser l’image selon le repère**. Uniquement pour un repère Droit. |
| **Plus** | Ouvre un menu avec **Afficher la barre d’actions de la toile**. |

Désactiver **Affichage > Afficher la barre d’actions de la toile** retire la
barre du repère.

![Barre de guidage située sous un guide Droit sélectionné, avec Supprimer le repère, Aligner sur les repères, Redresser et Plus.](shot:drawing/ruler-guide-bar)

## Déplacer les repères avec Opération

Avec l’outil [Opération](/fr/docs/transform/move-transform/), faites glisser la
poignée ou la ligne d’un repère pour déplacer le repère plutôt que le calque.
Opération n’ajoute jamais de repères.

## Redresser l’image selon le repère

Vous pouvez mettre l’image de niveau le long d’un repère Droit.

Sélectionnez un repère Droit, puis effectuez l’une des opérations suivantes :

- Sélectionnez **Redresser** dans la barre du repère.
- Cherchez **Redresser l’image selon le repère** dans la recherche de commandes.

L’outil Recadrer s’ouvre avec son cadre pivoté de sorte que le repère devienne
horizontal ou vertical, selon ce qui est le plus proche. Appliquez le recadrage
pour faire pivoter l’image ([Recadrer](/fr/docs/transform/crop/)).
