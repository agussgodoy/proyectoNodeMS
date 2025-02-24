require('dotenv').config()

module.exports = {

    // en caso de no existir el archivo o la variable de entorno PORT, toma 
    // por defecto el valor 5000
    PORT : process.env.PORT || 5000,
    DB_NAME : process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD

}