const express = require('express');
const routes = express.Router();
const user = require('../controllers/user.controller');

routes.post('/users', user.create);
routes.get('/users', user.findAll);
routes.get('/users/:id', user.findOne);
routes.post('/users/:id', user.update);
routes.delete('/users/:id', user.deleteOne);
routes.delete('/users', user.deleteMany);

module.exports = routes;
