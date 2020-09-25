'use strict'

var express = require('express');
var UsersController = require('../controllers/users');

var api = express.Router();

api.post('/register', UsersController.saveUsers);
api.post('/login', UsersController.loginUser);
api.put('/update/:id', UsersController.updateUsers);

module.exports = api;