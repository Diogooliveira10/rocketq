const express = require('express')

const route = express.Router() // Cons route guarda todas as funcionalidades de Router que o express tem.

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

module.exports = route // Exportando o arquivo route