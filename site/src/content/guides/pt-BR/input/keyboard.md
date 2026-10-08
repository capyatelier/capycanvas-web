---
title: "Atalhos de teclado"
description: "A página Atalhos de teclado das Preferências e as teclas padrão."
related: ["input/pen", "input/touch", "start/command-search", "preferences"]
---

Você pode alterar as teclas de comandos, ferramentas e pincéis na página **Atalhos
de teclado** das Preferências.

No macOS e no iPad, Command substitui Ctrl, e Option é a tecla Alt. O aplicativo
web mostra Ctrl em qualquer computador e, em um Mac, Command funciona como Ctrl.

![A página Atalhos de teclado com o grupo Mapa de atalhos e as categorias.](shot:keyboard/page)

## Abrir Atalhos de teclado

Faça uma das seguintes ações:

- Escolha **Ajuda > Atalhos de teclado**.
- Pressione **Ctrl+Shift+?**.
- Escolha **Editar > Preferências** e selecione **Atalhos de teclado**.

## Predefinições de mapa de atalhos

Você pode usar teclas inspiradas em outro aplicativo. Escolha uma **Predefinição**
em **Mapa de atalhos**: **{appName}** (o padrão), **Estilo Photoshop**, **Estilo
Krita**, **Estilo Clip Studio Paint**, **Estilo Procreate**, **Estilo GIMP** ou
**Estilo Affinity**.

Uma predefinição altera só algumas teclas e mantém as teclas que você mesmo
alterou. **Diferenças…**, no menu **Opções do mapa de atalhos** (**⋯**), lista o
que a predefinição não consegue reproduzir do aplicativo de origem.

![O menu Opções do mapa de atalhos.](shot:keyboard/keymap-menu)

## Encontrar um atalho

Digite o nome de um comando ou uma tecla em **Busque ou pressione um atalho**, ou
pressione a própria tecla no campo. Uma única letra encontra teclas, não nomes.

Para ver o que as teclas fazem com um tipo de ferramenta, escolha-o na lista
**Todas as ferramentas**, por exemplo **Ferramentas de Seleção**. A lista **Todas
as ações**, ao lado, restringe as linhas a **Com atalhos** ou **Personalizados**.

## Alterar um atalho

Para adicionar uma tecla a um comando:

1. Selecione o comando em uma categoria ou nos resultados da busca.
2. Selecione **Adicionar atalho**.
3. Pressione a tecla ou a combinação.
4. Selecione **Adicionar**.

Se outro comando usar a tecla, o editor indica esse comando e o botão vira
**Reatribuir**. **Reatribuir** passa a tecla para o comando que você está editando.

Um comando pode ter até quatro teclas. O botão de excluir ao lado de uma tecla
remove essa tecla, e **Restaurar padrão** restaura as teclas padrão.

Dois comandos só podem compartilhar uma tecla quando um deles funciona em um
contexto mais restrito, como com determinadas ferramentas. Esse comando fica com a
tecla enquanto pode ser executado.

![O editor de atalhos oferecendo reatribuir uma tecla que outro comando usa.](shot:keyboard/editor-reassign)

## Teclas modificadoras

Você pode fazer uma tecla funcionar só enquanto estiver pressionada. Por padrão,
**Espaço** desloca a tela. **Alt** captura uma cor com as ferramentas de desenho,
mistura, preenchimento e degradê, e define a origem com as ferramentas de retoque.

Para adicionar uma tecla modificadora:

1. Abra **Teclas modificadoras** e selecione **Adicionar tecla modificadora**.
2. Pressione a tecla e selecione **Adicionar**. A página da tecla abre.
3. Selecione **Ação** e escolha uma ação, ou desative **Igual para todas as ferramentas** e escolha uma para cada tipo de ferramenta.

Para alterar uma tecla modificadora depois, selecione-a em **Teclas
modificadoras**. A página dela também tem **Remover tecla modificadora**.

Qualquer tecla, exceto **Escape**, pode ser uma tecla modificadora, inclusive uma
combinação como **Shift+Espaço**. Uma tecla não pode ser ao mesmo tempo tecla
modificadora e atalho.

![A categoria Teclas modificadoras com Espaço e Alt.](shot:keyboard/modifier-keys)

## Pressionar ou manter pressionada uma tecla de ferramenta

Pressione e solte uma tecla de ferramenta para trocar de ferramenta. Mantenha a
tecla pressionada enquanto desenha, e a ferramenta anterior volta quando você a
solta. As teclas de pincel e as teclas de modo, como **Modo Zen**, funcionam da
mesma forma.

**Desfazer**, **Refazer** e as teclas de tamanho do pincel se repetem enquanto
pressionadas.

## Importar e exportar mapas de atalhos

Escolha **Exportar…** no menu **Opções do mapa de atalhos** para salvar suas
teclas, teclas modificadoras, toques com os dedos e botões da caneta como um
arquivo `.capykeys`. **Importar…** carrega um arquivo desses depois de mostrar o
que ele adiciona, altera e remove. Nada muda até você selecionar **Importar**.

