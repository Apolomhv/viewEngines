var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('lojas')
});

router.get('/produtos', function(req, res) {
  res.render('produtos')
});

router.get('/carrinho', function(req, res) {
  res.render('carrinho')
});

module.exports = router;