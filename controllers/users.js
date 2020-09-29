'use strict'

var Users = require('../models/users');


function saveUser(req, res) {
  var user = new Users();
  var params = req.body;

  console.log(params);
  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.phone = params.phone;
  user.password = params.password;
  user.role = params.role;

  user.save((err, userStored) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!userStored) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      users: userStored,
      message: 'Creacion Exitosa'
    });
  });

}

function loginUser(req, res) {
  var params = req.body;

  var username = params.username;
  console.log(username);
  var password = params.password;
  console.log(password);

  Users.findOne({ username: username }, (err, user) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        message: 'Error en el username o password'
      });
    }

    console.log(user);


    if (!user) {
      return res.status(400).json({
        ok: false,
        message: 'Error en el username o password'
      });
    }

    if (user.password == password) {
      return res.json({
        ok: true,
        user: user,
        message: 'Se Logueo correctamente'
      });
    } else {
      return res.status(500).json({
        ok: false,
        message: 'Error en el username o password'
      });
    }

  });
}

function updateUser(req, res) {
  var usersId = req.params.id;
  var update = req.body;

  Users.findByIdAndUpdate(userId, update, (err, userUpdated) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: 'Error al actualizar el usuario'
      });
    }

    if (!userUpdated) {
      return res.status(400).json({
        ok: false,
        message: 'No se pudo actualizar al usuario'
      });
    }

    res.status(200).json({
      ok: true,
      users: userUpdated,
      message: 'El usuario fue actualizado'
    });
  });
}

module.exports = {
  saveUser,
  loginUser,
  updateUser
};