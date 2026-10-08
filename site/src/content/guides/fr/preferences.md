---
title: "Préférences"
description: "La boîte de dialogue Préférences et les réglages de ses pages Apparence, Toile, Couleur et À propos."
related: ["input/pen", "input/keyboard", "customize/zen", "color-management/color-spaces"]
---

Vous pouvez modifier les réglages de toute l’application dans la boîte de
dialogue **Préférences**. Chaque modification s’applique et s’enregistre
immédiatement.

![La boîte de dialogue Préférences sur la page Apparence.](shot:preferences/appearance)

## Ouvrir les Préférences

Effectuez l’une des opérations suivantes :

- Choisissez **Édition > Préférences**. Sur macOS, choisissez **Réglages…** dans le menu de l’application.
- Appuyez sur **Ctrl+,**.
- Dans Peinture et Photo, sélectionnez le bouton en forme d’engrenage à l’extrémité droite de la barre de titre.
- Tapez « Préférences » dans la [recherche de commandes](/fr/docs/start/command-search/).

Les Préférences s’ouvrent sur la page **Apparence**.
**Aide > Raccourcis clavier** les ouvre sur **Raccourcis clavier**, et
**Aide > À propos de {appName}** sur **À propos**.

Tant que les Préférences sont ouvertes, les raccourcis de la toile, les boutons
du stylet et les touchers à plusieurs doigts n’ont aucun effet.

## Rechercher dans les préférences

Sélectionnez **Rechercher dans les préférences** en haut de la barre latérale, ou
commencez à taper n’importe où hors d’un champ de texte.

La recherche trouve aussi les raccourcis clavier, les boutons du stylet et les
touchers à plusieurs doigts. Sélectionner un raccourci ouvre son éditeur de raccourci.
Dans les autres langues, la recherche reconnaît aussi les noms anglais.

![Les résultats de recherche pour « cursor » dans la barre latérale des Préférences.](shot:preferences/search)

## Réinitialiser un réglage

Sur le web et dans l’application Linux, cliquez avec le bouton droit sur un
réglage, ou appuyez longuement dessus avec un doigt ou un stylet, et choisissez
**Rétablir les valeurs par défaut**. L’élément de menu affiche la valeur par
défaut. Il n’est pas disponible tant que le réglage a sa valeur par défaut.

Vider un champ numérique ou un champ de couleur hexadécimale rétablit aussi la
valeur par défaut.

![Le menu Rétablir les valeurs par défaut du réglage Couleur de base du thème sombre.](shot:preferences/reset-menu)

## Apparence

Les couleurs de base et la couleur d’accentuation ne modifient que l’interface,
jamais le dessin.

### Langue

Définit la langue de l’interface. **Utiliser la langue du système** est la valeur
par défaut, et chaque langue est listée sous son propre nom.

### Thème de couleurs

Choisissez **Système** (par défaut), **Clair** ou **Sombre**. La commande
**Mode sombre** de la recherche de commandes bascule entre **Clair** et **Sombre**.

### Transparence des panneaux

Définit la part du dessin flouté visible à travers les panneaux et les barres :
**Désactivé**, **Faible** (par défaut), **Moyen** ou **Élevé**. Voir
[Panneaux et colonnes](/fr/docs/customize/panels/).

### Couleur de base du thème sombre

Définit le gris de l’interface dans le thème sombre. Choisissez une pastille, ou
**Personnalisé** pour saisir une couleur hexadécimale à six chiffres.

### Couleur de base du thème clair

Définit le gris de l’interface dans le thème clair, avec les mêmes choix.

### Couleur d’accentuation

**Système** utilise la couleur d’accentuation du système d’exploitation. C’est la
valeur par défaut sous Linux, Windows, macOS et Android, et ce choix n’est pas
proposé sur le web ni sur iPad. Les autres choix sont **Bleu** (par défaut sur le
web et sur iPad), **Bleu sarcelle**, **Vert**, **Jaune**, **Orange**, **Rouge**,
**Rose**, **Pourpre**, **Ardoise** et **Personnalisé**.

### Afficher Capy en mode Zen

Garde le bouton Capy à l’écran en [mode Zen](/fr/docs/customize/zen/). Activé par
défaut.

### Afficher les panneaux près des bords de l’écran

Affiche les commandes masquées en mode Zen tant que le pointeur est près d’un
bord de l’écran qui a des commandes masquées. Désactivé par défaut.

### Icône du bouton

Définit l’image du bouton Capy : **Regard vers le haut** (par défaut),
**Regard de face**, **Baignade** ou **Sommeil**.

## Toile

### Vitesse de déplacement par défilement

Règle l’ampleur du défilement de la toile par la molette de la souris, le
trackpad et le stick gauche d’une manette de jeu, de 0,25 × à 4,00 × (1,00 × par
défaut).

### Vitesse de zoom par défilement

Règle le zoom avec **Ctrl** et la molette de la souris, ou avec le stick droit
d’une manette de jeu, de 0,25 × à 4,00 × (1,00 × par défaut).

### Utiliser Transfert pour les nouveaux groupes

Règle les nouveaux groupes sur [Transfert](/fr/docs/layers/blend-modes/).
Désactivé par défaut. Les groupes existants ne changent pas.

## Couleur

Les réglages **Nouveaux dessins** s’appliquent aux
[dessins que vous créez](/fr/docs/files/new/) ensuite. Les réglages
**Ouverture des photos** s’appliquent aux photos que vous ouvrez.

![La page Couleur des Préférences.](shot:preferences/color)

### Espace colorimétrique

Choisissez **sRGB** (par défaut), **Display P3**, **Adobe RGB (1998)** ou
**ProPhoto RGB**.

### Profondeur de couleur

Choisissez **SDR 8 bits** (par défaut), **SDR 16 bits**, **HDR flottant 16 bits**
ou **HDR flottant 32 bits**.

### Arrière-plan

Choisissez **Blanc** (par défaut) ou **Transparent**.

### Précision de retouche

**Profondeur d’origine** (par défaut) conserve la profondeur de couleur propre
d’une photo. **16 bits** ouvre les photos 8 bits en 16 bits, et les photos en
virgule flottante restent en virgule flottante.

### RVB et niveaux de gris sans profil

Définit l’ouverture des photos sans profil colorimétrique : **Supposer sRGB** (par
défaut) ou **Demander**. Les photos avec profil le conservent.

### Gérer les profils…

Ouvre la bibliothèque de profils colorimétriques. Voir
[Espace colorimétrique, profondeur de couleur et fusion](/fr/docs/color-management/color-spaces/).

## Stylet et saisie

Les réglages de cette page sont décrits dans [Stylet](/fr/docs/input/pen/) et
[Gestes tactiles](/fr/docs/input/touch/).

## Raccourcis clavier

Le jeu de raccourcis, les touches modificatrices et les raccourcis de cette page
sont décrits dans [Raccourcis clavier](/fr/docs/input/keyboard/).

## À propos

La page **À propos** liste les lignes **Version**, **Licence de l’application**,
**Rendu de la toile**, **Site web**, **Code source** et **Dédié à**.

## Où sont conservées les préférences

Chaque appareil conserve ses propres préférences. Dans l’application web, les
préférences appartiennent au navigateur et sont communes à tous ses onglets. Pour
transférer les touches, les touches modificatrices, les boutons du stylet et les
touchers à plusieurs doigts sur un autre appareil, exportez un jeu de raccourcis
depuis la page [Raccourcis clavier](/fr/docs/input/keyboard/).
