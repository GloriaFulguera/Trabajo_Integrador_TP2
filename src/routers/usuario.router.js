const express=require('express')
const {getUsuarios} =require('../controllers/usuario.controller')

const usuarioRouter=express.Router()

usuarioRouter.use(express.json())

usuarioRouter.get('/',getUsuarios)

module.exports=usuarioRouter