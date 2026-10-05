---
title: "Abrir e salvar"
description: "Como abrir desenhos e fotos, salvar arquivos .capy e trabalhar com vários desenhos abertos."
related: ["files/new", "files/export", "transform/move-transform", "start/undo"]
---

Os comandos desta página ficam no menu **Arquivo**. Em Esboço, abra-o pelo
**Menu principal** na barra de título.

![O menu Arquivo.](shot:files/file-menu)

## Abrir um desenho ou uma foto

Você pode abrir desenhos `.capy` e fotos nos formatos OpenEXR, TIFF, PNG, WebP,
BMP, JPEG, GIF, HEIF e AVIF. Cada arquivo abre em uma aba própria.

Faça uma das seguintes ações:

- Escolha **Arquivo > Abrir…**. Você pode escolher vários arquivos, exceto no Linux.
- Pressione **Ctrl+O**.
- Em Pintura e Foto, selecione **Abrir…** na barra de ferramentas Comandos.
- No editor web ou no Linux, arraste arquivos até o nome do desenho ou até as abas na barra de título.
- Se você instalou o editor web como aplicativo, abra um arquivo `.capy`, `.png`, `.jpg`, `.tif`, `.avif` ou `.exr` com o Capy Canvas pelo seu sistema.

## Fotos

Uma foto abre como um novo desenho com uma camada de foto, com o nome do arquivo,
acima de uma camada **Papel**. A foto mantém o perfil de cor e, por padrão, a
profundidade de bits. Salvar o desenho cria um arquivo `.capy` e nunca sobrescreve
a foto.

- Um GIF ou WebP animado abre no primeiro quadro.
- Uma foto pode ter até 32768 pixels de cada lado.
- Uma foto CMYK só abre se tiver um perfil de cor incorporado.
- Não é possível abrir fotos HEIF e AVIF em HDR.

Com **RGB e escala de cinza sem perfil** definido como **Perguntar** em
[Preferências](/pt-BR/docs/preferences/), uma foto sem perfil de cor abre a caixa de
diálogo **Escolher interpretação da imagem**.

## Importar imagens como camadas

Você pode adicionar imagens ao desenho atual como novas camadas.

Faça uma das seguintes ações:

- Escolha **Arquivo > Importar imagem como camada…**.
- Pressione **Ctrl+Shift+O**.
- Arraste imagens até a tela ou até uma linha do painel **Camadas**.

Cada imagem vira uma camada com o nome do arquivo, acima da camada selecionada,
com [alças de transformação](/pt-BR/docs/transform/move-transform/) para
posicioná-la. Uma imagem maior que a tela é reduzida para caber.

Não é possível importar um arquivo `.capy`. No editor web, uma imagem pode ter até 512 MiB.

## Salvar

Você pode salvar o desenho com todas as camadas como arquivo `.capy`.

Faça uma das seguintes ações:

- Escolha **Arquivo > Salvar**.
- Pressione **Ctrl+S**.
- Em Pintura e Foto, selecione **Salvar** na barra de ferramentas Comandos.

O primeiro salvamento pede um local, e os seguintes gravam no mesmo arquivo.
Depois de salvar, a aba mostra o nome do arquivo sem a marca ●.

No Firefox e no Safari, o desenho só conta como salvo depois que você seleciona
**Baixar** e depois **Arquivo salvo** na caixa de diálogo **Baixar arquivo**.

![A caixa de diálogo Baixar arquivo com Cancelar, Baixar e Arquivo salvo.](shot:files/download-file)

**Arquivo > Salvar como…** (**Ctrl+Shift+S**) sempre pede um local, e os
salvamentos seguintes vão para o novo arquivo. **Salvar** também pede um local se
o arquivo mudou no disco depois que você o abriu ou salvou.

**Salvar** não está disponível enquanto um recorte ou uma transformação está aberto.

## O que um arquivo .capy guarda

Um arquivo `.capy` guarda cada camada com sua máscara e suas configurações, os
filtros, as seleções e guias salvas, o espaço de cores, a profundidade de bits e
a mesclagem, e os dados EXIF, XMP e IPTC de uma foto. Ele não guarda o histórico
de desfazer, a visualização nem a seleção ativa.

## Desenhos somente para visualização

Um arquivo `.capy` que o Capy Canvas não consegue editar, como um arquivo
danificado, abre em uma caixa de diálogo em vez de uma aba. **Copy Original
File…** salva uma cópia do arquivo, e **Export Preview Image…** salva a prévia do
desenho como PNG.

## Abas de desenho

![Três abas de desenho na barra de título, uma marcada como não salva.](shot:files/drawing-tabs)

A barra de título mostra uma aba para cada desenho aberto. Com um só desenho
aberto, ela mostra em vez disso o nome e o tamanho do desenho.

Selecione uma aba para passar ao desenho dela ou use estas teclas:

| Para | Editor web | Linux |
| --- | --- | --- |
| Mostrar o desenho anterior | **Alt+Page Up** | **Ctrl+Page Up** ou **Ctrl+Shift+Tab** |
| Mostrar o próximo desenho | **Alt+Page Down** | **Ctrl+Page Down** ou **Ctrl+Tab** |
| Abrir a lista Desenhos | **Ctrl+Alt+D** | **Ctrl+Shift+A** |

No editor web, arraste uma aba para o lado para reordenar as abas.

Um ● antes do nome indica alterações não salvas. Quando a barra de título é
estreita, as abas viram um único botão que abre a lista Desenhos.

Cada aba guarda seu próprio histórico de desfazer, visualização e seleção. As abas
não fazem parte de uma área de trabalho.

## Desenhos…

![A lista Desenhos com três desenhos.](shot:files/drawings-list)

Você pode ver todos os desenhos abertos em uma lista.

Faça uma das seguintes ações:

- Escolha **Arquivo > Desenhos…** ou **Janela > Desenhos…**.
- No editor web, clique com o botão direito em uma aba.

Selecione uma linha para passar ao desenho dela, arraste a alça à esquerda para
reordenar ou selecione **×** para fechar o desenho. A ordem das abas tem seus
próprios **Desfazer ordem das abas** e **Refazer ordem das abas** na parte de
baixo da lista.

## Fechar um desenho

Faça uma das seguintes ações:

- Escolha **Arquivo > Fechar**.
- Pressione **Ctrl+W**. No editor web, pressione **Ctrl+Alt+W**.
- Selecione **×** na aba do desenho.

Se o desenho tiver alterações não salvas, uma caixa de diálogo pergunta "Salvar
alterações em “*nome*”?", com **Cancelar**, **Descartar alterações** e **Salvar**.

Quando você fecha o último desenho, o editor web abre um novo desenho em branco.
No Linux, a janela fecha.

## Reabrir depois de reiniciar

Todos os desenhos abertos, salvos ou não, reabrem na próxima vez que você inicia
o Capy Canvas, cada um com seu histórico de desfazer, visualização, seleção e
última exportação. Fechar o Capy Canvas não pede para salvar.

No editor web, apagar os dados do site exclui os desenhos não salvos.

Depois que o Capy Canvas fecha inesperadamente, os desenhos reabertos mostram
"(recuperado)" depois do nome até você salvá-los.

## Nova janela

No Windows, no macOS, no Linux e no iPad, **Arquivo > Nova janela**
(**Ctrl+Shift+N**) abre outra janela com seus próprios desenhos.
