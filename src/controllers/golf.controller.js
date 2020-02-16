const Golf = require('../models/golf.model');
const Manager = require('../models/manager.model');

//Création d'un golf
exports.create = (req, res) => {
  token.authToken;
  Manager.findOne({
    lastname: req.body.managerLastname,
    firstname: req.body.managerFirstname
  })
  .then((manager => {
    if (!manager) {
      return res.status(404).send({
        message: "golf introuvable"
      })
    }
    let Manager = manager;
  }));

  const golf = new Golf({
    titre: req.body.titre,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    manager: Manager
  });

  golf.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    });
}

//1 seul golf
exports.findOne = (req,res) => {
  Golf.findById(req.params.id)
    .then(golf => {
        if (!golf) {
          return res.status(404).send({
            message: "Golf introuvable"
          })
        }
        res.send(golf);
      })
      .catch(err => {
        return res.status(500).send({
          message: err.message
        })
      })
}

//Affichage de tous les golfs
exports.findAll = (req, res) => {
  Golf.find()
    .then(golfs => {
      res.send(golfs);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

//Modification d'un golf
exports.update = (req, res) => {
  token.authToken;
  Golf.findByIdAndUpdate(req.params.id, req.body)
    .then(golf => {
      if (!golf) {
        return res.status(404).send({
          message: "Golf introuvable"
        })
      }
      Golf.findById(req.params.id)
          .then(newGolf => {
            res.send({
              new_golf: newGolf,
              old_golf: golf
            });
          })
    }).catch(err => {
      return res.status(500).send({
        message: err.message
      })
    })
}


//suppression de plusieurs golfs
exports.deleteMany = (req, res) => {
  token.authToken;
  Golf.deleteMany((err) => {
    if (err)
      res.send(err);
    res.send("Suppresion de tous les golfs: ok.");
  });
}


//Suppression
exports.deleteOne = (req, res) => {
  token.authToken;
  Golf.findByIdAndRemove(req.params.id)
    .then(golf => {
      if(!golf) {
        return res.status(404).send({
          message: "golf introuvable"
        })
      }
      res.send({
        message: "Suppresion du golf: ok"
      })
    })
}
