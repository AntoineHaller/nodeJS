const app = require('express');
const authentification = require('../controllers/auth.controller');
const router = app.Router();

router.post('/auth/signin', authentification.signin);

router.post('/auth/login', authentification.login);

module.exports = router;
