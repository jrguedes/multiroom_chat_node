module.exports.iniciaChat = function (application, errors, req, res) {

    if (!errors.isEmpty()) {
        console.log(errors);
        console.log('TEM ERRO');
    } else {
        console.log('NAO TEM ERRO');
        var dadosForm = req.body;
        //console.log(dadosForm);
        res.render('chat');
    }


    
}
