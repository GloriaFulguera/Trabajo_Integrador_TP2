const getConnection =require('../db/mysql')

class materiaService{
    async get(){
        const connection=await getConnection()
        const select="SELECT * FROM materias"
        const result= connection.query(select)
        return result
    }

    async getPorId(id){
        const connection=await getConnection()
        const select="SELECT * FROM materias WHERE id=?"
        const result=await connection.query(select,[id])
        return result
    }

    async post(data){
        const connection=await getConnection()
        const insert=`INSERT INTO materias(Nombre,Carrera,usu_alta,fe_alta)
        VALUES (?,?,?,now())`
        const valueInsert=[data.nombre,data.carrera,data.userMod]
        const result=await connection.query(insert,valueInsert)

        const nuevoId=result.insertId
        return {nuevoId,...data}
    }

    async put(id,data){
        const connection=await getConnection()
        const update=`UPDATE materias SET Nombre=?,Carrera=?,usu_mod=?,fe_mod=now()
        WHERE id=?`
        const valueUpdate=[data.nombre,data.carrera,data.userMod,id]
        const result=await connection.query(update,valueUpdate)
        return result
    }

    async delete(id,data){
        const connection=await getConnection()
        const del="UPDATE materias SET usu_baja=?, fe_baja=now() WHERE id=?"
        const result=await connection.query(del,[data.userMod,id])
        return result
    }
}

module.exports=materiaService