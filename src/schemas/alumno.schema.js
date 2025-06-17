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
const mail=joi.string().min(4).max(100).required().
messages({
    'any.required': 'La direccion de mail es obligatoria',
    'string.empty': 'La direccion de mail no puede estar vacía',
    'string.min': 'La direccion de mail debe tener al menos 4 caracteres',
    'string.max': 'La direccion de mail no puede superar los 100 caracteres'
})
const username=joi.string().min(3).max(100).required().
messages({
    'any.required': 'El username es obligatorio',
    'string.empty': 'El username no puede estar vacío',
    'string.min': 'El username debe tener al menos 3 caracteres',
    'string.max': 'El username no puede superar los 100 caracteres'
})
const pass=joi.string().min(4).max(200).required().
messages({
    'any.required': 'La constraseña es obligatoria',
    'string.empty': 'La constraseña no puede estar vacía',
    'string.min': 'La constraseña debe tener al menos 4 caracteres',
    'string.max': 'La constraseña no puede superar los 200 caracteres'
})
const usuarioAudit=joi.string().optional()
const usuarioRolAudit=joi.number().valid(1, 2, 3).optional()

const paramAlumnoSchema=joi.object({
    id:id
})
const postAlumnoSchema=joi.object({
    nombre:nombre,
    mail:mail,
    username:username,
    password:pass,
    userMod:usuarioAudit,
    userModRol:usuarioRolAudit
})
const putAlumnoSchema=joi.object({
    nombre:nombre,
    mail:mail,
    username:username,
    userMod:usuarioAudit,
    userModRol:usuarioRolAudit
})

module.exports={paramAlumnoSchema,postAlumnoSchema,putAlumnoSchema}