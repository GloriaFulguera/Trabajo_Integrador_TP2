const usuarios=require('../data/usuarios')

class UsuarioService{
    constructor(){
        this.usuarios=usuarios.infoUsuarios
    }

    async get(){
        return (this.usuarios).usuarios.filter(usuario=>usuario.rol==="alumno")
    }

    async getPorId(id){
        for(let i=0;i<(this.usuarios).usuarios.length;i++){
            if((this.usuarios).usuarios[i].id==id)
                return (this.usuarios).usuarios[i]
        }
        throw new Error("El alumno con id ... no existe")
    }
}

module.exports=UsuarioService