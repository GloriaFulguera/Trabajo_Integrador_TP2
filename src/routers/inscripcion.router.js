const express=require('express')
const {
    postInscripcion,
    getMateriasAlumno,
    getAlumnosMateria
}=require('../controllers/inscripcion.controller')
const {checkAdmin,checkAdminOrStd}=require('../middlewares/secure')

const inscripcionRouter=express.Router()
inscripcionRouter.use(express.json())

inscripcionRouter.post('/inscripciones',checkAdminOrStd(),postInscripcion)

inscripcionRouter.get('/alumnos/:id/materias',getMateriasAlumno)

inscripcionRouter.get('/materias/:id/alumnos',getAlumnosMateria)

module.exports=inscripcionRouter