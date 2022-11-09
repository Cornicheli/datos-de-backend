// requiero el modelo que necesito controlar
const User = require('../models/User')

// segundo defino el controlador
const controller ={

//cada uno de los metodos son asincronos, porque dependen del tiempo esperar la peticion/repuesta
// la funcion asincrona SIEMPRE va a depender de dos parametros:
// REQ (requerimiento de la peticion)
// RES (respuesta de la peticion)
// se le puede poner cualquier nombre a los parametros de la asincrona, pero el primero parametro SIEMPRE hace referencia al (requerimiento) y el segundo SIEMPRE hace referencia al res
// metodo para crear un documento USARIO

    create: () => {
        //el objeto creado en el fron (siguiendo la forma del modelo)
        //y ahora lo guardo en el localStorage es el requerimiento de nuestro modelo
        // requerimiento va a ser el objeto que mandar en el 
        //se encuentra guardado el obejto con los datos
        // en la propiedad body del objeto requerimiendo
        //construir/crear un nuevo documento 
        try{
            let new_user = await User.create(requerimiento.body)
            
            respuesta.status(201).json({
                id : new_user_id,
                succes : true,
                message : error.message
            })
        
        } catch (error) {
            respuesta.status(400).json({
                id : new_user_id,
                succes : false,
                message : error.message
            })
        }
    },

//metodo para leer/obetner todos los documentos USARIO

    read:  () => {},

//metodo para actualizar un documento USARIO

    update:  () => {},

// metodo para eliminar un documento USARIO

    destroy:  () => {},
}

//tercero exporto el controlador
module.exports = controller