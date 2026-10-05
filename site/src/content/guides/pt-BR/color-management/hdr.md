---
title: "HDR"
description: "Desenhos HDR, como eles aparecem na tela e sua versão SDR."
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

Você pode pintar cores mais claras que o branco SDR em um desenho HDR. Um desenho
em **HDR de 16 bits em ponto flutuante** ou **HDR de 32 bits em ponto flutuante**
é um desenho HDR.

## Desenhos HDR

Para ter um desenho HDR, faça uma das seguintes ações:

- Em **Arquivo > Novo…**, escolha a predefinição **Desenho HDR** ou uma **Profundidade de bits** em ponto flutuante.
- Escolha **Editar > Alterar profundidade de bits…** e uma profundidade em ponto flutuante.
- Abra um arquivo PNG HDR (BT.2020 PQ) ou AVIF HDR (HDR de 16 bits em ponto flutuante), ou um arquivo OpenEXR (HDR de 32 bits em ponto flutuante).
- Defina **Profundidade de bits** como uma profundidade em ponto flutuante na página **Cor** de [Preferências](/pt-BR/docs/preferences/) para que os novos desenhos sejam HDR.

Em um desenho HDR:

- O [painel Cor](/pt-BR/docs/color/color-panel/) e [Editar cor](/pt-BR/docs/color/edit-color/) definem a intensidade da tinta em EV.
- A [Mesclagem](/pt-BR/docs/color-management/color-spaces/) é sempre Luz linear.
- Sobreposição, Luz suave, Luz intensa, Superexposição de cor, Subexposição de cor, Luz vívida, Mistura sólida e Exclusão não são oferecidos como [modos de mesclagem](/pt-BR/docs/layers/blend-modes/).
- Curvas tem um domínio **HDR logarítmico** e um **Intervalo HDR**.
- A ferramenta [Intervalo tonal](/pt-BR/docs/selections/tonal-range/) oferece **HDR brilhante · acima de +1 ponto de exposição**.
- O Histograma marca o branco SDR.
- A [exportação](/pt-BR/docs/files/export/) oferece formatos HDR.

No editor web, não é possível abrir um desenho HDR com mais de 12 megapixels.

## HDR na tela

Em uma tela capaz de mostrar HDR, a tela de desenho e o Navegador mostram um
desenho HDR em HDR enquanto **Desligado** está selecionado no painel
[Prova](/pt-BR/docs/color-management/proof/) e o aviso de gama está desativado.
Caso contrário, eles mostram a versão SDR do desenho, assim como os controles de
cor. No editor web, o HDR precisa de um navegador que informe uma tela HDR.

Um indicador à esquerda do rodapé mostra qual versão você está vendo. Selecione-o
para ver os detalhes.

| Indicador | Aparece quando |
| --- | --- |
| "HDR" | O desenho é mostrado em HDR. |
| "Prévia SDR" | O desenho está no modo SDR em uma tela que mostra HDR. |
| "Mostrando SDR" | A tela não mostra HDR. |

## Versão SDR

Cada desenho HDR tem uma versão SDR salva. Ela é usada:

- em telas sem HDR e no modo SDR;
- nas miniaturas das camadas;
- na prova de impressão;
- nas exportações SDR e na base SDR das exportações JPEG HDR e AVIF HDR.

Você pode ajustar a versão SDR sem alterar os pixels HDR. Faça uma das seguintes
ações:

- Escolha **Exibir > Prova SDR** (exceto no Windows).
- Escolha **Prova SDR** na busca de comandos.
- Selecione **SDR** no alto do painel Prova.

![A página SDR do painel Prova, com o seletor circular de equilíbrio, contraste, brilho e intensidade da cor.](shot:color-management/proof-panel-sdr)

O seletor circular do painel define quatro valores. O centro dele mostra uma
ilustração fixa, não o desenho. Clique ou toque duas vezes em uma parte do
seletor para redefinir os valores dela, ou selecione **Redefinir aparência SDR**
no canto superior direito para redefinir os quatro. Com o foco no seletor, as
teclas de seta alteram um valor passo a passo, e **Shift** dá passos maiores.
**Escape** cancela um arrasto. Cada arrasto é um passo de desfazer e é salvo com
o desenho.

### Equilíbrio

Arraste o centro do seletor para a esquerda ou para a direita, de −100% a +100%.
A esquerda favorece as formas amplas, e a direita, a textura fina.

### Contraste

Arraste o centro do seletor para baixo ou para cima, de 50% a 200%.

### Brilho

Arraste o arco de cima, de −50% a +50%.

### Intensidade da cor

Arraste o arco de baixo, do branco em 0% à cor plena em 100%. O padrão é 30%.

## Prévia SDR

Você pode alternar entre o HDR e a versão SDR sem abrir o painel Prova. Escolha
**Prévia SDR** na busca de comandos ou atribua uma tecla a esse comando na página
[Atalhos de teclado](/pt-BR/docs/input/keyboard/).

**Prévia SDR** só funciona com um desenho HDR em uma tela que mostra HDR, com a
prova de impressão e o aviso de gama desativados.
