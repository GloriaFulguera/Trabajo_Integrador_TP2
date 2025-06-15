const getConnection =require('../db/mysql')
const {sign}=require('../utils/jwt')
const bcrypt=require('bcrypt')

class UsuarioService{
    async crearUsuario(usuarioNuevo){
        const connection=await getConnection()
        const hash=await bcrypt.hash(usuarioNuevo.password,10)

        const insert=`INSERT INTO usuarios(Nombre,Mail,Username,Password,Rol,usu_alta,fe_alta)
        values (?,?,?,?,?,?,now())`//las commitas esas van con ALT+96
        const valueInsert=[usuarioNuevo.nombre,usuarioNuevo.mail,usuarioNuevo.username,hash,usuarioNuevo.rol,"localhost"]

        const result=await connection.query(insert,valueInsert)

        const nuevoId=result.insertId
        return{nuevoId, ...usuarioNuevo}
    }
    async login(data){
        const connection=await getConnection()
        const select=`SELECT Id id, Nombre nombre,Mail mail,Username username,Password pass,Rol rol
        FROM usuarios WHERE Username=?`

        const usuario=await connection.query(select,[data.usuario])
        if(usuario[0]){
            const {id,nombre,mail,username,pass,rol}=usuario[0]

            return bcrypt.compare(data.password,pass)
            .then(sonIguales=>{
                if(sonIguales){
                    const token={token:sign({id,username,rol})}
                    return{login:true,...token}
                }
                else{
                    const error=new Error("Datos de login incorrectos")
                    error.status=401
                    throw error
                }
            })
        }
        else{
            const error = new Error("Datos de login incorrectos")
            error.status=401
            throw error
        }
    }
}

module.exports=UsuarioService