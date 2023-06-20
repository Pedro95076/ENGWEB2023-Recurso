var mongoose = require("mongoose");

var consultaSchema = new mongoose.Schema({
        _id: Number,
        "nome": String,
        "idade": Number,
        "sexo": String,
        "data": String,
        "nr_operacoes": Number,
        "operacoes": [
                {
                        "codigo": String,
                        "nome": String,
                        "descricao": Number
                }
        ]
});

module.exports = mongoose.model('consulta', consultaSchema);


    