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

materiaRouter.get('/materias',getMaterias)

materiaRouter.get('/materias/:id',getMateriaId)

materiaRouter.post('/materias',checkAdmin(),postMaterias)

materiaRouter.put('/materias/:id',checkAdmin(),putMaterias)

materiaRouter.delete('/materias/:id',checkAdmin(),deleteMaterias)

module.exports=materiaRouter