const InscripcionService=require('../services/inscripcion.services')

const service=new InscripcionService()

async function postInscripcion(req,res) {
    try{
        const data=req.body
        const ins=await service.post(data)
        res.send(ins)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

async function getMateriasAlumno(req,res) {
    try{
        const id=req.params.id
        const ins=await service.getMateriasAlumno(id)
        res.send(ins)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

async function getAlumnosMateria(req,res) {
    try{
        const id=req.params.id
        const ins=await service.getAlumnosMateria(id)
        res.send(ins)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports={postInscripcion,getMateriasAlumno,getAlumnosMateria}