'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// carga de rutas
var users_routes = require('./routes/users');
/* Body Parse */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// configurar cabecera hhtp

// rutas 
app.use('/', users_routes);

module.exports = app;