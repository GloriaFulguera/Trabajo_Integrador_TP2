const express= require('express')
const usuarioRouter=require('./routers/usuario.router')

const app=express()

app.get('/api',(req,res)=>{
    res.send("Get basico desde index")
})

app.use('/api/',usuarioRouter)// este quiza me convenga renombrarlo a "alumnoRouter"

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})