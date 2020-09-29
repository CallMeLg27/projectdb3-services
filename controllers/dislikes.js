'use strict'

var Dislikes = require('../models/dislikes');
var Users = require('../models/users');
var Problems = require('../models/problems');

function saveDislike(req, res) {

  var dislike = new Dislikes();
  var params = req.body;

  /* console.log(params); */

  dislike.date = new Date();
  dislike.userId = params.userId;
  dislike.problemId = params.problemId;

  console.log(dislike);


  Dislikes.find({ problemId: dislike.problemId, userId: dislike.userId }, (err, dislikeBuscado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        error: "Error en la peticion"
      });
    }

    if (dislikeBuscado.length === 0) {
      /* return res.status(400).json({
          ok: false,
          message: 'El usuario no existe o fue eliminado'
      }); */

      dislike.save((err, dislikeStored) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err
          });
        }

        if (!dislikeStored) {
          return res.status(400).json({
            ok: false,
            message: 'Problemas al dar dislike',
            err
          });
        } else {
          return res.json({
            ok: true,
            dislike: dislikeStored,
            message: 'Se dio Dislike'
          });
        }

      });

    } else {
      /* return res.status(200).json({
          ok: false,
          message: 'El usuario fue encontrado',
          user: userBuscado
      }); */

      Dislike.find({ userId: dislike.userId })
        .remove((err, dislikeRemoved) => {
          if (err) {
            return res.status(500).json({
              ok: false,
              message: 'Error al eliminar el dislike'
            });
          }

          if (!dislikeRemoved) {
            return res.status(400).json({
              ok: false,
              message: 'El dislike no fue eliminado'
            });
          } else {
            return res.status(200).json({
              ok: true,
              dislike: dislikeRemoved,
              message: 'El dislike fue eliminado correctamente'
            });
          }
        });
    }
  });
}

module.exports = {
  saveDislike
}