const app = require('express');
const authentification = require('../controllers/auth.controller');
const routes = app.Router();

routes.post('/auth/signin', authentification.signin);

routes.post('/auth/login', authentification.login);

module.exports = routes;
