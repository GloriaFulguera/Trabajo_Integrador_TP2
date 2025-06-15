const getConnection =require('../db/mysql')
const bcrypt=require('bcrypt')

class AlumnoService{
    async get(){
        const connection=await getConnection()
        const select="SELECT * FROM usuarios"
        const usuarios=await connection.query(select)
        return usuarios
    }

    async getPorId(id){
        const connection=await getConnection()
        const select="SELECT * FROM usuarios WHERE id=?"
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
        return {nuevoId,...alumno}
    }

    async put(id,alumnoEditado){
        const connection=await getConnection()
        const update=`UPDATE usuarios SET Nombre=?, Mail=?, Username=?, usu_mod=?, fe_mod=now()
        WHERE id=?`
        const valueUpdate=[alumnoEditado.nombre,alumnoEditado.mail,alumnoEditado.username,alumnoEditado.userMod,id]
        const result=connection.query(update,valueUpdate)
        return result
    }

    async delete(id,data){
        const connection=await getConnection()
        const update="UPDATE usuarios SET usu_baja=?, fe_baja=now() WHERE id=?"
        const result=connection.query(update,[data.userMod,id])
        return result
    }
}

module.exports=AlumnoService