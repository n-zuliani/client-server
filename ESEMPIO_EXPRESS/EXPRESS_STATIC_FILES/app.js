var express = require('express');
var app = express();

const path = require('path');

app.get('/', function(req,res) {
 res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname+'/about.html'));
});
app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname+'/sitemap.html'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

/*
1) la funzione sendFile() reinderizza il client sul file specificato
2) node vuole solo percorsi assoluti quindi bisogna specificare tutto il percorso directory
3) serve a definire su quale pagina/url vengono esegute le istruzione nella function della relativa get
 */