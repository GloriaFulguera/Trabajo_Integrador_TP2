const e = require('express')
const UsuarioService=require('../services/usuario.services')

const service=new UsuarioService()

async function getUsuarios(req,res){
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

module.exports={
    getUsuarios,
    getAlumnoId
}