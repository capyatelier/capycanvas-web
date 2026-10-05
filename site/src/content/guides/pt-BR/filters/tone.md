---
title: "Filtros de tom"
description: "Configurações dos filtros da categoria Tom."
related: ["filters/adding", "filters/color", "filters/how-filters-apply"]
---

Os filtros de tom ficam em **Filtro > Tom** e na categoria **Tom** do painel
**Filtros**. Você muda as configurações deles no painel **Propriedades**.

![O painel Filtros mostrando a categoria Tom com uma prévia de cada filtro.](shot:filters/tone-list)

## Sombras/Realces

Clareia as áreas escuras com **Sombras** e escurece as áreas claras com
**Realces**, com base no brilho da área ao redor. Em 100%, cada um muda a
exposição em até 2 pontos.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Sombras** | 0–100% | 0% |
| **Realces** | 0–100% | 0% |

## Curvas

Altera os tons com uma curva para todos os canais na página **RGB** e uma para
cada canal nas páginas **Vermelho**, **Verde** e **Azul**. As curvas de canal
se aplicam antes da curva **RGB**.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| Páginas **RGB**, **Vermelho**, **Verde**, **Azul** | Uma curva cada | Linha reta |
| **Amostrar ponto**, **Ajuste direcionado** | Definem a curva a partir da imagem (consulte [Adicionar e editar filtros](/pt-BR/docs/filters/adding/)) | |
| **Espaço da curva** | **RGB codificado**, **HDR logarítmico**. Aparece só em um [desenho HDR](/pt-BR/docs/color-management/hdr/) ou quando está em **HDR logarítmico**. | **RGB codificado**, ou **HDR logarítmico** em um desenho HDR |
| **Intervalo HDR** | 0–15 EV, ou até 127 EV digitado. Aparece só com **HDR logarítmico**: o número de pontos de exposição acima do branco SDR que a curva alcança. | 4 EV |

| No gráfico | Como |
| --- | --- |
| Adicionar um ponto | Pressione um espaço vazio. Uma curva tem no máximo 32 pontos. |
| Mover um ponto | Arraste o ponto, ou selecione-o e pressione as teclas de seta. Com **Shift**, ele se move mais longe. Os pontos das extremidades só se movem para cima e para baixo. |
| Definir valores exatos | Selecione um ponto e digite em **Entrada** e **Saída** abaixo do gráfico. |
| Remover um ponto | Clique duas vezes no ponto, arraste-o para fora do gráfico, ou selecione-o e pressione **Excluir** ou **Backspace**. |
| Recomeçar | Selecione **Redefinir curva**. |

## Níveis

Define o ponto preto, o ponto branco e os meios-tons da entrada e depois os
mapeia para o intervalo de **Saída**. As páginas **Vermelho**, **Verde** e
**Azul** se aplicam antes da página **RGB**.

![O painel Propriedades de Níveis com o histograma, Automático, Amostrar ponto e as configurações Entrada, Saída e Recorte.](shot:filters/levels-properties)

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Automático**, **Amostrar ponto** | Definem a entrada a partir da imagem (consulte [Adicionar e editar filtros](/pt-BR/docs/filters/adding/)) | |
| **Sombras**, **Realces** (abaixo do histograma) | Marcam as áreas cortadas na tela | |
| **Preto** (**Entrada**) | 0–1, qualquer valor digitado. Fica abaixo do **Branco** de entrada. | 0 |
| **Branco** (**Entrada**) | 0–1, qualquer valor digitado | 1 |
| **Meios-tons** | 0,1–10. Acima de 1 clareia. | 1 |
| **Preto** (**Saída**) | 0–1, qualquer valor digitado | 0 |
| **Branco** (**Saída**) | 0–1, qualquer valor digitado | 1 |
| **Limitar entrada** | Corta os tons fora do **Preto** e do **Branco** de entrada, em todas as páginas | Desligado |
| **Limitar saída** | Corta o resultado no intervalo de saída, em todas as páginas | Desligado |

## Brilho / Contraste

**Contraste** espalha ou comprime os tons em torno do cinza médio, e
**Brilho** depois clareia ou escurece todos os tons na mesma medida.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Brilho** | −100 a 100 | 0 |
| **Contraste** | −100 a 100. 50 dobra o contraste e −50 o reduz à metade. | 0 |

## Limiar

Deixa pretos os pixels mais escuros que o **Limiar** e brancos os demais.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Limiar** | 0–1, qualquer valor digitado | 0,5 |

## Exposição

Muda a exposição em pontos. **Deslocamento** levanta ou abaixa os pretos.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Exposição** | −10 a 10 EV, ou até ±126 EV digitado | 0 EV |
| **Deslocamento** | −0,5 a 0,5 | 0 |
| **Gama** | 0,1–10. Acima de 1 clareia os meios-tons. | 1 |

## Vinheta

Escurece a imagem fora de uma elipse com as proporções da tela, ou a clareia
quando **Intensidade** é negativa. Em ±100%, as bordas mudam em até 2 pontos de exposição.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Intensidade** | −100% a 100% | 40% |
| **Raio** | 10–150% da metade do tamanho da tela | 95% |
| **Suavidade** | 0–100% do raio, usado para a transição | 55% |
| **Centro X**, **Centro Y** (em **Posição**) | 0–100% da largura e da altura da tela | 50% |
