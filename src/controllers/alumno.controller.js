const AlumnoService=require('../services/alumno.services')

const service=new AlumnoService()

async function getAlumnos(req,res){
    try{
        const usuarios= await service.get()
        res.send(usuarios)
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

async function getAlumnoId(req,res){
    try{
        const alumnoId=req.params.id
        const alumno= await service.getPorId(alumnoId)
        res.send(alumno)
    }
    catch(error){
        res.status(404).json({
            message:error.message
        })
    }
}

async function postAlumno(req,res){
    try{
        const aNuevo=req.body
        const alumnoNuevo=await service.post(aNuevo)
        res.send(alumnoNuevo)
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}

async function putAlumno(req,res){
    try{
        const id=req.params.id
        const aEdit=req.body
        const alumnoEdit=await service.put(id,aEdit)
        res.send(alumnoEdit)
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
} 

module.exports={
    getAlumnos,
    getAlumnoId,
    postAlumno,
    putAlumno
}