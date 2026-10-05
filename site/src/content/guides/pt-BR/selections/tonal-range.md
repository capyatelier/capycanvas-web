---
title: "Selecionar por brilho"
description: "A ferramenta Intervalo tonal, para selecionar pixels pelo brilho."
related: ["selections/tools", "selections/quick-mask", "color-management/hdr", "customize/toolbars"]
---

Você pode selecionar pixels pelo brilho com a ferramenta **Intervalo tonal**. O
brilho é medido em pontos de exposição em relação ao branco de referência (0).
A ferramenta lê a imagem visível, com todas as camadas juntas, e cria uma
seleção de bordas suaves.

## Escolher Intervalo tonal

Faça uma das seguintes ações:

- Digite "Intervalo tonal" na [busca de comandos](/pt-BR/docs/start/command-search/).
- Em Esboço, selecione **Selecionar** na barra de título, selecione de novo para abrir a gaveta e selecione **Intervalo tonal**.
- Pressione uma tecla que você atribuiu a **Intervalo tonal** em [Atalhos de teclado](/pt-BR/docs/input/keyboard/).
- Selecione **Intervalo tonal** em uma barra de ferramentas onde você o adicionou com **Inserir ferramentas…** (consulte [Barras de ferramentas e barra de título](/pt-BR/docs/customize/toolbars/)).

**Intervalo tonal** não tem tecla padrão nem botão nas barras de ferramentas de
Pintura e de Foto. Enquanto ele é a ferramenta atual, o painel Conjunto de
ferramentas lista todas as ferramentas de seleção.

![As configurações de Intervalo tonal na gaveta Selecionar de Esboço, com Modo, Tons, Suavidade e Difusão.](shot:selections/tonal-range-settings)

## Tons

Selecione um botão na linha **Tons · pontos de exposição relativos ao branco de referência**
para selecionar essa faixa de brilho. A faixa se combina com a seleção atual de
acordo com o **Modo** (consulte [Ferramentas de seleção](/pt-BR/docs/selections/tools/)).

A dica de cada botão indica a faixa dele:

- **Sombras · abaixo de −5 pontos de exposição**
- **Meias-sombras · de −5 a −3,5 pontos de exposição**
- **Meios-tons · de −3,5 a −1,5 pontos de exposição**
- **Meios-realces · de −1,5 a −0,5 ponto de exposição**
- **Realces · acima de −0,5 ponto de exposição**
- **HDR brilhante · acima de +1 ponto de exposição**, só em [desenhos HDR](/pt-BR/docs/color-management/hdr/)
- **Personalizado · defina ou amostre um intervalo em pontos de exposição**

Enquanto um botão de tom está selecionado, a seleção acompanha as mudanças em
**Suavidade**, **Difusão**, **De** e **Até**. Escolher outra ferramenta ou outro
**Modo** desmarca o botão de tom.

## Intervalo personalizado

Você pode definir a faixa manualmente ou amostrá-la na tela.

Faça uma das seguintes ações:

- Selecione **Personalizado · defina ou amostre um intervalo em pontos de exposição** e defina **De** e **Até**, em pontos de exposição. Os padrões são −3,5 e −1,5.
- Arraste sobre uma área da tela para usar o intervalo de brilho dessa área.
- Clique na tela para centralizar uma faixa no brilho desse ponto. A faixa mantém a largura atual de Personalizado, ou tem 1 ponto de exposição de largura quando outro tom estava selecionado.

Amostrar na tela muda o tom para Personalizado. No editor web, **De** e **Até**
compartilham um único controle de intervalo.

![As configurações de Intervalo tonal com Personalizado selecionado e o intervalo em pontos de exposição.](shot:selections/tonal-range-custom)

## Suavidade

Alarga a transição suave nas duas extremidades da faixa, de 0 a 200%. O padrão
é 100%.

## Difusão

Suaviza a borda da seleção em até 100 px.

## Modo e teclas pressionadas

**Intervalo tonal** tem os mesmos botões de **Modo** das outras ferramentas de
seleção e não tem **Suavização de serrilhado**. Mantenha **Shift**, **Alt** ou
**Shift+Alt** pressionada ao clicar ou arrastar para adicionar, subtrair ou fazer
a interseção.

## Máscara rápida e camadas de seleção

**Intervalo tonal** funciona na [Máscara rápida](/pt-BR/docs/selections/quick-mask/)
e enquanto você edita uma [camada de seleção](/pt-BR/docs/selections/selection-layers/),
e altera essa máscara. A barra de ações da tela dele é a
[barra de seleção](/pt-BR/docs/selections/working/), na borda inferior da tela.
