'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikesSchema = Schema({
  // estado: Boolean,
  // fecha: Date,
  // user: { type: Schema.ObjectId, ref: 'User' },
  // post: { type: Schema.ObjectId, ref: 'Post' }

  date: Date,
  userId: Number,
  problemId: Number,
});

module.exports = mongoose.model('Likes', LikesSchema, 'Likes');