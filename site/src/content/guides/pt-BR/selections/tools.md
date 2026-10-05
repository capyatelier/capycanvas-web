---
title: "Ferramentas de seleção"
description: "As ferramentas de seleção e as configurações delas no painel Ferramenta."
related: ["selections/working", "selections/tonal-range", "selections/quick-mask", "customize/toolbars"]
---

Você pode selecionar parte de um desenho com as ferramentas de seleção. As
configurações de uma ferramenta ficam no painel Ferramenta e, em Foto, também na
barra Opções da ferramenta, no topo da janela.

| Ferramenta | Seleciona | Tecla |
| --- | --- | --- |
| **Seleção retangular** | Um retângulo que você arrasta | |
| **Seleção elíptica** | Uma elipse que você arrasta | |
| **Seleção por laço** | Uma forma que você desenha à mão livre | **M** |
| **Laço poligonal** | Uma forma que você clica canto a canto | |
| **Seleção automática** | Uma área contínua de cor parecida | **W** |
| **Selecionar por cor** | Todos os pixels de cor parecida, contínuos ou não | |
| **Pintar seleção** | A área que você pinta | |
| **Intervalo tonal** | Pixels em uma faixa de brilho (consulte [Selecionar por brilho](/pt-BR/docs/selections/tonal-range/)) | |

## Escolher uma ferramenta de seleção

Faça uma das seguintes ações:

- Digite o nome da ferramenta na [busca de comandos](/pt-BR/docs/start/command-search/).
- Pressione **M** para **Seleção por laço** ou **W** para **Seleção automática**.
- Em Pintura, selecione **Selecionar** ou **Seleção automática / Selecionar por cor** na barra de ferramentas Ferramentas.
- Em Foto, selecione **Seleção retangular / Seleção elíptica**, **Seleção por laço / Laço poligonal**, **Seleção automática / Selecionar por cor** ou **Pintar seleção** na barra de ferramentas Ferramentas.
- Em Esboço, selecione **Selecionar** na barra de título. Selecione de novo para abrir uma gaveta com todas as ferramentas de seleção ao lado do painel Ferramenta.

Um botão da barra de ferramentas que reúne várias ferramentas mostra a última
que você usou. Para escolher outra, clique com o botão direito no botão ou mantenha-o
pressionado, ou selecione a ferramenta no painel **Conjunto de ferramentas**.
**Selecionar**, na barra de título de Esboço, volta para a última ferramenta de
seleção que você usou.

**Intervalo tonal** não tem botão nas barras de ferramentas de Pintura e de Foto.

Escolher uma ferramenta de seleção na Máscara rápida, ou enquanto você edita uma
camada de seleção, mantém esse modo ativado.

![A gaveta Selecionar em Esboço, com as ferramentas de seleção ao lado do painel Ferramenta de Seleção retangular.](shot:selections/tools-sketch-select-drawer)

## Modo

Você pode combinar a próxima área que selecionar com a seleção atual.

Selecione **Nova seleção**, **Adicionar à seleção**, **Subtrair da seleção** ou
**Interseção com seleção** na linha **Modo** do painel Ferramenta.
**Nova seleção** é o padrão.

Para mudar o modo de uma única seleção, mantenha uma tecla pressionada ao
começar a seleção:

- **Shift**: **Adicionar à seleção**
- **Alt**: **Subtrair da seleção**
- **Shift+Alt**: **Interseção com seleção**
- **Ctrl**: **Nova seleção**

Enquanto você mantém a tecla pressionada, a linha **Modo** mostra o modo que ela
escolhe. **Pintar seleção** tem apenas **Adicionar à seleção** e
**Subtrair da seleção**.

## Suavização de serrilhado e Raio de difusão

**Suavização de serrilhado** vem ativada por padrão. **Raio de difusão** suaviza
a borda de cada nova seleção em até 100 px e começa em 0.

**Pintar seleção** não tem nenhuma das duas configurações. **Intervalo tonal**
tem **Difusão** e não tem **Suavização de serrilhado**.

## Seleção retangular e Seleção elíptica

Arraste de um canto até o canto oposto. Depois de começar a arrastar, mantenha
**Shift** pressionada para um quadrado ou um círculo, ou **Alt** para desenhar a
partir do centro.

