require('dotenv').config()

module.exports = {

    PORT : process.env.PORT || 5000 
    // en caso de no existir el archivo o la variable de entorno PORT, toma 
    // por defecto el valor 5000

}