var form = document.querySelector('form')

var emailInput = document.querySelector('input#email')
var passwordInput = document.querySelector('input#password')

var messageElement = document.createElement()

form.onsubmit = function (event) {
    event.preventDefault()

    try {
    registerUser {
        emailInput.value,
        passworde.value
    } catch(error) {
        messageElement.innerText = error.message

        document.body.append(messageElement)
    }
    form.reset()
}
emailInput.oninput = function () {
    document.body.removeChild(messageElement)

    messageElement.innerText = ''
}
}



