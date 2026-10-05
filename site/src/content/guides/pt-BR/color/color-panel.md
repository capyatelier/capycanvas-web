---
title: "Painel Cor"
description: "Como escolher a cor da tinta com o círculo de cores e as amostras do painel Cor."
related: ["color/edit-color", "color/palettes", "color/eyedropper", "color-management/hdr"]
---

Você pode escolher a cor da tinta no painel **Cor**. Todas as áreas de trabalho
usam a mesma cor de tinta.

![O painel Cor com o círculo de cores, a leitura no canto superior esquerdo e as amostras abaixo do círculo.](shot:color/panel "1 Leitura · 2 Botões de forma · 3 Editar cor · 4 Primeiro plano e fundo · 5 Trocar · 6 Pintura transparente · 7 Preto e branco")

## Abrir o painel Cor

Faça uma das seguintes ações:

- Escolha **Janela > Cor**.
- Escolha **Painel Cor** na busca de comandos.
- Em Pintura, selecione a aba **Cor** na coluna esquerda.
- Selecione **Cor do pincel** no fim da barra de ferramentas Ferramentas ou, em Esboço, na extremidade direita da barra de título. Abre uma gaveta com os painéis Cor e Paletas.

## Círculo de cores

Arraste o anel externo para definir o matiz, e o campo dentro dele para definir a
saturação e o brilho.

No círculo, arraste além da borda do campo perto do canto superior esquerdo, do
canto superior direito ou da parte de baixo para ir direto ao branco, à cor pura
ou ao preto. Um cinza mantém o último matiz definido no anel.

## Formas do campo

Selecione um dos dois botões pequenos fora do anel, no canto superior direito,
para mudar a forma do campo. As dicas de ferramenta deles dizem **Usar círculo
Okhsv**, **Usar quadrado HSV** e **Usar triângulo HLS**.

| Forma | Campo | Leitura |
| --- | --- | --- |
| Círculo (padrão) | Okhsv. Branco no canto superior esquerdo, a cor pura no canto superior direito, preto embaixo. | OKLCH |
| Quadrado | HSV. A saturação aumenta para a direita e o brilho para cima. | HSB |
| Triângulo | HLS. Os cantos são branco, preto e o matiz puro. | HLS |

## Leitura

Os números no canto superior esquerdo do painel mostram a cor no modelo da forma
do campo. Selecione a leitura para alternar entre esse modelo e RGB de 0 a 255.

## Cores de primeiro plano e de fundo

Selecione **Cor de primeiro plano** (a amostra grande no canto inferior esquerdo)
ou **Cor de fundo** (a amostra atrás dela) para pintar com essa cor. A busca de
comandos usa os mesmos nomes. A amostra selecionada tem uma borda mais grossa.

Os pincéis de cerdas riscam cada traço com a cor com que você não está pintando.

> **Observação:** Na [Máscara rápida](/pt-BR/docs/selections/quick-mask/) e em uma [camada de seleção](/pt-BR/docs/selections/selection-layers/), as amostras guardam um par separado, de início preto e branco, e a tinta usa o valor de cinza da cor. As cores da arte voltam quando você sai. Em uma máscara de camada, a cor não importa: os pincéis revelam e a Borracha oculta.

## Pintura transparente

Você pode apagar com qualquer pincel ou forma da ferramenta Forma pintando com
tinta transparente. Faça uma das seguintes ações:

- Selecione **Pintura transparente** (a amostra quadriculada no canto inferior direito).
- Escolha **Pintura transparente** na busca de comandos.
- Atribua uma tecla a **Pintar com transparência** na página [Atalhos de teclado](/pt-BR/docs/input/keyboard/) e pressione-a para ativar ou desativar a pintura transparente. **Pintar com transparência enquanto pressionado** usa a pintura transparente só enquanto você mantém a tecla pressionada.

Arrastar no círculo de cores volta a pintar com a cor.

## Trocar as cores

Você pode trocar entre si as cores de primeiro plano e de fundo. Faça uma das
seguintes ações:

- Selecione **Trocar primeiro plano e fundo** (as duas setas à direita da amostra de fundo).
- Escolha **Trocar primeiro plano e fundo** na busca de comandos.
- Pressione **X** nos mapas de atalhos Estilo Photoshop, Estilo Krita, Estilo Clip Studio Paint e Estilo GIMP, ou **Shift+X** no Estilo Affinity.

A mesma amostra continua selecionada. O mapa de atalhos CapyCanvas não tem tecla
para **Trocar cores**.

## Preto e branco

Selecione **Pintar com preto** ou **Pintar com branco** (os dois círculos pequenos
ao lado da amostra transparente) ou escolha **Preto** ou **Branco** na busca de
comandos.

Preto ou branco substitui a cor da amostra de primeiro plano ou de fundo
selecionada. Se **Pintura transparente** estiver selecionada, preto ou branco vira
uma cor de tinta temporária. Nesse caso, o círculo de cores edita a cor
temporária, e as cores de primeiro plano e de fundo não mudam.

## Editar cor

Selecione **Editar cor…** (o lápis no canto superior direito do painel) ou clique
duas vezes na amostra de primeiro plano ou de fundo para definir a cor pelos
valores em [Editar cor](/pt-BR/docs/color/edit-color/). **Editar cor…** fica
indisponível enquanto **Pintura transparente** está selecionada.

## Menu da amostra

No Windows, no Linux e no Android, clique com o botão direito ou mantenha
pressionada a amostra de primeiro plano ou de fundo para ver **Editar cor…**,
**Paletas…** e **Trocar primeiro plano e fundo**.

## Intensidade HDR

Em um [desenho HDR](/pt-BR/docs/color-management/hdr/), um arco abaixo do círculo
de cores define a intensidade da tinta em pontos de exposição (EV) em relação ao
branco SDR, de −2 a +6 EV. O valor aparece abaixo das amostras, por exemplo
"+2.00 EV".

![O painel Cor em um desenho HDR, com o arco de intensidade abaixo do círculo de cores.](shot:color/panel-hdr)

- Arraste ao longo do arco para definir a intensidade.
- Clique duas vezes no arco para voltar a 0 EV.
- Com o foco no arco, pressione as teclas de seta para avançar de 0,1 em 0,1 EV, ou **Home** para 0 EV.

O círculo de cores define a cor base, e a intensidade a multiplica em luz linear.
As amostras e o arco mostram uma prévia das cores pela versão SDR do desenho. O
arco fica indisponível enquanto **Pintura transparente** está selecionada.
