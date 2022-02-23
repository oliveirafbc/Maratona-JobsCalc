const express = require("express")
const server = express()
const routes = require("./routes")

// permite usar contexto ejs no html  <% EJS AQUI   %>. Trocar todos html por ejs. Usando template engine
server.set('view engine','ejs')

// habilitar arquivos estaticos. Todos files dentro de public em uma rota
server.use(express.static("public"))

server.use(routes)

server.listen(3000,() => console.log('rodando..'))

// ATIVAR server:    npm run dev
// PAREI MINUTO 3:45:00




