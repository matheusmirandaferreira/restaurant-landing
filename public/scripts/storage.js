function saveUserName() {
  const name = document.getElementById("name").value;
  return localStorage.setItem("userName", name);
}
