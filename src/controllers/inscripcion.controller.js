const InscripcionService=require('../services/inscripcion.services')

const service=new InscripcionService()

async function postInscripcion(req,res,next) {
    try{
        const data=req.body
        const ins=await service.post(data)
        res.send(ins)
    }
    catch(error){
        next(error)
    }
}

async function getMateriasAlumno(req,res,next) {
    try{
        const id=req.params.id
        const ins=await service.getMateriasAlumno(id)
        res.send(ins)
    }
    catch(error){
        next(error)
    }
}

async function getAlumnosMateria(req,res,next) {
    try{
        const id=req.params.id
        const ins=await service.getAlumnosMateria(id)
        res.send(ins)
    }
    catch(error){
        next(error)
    }
}

async function deleteInscripcion(req,res,next) {
    try{
        const data=req.body
        const del=await service.deleteInscripcion(data)
        res.send(del)
    }
    catch(error){
        next(error)
    }
}

module.exports={postInscripcion,getMateriasAlumno,getAlumnosMateria,deleteInscripcion}