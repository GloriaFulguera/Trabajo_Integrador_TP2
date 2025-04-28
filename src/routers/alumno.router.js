const express=require('express')
const {
    getAlumnos,
    getAlumnoId,
    postAlumno
} =require('../controllers/alumno.controller')

const alumnoRouter=express.Router()

alumnoRouter.use(express.json())

alumnoRouter.get('/alumnos', getAlumnos)
alumnoRouter.get('/alumnos/:id', getAlumnoId)
alumnoRouter.post('/alumnos',postAlumno)

module.exports=alumnoRouter