var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('lojas', { title: 'Loja Online' });
});

router.get('/produtos', function(req, res) {
  res.render('produtos', { title: 'Produtos' });
});

router.get('/carrinho', function(req, res) {
  res.render('carrinho', { title: 'Carrinho' });
});

module.exports = router;