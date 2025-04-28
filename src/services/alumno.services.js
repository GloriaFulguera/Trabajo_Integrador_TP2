const usuarios=require('../data/usuarios')

class AlumnoService{
    constructor(){
        this.usuarios=usuarios.infoUsuarios
    }

    async get(){
        return (this.usuarios).usuarios.filter(usuario=>usuario.rol==="alumno")
    }

    async getPorId(id){
        for(let i=0;i<(this.usuarios).usuarios.length;i++){
            if(this.usuarios.usuarios[i].id.toString()===id){
                return this.usuarios.usuarios[i]
            }
        }
        throw new Error("El alumno con id ... no existe")
    }

    async post(alumno){
        this.usuarios.usuarios.push(alumno)
        return alumno
    }
}

module.exports=AlumnoService