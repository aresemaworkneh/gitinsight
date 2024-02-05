const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
}, { timestamps: true }); // timestamps automatically add createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);

module.exports = User;
