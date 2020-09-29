'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = Schema({
  // respuesta: String,
  // fecha: Date,
  // tipo: String,
  // estado: String,
  // user: { type: Schema.ObjectId, ref: 'User' },
  // post: { type: Schema.ObjectId, ref: 'Post' }

  commentId: Number,
  problemId: Number,
  userId: Number,
  content: String,
  score: Number,
  date: Date,
  image: String
});

module.exports = mongoose.model('Comments', CommentsSchema, 'Comments');