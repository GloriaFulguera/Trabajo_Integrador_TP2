const express= require('express')
const usuarioRouter=require('./routers/usuario.router')
const alumnoRouter=require('./routers/alumno.router')
const materiaRouter=require('./routers/materia.router')
const {errorHandler,logError}=require('./middlewares/error.handler')

const app=express()

//TO DO: cambiarlo por easter egg
app.get('/api',(req,res)=>{
    res.send("Get basico desde index")
})

app.use('/api/',usuarioRouter)
app.use('/api/',alumnoRouter)
app.use('/api/',materiaRouter)

app.use(logError)
app.use(errorHandler)

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})