- **Proporção fixa** mantém a seleção na proporção definida em **Largura da proporção** e **Altura da proporção**, 1 : 1 por padrão.
- **Tamanho fixo** desenha uma seleção com a **Largura** e a **Altura** que você definir, em pixels. O padrão é 256 × 256.
- **Desenhar a partir do centro** coloca o centro da seleção no ponto onde você começa a arrastar.

Ativar **Proporção fixa** desativa **Tamanho fixo**, e vice-versa. Um clique sem
arrastar deixa a seleção como estava.

## Seleção por laço

Desenhe ao redor da área. Quando você levanta a caneta ou solta o botão do
mouse, a forma fechada vira a seleção.

## Laço poligonal

Clique em cada canto da forma. Para terminar, faça uma das seguintes ações:

- Clique de novo no primeiro canto.
- Pressione **Enter**.
- Selecione **Concluir** na barra de ações da tela ou **Concluir seleção** no painel Ferramenta.

Um polígono precisa de pelo menos três cantos.

- Para remover o último canto, pressione **Backspace** ou **Excluir**, ou selecione **Remover ponto** na barra de ações da tela ou **Remover último ponto** no painel Ferramenta.
- Para cancelar o polígono, pressione **Escape** ou selecione **Cancelar** na barra de ações da tela ou **Cancelar seleção** no painel Ferramenta.
- Para encaixar a próxima aresta em passos de 45°, mantenha **Shift** pressionada. Para encaixar todas as arestas, ative **Restringir bordas a 45°** no painel Ferramenta.

Enquanto você posiciona os cantos, a [barra de ações da tela](/pt-BR/docs/selections/working/)
na parte inferior da tela mostra **Remover ponto**, **Cancelar** e **Concluir**.

![A barra de ações da tela para um polígono, com Remover ponto, Cancelar e Concluir.](shot:selections/tools-polygon-bar)

## Seleção automática e Selecionar por cor

Clique em uma cor na tela. **Seleção automática** pega a área contínua ao redor
desse ponto, e **Selecionar por cor** pega os pixels correspondentes em
qualquer parte da imagem.

![O painel Ferramenta de Seleção automática, com Modo, Suavização de serrilhado, Origem, Tolerância, as configurações de Bordas e Raio de difusão.](shot:selections/tools-auto-select-settings)

### Origem

Define onde as ferramentas procuram as cores: **Arte visível** (o padrão),
**Camada em edição** ou **Camadas de referência**, as camadas marcadas com
[Usar como referência](/pt-BR/docs/layers/settings/).

### Tolerância

Define o quanto uma cor pode se afastar da cor clicada e ainda ser selecionada.
O padrão é 10%.

### Fechar lacunas

Fecha lacunas de até essa largura nas bordas ao redor da área, de 0 a 32 px.
Só em **Seleção automática**.

### Expansão

Aumenta a seleção em até 32 px, ou a reduz com um valor negativo.

### Suavização de bordas

Suaviza as bordas serrilhadas da seleção. Em 0%, as bordas seguem pixels
inteiros. Fica oculta enquanto **Suavização de serrilhado** está desativada.

**Seleção automática** e **Selecionar por cor** compartilham uma única
configuração **Origem**, e compartilham **Tolerância** e as configurações de
**Bordas** com as [ferramentas de preenchimento](/pt-BR/docs/drawing/fill/).

## Pintar seleção

Pinte sobre a área com um pincel redondo. Um laço fechado que você pinta é
preenchido.

- **Adicionar à seleção** ou **Subtrair da seleção** define o que o pincel faz.
- **Pressão controla tamanho** vem desativada por padrão.
- **Tamanho**, **Dureza** e **Opacidade** definem o pincel redondo.

Mantenha **Shift** pressionada enquanto pinta para adicionar, ou **Alt** para
fazer o contrário da configuração atual. A ponta de borracha de uma caneta
subtrai. Um traço que subtrai não faz nada enquanto não há seleção.

## O botão Selecionar

**Selecionar**, abaixo das configurações de uma ferramenta de seleção no painel
Ferramenta, abre o [menu Selecionar](/pt-BR/docs/selections/working/). As
configurações de **Intervalo tonal** não têm o botão **Selecionar**.
