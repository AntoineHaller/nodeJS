const Manager = require('../models/manager.model');
const token = require('../jwt/token.jwt');


//creation d'un manager
exports.create = (req, res) => {
  token.authToken;
  const manager = new Manager({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
  });
  manager.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

//affichage d'un manager
exports.findOne = (req,res) => {
  token.authToken;
  Manager.findById(req.params.id)
    .then(manager => {
        if (!manager) {
          return res.status(404).send({
            message: "le manager cherché est introuvable"
          })
        }
        res.send(manager);
      })
      .catch(err => {
        return res.status(500).send({
          message: err.message
        })
      })
}

//affichage de tous les mananger
exports.findAll = (req, res) => {
  token.authToken;
  Manager.find()
    .then(managers => {
      res.send(managers);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}


//modification d'un manager
exports.update = (req, res) => {
  token.authToken;
  Manager.findByIdAndUpdate(req.params.id, req.body)
    .then(manager => {
      if (!manager) {
        return res.status(404).send({
          message: "le manager spécifié n'existe pas"
        })
      }
      Manager.findById(req.params.id)
          .then(newManager => {
            res.send({
              new_manager: newManager,
              old_manager: manager
            });
          })
    }).catch(err => {
      return res.status(500).send({
        message: err.message
      })
    })
}

//suppression de plusieurs manager
exports.deleteMany = (req, res) => {
  token.authToken;
  Manager.deleteMany((err) => {
    if (err)
      res.send(err);
    res.send("tous les manager ont été supprimés.");
  });
}

//suppression d'un manager
exports.deleteOne = (req, res) => {
  token.authToken;
  Manager.findByIdAndRemove(req.params.id)
    .then(manager => {
      if(!manager) {
        return res.status(404)
      }
      res.send({
        message: "manager supprimé"
      })
    })
}


