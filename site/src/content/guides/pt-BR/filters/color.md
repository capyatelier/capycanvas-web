---
title: "Filtros de cor"
description: "Configurações dos filtros da categoria Cor."
related: ["filters/adding", "filters/tone", "filters/how-filters-apply"]
---

Os filtros de cor ficam em **Filtro > Cor** e na categoria **Cor** do painel
**Filtros**. Você muda as configurações deles no painel **Propriedades**.

![O painel Filtros mostrando a categoria Cor com uma prévia de cada filtro.](shot:filters/color-list)

## Matiz / Saturação

Desloca o matiz, a saturação e a luminosidade da imagem inteira na página
**Principal**, ou de uma faixa de cores nas páginas de **Vermelhos** a
**Magentas**. **Colorir** dá a todos os pixels um único matiz e uma única
saturação e mantém a luminosidade deles.

![O painel Propriedades de Matiz / Saturação na página Vermelhos.](shot:filters/hue-saturation-properties)

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Matiz** | −180° a 180°, ou 0–360° com **Colorir** | 0° |
| **Saturação** | −100% a 100%, ou 0–100% com **Colorir** | 0%, ou 25% com **Colorir** |
| **Luminosidade** | −100% a 100% | 0% |
| **Centro** | Matiz Oklab de 0–360°. Só nas páginas de cor. | Vermelhos 30°, Amarelos 110°, Verdes 145°, Cianos 195°, Azuis 265°, Magentas 330° |
| **Largura** | 0–180°. Só nas páginas de cor. | 30° |
| **Difusão** | 0–90°. Só nas páginas de cor. | 30° |
| **Colorir** | Ligado ou desligado. Enquanto está ligado, só resta a página **Principal**. | Desligado |

## Inverter

Inverte todos os canais de cor. Não tem configurações.

## Dessaturar

Substitui cada cor por um cinza com a mesma luminosidade HSL. Não tem
configurações.

## Filtro fotográfico

Tinge a imagem na direção de **Cor** conforme a **Densidade**.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Cor** | Qualquer cor | #FFB873 |
| **Densidade** | 0–100% | 25% |
| **Preservar luminosidade** | Ligado ou desligado | Ligado |

## Cor seletiva

Altera o ciano, o magenta, o amarelo e o preto em uma faixa de cores por
página. As páginas de **Vermelhos** a **Magentas** atuam nas cores saturadas, e
**Brancos**, **Neutros** e **Pretos** atuam nos tons próximos do cinza.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Ciano** | −100% a 100% | 0% |
| **Magenta** | −100% a 100% | 0% |
| **Amarelo** | −100% a 100% | 0% |
| **Preto** | −100% a 100% | 0% |
| **Método** | **Relativo** escala cada mudança pela tinta que já existe na cor. **Absoluto** adiciona a mudança como ela é. Vale para todas as páginas. | **Relativo** |

## Misturador de canais

Monta cada canal de saída nas páginas **Vermelho**, **Verde** e **Azul** com
uma mistura dos canais de entrada vermelho, verde e azul, mais **Constante**.
Com **Monocromático** ligado, só resta a página **Cinza**, e a mistura dela gera
uma imagem em cinza.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Vermelho** | −200% a 200% | 100% na página **Vermelho**, 21,26% em **Cinza**, 0% nas demais |
| **Verde** | −200% a 200% | 100% na página **Verde**, 71,52% em **Cinza**, 0% nas demais |
| **Azul** | −200% a 200% | 100% na página **Azul**, 7,22% em **Cinza**, 0% nas demais |
| **Constante** | −100% a 100% | 0% |
| **Monocromático** | Ligado ou desligado | Desligado |

## Consulta de cores (LUT)

Aplica às cores uma tabela de consulta escolhida no menu de estilos (ele mostra
o estilo atual, como **Quente**), misturada com o original conforme a
**Intensidade**. Para usar uma LUT própria, selecione **Importar LUT…** ao lado
do menu de estilos e abra um arquivo 3D `.cube` de até 16 MB.

