function validatorHandler (schema,property){
    return (req,res,next)=>{
        const data=req[property]
        const result=schema.validate(data)

        if(result.error){
            const err=new Error(result.error.details[0].message)
            err.status=400
            next(err)
        }
        next()
    }
}

module.exports={validatorHandler}