---
title: "Máscara rápida"
description: "Como editar uma seleção como uma máscara pintada na Máscara rápida."
related: ["selections/working", "selections/selection-layers", "selections/tonal-range", "layers/masks"]
---

Você pode editar uma seleção como uma máscara pintada na Máscara rápida.

## Entrar na Máscara rápida

Faça uma das seguintes ações:

- Escolha **Selecionar > Máscara rápida**.
- Pressione **Q**.
- Selecione **Máscara rápida** na [barra de seleção](/pt-BR/docs/selections/working/).

A seleção atual vira a máscara. Sem seleção, a máscara começa vazia. A
ferramenta muda para o pincel atual, exceto quando **Intervalo tonal** está
ativo.

Não é possível entrar na Máscara rápida enquanto uma transformação está aberta.

## O que a Máscara rápida mostra

Uma sobreposição, vermelha a 50% por padrão, marca a máscara na tela. No modo
**Pintar seleção**, ela cobre a área selecionada, e no modo
**Máscara em escala de cinza**, a área fora da seleção.

Uma linha chamada **Máscara rápida** aparece selecionada no topo do painel
Camadas. O botão de olho dela mostra ou oculta a sobreposição, assim como
**Mostrar sobreposição de máscara** na busca de comandos. O painel Cor mostra as
cores da máscara no lugar das cores do desenho.

![A foto do terrário na Máscara rápida, com a sobreposição sobre os realces.](shot:selections/quick-mask-overlay)

## Pintar a máscara

Pinte com uma caneta, um lápis, um aerógrafo ou uma borracha para alterar a
máscara. Os outros pincéis não pintam na Máscara rápida. **Preencher**,
**Degradê** e **Pintar seleção** também alteram a máscara.

- No modo **Pintar seleção**, qualquer cor seleciona. A borracha e a cor transparente desmarcam.
- No modo **Máscara em escala de cinza**, o valor de cinza da cor define a máscara: o branco seleciona, o preto desmarca e os cinzas selecionam em parte.

A máscara tem cores de primeiro plano e de fundo próprias, copiadas das cores do
desenho quando a Máscara rápida começa. Pressione **D**
(**Redefinir para preto / branco**) para ter o primeiro plano preto e o fundo
branco. Para trocar as cores da máscara, execute **Trocar cores da máscara** na
busca de comandos.

Os comandos que alteram a arte, como **Limpar pixels selecionados** e
**Transformar**, ficam indisponíveis na Máscara rápida.

## Barra da Máscara rápida

A [barra de ações da tela](/pt-BR/docs/selections/working/) na parte inferior da tela tem
a legenda "Máscara rápida":

- **Inverter**: **Inverter seleção**.
- **Preencher** e **Limpar**: **Preencher máscara** preenche a máscara inteira, e **Limpar cobertura da seleção** esvazia a máscara.
- **Refinar**: **Expandir…**, **Contrair…**, **Difusão…**, **Borda…** e **Suavizar…**. **Transformar contorno** fica indisponível aqui.
- **Salvar**: **Salvar como camada de seleção** (consulte [Camadas de seleção](/pt-BR/docs/selections/selection-layers/)).
- **Sair**: **Voltar à arte**.

Com a barra de ações da tela oculta, a barra da Máscara rápida não aparece.

![A barra da Máscara rápida na parte inferior da tela.](shot:selections/quick-mask-bar)

## Menu Máscara rápida

Enquanto a Máscara rápida está ativada, o menu **Camada** vira o menu
**Máscara rápida**. Clique com o botão direito ou mantenha pressionada a linha
**Máscara rápida** para abrir o mesmo menu.

- **Voltar à arte**
- **Salvar como camada de seleção**
- **Modificar**: **Inverter seleção**, **Selecionar todos os pixels**, **Limpar cobertura da seleção**, **Preencher máscara**, **Expandir…**, **Contrair…**, **Difusão…**, **Borda…** e **Suavizar…**

## Configurações da sobreposição

O painel Propriedades mostra as configurações da máscara enquanto a Máscara
rápida está ativada.

![O painel Propriedades da Máscara rápida, com Modo, Cor da sobreposição e Opacidade da sobreposição.](shot:selections/quick-mask-properties)

### Modo

**Pintar seleção** (o padrão) ou **Máscara em escala de cinza**. O modo é uma
única configuração para a Máscara rápida e para todas as camadas de seleção, em
todos os desenhos. O comando **Máscara em escala de cinza** na busca de comandos
também alterna o modo.

### Cor da sobreposição

Define a cor da sobreposição. Vermelho por padrão.

### Opacidade da sobreposição

De 0 a 100%. O padrão é 50%.

## Sair da Máscara rápida

Faça uma das seguintes ações:

- Escolha **Selecionar > Máscara rápida** ou pressione **Q**.
- Escolha **Camada > Voltar à arte**.
- Selecione **Sair** na barra da Máscara rápida.
- Pressione **Escape**.
- Selecione o botão de carregar ao lado da miniatura na linha **Máscara rápida**.

A máscara vira a seleção atual. **Desmarcar pixels** (**Ctrl+D**) também sai da
Máscara rápida e remove a seleção.
