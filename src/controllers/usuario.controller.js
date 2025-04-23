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

module.exports={
    getUsuarios
}