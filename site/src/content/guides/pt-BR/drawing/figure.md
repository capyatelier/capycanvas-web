---
title: "Forma"
description: "Como desenhar linhas, retângulos, elipses, polígonos, estrelas e caminhos com a ferramenta Forma."
related: ["drawing/ruler", "drawing/brush-tools", "layers/vector", "brushes/basics", "customize/toolbars"]
---

Você pode desenhar linhas, retângulos, elipses, polígonos, estrelas e caminhos na
camada selecionada com a ferramenta **Forma**. Em uma
[camada vetorial](/pt-BR/docs/layers/vector/), cada forma vira um caminho que você
pode editar. Em uma camada de pintura, ela pinta pixels.

## Ferramenta Forma

Faça uma das seguintes ações:

- Pressione **U**.
- Em Pintura, selecione **Forma** na barra de ferramentas Ferramentas. Clique com o botão direito no botão ou mantenha-o pressionado para escolher **Linha**, **Retângulo**, **Elipse**, **Polígono**, **Estrela** ou **Caminho**.
- Busque **Forma** na busca de comandos, ou uma forma específica, como **Forma › Retângulo**.

Esboço e Foto não têm o botão Forma. Você pode adicioná-lo com **Inserir
ferramentas…** ([Barras de ferramentas e barra de título](/pt-BR/docs/customize/toolbars/)).

![O menu do botão Forma na barra de ferramentas Ferramentas de Pintura, com Linha, Retângulo, Elipse, Polígono, Estrela e Caminho.](shot:drawing/figure-menu)

Arraste na tela para desenhar qualquer forma, exceto **Caminho**. Um contorno
tracejado mostra a forma enquanto você arrasta, e a forma aparece quando você solta.
Mantenha **Shift** pressionada ao arrastar para desenhar uma linha em passos de 45°,
um quadrado, um círculo, ou um polígono ou uma estrela regulares.

- As formas desenham só a arte de uma camada, em camadas vetoriais e em camadas que um pincel consegue pintar ([Ferramentas de pincel](/pt-BR/docs/drawing/brush-tools/)).
- O **Bloqueio alfa** é respeitado.
- Em uma camada de pintura, uma seleção ativa recorta **Linha**, **Retângulo** e **Elipse**. Ela não recorta **Polígono**, **Estrela**, **Caminho** nem um retângulo com cantos arredondados.
- Com **Pintura transparente** selecionada no painel Cor, **Linha**, **Retângulo** e **Elipse** apagam em uma camada de pintura. Qualquer outra forma mostra um aviso pedindo uma cor.
- A pressão da caneta não altera a largura de uma forma.
- As formas não seguem as guias.
- Forma não está disponível na Máscara rápida nem em uma camada de seleção.
- Cada forma é um passo de desfazer.

## Formato

- **Linha** vai de onde você pressiona até onde você solta, com pontas arredondadas.
- **Retângulo** tem os cantos nos pontos onde você pressiona e solta, com os lados paralelos às bordas da tela.
- **Elipse** se encaixa no retângulo entre os pontos onde você pressiona e solta.
- **Polígono** e **Estrela** se encaixam no retângulo, com o primeiro canto ou a primeira ponta no alto.
- **Caminho** é desenhado âncora por âncora.

Escolha o formato no alto do painel **Conjunto de ferramentas**, no menu do botão
Forma ou em **Ferramenta** na barra Opções da ferramenta.

## Contorno e preenchimento

- **Contorno** desenha a borda da forma com a cor atual, centralizada na borda.
- **Preencher** cobre a forma com a cor atual.
- **Contorno + preenchimento** desenha o contorno com a cor de primeiro plano e preenche o interior com a cor de fundo.

Escolha o modo abaixo das formas no painel **Conjunto de ferramentas** ou em
**Variante** na barra Opções da ferramenta. Uma linha só pode ser desenhada com
**Contorno**.

![O painel Conjunto de ferramentas com Linha, Retângulo, Elipse, Polígono, Estrela e Caminho acima de Contorno, Preencher e Contorno + preenchimento.](shot:drawing/figure-tool-set)

## Configurações da forma

![O painel Ferramenta de Estrela, com Largura da linha, Opacidade, Pontas e Raio interno.](shot:vector/figure-settings)

**Raio dos cantos**, **Cantos**, **Pontas** e **Raio interno** ficam no painel
**Ferramenta** e na barra Opções da ferramenta, para a forma a que pertencem.

### Raio dos cantos

Arredonda os cantos de um **Retângulo**, de 0 a 4096 px.

### Cantos

Define o número de cantos de um **Polígono**, de 3 a 100. O padrão é 5.

### Pontas

Define o número de pontas de uma **Estrela**, de 3 a 100. O padrão é 5.

### Raio interno

Define a que distância do centro ficam os cantos internos de uma **Estrela**, como porcentagem do raio externo, de 5% a 100%. O padrão é 50%.

## Caminho

Você pode desenhar um caminho âncora por âncora.

- Clique para adicionar uma âncora de canto. Pressione e arraste para puxar as alças de uma âncora suave, ou mantenha **Alt** pressionada para arrastar só a alça de saída.
- Mantenha **Shift** pressionada para colocar a próxima âncora em passos de 45° a partir da última.
- Clique na primeira âncora para fechar o caminho.
- Selecione **Concluir caminho** na barra da tela ou pressione **Enter** para adicionar o caminho. **Cancelar caminho** ou **Escape** o descarta.
- **Remover último ponto** ou **Backspace** remove a última âncora, e **Desfazer** também.

![A barra de tela enquanto um caminho é desenhado, com Remover último ponto, Cancelar caminho e Concluir caminho.](shot:vector/path-bar)

O caminho usa o modo, a **Largura da linha** e as cores atuais, com cantos agudos e pontas retas. Em uma camada vetorial, ele fica selecionado quando você conclui, e um caminho que começa na ponta aberta de um caminho selecionado o continua.

## Largura da linha e Opacidade

**Largura da linha** e **Opacidade** ficam no painel **Ferramenta** e na barra Opções da ferramenta. Compartilham seus valores com **Tamanho do pincel** e **Opacidade** do pincel atual ([Tamanho, intensidade e opacidade](/pt-BR/docs/brushes/basics/)), e **[** e **]** alteram a largura da linha.

### Largura da linha

Define a largura do contorno, de 0,5 a 2048 px. Não aparece no modo **Preencher**. Em uma camada vetorial, **Largura do contorno** em [Propriedades](/pt-BR/docs/layers/paths/) a altera depois.

### Opacidade

Define a intensidade do contorno e do preenchimento por igual.
