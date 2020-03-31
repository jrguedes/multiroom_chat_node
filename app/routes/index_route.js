module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.index_controller.renderHome(application, req, res);
    });
}