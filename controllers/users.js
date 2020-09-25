'use strict'

var Users = require('../models/users');


function saveUsers(req, res) {
  var users = new Users();
  var params = req.body;

  console.log(params);
  users.name = params.name;
  users.surname = params.surname;
  users.email = params.email;
  users.phone = params.phone;
  users.password = params.password;
  users.role = params.role;

  users.save((err, usersStored) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!usersStored) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      users: usersStored,
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

function updateUsers(req, res) {
  var usersId = req.params.id;
  var update = req.body;

  Users.findByIdAndUpdate(usersId, update, (err, usersUpdated) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: 'Error al actualizar el usuario'
      });
    }

    if (!usersUpdated) {
      return res.status(400).json({
        ok: false,
        message: 'No se pudo actualizar al usuario'
      });
    }

    res.status(200).json({
      ok: true,
      users: usersUpdated,
      message: 'El usuario fue actualizado'
    });
  });
}

module.exports = {
  saveUsers,
  loginUser,
  updateUsers
};