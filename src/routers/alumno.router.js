const express=require('express')
const {
    getUsuarios,
    getAlumnoId
} =require('../controllers/alumno.controller')

const alumnoRouter=express.Router()

alumnoRouter.use(express.json())

alumnoRouter.get('/alumnos', getUsuarios)
alumnoRouter.get('/alumnos/:id', getAlumnoId)

module.exports=alumnoRouter