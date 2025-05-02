const express=require('express')
const {getMaterias} =require('../controllers/materia.controller')

const materiaRouter=express.Router()

materiaRouter.use(express.json())

materiaRouter.get('/materias',getMaterias)

module.exports=materiaRouter