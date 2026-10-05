---
title: "Pipette"
description: "Prélever une couleur de peinture sur la toile avec la Pipette, et ses options Style, Source et Taille de l’échantillon."
related: ["color/color-panel", "color/edit-color", "input/touch", "input/keyboard"]
---

Vous pouvez prélever une couleur sur la toile pour peindre avec. Après le
prélèvement, l’outil que vous utilisiez revient.

## Lancer la Pipette

Effectuez l’une des opérations suivantes :

- Appuyez sur **I** (**O** avec les raccourcis Style GIMP).
- Choisissez **Pipette** dans la recherche de commandes.
- Dans Peinture et Photo, sélectionnez **Pipette** dans la barre d’outils Outils.
- Dans Croquis, sélectionnez **Pipette** dans la barre du bord gauche, entre les curseurs de taille et d’opacité.

Pour arrêter sans prélever, appuyez sur **I** ou sélectionnez de nouveau le même
bouton, appuyez sur **Échap**, ou choisissez un autre outil ou un autre pinceau.
Un toucher bref du doigt, sans maintien, arrête aussi la Pipette.

## Prélever

Survolez ou touchez la toile pour prévisualiser la couleur dans le panneau
Couleur. La couleur de peinture ne change qu’au moment du prélèvement.

| Saisie | Aperçu | Prélèvement |
| --- | --- | --- |
| Souris | Survol | Clic |
| Stylet | Survol, ou appui du stylet | Lever le stylet |
| Doigt | Toucher | Lever le doigt |

Avec un doigt, le point d’échantillonnage se trouve au-dessus du bout du doigt.

Les pixels transparents ne prélèvent rien, et les couleurs prélevées sont
toujours opaques. Les prélèvements se font dans l’espace colorimétrique du
dessin. Dans un dessin HDR, une couleur prélevée peut être plus lumineuse que le
blanc SDR. Pendant que vous modifiez un masque, le prélèvement définit la couleur
du masque.

## Prélever en peignant

Maintenez la touche **Alt** enfoncée quand un pinceau ou l’outil Mélange,
Fluidité, Remplissage ou Dégradé est sélectionné. Chaque clic prélève une couleur. Relâchez **Alt** pour
revenir à l’outil.

Les raccourcis Style Krita et Style GIMP utilisent **Ctrl** à la place. Sur la
page [Raccourcis clavier](/fr/docs/input/keyboard/), ce raccourci s’appelle
**Prélever la couleur pendant le maintien**. Vous pouvez aussi attribuer la
Pipette à un bouton du stylet sur la page **Stylet et saisie**
([Stylet](/fr/docs/input/pen/)).

## Maintenir un doigt

Maintenez un doigt immobile sur la toile pour commencer à prélever avec
n’importe quel outil. Levez le doigt pour prélever et revenir à l’outil.

- Le maintien dure une demi-seconde sur le web et sur iPad. Android, Windows et Linux utilisent la durée d’appui long du système.
- Déplacer le doigt avant le démarrage de la pipette annule le maintien.
- Le maintien ne fonctionne qu’avec un seul doigt sur la toile, sans autre opération en cours.
- Pendant le maintien, touchez avec un deuxième doigt pour faire passer **Source** de **Couleur visible** à **Calque sélectionné**, et inversement.

## Style

Choisissez **Style** dans la barre Options de l’outil pendant le prélèvement (en
haut de la fenêtre dans Photo). Les deux choix s’intitulent **Pipette** :

- Le premier affiche une loupe ronde. La moitié supérieure de son anneau montre la couleur échantillonnée, et la moitié inférieure la couleur active.
- Le second affiche un curseur en forme de pipette, dont la pointe est sur le point échantillonné.

![La loupe de la Pipette au-dessus d’un trait rouge, avec la couleur échantillonnée et la couleur active dans son anneau.](shot:color/eyedropper-loupe)

Le toucher utilise toujours la loupe. Sélectionner **Pipette** dans Croquis règle
**Style** sur la loupe. Une petite marque de calques apparaît quand **Source** est
réglé sur **Calque sélectionné**.

## Source et Taille de l’échantillon

Réglez-les dans le panneau Outil ou dans la barre Options de l’outil pendant le
prélèvement. Dans Croquis, double-cliquez ou touchez deux fois **Pipette** pour
les ouvrir.

![Le panneau Outil pendant le prélèvement, avec Source et Taille de l’échantillon.](shot:color/eyedropper-settings)

### Source

**Couleur visible** (par défaut) échantillonne le dessin tel que vous le voyez,
et **Calque sélectionné** la peinture propre du calque sélectionné, avant son
opacité, ses masques et son écrêtage. **Calque sélectionné** n’est proposé que
pour un calque de peinture non verrouillé.

### Taille de l’échantillon

**Un seul pixel** (par défaut), **Cercle de 5 px**, **Cercle de 15 px**,
**Cercle de 51 px** ou **Cercle de 101 px**. Un cercle fait la moyenne des pixels
qu’il contient.
