const express=require('express')
const {
    getAlumnos,
    getAlumnoId,
    postAlumno,
    putAlumno
} =require('../controllers/alumno.controller')

const alumnoRouter=express.Router()

alumnoRouter.use(express.json())

alumnoRouter.get('/alumnos', getAlumnos)
alumnoRouter.get('/alumnos/:id', getAlumnoId)
alumnoRouter.post('/alumnos',postAlumno)
alumnoRouter.put('/alumnos/:id',putAlumno)

module.exports=alumnoRouter