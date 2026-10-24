---
title: "Mélange, diffusion et soies"
description: "Les réglages qui déterminent comment les pinceaux humides, aquarelle, de mélange et à soies travaillent la peinture."
related: ["brushes/tip-texture", "brushes/basics", "drawing/blend-liquify", "drawing/brush-tools"]
---

Vous pouvez régler la façon dont les pinceaux humides et de mélange travaillent la
peinture dans le panneau **Outil**. Chaque groupe n’apparaît que sur les pinceaux
cités dans sa section.

![La partie inférieure du panneau Outil pour Aquarelle humide, avec les groupes Mélange, Aquarelle, Diffusion et Fusion.](shot:brushes/wet-media-settings)

## Mélange

**Mélange** apparaît sur les pinceaux de peinture à l’huile, **Gouache opaque**,
les pinceaux aquarelle et tous les mélangeurs. **Prélèvement moyenné**,
**Persistance** et **Recharge à la pression** n’apparaissent que sur les pinceaux
de peinture à l’huile, **Gouache opaque**, **Mélangeur humide** et **Mélangeur de
couleurs**.

### Charge de peinture

Définit la quantité de sa propre couleur que porte le pinceau et, pour les
pinceaux aquarelle, la force du pigment. Les valeurs basses laissent dominer la
couleur prélevée sur le calque.

### Prélèvement de couleur

Définit la distance sur laquelle le pinceau entraîne le long du trait la couleur
qu’il prélève sur le calque.

### Dilution

Dilue la peinture que porte le pinceau. Les valeurs élevées affaiblissent la
couleur propre du pinceau dans le mélange.

### Prélèvement moyenné

Définit dans quelle mesure les couleurs prélevées sur toute la pointe se fondent en
une seule. À 0 %, chaque partie de la pointe garde la sienne.

### Persistance

Définit jusqu’où la couleur moyennée se porte le long du trait. Apparaît seulement
tant que **Prélèvement moyenné** est supérieur à 0 %.

### Recharge à la pression

Définit dans quelle mesure une forte pression recharge le pinceau avec la couleur
sélectionnée. **Pinceau mélangeur** dépose sa couleur sous une forte pression et ne
fait que mélanger sous un toucher léger.

## Mélangeur

Chaque mélangeur ajoute des réglages au groupe **Mélangeur**. **Étendue** se trouve
en haut du panneau **Outil**.

| Réglage | Mélangeurs | Définit |
| --- | --- | --- |
| **Étendue** | Tous sauf **Couteau mélangeur** et **Marbrure** | Jusqu’où autour de chaque point du trait le mélangeur recueille la couleur. |
| **Traînées** | **Doigt**, **Mélangeur doux**, **Estompe**, **Mouchoir en papier**, **Mélangeur naturel**, **Mélangeur à soies**, **Couteau mélangeur** | Dans quelle mesure le trait se brise en traînées le long de sa direction. |
| **Netteté** | **Netteté** | Quel contraste le trait ajoute. |
| **Texture conservée** | **Mélangeur préservant la texture** | Quelle part de la texture fine sous le trait reste par-dessus la couleur mélangée. |
| **Taille des détails** | **Mélangeur préservant la texture** | La taille de la texture conservée. |
| **Mélanger la luminosité** | **Mélangeur de teinte** | Dans quelle mesure la luminosité se mélange avec la teinte et la saturation. |
| **Grain** | **Mélangeur dispersé** | Dans quelle mesure chaque pixel dispersé remplace entièrement celui du dessous. |
| **Étirement** | **Mélangeur pictural**, **Mélangeur cristallin** | Jusqu’où les plaques ou les cellules s’étirent le long du trait. |
| **Taille des cellules** | **Mélangeur cristallin** | La taille des cellules. |
| **Tourbillon** | **Marbrure** | Avec quelle force la peinture s’enroule. |
| **Taille des tourbillons** | **Marbrure** | La taille des tourbillons. |
| **Préservation des contours** | **Mélangeur peigne** | Avec quelle facilité le mélange s’arrête à un bord entre deux couleurs. |

## Aquarelle

**Lavis d’aquarelle** et **Aquarelle humide** ont un groupe **Aquarelle** pour le
liseré plus foncé qui se forme là où la peinture s’accumule. L’aquarelle ne réagit qu’à la peinture du même calque. **Intensité des bords** se trouve en haut du panneau **Outil**, au-dessus des groupes.

### Intensité des bords

Définit à quel point le liseré est foncé.

### Largeur des bords

Définit la largeur du liseré, de 0 à 32 px.

## Diffusion

Le groupe **Diffusion** des deux pinceaux aquarelle règle la façon dont l’eau et
le pigment se répandent dans le papier autour du trait. La peinture ne se répand
que pendant le trait, pas après que vous avez levé le stylet.

### Diffusion humide

Définit la vitesse à laquelle la peinture se répand dans un papier déjà humide.

### Diffusion à sec

Définit la vitesse à laquelle la peinture se répand dans un papier sec.

### Distance de diffusion

Définit jusqu’où la peinture peut se répandre à partir de chaque empreinte, de 0
à 96 px.

### Charge d’eau

Définit la quantité d’eau que chaque empreinte dépose sur le papier. Il se trouve en haut du panneau **Outil**, au-dessus des groupes.

## Mélange de couleurs

Vous pouvez choisir comment un pinceau de mélange combine les couleurs qu’il
prélève.

Effectuez l’une des opérations suivantes :

- Choisissez **Mélange Oklab**, **Mélange en lumière linéaire** ou **Mélange classique** dans **Mélange de couleurs** du panneau **Outil**.
- Ouvrez **Autres options de l’outil** dans la barre Options de l’outil, puis choisissez **Mélange de couleurs** dans le tiroir Outil ([Taille, intensité et opacité](/fr/docs/brushes/basics/)).
- Recherchez le nom du choix dans la recherche de commandes.

| Choix | Mélange |
| --- | --- |
| **Mélange Oklab** | Mélange les couleurs prélevées de façon régulière pour l’œil. |
| **Mélange en lumière linéaire** | Mélange les couleurs prélevées comme se mélange la lumière. |
| **Mélange classique** | Mélange les valeurs de couleur telles qu’elles sont enregistrées dans le dessin. |

Tous les pinceaux de mélange intégrés commencent sur **Mélange Oklab**. Le choix
est enregistré avec le pinceau, et le réglage **Fusion** du dessin ne le modifie
pas. Pour un pinceau qui ne mélange pas, les choix ne sont pas disponibles.

![Le réglage Mélange de couleurs avec Mélange Oklab.](shot:brushes/color-mixing-menu)

## Soies

Le groupe **Soies** n’apparaît que sur **Pinceau à soies**. Ce pinceau strie
l’autre couleur de la paire premier plan et arrière-plan en épais sillons de
peinture.

### Échelle des soies

Définit la taille des traces de soies par rapport à la taille du pinceau. Le
curseur va de 25 % à 200 %, et vous pouvez saisir des valeurs jusqu’à 400 %.

### Charge de peinture

Définit la quantité de peinture que porte le pinceau au début de chaque trait.
