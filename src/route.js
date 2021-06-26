const express = require('express')
const QuestionControlle = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() // Cons route guarda todas as funcionalidades de Router que o express tem.

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionControlle.create)
route.post('/question/:room/:question/:action', QuestionControlle.index)

module.exports = route // Exportando o arquivo route