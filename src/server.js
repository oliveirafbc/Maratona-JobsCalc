const express = require("express")
const server = express()
const routes = require("./routes")

// habilitar arquivos estaticos. Todos files dentro de public em uma rota
server.use(express.static("public"))

server.use(routes)
// ATIVAR server:    npm run dev



server.listen(3000,() => console.log('rodando..'))





