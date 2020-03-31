
module.exports = function (application) {
    const { check, validationResult } = require('express-validator');
    application.post('/chat', validarLogin('chat'), function (req, res) {
        application.app.controllers.chat_controller.iniciaChat(application, validationResult(req), req, res);
    });

    application.get('/chat', function (req, res) {
        application.app.controllers.chat_controller.iniciaChat(application, req, res);
    });

    function validarLogin(route) {
        switch (route) {
            case 'chat':
                return [
                    check('apelido').not().isEmpty().withMessage('O apelido é obrigatório'),
                    check('apelido').isLength({ min: 3 }).withMessage('Deve conter pelo menos 3 caracteres')
                ];

            default:
                return [];
        }
    }

}  