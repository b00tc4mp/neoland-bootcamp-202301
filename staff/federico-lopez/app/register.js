debugger;

var form = document.querySelector("form");

var nameInput = document.querySelector("#name");
var ageInput = document.querySelector("#age");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var messageElement = document.createElement("p");
messageElement.style.color = "red";

form.onsubmit = function (event) {
  event.preventDefault();

  try {
    registerUser(
      nameInput.value,
      ageInput.value,
      emailInput.value,
      passwordInput.value
    );
  } catch (error) {
    messageElement.innerText = error.message;

    document.body.appendChild(messageElement);
  }

  form.reset();
};

nameInput.oninput = function () {
  document.body.removeChild(messageElement);

  messageElement.innerText = "";
};
