---
title: "Caneta"
description: "As configurações da caneta nas Preferências e o toque duplo e o aperto do Apple Pencil."
related: ["input/touch", "input/keyboard", "preferences", "brushes/basics"]
---

As configurações da caneta ficam na página **Caneta e entrada** de **Editar >
Preferências**.

![A página Caneta e entrada das Preferências.](shot:pen/pen-and-input)

## Resposta à pressão

Você pode alterar como a caneta responde à pressão leve com **Resposta à pressão**,
em **Resposta da caneta**. Valores menores tornam a pressão leve mais forte, e
valores maiores exigem mais força. O intervalo vai de 0,25 × a 4,00 ×. No padrão,
1,00 ×, a pressão da caneta é usada sem alteração.

A configuração vale para todos os pincéis e ferramentas, incluindo **Pintar
seleção** e **Máscara rápida**. Os traços já desenhados não mudam.

## Previsão de traços

A previsão de traços desenha um pequeno trecho do traço à frente da ponta da
caneta, e o traço real o substitui enquanto você desenha. As configurações ficam em
**Resposta da caneta**:

- **Ativar previsão de traços** ativa ou desativa os dois tipos de previsão.
- **Usar previsão de traços do *sistema***, por exemplo **Usar previsão de traços do Windows**, usa a previsão do sistema ou do navegador.
- **Quantidade de previsão** define até onde o próprio {appName} prevê, de 0 a 64 ms.

As duas opções vêm ativadas por padrão, e **Quantidade de previsão** fica em 16 ms.
Com **Ativar previsão de traços** desativado, as outras duas configurações ficam
indisponíveis.

| Sistema | Previsão do sistema |
| --- | --- |
| iPad | Disponível |
| Windows | Disponível quando o Windows a oferece |
| Android | Android 14 ou posterior, com uma caneta compatível com o sistema |
| Web | Nos navegadores que a oferecem |
| macOS, Linux | Nunca disponível |

Onde a previsão do sistema não está disponível, a opção dela fica indisponível e
**Quantidade de previsão** define a previsão. Enquanto a previsão do sistema está
em uso, **Quantidade de previsão** fica indisponível (oculta no iPad).

O cursor segue a caneta, não o traço previsto.

![As configurações de Resposta da caneta.](shot:pen/prediction)

## Forma do cursor

Você pode escolher o ponteiro mostrado sobre a tela com **Forma do cursor**, em
**Ponteiro**.

| Opção | Mostra |
| --- | --- |
| **Tamanho do pincel** | O contorno da ponta do pincel, com o tamanho, a forma e a rotação dela (o padrão) |
| **Cruz**, **Triângulo** | Uma cruz ou um pequeno triângulo |
| **Ponto** | Uma cruz minúscula |
| **Ponto de um pixel** | Um pixel da tela |
| **Mira** | Uma cruz com um ponto no centro |
| **Ferramenta** | O ícone da ferramenta, com o ponto de ação no ponteiro |
| **Ferramenta e tamanho do pincel**, **Tamanho do pincel e cruz**, **Tamanho do pincel e ponto**, **Tamanho do pincel e ponto de um pixel** | O contorno do pincel junto com a outra marca |
| **Nenhum** | Nada, para uma caneta em uma tela. Um mouse, um trackpad ou uma mesa digitalizadora sem tela mostram **Mira**. |

A forma vale para as ferramentas de pintura e para **Pintar seleção**. As outras
ferramentas mostram o próprio ícone quando a forma inclui **Ferramenta** e, caso
contrário, uma cruz.

![A lista Forma do cursor.](shot:pen/cursor-shapes)

## Ocultar cursor ao pintar

Com **Ocultar cursor ao pintar** ativado (o padrão), o cursor desaparece enquanto
a caneta toca a tela ou o botão do mouse está pressionado com uma ferramenta de
pintura. O contorno do pincel continua visível enquanto você apaga.

## Ponta de borracha

Você pode escolher o que a ponta de borracha da caneta faz. O grupo **Ponta de
borracha** não aparece no iPad.

- **Ferramenta**: **Ferramenta atual** (o padrão) mantém a ferramenta que você está usando. **Borracha**, **Caneta**, **Lápis**, **Pincel de pintura**, **Aerógrafo** e **Misturar** passam para essa ferramenta enquanto você usa a ponta de borracha, e a ferramenta anterior volta depois.
- **Pintar com transparência**: quando ativado (o padrão), a ponta de borracha apaga com o pincel da ferramenta. Quando desativado, a ponta de borracha pinta. Essa opção fica oculta enquanto **Ferramenta** é **Borracha**.

## Botões da caneta

Você pode dar uma ação a cada botão lateral da caneta, e uma ação diferente para
cada tipo de ferramenta.

Para configurar um botão da caneta:

1. Selecione o botão em **Botões da caneta**.
2. Selecione **Ação**, ou desative **Igual para todas as ferramentas** e selecione um tipo de ferramenta, como **Ferramentas de Desenho**.
3. Escolha uma ação. **Nada** limpa o botão.

Ferramentas, pincéis e modos, como **Deslocar** ou **Amostrar cor**, permanecem
ativos enquanto você mantém o botão pressionado. As outras ações são executadas uma
vez. Pressionar o botão durante um traço só tem efeito depois do traço.

Todos os botões começam como **Nada**. Um botão definido como **Nada** mantém a
ação que o driver da mesa digitalizadora ou o sistema dá a ele.

| Sistema | Botões listados |
| --- | --- |
| Linux | **Botão lateral inferior**, **Botão lateral superior**, **Terceiro botão lateral** |
| Windows | **Botão lateral inferior** |
| macOS, Android, web | **Botão lateral inferior**, **Botão lateral superior** |
| iPad | Nenhum |

No Linux e no Android, os botões do painel de uma mesa digitalizadora são
configurados como teclas na página [Atalhos de teclado](/pt-BR/docs/input/keyboard/).

![A página do Botão lateral inferior, com uma ação para cada tipo de ferramenta.](shot:pen/pen-button-page)

## Toque duplo e aperto do Apple Pencil

No iPad, o toque duplo no Apple Pencil e o aperto do Apple Pencil Pro seguem a
configuração do próprio iPad em **Ajustes > Apple Pencil**.

- "Alternar entre a ferramenta atual e a borracha" passa para a **Borracha** e volta.
- "Alternar entre a ferramenta atual e a última usada" passa para a ferramenta escolhida antes.

As outras opções não fazem nada no {appName}. O aperto age quando você solta.
Quando o Apple Pencil paira sobre a tela, o cursor aparece.
