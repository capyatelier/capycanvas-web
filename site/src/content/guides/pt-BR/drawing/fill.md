---
title: "Ferramentas de preenchimento"
description: "Como preencher áreas, formas à mão livre e regiões fechadas de uma camada com a cor atual."
related: ["drawing/gradient", "layers/settings", "selections/working", "drawing/brush-tools"]
---

Você pode preencher partes da camada selecionada com a cor atual usando
**Preencher**, **Preencher com laço** e **Contornar e preencher**. Cada
preenchimento é um passo de desfazer, e o **Bloqueio alfa** é respeitado.

Os preenchimentos pintam só a arte de uma camada, nunca uma máscara de camada nem
a máscara de um filtro. Em uma camada que um pincel não consegue pintar, um
preenchimento não pinta nada e um aviso informa o motivo
([Ferramentas de pincel](/pt-BR/docs/drawing/brush-tools/)).

## Selecionar uma ferramenta de preenchimento

Faça uma das seguintes ações:

- Pressione **F** para selecionar Preencher. As outras duas ferramentas não têm tecla padrão.
- Em Pintura, selecione **Preencher** na barra de ferramentas Ferramentas. Clique com o botão direito no botão ou mantenha-o pressionado para escolher outra ferramenta de preenchimento.
- Em Foto, clique com o botão direito ou mantenha pressionado o botão de degradê e preenchimento depois de **Liquefazer** na barra de ferramentas Ferramentas e escolha uma ferramenta.
- Com uma ferramenta de preenchimento ativa, selecione **Preencher** ou **Preencher com laço** no painel **Conjunto de ferramentas**. **Contornar e preencher** fica em **Preencher com laço**.
- Busque o nome da ferramenta na busca de comandos.

Esboço não tem botão de preenchimento.

## Preencher

Você pode preencher uma área contínua de cor semelhante clicando nela. **Origem**
define em quais pixels Preencher se baseia para encontrar a área.

- Uma seleção ativa limita o preenchimento à seleção.
- Na Máscara rápida ou em uma camada de seleção, Preencher preenche a máscara de seleção ([Máscara rápida](/pt-BR/docs/selections/quick-mask/)).

## Preencher com laço

Você pode desenhar uma forma à mão livre e preenchê-la com a cor atual. Arraste o
contorno na tela, e a forma é preenchida quando você solta.

Preencher com laço tem só a configuração **Opacidade**. Não está disponível na
Máscara rápida nem em uma camada de seleção.

## Contornar e preencher

Você pode preencher todas as regiões transparentes fechadas dentro de um laço que
você desenha. Contornar e preencher encontra as regiões nos pixels de **Origem**.

- Pressione **Escape** enquanto desenha para cancelar o laço.
- Um único desfazer remove tudo o que um laço preencheu.
- Uma seleção ativa limita o preenchimento à seleção.
- Contornar e preencher não está disponível enquanto você edita uma máscara de seleção ou uma máscara de camada.

## Origem

Você pode escolher em quais pixels Preencher e Contornar e preencher se baseiam
para encontrar a área. A tinta sempre vai para a camada selecionada.

- **Arte visível**: tudo o que está visível no desenho.
- **Camada em edição**: só a camada selecionada.
- **Camadas de referência**: as camadas marcadas com **Usar como referência** ([Configurações da camada](/pt-BR/docs/layers/settings/)).

Escolha a origem na lista abaixo das ferramentas em **Conjunto de ferramentas**,
para Preencher, ou no painel **Ferramenta**, para Contornar e preencher. A barra
Opções da ferramenta tem um menu **Origem** para as duas.

![O painel Conjunto de ferramentas com Preencher selecionado e as opções Arte visível, Camada em edição e Camadas de referência abaixo.](shot:drawing/fill-tool-set)

Cada ferramenta guarda sua própria origem. Preencher começa em **Arte visível**, e
Contornar e preencher volta para **Camadas de referência** sempre que você abre o
Capy Canvas.

Se Preencher usar **Camadas de referência** e nenhuma camada estiver marcada,
Preencher não pinta nada e um aviso oferece marcar a camada abaixo.

## Configurações de preenchimento

![O painel Ferramenta de Preencher, com Tolerância, o grupo Bordas e Opacidade.](shot:drawing/fill-settings)

Preencher e Contornar e preencher compartilham as configurações abaixo.
**Seleção automática** e **Selecionar por cor** usam os mesmos valores, exceto
**Opacidade**. Para redefinir uma configuração, clique duas vezes no rótulo dela
na barra Opções da ferramenta ([Tamanho, opacidade e fluxo](/pt-BR/docs/brushes/basics/)).

### Tolerância

Define quanto uma cor pode variar e ainda contar como parte da mesma área. O
padrão é 10%.

### Fechar lacunas

Fecha aberturas nas linhas até essa largura, de 0 a 32 px, antes de encontrar a
área. A largura é medida em pixels do desenho, não da tela.

### Expansão

Aumenta a área preenchida nesse número de pixels, ou a reduz com um valor
negativo, de −32 a 32 px.

### Suavização de bordas

Suaviza as bordas serrilhadas da área preenchida. Em 0%, o preenchimento mantém
as bordas duras dos pixels.

### Opacidade

Define a intensidade do preenchimento. Alterá-la altera a **Opacidade** do pincel
atual, e vice-versa. Em Esboço, use o controle deslizante de opacidade na barra da
borda esquerda.

## Preencher uma seleção

Para preencher uma seleção com a cor atual, escolha **Editar > Preencher seleção**
ou pressione **Shift+Backspace** ([Trabalhar com seleções](/pt-BR/docs/selections/working/)).
