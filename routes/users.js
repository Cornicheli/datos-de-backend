// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

let router = require("express").Router();

// desestructuro el controlador de user para traerme los metodo que necestio enrutar
let { create } = require("../controllers/user");


// utilizo el metodo route del enrrutador para gregar una palabrita extra a la ruta y concatenando todas las palabras por las que paso el enrrtador voy a obtejer la ruta total para poder controlar metodos

router.route("/create").post(create);

module.exports = router;
