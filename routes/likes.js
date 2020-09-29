'use strict'

var express = require('express');
var LikesController = require('../controllers/likes');

var api = express.Router();

api.post('/like', LikesController.saveLike);

module.exports = api;