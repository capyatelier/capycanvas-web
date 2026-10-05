---
title: "Degradê"
description: "Como pintar um degradê com a ferramenta Degradê, editar suas cores e adicionar camadas de Preenchimento de degradê."
related: ["drawing/fill", "layers/types", "filters/color", "color/edit-color"]
---

Você pode pintar um degradê em uma camada com a ferramenta **Degradê** ou
adicionar uma camada de **Preenchimento de degradê**, que continua editável.

## Ferramenta Degradê

Faça uma das seguintes ações:

- Pressione **G**.
- Em Pintura, selecione **Degradê** na barra de ferramentas Ferramentas.
- Em Foto, selecione o botão de degradê e preenchimento depois de **Liquefazer** na barra de ferramentas Ferramentas.
- Busque **Degradê** na busca de comandos.

Arraste do ponto inicial até o ponto final. Uma linha acompanha o ponteiro, e o
degradê é pintado quando você solta.

- O degradê cobre a camada inteira, com a primeira cor antes do ponto inicial e a última cor depois do ponto final.
- Pressione **Escape** durante o arrasto para cancelar.
- Arrastar com um dedo move a tela.
- Uma seleção ativa limita o degradê, e o **Bloqueio alfa** é respeitado.
- Na Máscara rápida ou em uma camada de seleção, o degradê vai para a máscara de seleção.
- Cada degradê é um passo de desfazer.

A ferramenta pinta só a arte de uma camada, e só em camadas que um pincel
consegue pintar ([Ferramentas de pincel](/pt-BR/docs/drawing/brush-tools/)).

## Forma

- **Linear**: a cor muda ao longo do arrasto.
- **Radial**: o ponto inicial é o centro, e o arrasto define o raio.
- **Reflected**: como Linear, espelhado dos dois lados do ponto inicial.

Faça uma das seguintes ações:

- Selecione a forma em **Forma**, no alto do painel **Ferramenta**, ou no painel **Conjunto de ferramentas**.
- Clique com o botão direito ou mantenha pressionado o botão Degradê na barra de ferramentas Ferramentas e escolha uma forma.
- Na barra Opções da ferramenta, escolha a forma em **Variante** ou, em Foto, em **Ferramenta**.

## Editor de pontos de cor

![O painel Ferramenta da ferramenta Degradê, com a linha Forma, o editor de pontos de cor e Opacidade.](shot:drawing/gradient-tool-panel)

Você pode editar as cores do degradê no editor de pontos de cor, abaixo de
**Forma** no painel **Ferramenta**. O botão de degradê na barra Opções da
ferramenta abre o editor em uma janela pop-up. As camadas de Preenchimento de
degradê e o filtro **Mapa de degradê** usam o mesmo editor
([Filtros de cor](/pt-BR/docs/filters/color/)).

Até ser editado, o degradê da ferramenta vai da cor de primeiro plano à cor de
fundo e acompanha as mudanças nas duas cores. Depois de uma edição, ele mantém os
pontos de cor até você selecionar **Redefinir degradê**. As edições no degradê da
ferramenta não são passos de desfazer.

### Interpolation

Define como as cores se misturam entre os pontos de cor. **Oklab** (o padrão)
mistura de forma uniforme, como o olho percebe a cor, **Luz linear** mistura como
a luz se mistura, e **Clássico** mistura os valores de cor armazenados.

### Reverter

Inverte a ordem dos pontos de cor.

### Redefinir degradê

Volta o degradê da ferramenta às cores de primeiro plano e de fundo, e o degradê
de uma camada de Preenchimento de degradê ou de um Mapa de degradê ao preto e
branco.

### Adicionar ponto de cor

Selecione a faixa fora dos marcadores para adicionar um ponto com a cor daquele
local. Um degradê tem até 32 pontos de cor.

### Marcadores dos pontos de cor

Selecione um marcador para selecionar o ponto de cor dele ou arraste-o para mover
o ponto.

### Posição

Define a posição do ponto de cor selecionado, em porcentagem. Os pontos das
extremidades ficam em 0% e 100%, e um ponto não pode passar dos vizinhos.

### Remover ponto de cor

Remove o ponto de cor selecionado. Os pontos das extremidades não podem ser removidos.

### Cor

Abre [Editar cor](/pt-BR/docs/color/edit-color/) para o ponto de cor selecionado.

### Usar cor selecionada

Define a cor atual no ponto de cor selecionado.

## Opacidade

**Opacidade** define a intensidade do degradê e é o mesmo valor da **Opacidade**
do pincel atual. Em Esboço, use o controle deslizante de opacidade na borda
esquerda.

## Camadas de Preenchimento de degradê

Você pode adicionar uma camada de preenchimento cujo degradê continua editável.

Faça uma das seguintes ações:

- Escolha **Camada > Novo > Preenchimento de degradê**.
- Escolha **Filtro > Preencher > Preenchimento de degradê**.
- No painel Filtros, selecione **Preenchimento de degradê** em **Preencher**.

As configurações da camada ficam no painel Propriedades, e cada alteração é um
passo de desfazer.

Uma seleção ativa vira a máscara da nova camada. Para pintar na camada, adicione
uma máscara primeiro ([Tipos de camada](/pt-BR/docs/layers/types/)).

![O painel Propriedades de uma camada de Preenchimento de degradê, com Forma, o editor de pontos de cor, Ângulo, Escala e Posição.](shot:drawing/gradient-fill-properties)

### Forma

**Linear**, **Radial** ou **Reflected**, como na ferramenta Degradê.

### Degradê

O editor de pontos de cor. Uma camada nova começa do preto ao branco.

### Ângulo

Define a direção do degradê, de −180° a 180°.

### Escala

Define o comprimento do degradê, de 10% a 400%.

### Centro X e Centro Y

Em **Posição**, definem o centro do degradê em porcentagem da largura e da altura
da tela.
