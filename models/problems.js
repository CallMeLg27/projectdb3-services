'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProblemsSchema = Schema({
  // pregunta: String,
  // fecha: Date,
  // tipo: String,
  // estado: String,
  // user: { type: Schema.ObjectId, ref: 'User' }
  problemId: String,
  userId: Number,
  category: String,
  title: String,
  description: String,
  date: Date,
  score: Number,
  solved: Boolean,
  isPrivate: Boolean,
  image: String
});

module.exports = mongoose.model('Problems', ProblemsSchema, 'Problems');