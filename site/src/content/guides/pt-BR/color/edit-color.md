---
title: "Editar cor"
description: "Como definir uma cor pelos valores, pelo código hex ou por texto de cor na caixa de diálogo Editar cor."
related: ["color/color-panel", "color/palettes", "color/eyedropper"]
---

Você pode definir uma cor pelos valores na caixa de diálogo **Editar cor**. Nada
muda até você selecionar **Usar cor**.

![A caixa de diálogo Editar cor com o círculo de cores à esquerda, Atual e Nova com o código hex no canto superior direito, três linhas de valores e as cores recentes no rodapé.](shot:color/edit-color "1 Círculo e formas · 2 Atual e Nova · 3 Capturar da tela · 4 Hex · 5 Linhas de valores · 6 Cores recentes")

## Abrir Editar cor

Faça uma das seguintes ações:

- Selecione **Editar cor…** (o lápis) no canto superior direito do [painel Cor](/pt-BR/docs/color/color-panel/).
- Clique duas vezes na amostra de primeiro plano ou de fundo no painel Cor.
- Selecione um botão de cor em Propriedades, como **Cor** de uma camada de preenchimento Cor sólida ou **Cor da tonalidade** de Preto e branco.
- Selecione a miniatura de uma camada de preenchimento Cor sólida no painel Camadas.
- Selecione a **Cor** de um ponto de cor no editor de degradê.
- Selecione **Cor do pincel** em um painel que o mostre. Você pode adicioná-lo aos painéis Pincéis e Tamanho do pincel ([Painéis e colunas](/pt-BR/docs/customize/panels/)).
- No Windows, no Linux e no Android, clique com o botão direito ou mantenha pressionada a amostra de primeiro plano ou de fundo e escolha **Editar cor…**.

## Círculo e formas

O círculo de cores funciona como no painel Cor. Selecione **OKLCH**, **HSB** ou
**HLS** abaixo do círculo para mudar o campo para um círculo, um quadrado ou um
triângulo.

## Atual e Nova

**Nova** mostra a cor que você está criando. Selecione **Atual** para voltar
**Nova** à cor com que você começou.

## Hex

