const sqlite3 = require("sqlite3")
const { open } = require("sqlite") // Procura open dentro do sqlite

module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite', // Nome do banco de dados
        driver: sqlite3.Database,
    })