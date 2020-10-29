function homePage(req, res) {
    return res.render('index.html')
}

function restaurantes(req, res) {
    return res.render('restaurantes.html')
}

function cardapio(req, res) {
    return res.render('cardapio.html')
}

function lives(req, res) {
    return res.render('lives.html')
}

function contato(req, res) {
    return res.render('contato.html')
}

function cadastro(req, res) {
    return res.render('cadastro.html')
}

function login(req, res) {
    return res.render('login.html')
}

function forgotPassword(req, res) {
    return res.render('forgot-password.html')
}

function resetPassword(req, res) {
    return res.render('reset_password.html')
}

function laVieEnFood(req, res) {
    return res.render('restaurants/lavieen-food.html')
}

function parkFood(req, res) {
    return res.render('restaurants/park-food.html')
}

function liveFoods(req, res) {
    return res.render('restaurants/live-foods.html')
}

module.exports = {
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
}