const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Golf model
const golf_model = new Schema({
  titre: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  manager: {
    type: Object,
    unique: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Golf', golf_model);
