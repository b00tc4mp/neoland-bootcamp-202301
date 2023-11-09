var form = document.querySelector('form')

var nameInput = form.querySelector('input#name')
var ageInput = form.querySelector('input#age')
var emailInput = form.querySelector('input#email')
var passwordInput = form.querySelector('input#password')

var feedbackPanel = document.querySelector('.feedback')
feedbackPanel.style.display = 'none'

form.onsubmit = function(event) {
    event.preventDefault()

    var name = nameInput.value
    var age = Number(ageInput.value)
    var email = emailInput.value
    var password = passwordInput.value

    try {
        registerUser(name, age, email, password)

        form.reset()

        alert('User registration successful')
    } catch(error) {
        //alert(error.message)
        feedbackPanel.innerText = error.message
        feedbackPanel.style.display = 'block'
    }
}

nameInput.onclick = function(event) {
    feedbackPanel.style.display = 'none'
}

ageInput.onclick = nameInput.onclick
emailInput.onclick = nameInput.onclick
passwordInput.onclick = nameInput.onclick