

const express = require('express')
const routerConfig = require('./routes/index.routes')
const globalConstants = require('./const/globalConstants')



const configuracionApi = (app) =>{

    // permite que express entienda json 
    app.use(express.json())
    // permite que express entienda formularios enviados por post y por put
    app.use(express.urlencoded({ extended: true }))

} 

// configura las rutas de la api
const configRouter = (app) =>{
    app.use('/api/', routerConfig.rutas_init())
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