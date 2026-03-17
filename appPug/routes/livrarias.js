var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('livraria', { title: 'Express' });
});

router.get('/livros', function(req, res){
  res.render('livros', { criador: 'Jô Soares', obra: 'O Xangô de Baker Street', lancamento: '1995' });
});

router.get('/autores', function(req, res){
  res.render('autores', { autor: 'Jô Soares', local: 'Rio de Janeiro', data1: '1938' });
});


module.exports = router;
