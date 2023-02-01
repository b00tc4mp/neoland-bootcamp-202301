var form = document.querySelector("form");

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");

var messageElement = document.createElement("p");
messageElement.style.color = "white";
messageElement.style.backgroundColor = "black";
messageElement.style.fontSize = "1.2rem";
messageElement.style.width = "150 px";
messageElement.style.height = "50px ";
messageElement.style.display = "flex";
messageElement.style.alignItems = "center";
messageElement.style.justifyContent = "center";

form.onsubmit = function (event) {
  event.preventDefault();

  try {
    // registerUser(emailInput.value, passwordInput.value); CAMBIAR FUNCION
  } catch (error) {
    messageElement.innerText = error.message;

    document.body.appendChild(messageElement); //lo incrusta en el html
  }
  form.reset();
};

emailInput.oninput = function () {
  document.body.removeChild(messageElement);

  messageElement.innerText = "";
};
