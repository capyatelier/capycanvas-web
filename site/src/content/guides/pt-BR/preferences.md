---
title: "Preferências"
description: "A caixa de diálogo Preferências e as configurações das páginas Aparência, Tela, Cor e Sobre."
related: ["input/pen", "input/keyboard", "customize/zen", "color-management/color-spaces"]
---

Você pode alterar as configurações do aplicativo inteiro na caixa de diálogo
**Preferências**. Cada alteração é aplicada e salva na hora.

![A caixa de diálogo Preferências na página Aparência.](shot:preferences/appearance)

## Abrir as Preferências

Faça uma das seguintes ações:

- Escolha **Editar > Preferências**. No macOS, escolha **Settings…** no menu do aplicativo.
- Pressione **Ctrl+,**.
- Em Pintura e Foto, selecione o botão de engrenagem na extremidade direita da barra de título.
- Digite "Preferências" na [busca de comandos](/pt-BR/docs/start/command-search/).

As Preferências abrem na página **Aparência**. **Ajuda > Atalhos de teclado** as
abre em **Atalhos de teclado**, e **Ajuda > Sobre o Capy Canvas**, em **Sobre**.

Com as Preferências abertas, os atalhos da tela, os botões da caneta e os toques
com os dedos não fazem nada.

## Buscar nas preferências

Selecione **Buscar preferências** no alto da barra lateral ou comece a digitar em
qualquer lugar fora de um campo de texto.

A busca também encontra atalhos de teclado, botões da caneta e toques com os
dedos. Selecionar um atalho abre o editor desse atalho. Em outros idiomas, a busca
também encontra os nomes em inglês.

![Resultados da busca por "cursor" na barra lateral das Preferências.](shot:preferences/search)

## Restaurar uma configuração

No editor web e no aplicativo para Linux, clique com o botão direito em uma
configuração, ou mantenha-a pressionada com o dedo ou a caneta, e escolha
**Restaurar padrão**. O item de menu mostra o valor padrão. Ele fica indisponível
enquanto a configuração está no valor padrão.

Apagar um campo numérico ou um campo de cor hex também restaura o padrão.

![O menu Restaurar padrão da configuração Cor base do tema escuro.](shot:preferences/reset-menu)

## Aparência

As cores base e a cor de destaque alteram só a interface, nunca o desenho.

### Idioma

Define o idioma da interface. **Usar idioma do sistema** é o padrão, e cada
idioma aparece com o próprio nome.

### Tema de cores

Escolha **Sistema** (o padrão), **Claro** ou **Escuro**. O comando **Modo escuro**
na busca de comandos alterna entre **Claro** e **Escuro**.

### Transparência dos painéis

Define quanto da arte desfocada aparece através dos painéis e das barras:
**Desligado**, **Baixo** (o padrão), **Médio** ou **Alto**. Consulte [Painéis e
colunas](/pt-BR/docs/customize/panels/).

### Cor base do tema escuro

Define o cinza da interface no tema escuro. Escolha uma amostra ou
**Personalizado** para digitar uma cor hex de seis dígitos.

### Cor base do tema claro

Define o cinza da interface no tema claro, com as mesmas opções.

### Cor de destaque

**Sistema** usa a cor de destaque do sistema operacional. É o padrão no Linux, no
Windows, no macOS e no Android, e não é oferecida no editor web nem no iPad. As
outras opções são **Azul** (o padrão no editor web e no iPad), **Verde azulado**,
**Verde**, **Amarelo**, **Laranja**, **Vermelho**, **Rosa**, **Roxo**,
**Ardósia** e **Personalizado**.

### Mostrar Capy no modo Zen

Mantém o botão Capy na tela no [modo Zen](/pt-BR/docs/customize/zen/). Ativado por
padrão.

### Revelar painéis perto das bordas da tela

Mostra os controles ocultos no modo Zen enquanto o ponteiro está perto de uma
borda da tela com controles ocultos. Desativado por padrão.

### Ícone do botão

Define a imagem do botão Capy: **Olhando para cima** (o padrão), **Olhando para
frente**, **Tomando banho** ou **Dormindo**.

## Tela

### Velocidade de deslocamento com rolagem

Define a escala do deslocamento da tela com a roda do mouse, o trackpad e o
analógico esquerdo de um controle de jogo, de 0,25 × a 4,00 × (padrão 1,00 ×).

### Velocidade de zoom com rolagem

Define a escala do zoom com **Ctrl** e a roda do mouse, ou com o analógico direito
de um controle de jogo, de 0,25 × a 4,00 × (padrão 1,00 ×).

### Usar Atravessar para novos grupos

Define os novos grupos como [Atravessar](/pt-BR/docs/layers/blend-modes/).
Desativado por padrão. Os grupos existentes não mudam.

## Cor

As configurações de **Novos desenhos** valem para os [desenhos que você
criar](/pt-BR/docs/files/new/) a partir daí. As configurações de **Abertura de
fotos** valem para as fotos que você abrir.

![A página Cor das Preferências.](shot:preferences/color)

### Espaço de cores

Escolha **sRGB** (o padrão), **Display P3**, **Adobe RGB (1998)** ou **ProPhoto
RGB**.

### Profundidade de bits

Escolha **SDR de 8 bits** (o padrão), **SDR de 16 bits**, **HDR de 16 bits em
ponto flutuante** ou **HDR de 32 bits em ponto flutuante**.

### Fundo

Escolha **Branco** (o padrão) ou **Transparente**.

### Precisão de edição

**Profundidade da origem** (o padrão) mantém a profundidade de bits da própria
foto. **16 bits** abre as fotos de 8 bits como 16 bits, e as fotos em ponto
flutuante continuam em ponto flutuante.

### RGB e escala de cinza sem perfil

Define como abrem as fotos sem perfil de cor: **Assumir sRGB** (o padrão) ou
**Perguntar**. As fotos com perfil mantêm o perfil.

### Gerenciar perfis…

Abre a biblioteca de perfis de cor. Consulte [Espaço de cores, profundidade de
bits e mesclagem](/pt-BR/docs/color-management/color-spaces/).

## Caneta e entrada

As configurações desta página estão descritas em [Caneta](/pt-BR/docs/input/pen/)
e [Gestos de toque](/pt-BR/docs/input/touch/).

## Atalhos de teclado

O mapa de atalhos, as teclas modificadoras e os atalhos desta página estão
descritos em [Atalhos de teclado](/pt-BR/docs/input/keyboard/).

## Sobre

A página **Sobre** lista as linhas **Versão**, **Licença do aplicativo**,
**Renderização da tela**, **Site**, **Código-fonte** e **Dedicado a**.

## Onde as preferências ficam guardadas

Cada dispositivo guarda as próprias preferências. No aplicativo web, as
preferências pertencem ao navegador e são compartilhadas por todas as abas dele.
Para levar teclas, teclas modificadoras, botões da caneta e toques com os dedos
para outro dispositivo, exporte um mapa de atalhos na página [Atalhos de
teclado](/pt-BR/docs/input/keyboard/).
