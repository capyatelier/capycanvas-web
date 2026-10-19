---
title: "Dispositivi supportati"
description: "Requisiti di sistema operativo, browser e grafica per le app native e l’editor web."
related: ["quickstart", "input/pen", "input/touch"]
---

{appName} usa il processore grafico del dispositivo per disegnare e visualizzare la tela. Il supporto dipende dall'insieme di app o browser, sistema operativo e hardware grafico.

## App native

L'app desktop supporta Windows, macOS e Linux. L'app nativa per iPad richiede iPadOS 17.5 o successivo. L'app Android richiede Android 12 o successivo.

Le app iPad e Android sono versioni beta. Soddisfare il requisito del sistema operativo non conferma da solo il funzionamento di ogni processore grafico o penna.

## Editor web

L'editor web funziona in questi browser:

| Sistema | Browser |
| --- | --- |
| Windows | Chrome, Edge, Firefox 141 o successivo |
| macOS | Chrome, Edge, Safari 26 o successivo, Firefox 147 o successivo su Apple silicon |
| Linux con Wayland | Chrome, Edge |
| iPadOS 26 o successivo | Safari |
| Android 12 o successivo | Chrome |

Il requisito minimo iPadOS 17.5 dell'app nativa per iPad non si applica a Safari. L'editor web richiede iPadOS 26 o successivo perché usa funzionalità grafiche del browser fornite da quella versione.

## Supporto grafico

Se la tela non può avviarsi, {appName} mostra un messaggio che descrive la funzionalità grafica mancante. Aggiorna prima sistema operativo, browser e driver grafico. Se il messaggio rimane, includi il testo esatto e il modello del dispositivo e della grafica nella segnalazione del problema.
