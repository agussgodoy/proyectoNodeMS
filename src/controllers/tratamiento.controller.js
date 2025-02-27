
const model = require('../database/models/index')

module.exports = {


    listar: async (req, res) =>{
        
        const tratamientos = await model.tratamiento.findAll()
    
        res.json({
            success:true,
            data:{
                tratamientos: tratamientos
            }
        })
    }, 

    infoTratamiento: async (req, res) => {

        const tratamiento = await model.tratamiento.findOne({
            where: {
                id: req.params.idTratamiento
            }
        })

        if(tratamiento){

            res.json({
                success: true,
                data: {
                    tratamiento: tratamiento
                }
            })
        }else{
            res.json({
                success: false,
                message: "No se encotró el tratamiento"
            })
        }
    }, 

    crear: async (req, res) => {

        try{

            const tratamiento = await model.tratamiento.create(req.body)
    
            res.json({
                success:true,
                data:{
                    tratamiento: tratamiento
                }
            })
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        }   
    }
}