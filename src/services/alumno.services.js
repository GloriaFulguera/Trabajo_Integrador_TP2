const getConnection =require('../db/mysql')
const bcrypt=require('bcrypt')

class AlumnoService{
    async get(){
        const connection=await getConnection()
        const select=`SELECT id,nombre,mail,username FROM usuarios WHERE rol=3`
        const usuarios=await connection.query(select)
        return usuarios
    }

    async getPorId(id){
        const connection=await getConnection()
        const select="SELECT id,nombre,mail,username FROM usuarios WHERE id=? AND rol=3"
        const usuario=await connection.query(select,[id])
        return usuario
    }

    async post(alumno){
        const connection=await getConnection()
        const hash=await bcrypt.hash(alumno.password,10)
        const insert=`INSERT INTO usuarios(Nombre,Mail,Username,Password,Rol,usu_alta,fe_alta)
        VALUES (?,?,?,?,?,?,now())`
        const valueInsert=[alumno.nombre,alumno.mail,alumno.username,hash,3,alumno.userMod]
        const result=await connection.query(insert,valueInsert)

        const nuevoId=result.insertId
        return {message:`Se genero un nuevo alumno con id: ${nuevoId}`}
    }

    async put(id,alumnoEditado){
        const connection=await getConnection()
        const existe=`SELECT 1 EXISTE FROM usuarios
        WHERE username=? AND id != ?`
        const resExiste=await connection.query(existe,[alumnoEditado.username,id])
        if(resExiste[0]){
            const error=new Error("El nombre de usuario ya está en uso")
            error.status=409
            throw error
        }

        const update=`UPDATE usuarios SET Nombre=?, Mail=?, Username=?, usu_mod=?, fe_mod=now()
        WHERE id=?`
        const valueUpdate=[alumnoEditado.nombre,alumnoEditado.mail,alumnoEditado.username,alumnoEditado.userMod,id]
        connection.query(update,valueUpdate)
        return {
                id: id,
                nombre: alumnoEditado.nombre,
                mail: alumnoEditado.mail,
                username: alumnoEditado.username
                };
    }

    async delete(id,data){
        const connection=await getConnection()
        const update="UPDATE usuarios SET usu_baja=?, fe_baja=now() WHERE id=?"
        connection.query(update,[data.userMod,id])
        return {message:"Alumno dado de baja correctamente"}
    }
}

module.exports=AlumnoService