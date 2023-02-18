var register = {} //crea un objeto

register.view = document.querySelector(".register") 
register.view.classList.add("off") //agrega el off que definio en css

register.form= document.querySelector("form");
register.nameInput = document.querySelector("input#name");
register.ageInput = document.querySelector("input#age");
register.emailInput = document.querySelector("input#email");
register.passwordInput = document.querySelector("input#password");

register.feedback = register.view.querySelector(".feedback")// acceda a feedback que es un p 
register.feedback.classList.add("off") //agrega el off que definio en css


// var messageElement = document.createElement("p");
// messageElement.style.color = "white";
// messageElement.style.backgroundColor = "black";
// messageElement.style.width = "400 px";
// messageElement.style.height = "200px ";
// messageElement.style.position = "absolute ";
// messageElement.style.top = "200px";
// messageElement.style.right = "200px";
// messageElement.style.display = "flex";
// messageElement.style.alignItems = "center";
// messageElement.style.justifyContent = "center";
// messageElement.style.fontSize = "1.2rem";


// no sucede cuando se carga, solo cuando se ejecute el formulario
register.form.onsubmit = function (event) {
  event.preventDefault(); //que no se comporte por defecto, (se agrega un handler al evento)

  var name = register.nameInput.value
  var age = Number (register.ageInput.value)
  var email = register.emailInput.value
  var password = register.passwordInput.value

  try {
    registerUser(name, age, email, password) //ejecutamos la funcion que creamos en logic
    
    register.form.reset(); // si no hubo problema, que resetee
 
    register.view.classList.add("off") // si funciona el registro que se apague
    login.view.classList.remove("off") // que se prenda el login que estaba apagado

  } catch (error) {
   register.feedback.innerText = error.message; //si hay error, lanzamos el error que definimos en logic
   register.feedback.classList.remove("off") // prendemos el feedback que nacio apagado
  }
}

register.nameInput.onclick = function (event) { //cuando hacemos click en name que se apague el feedback
  register.feedback.classList.add("off") 
}


register.ageInput.onclick = register.nameInput.onclic // que se repita con los otros inputs lo mismo que con name
register.emailInput.onclick = register.nameInput.onclic 
register.passwordInput.onclick = register.nameInput.oncli