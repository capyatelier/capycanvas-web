---
title: "Painel Camadas"
description: "O que cada parte do painel Camadas mostra e faz, incluindo o menu da camada."
related: ["layers/working", "layers/settings", "layers/types", "layers/masks"]
---

O painel **Camadas** lista as camadas do desenho, com a camada da frente no
topo. O cabeçalho mostra as configurações da camada ativa.

![O painel Camadas com as camadas da ilustração finalizada.](shot:layers/panel "1 Cabeçalho · 2 Linhas de camada · 3 Botões do rodapé")

## Abrir o painel Camadas

Faça uma das seguintes ações:

- Escolha **Janela > Camadas**.
- Em Pintura, selecione **Camadas** na coluna direita.
- Em Esboço, selecione **Painel Camadas** na barra de título.
- Digite "Painel Camadas" na [busca de comandos](/pt-BR/docs/start/command-search/).

Em Foto, o painel já fica aberto na coluna direita.

## Cabeçalho

![O cabeçalho do painel Camadas para Ribbon shading, com Recortar pela camada abaixo ativado.](shot:layers/panel-header "1 Modo de mesclagem da camada · 2 Opacidade da camada · 3 Bloqueio alfa · 4 Bloquear edição · 5 Recortar pela camada abaixo · 6 Usar camadas selecionadas como referência")

1. **Modo de mesclagem da camada** mostra o modo atual e abre o [menu de mesclagem](/pt-BR/docs/layers/blend-modes/).
2. **Opacidade da camada**, de 0 a 100. Arraste o controle deslizante ou digite um valor.
3. **Bloqueio alfa**.
4. **Bloquear edição**.
5. **Recortar pela camada abaixo**. Em um filtro, o botão mostra **Aplicar a *camada*** ou **Aplicar às camadas abaixo** (consulte [Como os filtros se aplicam](/pt-BR/docs/filters/how-filters-apply/)).
6. **Usar camadas selecionadas como referência**. O botão mostra **Parar de usar esta camada como referência** quando a camada ativa é a única linha selecionada e já é uma referência.

Um interruptor destacado está ativado (consulte [Configurações da camada](/pt-BR/docs/layers/settings/)).
**Modo de mesclagem da camada** e **Opacidade da camada** ficam indisponíveis
em camadas de seleção e em camadas bloqueadas.

## Linhas de camada

![A linha Ribbon, com a máscara, o Bloqueio alfa ativado e a opacidade em 80%.](shot:layers/panel-row "1 Olho · 2 Botão da linha · 3 Miniatura · 4 Vínculo da máscara · 5 Miniatura da máscara · 6 Nome e subtítulo · 7 Cadeado · 8 Alça")

As camadas de um grupo aparecem recuadas abaixo do grupo.

1. O olho oculta ou mostra a camada.
2. O botão da linha adiciona a linha à seleção ou a remove dela, sem mudar a camada ativa. Ele mostra um pincel na camada que recebe a tinta, um farol em uma camada de referência e uma marca de verificação nas outras linhas selecionadas.
3. Selecione a miniatura para pintar nos pixels da camada. Em um grupo, a miniatura expande ou recolhe o grupo.
4. Em uma camada com máscara, o botão de vínculo define se a máscara se move junto com a camada (**Desvincular máscara da camada**, **Vincular máscara à camada**).
5. Selecione a miniatura da máscara para pintar na [máscara](/pt-BR/docs/layers/masks/).
6. O subtítulo abaixo do nome mostra o modo de cor, o modo de mesclagem e a opacidade quando eles não são Todas as cores, Normal e 100%, por exemplo "Multiplicar · 60%".
7. Um ícone de cadeado marca uma camada bloqueada, e um ícone de bloqueio alfa marca uma camada com **Bloqueio alfa** ativado.
8. Arraste a alça para [mover a camada](/pt-BR/docs/layers/working/).

Selecione uma linha para torná-la a camada ativa e a única linha selecionada.
[Tipos de camada](/pt-BR/docs/layers/types/) mostra a miniatura de cada tipo.

**Ctrl**+clique na miniatura de uma camada de pintura para carregar a opacidade
dela como seleção, ou na miniatura da máscara para carregar a máscara. Acrescente
**Shift** para adicionar à seleção, **Alt** para subtrair da seleção ou
**Shift+Alt** para fazer a interseção com a seleção.

## Indicadores das linhas

- Um contorno ao redor da miniatura ou da miniatura da máscara marca onde os pincéis pintam.
- Um trilho à esquerda das miniaturas une as [camadas recortadas](/pt-BR/docs/layers/settings/) à camada base.
- Um elo de corrente entre duas miniaturas une um [filtro anexado](/pt-BR/docs/filters/how-filters-apply/) à linha abaixo dele.
- Um olho esmaecido e riscado marca uma camada que está ativada, mas fica oculta pelo grupo, ou um filtro anexado cuja camada está oculta.
- Uma miniatura de máscara esmaecida marca uma máscara desativada.
- Enquanto a [Máscara rápida](/pt-BR/docs/selections/quick-mask/) está ativada, uma linha **Máscara rápida** aparece no topo.

