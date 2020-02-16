const jwt = require('jsonwebtoken');
const jwtConfig = require('../configs/jwt.config');

//authentification token
exports.authToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  if (!token) {
    return res.status(400).send({
      auth:false,
      message:"Pas de token: accès impossible"
    })
  }
  jwt.verify(token, jwtConfig.secret, function(err, decoded) {
    if (err) {
      return res.status(401).send({
        auth:false,
        message:"Accès refusé"
      })
    }
    next();
  })
}
