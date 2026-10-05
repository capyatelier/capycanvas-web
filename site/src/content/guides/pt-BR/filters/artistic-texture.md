---
title: "Filtros artísticos e de textura"
description: "Configurações dos filtros das categorias Artístico e Textura."
related: ["filters/adding", "filters/distort", "filters/how-filters-apply"]
---

Estes filtros ficam em **Filtro > Artístico** e **Filtro > Textura**, e nas
categorias **Artístico** e **Textura** do painel **Filtros**. Você muda as
configurações deles no painel **Propriedades**.

![O painel Filtros mostrando a categoria Artístico com uma prévia de cada filtro.](shot:filters/artistic-list)

## Posterizar

Reduz cada canal de cor ao número de valores igualmente espaçados definido em
**Níveis**.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Níveis** | 2–256 | 6 |

## Meio-tom

Redesenha a imagem como pontos redondos de **Tinta** sobre **Papel**, cada um
com o tamanho dado pelo escuro sob ele. **Contraste** aumenta a diferença entre
os pontos pequenos e os grandes.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Espaçamento dos pontos** | 3–48 px | 9 px |
| **Ângulo** | −180° a 180° | 15° |
| **Contraste** | 0–100% | 30% |
| **Tinta** | Qualquer cor | #0D1217 |
| **Papel** | Qualquer cor | #F5F0DE |

## Hachura cruzada

Transforma a imagem em hachuras de **Tinta** sobre **Papel**. As áreas mais
escuras recebem mais direções de linha, até quatro.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Espaçamento** | 3–32 px | 8 px |
| **Largura da linha** | 0,25–4 px | 1 px |
| **Ângulo** | −180° a 180° | 0° |
| **Tinta** | Qualquer cor | #121417 |
| **Papel** | Qualquer cor | #F7F2E8 |

## Mosaico de pixels

Divide a imagem em quadrados do **Tamanho da célula**, cada um preenchido com a
cor do centro dele.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Tamanho da célula** | 1–96 px | 12 px |

## Efeito de pintura

Dá à imagem um aspecto de pintura a óleo achatando os detalhes dentro do
**Raio** em manchas de cor uniforme, mantendo as bordas. **Intensidade** mistura
o resultado com o original.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Raio** | 1–16 px | 5 px |
| **Intensidade** | 0–100% | 100% |

## Lápis

Desenha as bordas da imagem como linhas de **Tinta** sobre **Papel**.
**Contraste** escurece as linhas.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Raio** | 0–21 px, ou até 85 px digitado | 2 px |
| **Contraste** | 0–100% | 40% |
| **Tinta** | Qualquer cor | #120F0D |
| **Papel** | Qualquer cor | #F7F2E6 |

## Grão de filme

Adiciona um grão que muda com o tempo e é mais forte nos meios-tons.
**Grão colorido** dá a cada canal de cor um grão próprio.

![O painel Filtros mostrando a categoria Textura com uma prévia de cada filtro.](shot:filters/texture-list)

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Quantidade** | 0–100% | 18% |
| **Tamanho** | 0,5–8 px | 1 px |
| **Grão colorido** | Ligado ou desligado | Desligado |
| **Velocidade** | 0–4 | 1 |
| **Animar** | Ligado ou desligado | Ligado |
| **Tempo congelado** | 0–3600 s | 0 s |

## VHS

Dá à imagem um aspecto de fita de vídeo, com linhas que tremem para os lados até
o valor de **Rastreamento**, franjas vermelhas e azuis, linhas de varredura e
ruído. O tremor e o ruído mudam com o tempo.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Rastreamento** | 0–32 px | 5 px |
| **Ruído** | 0–100% | 12% |
| **Linhas de varredura** | 0–100% | 20% |
| **Velocidade** | 0–4 | 1 |
| **Animar** | Ligado ou desligado | Ligado |
| **Tempo congelado** | 0–3600 s | 0 s |

## CRT

Dá à imagem o aspecto de uma tela de TV antiga: curva, com franjas vermelhas e
azuis, uma máscara de pixels RGB listrada, linhas de varredura e uma faixa de
brilho que rola com o tempo. As partes da imagem empurradas para fora da tela
curva ficam transparentes.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Curvatura** | 0–30% | 8% |
| **Linhas de varredura** | 0–100% | 35% |
| **Máscara de pixels** | 0–100% | 25% |
| **Separação** | 0–5 px | 1 px |
| **Animar** | Ligado ou desligado | Ligado |
| **Tempo congelado** | 0–3600 s | 0 s |

## Animação

**Grão de filme**, **VHS** e **CRT** são animados, e as linhas deles no painel
**Filtros** têm a marca de animação. Com **Animar** ativado, o filtro roda
continuamente na **Velocidade** definida (CRT não tem a configuração
**Velocidade**). Desative **Animar** para manter o filtro parado no momento
definido em **Tempo congelado**.

Uma imagem exportada mostra a animação no momento da exportação.
