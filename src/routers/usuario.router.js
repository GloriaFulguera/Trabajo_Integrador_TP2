const express=require('express')
const {crearUsuario,login}=require('../controllers/usuario.controller')
const {loginUsuarioSchema,createUsuarioSchema}=require('../schemas/usuario.schema')
const {validatorHandler}=require('../middlewares/validator.handler')
const {checkAdmin}=require('../middlewares/secure')

const usuarioRouter=express.Router()
usuarioRouter.use(express.json())

usuarioRouter.post('/',
    validatorHandler(createUsuarioSchema,'body'),
    checkAdmin(),
    crearUsuario)
usuarioRouter.post('/login',
    validatorHandler(loginUsuarioSchema,'body'),
    login)

module.exports=usuarioRouter