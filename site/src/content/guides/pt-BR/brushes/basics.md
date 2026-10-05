---
title: "Tamanho, opacidade e fluxo"
description: "Tamanho do pincel, Opacidade e Fluxo, e os painéis, barras e teclas onde você altera as configurações do pincel."
related: ["brushes/tip-texture", "brushes/reset", "drawing/brush-tools", "input/keyboard"]
---

Toda alteração em uma configuração de pincel é salva com a predefinição do pincel
([Salvar e redefinir pincéis](/pt-BR/docs/brushes/reset/)).

## Painel Ferramenta

Você pode alterar todas as configurações do pincel atual no painel **Ferramenta**.

Faça uma das seguintes ações:

- Escolha **Janela > Ferramenta**.
- Em Pintura, selecione a aba **Ferramenta** na coluna esquerda.
- Em Foto, selecione **Ferramenta** na faixa de ícones à direita.
- Selecione de novo o botão da ferramenta ativa. **Ferramenta** é a última coluna da gaveta.

Cada configuração tem um valor, botões **−** e **+** e um controle deslizante.
Selecione o valor para digitar um número. Só aparecem as configurações que o
pincel usa, agrupadas sob títulos como **Ponta** e **Textura**
([Ponta e textura](/pt-BR/docs/brushes/tip-texture/)).

![O painel Ferramenta do Lápis, com Tamanho do pincel, Opacidade e Fluxo acima dos grupos Ponta e Textura.](shot:brushes/tool-panel)

### Tamanho do pincel

Define o diâmetro do pincel, de 0,5 a 2048 px.

### Opacidade

Define a intensidade de cada carimbo do traço. Nenhum pincel integrado varia a
Opacidade com a pressão da caneta.

### Fluxo

Define quanta tinta cada carimbo deposita, medida com pressão máxima nos pincéis
em que a pressão altera o fluxo. Os pincéis úmidos e de mistura também usam o
Fluxo para definir com que força cada carimbo se mistura à tinta da camada.

Os pincéis de Liquefazer não têm Fluxo.

## Acúmulo dentro de um traço

Onde um traço cruza a si mesmo, estes pincéis ficam na intensidade do carimbo
mais forte: as predefinições do grupo **Caneta**, **Marcador**, **Lápis de
sombreado**, **Pincel**, **Pincel de cerdas**, **Pincel chato texturizado**,
**Esfregaço seco**, **Bloco de pastel**, **Veladura transparente**, **Aguada de
aquarela** e **Aquarela molhada**. Os outros pincéis acumulam tinta onde os
carimbos se sobrepõem.

A configuração **Mesclagem** do desenho controla como os carimbos se acumulam
([Espaço de cores, profundidade de bits e mesclagem](/pt-BR/docs/color-management/color-spaces/)).

## Painel Tamanho do pincel

Você pode escolher um tamanho em uma grade no painel **Tamanho do pincel**.

Faça uma das seguintes ações:

- Escolha **Janela > Tamanho do pincel**.
- Em Pintura, selecione a aba **Tamanho do pincel** ao lado de **Ferramenta**, na coluna esquerda.
- Em Foto, selecione **Tamanho do pincel** na faixa de ícones à direita.

Cada botão mostra um ponto e um tamanho em pixels. O botão do tamanho atual fica
pressionado.

Com **Pintar seleção** ativo, o painel define o tamanho do pincel de seleção. Você
pode dar uma tecla a cada tamanho em **Tamanhos de pincel**, na página Atalhos de
teclado.

![O painel Tamanho do pincel com a grade de botões de tamanho.](shot:brushes/brush-size-panel)

## Barra Opções da ferramenta

Você pode alterar as configurações da ferramenta atual em uma só linha com a
barra **Opções da ferramenta**. Em Foto, ela fica no fim da barra de ferramentas
de cima. Nas outras áreas de trabalho, adicione-a a uma barra de ferramentas com
**Inserir ferramentas…** ([Barras de ferramentas e barra de título](/pt-BR/docs/customize/toolbars/)).

Os menus **Ferramenta** e **Variante** vêm primeiro quando a ferramenta tem
opções, depois **Mistura de cores** nos pincéis que misturam tinta e, por fim, as
configurações numéricas. As configurações que não cabem ficam em **Mais opções da
ferramenta**.

- Clique duas vezes (ou toque duas vezes) no rótulo ou no ícone de uma configuração para voltar ao valor integrado do pincel.
- Role sobre um valor para alterá-lo passo a passo. Com um dedo, arraste o valor para cima ou para baixo.
- Clique com o botão direito na barra ou mantenha-a pressionada para escolher **Horizontal: texto**, **Horizontal: ícones** ou **Mostrar controles deslizantes**.

![A barra Opções da ferramenta em Foto para o Pincel de pintura, com Variante e as configurações numéricas.](shot:brushes/tool-options-bar)

## Controles deslizantes em Esboço

Você pode definir o tamanho e a opacidade do pincel com os dois controles
deslizantes da barra na borda esquerda, em Esboço.

- Toque ou clique na trilha para definir um valor. Uma prévia mostra a ponta no tamanho real em pixels ou na opacidade escolhida.
- Arraste ao longo da trilha para alterar o valor. A prévia fecha quando você levanta o dedo ou a caneta.
- Toque na tampa na ponta do controle deslizante para ver a prévia sem alterar o valor.

Selecione **+** (**Marcar este valor**) na prévia para marcar o valor na trilha,
ou **−** (**Remover marcador**) para remover a marca. Um toque perto de uma marca
define exatamente esse valor. Cada predefinição de pincel guarda seus próprios
marcadores.

Um controle deslizante fica esmaecido quando a ferramenta atual não tem tamanho ou
opacidade. Você pode adicionar o **Controle deslizante de tamanho do pincel** e o
**Controle deslizante de opacidade do pincel** a qualquer barra de ferramentas com
**Inserir ferramentas…**.

![A barra da borda esquerda em Esboço, com a prévia de tamanho aberta ao lado do Controle deslizante de tamanho do pincel.](shot:brushes/sketch-size-slider)

## Teclas

| Tecla | Ação |
| --- | --- |
| **[** | **Diminuir tamanho do pincel** em 1 px. Mantenha a tecla pressionada para repetir. |
| **]** | **Aumentar tamanho do pincel** em 1 px. Mantenha a tecla pressionada para repetir. |
| Nenhuma | **Diminuir opacidade do pincel** e **Aumentar opacidade do pincel** em 1%. |

Você pode atribuir teclas a essas ações em **Pintura**, na página
[Atalhos de teclado](/pt-BR/docs/input/keyboard/).

## Digitar um valor

Busque o nome de uma configuração, como **Fluxo…**, e digite o novo valor
([Busca de comandos](/pt-BR/docs/start/command-search/)).
