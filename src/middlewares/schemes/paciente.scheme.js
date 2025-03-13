// archivo para escribir schemes de pacientes
// lo que se aclara en este archivo es los datos y tipos de datos que se esperan recibir

const Joi = require('joi')

let crearPaciente = Joi.object({
    
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    telefono: Joi.string().optional(),
    medicoId: Joi.number().optional()
})

module.exports = {
    crearPaciente
}