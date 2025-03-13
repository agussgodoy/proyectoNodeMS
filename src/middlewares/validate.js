// este es el archivo que se va a ejecutar en el medio del llamado al controller 

module.exports = (scheme) => {

    return (req, res, next) => {

        let result = scheme.validate(req.body)

        // si hay error
        if (result.error){
            next(result.error)
        }else{
            next()
        }
    }
}