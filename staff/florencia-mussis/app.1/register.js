var form = document.querySelector("form");

var nameInput = document.querySelector("#name");
var ageInput = document.querySelector("#age");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");

var messageElement = document.createElement("p");
messageElement.style.color = "white";
messageElement.style.backgroundColor = "black";
messageElement.style.width = "400 px";
messageElement.style.height = "200px ";
messageElement.style.position = "absolute ";
messageElement.style.top = "200px";
messageElement.style.right = "200px";
messageElement.style.display = "flex";
messageElement.style.alignItems = "center";
messageElement.style.justifyContent = "center";
messageElement.style.fontSize = "1.2rem";

form.onsubmit = function (event) {
  event.preventDefault();

  try {
    registerUser(
      nameInput.value,
      ageInput.value,
      emailInput.value,
      passwordInput.value
    );
    form.reset();
    // nameInput.value=''
    // ageInput.value=''
    // emailInput.value=''
    // passwordInput.value=''
  } catch (error) {
    messageElement.innerText = error.message;

    document.body.appendChild(messageElement); //lo incrusta en el body
  }

};

nameInput.oninput = function () {
  document.body.removeChild(messageElement);

  messageElement.innerText = "";
};
