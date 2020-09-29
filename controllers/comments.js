'use strict'

var Comentario = require('../models/comentario');
var User = require('../models/user');
var Post = require('../models/post');

function saveComentario(req, res) {

    var comentario = new Comentario();
    var params = req.body;

    console.log(params);

    comentario.respuesta = params.respuesta;
    comentario.fecha = new Date();
    comentario.tipo = params.tipo;
    comentario.user = params.user;
    comentario.post = params.post;

    comentario.save((err, comentarioStored) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!comentarioStored) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        var IdUser = comentario.user;

        console.log(IdUser);
        User.findById(IdUser, (err, UsuarioBuscado) => {

            if (UsuarioBuscado.role != 'Admin') {
                res.json({
                    ok: true,
                    comentario: comentarioStored,
                    message: 'Creacion Exitosa'
                });
            } else {
                var IdPost = comentario.post;
                var postActualizado;
                var postEncontrado;
                console.log(IdPost);
                Post.findById(IdPost, (err, postBuscado) => {
                    postEncontrado = postBuscado;
                    postEncontrado.estado = 'Respondido';
                    postActualizado = postEncontrado;
                    Post.findByIdAndUpdate(IdPost, postActualizado, (err, postBuscado) => {
                        res.json({
                            ok: true,
                            post: postBuscado,
                            message: 'Post Correctamente respondido por Usted'
                        });
                    });

                });
            }
        });
    });
}

function deleteComentario(req, res) {
    var ComentarioId = req.params.id;

    Comentario.findByIdAndRemove(ComentarioId, (err, comentarioRemoved) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error al eliminar el comentario'
            });
        }

        if (!comentarioRemoved) {
            return res.status(400).json({
                ok: false,
                message: 'El Comentario no fue eliminado'
            });
        }

        res.status(200).json({
            ok: true,
            comentario: comentarioRemoved,
            message: 'El comentario fue eliminado correctamente'
        });

    });
}

module.exports = {
    saveComentario,
    deleteComentario
}