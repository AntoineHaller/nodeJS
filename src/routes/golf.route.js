const app = require('express');
const golf = require('../controllers/golf.controller');
const routes = app.Router();
const jwt_token = require('../jwt/token.jwt.js');

//Création
routes.post('/golf', jwt_token.authToken, golf.create);

//Affichage
routes.get('/golf', golf.findAll);
routes.get('/golf/:id', golf.findOne);

//Modifier
routes.post('/golf/:id', jwt_token.authToken, golf.update);

//Suppression
routes.delete('/golf/:id', jwt_token.authToken, golf.deleteOne);
routes.delete('/golf', jwt_token.authToken, golf.deleteMany)

module.exports = routes;
