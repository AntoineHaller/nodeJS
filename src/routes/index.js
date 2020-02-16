const app = require('express');
const router = app.Router();
const adminRouter = require('./admin.routes');
const managerRouter = require('./manager.routes');
const golfRouter = require('./golf.routes');
const authRouter = require('./auth.routes');

//Utilisateur router
router.use(adminRouter);

//Manager router
router.use(managerRouter);

//Golf router
router.use(golfRouter);

//Auth router
router.use(authRouter);

module.exports = router;
