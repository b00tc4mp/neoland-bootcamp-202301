var login = {}

login.view = document.querySelector (".login")
// login.view.classList.add("off")


login.form = login.view.querySelector("form")
login.emailInput = login.form.querySelector("input#email")
login.passwordInput = login.form.querySelector("input#password")

login.feedback = login.view.querySelector("feedback")
login.feedback.classList.add("off")

login.registerLink = login.view.querySelector("a")

var messageElement = document.createElement("p");
messageElement.style.color = "white";
messageElement.style.backgroundColor = "black";
messageElement.style.fontSize = "1.2rem";
messageElement.style.width = "150 px";
messageElement.style.height = "50px ";
messageElement.style.display = "flex";
messageElement.style.alignItems = "center";
messageElement.style.justifyContent = "center";

login.form.onsubmit = function (event) {
  event.preventDefault()

  var email = login.emailInput.value
  var password = login.passwordInput.value

  try {
    authenticateUser(email,password)

    login.form.reset()

    login.view.classList.add("off")
    home.view.classList.remove("off")

  } catch (error) {
   login.feedback.innerText = error.message;
   login.feedback.classList.remove("off")
  }
}

login.emailInput.oninput = function (event) {
  login.feedback.classList.add("off")
}

login.passwordInput.onclick = login.emailInput.onclick

login.registerLink.onclick = function(event){
  event.preventDefault()

  login.view.classList.add("off")
  register.view.classList.remove("off")
}