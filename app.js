/*importar as configuracoes do servidor*/
var app = require('./config/server');

var server = app.listen(80, function () {
    console.log('Servidor Online')
});

var io = require('socket.io').listen(server);
app.set('io', io);

/* Escuta eventos do lado do cliente var socket = io('http://localhost'); */
io.on('connection', function (socket) {
    console.log('Usuario conectou');

    socket.on('disconnect', function () {
        console.log('Usuário desconectou');
    });

    socket.on('msgParaServidor', function (data) {
        /* atualiza o dialogo*/
        socket.emit('msgParaCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem
        });
        socket.broadcast.emit('msgParaCliente', {
            apelido: data.apelido,
            mensagem: data.mensagem
        });

        /*atualiza lista de usuarios conectados */
        if (parseInt(data.apelido_atualizado_clientes) == 0) {
            socket.emit('participantesParaCliente', {
                apelido: data.apelido
            });
            socket.broadcast.emit('participantesParaCliente', {
                apelido: data.apelido
            });
        }
    });
});


