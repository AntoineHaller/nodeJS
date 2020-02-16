const app = require('express');
const routes = app.Router();
const userRouter = require('./user.route');
const managerRouter = require('./manager.route');
const golfRouter = require('./golf.route');
const authRouter = require('./auth.route');

//Utilisateur routes
routes.use(userRouter);

//Manager routes
routes.use(managerRouter);

//Golf routes
routes.use(golfRouter);

//Auth routes
routes.use(authRouter);

module.exports = routes;
