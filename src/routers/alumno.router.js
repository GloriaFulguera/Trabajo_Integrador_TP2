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
const {checkAdmin,checkAdminOrStd}=require('../middlewares/secure')

const alumnoRouter=express.Router()

alumnoRouter.use(express.json())

//TO DO: Agregar middlewares
alumnoRouter.get('/', getAlumnos)
alumnoRouter.get('/:id', validatorHandler(paramAlumnoSchema,'params'), getAlumnoId) //getAlumnoId)
alumnoRouter.post('/',checkAdmin(),postAlumno)
alumnoRouter.put('/:id',checkAdminOrStd(),putAlumno)
alumnoRouter.delete('/:id',checkAdmin(),deleteAlumno)

module.exports=alumnoRouter