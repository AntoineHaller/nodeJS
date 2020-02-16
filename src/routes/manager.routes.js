const app = require('express');
const manager = require('../controllers/manager.controller');
const router = app.Router();
const jwt_token = require('../jwt/token.jwt.js');


//Création
router.post('/manager', jwt_token.authToken, manager.create);

//Affichage
router.get('/manager', jwt_token.authToken, manager.findAll);
router.get('/manager/:id', jwt_token.authToken, manager.findOne);

//Modifier
router.post('/manager/:id', jwt_token.authToken, manager.update);

//Suppression
router.delete('/manager/:id', jwt_token.authToken, manager.deleteOne);
router.delete('/manager', jwt_token.authToken, manager.deleteMany);

module.exports = router;
