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

module.exports={
    crearUsuario
}