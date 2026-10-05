---
title: "Máscaras"
description: "Como ocultar partes de uma camada com uma máscara, e todos os comandos que alteram uma máscara."
related: ["layers/panel", "selections/working", "filters/how-filters-apply", "layers/merging"]
---

Você pode ocultar partes de uma camada com uma máscara. As áreas pintadas na
máscara mostram a camada, e as áreas vazias a ocultam. Camadas de pintura,
camadas de foto, grupos, camadas de preenchimento e filtros podem ter máscaras.

## Adicionar uma máscara

Faça uma das seguintes ações:

- Escolha **Camada > Máscara > Adicionar máscara**.
- Selecione **Adicionar máscara** na parte inferior do painel Camadas.

![A linha Ribbon, com um contorno ao redor da miniatura da máscara.](shot:layers/masks-row)

A miniatura da máscara aparece à direita da miniatura da camada, com um
contorno que a marca como destino dos pincéis. Uma máscara nova mostra a camada
inteira. Se houver uma seleção ativa, a máscara mostra só a área selecionada, e
a seleção é desfeita.

Se a camada já tiver uma máscara, **Adicionar máscara** seleciona essa máscara
para pintura. Não é possível adicionar uma máscara a uma camada de seleção ou a
uma camada bloqueada.

## Pintar em uma máscara

Selecione a miniatura da máscara para pintar na máscara. Para voltar a pintar
na camada, selecione a miniatura da camada ou pressione **Escape**.

> **Observação:** Na máscara, os pincéis ignoram a cor de pintura. Eles revelam a camada, e a **Borracha** a oculta.

Em uma máscara invertida, os pincéis e a **Borracha** trocam de papel. Os
traços na máscara são secos, sem mistura, espalhamento nem textura.

## Barra de edição da máscara

Enquanto você pinta em uma máscara, uma barra com o rótulo "Editando a máscara
de *camada*" aparece na parte inferior da tela.

![A barra de edição da máscara com Inverter, Desativar, Aplicar máscara, Mais e Editar conteúdo.](shot:layers/masks-bar)

- **Inverter**
- **Desativar** desativa a máscara, e o botão passa a mostrar **Ativar**.
- **Aplicar máscara** apaga os pixels que a máscara oculta e depois remove a máscara.
- **Mais** contém o menu **Camada** e **Mostrar barra de ações da tela**. Desative **Mostrar barra de ações da tela** para ocultar a barra.
- **Editar conteúdo** volta à pintura na camada.

## Máscaras a partir de seleções

Você pode criar uma máscara a partir da seleção atual.

Faça uma das seguintes ações:

- Escolha **Camada > Máscara > Máscara: revelar seleção** ou **Máscara: ocultar seleção**. Em uma camada com máscara, os itens mostram **Substituir máscara: revelar seleção** e **Substituir máscara: ocultar seleção**.
- Selecione **Máscara** na [barra de seleção](/pt-BR/docs/selections/working/) sobre a tela. A nova máscara mostra a área selecionada e substitui qualquer máscara que a camada tinha.

Um filtro ou uma camada de preenchimento adicionados com uma seleção ativa
recebem uma máscara a partir da seleção. **Colar dentro** cria uma nova camada
mascarada pela seleção (consulte [Copiar e colar](/pt-BR/docs/transform/clipboard/)).

## Seleções a partir de máscaras

Você pode carregar uma máscara como seleção.

Faça uma das seguintes ações:

- Escolha **Selecionar > A partir da máscara da camada** e **Carregar máscara como seleção**, **Adicionar máscara à seleção**, **Subtrair máscara da seleção** ou **Interseção com máscara**.
- Escolha os mesmos itens em **Seleção de pixels** no menu da máscara.
- **Ctrl**+clique na miniatura da máscara. Acrescente **Shift** para adicionar à seleção, **Alt** para subtrair da seleção ou **Shift+Alt** para fazer a interseção com a seleção.

## Menu da máscara

Faça uma das seguintes ações:

- Escolha **Camada > Máscara** (o primeiro item mostra **Editar máscara**).
- Clique com o botão direito ou mantenha pressionada a miniatura da máscara.
- Enquanto você pinta na máscara, abra o menu **Camada** ou selecione **Ações da camada** na parte inferior do painel Camadas.

Em uma camada sem máscara, **Camada > Máscara** tem apenas **Adicionar máscara**,
**Máscara: revelar seleção**, **Máscara: ocultar seleção** e **Colar máscara**.

![O menu da máscara de Ribbon.](shot:layers/masks-menu)

| Item | Função |
| --- | --- |
| **Editar conteúdo da camada** | Volta à pintura na camada. |
| **Mostrar área da máscara** | Mostra a máscara na tela e a seleciona para pintura. |
| **Ativar máscara** | Ativa ou desativa a máscara sem alterá-la. Uma máscara desativada tem a miniatura esmaecida. |
| **Vincular máscara à camada** | Quando ativado, a máscara se move com a camada. Quando desativado, **Mover camada / máscara** move a camada ou a máscara, a que estiver recebendo a pintura. O botão de vínculo entre as miniaturas faz o mesmo. |
| **Substituir máscara: revelar seleção**, **Substituir máscara: ocultar seleção** | Substitui a máscara pela seleção. |
| **Copiar máscara** | Copia a máscara, para usar **Substituir por máscara copiada** em outra camada ou **Colar máscara** em uma camada sem máscara. |
| **Inverter máscara** | Troca as áreas visíveis pelas ocultas. |
| **Revelar tudo**, **Ocultar tudo** | Faz a máscara mostrar ou ocultar a camada inteira e desativa a inversão. |
| **Aplicar máscara à camada** | Apaga os pixels que a máscara oculta e depois remove a máscara. |
| **Excluir máscara** | Remove a máscara. Os pixels da camada não mudam. |
| **Seleção de pixels** | Carrega a máscara como seleção. |

Todos os itens, exceto **Editar conteúdo da camada**, **Mostrar área da máscara**
e **Copiar máscara**, exigem uma camada desbloqueada.

## Aplicar uma máscara

Faça uma das seguintes ações:

- Escolha **Camada > Máscara > Aplicar máscara à camada**.
- Selecione **Aplicar máscara** na barra de edição da máscara.

**Aplicar máscara à camada** só funciona em camadas de pintura, e a máscara
precisa estar ativada. Em uma camada distorcida ou deformada, escolha
**Aplicar transformação aos pixels** antes. Para aplicar a máscara de um grupo,
use **Mesclar grupo** (consulte [Mesclar camadas](/pt-BR/docs/layers/merging/)).

Em uma camada de foto, **Reverter para foto original** restaura o que uma
máscara aplicada apagou.

## Máscaras em camadas de filtro e de preenchimento

A máscara de um filtro define onde o filtro se aplica. Com uma camada de filtro
ou de preenchimento selecionada, os pincéis sempre pintam a máscara dela.
**Preencher**, **Degradê** e outras ferramentas que desenham arte não funcionam
na máscara de um filtro. Para pintar em uma camada de preenchimento, é preciso
uma máscara.
