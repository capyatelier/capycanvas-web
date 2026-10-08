---
title: "Paletas"
description: "Como salvar cores em paletas e pintar com as cores salvas e recentes no painel Paletas."
related: ["color/color-panel", "color/edit-color", "color/eyedropper"]
---

Você pode salvar cores em paletas e pintar com elas pelo painel **Paletas**. As
paletas e as cores recentes são as mesmas em todas as áreas de trabalho.

![O painel Paletas com as cores recentes no alto, as amostras da paleta ativa e, embaixo, o nome da paleta e o nome da cor.](shot:color/palettes-panel)

## Abrir o painel Paletas

Faça uma das seguintes ações:

- Escolha **Janela > Paletas**.
- Escolha **Painel Paletas** na busca de comandos.
- Em Pintura, selecione a aba **Paletas** ao lado de **Cor**.
- Selecione **Cor do pincel** no fim da barra de ferramentas Ferramentas ou, em Esboço, na extremidade direita da barra de título. Paletas fica abaixo do painel Cor na gaveta.
- No Windows, no Linux e no Android, clique com o botão direito ou mantenha pressionada a amostra de primeiro plano ou de fundo no painel Cor e escolha **Paletas…**.

## Cores recentes

A linha de cima mostra até 64 cores que você usou na arte, das mais novas para as
mais antigas. Selecione uma cor recente para pintar com ela. Selecione **Expandir
histórico de cores** (a seta no fim da linha) para mostrar até quatro linhas.

Uma cor é adicionada quando um traço, preenchimento, degradê ou forma a usa.
Capturar uma cor, apagar, pintar uma máscara e usar Misturar ou Liquefazer não
adicionam nada. Desfazer não remove uma cor recente.

## Pintar com uma cor salva

Selecione uma amostra para pintar com a cor dela ou, enquanto edita uma máscara,
para definir a cor da máscara. A amostra que corresponde à cor atual fica
contornada.

## Adicionar uma cor

Selecione **+** depois da última amostra para salvar a cor de tinta atual na
paleta. A amostra guarda a cor exata, incluindo o espaço de cores, o alfa e a
intensidade HDR. **+** fica indisponível enquanto **Pintura transparente** está
selecionada.

## Dar nome às cores

O nome da cor atual fica no canto inferior direito do painel, com o código hex
como prévia em sRGB. Uma cor com intensidade HDR também mostra a intensidade, por
exemplo "+1.0 EV". Uma cor não salva mostra um nome sugerido, como "Verde azulado"
ou "Terra de sombra".

Selecione o nome para digitar outro e pressione **Enter** para confirmar ou
**Escape** para cancelar. Uma cor não salva recebe o nome quando você a salva com
**+**. Em uma amostra salva, o novo nome substitui o antigo.

Os nomes têm de 1 a 64 caracteres e são únicos dentro de uma paleta.

## Organizar e remover cores

Arraste uma amostra para movê-la. Solte fora da grade ou pressione **Escape** para
cancelar o movimento.

Clique com o botão direito ou mantenha pressionada uma amostra (ou pressione
**Shift+F10**) para ver estes comandos:

- **Rename Color…**
- **Remove Color**
- **Desfazer reordenação de cores** e **Refazer reordenação de cores**

Com o foco no painel, **Ctrl+Z** e **Ctrl+Shift+Z** (ou **Ctrl+Y**) desfazem e
refazem as reordenações. Adicionar ou remover uma amostra apaga o histórico de
reordenação da paleta.

## Escolher uma paleta

Selecione o nome da paleta no canto inferior esquerdo do painel para abrir a lista
de paletas. Digite em **Encontrar uma paleta** para filtrar a lista e selecione
uma paleta para torná-la ativa.

![A lista de paletas com o campo de busca, o botão + e o nome e as cores de cada paleta.](shot:color/palettes-chooser)

## Novas paletas

Selecione **+** na lista de paletas e escolha **New Palette…**. Uma paleta que
fica sem nome se chama "Nova paleta".

A biblioteca comporta até 64 paletas e 4.096 cores no total.

## Renomear e remover paletas

Clique com o botão direito ou mantenha pressionada uma paleta na lista de paletas
e escolha **Rename Palette…** ou **Remove Palette…**. Não é possível remover a
última paleta.

## Importar e exportar paletas

Para importar um arquivo de paleta, selecione **+** na lista de paletas e escolha
**Import Palette…**. O {appName} lê arquivos `.capycolor`, `.aco`, `.cls`,
`.swatches`, `.ase`, `.afpalette`, `.gpl`, `.kpl` e `.json` de até 1 MB. O arquivo
vira uma nova paleta com o nome guardado no arquivo ou com o nome do arquivo.

Para exportar uma paleta, clique com o botão direito ou mantenha-a pressionada na
lista de paletas, escolha **Export Palette** e depois um formato:

- **Capycolor (.capycolor)** guarda as cores exatas, incluindo o espaço de cores, o alfa e a intensidade HDR.
- **Clip Studio Paint, Photoshop (.aco)**, **Procreate (.swatches)**, **Affinity, Adobe (.ase)** e **Krita, GIMP (.gpl)** salvam cores sRGB opacas. As cores fora do sRGB são cortadas. Um arquivo do Procreate guarda as primeiras 30 cores.

O painel informa quantas cores foram cortadas ou ficaram opacas.

![O menu da paleta com os formatos de Export Palette.](shot:color/palettes-menu)

## Paletas iniciais

O {appName} vem com Estudo do oceano, Fliperama em pixels, Fantasia sombria,
Pop art, Doces em tons pastel, Impressão risográfica, Synthwave, Impressão dos
anos 70, Xilogravura e Tinta. Você pode alterar as paletas iniciais como qualquer
outra paleta. Uma paleta inicial removida não volta.
