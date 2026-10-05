---
title: "Renderização"
description: "Etapa 4 do tutorial de ilustração: sombreamento e textura em camadas recortadas por cada cor base, e uma exportação em PNG."
related: ["layers/settings", "drawing/brush-tools", "files/open-save", "files/export"]
---

Esta etapa produz o sombreamento de cada forma, em camadas recortadas pela cor
base dela, e uma exportação do estudo em PNG.

## 1. Adicionar uma camada de recorte

Selecione *Ribbon* e escolha **Camada > Novo > Nova camada de recorte**, ou
escolha **Novo > Nova camada de recorte** no menu da linha
([Configurações da camada](/pt-BR/docs/layers/settings/)). Renomeie a nova
camada como *Ribbon shading*.

![O menu da camada com Novo aberto e Nova camada de recorte dentro dele.](shot:illustration/render-new-menu)

*Ribbon shading* aparece logo acima de *Ribbon*, e um trilho à esquerda das
miniaturas marca o recorte. O recorte segue a máscara de *Ribbon*, não o
verde-azulado que preenche a camada inteira.

## 2. Sombrear a fita

Selecione **Pincel de pintura** na barra de ferramentas Ferramentas e
**Aguada de aquarela** no Conjunto de ferramentas
([Ferramentas de pincel](/pt-BR/docs/drawing/brush-tools/)). Defina
**Opacidade** como 65% no painel **Ferramenta** e pinte as sombras nas curvas da
fita em azul-escuro. Depois acrescente toques de verde-sálvia com o pincel
**Pincel**.

## 3. Adicionar uma camada de textura

Com *Ribbon shading* selecionada, escolha **Camada > Novo > Nova camada de recorte**
de novo e renomeie a camada como *Ribbon texture*. Ela fica acima de
*Ribbon shading*, no mesmo recorte. Selecione **Lápis** e o pincel **Lápis**, e
desenhe marcas de hachura e realces em creme.

## 4. Sombrear o disco e o bloco

Selecione *Disc*, adicione uma camada de recorte chamada *Disc shading* e
sombreie a metade de baixo do disco com o **Aerógrafo** em terracota. Acrescente
um realce em creme no canto superior esquerdo.

*Block shading* vai sobre *Block* do mesmo jeito: azul-escuro ao longo das
bordas direita e inferior com o pincel **Pincel**, e depois hachuras em creme
com o pincel **Lápis**.

![O painel Camadas com Ribbon texture e Ribbon shading recortadas por Ribbon, e Disc shading e Block shading recortadas pelas bases delas.](shot:illustration/render-layers)

A lista de camadas corresponde às camadas finais da
[introdução](/pt-BR/docs/illustration/).

## 5. Salvar e exportar

Escolha **Arquivo > Salvar** ou pressione **Ctrl+S** e salve o desenho como um
arquivo `.capy` ([Abrir e salvar](/pt-BR/docs/files/open-save/)). Para exportar
um PNG:

1. Escolha **Arquivo > Exportar…** ou pressione **Ctrl+Shift+E**.
2. Deixe **Destino** em **Web / Compartilhar** e defina **Formato** como **Imagem PNG**.
3. Selecione **Escolher arquivo…** e escolha uma pasta e um nome.

Depois da primeira exportação, **Arquivo > Exportar novamente** grava o mesmo
arquivo com as mesmas configurações, sem a caixa de diálogo
([Exportar imagens](/pt-BR/docs/files/export/)).
