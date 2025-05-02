const materiaService=require('../services/materia.services')
const service=new materiaService()

async function getMaterias(req,res){
    try{
        const respuesta= await service.get()
        res.send(respuesta)
    }
    catch(error){

    }
}

module.exports={getMaterias}