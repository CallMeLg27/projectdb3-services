'use strict'

var express = require('express');
var CometarioController = require('../controllers/comentario');

var api = express.Router();

api.post('/Responder', CometarioController.saveComentario);
api.delete('/Eliminar/:id', CometarioController.deleteComentario);

module.exports = api;