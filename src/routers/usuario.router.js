const express=require('express')
const {crearUsuario}=require('../controllers/usuario.controller')

const usuarioRouter=express.Router()
usuarioRouter.use(express.json())

usuarioRouter.post('/usuario',crearUsuario)

module.exports=usuarioRouter