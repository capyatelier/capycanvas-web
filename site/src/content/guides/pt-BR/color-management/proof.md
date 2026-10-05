---
title: "Prova"
description: "A prova de cores de uma impressão no painel Prova, o aviso de gama e o indicador de tela no rodapé."
related: ["color-management/hdr", "color-management/color-spaces", "files/export", "start/canvas"]
---

Você pode ver como um desenho vai sair na impressão no painel **Prova**, sem
alterar a arte.

## Painel Prova

Faça uma das seguintes ações:

- Escolha **Janela > Prova**.
- Escolha **Painel Prova** na busca de comandos.
- Em Pintura e Foto, selecione a aba **Prova** ao lado de **Navegador**.

Selecione um modo no alto do painel:

- **Desligado** mostra o desenho normalmente.
- **SDR** mostra a versão SDR de um [desenho HDR](/pt-BR/docs/color-management/hdr/). Só os desenhos HDR têm esse modo.
- **Impressão** simula uma impressão com um perfil ICC.

A prova aparece na tela e no Navegador, nunca nas exportações nem no Histograma.
Escolher um modo não marca o desenho como alterado. Um desenho reaberto começa
com a prova desligada, mas mantém o perfil de impressão.

## Ativar e desativar a prova

Faça uma das seguintes ações:

- Escolha **Exibir > Prova**.
- Pressione **Ctrl+Alt+P**. Os mapas de atalhos Estilo Photoshop e Estilo Krita também usam **Ctrl+Y**.

A prova é ativada no último modo usado (de início, SDR para desenhos HDR e
Impressão para desenhos SDR). O painel Prova abre, e **Exibir > Prova** mostra uma
marca de seleção.

Na página [Atalhos de teclado](/pt-BR/docs/input/keyboard/), o comando se chama
**Cores de prova**. Você pode dar a ele uma tecla que só ativa a prova enquanto
estiver pressionada.

## Prova de impressão

Você pode simular uma impressão com um perfil ICC RGB, CMYK ou de cinza.
Selecione **Impressão** e escolha um **Perfil**. A prova não aparece na tela até
você escolher um perfil.

Com a prova de impressão ativada, o rodapé mostra "Prova: *perfil*". Se a prova
falhar, ele mostra "Prova indisponível", com o motivo na dica de ferramenta.

O perfil e as opções são salvos no desenho. Escolher um perfil marca o desenho
como alterado e é um passo de desfazer. Desfazer remove o perfil e desativa a
prova. Só o perfil de impressão ativo é salvo no arquivo `.capy`. Quando você
substitui o perfil salvo no desenho, o antigo é antes adicionado a **Perfis
salvos**. Os desenhos HDR recebem a prova a partir da versão SDR.

![O painel Prova na página Impressão, com Adobe RGB (1998) escolhido como perfil.](shot:color-management/proof-panel-print)

### Perfil

A lista tem o **Perfil do documento** salvo no desenho, os **Perfis salvos** da
biblioteca e os **Espaços de cores padrão**. **Adicionar perfil…** adiciona um
arquivo `.icc` ou `.icm` à biblioteca e o seleciona, e **Gerenciar perfis…** abre a
Biblioteca de perfis de cor.

### Simular

**Cores**, **Tinta preta** (padrão) ou **Papel e tinta**. **Papel e tinta** também
simula a tinta preta.

### Intenção

**Relativa** (padrão), **Perceptual**, **Saturação** ou **Absoluta**.

### Compensação de ponto preto

Ativada por padrão. Indisponível com **Absoluta**.

### Aviso de gama

A mesma opção do comando **Aviso de gama**, descrito abaixo.

## Biblioteca de perfis de cor

Selecione **Gerenciar perfis…** na lista **Perfil** ou na página **Cor** de
[Preferências](/pt-BR/docs/preferences/) para abrir a **Biblioteca de perfis de cor**.

- **Importar perfil ICC…** adiciona um arquivo `.icc` ou `.icm` de até 16 MiB.
- **Mostrar nos menus de perfil** e **Ocultar dos menus de perfil** escolhem quais perfis a lista **Perfil** oferece.
- **Remover** tira um perfil da biblioteca.

A biblioteca comporta até 128 perfis e 64 MiB no total.

## Aviso de gama

Você pode mostrar na tela, em cinza médio, as cores que o perfil de impressão não
consegue reproduzir. Faça uma das seguintes ações:

- Ative **Aviso de gama** na página Impressão do painel Prova.
- Pressione **Ctrl+Shift+Y**.
- Escolha **Aviso de gama** na busca de comandos.

O rodapé mostra "Prova: *perfil* · Aviso de gama". Com a simulação de impressão
desligada, mostra "Gama: *perfil*".

O aviso de gama só fica disponível depois que você escolhe um perfil de impressão.
Escolher **Desligado** ou **SDR**, ou desativar **Exibir > Prova**, desativa o
aviso. Enquanto ele está ativo, os desenhos HDR mostram a versão SDR.

## Indicador de tela

Um indicador à esquerda do rodapé avisa quando a tela não consegue mostrar o
desenho ou a prova com precisão. Selecione o indicador para abrir os detalhes e
selecione-o de novo ou pressione **Escape** para fechá-los.

| Indicador | Aparece quando |
| --- | --- |
| "Cores limitadas" | A tela não consegue mostrar algumas cores visíveis do desenho ou da prova. |
| "Pode diferir da impressão" | A prova de impressão ou o aviso de gama está ativo, e o Capy Canvas não consegue saber como a tela mostra as cores. |

Em um desenho HDR, o indicador também informa se a tela mostra HDR (consulte
[HDR](/pt-BR/docs/color-management/hdr/)).

![O indicador Cores limitadas no rodapé, com os detalhes e Destacar estas cores.](shot:color-management/screen-chip)

Ative **Destacar estas cores** nos detalhes para pintar de azul, na tela, as cores
limitadas. O destaque nunca é salvo.

Esboço oculta o rodapé por padrão. Para mostrá-lo, escolha **Janela > Personalizar
barra de título…** e ative **Mostrar rodapé**.
