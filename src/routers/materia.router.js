const express=require('express')
const {
    getMaterias,
    postMaterias,
    getMateriaId,
    putMaterias,
    deleteMaterias
} =require('../controllers/materia.controller')
const {paramMateriaSchema,postMateriaSchema}=require('../schemas/materia.schema')
const {validatorHandler}=require('../middlewares/validator.handler')
const {checkAdmin}=require('../middlewares/secure')

const materiaRouter=express.Router()

materiaRouter.use(express.json())

materiaRouter.get('/',getMaterias)

materiaRouter.get('/:id',
    validatorHandler(paramMateriaSchema,'params'),
    getMateriaId)

materiaRouter.post('/',
    checkAdmin(),
    validatorHandler(postMateriaSchema,'body'),
    postMaterias)

materiaRouter.put('/:id',
    checkAdmin(),
    validatorHandler(paramMateriaSchema,'params'),
    validatorHandler(postMateriaSchema,'body'),
    putMaterias)

materiaRouter.delete('/:id',
    checkAdmin(),
    validatorHandler(paramMateriaSchema,'params'),
    deleteMaterias)

module.exports=materiaRouter