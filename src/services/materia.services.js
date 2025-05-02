const materias=require('../data/materias')

class materiaService{
    constructor(){
        this.materias=materias.infoMaterias
    }

    async get(){
        return this.materias.mat
    }
}

module.exports=materiaService