## Botões do rodapé

![Os botões na parte inferior do painel Camadas.](shot:layers/panel-footer "1 Nova camada · 2 Novo grupo · 3 Nova camada de seleção · 4 Adicionar máscara · 5 Adicionar filtro · 6 Importar imagem como camada… · 7 Excluir camadas selecionadas · 8 Ações da camada")

1. **Nova camada** adiciona uma camada de pintura.
2. **Novo grupo**. Com várias linhas selecionadas, o botão agrupa essas linhas.
3. **Nova camada de seleção** (consulte [Camadas de seleção](/pt-BR/docs/selections/selection-layers/)).
4. **Adicionar máscara**.
5. **Adicionar filtro** anexa um filtro à camada ativa.
6. **Importar imagem como camada…**
7. **Excluir camadas selecionadas**.
8. **Ações da camada** abre o menu da camada ativa.

Um botão fica indisponível quando a ação dele não se aplica à camada ativa, por
exemplo **Adicionar máscara** em uma camada bloqueada (consulte
[Trabalhar com camadas](/pt-BR/docs/layers/working/)).

## Deslizar e manter pressionado

Com uma caneta ou um dedo:

- Deslize uma linha para a esquerda para mostrar **Excluir** na extremidade direita dela. Selecione **Excluir** para excluir a camada ou deslize para a direita para esconder o botão.
- Deslize uma camada de pintura para a direita para ativar ou desativar o **Bloqueio alfa**.
- Deslize um grupo para a direita para ativar ou desativar **Atravessar**.
- Mantenha pressionada uma linha para abrir o menu da camada. Para arrastar a linha, mova sem levantar.

![Uma linha deslizada para a esquerda, com Excluir na extremidade direita.](shot:layers/panel-swipe-delete)

Um deslize curto não muda nada. Os gestos de deslizar não funcionam com mouse,
na alça nem em camadas bloqueadas.

## Menu da camada

Você pode abrir um menu de comandos para cada camada.

Faça uma das seguintes ações:

- Abra o menu **Camada**. Ele contém o menu da camada ativa, sem **Adicionar filtro**.
- Clique com o botão direito em uma linha ou mantenha pressionada a linha com uma caneta ou um dedo.
- Selecione **Ações da camada** na parte inferior do painel.
- Com uma linha em foco, pressione **Shift+F10** ou a tecla Menu.

![O menu da camada Ribbon.](shot:layers/panel-menu)

| Item | Conteúdo |
| --- | --- |
| **Novo** | **Nova camada**, **Nova camada de recorte**, **Novo grupo**, **Preenchimento de cor sólida**, **Preenchimento de degradê**, **Nova camada de subexposição e superexposição**, **Copiar seleção para nova camada**, **Recortar seleção para nova camada** |
| **Adicionar filtro** | Filtros para anexar à camada, por categoria |
| **Organizar** | **Renomear camada…**, **Duplicar**, **Agrupar camadas selecionadas** e, em um grupo, **Desagrupar** |
| **Modo de mesclagem** | Todos os [modos de mesclagem](/pt-BR/docs/layers/blend-modes/) |
| **Configurações da camada** | As [configurações da camada](/pt-BR/docs/layers/settings/) |
| **Máscara** | Os comandos de [máscara](/pt-BR/docs/layers/masks/) |
| **Seleção de pixels** | **Selecionar opacidade da camada**, **Adicionar opacidade à seleção**, **Subtrair opacidade da seleção**, **Interseção com opacidade da camada**, **Preencher seleção**, **Inverter seleção**, **Desmarcar pixels** |
| **Seleção de linhas de camada** | **Selecionar todas as linhas de camada**, **Limpar seleção de linhas de camada** |
| **Visibilidade** | **Mostrar camada**, **Mostrar camada e grupos superiores**, **Isolar camadas selecionadas**, **Mostrar todas as camadas** |
| **Mover camada / máscara** | Seleciona a ferramenta [Operação](/pt-BR/docs/transform/move-transform/) |
| **Mesclar abaixo**, **Mesclar visíveis**, **Carimbar visíveis**, **Achatar imagem** | Consulte [Mesclar camadas](/pt-BR/docs/layers/merging/) |
| **Limpar camada inteira**, **Excluir camada** | **Limpar camada inteira** aparece só em camadas de pintura |

Abrir o menu de uma linha torna essa camada ativa. O menu de um grupo começa com
**Nova camada de seleção no grupo…** e **Salvar seleção atual no grupo…**. As
camadas de seleção têm um menu próprio (consulte
[Tipos de camada](/pt-BR/docs/layers/types/)). Clique com o botão direito ou
mantenha pressionada a miniatura da máscara para abrir o
[menu da máscara](/pt-BR/docs/layers/masks/).
