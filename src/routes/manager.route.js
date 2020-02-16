const app = require('express');
const manager = require('../controllers/manager.controller');
const routes = app.Router();

//Création
routes.post('/manager', manager.create);

//Affichage
routes.get('/manager', manager.findAll);
routes.get('/manager/:id', manager.findOne);

//Modifier
routes.post('/manager/:id', manager.update);

//Suppression
routes.delete('/manager/:id', manager.deleteOne);
routes.delete('/manager', manager.deleteMany)

module.exports = routes;
