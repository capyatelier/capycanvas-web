---
title: "Réguas e guias"
description: "Guias que mantêm os traços de pincel em linhas retas, e como endireitar a imagem por uma guia."
related: ["drawing/figure", "transform/crop", "transform/move-transform", "drawing/brush-tools"]
---

Você pode colocar guias na tela que mantêm os traços de pincel em linhas retas.
As guias são salvas no arquivo `.capy` e não aparecem nas imagens exportadas.

## Ferramenta Régua

Faça uma das seguintes ações:

- Pressione **Shift+U**.
- Em Pintura, selecione **Régua** na barra de ferramentas Ferramentas. Clique com o botão direito no botão ou mantenha-o pressionado para escolher **Reta**, **Paralela** ou **Radial**.
- Busque **Régua** na busca de comandos.

Esboço e Foto não têm o botão Régua. Você pode adicioná-lo com **Inserir
ferramentas…** ([Barras de ferramentas e barra de título](/pt-BR/docs/customize/toolbars/)).

Arraste sobre uma parte vazia da tela para adicionar uma guia, ou clique para
adicionar uma guia Radial. Mantenha **Shift** pressionada ao arrastar para girar
uma guia Reta ou Paralela em passos de 45°.

Arraste a alça de uma guia para alterar o ângulo e o comprimento, ou arraste a
linha para mover a guia inteira.

- Pressione **Escape** para cancelar um arrasto.
- Adicionar, mover e excluir uma guia são passos de desfazer.
- Com as guias ocultas, um arrasto adiciona uma nova guia e mostra todas as guias de novo.
- Recortar, Tamanho da imagem, Tamanho da tela, girar e inverter movem as guias junto com a imagem.

## Tipos de guia

![Guias Reta, Paralela e Radial na tela, com linhas tracejadas, alças quadradas e a cruz da guia radial.](shot:drawing/ruler-guides)

As guias Reta e Paralela são linhas tracejadas com um quadrado em cada alça. Uma
guia Radial é um quadrado com uma cruz tracejada. Uma guia selecionada tem alças
maiores.

Só os traços das ferramentas de pincel seguem as guias.

### Reta

Um traço que começa a até 12 pixels de tela da linha da guia segue essa linha. A
linha se estende pela tela inteira.

### Paralela

Todo traço corre paralelo à guia a partir do ponto onde você pressiona.

### Radial

Os traços apontam para o centro da guia. Cada um segue a linha que vai do centro
até o ponto onde você pressiona.

## Que guia um traço segue

Uma guia Reta próxima tem prioridade sobre as guias Paralela e Radial. Entre
várias guias Paralela e Radial, vence aquela cuja primeira alça ou cujo centro
estiver mais perto do início do traço.

## Mostrar guias e encaixar

Você pode ocultar as guias ou desativar o encaixe.

Faça uma das seguintes ações:

- Escolha **Exibir > Mostrar réguas** ou **Exibir > Encaixar nas réguas**.
- Com a ferramenta Régua ativa, ou com uma guia selecionada com Operação, selecione **Mostrar réguas** ou **Encaixar nas réguas** no painel **Ferramenta**.
- Selecione **Guias** ou **Encaixar** na barra da guia.

As duas opções vêm ativadas por padrão. **Encaixar nas réguas** fica indisponível
enquanto as guias estão ocultas.

## Excluir uma guia

Selecione a guia e faça uma das seguintes ações:

- Pressione **Excluir** ou **Backspace**.
- Selecione **Excluir régua** no painel **Ferramenta**.
- Selecione **Excluir** na barra da guia.

**Excluir** e **Backspace** só excluem uma guia quando a ferramenta ativa é Régua,
Forma, Operação, Transformar ou Recortar. Com outras ferramentas, essas teclas
executam **Limpar pixels selecionados**.

## Barra da guia

Quando você seleciona uma guia com a ferramenta Régua ou Operação, uma barra
aparece abaixo das alças.

| Botão | Ação |
| --- | --- |
| **Excluir** | Exclui a guia. |
| **Encaixar** | Ativa ou desativa **Encaixar nas réguas**. |
| **Guias** | Mostra ou oculta todas as guias. Ocultá-las também oculta a barra. |
| **Endireitar** | Inicia **Endireitar imagem pela guia**. Só para uma guia Reta. |

Desativar **Exibir > Mostrar barra de ações da tela** remove a barra da guia.

![A barra da guia abaixo de uma guia Reta selecionada, com Excluir, Encaixar, Guias e Endireitar.](shot:drawing/ruler-guide-bar)

## Mover guias com Operação

Com a ferramenta [Operação](/pt-BR/docs/transform/move-transform/), arraste a alça
ou a linha de uma guia para mover a guia em vez da camada. Operação nunca adiciona
guias.

## Endireitar imagem pela guia

Você pode nivelar a imagem por uma guia Reta.

Selecione uma guia Reta e faça uma das seguintes ações:

- Selecione **Endireitar** na barra da guia.
- Busque **Endireitar imagem pela guia** na busca de comandos.

A ferramenta Recortar abre com o quadro girado de modo que a guia fique na
horizontal ou na vertical, o que estiver mais próximo. Aplique o recorte para
girar a imagem ([Recortar](/pt-BR/docs/transform/crop/)).
