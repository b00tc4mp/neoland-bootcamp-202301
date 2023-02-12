var register = {}
register.view = document.querySelector (".register");
//acceder al form del documento y elegir dentro de los elementos del form
register.view.classList.add("off")
register.form = register.view.querySelector("form")
//acceder a los input del form *remember to put the wordInput
register.nameInput = register.form.querySelector("input#name");
register.ageInput = register.form.querySelector("input#age");
register.emailInput = register.form.querySelector("input#email");
register.passwordInput = register.form.querySelector("input#password");

register.feedback=register.view.querySelector(".feedback");
register.feedback.classList.add("off");

register.loginlink = register.view.querySelector ('a');

//onsubmit refers to the bottom and where the info goes (cloud
// event - event.preventDefault makes the info be listed

register.form.onsubmit = function(event) {
    event.preventDefault()

    var name = register.nameInput.value
    var age = Number(register.ageInput.value)
    var email = register.emailInput.value
    var password = register.passwordInput.value 

    try {
        registerUser(name,age,email,password);

        register.form.reset();

        register.view.classList.add("off")
        login.view.classList.remove("off")
    } catch (error) {
        //if the try doesn't work, the path will be continue in the cath part
        //so a window appears with the error mesage already set. 

        register.feedback.innerText = error.message
        register.feedback.classList.remove("off")
    }
    register.nameInput.onclick = function(event){
        register.feedback.classList.add("off")
    }
}

register.ageInput.onclick = register.nameInput.onclick
register.emailInput.onclick = register.nameInput.onclick
register.passwordInput.onclick = register.nameInput.onclick

register.loginlink.onclick = function(event) {
    event.preventDefault()

    register.view.classList.add("off")
    login.view.classList.remove("off")
}

