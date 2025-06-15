const jwt=require('jsonwebtoken')

function sign (data){
    return jwt.sign(data,process.env.JWT_SECRET)
}

function decode(auth){
    const token=getToken(auth)
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    return decoded
}

function getToken(auth){
    if(auth.indexOf("Bearer")===-1){
        const error=new Error("El token no se encuentra en el formato esperado")
        error.status=400
        //next(error)
    }
    let token=auth.replace('Bearer ','')
    return token
}
module.exports={sign, decode}