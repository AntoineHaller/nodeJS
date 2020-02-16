const app = require('express');
const golf = require('../controllers/golf.controller');
const routes = app.Router();

//Création
routes.post('/golf', golf.create);

//Affichage
routes.get('/golf', golf.findAll);
routes.get('/golf/:id', golf.findOne);

//Modifier
routes.post('/golf/:id', golf.update);

//Suppression
routes.delete('/golf/:id', golf.deleteOne);
routes.delete('/golf', golf.deleteMany)

module.exports = routes;
