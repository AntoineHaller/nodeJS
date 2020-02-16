const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const token = require('../jwt/token.jwt');

//Création d'un admin
exports.create = (req, res) => {
  token.authToken;
  let hashedPwd = bcrypt.hashSync(req.body.password, 8);
  const admin = new Admin({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    role: req.body.role,
    email: req.body.email,
    password: hashedPwd,
    admin: req.body.admin
  });
  admin.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    });
}

//affichage d'un admin
exports.findOne = (req,res) => {
  token.authToken;
  Admin.findById(req.params.id)
    .then(admin => {
        if (!admin) {
          return res.status(404).send({
            message: "Admin introuvable"
          });
        }
        res.send(admin);
      })
      .catch(err => {
        return res.status(500).send({
          message: err.message
        })
      })
}

//affichage de tous les admins
exports.findAll = (req, res) => {
  token.authToken;
  Admin.find()
    .then(admins => {
      res.send(admins);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}



//modification d'un admin
exports.update = (req, res) => {
  token.authToken;
  Admin.findByIdAndUpdate(
    req.params.id,
    req.body
  ).then(admin => {
      if (!admin) {
        return res.status(404)
      }
      Admin.findById(req.params.id)
          .then(newAdmin => {
            res.send({
              new_admin: newAdmin,
              old_admin: admin
            });
          })
    }).catch(err => {
      return res.status(500).send({
        message: err.message
      })
    })
}

//suppression de plusieurs admins
exports.deleteMany = (req, res) => {
  token.authToken;
  Admin.deleteMany((err) => {
    if (err) {
      res.send(err)
    }
    res.send("tous les administrateurs ont été supprimés.");
  });
}


//suppression d'un admin
exports.deleteOne = (req, res) => {
  token.authToken;
  Admin.findByIdAndRemove(req.params.id)
    .then(admin => {
      if(!admin) {
        return res.status(404)
      }
      res.send({
        message: "administrateur supprimé"
      })
    })
}