var Consulta = require('../models/consulta')

// GET /consultas/:id
module.exports.getConsulta = id => {
    return Consulta
        .findOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// GET /consultas/nomes 
module.exports.listNomes = () => {
    return Consulta.find({}, 'nome').sort({ nome: 1 }).map(consulta => consulta.nome)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

//GET /consultas/interv: devolve a lista de intervenções realizadas (lista de triplos sem repetições e ordenada por código: código, nome e descrição), ou seja, devolve o catálogo de serviços prestados pela clínica;
module.exports.listInterv = () => {
    return Consulta.find({}, 'operacoes').sort({ operacoes: 1 }).map(consulta => consulta.operacoes)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

//POST /consultas: acrescenta um registo novo à BD;
module.exports.insert = consulta => {
    return Consulta.create(consulta)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// list
module.exports.list = () => {
    return Consulta.find()
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// listSexo
module.exports.listSexo = sexo => {
    return Consulta.find({sexo: sexo})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// listIdade
module.exports.listIdade = idade => {
    return Consulta.find({idade: idade})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

// DELETE /consultas/:id: elimina da BD o registo com o identificador id.
module.exports.delete = id => {
    return Consulta.deleteOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}
