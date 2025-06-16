const getConnection =require('../db/mysql')

class InscripcionService{
    async post(data){
        const connection=await getConnection()
        const existe=`SELECT * FROM inscripciones WHERE id_alumno=? AND id_materia=?`
        const resExiste=await connection.query(existe,[data.idAlumno,data.idMateria])

        if(resExiste.length>0){
            if(!resExiste[0].fe_baja){
                const error=new Error("Ya existe una inscricpion activa para este alumno y materia")
                error.status=400
                throw error
            }
            const update=`UPDATE inscripciones SET usu_baja=NULL,fe_baja=NULL,usu_mod=?,fe_mod=now()
            WHERE id_alumno=? AND id_materia=?`
            const valueUpdate=[data.userMod,data.idAlumno,data.idMateria]
            await connection.query(update,valueUpdate)
            return {message:"Inscripción reactivada correctamente"}
        }

        const insert=`INSERT INTO inscripciones(Id_alumno,Id_materia,usu_alta,fe_alta)
        VALUES (?,?,?,now())`
        const valueInsert=[data.idAlumno,data.idMateria,data.userMod]
        await connection.query(insert,valueInsert)
        return {message:"Se generó una nueva inscripcion"}
    }

    async getMateriasAlumno(id){
        const connection=await getConnection()
        const select=`SELECT i.id_alumno idAlumno,u.nombre alumno, i.id_materia idMateria, m.nombre materia
        FROM inscripciones i
        LEFT JOIN usuarios u ON i.id_alumno=u.id
        LEFT JOIN materias m ON i.id_materia=m.id
        WHERE i.id_alumno=? AND i.fe_baja IS NULL`
        const result=await connection.query(select,[id])
        return result
    }

    async getAlumnosMateria(id){
        const connection=await getConnection()
        const select=`SELECT i.id_materia idMateria, m.nombre materia, i.id_alumno idAlumno, u.nombre alumno 
        FROM inscripciones i
        LEFT JOIN materias m ON i.id_materia=m.id
        LEFT JOIN usuarios u ON i.id_alumno=u.id
        WHERE i.id_materia=? AND i.fe_baja IS NULL`
        const result=await connection.query(select,[id])
        return result
    }

    async deleteInscripcion(data) {
        const connection=await getConnection()
        const del=`UPDATE inscripciones SET usu_baja=?,fe_baja=now()
        WHERE id_alumno=? AND id_materia=?`
        const valueDelete=[data.userMod,data.idAlumno,data.idMateria]
        await connection.query(del,valueDelete)
        return {message:"Inscripcion dada de baja correctamente"}
    }
}
module.exports=InscripcionService