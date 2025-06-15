const materiaService=require('../services/materia.services')
const service=new materiaService()

async function getMaterias(req,res){
    try{
        const respuesta= await service.get()
        res.send(respuesta)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

async function getMateriaId(req,res) {
    try{
        const id=req.params.id
        const respuesta=await service.getPorId(id)
        res.send(respuesta)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

async function postMaterias(req,res){
    try{
        const data=req.body
        const materiaNueva=await service.post(data)
        res.send(materiaNueva)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

async function putMaterias(req,res) {
    try{
        const id=req.params.id
        const data=req.body
        const materiaUpdate= await service.put(id,data)
        res.send(materiaUpdate)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

async function deleteMaterias(req,res) {
    try{
        const id=req.params.id
        const data=req.body
        const respuesta=await service.delete(id,data)
        res.send("Materia dada de baja exitosamente")
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={getMaterias,postMaterias,getMateriaId,putMaterias,deleteMaterias}