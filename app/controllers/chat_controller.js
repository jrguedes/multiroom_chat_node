module.exports.iniciaChat = function (application, errors, req, res) {

    if (!errors.isEmpty()) {
        console.log(errors);
        console.log('Existem erros no formulário!');
        console.log('abaixo array:');
        console.log(errors.array());
        res.render('index', { validacao: errors.array() });
        return;
    } else {
        console.log('Formulario validado com sucesso!');
        var dadosForm = req.body;
        //console.log(dadosForm);
        var io = application.get('io');
        var msg = 'acabou de entrar no chat.';

        io.emit(
            'msgParaCliente',
            {
                apelido: dadosForm.apelido,
                mensagem: msg
            });


        res.render('chat', {dadosForm:dadosForm});
    }



}
