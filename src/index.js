const express= require('express')
const alumnoRouter=require('./routers/alumno.router')
const materiaRouter=require('./routers/materia.router')

const app=express()

//TO DO: cambiarlo por easter egg
app.get('/api',(req,res)=>{
    res.send("Get basico desde index")
})

app.use('/api/',alumnoRouter)
app.use('/api/',materiaRouter)

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})