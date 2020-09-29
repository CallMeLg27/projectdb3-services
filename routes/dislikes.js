'use strict'

var express = require('express');
var DislikesController = require('../controllers/dislikes');

var api = express.Router();

api.post('/dislike', DislikesController.saveDislike);

module.exports = api;