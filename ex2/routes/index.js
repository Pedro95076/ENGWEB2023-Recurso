var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);

  axios.get('http://localhost:16016/consultas')
    .then(dados => {
      res.render('consultas', { consultas: dados.data, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro});
    });
});

router.get('/:id', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);

  axios.get('http://localhost:16016/consultas/' + req.params.id)
    .then(dados => {
      res.render('consulta', { consulta: dados.data, d: data });
       
    })
    .catch(erro => {
      res.render('error', {error: erro});
    });
});

router.get('/intervencoes/:id', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);

  axios.get('http://localhost:16016/consultas/' + req.params.id + '/intervencoes')
    .then(dados => {
      res.render('intervencoes', { intervencoes: dados.data, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro});
    });
});

module.exports = router;
