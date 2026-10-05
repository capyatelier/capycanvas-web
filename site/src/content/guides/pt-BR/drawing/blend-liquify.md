---
title: "Misturar e Liquefazer"
description: "As ferramentas Misturar e Liquefazer, para esfumar a tinta e deslocar pixels em uma camada."
related: ["drawing/brush-tools", "brushes/wet-media", "brushes/tip-texture", "retouch/clone-heal"]
---

Você pode esfumar e misturar a tinta de uma camada com **Misturar** e deslocar os
pixels dela com **Liquefazer**.

## Misturar

Faça uma das seguintes ações:

- Pressione **J**.
- Em Pintura, selecione **Misturar** na barra de ferramentas Ferramentas. O mesmo botão reúne o **Carimbo de clonagem**.
- Em Foto, selecione **Misturar** na barra de ferramentas Ferramentas.
- Em Esboço, escolha **Misturar** na gaveta **Esculpir**.
- Busque **Misturar** na busca de comandos.

Misturar tem duas predefinições, **Misturador natural** e **Borrar**. As duas
começam com **Carga de tinta** em 0% e não têm cor própria. **Captação de cor**
define até onde elas arrastam a cor ao longo do traço
([Mistura, espalhamento e cerdas](/pt-BR/docs/brushes/wet-media/)).

## Liquefazer

Faça uma das seguintes ações:

- Pressione **J** com Misturar ativa.
- Em Pintura ou Foto, selecione **Liquefazer** na barra de ferramentas Ferramentas. Clique com o botão direito no botão ou mantenha-o pressionado para escolher um modo.
- Em Esboço, escolha **Liquefazer** na gaveta **Esculpir**.
- Busque **Liquefazer** na busca de comandos.

Cada modo é uma predefinição em **Conjunto de ferramentas**:

| Predefinição | Efeito |
| --- | --- |
| **Empurrar com liquefação** | Arrasta os pixels ao longo do traço. |
| **Girar com liquefação no sentido anti-horário** | Gira os pixels no sentido anti-horário em torno do centro do pincel. |
| **Girar com liquefação no sentido horário** | Gira os pixels no sentido horário em torno do centro do pincel. |
| **Contrair com liquefação** | Puxa os pixels para o centro do pincel. |
| **Expandir com liquefação** | Empurra os pixels para fora do centro do pincel. |
| **Cristais de liquefação** | Quebra a imagem sob o pincel em pequenas células espalhadas. |

## Configurações de Liquefazer

![O painel Ferramenta de Cristais de liquefação, com o grupo Liquefazer mostrando Intensidade e Distorção.](shot:drawing/liquify-settings)

**Intensidade**, **Distorção** e **Inércia** ficam no grupo **Liquefazer** do
painel **Ferramenta**. Liquefazer não tem **Fluxo**.

### Intensidade

Define quanto cada carimbo desloca os pixels. O efeito é mais fraco com pressão
leve da caneta e perto da borda de uma ponta suave.

### Distorção

Define quanto **Cristais de liquefação** espalha os pixels. Nenhum outro modo tem
essa configuração.

### Inércia

Faz **Empurrar com liquefação** levar os pixels mais longe do que a caneta se
move. Aparece só nesse modo.

## Gaveta Esculpir em Esboço

Em Esboço, **Esculpir** na barra de título reúne Misturar, Liquefazer e as
ferramentas de retoque.

- Selecione **Esculpir** para usar a última predefinição de escultura. Na primeira vez, é **Misturador natural**.
- Selecione **Esculpir** de novo para abrir a gaveta e mais uma vez para fechá-la.

A gaveta tem três colunas. **Escultura** lista **Misturar**, **Liquefazer**,
**Clonar**, **Corrigir** e **Correção pontual**. **Ferramentas** lista as
predefinições do grupo escolhido, e **Ferramenta** reúne as configurações.

**Esculpir** e **Pincel** guardam cada um a sua última predefinição e o seu
tamanho de pincel.

![A gaveta Esculpir em Esboço, com Liquefazer escolhido em Escultura e as seis predefinições de Liquefazer em Ferramentas.](shot:drawing/sketch-sculpt-drawer)

## Pintar em uma máscara

Em uma máscara, Misturar e Liquefazer pintam cobertura simples, sem esfumar nem
deslocar pixels. O primeiro traço desse tipo em cada máscara mostra um aviso.
