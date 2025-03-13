const errors = require('../const/errors')

module.exports = function(err, req, res, next){


    let response = {
        success: false,
        error: {
            code: err.code || 500,
            message: err.message || 'Internal Server Error'
        }
    }

    // validacion de datos
    if(err.isJoi){
        
        // me guardo qué tipo de error fue
        let validationErrorType = err.details[0].type 
        let errorKey = 'ValidationError'

        // error de que faltan parámetros
        if(validationErrorType === 'any.required'){
            errorKey = 'FaltanCampos'
        }

        response.error.code = errors[errorKey].code
        response.error.message = errors[errorKey].message   
    }

    // también podría crearlo de la manera anterior y usar el archivo de constantes de errores
    if(err.message === 'Not Found'){
        response.error.code = 404,
        response.error.message= 'Not Found'
    }

    res.status(200).json(response)
}