const joi=require('joi')

const id=joi.number().min(1).required().
messages({
    'any.required':'El id es obligatorio',
    'number.min':'El id debe ser mayor o igual a {#limit}',
    'number.base':'El valor debe ser un número entero'
})
const nombre=joi.string().min(2).max(100).required().
messages({
    'any.required': 'El nombre es obligatorio',
    'string.empty': 'El nombre no puede estar vacío',
    'string.min': 'El nombre debe tener al menos 2 caracteres',
    'string.max': 'El nombre no puede superar los 100 caracteres'
})
const usuarioAudit=joi.string().optional()
const usuarioRolAudit=joi.number().valid(1, 2, 3).optional()

const paramMateriaSchema=joi.object({
    id:id
})
const postMateriaSchema=joi.object({
    nombre:nombre,
    carrera:id,
    userMod:usuarioAudit,
    userModRol:usuarioRolAudit
})

module.exports={paramMateriaSchema,postMateriaSchema}