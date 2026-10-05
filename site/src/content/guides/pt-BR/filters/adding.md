---
title: "Adicionar e editar filtros"
description: "Como adicionar filtros e mudar as configurações deles no painel Propriedades."
related: ["filters/how-filters-apply", "filters/tone", "filters/color", "start/command-search"]
---

Você pode adicionar um filtro [em uma camada própria ou anexado a uma camada](/pt-BR/docs/filters/how-filters-apply/)
e mudar as configurações dele no painel **Propriedades**.

## Painel Filtros

Você pode adicionar um filtro em uma camada própria selecionando-o no painel
**Filtros**.

Faça uma das seguintes ações:

- Escolha **Janela > Filtros**.
- Em Pintura e Foto, selecione a aba **Filtros** ao lado de **Propriedades** na coluna direita.
- Em Esboço, selecione **Filtros** na barra de título.

![O painel Filtros com o menu de categorias, o botão de busca e linhas de filtros com prévias.](shot:filters/filters-panel)

Enquanto uma camada está selecionada, cada linha mostra uma prévia do filtro
nessa camada e nas camadas abaixo dela. Os filtros animados têm uma marca antes
do ícone.

O menu no topo mostra uma categoria ou **Todos os filtros**. **Buscar filtros**
encontra um filtro pelo nome dentro da categoria escolhida.

Depois que você adiciona um filtro, o painel **Propriedades** vem para a frente,
ao lado de **Filtros**.

## Menu Filtro

Você pode adicionar um filtro em uma camada própria pelo menu **Filtro**.

Faça uma das seguintes ações:

- Escolha uma categoria e um filtro no menu **Filtro**.
- Em Esboço, escolha **Menu principal > Filtro** e depois uma categoria e um filtro.
- Digite o nome do filtro na [busca de comandos](/pt-BR/docs/start/command-search/).

O menu também tem [**Separação de frequências…**](/pt-BR/docs/retouch/dodge-burn/),
e o submenu **Preencher** adiciona [camadas de preenchimento](/pt-BR/docs/layers/types/).
Não é possível adicionar filtros na Máscara rápida nem enquanto você edita uma
camada de seleção.

## Ajustar

Você pode adicionar um filtro mascarado pela seleção atual. Selecione
**Ajustar** na barra de seleção sobre a tela e depois escolha uma categoria e um
filtro.

![A barra de seleção com o menu Ajustar aberto na categoria Tom.](shot:filters/selection-adjust)

## Adicionar filtro

Você pode anexar um filtro à camada selecionada.

Faça uma das seguintes ações:

- Selecione **Adicionar filtro** na parte inferior do painel Camadas ou do painel **Propriedades**.
- Abra o menu da camada e escolha **Adicionar filtro**.

![O menu Adicionar filtro aberto na parte inferior do painel Camadas.](shot:filters/add-filter-menu)

**Adicionar filtro** funciona em camadas de pintura desbloqueadas, camadas de
foto e grupos que não estejam com Atravessar. O menu tem todas as categorias,
exceto **Preencher**.

## Gaveta Filtros em Esboço

Em Esboço, você pode escolher filtros e mudar as configurações deles na gaveta
**Filtros**. Selecione **Filtros** na barra de título e depois selecione uma
categoria em **Tipo de filtro** e um filtro em **Filtros**.

![A gaveta Filtros de Esboço com as colunas Tipo de filtro, Filtros e Propriedades.](shot:filters/sketch-drawer)

| Camada selecionada | Selecionar um filtro na gaveta |
| --- | --- |
| Um filtro | Substitui o filtro, mantendo o nome, a máscara, a opacidade, o modo de mesclagem e a posição dele |
| Uma camada recortada | Anexa o filtro a essa camada |
| Qualquer outra camada | Adiciona o filtro em uma camada própria acima dela |

**Cancelar**, na parte inferior de **Tipo de filtro**, exclui o filtro
selecionado e fecha a gaveta. Para manter o filtro, selecione **Filtros** na
barra de título de novo.

## Painel Propriedades

Você pode mudar as configurações do filtro selecionado no painel
**Propriedades**.

Faça uma das seguintes ações:

- Escolha **Janela > Propriedades**.
- Em Pintura e Foto, selecione a aba **Propriedades** na coluna direita.
- Em Esboço, use a coluna direita da gaveta **Filtros**.

