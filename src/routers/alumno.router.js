const express=require('express')
const {
    getAlumnos,
    getAlumnoId,
    postAlumno,
    putAlumno,
    deleteAlumno
} =require('../controllers/alumno.controller')
const {paramAlumnoSchema,postAlumnoSchema,putAlumnoSchema}=require('../schemas/alumno.schema')
const {validatorHandler}=require('../middlewares/validator.handler')
const {
    checkAdmin,
    checkAdminOrCoord,
    checkAdminCoordOrStd,
    checkAdminOrStd}=require('../middlewares/secure')

const alumnoRouter=express.Router()

alumnoRouter.use(express.json())

alumnoRouter.get('/',
    checkAdminOrCoord(),
    getAlumnos)
alumnoRouter.get('/:id',
    checkAdminCoordOrStd(),
    validatorHandler(paramAlumnoSchema,'params'),
    getAlumnoId)
alumnoRouter.post('/',
    checkAdmin(),
    validatorHandler(postAlumnoSchema),
    postAlumno)
alumnoRouter.put('/:id',
    checkAdminOrStd(),
    validatorHandler(paramAlumnoSchema,'params'),
    validatorHandler(putAlumnoSchema,'body'),
    putAlumno)
alumnoRouter.delete('/:id',
    checkAdmin(),
    validatorHandler(paramAlumnoSchema,'params'),
    deleteAlumno)

module.exports=alumnoRouter