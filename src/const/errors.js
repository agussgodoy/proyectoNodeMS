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
    },

    'CredencialesInvalidas': {
        code: 1003,
        message: 'Las credenciales son inválidas'
    },

    SesionExpirada: {
        code: 1004, 
        message: 'Su sesión ha expirado. Vuelva a loguearse.'
    },

    UsuarioNoAutorizado: {
        code: 1005,
        message: 'Su usuario no está autorizado'
    }
}