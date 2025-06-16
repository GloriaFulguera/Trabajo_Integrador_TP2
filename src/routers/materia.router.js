const express=require('express')
const {
    getMaterias,
    postMaterias,
    getMateriaId,
    putMaterias,
    deleteMaterias
} =require('../controllers/materia.controller')
const {checkAdmin}=require('../middlewares/secure')

const materiaRouter=express.Router()

materiaRouter.use(express.json())

materiaRouter.get('/',getMaterias)

materiaRouter.get('/:id',getMateriaId)

materiaRouter.post('/',checkAdmin(),postMaterias)

materiaRouter.put('/:id',checkAdmin(),putMaterias)

materiaRouter.delete('/:id',checkAdmin(),deleteMaterias)

module.exports=materiaRouter