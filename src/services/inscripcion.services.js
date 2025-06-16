const getConnection =require('../db/mysql')

class InscripcionService{
    async post(data){
        const connection=await getConnection()
        const insert=`INSERT INTO inscripciones(Id_alumno,Id_materia,usu_alta,fe_alta)
        VALUES (?,?,?,now())`
        const valueInsert=[data.idAlumno,data.idMateria,data.userMod]
        const result=await connection.query(insert,valueInsert)
        return result
    }

    async getMateriasAlumno(id){
        const connection=await getConnection()
        const select=`SELECT * FROM inscripciones WHERE id_alumno=?`
        const result=await connection.query(select,[id])
        return result
    }

    async getAlumnosMateria(id){
        const connection=await getConnection()
        const select=`SELECT * FROM inscripciones WHERE id_materia=?`
        const result=await connection.query(select,[id])
        return result
    }
}
module.exports=InscripcionService