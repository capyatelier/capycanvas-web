---
title: "Novos desenhos"
description: "A caixa de diálogo Novo desenho e as camadas com que um desenho novo começa."
related: ["color-management/color-spaces", "layers/types", "files/open-save"]
---

Você pode começar um desenho na caixa de diálogo **Novo desenho**. O novo desenho
abre em uma aba própria, e o desenho atual continua aberto.

## Abrir a caixa de diálogo Novo desenho

Faça uma das seguintes ações:

- Escolha **Arquivo > Novo…**.
- Pressione **Ctrl+N** (exceto no editor web).
- Em Pintura e Foto, selecione **Novo…** na barra de ferramentas Comandos.

Escolha as configurações abaixo e selecione **Criar**.

**Novo…** não está disponível enquanto um recorte ou uma transformação está
aberto. Se já houver dados de desenho demais abertos, o novo desenho só abre
depois que você fechar alguns desenhos.

## Configurações

![A caixa de diálogo Novo desenho com a predefinição Desenho padrão.](shot:files/new-dialog)

### Predefinição

Preenche todos os campos a partir de uma predefinição integrada ou de uma que
você salvou. Alterar um campo depois disso muda **Predefinição** para
**Personalizado**.

Todas as predefinições integradas têm 2048 × 1536 pixels com fundo branco.

| Predefinição | Espaço de cores | Profundidade de bits | Mesclagem |
| --- | --- | --- | --- |
| **Desenho padrão** | sRGB | SDR de 8 bits | Perceptual |
| **Cores amplas** | Display P3 | SDR de 8 bits | Perceptual |
| **Edição de fotos** | ProPhoto RGB | SDR de 16 bits | Perceptual |
| **Desenho HDR** | sRGB | HDR de 16 bits em ponto flutuante | Luz linear |

### Remover predefinição salva

Exclui a predefinição salva selecionada. As predefinições integradas não podem
ser removidas.

### Largura (px) e Altura (px)

De 1 a 8192 pixels. Os campos aceitam contas como "160*2".

### Espaço de cores

**sRGB**, **Display P3**, **Adobe RGB (1998)** ou **ProPhoto RGB** (consulte
[Espaço de cores, profundidade de bits e mesclagem](/pt-BR/docs/color-management/color-spaces/)).
Com **ProPhoto RGB** e **SDR de 8 bits**, a caixa de diálogo recomenda SDR de 16 bits.

### Profundidade de bits

**SDR de 8 bits**, **SDR de 16 bits**, **HDR de 16 bits em ponto flutuante** ou
**HDR de 32 bits em ponto flutuante**. Uma profundidade de bits em ponto flutuante
cria um desenho HDR.

### Mesclagem

**Perceptual** ou **Luz linear**. Com uma profundidade de bits em ponto flutuante,
**Mesclagem** fica fixa em **Luz linear**.

### Fundo

**Branco** ou **Transparente**. **Transparente** oculta a camada **Papel**.

### Nome da predefinição

Salva as configurações como predefinição com esse nome quando você seleciona
**Criar**. Um nome tem até 64 caracteres, e você pode guardar até 64 predefinições.

### Usar estas configurações para novos desenhos

Quando ativado, a caixa de diálogo abre com essas configurações da próxima vez. O
espaço de cores, a profundidade de bits e o fundo também passam a ser as
configurações de **Novos desenhos** em [Preferências](/pt-BR/docs/preferences/).

## As primeiras camadas

![O painel Camadas de um desenho novo, com Tinta atual acima de Papel.](shot:files/new-layers)

Um desenho novo tem duas camadas. **Tinta atual**, uma camada de pintura vazia,
está selecionada acima de **Papel**, uma camada de preenchimento branca (consulte
[Tipos de camada](/pt-BR/docs/layers/types/)). As camadas adicionadas depois
recebem o nome "Camada" e um número.

## Outras plataformas

No iPad, no macOS e no Android, um campo **Salvar predefinição…** e uma opção
**Usar padrões** substituem **Nome da predefinição** e **Usar estas configurações
para novos desenhos**. O iPad e o macOS não têm o botão **Remover predefinição salva**.

No Linux, **Salvar predefinição…** abre uma caixa de diálogo separada para o nome,
e **Espaço de cores**, **Profundidade de bits** e **Mesclagem** ficam agrupados em
**Cor**.
