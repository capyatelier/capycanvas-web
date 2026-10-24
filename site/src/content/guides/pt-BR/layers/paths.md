---
title: "Editar caminhos"
description: "Como selecionar, mover, remodelar e mudar o estilo dos caminhos de uma camada vetorial."
related: ["layers/vector", "drawing/figure", "transform/move-transform", "layers/types"]
---

Você pode editar os caminhos de uma [camada vetorial](/pt-BR/docs/layers/vector/) depois de desenhá-los.

## Selecionar e mover caminhos

Selecione um caminho com a ferramenta **Operação** ([Mover e Transformar](/pt-BR/docs/transform/move-transform/)). Mantenha **Shift** pressionada para adicionar ou remover caminhos. Arraste pela tela vazia para selecionar os caminhos que o retângulo envolve por inteiro, ou pressione **Ctrl+A** para selecionar todos os caminhos.

![O painel Ferramenta de Operação com um caminho selecionado, com os botões Organizar, os botões de espelhar e girar e Redimensionar a largura do contorno.](shot:vector/operation-settings)

Uma caixa tracejada com alças envolve a seleção.

- Arraste um caminho selecionado para movê-lo. Mantenha **Alt** pressionada para mover uma cópia.
- Arraste uma alça para dimensionar, ou a alça acima da caixa para girar. **Shift** mantém as proporções ou gira em passos de 15°.
- As teclas de seta deslocam 1 px, e 10 px com **Shift**.
- Os botões de espelhar e girar do painel **Ferramenta** giram a seleção em torno do centro dela.
- **Excluir** remove os caminhos selecionados.

**Redimensionar a largura do contorno** no painel **Ferramenta** vem ativado por padrão. Desative para dimensionar os caminhos e manter a largura dos contornos.

## Editar pontos

Você pode mover, adicionar e excluir as âncoras dos caminhos selecionados.

Faça uma das seguintes ações:

- Pressione **A**.
- Com **Operação**, pressione **Enter** ou clique duas vezes em um caminho.
- Em Pintura e Foto, clique com o botão direito ou mantenha pressionado **Operação / Transformar / Editar pontos** na barra de ferramentas Ferramentas e escolha **Editar pontos**.

Quadrados marcam as âncoras, e as âncoras selecionadas mostram as alças delas. Pressione **Escape** para voltar a **Operação**.

![Editar pontos em um caminho, com as âncoras e as alças selecionadas.](shot:vector/edit-points)

- Clique em uma âncora para selecioná-la, clique com **Shift** para adicionar ou remover uma, ou arraste pela tela vazia para selecionar as âncoras de dentro.
- Arraste as âncoras para movê-las. Arraste uma alça para girar a curva, ou mantenha **Alt** pressionada para movê-la separada da outra.
- Arraste um segmento para curvá-lo. Clique em um segmento para adicionar uma âncora.
- Clique duas vezes em uma âncora para alternar entre canto e suave.
- **Excluir** remove as âncoras selecionadas.

Editar uma âncora transforma um retângulo ou uma elipse em um caminho comum.

## Comandos de caminho

Você pode unir, fechar, dividir, inverter e combinar os caminhos selecionados com **Editar > Caminho**. O painel **Ferramenta** de **Editar pontos** lista os quatro primeiros.

- **Unir caminhos** conecta as pontas mais próximas de dois caminhos abertos, ou fecha um caminho aberto.
- **Fechar caminho** conecta as pontas de cada caminho aberto selecionado.
- **Dividir no ponto** corta os caminhos selecionados nas âncoras selecionadas.
- **Inverter direção** percorre cada caminho no sentido contrário.
- **Criar caminho composto** combina os caminhos selecionados em um só, com furos onde eles se sobrepõem. **Liberar caminho composto** separa-os de novo.

Um comando que não pode agir informa o que selecionar, por exemplo “Selecione um ou dois caminhos abertos para unir”.

## Organizar

Você pode mudar a ordem de empilhamento dos caminhos selecionados dentro da camada deles com **Editar > Organizar**: **Trazer para a frente**, **Avançar**, **Recuar** e **Enviar para trás**. O painel **Ferramenta** de **Operação** tem os mesmos botões.

## Configurações do caminho

Com caminhos selecionados, **Propriedades** mostra o caminho selecionado que está mais à frente. Um rótulo termina em “(misto)” quando os caminhos selecionados diferem, e uma mudança vale para todos os caminhos selecionados.

![O painel Propriedades de um caminho com preenchimento e contorno.](shot:vector/path-properties)

### Preenchimento

Ativa ou desativa o preenchimento. Um preenchimento novo usa a cor de fundo.

### Cor do preenchimento

Define a cor do preenchimento.

### Sobreposições

Define como as partes sobrepostas são preenchidas. **Preenchidas** as preenche, e **Furos** as deixa vazias. Aparece quando **Preenchimento** está ativado.

### Contorno

Ativa ou desativa o contorno. Um contorno novo usa a cor de primeiro plano.

### Cor do contorno

Define a cor do contorno.

### Largura do contorno

Define a largura do contorno, de 0,1 a 4096 px.

### Pontas

Define a forma das pontas abertas: **Retas**, **Arredondadas** ou **Quadradas**.

### Cantos

Define a forma do contorno nos cantos: **Agudos**, **Arredondados** ou **Chanfrados**.

### Limite de cantos agudos

Define até onde um canto agudo pode crescer, de 1 a 20. Passado o limite, o canto é chanfrado. Aparece quando **Cantos** está em **Agudos**.
