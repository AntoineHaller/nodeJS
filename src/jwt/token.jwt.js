const jwt = require('jsonwebtoken');

//authentification token
function authToken(req, res, next) {
  let token = req.headers['x-access-token'];
  if (!token) {
    return res.status(400).send({
      auth:false,
      message:"Pas de token: accès impossible"
    })
  }
  jwt.verify(token, "supersecret", function(err, decoded) {
    if (err) {
      return res.status(401).send({
        auth:false,
        message:"Accès refusé"
      })
    }
    next();
  })
}
