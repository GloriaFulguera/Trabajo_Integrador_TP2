const express=require('express')


const usuarioRouter=express.Router()
usuarioRouter.use(express.json())


module.exports=usuarioRouter