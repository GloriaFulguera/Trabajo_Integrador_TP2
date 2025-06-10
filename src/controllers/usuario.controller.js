const UsuarioService=require('../services/usuario.services')

const service=new UsuarioService()

async function crearUsuario(req,res,next){
    try{
        const data=req.body
        const result=await service.crearUsuario(data)
        res.send(result)
    }
    catch(error){
        next(error)
    }
}

async function login(req,res,next){
    try{
        const data=req.body
        const result=await service.login(data)
        res.send(result)
    }
    catch(error){
        next(error)
    }
}

module.exports={
    crearUsuario,
    login
}