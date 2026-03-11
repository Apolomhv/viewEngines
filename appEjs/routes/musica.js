var express = require('express');
var router = express.Router();

router.get('/musica', (req, res) => {
  res.render('musica', { title: 'Biblioteca Musical' })
})

router.get('/musica/artistas', (req, res) => {
  res.render('artistas')
})

router.get('/musica/albums', (req, res) => {
  res.render('albums')
})

module.exports = router;