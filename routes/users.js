'use strict'

var express = require('express');
var UsersController = require('../controllers/users');

var api = express.Router();

api.post('/Register', UsersController.saveUsers);
api.post('/Login', UsersController.loginUser);
api.put('/Update/:id', UsersController.updateUsers);

module.exports = api;