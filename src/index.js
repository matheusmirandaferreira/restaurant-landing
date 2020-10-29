const express = require('express')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')

const app = express();

const {
    homePage,
    restaurantes,
    cardapio,
    lives,
    contato,
    cadastro,
    login,
    forgotPassword,
    resetPassword,
    laVieEnFood,
    parkFood,
    liveFoods,
 } = require('./pages');
 
nunjucks.configure('src/html', {
    express: app,
    noCache: true,
})

app.use(express.json())
.use(bodyParser.urlencoded({ extended: false }))
//arquivos staticos
.use(express.static('public'))
//rotas de navegação
.get('/', cadastro)
.get('/login', login)
.get('/home', homePage)
.get('/restaurantes', restaurantes)
.get('/cardapio', cardapio)
.get('/lives', lives)
.get('/contato', contato)
.get('/forgot-password', forgotPassword)
.get('/reset-password', resetPassword)
.get('/restaurants/lavieenfood', laVieEnFood)
.get('/restaurants/parkfood', parkFood)
.get('/restaurants/livefoods', liveFoods)

require('./app/controllers/index')(app)

app.listen(3000)