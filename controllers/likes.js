'use strict'

var Likes = require('../models/likes');
var Users = require('../models/users');
var Problems = require('../models/problems');

function saveLike(req, res) {

  var like = new Likes();
  var params = req.body;

  /* console.log(params); */

  like.date = new Date();
  like.userId = params.userId;
  like.problemId = params.problemId;

  console.log(like);


  Likes.find({ problemId: like.problemId, userId: like.userId }, (err, likeBuscado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        error: "Error en la peticion"
      });
    }

    if (likeBuscado.length === 0) {
      /* return res.status(400).json({
          ok: false,
          message: 'El usuario no existe o fue eliminado'
      }); */

      like.save((err, likeStored) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err
          });
        }

        if (!likeStored) {
          return res.status(400).json({
            ok: false,
            message: 'Problemas al dar like',
            err
          });
        } else {
          return res.json({
            ok: true,
            like: likeStored,
            message: 'Se dio Like'
          });
        }

      });

    } else {
      /* return res.status(200).json({
          ok: false,
          message: 'El usuario fue encontrado',
          user: userBuscado
      }); */

      Likes.find({ userId: like.userId })
        .remove((err, likeRemoved) => {
          if (err) {
            return res.status(500).json({
              ok: false,
              message: 'Error al eliminar el like'
            });
          }

          if (!likeRemoved) {
            return res.status(400).json({
              ok: false,
              message: 'El like no fue eliminado'
            });
          } else {
            return res.status(200).json({
              ok: true,
              like: likeRemoved,
              message: 'El like fue eliminado correctamente'
            });
          }
        });
    }
  });
}

module.exports = {
  saveLike
}