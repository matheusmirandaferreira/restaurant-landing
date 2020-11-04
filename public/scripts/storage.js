function saveUserName() {
  const name = document.getElementById("name").value;
  localStorage.setItem("userName", name);
}

if (document.querySelector("#welcome strong")) {
  const div = document.querySelector("#welcome strong");
  const userName = localStorage.getItem("userName");
  const firstName = userName.split(" ")[0]
  div.append(firstName);
}
