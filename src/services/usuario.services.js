const getConnection =require('../db/mysql')
const bcrypt=require('bcrypt')

class UsuarioService{
    async crearUsuario(usuarioNuevo){
        const connection=await getConnection()
        const hash=await bcrypt.hash(usuarioNuevo.password,10)

        const insert=`INSERT INTO usuarios(Nombre,Mail,Username,Password,Rol)
        values (?,?,?,?,?)`//las commitas esas van con ALT+96
        const valueInsert=[usuarioNuevo.nombre,usuarioNuevo.mail,usuarioNuevo.username,hash,usuarioNuevo.rol]

        const result=await connection.query(insert,valueInsert)

        const nuevoId=result.insertId
        return{nuevoId, ...usuarioNuevo}
    }
}

module.exports=UsuarioService