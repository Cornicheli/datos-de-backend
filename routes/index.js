let router = require('express').Router()
//requiero el modulo de express 

// requiero las rutas de cada modelo a controlar
let users = require('./users') // ubicacion de las rutas de user 


// le obligo al enrrutador principal que usea la palabra "/user" para poder controlar las rutas de x

router.use('./user', user)

router.use('./user', )

module.exports = router







// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
