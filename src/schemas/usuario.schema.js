const joi=require('joi')

const usuario=joi.string().min(2).max(100).required().
messages({
    'any.required': 'El usuario es obligatorio',
    'string.empty': 'El usuario no puede estar vacío',
    'string.min': 'El usuario debe tener al menos 2 caracteres',
    'string.max': 'El usuario no puede superar los 100 caracteres'
})
const pass=joi.string().min(4).max(200).required().
messages({
    'any.required': 'La constraseña es obligatoria',
    'string.empty': 'La constraseña no puede estar vacía',
    'string.min': 'La constraseña debe tener al menos 4 caracteres',
    'string.max': 'La constraseña no puede superar los 200 caracteres'
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
const rol=joi.number().min(1).max(2).required().
messages({
    'any.required':'El rol es obligatorio',
    'number.min':'El rol debe ser mayor o igual a {#limit}',
    'number.max':'El rol debe ser menor o igual a {#limit}',
    'number.base':'El valor debe ser un número entero'
})
const usuarioAudit = joi.any().forbidden()
const usuarioRolAudit = joi.any().forbidden()

const loginUsuarioSchema=joi.object({
    usuario:usuario,
    password:pass
})
const createUsuarioSchema=joi.object({
    nombre:nombre,
    mail:mail,
    username:usuario,
    password:pass,
    rol:rol,
    userMod:usuarioAudit,
    userModRol:usuarioRolAudit
})

module.exports={loginUsuarioSchema,createUsuarioSchema}