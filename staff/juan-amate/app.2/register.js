// acceder al form del register
var form = document.querySelector("form");

// acceder a los datos del form
var nameInput = form.querySelector("input#name");
var ageInput = form.querySelector("input#age");
var emailInput = form.querySelector("input#email");
var passwordInput = form.querySelector("input#password");

var feedbackPannel = document.querySelector('.feedback')
feedbackPannel.style.display = 'none'

// crear el mensaje de error y estilo del mensaje
var messageElement = document.createElement("p");

// crea evento al hacer clic en el boton para paralizar el formulario
form.onsubmit = function (event) {
  event.preventDefault();

  // creamos las variables con los elementos del formulario
  var name = nameInput.value;
  var age = Number(ageInput.value);
  var email = emailInput.value;
  var passport = passwordInput.value;

  // prueba a guardar los datos del formulario
  try {
    registerUser(name, age, email, password);
    // limpia el formulario
    form.reset();
    
    // si salta un error, lanza el mensaje de error
  } catch (error) {
    feedbackPannel.innerText = error.message;
    feedbackPannel.style.display = 'block'
    // inserta el mensaje de error
    document.body.appendChild(messageElement);
  }
};
// al hacer input sobre name, limpia el mensaje de error
nameInput.oninput = function (event) {
  document.body.removeChild(messageElement);

  messageElement.innerText = "";
};
// funcion para borrar formulario al hacer click en name
nameInput.onclick = function () {
  feedbackPannel.style.display = 'none'
}
//mismo comportamiento para el resto de campos del formulario
ageInput.onclick = nameInput.onclick
emailInput.onclick = nameInput.onclick
passwordInput.onclick = nameInput.onclick
