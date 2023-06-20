var express = require('express');
var router = express.Router();
var Consulta = require('../controllers/consulta');

// GET /consultas/:id
router.get('/consultas/:id', function(req, res, next) {
    Consulta.getConsulta(req.params.id)
      .then(dados => {
        res.jsonp(dados)
      })
      .catch(erro => {
        res.render('erro em GET /consultas/:id')
      })
});

// GET /consultas/nomes (sem repetições e ordenado alfabeticamente)
router.get('/consultas/nomes', function(req, res, next) {
    Consulta.listNomes()
      .then(listas => {
        res.jsonp(listas)
      })
      .catch(erro => {
        res.render('erro em GET /consultas/nomes')
      })
});

// GET /consultas/interv (sem repetições e ordenado alfabeticamente)
router.get('/consultas/interv', function(req, res, next) {
    Consulta.listInterv()
      .then(listas => {
        res.jsonp(listas)
      })
      .catch(erro => {
        res.render('erro em GET /consultas/interv')
      })
});


/*
GET /consultas 
GET /consultas?idade=YYYY
GET /consultas?sexo=XYX
*/
router.get('/consultas', function(req, res, next) {
    if(req.query.idade){
        Consulta.listIdade(req.query.idade)
        .then(listas => {
            res.jsonp(listas)
        })
        .catch(erro => {
            res.render('erro em GET /consultas?idade=YYYY')
        })
    }
    else if(req.query.sexo){
        Consulta.listSexo(req.query.sexo)
        .then(listas => {
            res.jsonp(listas)
        })
        .catch(erro => {
            res.render('erro em GET /consultas?sexo=XYX')
        })
    }
    else{
        Consulta.list()
        .then(listas => {
            res.jsonp(listas)
        })
        .catch(erro => {
            res.render('erro em GET /consultas')
        })
    }
});

// POST /consultas
router.post('/consultas', function(req, res, next) {
    Consulta.insert(req.body)
      .then(dados => {
        res.jsonp(dados)
      })
      .catch(erro => {
        res.render('erro em POST /consultas')
      })
});

// DELETE /consultas/:id
router.delete('/consultas/:id', function(req, res, next) {
    Consulta.delete(req.params.id)
      .then(dados => {
        res.jsonp(dados)
      })
      .catch(erro => {
        res.render('erro em DELETE /consultas/:id')
      })
});

module.exports = router;
