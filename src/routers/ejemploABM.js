const express=require('express')

const ejemploRouter=express.Router()
ejemploRouter.use(express.json())

ejemploRouter.get('/',(req,res)=>{
    res.send("Get ejemplorouter")
})

ejemploRouter.post('/',(req,res)=>{
    res.send("Post ejemplorouter")
})

ejemploRouter.put('/',(req,res)=>{
    res.send("Put ejemplorouter")
})

ejemploRouter.delete('/',(req,res)=>{
    res.send("Delete ejemplorouter")
})

module.exports=ejemploRouter