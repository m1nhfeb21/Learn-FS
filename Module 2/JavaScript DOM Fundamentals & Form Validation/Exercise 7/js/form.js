let form = document.getElementById("form-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("emailUser").value;

  let user = {
    username: username,
    email: email,
  };
  console.log(user);
});
