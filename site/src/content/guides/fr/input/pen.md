---
title: "Stylet"
description: "Les réglages du stylet dans les Préférences, et le double-toucher et la pression sur l’Apple Pencil."
related: ["input/touch", "input/keyboard", "preferences", "brushes/basics"]
---

Les réglages du stylet se trouvent sur la page **Stylet et saisie** d’**Édition > Préférences**.

![La page Stylet et saisie des Préférences.](shot:pen/pen-and-input)

## Réponse à la pression

Vous pouvez modifier la réaction du stylet à une pression légère avec
**Réponse à la pression** sous **Réponse du stylet**. Les valeurs faibles amplifient une
pression légère, et les valeurs élevées demandent plus de force. La plage va de
0,25 × à 4,00 ×. À la valeur par défaut, 1,00 ×, la pression du stylet est
utilisée telle quelle.

Le réglage s’applique à tous les pinceaux et à tous les outils, y compris
**Peindre la sélection** et **Masque rapide**. Les traits déjà dessinés ne
changent pas.

## Prédiction des traits

La prédiction des traits dessine un court segment du trait en avance sur la
pointe du stylet, et le vrai trait le remplace à mesure que vous dessinez. Les
réglages se trouvent sous **Réponse du stylet** :

- **Activer la prédiction des traits** active ou désactive les deux types de prédiction.
- **Utiliser la prédiction des traits de *système***, par exemple **Utiliser la prédiction des traits de Windows**, utilise la prédiction du système ou du navigateur.
- **Intensité de la prédiction** règle l’avance de la prédiction propre à {appName}, de 0 à 64 ms.

Les deux interrupteurs sont activés par défaut, et **Intensité de la prédiction**
vaut 16 ms. Quand **Activer la prédiction des traits** est désactivé, les deux
autres réglages ne sont pas disponibles.

| Système | La prédiction du système |
| --- | --- |
| iPad | Disponible |
| Windows | Disponible quand Windows la propose |
| Android | Android 14 et versions ultérieures, avec un stylet pris en charge par le système |
| Web | Dans les navigateurs qui la proposent |
| macOS, Linux | Jamais disponible |

Quand la prédiction du système n’est pas disponible, son interrupteur ne l’est
pas non plus, et **Intensité de la prédiction** règle la prédiction. Quand la
prédiction du système est utilisée, **Intensité de la prédiction** n’est pas
disponible (masqué sur iPad).

Le curseur suit le stylet, pas le trait prédit.

![Les réglages Réponse du stylet.](shot:pen/prediction)

## Forme du curseur

Vous pouvez choisir le pointeur affiché au-dessus de la toile avec
**Forme du curseur** sous **Pointeur**.

| Choix | Affiche |
| --- | --- |
| **Taille du pinceau** | Le contour de la pointe du pinceau avec sa taille, sa forme et sa rotation (par défaut) |
| **Croix**, **Triangle** | Une croix ou un petit triangle |
| **Point** | Une toute petite croix |
| **Point d’un pixel** | Un pixel de l’écran |
| **Viseur** | Une croix avec un point au centre |
| **Outil** | L’icône de l’outil, avec son point d’action sous le pointeur |
| **Outil et taille du pinceau**, **Taille du pinceau et croix**, **Taille du pinceau et point**, **Taille du pinceau et point d’un pixel** | Le contour du pinceau accompagné de l’autre marque |
| **Aucun** | Rien pour un stylet sur un écran. Une souris, un trackpad ou une tablette sans écran affiche **Viseur**. |

La forme s’applique aux outils de peinture et à **Peindre la sélection**. Les
autres outils affichent leur icône quand la forme comprend **Outil**, et une
croix sinon.

![La liste Forme du curseur.](shot:pen/cursor-shapes)

## Masquer le curseur pendant la peinture

Quand **Masquer le curseur pendant la peinture** est activé (par défaut), le
curseur disparaît tant que le stylet touche la toile ou que le bouton de la
souris est enfoncé avec un outil de peinture. Le contour du pinceau reste visible
pendant que vous effacez.

## Extrémité gomme

Vous pouvez choisir ce que fait l’extrémité gomme de votre stylet. Le groupe
**Extrémité gomme** n’est pas affiché sur iPad.

- **Outil** : **Outil actuel** (par défaut) conserve l’outil que vous utilisez. **Gomme**, **Plume**, **Crayon**, **Pinceau de peinture**, **Aérographe** et **Mélange** passent à cet outil pendant que vous utilisez l’extrémité gomme, et l’outil précédent revient ensuite.
- **Peindre avec de la transparence** : quand ce réglage est activé (par défaut), l’extrémité gomme efface avec le pinceau de l’outil. Quand il est désactivé, l’extrémité gomme peint. Cet interrupteur est masqué quand **Outil** est réglé sur **Gomme**.

## Boutons du stylet

Vous pouvez attribuer une action à chaque bouton latéral de votre stylet, et une
action différente pour chaque type d’outil.

Pour régler un bouton du stylet :

1. Sélectionnez le bouton sous **Boutons du stylet**.
2. Sélectionnez **Action**, ou désactivez **Identique pour tous les outils** et sélectionnez un type d’outil, comme **Outils dessin**.
3. Choisissez une action. **Rien** efface l’attribution du bouton.

Les outils, les pinceaux et les modes, comme **Déplacer la vue** ou
**Prélever la couleur**, restent actifs tant que vous maintenez le bouton. Les autres actions
s’exécutent une fois. Un appui pendant un trait prend effet après le trait.

Tous les boutons commencent sur **Rien**. Un bouton réglé sur **Rien** conserve
l’action que lui donne le pilote de votre tablette ou le système.

| Système | Boutons listés |
| --- | --- |
| Linux | **Bouton latéral inférieur**, **Bouton latéral supérieur**, **Troisième bouton latéral** |
| Windows | **Bouton latéral inférieur** |
| macOS, Android, web | **Bouton latéral inférieur**, **Bouton latéral supérieur** |
| iPad | Aucun |

Sous Linux et Android, les boutons de la tablette se règlent comme des
touches sur la page [Raccourcis clavier](/fr/docs/input/keyboard/).

![La page Bouton latéral inférieur, avec une action pour chaque type d’outil.](shot:pen/pen-button-page)

## Double-toucher et pression sur l’Apple Pencil

Sur iPad, le double-toucher sur l’Apple Pencil et la pression sur un Apple Pencil
Pro suivent le réglage propre à l’iPad dans **Réglages > Apple Pencil**.

- « Basculer entre l’outil actuel et la gomme » passe à la **Gomme** et revient.
- « Basculer entre l’outil actuel et le dernier outil utilisé » passe à l’outil choisi précédemment.

Les autres choix n’ont aucun effet dans {appName}. La pression agit quand vous
relâchez. Quand l’Apple Pencil survole l’écran, le curseur apparaît.
