const express= require('express')

const app=express()

app.get('/api',(req,res)=>{
    res.send("Get basico desde index")
})

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})