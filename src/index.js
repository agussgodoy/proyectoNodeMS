

const express = require('express')
const routerConfig = require('./routes/index.routes')
const globalConstants = require('./const/globalConstants')
const logger = require('morgan');
const errorHandler = require('./middlewares/error')
let createError = require('http-errors') // manejo de errores http



const configuracionApi = (app) =>{

    // permite que express entienda json 
    app.use(express.json())
    // permite que express entienda formularios enviados por post y por put
    app.use(express.urlencoded({ extended: true }))
    app.use(logger('dev'))

    return

} 

// configura las rutas de la api
const configRouter = (app) =>{
    app.use('/api/', routerConfig.rutas_init())

    // si la ruta no existe, me crea un error 404
    app.use(function(req, res, next){
        next(createError(404))
    })
    
    app.use(errorHandler)
}

const init = () =>{

    // creo una instancia de express
    const app = express()

    // configura la api 
    configuracionApi(app)

    // configura las rutas
    configRouter(app)

    app.listen(globalConstants.PORT)
    console.log('La aplicación se está ejecutando en el puerto 5000 ')

}

init();