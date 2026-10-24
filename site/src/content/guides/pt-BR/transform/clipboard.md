---
title: "Copiar e colar"
description: "Copiar pixels e colá-los como camada ou novo desenho."
related: ["selections/working", "transform/move-transform", "layers/types", "files/open-save"]
---

Os comandos da área de transferência ficam no menu **Editar** e na busca de comandos.

![Colar especial no menu Editar.](shot:transform/clipboard-edit-menu)

## Copiar e recortar

**Copiar** (**Ctrl+C**) copia os pixels da camada selecionada dentro da seleção, sem sua opacidade, máscara nem filtros anexados. Sem seleção, copia a camada dentro da tela.

**Recortar** (**Ctrl+X**) copia os mesmos pixels e os apaga. Fica indisponível em uma camada bloqueada ou com **Bloqueio alfa**.

**Copiar mesclado** (**Ctrl+Shift+C**) copia o resultado visível dentro da seleção, incluindo a iluminação do Papel. Grupos, camadas de filtro e camadas de seleção não têm pixels próprios.

**Copiar pixels** funciona como **Copiar** e, em uma camada de objeto, copia as imagens dela como pixels.

## Colar

**Colar** (**Ctrl+V**) adiciona o conteúdo da área de transferência como uma nova camada e abre alças de transformação quando é necessário posicioná-lo. Uma imagem de outro aplicativo se torna uma [camada de objeto](/pt-BR/docs/layers/types/), preservando sua origem até ser rasterizada.

Uma cópia feita dentro de {appName} retorna à posição copiada quando essa posição está visível. Caso contrário, é posicionada no centro da visualização.

## Colar especial

Abra **Editar > Colar especial** para escolher um destino.

- **Colar no lugar** adiciona uma camada na posição copiada sem abrir alças de transformação.
- **Colar na posição visível** adiciona uma camada no centro da tela visível, no tamanho original.
- **Colar no cursor** adiciona uma camada centralizada no ponteiro, no tamanho original.
- **Colar dentro** adiciona uma camada com a seleção ativa como máscara e depois limpa a seleção.
- **Colar como nova imagem** cria um novo desenho a partir da área de transferência.

Os comandos que exigem uma seleção, uma camada editável ou uma imagem compatível na área de transferência ficam esmaecidos.

![O menu Colar especial com Colar no lugar, Colar na posição visível, Colar no cursor, Colar dentro e Colar como nova imagem.](shot:transform/paste-special)

## Entre aplicativos

Outros aplicativos recebem uma cópia de {appName} como PNG sRGB de 8 bits. Enquanto a cópia interna permanecer na área de transferência, outro desenho de {appName} recebe sua precisão original.

No editor web, uma imagem colada pode ter até 512 MiB. Se o navegador não puder colar imagens, use **Arquivo > Importar imagem como camada…**.
