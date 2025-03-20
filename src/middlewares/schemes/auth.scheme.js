// archivo para escribir schemes de la autenticación
// lo que se aclara en este archivo es los datos y tipos de datos que se esperan recibir

const Joi = require('joi')

let login = Joi.object({
    
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports = {
    login
}