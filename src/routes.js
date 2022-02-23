// Bibliote para criar servidor
const express = require('express');
// vai criar as rotas/caminhos
const routes = express.Router()

// request , response
/*routes.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})*/

const views = __dirname + "/views/"

const profile = {
    name: "Fabricio",
    avatar: "https://avatars.githubusercontent.com/u/34220709?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

// Não envia mais o html pronto


module.exports = routes;