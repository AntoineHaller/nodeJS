const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Admin model
const admin_model = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  }
});
module.exports = mongoose.model('Admin', admin_model);