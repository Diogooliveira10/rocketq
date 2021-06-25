const express = require('express')
const QuestionControlle = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() // Cons route guarda todas as funcionalidades de Router que o express tem.

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))

//formato que o formulario de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionControlle.index)
route.post('/create-room', RoomController.create)

module.exports = route // Exportando o arquivo route