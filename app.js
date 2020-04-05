/*importar as configuracoes do servidor*/
var app = require('./config/server');

var server = app.listen(80, function(){
    console.log('Servidor Online')
});

var io = require('socket.io').listen(server);
app.set('io', io);

/* Escuta eventos do lado do cliente var socket = io('http://localhost'); */
io.on('connection', function(socket){
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });
});


