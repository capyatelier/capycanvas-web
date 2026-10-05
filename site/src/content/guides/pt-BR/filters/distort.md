---
title: "Filtros de distorção"
description: "Configurações dos filtros da categoria Distorcer."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Os filtros de distorção ficam em **Filtro > Distorcer** e na categoria
**Distorcer** do painel **Filtros**. Você muda as configurações deles no painel
**Propriedades**. Todos podem levar pintura para áreas transparentes de uma
camada.

![O painel Filtros mostrando a categoria Distorcer com uma prévia de cada filtro.](shot:filters/distort-list)

## Aberração cromática

Adiciona franjas de cor nas bordas deslocando o canal vermelho para um lado e o
canal azul para o outro, pela **Separação**, ao longo do **Ângulo**.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Separação** | 0–32 px | 3 px |
| **Ângulo** | −180° a 180° | 0° |

## Caleidoscópio

Espelha uma fatia da imagem no número de fatias definido em **Segmentos**, ao
redor do centro.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Segmentos** | 2–24 | 6 |
| **Ângulo** | −180° a 180° | 0° |
| **Centro X**, **Centro Y** (em **Posição**) | 0–100% da largura e da altura da tela | 50% |

## Redemoinho

Torce a imagem ao redor do centro conforme a **Torção**, até não haver torção
no **Raio**.

![O painel Propriedades de Redemoinho com Torção, Raio e as configurações de Posição.](shot:filters/swirl-properties)

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Torção** | −720° a 720° | 120° |
| **Raio** | 1–150% da metade do lado menor da tela | 70% |
| **Centro X**, **Centro Y** (em **Posição**) | 0–100% da largura e da altura da tela | 50% |

## Ondulação

Move a imagem em anéis ao redor do centro, em até o valor de **Amplitude**, com
os anéis separados pelo **Comprimento de onda**. Os anéis se deslocam para fora
com o tempo.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Amplitude** | 0–48 px | 12 px |
| **Comprimento de onda** | 8–256 px | 64 px |
| **Velocidade** | 0–4 | 0,5 |
| **Centro X**, **Centro Y** (em **Posição**) | 0–100% da largura e da altura da tela | 50% |
| **Animar** | Ligado ou desligado | Ligado |
| **Tempo congelado** | 0–3600 s | 0 s |

## Vidro

Distorce a imagem com um padrão de vidro fosco do **Tamanho da textura**, em
até o valor de **Distorção**. **Rugosidade** adiciona um padrão mais fino.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Distorção** | 0–48 px | 12 px |
| **Tamanho da textura** | 4–160 px | 24 px |
| **Rugosidade** | 0–100% | 35% |

## Vidro com chuva

Adiciona gotas de chuva que escorrem deixando rastros com o tempo e curvam a
imagem em até o valor de **Refração**. **Chuva** define a quantidade de gotas.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Refração** | 0–32 px | 8 px |
| **Tamanho da gota** | 12–120 px | 48 px |
| **Chuva** | 0–100% | 65% |
| **Velocidade** | 0–4 | 0,5 |
| **Animar** | Ligado ou desligado | Ligado |
| **Tempo congelado** | 0–3600 s | 0 s |

## Ondulação de calor

Faz a imagem tremular com o tempo, em até o valor de **Distorção** na parte de
baixo da tela e nada na parte de cima. **Detalhe** adiciona ondulações mais
finas.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Distorção** | 0–48 px | 8 px |
| **Tamanho da onda** | 10–240 px | 90 px |
| **Velocidade** | 0–4 | 0,6 |
| **Detalhe** | 0–100% | 50% |
| **Animar** | Ligado ou desligado | Ligado |
| **Tempo congelado** | 0–3600 s | 0 s |

## Deformação de domínio

Deforma a imagem com um padrão marmorizado do **Tamanho do padrão**, em até o
valor de **Distorção**. O padrão se desloca com o tempo.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Distorção** | 0–64 px | 24 px |
| **Tamanho do padrão** | 8–256 px | 96 px |
| **Velocidade** | 0–4 | 0,25 |
| **Animar** | Ligado ou desligado | Ligado |
| **Tempo congelado** | 0–3600 s | 0 s |

## Animação

**Ondulação**, **Vidro com chuva**, **Ondulação de calor** e
**Deformação de domínio** são animados, e as linhas deles no painel **Filtros**
têm a marca de animação. Com **Animar** ativado, o filtro roda continuamente na
**Velocidade** definida. Desative **Animar** para manter o filtro parado no
momento definido em **Tempo congelado**.

Uma imagem exportada mostra a animação no momento da exportação.
