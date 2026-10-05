---
title: "Trabalhar com seleções"
description: "A barra de ações da tela e os comandos que alteram uma seleção ou os pixels dentro dela."
related: ["selections/tools", "selections/quick-mask", "selections/selection-layers", "layers/masks"]
---

Você pode alterar uma seleção, e os pixels dentro dela, pelo menu **Selecionar**
e pela barra de seleção sobre a tela.

## A barra de ações da tela

A barra de ações da tela é uma fileira de botões sobre a tela com os próximos passos
para o que você está editando.

| A barra de ações da tela aparece | Explicado em |
| --- | --- |
| Ao lado de uma nova seleção | A barra de seleção, abaixo |
| Enquanto você posiciona os cantos de uma seleção com **Laço poligonal** | [Ferramentas de seleção](/pt-BR/docs/selections/tools/) |
| Na Máscara rápida | [Máscara rápida](/pt-BR/docs/selections/quick-mask/) |
| Enquanto você edita uma camada de seleção | [Camadas de seleção](/pt-BR/docs/selections/selection-layers/) |
| Enquanto você edita a máscara de uma camada | [Máscaras](/pt-BR/docs/layers/masks/) |
| Enquanto você transforma camadas ou pixels, ou posiciona uma imagem | [Mover e Transformar](/pt-BR/docs/transform/move-transform/) |
| Enquanto você recorta | [Recortar](/pt-BR/docs/transform/crop/) |
| Quando você seleciona uma guia | [Réguas e guias](/pt-BR/docs/drawing/ruler/) |
| Quando você clica no disco da origem de clonagem | [Clonar e corrigir](/pt-BR/docs/retouch/clone-heal/) |
| Enquanto você escolhe um ponto de amostra para Níveis, Curvas ou Equilíbrio de branco | [Adicionar e editar filtros](/pt-BR/docs/filters/adding/) |

A barra fica ao lado do objeto ou na borda inferior da tela. Da esquerda para a
direita, ela tem:

- Uma legenda, como "Máscara rápida" ou "Transformar contorno".
- Os botões. Um botão esmaecido está indisponível; selecione-o para ver o motivo.
- **Mais**, com os botões que não cabem, e depois o menu **Selecionar** para uma seleção ou o menu **Camada** para uma máscara.
- O botão que conclui, como **Aplicar** ou **Sair**.

Uma barra ao lado de um objeto se esconde enquanto você toca na tela ou move a
visualização.

Para ocultar a barra de ações da tela, faça uma das seguintes ações:

- Escolha **Exibir > Mostrar barra de ações da tela**.
- Escolha **Mostrar barra de ações da tela** no fim de **Mais**.

Cada área de trabalho guarda a própria configuração. Com a barra oculta,
recortes, transformações, imagens posicionadas e polígonos continuam mostrando
os botões de conclusão na borda inferior.

## A barra de seleção

A barra de seleção aparece ao lado de uma seleção enquanto uma ferramenta de
seleção ou **Operação** está ativa. Com outras ferramentas, ela aparece ao lado
de uma nova seleção, mas não ao lado de uma seleção que Desfazer ou Refazer traz
de volta. Os pincéis, as ferramentas de preenchimento, **Degradê** e **Forma**
nunca mostram a barra.

![A barra de seleção abaixo de uma seleção retangular.](shot:selections/working-selection-bar)

- **Desmarcar** e **Inverter**: consulte o menu Selecionar abaixo.
- **Deixar cópia**: só com **Operação**, consulte [Mover e Transformar](/pt-BR/docs/transform/move-transform/).
- **Copiar para camada**: **Copiar seleção para nova camada** ou **Recortar seleção para nova camada**.
- **Copiar**: **Copiar**, **Copiar mesclado** ou **Recortar**, consulte [Copiar e colar](/pt-BR/docs/transform/clipboard/).
- **Transformar**: transforma os pixels selecionados.
- **Refinar**: os comandos de refinamento e **Transformar contorno**.
- **Máscara**: mascara a camada ativa pela seleção.
- **Ajustar**: adiciona um filtro que usa a seleção como máscara, consulte [Como os filtros se aplicam](/pt-BR/docs/filters/how-filters-apply/).
- **Preencher**: **Preencher seleção**.
- **Limpar**: **Limpar pixels selecionados** ou **Limpar fora da seleção**.
- **Recortar**: **Recortar tela à seleção**, consulte [Recortar](/pt-BR/docs/transform/crop/).
- **Máscara rápida**: consulte [Máscara rápida](/pt-BR/docs/selections/quick-mask/).
- **Salvar**: **Salvar como camada de seleção**, consulte [Camadas de seleção](/pt-BR/docs/selections/selection-layers/).

## Menu Selecionar

Você também pode abrir o menu **Selecionar** em **Mais**, na barra de seleção, e
em **Selecionar**, abaixo das configurações de uma ferramenta de seleção no
painel Ferramenta.

| Comando | Função | Tecla |
| --- | --- | --- |
| **Selecionar todos os pixels** | Seleciona a tela inteira | **Ctrl+A** |
| **Desmarcar pixels** | Remove a seleção e encerra a Máscara rápida ou a edição da camada de seleção | **Ctrl+D** |
| **Selecionar novamente** | Restaura a seleção que a última mudança removeu | **Ctrl+Shift+D** |
| **Inverter seleção** | Seleciona tudo o que está fora da seleção | **Ctrl+Shift+I** |
| **Mostrar contorno da seleção** | Mostra ou oculta o contorno da seleção | |

**Selecionar novamente** só fica disponível enquanto nada está selecionado.

Ocultar o contorno da seleção mantém a seleção. **Mostrar contorno da seleção**
também está no menu Exibir.

![O menu Selecionar.](shot:selections/working-select-menu)

