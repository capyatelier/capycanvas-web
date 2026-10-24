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
- Em Esboço, escolha um misturador na gaveta **Esculpir**.
- Busque **Misturar** na busca de comandos.

Escolha um conjunto e um misturador em **Conjunto de ferramentas**. **Borrar** é o
misturador padrão.

| Conjunto | Misturadores |
| --- | --- |
| **Misturar** | **Borrar**, **Misturador suave**, **Desfoque**, **Esfuminho**, **Lenço de papel**, **Misturador granulado**, **Misturador que preserva a textura**, **Misturador de matiz** |
| **Tinta úmida** | **Misturador natural**, **Misturador úmido**, **Misturador de cores**, **Espátula de mistura**, **Misturador de cerdas** |
| **Efeitos** | **Misturador pictórico**, **Misturador pente**, **Misturador disperso**, **Nitidez**, **Marmorizado**, **Misturador cristalino**, **Misturador pontilhado** |

As configurações de cada misturador estão em
[Mistura, espalhamento e cerdas](/pt-BR/docs/brushes/wet-media/).

## Liquefazer

Faça uma das seguintes ações:

- Pressione **J** com Misturar ativa.
- Em Pintura ou Foto, selecione **Liquefazer** na barra de ferramentas Ferramentas. Clique com o botão direito no botão ou mantenha-o pressionado para escolher um modo.
- Em Esboço, escolha um modo no conjunto **Liquefazer** da gaveta **Esculpir**.
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
| **Borda** | Puxa os pixels para a linha do traço dos dois lados. |
| **Reconstruir** | Desfaz a deformação de Liquefazer sob o pincel. |

Liquefazer não tem botão Aplicar. Cada traço altera a camada e é uma etapa de
desfazer própria. Os traços continuam deformando os pixels que a camada tinha antes
do primeiro traço, até você pintar, preencher, aplicar um filtro, transformar ou
colar na camada.

## Ajustar Dissolver e Redefinir Dissolver

Você pode reduzir tudo o que Liquefazer fez em uma camada com **Ajustar Dissolver**,
ou devolver a camada aos pixels de antes do primeiro traço com
**Redefinir Dissolver**.

Faça uma das seguintes ações:

- No painel **Ferramenta**, ative **Ajustar Dissolver** ou selecione **Redefinir Dissolver**.
- Busque **Ajustar Dissolver** ou **Redefinir Dissolver** na busca de comandos.

Com **Ajustar Dissolver** ativado, um controle deslizante **Intensidade** aparece no
painel **Ferramenta**. Em 100% a deformação continua como está, e em 0% ela some.
Soltar o controle deslizante é uma etapa de desfazer, e **Redefinir Dissolver**
também.

Nenhum dos dois comandos fica disponível, com a mensagem “Aplique Dissolver a esta
camada primeiro”, até a camada ter alterações de Liquefazer.

## Configurações de Liquefazer

![O painel Ferramenta de Cristais de liquefação com Intensidade, o grupo Liquefazer com Distorção e Inércia, e Ajustar Dissolver e Redefinir Dissolver.](shot:drawing/liquify-settings)

**Distorção** e **Inércia** ficam no grupo **Liquefazer** do painel **Ferramenta**.

### Intensidade

Define quanto cada carimbo desloca os pixels. O efeito é mais fraco com pressão
leve da caneta e perto da borda de uma ponta suave.

### Distorção

Torna o movimento irregular. Em **Cristais de liquefação**, define até onde as
células se espalham. **Reconstruir** não tem **Distorção**.

### Inércia

Prolonga o efeito na última direção do traço depois que você levanta a caneta.
**Reconstruir** não tem **Inércia**.

## Gaveta Esculpir em Esboço

Em Esboço, selecione **Esculpir** na barra de título para usar a última ferramenta
de Misturar, Liquefazer ou Retoque, selecione de novo para abrir a gaveta e mais
uma vez para fechá-la. A gaveta lista os conjuntos, as ferramentas do conjunto
escolhido e as configurações delas. **Esculpir** e **Pincel** guardam cada um a sua
última predefinição e o seu tamanho de pincel.

![A gaveta Esculpir em Esboço, com os conjuntos Misturar, Tinta úmida, Efeitos, Liquefazer e Retoque à esquerda, os misturadores do conjunto Misturar no meio e as configurações de Borrar à direita.](shot:drawing/sketch-sculpt-drawer)

## Pintar em uma máscara

Em uma máscara, Misturar e Liquefazer pintam cobertura simples, sem esfumar nem
deslocar pixels. O primeiro traço desse tipo em cada máscara mostra um aviso.
