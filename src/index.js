const express= require('express')
const usuarioRouter=require('./routers/usuario.router')
const alumnoRouter=require('./routers/alumno.router')
const materiaRouter=require('./routers/materia.router')
const inscripcionRouter=require('./routers/inscripcion.router')
const {errorHandler,logError}=require('./middlewares/error.handler')

const app=express()

app.get('/api/porfavor',(req,res)=>{
    res.send({
        "easter-egg":":)",
        "ver":"https://vm.tiktok.com/ZMBWVHoJ5/"
    })
})

app.use('/api',usuarioRouter)
app.use('/api/alumnos',alumnoRouter)
app.use('/api/materias',materiaRouter)
app.use('/api',inscripcionRouter)

app.use(logError)
app.use(errorHandler)

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})