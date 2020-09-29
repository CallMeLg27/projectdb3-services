'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

// carga de rutas
var users_routes = require('./routes/users');
var likes_routes = require('./routes/likes');
var dislikes_routes = require('./routes/dislikes');
/* Body Parse */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// configurar cabecera hhtp

// rutas 
app.use(cors());
app.use('/users', users_routes);
app.use('/likes', likes_routes);
app.use('/dislikes', dislikes_routes);

module.exports = app;