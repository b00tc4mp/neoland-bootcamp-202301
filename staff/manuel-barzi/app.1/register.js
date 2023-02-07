var form = document.querySelector('form')

var nameInput = form.querySelector('input#name')
var ageInput = form.querySelector('input#age')
var emailInput = form.querySelector('input#email')
var passwordInput = form.querySelector('input#password')

form.onsubmit = function(event) {
    event.preventDefault()

    console.log(
        nameInput.value,
        ageInput.value,
        emailInput.value,
        passwordInput.value
    )
}