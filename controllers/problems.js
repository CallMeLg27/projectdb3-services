'use strict'

var Problems = require('../models/problems');
var Comments = require('../models/comments');
var Likes = require('../models/likes');

function saveProblem(req, res) {
  var problem = new Problems();
  var params = req.body;

  console.log(params);
  console.log('breiner');

  problem.pregunta = params.pregunta;
  problem.fecha = new Date();
  problem.tipo = params.tipo;
  problem.estado = 'Espera';
  problem.user = params.user;

  console.log(new Date());

  problem.save((err, problemStored) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!problemStored) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      problem: problemStored,
      message: 'Creacion Exitosa'
    });
  })
}

function deleteProblem(req, res) {
  var ProblemId = req.params.id;

  Problem.findByIdAndRemove(ProblemId, (err, problemRemoved) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: 'Error al eliminar el problem'
      });
    }

    if (!problemRemoved) {
      return res.status(400).json({
        ok: false,
        message: 'El problem no existe'
      });
    } else {
      Comentario.find({ problem: problemRemoved.id })
        .remove((err, comentarioRemoved) => {
          if (err) {
            return res.status(500).json({
              ok: false,
              message: 'Error al eliminar los comentarios del problem'
            });
          }

          if (!comentarioRemoved) {
            return res.status(400).json({
              ok: false,
              message: 'El comentario no fue eliminado'
            });
          } else {
            return res.status(200).json({
              ok: true,
              comentario: comentarioRemoved
            });
          }


        });
    }


  });
}

function getProblem(req, res) {
  var problemId = req.params.id;
  console.log(problemId);
  Problem.findById(problemId, (err, problemBuscado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        error: "Error en la peticion"
      });
    }

    if (!problemBuscado) {
      return res.status(400).json({
        ok: false,
        message: 'El problem no existe o fue eliminado'
      });
    }

    var problemEncontrado = problemBuscado;
    var coment = Comentario.find({ problem: problemId }).sort('fecha');
    var likes = Like.find({ problem: problemId }).sort('fecha');

    coment.populate({ path: 'user' }).exec((err, comentario) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          error: 'Error en la base datos'
        });
      }

      if (!comentario) {
        return res.status(400).json({
          ok: false,
          message: 'No se pudo encontrar este comentario'
        });
      }

      /* res.status(200).json({
          ok: true,
          comentarios: comentario,
          message: 'Comentarios de Problem'
      }) */


      likes.populate({ path: 'user' }).exec((err, like) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            error: 'Error en la base datos'
          });
        }

        if (!like) {
          return res.status(400).json({
            ok: false,
            message: 'No se pudo encontrar likes'
          });
        }

        res.status(200).json({
          ok: true,
          comentarios: comentario,
          message: 'Comentarios de Problem',
          like: like,
          message: 'Likes del Problem'
        });
      });
    });


  });
}

module.exports = {
  saveProblem,
  deleteProblem,
  getProblem
}