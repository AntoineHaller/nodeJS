const app = require('express');
const golf = require('../controllers/golf.controller');
const router = app.Router();
const jwt_token = require('../jwt/token.jwt.js');

//Création
router.post('/golf', jwt_token.authToken, golf.create);

//Affichage
router.get('/golf', golf.findAll);
router.get('/golf/:id', golf.findOne);

//Modifier
router.post('/golf/:id', jwt_token.authToken, golf.update);

//Suppression
router.delete('/golf/:id', jwt_token.authToken, golf.deleteOne);
router.delete('/golf', jwt_token.authToken, golf.deleteMany);

module.exports = router;
