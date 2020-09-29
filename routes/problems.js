'use strict'

var express = require('express');
var PostController = require('../controllers/post');

var api = express.Router();

api.post('/Subir', PostController.savePost);
api.delete('/Eliminar/:id', PostController.deletePost);
api.get('/Buscar/:id', PostController.getPost);

module.exports = api;