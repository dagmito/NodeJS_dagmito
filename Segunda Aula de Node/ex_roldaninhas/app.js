
var app = require('./config/cfg_express')();

app.get('/catalogo', function(require, response){
    response.render('catalogo/catalogo.ejs');
});

app.listen(3000, function(){
    console.log('Roldanas na pista');
});