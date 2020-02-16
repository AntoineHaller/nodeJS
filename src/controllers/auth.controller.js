const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signin = (req, res) => {
    let hashedPwd = bcrypt.hashSync(req.body.password, 8);
    const admin = new Admin({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: req.body.role,
      email: req.body.email,
      password: hashedPwd,
      admin: req.body.admin
    })
    admin.save()
      .then(data => {
          let token = jwt.sign({
                  id: admin.email,
                  admin: admin.admin
              },
              "supersecret", {
                  expiresIn: 3600
              }
          )
          res.send({
              auth: true,
              token: token,
              body: {
                  email: data.email,
                  firstname: data.firstname
              }
          });
      })
      .catch(err => {
          res.status(500).send({
              message: err.message
          })
      })
}


//login
exports.login = (req, res) => {
    Admin.findOne({ email: req.body.email },
        function(err, admin) {
            if (!admin) {
              return res.status(404).send('utilisateur introuvable');
            }
            let passwordIsValid = bcrypt.compareSync(req.body.password, admin.password);
            if (!passwordIsValid) {
              return res.status(401).send({
                auth: false,
                token: null
              });
            }
            let token = jwt.sign({
                    id: admin._id,
                    admin: admin.admin
                },
                "supersecret", {
                    expiresIn: 3600
                }
            );
            res.status(200).send({
                auth: true,
                token: token,
                data: admin
            })
        }
    )
}