const joi=require('joi')

const id=joi.number().min(1).required().
messages({
    'any.required':'El id es obligatorio',
    'number.min':'El id debe ser mayor o igual a {#limit}',
    'number.base':'El valor debe ser un número entero'
})

const usuarioAudit=joi.string().optional()
const usuarioRolAudit=joi.number().valid(1, 2, 3).optional()

const postInscripcionSchema=joi.object({
    idAlumno:id,
    idMateria:id,
    userMod:usuarioAudit,
    userModRol:usuarioRolAudit
})
const paramInscripcionSchema=joi.object({
    id:id
})

module.exports={postInscripcionSchema,paramInscripcionSchema}