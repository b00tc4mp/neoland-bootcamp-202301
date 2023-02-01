var register = {} //crea un objeto

register.view = document.querySelector(".register") 
register.view.classList.add("off") //agrega el off que definio en css
register.form= register.view.querySelector("form");

register.nameInput = register.form.querySelector("input#name");
register.ageInput = register.form.querySelector("input#age");
register.emailInput = register.form.querySelector("input#email");
register.passwordInput = register.form.querySelector("input#password");

register.feedback = register.view.querySelector(".feedback")// acceda a feedback que es un p 
register.feedback.classList.add("off") //agrega el off que definio en css
register.loginLink = register.view.querySelector("a")


// no sucede cuando se carga, solo cuando se ejecute el formulario
register.form.onsubmit = function (event) {
  event.preventDefault() //que no se comporte por defecto, (se agrega un handler al evento)

  var name = register.nameInput.value
  var age = Number (register.ageInput.value)
  var email = register.emailInput.value
  var password = register.passwordInput.value

  try {
    registerUser(name, age, email, password) //ejecutamos la funcion que creamos en logic
    
    register.form.reset() // si no hubo problema, que resetee
 
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


register.ageInput.onclick = register.nameInput.onclick // que se repita con los otros inputs lo mismo que con name
register.emailInput.onclick = register.nameInput.onclick 
register.passwordInput.onclick = register.nameInput.onclick

register.loginLink.onclick = function(event){
  event.preventDefault()

  register.view.classList.add("off")
  login.view.classList.remove("off")
}