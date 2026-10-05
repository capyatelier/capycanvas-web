---
title: "Tamanho e rotação da imagem"
description: "Os comandos de Editar > Imagem que mudam o tamanho e a orientação da imagem inteira."
related: ["transform/crop", "start/canvas", "files/new", "color-management/color-spaces"]
---

Você pode redimensionar, girar e espelhar a imagem inteira em
**Editar > Imagem**. A imagem continua no mesmo lugar na tela do monitor.

Os comandos ficam indisponíveis enquanto um recorte ou uma transformação está
aberto, e enquanto você edita uma máscara, a Máscara rápida ou uma camada de
seleção. Para **Recortar** e **Recortar tela à seleção**, consulte
[Recortar](/pt-BR/docs/transform/crop/).

![O submenu Imagem do menu Editar.](shot:transform/image-menu)

## Tamanho da imagem…

Você pode dimensionar a imagem inteira ou mudar só a resolução dela.

Escolha **Editar > Imagem > Tamanho da imagem…**. As camadas de pintura e as
máscaras são reamostradas, e as fotos posicionadas mantêm os pixels originais.
Seleções, guias e configurações de filtros medidas em pixels acompanham a escala
da imagem.

![A caixa de diálogo Tamanho da imagem.](shot:transform/image-size-dialog)

### Largura e Altura

Defina o novo tamanho em **Pixels** ou **Porcentagem**. Trocar a unidade
converte os valores.

### Manter proporções

Vincula **Largura** e **Altura**. Vem ativado por padrão.

### Resolução

Define a resolução em pixels por polegada. Se você mudar só a resolução, os
pixels continuam como estão. O campo começa com a resolução do desenho, ou com
72 ppi se o desenho não tiver uma.

### Reamostrar

**Automático** (o padrão) usa Lanczos quando a imagem diminui e Bicúbica quando
ela aumenta. Você também pode escolher **Bicúbica**, **Lanczos**, **Bilinear**
ou **Vizinho mais próximo**.

## Tamanho da tela…

Você pode acrescentar ou remover tela ao redor da imagem sem reamostrar.

Escolha **Editar > Imagem > Tamanho da tela…**. Os pixels fora de uma tela
menor continuam nas camadas deles, ocultos, e uma tela maior volta a mostrá-los.

![A caixa de diálogo Tamanho da tela.](shot:transform/canvas-size-dialog)

### Largura e Altura

Defina o novo tamanho em **Pixels** ou **Porcentagem**. Trocar a unidade
converte os valores.

### Relativa

Soma os valores digitados ao tamanho atual. Vem desativada por padrão.

### Âncora

Escolhe, em uma grade 3 × 3, o lado ou o canto da imagem que fica no lugar.
**Centro** é o padrão.

## Girar e espelhar a imagem

Escolha uma destas opções em **Editar > Imagem**:

- **Girar imagem 90° à esquerda**
- **Girar imagem 90° à direita**
- **Girar imagem 180°**
- **Inverter imagem horizontalmente**
- **Inverter imagem verticalmente**

A imagem inteira gira ou é espelhada junto com a seleção e as guias. Os pixels
não são reamostrados. Para girar ou espelhar só a visualização, consulte
[Visualizar a tela](/pt-BR/docs/start/canvas/).

## Aparar

Escolha **Editar > Imagem > Aparar** para reduzir a tela aos pixels visíveis.
Os pixels fora da nova tela continuam nas camadas deles, ocultos.

## Revelar tudo

Escolha **Editar > Imagem > Revelar tudo** para aumentar a tela até ela mostrar
os pixels de todas as camadas, incluindo camadas ocultas e pixels fora da tela.
