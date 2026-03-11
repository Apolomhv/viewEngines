var express = require('express');
var router = express.Router();

router.get('/loja', (req, res) => {
  res.render('loja')
})

router.get('/loja/produtos', (req, res) => {
  res.render('produtos')
})

router.get('/loja/carrinho', (req, res) => {
  res.render('carrinho')
})