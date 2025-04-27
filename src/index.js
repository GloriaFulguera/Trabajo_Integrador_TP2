const express= require('express')
const alumnoRouter=require('./routers/alumno.router')

const app=express()

app.get('/api',(req,res)=>{
    res.send("Get basico desde index")
})

app.use('/api/',alumnoRouter)

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})