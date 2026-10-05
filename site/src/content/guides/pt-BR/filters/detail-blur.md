---
title: "Filtros de detalhe e desfoque"
description: "Configurações dos filtros das categorias Detalhe e Desfoque."
related: ["filters/adding", "filters/artistic-texture", "filters/how-filters-apply"]
---

Estes filtros ficam em **Filtro > Detalhe** e **Filtro > Desfoque**, e nas
categorias **Detalhe** e **Desfoque** do painel **Filtros**. Você muda as
configurações deles no painel **Propriedades**.

![O painel Filtros mostrando as categorias Detalhe e Desfoque com uma prévia de cada filtro.](shot:filters/detail-blur-list)

## Claridade

Aumenta o contraste local com uma **Intensidade** positiva, ou o reduz com uma
negativa, em até 2 pontos de exposição.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Intensidade** | −100% a 100% | 0% |

## Desembaçar

Uma **Intensidade** positiva remove a névoa, e uma negativa a acrescenta. As
áreas quase brancas e quase cinza ficam protegidas quando a névoa é removida.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Intensidade** | −100% a 100% | 0% |

## Máscara de nitidez

Aumenta a nitidez das bordas conforme a **Quantidade**. Diferenças menores que
o **Limiar** ficam inalteradas.

![O painel Propriedades de Máscara de nitidez com Raio, Quantidade e Limiar.](shot:filters/unsharp-mask-properties)

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Raio** | 0–21 px, ou até 85 px digitado | 1,5 px |
| **Quantidade** | 0–300% | 100% |
| **Limiar** | 0–100% | 2% |

## Passa-alta

Mantém só os detalhes mais finos que o **Raio**, sobre uma base cinza 50%.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Raio** | 0–21 px, ou até 85 px digitado | 4 px |
| **Intensidade** | 0–300% | 100% |

## Suavização com preservação de bordas

Suaviza o ruído e mantém as bordas nítidas. Uma **Intensidade** maior suaviza
diferenças de cor maiores.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Intensidade** | 0–100% | 25% |

## Detectar bordas

Mostra as bordas da imagem como linhas brancas sobre preto, ou como linhas
escuras sobre branco com **Inverter** ligado.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Largura** | 0,5–8 px | 1 px |
| **Intensidade** | 0–400% | 100% |
| **Inverter** | Ligado ou desligado | Desligado |

## Relevo

Transforma a imagem em um relevo cinza. **Ângulo** define a direção do relevo.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Largura** | 0,5–8 px | 1,5 px |
| **Ângulo** | −180° a 180° | 135° |
| **Profundidade** | 0–400% | 100% |

## Desfoque gaussiano

Desfoca a imagem por igual. As bordas junto a áreas transparentes se desfocam
para fora.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Raio** | 0–21 px, ou até 85 px digitado | 3 px |

## Desfoque de movimento

Desfoca ao longo de uma linha reta com o comprimento de **Distância**, na direção
do **Ângulo**.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Distância** | 0–64 px | 12 px |
| **Ângulo** | −180° a 180° | 0° |

## Brilho difuso

Adiciona um brilho ao redor dos tons mais claros que o **Limiar**. O brilho pode
se espalhar para áreas transparentes.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Raio** | 0–21 px, ou até 85 px digitado | 6 px |
| **Intensidade** | 0–200% | 60% |
| **Limiar** | 0–100% | 60% |

## Foco suave

Suaviza a imagem sobrepondo a ela um desfoque do tamanho do **Raio** no modo de
mesclagem Clarear, com a opacidade definida por **Intensidade**.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Raio** | 0–21 px, ou até 85 px digitado | 5 px |
| **Intensidade** | 0–100% | 40% |
