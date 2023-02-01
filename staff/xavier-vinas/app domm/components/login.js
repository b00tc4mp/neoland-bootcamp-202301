var login = {} // creamos un objeto

login.view = document.querySelector('.login') //accedemos al main del login

login.form = login.view.querySelector('form')// accedemos al form
//accedemos a los inputs del documento 
login.emailInput = login.form.querySelector('input#email')
login.passwordInput = login.form.querySelector('input#password')

login.feedback = login.view.querySelector('.feedback')//accedemos al p declarado como fedback
login.feedback.classList.add('off')// agregamos el off que definimos en css
// te lleva al register 
login.registerLink = login.view.querySelector('a')

login.form.onsubmit = function(event) {
    event.preventDefault() // controlar el comportamiento por fefault " refrescar pag"

    var email = login.emailInput.value
    var password = login.passwordInput.value

    try {
        authenticateUser(email, password)
        window.email= email


        login.form.reset()

        login.view.classList.add('off')
        home.view.classList.remove('off')
        //cuando se apaga el off  del home se ejecuta la funcion listpublic..
        home.listPublicStickies() 

    } catch(error) {
        login.feedback.innerText = error.message
        login.feedback.classList.remove('off')
    }
}

login.emailInput.onclick = function(event) {
    login.feedback.classList.add('off')
}
login.passwordInput.onclick = login.emailInput.onclick

login.registerLink.onclick = function(event) {
    event.preventDefault()

    login.view.classList.add('off')
    register.view.classList.remove('off')
}