## Redefinir todos os atalhos

**Redefinir todos os atalhos**, no menu **Opções do mapa de atalhos**, apaga suas
alterações em teclas, teclas modificadoras, toques com os dedos e botões da caneta.
A predefinição continua.

> **Observação:** **Redefinir todos os atalhos** não pede confirmação e não pode ser desfeito.

## Teclas no aplicativo web

O navegador reserva algumas teclas, como **F11** e **Ctrl+W**, que não podem ser
atribuídas no aplicativo web. **Transformar**, **Novo…**, **Fechar** e **Tela
cheia** não têm tecla ali, e **Buscar comandos…** usa só **Ctrl+K**.

## Outros botões

Você pode atribuir estes botões como se fossem teclas:

- botões de controle de jogo, no Windows, no macOS, no iPad, no Android e no editor web
- botões do painel da mesa digitalizadora, no Linux e no Android
- teclas de mídia e de volume, no Windows, no Linux, no Android e no editor web

O analógico esquerdo de um controle de jogo desloca a tela, e o analógico direito
altera o zoom.

## Teclas padrão

**P**, **B**, **J** e **S** selecionam, cada uma, uma família de ferramentas.
Pressione a tecla de novo para passar à próxima ferramenta da família.

| Ferramenta | Tecla |
| --- | --- |
| **Caneta / Lápis** | **P** |
| **Ferramentas de pintura** (**Pincel de pintura**, **Aerógrafo**, **Decoração**) | **B** |
| **Misturar / Liquefazer** | **J** |
| **Ferramentas de retoque** (**Carimbo de clonagem**, **Pincel de correção**, **Pincel de correção pontual**) | **S** |
| **Borracha** | **E** |
| **Seleção por laço** | **M** |
| **Seleção automática** | **W** |
| **Preencher** | **F** |
| **Degradê** | **G** |
| **Forma** | **U** |
| **Régua** | **Shift+U** |
| **Operação** | **O** |
| **Transformar** | **Ctrl+T** |
| **Recortar** | **C** |
| **Mão** | **H** |
| **Conta-gotas** | **I** |
| **Deslocar** enquanto pressionado | **Espaço** |
| **Amostrar cor** ou **Definir origem** enquanto pressionado | **Alt** |
| **Diminuir tamanho do pincel**, **Aumentar tamanho do pincel** | **[**, **]** |
| **Máscara rápida** | **Q** |

| Comando | Tecla |
| --- | --- |
| **Desfazer** | **Ctrl+Z** |
| **Refazer** | **Ctrl+Shift+Z**, **Ctrl+Y** |
| **Desfazer alteração de layout** | **Ctrl+Alt+Z** |
| **Refazer alteração de layout** | **Ctrl+Alt+Shift+Z** |
| **Recortar**, **Copiar**, **Colar** | **Ctrl+X**, **Ctrl+C**, **Ctrl+V** |
| **Copiar mesclado** | **Ctrl+Shift+C** |
| **Colar no lugar** | **Ctrl+Shift+V** |
| **Selecionar todos os pixels** | **Ctrl+A** |
| **Desmarcar pixels** | **Ctrl+D** |
| **Selecionar novamente** | **Ctrl+Shift+D** |
| **Inverter seleção** | **Ctrl+Shift+I** |
| **Redefinir para preto / branco** | **D** |
| **Preencher seleção** | **Shift+Backspace** |
| **Limpar pixels selecionados** | **Excluir**, **Backspace** |
| **Copiar seleção para nova camada** | **Ctrl+J** |
| **Recortar seleção para nova camada** | **Ctrl+Shift+J** |
| **Mesclar abaixo** | **Ctrl+E** |
| **Ajustar tela** | **Ctrl+0** |
| **Pixels reais** | **Ctrl+1**, **Ctrl+Alt+0** |
| **Ampliar**, **Reduzir** | **Ctrl+=**, **Ctrl+-** |
| **Cores de prova** | **Ctrl+Alt+P** |
| **Aviso de gama** | **Ctrl+Shift+Y** |
| **Modo Zen** | **Tab** |
| **Tela cheia** | **F11** |
| **Novo…** | **Ctrl+N** |
| **Nova janela** | **Ctrl+Shift+N** |
| **Abrir…** | **Ctrl+O** |
| **Importar imagem como camada…** | **Ctrl+Shift+O** |
| **Salvar** | **Ctrl+S** |
| **Salvar como…** | **Ctrl+Shift+S** |
| **Exportar…** | **Ctrl+Shift+E** |
| **Fechar** | **Ctrl+W** |
| **Buscar comandos…** | **Ctrl+K**, **Ctrl+Shift+P** |
| **Preferências** | **Ctrl+,** |
| **Atalhos de teclado** | **Ctrl+Shift+?** |

**Nova camada**, **Trocar cores** e as outras ferramentas de seleção não têm tecla
padrão.
