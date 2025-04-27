const express=require('express')
const {
    getUsuarios,
    getAlumnoId
} =require('../controllers/usuario.controller')

const usuarioRouter=express.Router()

usuarioRouter.use(express.json())

usuarioRouter.get('/alumnos', getUsuarios)
usuarioRouter.get('/alumnos/:id', getAlumnoId)

module.exports=usuarioRouter