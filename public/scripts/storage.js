function saveUserName() {
  // pegar nome do usuario
  const name = document.getElementById("name").value;
  // salvar no localStorage
  localStorage.setItem("userName", name);
}

// encontrar a tag <strong>
if (document.querySelector("#welcome strong")) {
  // pegar a tag <strong>
  const div = document.querySelector("#welcome strong");
  // pegar o nome pelo localStorage
  const userName = localStorage.getItem("userName");
  // pegar o primeiro nome do usuário
  const firstName = userName.split(" ")[0]
  // inserir dado no HTML
  div.append(firstName);
}