![O painel Propriedades de Consulta de cores (LUT) com o menu de estilos e Importar LUT….](shot:filters/color-lookup)

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| Menu de estilos | **Original** (sem mudança), **Quente**, **Frio**, **Monocromático** ou uma LUT importada, pelo título dela. As LUTs importadas ficam salvas no desenho. | **Original** |
| **Espaço de cor da LUT** | **sRGB**, **Display P3**, **Adobe RGB (1998)**, **ProPhoto RGB**: o espaço de cores que uma LUT importada espera. Fica oculto em **Original** e nos estilos incluídos. | **sRGB** |
| **Intensidade** | 0–100% | 100% |

## Equilíbrio de cores

Desloca as cores separadamente nas páginas **Sombras**, **Meios-tons** e
**Realces**. Valores positivos vão na direção da segunda cor no rótulo de cada
controle deslizante.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Ciano — Vermelho** | −100 a 100 | 0 |
| **Magenta — Verde** | −100 a 100 | 0 |
| **Amarelo — Azul** | −100 a 100 | 0 |
| **Preservar luminosidade** | Ligado ou desligado, para todas as páginas | Ligado |

## Vibração

**Vibração** aumenta a saturação das cores apagadas mais do que a das cores
saturadas. **Saturação** muda todas as cores por igual.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Vibração** | −100% a 100% | 0% |
| **Saturação** | −100% a 100% | 0% |
| **Proteger tons de pele** | Ligado ou desligado. Limita uma **Vibração** positiva nos matizes laranja e de pele. | Ligado |

## Preto e branco

Converte a imagem para cinza, com um controle deslizante para o quanto cada
matiz fica claro. **Tonalidade** tinge o resultado com a **Cor da tonalidade**.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Vermelhos** | −100% a 200% | 40% |
| **Amarelos** | −100% a 200% | 60% |
| **Verdes** | −100% a 200% | 40% |
| **Cianos** | −100% a 200% | 60% |
| **Azuis** | −100% a 200% | 20% |
| **Magentas** | −100% a 200% | 80% |
| **Tonalidade** | Ligado ou desligado | Desligado |
| **Cor da tonalidade** | Qualquer cor | #BF874C |

## Mapa de degradê

Mapeia os tons da imagem em **Degradê**, do ponto de cor da esquerda para os tons
mais escuros ao ponto de cor da direita para os mais claros. **Quantidade** mistura o
resultado com o original.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Degradê** | Qualquer degradê, editado como na ferramenta [Degradê](/pt-BR/docs/drawing/gradient/) | Preto para branco, interpolação **Oklab** |
| **Quantidade** | 0–100% | 100% |

## Equilíbrio de branco

Esquenta ou esfria a imagem com **Temperatura** e a desloca para o magenta ou
para o verde com **Tonalidade**. **Escolher ponto neutro**, no topo do painel
**Propriedades**, define os dois valores para que um ponto clicado na tela fique
neutro.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Temperatura** | −100 a 100, ou até ±1000 digitado. Valores positivos são mais quentes. | 0 |
| **Tonalidade** | −100 a 100, ou até ±800 digitado. Valores positivos são mais magenta. | 0 |
| **Preservar luminosidade** | Ligado ou desligado | Ligado |

## Tonalização dividida

Tinge as sombras na direção da cor **Sombras** e os realces na direção da cor
**Realces**, mantendo o brilho deles.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Sombras** | Qualquer cor | #295494 |
| **Realces** | Qualquer cor | #F5AD57 |
| **Equilíbrio** | −100 a 100. Move o ponto em que as duas tonalidades se encontram. Valores positivos dão a cor **Sombras** a uma parte maior da imagem. | 0 |
| **Intensidade** | 0–100% | 30% |

## Solarizar

Inverte cada canal de cor onde ele é mais claro que o **Limiar**.
**Intensidade** mistura o resultado com o original.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Limiar** | 0–100% | 50% |
| **Intensidade** | 0–100% | 100% |

## Iridescência

Adiciona um arco-íris de película fina que segue o brilho da imagem e muda com o
tempo. Uma imagem exportada mostra as cores do momento da exportação.

| Configuração | Intervalo ou opções | Padrão |
| --- | --- | --- |
| **Intensidade** | 0–100% | 55% |
| **Tamanho do filme** | 8–240 px | 64 px |
| **Velocidade** | 0–4 | 0,3 |
| **Animar** | Ligado ou desligado. Enquanto está ligado, as cores mudam continuamente na **Velocidade** definida. | Ligado |
| **Tempo congelado** | 0–3600 s: o momento mostrado enquanto **Animar** está desligado | 0 s |
