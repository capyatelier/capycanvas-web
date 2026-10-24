---
title: "Mistura, espalhamento e cerdas"
description: "As configurações que controlam como os pincéis úmidos, de aquarela, de mistura e de cerdas lidam com a tinta."
related: ["brushes/tip-texture", "brushes/basics", "drawing/blend-liquify", "drawing/brush-tools"]
---

Você pode definir como os pincéis úmidos e de mistura lidam com a tinta no painel
**Ferramenta**. Cada grupo aparece só nos pincéis citados na seção correspondente.

![A parte inferior do painel Ferramenta da Aquarela molhada, com os grupos Mistura, Aquarela, Espalhamento e Mesclagem.](shot:brushes/wet-media-settings)

## Mistura

**Mistura** aparece nos pincéis de tinta a óleo, em **Guache opaco**, nos
pincéis de aquarela e em todos os misturadores. **Captação média**,
**Persistência** e **Recarga por pressão** aparecem só nos pincéis de tinta a
óleo, em **Guache opaco**, **Misturador úmido** e **Misturador de cores**.

### Carga de tinta

Define quanto da própria cor o pincel carrega e, nos pincéis de aquarela, a força
do pigmento. Valores menores deixam a cor captada da camada predominar.

### Captação de cor

Define até onde o pincel arrasta, ao longo do traço, a cor que capta da camada.

### Diluição

Dilui a tinta que o pincel carrega. Valores maiores enfraquecem a cor do próprio
pincel na mistura.

### Captação média

Define até onde as cores captadas ao longo da ponta se fundem em uma só. Em 0%,
cada parte da ponta mantém a sua.

### Persistência

Define até onde a cor média é levada ao longo do traço. Só aparece enquanto
**Captação média** está acima de 0%.

### Recarga por pressão

Define quanto uma pressão firme recarrega a cor selecionada no pincel. **Pincel
de mistura** deposita a cor dele sob pressão firme e só mistura com um toque leve.

## Misturador

Cada misturador adiciona configurações ao grupo **Misturador**. **Alcance** fica no
topo do painel **Ferramenta**.

| Configuração | Misturadores | Define |
| --- | --- | --- |
| **Alcance** | Todos, menos **Espátula de mistura** e **Marmorizado** | Até onde o misturador capta cor ao redor de cada ponto do traço. |
| **Estrias** | **Borrar**, **Misturador suave**, **Esfuminho**, **Lenço de papel**, **Misturador natural**, **Misturador de cerdas**, **Espátula de mistura** | Quanto o traço se quebra em estrias ao longo da direção dele. |
| **Nitidez** | **Nitidez** | Quanto contraste o traço adiciona. |
| **Textura preservada** | **Misturador que preserva a textura** | Quanto da textura fina sob o traço permanece sobre a cor misturada. |
| **Tamanho do detalhe** | **Misturador que preserva a textura** | O tamanho da textura que é preservada. |
| **Misturar luminosidade** | **Misturador de matiz** | Quanto da luminosidade se mistura junto com o matiz e a saturação. |
| **Granulação** | **Misturador disperso** | Com que plenitude cada pixel disperso substitui o que está embaixo. |
| **Alongamento** | **Misturador pictórico**, **Misturador cristalino** | Quanto as manchas ou as células se alongam ao longo do traço. |
| **Tamanho da célula** | **Misturador cristalino** | O tamanho das células. |
| **Redemoinho** | **Marmorizado** | Com que força a tinta se enrola. |
| **Tamanho do redemoinho** | **Marmorizado** | O tamanho dos redemoinhos. |
| **Preservação de bordas** | **Misturador pente** | Com que facilidade a mistura para em uma borda entre cores. |

## Aquarela

**Aguada de aquarela** e **Aquarela molhada** têm um grupo **Aquarela** para a
borda mais escura onde a tinta se acumula. A aquarela reage só à tinta da mesma camada. **Intensidade da borda** fica no topo do painel **Ferramenta**, acima dos grupos.

### Intensidade da borda

Define o quanto a borda é escura.

### Largura da borda

Define a largura da borda, de 0 a 32 px.

## Espalhamento

O grupo **Espalhamento** dos dois pincéis de aquarela define como a água e o
pigmento se espalham pelo papel em volta do traço. A tinta só se espalha durante
o traço, não depois que você levanta a caneta.

### Espalhamento úmido

Define a velocidade com que a tinta se espalha pelo papel já molhado.

### Espalhamento seco

Define a velocidade com que a tinta se espalha pelo papel seco.

### Distância de espalhamento

Define até onde a tinta pode se espalhar a partir de cada carimbo, de 0 a 96 px.

### Carga de água

Define quanta água cada carimbo deposita no papel. Fica no topo do painel **Ferramenta**, acima dos grupos.

## Mistura de cores

Você pode escolher como um pincel de mistura combina as cores que capta.

Faça uma das seguintes ações:

- Escolha **Mistura Oklab**, **Mistura em luz linear** ou **Mistura clássica** em **Mistura de cores** no painel **Ferramenta**.
- Abra **Mais opções da ferramenta** na barra Opções da ferramenta e escolha **Mistura de cores** na gaveta Ferramenta ([Tamanho, intensidade e opacidade](/pt-BR/docs/brushes/basics/)).
- Pesquise o nome da opção na busca de comandos.

| Opção | Mistura |
| --- | --- |
| **Mistura Oklab** | Mistura as cores captadas de forma uniforme, como o olho as percebe. |
| **Mistura em luz linear** | Mistura as cores captadas como a luz se mistura. |
| **Mistura clássica** | Mistura os valores de cor como estão armazenados no desenho. |

Todo pincel de mistura integrado começa em **Mistura Oklab**. A opção é salva com
o pincel, e a configuração **Mesclagem** do desenho não a altera. Para um pincel
que não mistura, as opções ficam indisponíveis.

![A configuração Mistura de cores mostrando Mistura Oklab.](shot:brushes/color-mixing-menu)

## Cerdas

O grupo **Cerdas** aparece só no **Pincel de cerdas**. Esse pincel arrasta a
outra cor do par primeiro plano e fundo em sulcos grossos de tinta.

### Escala das cerdas

Define o tamanho das marcas das cerdas em relação ao tamanho do pincel. O
controle deslizante vai de 25% a 200%, e você pode digitar valores até 400%.

### Carga de tinta

Define quanta tinta o pincel carrega no início de cada traço.
