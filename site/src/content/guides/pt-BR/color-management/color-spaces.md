---
title: "Espaço de cores, profundidade de bits e mesclagem"
description: "Como escolher o espaço de cores, a profundidade de bits e a Mesclagem de um desenho e como alterá-los depois pelo menu Editar."
related: ["files/new", "color-management/proof", "color-management/hdr", "files/export", "preferences"]
---

Você pode escolher o espaço de cores, a profundidade de bits e a Mesclagem de um
desenho ao criá-lo e alterá-los depois pelo menu **Editar**.

## Espaços de cores

O espaço de cores de trabalho de um desenho é **sRGB**, **Display P3**, **Adobe
RGB (1998)** ou **ProPhoto RGB**. O ProPhoto RGB usa ponto branco D50, e os outros
três usam D65.

Perfis ICC não podem ser espaços de trabalho. Você pode usá-los para a [prova de
impressão](/pt-BR/docs/color-management/proof/) e a [exportação](/pt-BR/docs/files/export/).

## Profundidades de bits

A profundidade de bits de um desenho é **SDR de 8 bits**, **SDR de 16 bits**,
**HDR de 16 bits em ponto flutuante** ou **HDR de 32 bits em ponto flutuante**.
Uma profundidade em ponto flutuante cria um [desenho
HDR](/pt-BR/docs/color-management/hdr/), armazenado como RGB linear em que 1,0 é o
branco SDR a 203 cd/m².

## Escolher para um desenho novo

Escolha **Arquivo > Novo…** (**Ctrl+N**) e defina **Espaço de cores**,
**Profundidade de bits** e **Mesclagem**, ou escolha uma **Predefinição**:

| Predefinição | Espaço de cores | Profundidade de bits | Mesclagem |
| --- | --- | --- | --- |
| **Desenho padrão** | sRGB | SDR de 8 bits | Perceptual |
| **Cores amplas** | Display P3 | SDR de 8 bits | Perceptual |
| **Edição de fotos** | ProPhoto RGB | SDR de 16 bits | Perceptual |
| **Desenho HDR** | sRGB | HDR de 16 bits em ponto flutuante | Luz linear |

Com uma profundidade em ponto flutuante, **Mesclagem** fica fixa em Luz linear.
Ative **Usar estas configurações para novos desenhos** para tornar essas escolhas,
incluindo a Mesclagem, o padrão dos novos desenhos.

![A caixa de diálogo Novo desenho com Espaço de cores definido como Display P3, Profundidade de bits, Mesclagem e a linha de resumo.](shot:color-management/new-dialog-color)

## Padrões em Preferências

Escolha **Editar > Preferências** e abra a página **Cor**:

- Em **Novos desenhos**, defina **Espaço de cores**, **Profundidade de bits** e **Fundo** dos desenhos futuros. Os desenhos abertos não mudam.
- Em **Abertura de fotos**, defina **Precisão de edição** (**Profundidade da origem** ou **16 bits**) e **RGB e escala de cinza sem perfil** (**Assumir sRGB** ou **Perguntar**). Com **Perguntar**, abrir uma foto sem perfil mostra **Escolher interpretação da imagem**. As fotos com perfil mantêm os perfis incorporados.
- Selecione **Gerenciar perfis…** para abrir a [Biblioteca de perfis de cor](/pt-BR/docs/color-management/proof/).

Preferências não tem configuração de Mesclagem.

## Atribuir perfil

Escolha **Editar > Atribuir perfil…** para manter os números RGB do desenho e
interpretá-los em outro espaço de trabalho. Escolha o espaço em **Espaço de
cores**, onde o Adobe RGB (1998) aparece como **Adobe RGB**. As camadas de foto
mantêm o perfil de origem da [foto original](/pt-BR/docs/layers/types/).

## Converter espaço de cores

Escolha **Editar > Converter espaço de cores…** para alterar os números RGB de
modo que as cores mantenham a aparência em outro espaço de trabalho, dentro da
gama dele.

Com **Salvar cópia achatada**, **Aplicar** vira **Salvar cópia…**. A cópia tem uma
só camada, com o mesmo tamanho e a mesma profundidade de bits. O nome do arquivo
precisa terminar em `.capy` e não pode ser o arquivo do desenho aberto.

