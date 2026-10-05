---
title: "Copiar e colar"
description: "Como copiar pixels e colá-los como novas camadas, dentro do Capy Canvas e entre aplicativos."
related: ["selections/working", "transform/move-transform", "layers/working", "files/open-save"]
---

Você pode copiar pixels de uma camada ou da imagem visível e colá-los como uma
nova camada. Os comandos ficam no menu **Editar** e na busca de comandos.

![Os comandos da área de transferência no menu Editar.](shot:transform/clipboard-edit-menu)

| Comando | Tecla |
| --- | --- |
| **Recortar** | **Ctrl+X** |
| **Copiar** | **Ctrl+C** |
| **Copiar mesclado** | **Ctrl+Shift+C** |
| **Colar** | **Ctrl+V** |
| **Colar no lugar** | **Ctrl+Shift+V** |
| **Colar dentro** | |

**Copiar**, na [barra de seleção](/pt-BR/docs/selections/working/), contém
**Copiar**, **Copiar mesclado** e **Recortar**.

## Copiar

Copia os pixels próprios da camada ativa dentro da seleção, sem a opacidade, a
máscara e os filtros anexados da camada. Sem seleção, copia a camada inteira
dentro da tela.

## Recortar

Copia como **Copiar** e depois apaga os pixels selecionados da camada. Não é
possível recortar de uma camada com **Bloqueio alfa** ativado.

## Copiar mesclado

Copia a imagem visível dentro da seleção, como ela aparece em uma exportação.

## O que não pode ser copiado

Grupos, camadas de filtro e camadas de seleção não têm pixels próprios. Para
copiar de um grupo, selecione uma camada dentro dele. Não é possível copiar arte
na Máscara rápida, e **Copiar** e **Recortar** ficam indisponíveis enquanto você
edita uma máscara.

Uma cópia grande mostra um aviso de progresso com **Cancelar**.

## Colar

Adiciona o conteúdo da área de transferência como uma nova camada ativa.

- Uma cópia feita no Capy Canvas é colada no lugar de onde foi copiada, se esse lugar estiver à vista, ou no centro da visualização, se não estiver.
- Uma imagem de outro aplicativo se abre na caixa de transformação. **Aplicar** posiciona a imagem e **Cancelar** descarta a colagem (consulte [Mover e Transformar](/pt-BR/docs/transform/move-transform/)).

## Colar no lugar

Adiciona o conteúdo da área de transferência como uma nova camada no lugar de
onde foi copiado, sem caixa de transformação. Uma imagem de outro aplicativo é
colada no centro da visualização, em tamanho real.

## Colar dentro

Funciona como **Colar no lugar** e dá à nova camada uma
[máscara](/pt-BR/docs/layers/masks/) que mostra só a seleção. Depois, a seleção
é removida. **Colar dentro** precisa de uma seleção.

## Colar entre aplicativos

Os outros aplicativos recebem uma cópia do Capy Canvas como uma imagem PNG sRGB
de 8 bits. Colar de volta no Capy Canvas usa a cópia na profundidade de bits
completa enquanto ela ainda está na área de transferência.

Uma cópia colada em um desenho com outras configurações de cor vira uma
[camada de foto](/pt-BR/docs/layers/types/), convertida a partir do perfil de
cor dela.

Enquanto você digita em um campo de texto, as teclas da área de transferência
recortam, copiam e colam texto.

No editor web, uma imagem colada pode ter até 512 MiB. Em um navegador que não
consegue colar imagens, escolha **Arquivo > Importar imagem como camada…**.
