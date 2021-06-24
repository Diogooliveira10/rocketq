const express = require('express') // importando o express
const route = require('./route') // importando route
const path = require('path')

const server = express() // Executando o express e guardando no server

server.set('view engine', 'ejs') // está falando para express, que é o server, que a 'view engine' vai ser 'ejs'

server.use(express.static("public")) // Guardando conteúdo na pasta public

server.set('views', path.join(__dirname, 'views')) // Path pega o caminho da pasta aonde está o projeto. __dirname = src/

server.use(route) // " use --> Express use o arquivo 'route' "

server.listen(3000, () => console.log("RODANDO")) // Terminal