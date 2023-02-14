



// accedes al form del register 
var form = document.querySelector("form");
// accedes a los diferentes inputs del register 
var nameInput = document.querySelector("#name");
var ageInput = document.querySelector("#age");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
// le dices que cree un "p" para el mensaje de error.
var messageElement = document.createElement("p");
// style del mensaje que da de error 
messageElement.style.color = "whitesmoke";
messageElement.style.backgroundColor = "black";
messageElement.style.borderRadius = "5px";
messageElement.style.position = "absolute";
messageElement.style.marginTop = " 300px";
messageElement.style.fontSize = " 25px";
messageElement.style.padding = "50px";
messageElement.style.border = "solid 5px";
//
form.onsubmit = function (event) {
  event.preventDefault(); // no se refresque por default

  try { // control de errores 
    registerUser(
      nameInput.value,
      ageInput.value,
      emailInput.value,
      passwordInput.value
    );
    form.reset(); // resetea el formulario cuando le das submit
  } catch (error) { // da el menssage creado en logica 
    messageElement.innerText = error.message;
    document.body.appendChild(messageElement);
  }
};
// este codigo es para que se quite el mensaje cuando das clic
// esto se podria repetir con los otros inputs
// esta comentado porque da error  
// nameInput.oninput = function () {
//   document.body.removeChild(messageElement); 
//   messageElement.innerText = "";
// }



