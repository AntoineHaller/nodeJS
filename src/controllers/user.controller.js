const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const token = require('../jwt/token.jwt');

//Création d'un user
exports.create = (req, res) => {
  token.authToken;
  let hashedPwd = bcrypt.hashSync(req.body.password, 8);
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    role: req.body.role,
    email: req.body.email,
    password: hashedPwd,
    admin: req.body.admin
  });
  user.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    });
}

//affichage d'un user
exports.findOne = (req,res) => {
  token.authToken;
  User.findById(req.params.id)
    .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User introuvable"
          });
        }
        res.send(user);
      })
      .catch(err => {
        return res.status(500).send({
          message: err.message
        })
      })
}

//affichage de tous les users
exports.findAll = (req, res) => {
  token.authToken;
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}



//modification d'un user
exports.update = (req, res) => {
  token.authToken;
  User.findByIdAndUpdate(
    req.params.id,
    req.body
  ).then(user => {
      if (!user) {
        return res.status(404)
      }
      User.findById(req.params.id)
          .then(newUser => {
            res.send({
              new_user: newUser,
              old_user: user
            });
          })
    }).catch(err => {
      return res.status(500).send({
        message: err.message
      })
    })
}

//suppression de plusieurs users
exports.deleteMany = (req, res) => {
  token.authToken;
  User.deleteMany((err) => {
    if (err) {
      res.send(err)
    }
    res.send("tous les utilisateurs ont été supprimés.");
  });
}


//suppression d'un user
exports.deleteOne = (req, res) => {
  token.authToken;
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      if(!user) {
        return res.status(404)
      }
      res.send({
        message: "utilisateur supprimé"
      })
    })
}