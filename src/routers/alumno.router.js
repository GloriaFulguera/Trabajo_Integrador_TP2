const express=require('express')
const {
    getAlumnos,
    getAlumnoId,
    postAlumno,
    putAlumno,
    deleteAlumno
} =require('../controllers/alumno.controller')
const {paramAlumnoSchema}=require('../schemas/alumno.schema')
const {validatorHandler}=require('../middlewares/validator.handler')

const alumnoRouter=express.Router()

alumnoRouter.use(express.json())

//TO DO: Agregar middlewares
alumnoRouter.get('/alumnos', getAlumnos)
alumnoRouter.get('/alumnos/:id', validatorHandler(paramAlumnoSchema,'params'), getAlumnoId) //getAlumnoId)
alumnoRouter.post('/alumnos',postAlumno)
alumnoRouter.put('/alumnos/:id',putAlumno)
alumnoRouter.delete('/alumnos/:id',deleteAlumno)

module.exports=alumnoRouter