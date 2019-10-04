var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

/*
1) npm init genera un file json con i metadata dell'applicazione
2) l'entry point è il file js principale dell'applicazione server
3) il file package.json è il file json che contiene i metadata dell'applicazione e quindi la configurazione di base.
4) la voce dependences dichiara le dipendenze che l'applicazione node richiede
5) la funzione require da un'instanza alla variabile express specificando che è richista la libreria "express" per l'applicazione
6) il metodo get representa l'evento in richiesta GET che effettua il server, quindi ciò che avviane quando un client fa una get al server.
7) il metodo listen definisce la porta sulla quale viene eseguita l'applicazione e quindi in ascolto.
8) 2 parametri: la directory che risponde alla richiesta GET (in questo caso root "/") e una funzione che determina le istruzione da eseguire nel momento della richiesta.
9) il parametro res rappresenta la risposta del server data al client nel momento della richiesta.
10) il metodo send invia al client il risultato delle istruzione nella get function
 */