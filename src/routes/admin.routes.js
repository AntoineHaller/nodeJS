const app = require('express');
const admin = require('../controllers/admin.controller');
const router = app.Router();
const jwt_token = require('../jwt/token.jwt.js');


router.post('/admins', jwt_token.authToken, admin.create);
router.get('/admins', jwt_token.authToken, admin.findAll);
router.get('/admins/:id', jwt_token.authToken, admin.findOne);
router.post('/admins/:id', jwt_token.authToken, admin.update);
router.delete('/admins/:id', jwt_token.authToken, admin.deleteOne);
router.delete('/admins', jwt_token.authToken, admin.deleteMany);

module.exports = router;
