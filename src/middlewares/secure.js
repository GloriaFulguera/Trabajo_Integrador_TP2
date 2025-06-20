const {decode}=require('../utils/jwt')

function checkAdmin(){
    return (req,res,next)=>{
        if(req.headers.authorization){
            const data=decode(req.headers.authorization)
            if(data && data.rol===1){
                if(!req.body){
                    req.body={}
                }
                req.body.userMod=data.username
                req.body.userModRol=data.rol
                return next()
            }
        }
        const error=new Error("Privilegios insuficientes")
        error.status=401
        next(error)
    }
}

function checkAdminOrCoord(){
    return (req,res,next)=>{
        if(req.headers.authorization){
            const data=decode(req.headers.authorization)
            if(data && (data.rol===1||data.rol===2)){
                if(!req.body){
                    req.body={}
                }
                req.body.userMod=data.username
                req.body.userModRol=data.rol
                return next()
            }
        }
        const error=new Error("Privilegios insuficientes")
        error.status=401
        next(error)
    }
}

function checkAdminOrStd(){
    return (req,res,next)=>{
        if(req.headers.authorization){
            const data=decode(req.headers.authorization)
            if(data && (data.rol===1||(data.rol===3 && data.id===parseInt(req.params.id)))){
                if(!req.body){
                    req.body={}
                }
                req.body.userMod=data.username
                req.body.userModRol=data.rol
                return next()
            }
        }
        const error=new Error("Privilegios insuficientes")
        error.status=401
        next(error)
    }
}

function checkCoordOrStd(){
    return (req,res,next)=>{
        if(req.headers.authorization){
            const data=decode(req.headers.authorization)
            if(data && (data.rol===2||(data.rol===3 && data.id===parseInt(req.params.id)))){
                if(!req.body){
                    req.body={}
                }
                req.body.userMod=data.username
                req.body.userModRol=data.rol
                return next()
            }
        }
        const error=new Error("Privilegios insuficientes")
        error.status=401
        next(error)
    }
}

function checkAdminCoordOrStd(){
    return (req,res,next)=>{
        if(req.headers.authorization){
            const data=decode(req.headers.authorization)
            if(data&&(data.rol===1||data.rol===2||data.id===parseInt(req.params.id))){
                if(!req.body){
                    req.body={}
                }
                req.body.userMod=data.username
                req.body.userModRol=data.rol
                return next()
            }
        }
        const error=new Error("No tiene permisos para acceder a esta información.")
        error.status=401
        next(error)
    }
}

module.exports={checkAdmin,checkAdminOrCoord,checkAdminOrStd,checkCoordOrStd,checkAdminCoordOrStd}