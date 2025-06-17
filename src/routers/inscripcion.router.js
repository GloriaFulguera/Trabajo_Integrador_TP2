const express=require('express')
const {
    postInscripcion,
    getMateriasAlumno,
    getAlumnosMateria,
    deleteInscripcion
}=require('../controllers/inscripcion.controller')
const {postInscripcionSchema,paramInscripcionSchema}=require('../schemas/inscripcion.schema')
const {validatorHandler}=require('../middlewares/validator.handler')
const {
    checkAdminCoordOrStd,
    checkAdminOrCoord,
    checkAdminOrStd}=require('../middlewares/secure')

const inscripcionRouter=express.Router()
inscripcionRouter.use(express.json())

inscripcionRouter.post('/inscripciones',
    checkAdminOrStd(),
    validatorHandler(postInscripcionSchema,'body'),
    postInscripcion)

inscripcionRouter.get('/alumnos/:id/materias',
    checkAdminCoordOrStd(),
    validatorHandler(paramInscripcionSchema,'params'),
    getMateriasAlumno)

inscripcionRouter.get('/materias/:id/alumnos',
    checkAdminOrCoord(),
    validatorHandler(paramInscripcionSchema,'params'),
    getAlumnosMateria)

inscripcionRouter.delete('/inscripciones',
    checkAdminOrStd(),
    validatorHandler(postInscripcionSchema,'body'),
    deleteInscripcion)

module.exports=inscripcionRouter