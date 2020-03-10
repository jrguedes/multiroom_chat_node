/*importar as configuracoes do servidor*/
var app = require('./config/server');

app.listen(80, function(){
    console.log('Servidor Online')
});