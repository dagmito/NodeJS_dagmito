var app = require('express')();

app.get('', function(require, response){
    response.send('Roldanas na pista');
});

app.listen(3000, function(){
    
});