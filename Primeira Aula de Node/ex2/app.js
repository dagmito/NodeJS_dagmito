var http = require('http');
var app = require('express')();

app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render("index");
});

app.get('/editar', function(request, response){
    response.render("index_editar");
});

app.listen(3000, function(){
    console.log('Bilola tá durona!!');
});