![O painel Propriedades de Curvas com o menu de páginas, Amostrar ponto, Ajuste direcionado e o gráfico da curva.](shot:filters/properties-curves)

| Controle | Uso |
| --- | --- |
| Menu de páginas | Mostra uma página das configurações do filtro, como a curva **Vermelho** de **Curvas**. |
| Controle deslizante | Arraste ou selecione **−** ou **+**. Selecione o valor para digitar um número, uma unidade ou uma expressão como `85/2`. Apague o valor para restaurar o padrão. |
| Cor | Abre [Editar cor](/pt-BR/docs/color/edit-color/). **Usar cor selecionada** define a cor como a cor atual. |
| Degradê | Edita os pontos de cor como na ferramenta [Degradê](/pt-BR/docs/drawing/gradient/). |

Cada arrasto é um passo de desfazer, e **Escape** durante um arrasto restaura o
valor. Algumas configurações aceitam valores digitados além dos extremos do
controle deslizante.

Os tamanhos em px são pixels da tela. Depois de
[**Tamanho da imagem…**](/pt-BR/docs/transform/image/), o efeito acompanha a
escala da imagem e o número continua o mesmo.

Enquanto **Sombras/Realces**, **Claridade** ou **Desembaçar** se atualiza, o
título do painel termina em "Atualizando…". As configurações de um filtro
bloqueado não podem ser alteradas.

## Definir tons a partir da imagem

**Níveis**, **Curvas** e **Equilíbrio de branco** têm botões no topo do painel
**Propriedades** que leem a imagem como ela chega ao filtro.

| Botão | Filtro | Função |
| --- | --- | --- |
| **Amostrar ponto > Escolher ponto preto**, **Escolher ponto neutro** ou **Escolher ponto branco** | **Níveis**, **Curvas** | Clique na tela para definir esse ponto. |
| **Escolher ponto neutro** | **Equilíbrio de branco** | Clique na tela para definir **Temperatura** e **Tonalidade** de modo que o ponto fique neutro. |
| **Automático** | **Níveis** | Define **Preto**, **Branco** e **Meios-tons** de entrada da página atual a partir da imagem. Mostra **Cancelar** enquanto é executado. |
| **Ajuste direcionado** | **Curvas** | Arraste para cima ou para baixo na tela para subir ou descer a curva no tom sob o ponteiro. |

Na página **RGB**, os botões alteram todos os canais, e em uma página de canal,
só esse canal.

Enquanto um seletor ou **Ajuste direcionado** está ativado, uma barra na parte
inferior da tela mostra uma instrução e **Cancelar** ou **Concluído**. Se um
ponto não puder ser usado, aparece uma mensagem e o seletor continua ativado.

## Painel Histograma

Você pode conferir os tons da imagem no painel **Histograma**.

Faça uma das seguintes ações:

- Escolha **Janela > Histograma**.
- Em Foto, selecione a aba **Histograma** no topo da coluna direita.

![O painel Histograma com os menus de origem e de canal, o gráfico e os botões de corte.](shot:filters/histogram)

| Controle | Opções |
| --- | --- |
| Menu de origem (**Visível** no início) | **Visível**, **Camada selecionada**, **Referência** (as camadas com **Usar como referência**), **Seleção** (a imagem visível dentro da seleção) |
| Menu de canal (**RGB** no início) | **RGB**, **Vermelho**, **Verde**, **Azul**, **Luminância** |
| **Contagens logarítmicas** | Mostra as contagens de pixels em escala logarítmica. |
| **Sombras**, **Realces** | Marcam as áreas cortadas na tela. Em um desenho HDR, mostram **Sombras (SDR)** e **Realces (SDR)**. |

O status abaixo do gráfico mostra "Exato" quando a contagem termina.

## Painel Forma de onda

Você pode ver o brilho e a cor da esquerda para a direita na imagem no painel
**Forma de onda**.

Faça uma das seguintes ações:

- Escolha **Janela > Forma de onda**.
- Em Foto, selecione a aba **Forma de onda** ao lado de **Histograma**.

O painel tem um menu de canal próprio e **Contagens logarítmicas**. O menu de
origem e os botões de corte são compartilhados com o painel **Histograma**.
