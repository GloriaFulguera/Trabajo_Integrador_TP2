const getConnection =require('../db/mysql')

class materiaService{
    async get(){
        const connection=await getConnection()
        const select=`SELECT m.id idMateria,m.nombre nombre,c.id idCarrera,c.nombre carrera 
        FROM materias m
        LEFT JOIN carreras c ON m.carrera=c.id`
        const result= connection.query(select)
        return result
    }

    async getPorId(id){
        const connection=await getConnection()
        const select=`SELECT m.id idMateria,m.nombre nombre,c.id idCarrera,c.nombre carrera 
        FROM materias m
        LEFT JOIN carreras c ON m.carrera=c.id
        WHERE m.id=?`
        const result=await connection.query(select,[id])
        return result
    }

    async post(data){
        const connection=await getConnection()
        const existe=`SELECT * FROM materias WHERE nombre=? AND carrera=?`
        const resExiste=await connection.query(existe,[data.nombre,data.carrera])

        if(resExiste.length>0){
            if(!resExiste[0].fe_baja){
                const error=new Error("Ya existe una materia activa con ese nombre y carrera")
                error.status=400
                throw error
            }
            const update=`UPDATE materias SET usu_baja=NULL,fe_baja=NULL,usu_mod=?,fe_mod=now()
            WHERE nombre=? AND carrera=?`
            const valueUpdate=[data.userMod,data.nombre,data.carrera]
            await connection.query(update,valueUpdate)
            return {message:"Materia reactivada correctamente"}
        }

        const insert=`INSERT INTO materias(Nombre,Carrera,usu_alta,fe_alta)
        VALUES (?,?,?,now())`
        const valueInsert=[data.nombre,data.carrera,data.userMod]
        const result=await connection.query(insert,valueInsert)

        const nuevoId=result.insertId
        return {message:`Se genero la nueva materia con id: ${nuevoId}`}
    }

    async put(id,data){
        const connection=await getConnection()
        const update=`UPDATE materias SET Nombre=?,Carrera=?,usu_mod=?,fe_mod=now()
        WHERE id=?`
        const valueUpdate=[data.nombre,data.carrera,data.userMod,id]
        const result=await connection.query(update,valueUpdate)
        return {
                id: id,
                nombre: data.nombre,
                carrera: data.carrera,
                };
    }

    async delete(id,data){
        const connection=await getConnection()
        const del="UPDATE materias SET usu_baja=?, fe_baja=now() WHERE id=?"
        const result=await connection.query(del,[data.userMod,id])
        return {message:"Materia dada de baja correctamente"}
    }
}

module.exports=materiaService