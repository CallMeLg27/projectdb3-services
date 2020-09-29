'use strict'

require('dotenv').config()
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
var mongourl = process.env.MONGOURL || "mongodb://localhost:27017/projectDB3";
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log('La base de datos esta corriendo');

    app.listen(port, function() {
      console.log('Servidor escuchando' + port);
    });
  }
});