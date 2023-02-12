var login= {}

login.view = document.querySelector(".login");
//login.view.classList.add("off")
login.form = login.view.querySelector("form");
login.emailInput = login.form.querySelector("input#email");
login.passwordInput = login.form.querySelector("input#password");

login.feedback = login.view.querySelector(".feedback");
login.feedback.classList.add('off');
//create a class for the anchor on HTML
login.registerLink = login.view.querySelector ('a');

login.form.onsubmit = function(event){
    event.preventDefault()

var email = login.emailInput.value
var password = login.passwordInput.value

try {
    authenticateUser(email, password)
    window.email = email

    login.form.reset()

    login.view.classList.add ("off")
    home.view.classList.remove('off')
    home.listPublicStickies()
}
catch (error) {
    login.feedback.innerText = error.message
    login.feedback.classList.remove('off')
}
}

login.emailInput.onclick = function(event){
    login.feedback.classList.add("off")
}
login.passwordInput.onclick=login.emailInput.onclick

//refers to the button on login view that says register
login.registerLink.onclick = function(event) {
    event.preventDefault()

    login.view.classList.add("off")
    register.view.classList.remove("off")
}
