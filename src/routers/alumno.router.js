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
const {
    checkAdmin,
    checkAdminOrCoord,
    checkAdminCoordOrStd,
    checkAdminOrStd}=require('../middlewares/secure')

const alumnoRouter=express.Router()

alumnoRouter.use(express.json())

//TO DO: Agregar middlewares
alumnoRouter.get('/',checkAdminOrCoord(),getAlumnos)
alumnoRouter.get('/:id',checkAdminCoordOrStd(),validatorHandler(paramAlumnoSchema,'params'), getAlumnoId) //getAlumnoId)
alumnoRouter.post('/',checkAdmin(),postAlumno)
alumnoRouter.put('/:id',checkAdminOrStd(),putAlumno)
alumnoRouter.delete('/:id',checkAdmin(),deleteAlumno)

module.exports=alumnoRouter