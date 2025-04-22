const express= require('express')
const ejemploRouter=require('./routers/ejemploABM')

const app=express()

app.use('/api/ejemplo',ejemploRouter)

app.get('/api',(req,res)=>{
    res.send("Get basico desde index")
})

const PORT=3000

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})