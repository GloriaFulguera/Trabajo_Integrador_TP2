const AlumnoService=require('../services/alumno.services')

const service=new AlumnoService()

async function getAlumnos(req,res,next){
    try{
        const usuarios= await service.get()
        res.send(usuarios)
    }
    catch(error){
        next(error)
    }
}

async function getAlumnoId(req,res,next){
    try{
        const alumnoId=req.params.id
        const alumno= await service.getPorId(alumnoId)
        res.send(alumno)
    }
    catch(error){
        next(error)
    }
}

async function postAlumno(req,res,next){
    try{
        const aNuevo=req.body
        const alumnoNuevo=await service.post(aNuevo)
        res.send(alumnoNuevo)
    }
    catch(error){
        next(error)
    }
}

async function putAlumno(req,res,next){
    try{
        const id=req.params.id
        const aEdit=req.body
        const alumnoEdit=await service.put(id,aEdit)
        res.send(alumnoEdit)
    }
    catch(error){
        next(error)
    }
} 

async function deleteAlumno(req,res,next){
    try{
        const id=req.params.id
        const data=req.body
        const del=await service.delete(id,data)
        res.send(del)
    }
    catch(error){
        next(error)
    }
}

module.exports={
    getAlumnos,
    getAlumnoId,
    postAlumno,
    putAlumno,
    deleteAlumno
}