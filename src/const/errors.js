// archivo en el que creo los mensajes de error junto con los códigos correspondientes

module.exports = {

    'ValidationError': {
        code: 1000,
        message: 'Error de Validación'
    },

    'FaltanCampos': {
        code: 1001,
        message: 'Faltan campos necesarios'
    }, 

    'PacienteInexistente': {
        code: 1002,
        message: 'El paciente solicitado no existe'
    }
}