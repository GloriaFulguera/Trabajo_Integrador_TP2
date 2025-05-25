const joi=require('joi')

//TO DO: armar los esquemas para usar con los middleware 

const id=joi.number().min(1).required().
messages({
    'any.required':'El Id es obligatorio'
})

const paramAlumnoSchema=joi.object({
    id:id
})

module.exports={paramAlumnoSchema}