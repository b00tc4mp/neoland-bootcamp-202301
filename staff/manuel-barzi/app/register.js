var register = {}

register.main = document.querySelector('.register')
register.form = register.main.querySelector('form')
register.nameInput = register.form.querySelector('input#name')
register.ageInput = register.form.querySelector('input#age') 
register.emailInput = register.form.querySelector('input#email')
register.passwordInput = register.form.querySelector('input#password')

register.feedback = register.main.querySelector('.feedback')
register.feedback.classList.add('off')

register.form.onsubmit = function(event) {
    event.preventDefault()

    var name = register.nameInput.value
    var age = Number(register.ageInput.value)
    var email = register.emailInput.value
    var password = register.passwordInput.value

    try {
        registerUser(name, age, email, password)

        register.form.reset()

        register.main.classList.add('off')
        login.main.classList.remove('off')
    } catch(error) {
        //alert(error.message)
        register.feedback.innerText = error.message
        register.feedback.classList.remove('off')
    }
}

register.nameInput.onclick = function(event) {
    register.feedback.classList.add('off')
}

register.ageInput.onclick = register.nameInput.onclick
register.emailInput.onclick = register.nameInput.onclick
register.passwordInput.onclick = register.nameInput.onclick