'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = Schema({
  id: String,
  userId: Number,
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  address: String,
  birthdate: Date,
  phone: String,
  gender: String,
  email: String,
  dni: String,
  role: String,
});

module.exports = mongoose.model('Users', UsersSchema, 'Users');