## Refinar uma seleção

Você pode expandir, contrair, difundir, criar uma borda ou suavizar uma seleção
com prévia ao vivo.

Faça uma das seguintes ações:

- Escolha **Selecionar > Expandir seleção…**, **Contrair seleção…**, **Difusão da seleção…**, **Borda da seleção…** ou **Suavizar seleção…**.
- Selecione **Refinar** na barra de seleção e escolha **Expandir…**, **Contrair…**, **Difusão…**, **Borda…** ou **Suavizar…**.

Um painel com um único valor se abre na parte inferior da tela. Para manter o
resultado, selecione **Aplicar** ou pressione **Enter**. **Cancelar** e
**Escape** restauram a seleção que você tinha.

| Comando | Valor | Intervalo | Padrão |
| --- | --- | --- | --- |
| **Expandir seleção…** | **Grow by** | 1–128 px | 5 px |
| **Contrair seleção…** | **Shrink by** | 1–128 px | 5 px |
| **Difusão da seleção…** | **Feather radius** | 0,1–100 px | 5 px |
| **Borda da seleção…** | **Border width** | 1–128 px | 5 px |
| **Suavizar seleção…** | **Smooth radius** | 1–64 px | 5 px |

**Borda da seleção…** substitui a seleção por uma faixa ao longo da borda dela.
A suavização preenche reentrâncias e remove pontas mais estreitas que o dobro do
raio, mas não move as bordas que ficam na borda da tela. Expandir e contrair
mantêm suaves as bordas suaves.

Na Máscara rápida, esses comandos alteram a máscara.

![O menu Refinar na barra de seleção.](shot:selections/working-refine-menu)

## Transformar contorno da seleção

Você pode mover, dimensionar, girar, inclinar ou espelhar o contorno da seleção
sem mover nenhum pixel.

Faça uma das seguintes ações:

- Escolha **Selecionar > Transformar contorno da seleção**.
- Selecione **Refinar > Transformar contorno** na barra de seleção.

A caixa de transformação aparece com uma barra de ações da tela com a legenda
"Transformar contorno". Ela funciona como
[Transformar](/pt-BR/docs/transform/move-transform/), mas sem **Distorcer**,
**Deformar** e **Interpolação**.

## Preencher e limpar

- **Preencher seleção** preenche os pixels selecionados da camada de pintura ativa com a cor atual, na opacidade do pincel.
- **Limpar pixels selecionados** apaga os pixels selecionados da camada ativa. As bordas suaves são apagadas em parte.
- **Limpar fora da seleção** apaga os pixels fora da seleção.

Faça uma das seguintes ações:

- Escolha o comando no menu **Editar**. Os comandos de limpar também estão no menu **Selecionar**.
- Pressione **Shift+Backspace** para preencher, ou **Excluir** ou **Backspace** para limpar os pixels selecionados.
- Selecione **Preencher**, ou **Limpar** e um comando, na barra de seleção.
- Em Pintura, selecione **Preencher seleção** na barra de ferramentas Comandos.
- Abra o menu da camada e escolha **Seleção de pixels > Preencher seleção**.

Não é possível limpar pixels na Máscara rápida, em uma máscara ou em uma camada
com **Bloqueio alfa** ativado.

## Copiar para uma nova camada

**Copiar seleção para nova camada** copia os pixels selecionados da camada de
pintura ativa para uma nova camada logo acima, na mesma posição.
**Recortar seleção para nova camada** também os apaga da camada original.

Faça uma das seguintes ações:

- Escolha **Selecionar > Copiar seleção para nova camada** ou **Selecionar > Recortar seleção para nova camada**.
- Pressione **Ctrl+J** para copiar ou **Ctrl+Shift+J** para recortar.
- Selecione **Copiar para camada** na barra de seleção e escolha um comando.

A nova camada recebe um nome baseado na original, por exemplo *Cópia de Ribbon*,
e mantém a opacidade, a visibilidade e o modo de mesclagem dela. A seleção é
removida até você escolher **Selecionar novamente**.

Sem uma seleção, **Copiar seleção para nova camada** duplica as camadas
selecionadas.

## Mascarar uma camada pela seleção

Você pode adicionar à camada ativa uma máscara que mostra só a seleção.

Faça uma das seguintes ações:

- Abra o menu da camada e escolha **Máscara > Máscara: revelar seleção**, ou **Máscara > Máscara: ocultar seleção** para ocultar a área selecionada.
- Selecione **Máscara** na barra de seleção.

Se a camada já tiver uma máscara, a seleção substitui a máscara existente. A
seleção é removida, e a máscara se abre para edição (consulte
[Máscaras](/pt-BR/docs/layers/masks/)).

## Seleções a partir de camadas

Você pode carregar como seleção a pintura de uma camada, a máscara dela ou uma
camada de seleção.

Faça uma das seguintes ações:

- Em uma camada de pintura, escolha um item em **Selecionar > A partir da opacidade da camada**: **Selecionar opacidade da camada**, **Adicionar opacidade à seleção**, **Subtrair opacidade da seleção** ou **Interseção com opacidade da camada**.
- Em uma camada com máscara, escolha um item em **Selecionar > A partir da máscara da camada**: **Carregar máscara como seleção**, **Adicionar máscara à seleção**, **Subtrair máscara da seleção** ou **Interseção com máscara**.
- Abra o menu da camada e escolha os mesmos itens em **Seleção de pixels**.
- Mantenha **Ctrl** pressionada e clique na miniatura da camada no painel Camadas. Acrescente **Shift** para adicionar à seleção, **Alt** para subtrair ou **Shift+Alt** para fazer a interseção.

**Selecionar > Carregar seleção** carrega [camadas de seleção](/pt-BR/docs/selections/selection-layers/).