![A caixa de diálogo Converter espaço de cores com a comparação Antes e Depois e a mensagem sobre a gama.](shot:color-management/convert-dialog)

### Espaço de cores

O espaço de trabalho de destino. De início, o espaço atual fica selecionado.

### Resultado

**Camadas editáveis** (padrão) converte cada camada no lugar. **Salvar cópia
achatada** salva uma cópia convertida e achatada como um novo arquivo `.capy` e
deixa o desenho aberto inalterado.

### Intenção de renderização

**Colorimétrica relativa** (padrão), **Perceptual**, **Saturação** ou
**Colorimétrica absoluta**. A compensação de ponto preto fica sempre desativada.

## Alterar profundidade de bits

Escolha **Editar > Alterar profundidade de bits…** para alterar a precisão
armazenada. O espaço de cores não muda.

Passar para uma profundidade em ponto flutuante torna o desenho HDR e define a
Mesclagem como Luz linear no mesmo passo. Voltar para uma profundidade inteira
mantém Luz linear até você alterar a [Mesclagem](#mesclagem). Reduzir a
profundidade pode cortar cores.

### Profundidade de bits

A nova profundidade de bits. De início, a profundidade atual fica selecionada.

### Pontilhamento

**Nenhum** (padrão) ou **Estocástico (8 bits)**. O pontilhamento só se aplica
quando o destino é SDR de 8 bits.

## Visualizar e aplicar

Para aplicar Atribuir perfil, Converter espaço de cores ou Alterar profundidade de
bits:

1. Defina os campos na caixa de diálogo.
2. Selecione **Visualizar resultado completo**.
3. Compare **Antes** e **Depois**.
4. Selecione **Aplicar** (ou **Salvar cópia…**).

**Aplicar** fica indisponível até a prévia ficar pronta, e alterar um campo
descarta a prévia. Se alguma cor for cortada, a linha de status diz "Algumas
cores excedem a gama de destino. Compare o resultado antes de aplicar."

Aplicar é um passo de desfazer. Desfazer e Refazer abrem **Desfazer alteração de
cor** e **Refazer alteração de cor**. Essas caixas de diálogo aplicam a alteração
sem pedir mais nada e oferecem só **Cancelar**.

## Mesclagem

Você pode combinar as camadas pelos valores codificados do desenho ou em luz
linear. Faça uma das seguintes ações:

- Escolha **Editar > Mesclagem > Mesclagem perceptual** ou **Editar > Mesclagem > Mesclagem em luz linear**.
- Defina **Mesclagem** como **Perceptual** ou **Luz linear** na caixa de diálogo Novo desenho.

![O menu Editar com o submenu Mesclagem aberto e Mesclagem perceptual marcada.](shot:color-management/edit-blending-menu)

Os pixels pintados mantêm os valores. A Mesclagem altera:

- como as camadas se combinam;
- como os pincéis secos depositam cor sobre a tinta existente;
- Desfoque gaussiano, Máscara de nitidez, Passa-alta, Suavização com preservação de bordas e Foco suave (Desfoque de movimento, Vinheta e Brilho difuso sempre funcionam em luz linear);
- o cinza neutro de **Nova camada de subexposição e superexposição**;
- [Separação de frequências…](/pt-BR/docs/retouch/dodge-burn/), que precisa de Perceptual.

Alterar a Mesclagem é um passo de desfazer. Os desenhos HDR sempre usam Luz
linear, e os dois itens de menu ficam indisponíveis. Os desenhos novos e as fotos
abertas de arquivos de imagem começam com Perceptual. As fotos que abrem com
profundidade em ponto flutuante e os arquivos `.capy` salvos antes de a Mesclagem
existir usam Luz linear.

## Propriedades do documento

Escolha **Arquivo > Propriedades do documento…** para ver **Tamanho da tela**,
**Espaço de cores de trabalho**, **Profundidade de bits**, **Mesclagem** e
**Metadados de resolução** do desenho. Os desenhos HDR acrescentam **Branco de
referência HDR**. Cada foto original do desenho acrescenta uma linha com o perfil
de origem. Não é possível alterar nada nessa caixa de diálogo.