O campo hex mostra Nova como `#RRGGBB` em sRGB. Selecione-o para digitar um código
hex ou outro [texto de cor](#colar-cores).

Um selo à esquerda do código hex indica estes casos:

- "≈": a cor está fora do sRGB, e o hex mostra a cor sRGB mais próxima.
- "Base": em um desenho HDR, o hex mostra a cor antes da intensidade.
- "sRGB": o espaço de cores do desenho não é sRGB.

## Linhas de valores

Cada linha mostra Nova em um formato. Selecione o nome do formato no início de uma
linha para escolher outro formato. A caixa de diálogo lembra os formatos que você
escolhe.

| Linha | Formatos |
| --- | --- |
| 1 | **RGB** (0–255, padrão), **RGB 0–1**, **RGB linear** (0–1). Os valores estão no espaço de cores do desenho, indicado em um selo na linha. |
| 2 | **HSB** (padrão), **HSL** |
| 3 | **OKLCH** (padrão), **OKLab** |

![As linhas de valores com o menu de formatos da primeira linha aberto.](shot:color/edit-color-formats)

## Editar valores

- Selecione um valor para digitar um número. Pressione **Enter** para confirmar ou **Escape** para cancelar.
- Arraste um valor para cima ou para baixo para alterá-lo. Mantenha **Shift** pressionada para passos maiores, ou **Alt** ou **Ctrl** para passos menores.
- Pressione **Up Arrow** ou **Down Arrow** sobre um valor para alterá-lo em um passo.

Um valor além do intervalo de um campo é ajustado ao limite mais próximo. O matiz
dá a volta em 360°. Se você digitar um texto que não é número nem cor, o campo
continua aberto com um erro. **Usar cor** fica indisponível até você corrigir o
valor ou pressionar **Escape**.

## Copiar cores

Selecione o botão de copiar no fim do campo hex ou de uma linha para copiar esse
valor como texto. Uma marca de seleção no botão confirma a cópia. Pressione
**Ctrl+C** na caixa de diálogo, fora de um campo de texto, para copiar o código hex.

| Formato | Texto copiado em desenhos sRGB | Em outros espaços de cores |
| --- | --- | --- |
| Hex | `#RRGGBB` | `#RRGGBB` |
| RGB | `rgb(R G B)` | `color(display-p3 r g b)`, `color(a98-rgb r g b)` ou `color(prophoto-rgb r g b)`, de 0 a 1 |
| RGB 0–1 | `color(srgb r g b)` | como em RGB |
| RGB linear | `color(srgb-linear r g b)` | `r g b` |
| HSB, HSL | `hsb(h s% b%)`, `hsl(h s% l%)` | `h° s% b%`, `h° s% l%` |
| OKLCH, OKLab | `oklch(L% C h)`, `oklab(L% a b)` | o mesmo |

## Colar cores

Pressione **Ctrl+V** na caixa de diálogo, fora de um campo de texto, para definir
Nova a partir de um texto de cor. O campo hex e os campos de valor aceitam o mesmo
texto:

- códigos hex com 3, 4, 6 ou 8 dígitos, com `#`, `0x` ou sem prefixo (os dígitos de alfa são ignorados);
- nomes de cores CSS, como `teal`;
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `hsb()`, `hsv()`, `oklch()` e `oklab()`;
- `color()` com `srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb` ou `srgb-linear`;
- três números. Uma linha de valores os lê no próprio formato. Nos outros campos, eles são RGB de 0 a 255, ou RGB de 0 a 1 quando os três são 1 ou menos e um deles tem ponto decimal.

O texto de cor nunca altera o alfa da cor.

## Capturar da tela

Selecione **Capturar da tela** (o conta-gotas ao lado de Atual e Nova) para tirar
a cor Nova do desenho. A caixa de diálogo se oculta, e uma faixa em um canto da
tela mostra Atual, a cor capturada e os valores dela.

Clique, ou levante a caneta ou o dedo, para capturar. A caixa de diálogo volta com
a cor capturada como Nova. Pressione **Escape** ou selecione a faixa para voltar
sem alterações.

Com o dedo, o ponto de captura fica acima da ponta do dedo. **Capturar da tela**
fica oculto quando Editar cor é aberto a partir de outra caixa de diálogo.

## Cores recentes e paletas

O rodapé mostra suas cores recentes. Selecione uma para torná-la Nova.

Selecione **Cores recentes e todas as paletas** (a seta depois das cores recentes)
para abrir uma folha com suas cores recentes e todas as
[paletas](/pt-BR/docs/color/palettes/). Digite no campo de busca para encontrar
nomes de paletas, nomes de cores ou códigos hex. O **+** no fim de uma paleta salva
Nova nessa paleta. Para fechar a folha, selecione **Fechar amostras** ou pressione
**Escape**.

![A folha de amostras com o campo de busca, Cores recentes e as paletas.](shot:color/edit-color-swatches)

## Intensidade HDR

Em um [desenho HDR](/pt-BR/docs/color-management/hdr/), a linha **Intensidade (EV)**
e o arco abaixo do círculo de cores definem o brilho em pontos de exposição em
relação ao branco SDR. No arco, e quando você arrasta o valor, o intervalo vai
de −2 a +6 EV. Um valor digitado pode ir além, dentro do intervalo da
profundidade de bits do desenho.

## Usar cor e Cancelar

Selecione **Usar cor** para aplicar Nova. Selecione **Cancelar** ou pressione
**Escape** para fechar sem alterações. Se um menu de formatos ou a folha de
amostras estiver aberto, **Escape** fecha esse item primeiro.
