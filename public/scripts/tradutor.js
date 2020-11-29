//?header and footer
const txt1 = document.querySelector(".welcome k");
const txt6 = document.querySelector("footer div p");

//?home page
const txt = document.querySelector(".txt");
const txt2 = document.querySelector(".saudacoes h1");
const txt3 = document.querySelector(".contact k");
const txt4 = document.querySelector(".endpage > p");
const txt5 = document.querySelector("main header h1");

//?page Restaurants
const rtxt = document.querySelector("#LaVieenFood div p.card-descricao")
const rtxt1 = document.querySelector("#parkfood div p.card-descricao")
const rtxt2 = document.querySelector("#live-foods div p.card-descricao")
const rtxt3 = document.querySelectorAll(".card footer .button");

//?Lives
const ltxt = document.querySelector("#live-page .lives-explorer h1")
const ltxt1 = document.querySelector("#live-page .lives-explorer .descricao p")

//?Contact
const ctxt = document.querySelector("#conteudo > p");
const ctxt1 = document.querySelector("#conteudo main h2");
const ctxt2 = document.querySelector("main footer k");
const ctxt3 = document.querySelector("main footer a");

function traduzirHome() { 
  //Translate home page
  txt.innerHTML = "Hello, we are the XamiFood team, a restaurant chain that always values ​​the satisfaction of our customers. Created by the duo of friends Matheus and Tiago, who loved to cook and started selling their delicious recipes in a simple salon, today we already have 3 physical restaurants, two in Jundiaí and one in São Paulo, in addition to the delivery system that can be done here through the website or application. Come and meet us, I guarantee you will not regret it!";
  txt1.innerHTML = "Welcome";
  txt2.innerHTML = "Welcome to XamiFood.";
  txt3.innerHTML = "Contact us";
  txt5.innerHTML = "About us";
  //footer
  txt4.innerHTML = "All rights reserved, 2020. Xagal e Miranda";
  txt6.innerHTML = "Follow us too";
}

function destraduzirHome() {
  //Traduz home page
  txt.innerHTML =
    "Olá, somos a equipe XamiFood, uma rede de restaurantes que sempre preza pela satisfação do nosso cliente. Criado pela dupla de amigos Matheus e Tiago, que adoravam cozinhar e começaram vendendo suas deliciosas receitas em um simples salão, hoje já possuímos 3 restaurantes físicos, sendo dois em Jundiaí e um em São Paulo, além do sistema de delivery que pode ser feito aqui pelo site ou pelo aplicativo. Venha nos conhecer, garanto que não irá se arrepender!";
  txt1.innerHTML = "Bem-vindo(a)";
  txt2.innerHTML = "Bem-vindo(a) ao XamiFood.";
  txt3.innerHTML = "Entre em contato";
  txt4.innerHTML = "Direitos reservados, 2020. Xagal e Miranda";
  txt5.innerHTML = "Sobre nós";
  txt6.innerHTML = "Nos siga também";
}

function traduzirRestaurantes() {
  txt1.innerHTML = "Welcome";
  txt4.innerHTML = "All rights reserved, 2020. Xagal e Miranda";
  txt6.innerHTML = "Follow us too";

  rtxt.innerHTML = "Restaurant of French origin, with the most typical meals, come and try it.";
  rtxt1.innerHTML = "We are always thinking about your food and your comfort, come have fun with us.";
  rtxt2.innerHTML = "We always take care of your food and your well-being, come and meet us and have fun.";
  rtxt3.forEach((rtxt3) => rtxt3.innerHTML = "Learn more");
}

function destraduzirRestaurantes() {
  txt1.innerHTML = "Bem-vindo(a)";
  txt4.innerHTML = "Direitos reservados, 2020. Xagal e Miranda";
  txt6.innerHTML = "Nos siga também";

  rtxt.innerHTML = "Restaurante de origem francesa, com as mais tipicas refeições, venha experimentar.";
  rtxt1.innerHTML = "Estamos sempre pensando na sua comida e no seu conforto, venha se divertir com a gente.";
  rtxt2.innerHTML = "Cuidamos sempre da sua comida e do seu bem estar, venha nos conhecer e se divertir.";
  rtxt3.forEach((rtxt3) => rtxt3.innerHTML = "Saiba mais");
}

function traduzirMenu() {
  txt1.innerHTML = "Welcome";
  txt4.innerHTML = "All rights reserved, 2020. Xagal e Miranda";
  txt6.innerHTML = "Follow us too";
}

function destraduzirMenu() {
  txt1.innerHTML = "Bem-vindo(a)";
  txt4.innerHTML = "Direitos reservados, 2020. Xagal e Miranda";
  txt6.innerHTML = "Nos siga também";
}

function traduzirLives() {
  txt1.innerHTML = "Welcome";
  txt4.innerHTML = "All rights reserved, 2020. Xagal e Miranda";
  txt6.innerHTML = "Follow us too";

  ltxt.innerHTML = "Check out our kitchens!!!";
  ltxt1.innerHTML = "Take part in the vote among our customers, choose a day of your choice, and come and join us!"
}

function destraduzirLives() {
  txt1.innerHTML = "Bem-vindo(a)";
  txt4.innerHTML = "Direitos reservados, 2020. Xagal e Miranda";
  txt6.innerHTML = "Nos siga também";

  ltxt.innerHTML = "Conheça nossas cozinhas!!!";
  ltxt1.innerHTML = "Participe da votação entre nossos clientes, escolha um dia de sua preferência, e venha nos acompanhar !";
}

function traduzirContato() {
  txt1.innerHTML = "Welcome";
  txt4.innerHTML = "All rights reserved, 2020. Xagal e Miranda";
  txt6.innerHTML = "Follow us too";

  ctxt.innerHTML = "To contact the XamiFood team you can send an email to restaurante@xamifood.com.br via the text box below, or send a message via WhatsApp to 93723-9283.";
  ctxt1.innerHTML = "Send us complaints or suggestions.";
  ctxt2.innerHTML = "Let's thank you for your cooperation!";
  ctxt3.innerHTML = "Submit";
}

function destraduzirContato() {
  txt1.innerHTML = "Bem-vindo(a)";
  txt4.innerHTML = "Direitos reservados, 2020. Xagal e Miranda";
  txt6.innerHTML = "Nos siga também";

  ctxt.innerHTML = "Para entrar em contato com a equipe XamiFood você pode enviar um e-mail para restaurante@xamifood.com.br atravez da caixa de texto a baixo, ou enviar uma mensagem via WhatsApp para o número 93723-9283.";
  ctxt1.innerHTML = "Nos envie reclamações ou sugestões.";
  ctxt2.innerHTML = "Agradeçemos sua colaboração!";
  ctxt3.innerHTML = "Enviar";
}