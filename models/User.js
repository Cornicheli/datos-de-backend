// los modelos de datos se escriben con primera letra en mayusculas y singular
// las collecion son un conjunto de modelos y se escriben en minuscular y plural

// transfiero los id de mongoose a mi date, agrego el id nuevo

const mongoose = require("mongoose")

const schema = new mongoose.Schema({

        name: {type : String, required: true},
        lastName: {type : String, required: true},
        age:{type : Number, required: true},
        password: {type : Number, required: true},
        code: {type : String, required: true},
        verifed:{type: String, required: true},
        logged: {Type: String, required: true},
})

// para definir un modelo es necesario:
// nombre de la coleccion
// schema de datos

const User = mongoose.model('cities', schema)
module.exports = User