var express = require('express');
var router = express.Router();

router.get('/livraria', (req, res) => {
  res.render('livraria')
})

router.get('/livraria/livros', (req, res) => {
  res.render('livros')
})

router.get('/livraria/autores', (req, res) => {
  res.render('autores')
})