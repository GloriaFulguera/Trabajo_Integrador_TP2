const usuarios=require('../data/usuarios')

class UsuarioService{
    constructor(){
        this.usuarios=usuarios.infoUsuarios
    }

    async get(){
        return this.usuarios
    }
}

module.exports=UsuarioService